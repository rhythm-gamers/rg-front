// 이후, 유저 정보에 관한 항목들 추가해야함.

import create from "./create";
import deleteOne from "./deleteOne";
import getAllByPostId from "./getAllByPostId";
import increaseLike from "./increaseLike";
import update from "./update";

export interface ICommentReq {
  content: string;
  postId: number;
  parentId?: number;
}

export interface ICommentReqOptional
  extends Partial<Pick<ICommentReq, "content">> {}

export interface ICommentRes {
  id: number;
  postId: number;
  parentId: number;
  content: string;
}

const CommentAPI = {
  create,
  getAllByPostId,
  increaseLike,
  update,
  deleteOne,
};

export default CommentAPI;
