import { redirect } from "next/navigation";
import fetchExtended from "../fetchExtended";
import { reqObjectToBody } from "../utils";
import { IWikiReqOptional } from ".";

/**
 * @param {string} title wiki title
 * @param {IWikiReqOptional} req
 * { title?, level?, keyNum?, imgSrc?, noteSrc?, musicSrc?, patternInfo? }
 * @returns
 */
const update = async (title: string, req: IWikiReqOptional) => {
  const body = reqObjectToBody(req);
  const parsedTitle = new URLSearchParams(title);
  const res = await fetchExtended(`/wiki/${parsedTitle}`, {
    method: "patch",
    body,
  });

  if (res.status === 401) {
    redirect("/login");
  }
};

export default update;
