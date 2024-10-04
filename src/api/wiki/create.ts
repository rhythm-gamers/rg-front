import { redirect } from "next/navigation";
import fetchExtended from "../fetchExtended";
import { IWikiReq } from ".";

/**
 * @param {IPatternPracticeReq} req
 * { title, content, mustRead }
 * @returns
 */
const create = async (req: IWikiReq) => {
  const body = JSON.stringify(req);
  const res = await fetchExtended("/wiki", {
    method: "post",
    body,
  });

  if (res.status === 401) {
    redirect("/login");
  }
};

export default create;
