import fetchExtended from "../fetchExtended";

/**
 *
 * @param id comment id
 */
const deleteOne = async (id: number) => {
  await fetchExtended(`/comment/${id}`, { method: "delete" });
};

export default deleteOne;
