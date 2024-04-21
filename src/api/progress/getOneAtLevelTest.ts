import { IProgress } from ".";
import fetchExtended from "../fetchExtended";
import { parseJsonWithWrap } from "../utils";

/**
 *
 * @param testId level test id
 * @returns
 */
const getOneAtLevelTest = async (
  testId: number,
): Promise<{ data: IProgress }> => {
  const res = await fetchExtended(`/progress/level-test/spec/${testId}`, {
    method: "get",
  });
  const json = await res.json();
  const parsedJson = parseJsonWithWrap(json);
  return parsedJson;
};

export default getOneAtLevelTest;
