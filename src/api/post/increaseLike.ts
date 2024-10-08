import fetchExtended from "../fetchExtended";

/**
 * @param {number} id post id
 * @returns
 */
const increaseLike = async (id: number): Promise<boolean> => {
  const res = await fetchExtended(`/post/inc-like/${id}`, {
    method: "post",
  });

  return res.ok;
};

export default increaseLike;
