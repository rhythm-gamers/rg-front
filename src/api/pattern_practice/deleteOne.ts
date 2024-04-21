import fetchExtended from "../fetchExtended";

/**
 *
 * @param id pattern practice id
 */
const deleteOne = async (id: number) => {
  await fetchExtended(`/practice/${id}`, { method: "delete" });
};

export default deleteOne;
