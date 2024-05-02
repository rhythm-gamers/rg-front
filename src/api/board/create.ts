import { redirect } from "next/navigation";
import fetchExtended from "../fetchExtended";
import { IBoardReq } from ".";

/**
 * @param {IBoardReq} req
 * { title, description }
 * @returns
 */
const create = async (req: IBoardReq) => {
  const body = JSON.stringify(req);
  const res = await fetchExtended("/board", {
    method: "post",
    body,
  });

  if (res.status === 401) {
    redirect("/login");
  }
};

export default create;
