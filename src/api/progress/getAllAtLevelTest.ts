import { IProgressRes } from ".";
import fetchExtended from "../fetchExtended";
import { parseJsonWithWrap } from "../utils";

/**
 *
 * @param keyNum 리듬게임 키
 * @returns
 */
const getAllAtLevelTest = async (
  keyNum?: number,
): Promise<{ data: IProgressRes }> => {
  const res = await fetchExtended(`/progress/level-test/all/${keyNum}`, {
    method: "get",
  });
  const json = await res.json();
  const parsedJson = parseJsonWithWrap(json);
  return parsedJson;
};

export default getAllAtLevelTest;
