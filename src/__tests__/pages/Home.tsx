import { render, screen } from "@testing-library/react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../../components/pages/Home";

describe("Pages/Home", () => {
  test("Home Images 렌더링 확인", async () => {
    render(
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>,
      { wrapper: BrowserRouter }
    );
    const images = await screen.findAllByRole("img");
    for (let img of images) {
      expect(img).toBeInTheDocument();
    }
  });
});
