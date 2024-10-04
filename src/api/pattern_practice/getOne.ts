import { IPatternPracticeRes } from ".";
import fetchExtended from "../fetchExtended";
import { parseJsonWithWrap } from "../utils";

/**
 *
 * @param id pattern practice id
 * @returns
 */
const getOne = async (id: number): Promise<{ data: IPatternPracticeRes }> => {
  const res = await fetchExtended(`/practice?id=${id}`, {
    method: "get",
  });
  const json = await res.json();
  const parsedJson = parseJsonWithWrap(json);
  return parsedJson;
};

export default getOne;
