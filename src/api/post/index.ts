import create from "./create";
import deleteOne from "./deleteOne";
import getAllByBoardName from "./getAllByBoardName";
import getOne from "./getOne";
import increaseLike from "./increaseLike";
import update from "./update";

export interface IPostReq {
  title: string;
  content: string;
  boardName: string;
}

export interface IPostReqOptional
  extends Partial<Omit<IPostReq, "boardName">> {}

export interface IGetAllPosts {
  posts: IPost[];
  allCount: number;
}

export interface IGetOnePost {
  post: IPost;
}

interface IPost {
  id: number;
  title: string;
  content: string;
  views: number;
  likes: number;
  modified: boolean;
  user: IPostUser;
  createdAt: string;
  modifiedAt: string;
  commentCount: number;
}

interface IPostUser {
  id: number;
  nickname: string;
}

const PostAPI = {
  create,
  getOne,
  getAllByBoardName,
  increaseLike,
  update,
  deleteOne,
};

export default PostAPI;
