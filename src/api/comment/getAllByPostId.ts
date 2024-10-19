import { ICommentWithCount } from ".";
import fetchExtended from "../fetchExtended";
import { IPaging } from "../interfaces";
import { makePagingQueryString, parseJsonWithWrap } from "../utils";

interface ICommentGetAll extends IPaging {
  postId: number;
}

/**
 *
 * @param {ICommentGetAll} req
 * { postId, page, limit? }
 * @returns
 */
const getAllByPostId = async ({
  postId,
  page,
  limit,
}: ICommentGetAll): Promise<{ data: ICommentWithCount }> => {
  const pagingQuery = makePagingQueryString(page, limit);
  const res = await fetchExtended(`/comment/post/${postId}${pagingQuery}`, {
    method: "get",
  });
  const json = await res.json();
  const parsedJson = parseJsonWithWrap(json);
  return parsedJson;
};

export default getAllByPostId;
