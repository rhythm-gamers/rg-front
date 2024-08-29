import PatternPracticeTP from "@/components/templates/PatternPracticeTP/PatternPracticeTP";
import PPKeyNumTabs from "@/components/organisms/PPKeyNumTabs/PPKeyNumTabs";
import PPPracticeCardsFilter from "@/components/organisms/PPPracticeCardsFilter/PPPracticeCardsFilter";
import PPPracticeCards from "@/components/organisms/PPPracticeCards/PPPracticeCards";
import PatternPracticeAPI from "@/api/pattern_practice";
import Footer from "@/components/organisms/Footer/Footer";

const PatternPractice = async () => {
  const { data: practices } = await PatternPracticeAPI.getAll();
  console.log(practices);
  return (
    <>
      <PatternPracticeTP
        KeyNumTabs={<PPKeyNumTabs keyNums={[4, 5, 6]} />}
        PracticeCardsFilter={<PPPracticeCardsFilter />}
        PracticeCards={<PPPracticeCards practices={practices} />}
      />
      <Footer />
    </>
  );
};

export default PatternPractice;
