import { redirect } from "next/navigation";
import fetchExtended from "../fetchExtended";
import { IPatternPracticeReq } from ".";

/**
 * @param {IPatternPracticeReq} req
 * { title, level, keyNum, imgSrc, noteSrc, musicSrc, patternInfo }
 * @returns
 */
const create = async (req: IPatternPracticeReq) => {
  const body = JSON.stringify(req);
  const res = await fetchExtended("/practice", {
    method: "post",
    body,
  });

  if (res.status === 401) {
    redirect("/login");
  }
};

export default create;
