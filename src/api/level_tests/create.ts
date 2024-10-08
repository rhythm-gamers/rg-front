import { redirect } from "next/navigation";
import { ILevelTestReq } from ".";
import fetchExtended from "../fetchExtended";

/**
 * @param {ILevelTestReq} req
 * { title, level, goalRate, keyNum, imgSrc, noteSrc, musicSrc, patternInfo }
 * @returns
 */
const create = async (req: ILevelTestReq) => {
  const body = JSON.stringify(req);
  const res = await fetchExtended("/level-test", {
    method: "post",
    body,
  });

  if (res.status === 401) {
    redirect("/login");
  }
};

export default create;
