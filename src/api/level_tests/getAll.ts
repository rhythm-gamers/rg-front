import fetchExtended from "../fetchExtended";

/**
 *
 * @returns {ILevelTest[]}
 */
const getAll: () => Promise<Object[]> = async () => {
  const res = await fetchExtended("/level-test/all", { method: "get" });
  const json = (await res.json()) as Object[];
  return json;
};

export default getAll;
