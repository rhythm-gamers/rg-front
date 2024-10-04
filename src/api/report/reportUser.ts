import { redirect } from "next/navigation";
import fetchExtended from "../fetchExtended";
import { IReportReq } from ".";

/**
 * @param {IReportReq} req
 * { targetId, reason }
 * @returns
 */
const reportUser = async (req: IReportReq) => {
  const body = JSON.stringify(req);
  const res = await fetchExtended("/report/user", {
    method: "post",
    body,
  });

  if (res.status === 401) {
    redirect("/login");
  }
};

export default reportUser;
