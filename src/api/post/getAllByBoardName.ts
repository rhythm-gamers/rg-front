import { IPostRes } from ".";
import fetchExtended from "../fetchExtended";
import { IPaging } from "../interfaces";
import { makePagingQueryString, parseJsonWithWrap } from "../utils";

interface IBoardGetAll extends IPaging {
  boardName: string;
}

/**
 *
 * @param {IBoardGetAll} req
 * { boardName, page, limit? }
 * @returns
 */
const getAllByBoardName = async ({
  boardName,
  page,
  limit,
}: IBoardGetAll): Promise<{ data: IPostRes[] }> => {
  const pagingQuery = makePagingQueryString(page, limit);
  const res = await fetchExtended(`/post/board/${boardName}${pagingQuery}`, {
    method: "get",
  });
  const json = await res.json();
  const parsedJson = parseJsonWithWrap(json);
  return parsedJson;
};

export default getAllByBoardName;