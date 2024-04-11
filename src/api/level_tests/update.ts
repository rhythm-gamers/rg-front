import { redirect } from "next/navigation";
import { ILevelTestReqOptional } from ".";
import fetchExtended from "../fetchExtended";
import { reqObjectToBody } from "../utils";

/**
 * @param {number} id level test id
 * @param {ILevelTestReq} req
 * { title, level, goalRate, keyNum, imgSrc, noteSrc, musicSrc, patternInfo }
 * @returns
 */
const update = async (id: number, req: ILevelTestReqOptional) => {
  const body = reqObjectToBody(req);
  const res = await fetchExtended(`/level-test/${id}`, {
    method: "patch",
    body,
  });

  if (res.status === 401) {
    redirect("/login");
  }
};

export default update;
