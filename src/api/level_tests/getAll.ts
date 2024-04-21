import { ILevelTestRes } from ".";
import fetchExtended from "../fetchExtended";
import { parseJsonWithWrap } from "../utils";

const getAll = async (): Promise<{ data: ILevelTestRes[] }> => {
  const res = await fetchExtended("/level-test/all", { method: "get" });
  const json = await res.json();
  const parsedJson = parseJsonWithWrap(json);
  return parsedJson;
};

export default getAll;
