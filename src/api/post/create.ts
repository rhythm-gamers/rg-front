import { redirect } from "next/navigation";
import fetchExtended from "../fetchExtended";
import { reqObjectToBody } from "../utils";
import { IPostReq } from ".";

/**
 * @param {IPostReq} req
 * { title, content, boardName }
 * @returns
 */
const create = async (req: IPostReq) => {
  const body = reqObjectToBody(req);
  const res = await fetchExtended("/post", {
    method: "post",
    body,
  });

  if (res.status === 401) {
    redirect("/login");
  }
};

export default create;
