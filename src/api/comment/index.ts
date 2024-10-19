// 이후, 유저 정보에 관한 항목들 추가해야함.

import { IUserProfile } from "@/components/molecules/UserProfile/UserProfile";
import create from "./create";
import deleteOne from "./deleteOne";
import getAllByPostId from "./getAllByPostId";
import increaseLike from "./increaseLike";
import update from "./update";
import { IUser } from "../post";

export interface ICommentReq {
  content: string;
  postid: number;
  parentId?: number;
} //TODO: postid 인터페이스 변경해야함

export interface ICommentReqOptional
  extends Partial<Pick<ICommentReq, "content">> {}

export interface ICommentRes {
  id: number;
  parentId: number;
  content: string;
  createdAt: string;
  user: IUser;
  reComments: ICommentRes[];
}

export interface ICommentWithCount {
  comments: ICommentRes[];
  commentCount: number;
}

const CommentAPI = {
  create,
  getAllByPostId,
  increaseLike,
  update,
  deleteOne,
};

export default CommentAPI;
