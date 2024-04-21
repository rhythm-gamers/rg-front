import { redirect } from "next/navigation";
import fetchExtended from "../fetchExtended";
import { reqObjectToBody } from "../utils";
import { IProgressReq } from ".";

/**
 * @param {number} practiceId pattern practice id
 * @param {IProgressReq} req
 * { progress }
 * @returns
 */
const updateAtPractice = async (practiceId: number, req: IProgressReq) => {
  const body = reqObjectToBody(req);
  const res = await fetchExtended(`/progress/practice/${practiceId}`, {
    method: "post",
    body,
  });

  if (res.status === 401) {
    redirect("/login");
  }
};

export default updateAtPractice;
