import { revalidateFromTag } from "@/app/actions";
import fetchExtended from "../fetchExtended";

/**
 * @param {number} id post id
 * @returns
 */
const increaseLike = async (id: number): Promise<boolean> => {
  const res = await fetchExtended(`/post/inc-like/${id}`, {
    method: "post",
  });

  revalidateFromTag("modifyPost");
  revalidateFromTag(`increaseLike-${id}`);

  return res.ok;
};

export default increaseLike;
