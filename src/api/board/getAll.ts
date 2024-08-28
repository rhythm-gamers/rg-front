import { IBoardRes } from ".";
import fetchExtended from "../fetchExtended";
import { parseJsonWithWrap } from "../utils";

const getAll = async (): Promise<{ data: IBoardRes[] }> => {
  const res = await fetchExtended("/board/metadata", {
    method: "get",
    cache: process.env.NODE_ENV == "development" ? "no-store" : "default",
  });
  const json = await res.json();
  const parsedJson = parseJsonWithWrap(json);
  return parsedJson;
};

export default getAll;
