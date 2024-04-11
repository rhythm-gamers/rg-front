import fetchExtended from "../fetchExtended";

/**
 *
 * @param id
 */
const deleteOne = async (id: number) => {
  await fetchExtended(`/practice/${id}`, { method: "delete" });
};

export default deleteOne;
