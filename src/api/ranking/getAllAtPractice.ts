import { IRankingRes } from ".";
import fetchExtended from "../fetchExtended";
import { parseJsonWithWrap } from "../utils";

/**
 *
 * @param practiceId practice id
 * @returns
 */
const getAllAtPractice = async (
  practiceId: number,
): Promise<{ data: IRankingRes[] }> => {
  const res = await fetchExtended(`/progress/ranking/practice/${practiceId}`, {
    method: "get",
  });
  const json = await res.json();
  const parsedJson = parseJsonWithWrap(json);
  return parsedJson;
};

export default getAllAtPractice;
