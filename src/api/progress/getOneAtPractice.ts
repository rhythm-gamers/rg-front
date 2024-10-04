import { IProgress } from ".";
import fetchExtended from "../fetchExtended";
import { parseJsonWithWrap } from "../utils";

/**
 *
 * @param practiceId pattern practice id
 * @returns
 */
const getOneAtPractice = async (
  practiceId: number,
): Promise<{ data: IProgress }> => {
  const res = await fetchExtended(`/progress/practice/spec/${practiceId}`, {
    method: "get",
  });
  const json = await res.json();
  const parsedJson = parseJsonWithWrap(json);
  return parsedJson;
};

export default getOneAtPractice;
