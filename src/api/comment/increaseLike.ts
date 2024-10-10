import fetchExtended from "../fetchExtended";

/**
 * @param {number} id comment id
 * @returns
 */
const increaseLike = async (id: number) => {
  await fetchExtended(`/comment/inc_like/${id}`, {
    method: "post",
  });
};

export default increaseLike;
