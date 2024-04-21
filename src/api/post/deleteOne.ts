import { redirect } from "next/navigation";
import fetchExtended from "../fetchExtended";

/**
 * @param {number} id post id
 * @returns
 */
const deleteOne = async (id: number) => {
  const res = await fetchExtended(`/post/${id}`, {
    method: "delete",
  });

  if (res.status === 401) {
    redirect("/login");
  }
};

export default deleteOne;
