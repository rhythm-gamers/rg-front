import { redirect } from "next/navigation";
import fetchExtended from "../fetchExtended";
import { reqObjectToBody } from "../utils";
import { IBoardReqOptional } from ".";

/**
 * @param {string} boardName board title
 * @param {IBoardReqOptional} req
 * { description? }
 * @returns
 */
const update = async (boardName: string, req: IBoardReqOptional) => {
  const body = reqObjectToBody(req);
  const parsedBoardName = new URLSearchParams(boardName);
  const res = await fetchExtended(`/board/${parsedBoardName}`, {
    method: "patch",
    body,
  });

  if (res.status === 401) {
    redirect("/login");
  }
};

export default update;
