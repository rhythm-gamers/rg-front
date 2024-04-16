import getAllAtLevelTest from "./getAllAtLevelTest";
import getAllAtPractice from "./getAllAtPractice";

export interface IRankingRes {
  currentRate: string;
  updateAt: string;
  user: {
    nickname: string;
  };
}

const RankingAPI = {
  getAllAtLevelTest,
  getAllAtPractice,
};

export default RankingAPI;
