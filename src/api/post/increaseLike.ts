import fetchExtended from "../fetchExtended";

/**
 * @param {number} id post id
 * @returns
 */
const increaseLike = async (id: number) => {
  await fetchExtended(`/post/inc-like/${id}`, {
    method: "post",
  });
};

export default increaseLike;
