import { IProgressRes } from ".";
import fetchExtended from "../fetchExtended";
import { parseJsonWithWrap } from "../utils";

/**
 *
 * @param keyNum 리듬게임 키
 * @returns
 */
const getAllAtPractice = async (
  keyNum?: number,
): Promise<{ data: IProgressRes }> => {
  const res = await fetchExtended(`/progress/practice/all/${keyNum}`, {
    method: "get",
  });
  const json = await res.json();
  const parsedJson = parseJsonWithWrap(json);
  return parsedJson;
};

export default getAllAtPractice;
