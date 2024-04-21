import { redirect } from "next/navigation";
import fetchExtended from "../fetchExtended";
import { reqObjectToBody } from "../utils";
import { IWikiReq } from ".";

/**
 * @param {IPatternPracticeReq} req
 * { title, content, mustRead }
 * @returns
 */
const create = async (req: IWikiReq) => {
  const body = reqObjectToBody(req);
  const res = await fetchExtended("/wiki", {
    method: "post",
    body,
  });

  if (res.status === 401) {
    redirect("/login");
  }
};

export default create;
