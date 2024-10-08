import { revalidateFromTag } from "@/app/actions";
import fetchExtended from "../fetchExtended";

/**
 * @param {number} id comment id
 * @returns
 */
const increaseLike = async (id: number) => {
  await fetchExtended(`/comment/inc_like/${id}`, {
    method: "post",
  });
  revalidateFromTag("modifyPost");
  revalidateFromTag(`increaseLike-${id}`);
};

export default increaseLike;
