import { redirect } from "next/navigation";
import fetchExtended from "../fetchExtended";
import { reqObjectToBody } from "../utils";
import { IPostReqOptional } from ".";

/**
 * @param {number} id post id
 * @param {IPostReqOptional} req
 * { title?, content? }
 * @returns
 */
const update = async (id: number, req: IPostReqOptional) => {
  const body = reqObjectToBody(req);
  const res = await fetchExtended(`/post/${id}`, {
    method: "patch",
    body,
  });

  if (res.status === 401) {
    redirect("/login");
  }
};

export default update;
