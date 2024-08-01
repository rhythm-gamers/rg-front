import PatternPracticeTP from "@/components/templates/PatternPracticeTP/PatternPracticeTP";
import PPKeyNumTabs from "@/components/organisms/PPKeyNumTabs/PPKeyNumTabs";
import PPPracticeCardsFilter from "@/components/organisms/PPPracticeCardsFilter/PPPracticeCardsFilter";
import PPPracticeCards from "@/components/organisms/PPPracticeCards/PPPracticeCards";
import PatternPracticeAPI from "@/api/pattern_practice";

const PatternPractice = async () => {
  const { data: practices } = await PatternPracticeAPI.getAll();
  return (
    <PatternPracticeTP
      KeyNumTabs={<PPKeyNumTabs keyNums={[4, 5, 6]} />}
      PracticeCardsFilter={<PPPracticeCardsFilter />}
      PracticeCards={<PPPracticeCards practices={practices} />}
    />
  );
};

export default PatternPractice;
