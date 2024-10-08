import fetchExtended from "../fetchExtended";
import { IPostReq } from ".";
import { revalidateFromTag } from "@/app/actions";

/**
 * @param {IPostReq} req
 * { title, content, boardName }
 * @returns
 */
const create = async (req: IPostReq) => {
  const body = JSON.stringify(req);
  await fetchExtended("/post", {
    method: "post",
    body,
  });
  revalidateFromTag("modifyPost");
};

export default create;
