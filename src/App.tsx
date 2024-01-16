import { Navigate, Outlet, Route, Routes } from "react-router-dom";
import BoxAnimation from "./components/pages/BoxAnimation";
import Header from "./components/organisms/Header";
import Login from "./components/pages/Login";
import RhythmLevelTests from "./components/pages/RhythmLevelTests";
import PatternPractice from "./components/pages/PatternPractice";

function App() {
  return (
    <Routes>
      <Route path="*" element={<Navigate to="/" replace />} />
      <Route
        element={
          <>
            <Header />
            <Outlet />
          </>
        }
      >
        <Route path="/" element={<BoxAnimation />} />
        <Route path="/login" element={<Login />} />
        <Route path="/rhythm_level_tests" element={<RhythmLevelTests />} />
        <Route path="/pattern_practice" element={<PatternPractice />} />
      </Route>
    </Routes>
  );
}

export default App;
