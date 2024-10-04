import fetchExtended from "../fetchExtended";

/**
 *
 * @param id level test id
 */
const deleteOne = async (id: number) => {
  await fetchExtended(`/level-test/${id}`, { method: "delete" });
};

export default deleteOne;
