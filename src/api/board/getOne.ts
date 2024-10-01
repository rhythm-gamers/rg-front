import { IBoardRes } from ".";
import fetchExtended from "../fetchExtended";
import { parseJsonWithWrap } from "../utils";

/**
 *
 * @param boardName board title
 * @returns
 */
const getOne = async (boardName: string): Promise<{ data: IBoardRes }> => {
  const parsedBoardName = new URLSearchParams(boardName);
  const res = await fetchExtended(`/board/spec/${parsedBoardName}`, {
    method: "get",
  });
  const json = await res.json();
  const parsedJson = parseJsonWithWrap(json);
  return parsedJson;
};

export default getOne;
