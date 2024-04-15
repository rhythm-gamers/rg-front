import { redirect } from "next/navigation";
import { ICommentReq } from ".";
import fetchExtended from "../fetchExtended";
import { reqObjectToBody } from "../utils";

/**
 * @param {ICommentReq} req
 * { content, postId, parentId? }
 * @returns
 */
const create = async (req: ICommentReq) => {
  const body = reqObjectToBody(req);
  const res = await fetchExtended("/comment", {
    method: "post",
    body,
  });

  if (res.status === 401) {
    redirect("/login");
  }
};

export default create;
