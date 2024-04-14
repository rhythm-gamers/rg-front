import { redirect } from "next/navigation";
import fetchExtended from "../fetchExtended";
import { reqObjectToBody } from "../utils";
import { IPatternPracticeReqOptional } from ".";

/**
 * @param {number} id pattern practice id
 * @param {ILevelTestReq} req
 * { title?, level?, keyNum?, imgSrc?, noteSrc?, musicSrc?, patternInfo? }
 * @returns
 */
const update = async (id: number, req: IPatternPracticeReqOptional) => {
  const body = reqObjectToBody(req);
  const res = await fetchExtended(`/practice/${id}`, {
    method: "patch",
    body,
  });

  if (res.status === 401) {
    redirect("/login");
  }
};

export default update;
