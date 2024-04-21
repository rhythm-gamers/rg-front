import { redirect } from "next/navigation";
import fetchExtended from "../fetchExtended";
import { reqObjectToBody } from "../utils";
import { IProgressReq } from ".";

/**
 * @param {number} testId level test id
 * @param {IProgressReq} req
 * { progress }
 * @returns
 */
const updateAtLevelTest = async (testId: number, req: IProgressReq) => {
  const body = reqObjectToBody(req);
  const res = await fetchExtended(`/progress/level-test/${testId}`, {
    method: "post",
    body,
  });

  if (res.status === 401) {
    redirect("/login");
  }
};

export default updateAtLevelTest;
