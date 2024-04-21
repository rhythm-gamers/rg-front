import reportComment from "./reportComment";
import reportPost from "./reportPost";
import reportUser from "./reportUser";

export interface IReportReq {
  targetId: number;
  reason: string;
}

export interface IReportRes {
  targetId: number;
  reason: string;
}

const ReportAPI = {
  reportComment,
  reportPost,
  reportUser,
};

export default ReportAPI;
