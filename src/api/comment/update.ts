import { redirect } from "next/navigation";
import fetchExtended from "../fetchExtended";
import { reqObjectToBody } from "../utils";
import { ICommentReqOptional } from ".";

/**
 * @param {number} id comment id
 * @param {ICommentReqOptional} req
 * { content? }
 * @returns
 */
const update = async (id: number, req: ICommentReqOptional) => {
  const body = reqObjectToBody(req);
  const res = await fetchExtended(`/comment/${id}`, {
    method: "patch",
    body,
  });

  if (res.status === 401) {
    redirect("/login");
  }
};

export default update;
