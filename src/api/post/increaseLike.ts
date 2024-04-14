import { redirect } from "next/navigation";
import fetchExtended from "../fetchExtended";

/**
 * @param {number} id post id
 * @returns
 */
const increaseLike = async (id: number) => {
  const res = await fetchExtended(`/post/inc-like/${id}`, {
    method: "post",
  });

  if (res.status === 401) {
    redirect("/login");
  }
};

export default increaseLike;
