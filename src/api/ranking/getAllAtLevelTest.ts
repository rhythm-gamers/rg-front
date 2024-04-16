import { IRankingRes } from ".";
import fetchExtended from "../fetchExtended";
import { parseJsonWithWrap } from "../utils";

/**
 *
 * @param testId level test id
 * @returns
 */
const getAllAtLevelTest = async (
  testId: number,
): Promise<{ data: IRankingRes[] }> => {
  const res = await fetchExtended(`/progress/ranking/level-test/${testId}`, {
    method: "get",
  });
  const json = await res.json();
  const parsedJson = parseJsonWithWrap(json);
  return parsedJson;
};

export default getAllAtLevelTest;
