import fetchExtended from "../fetchExtended";

/**
 *
 * @param title wiki title
 */
const deleteOne = async (title: string) => {
  const parsedTitle = new URLSearchParams(title);
  await fetchExtended(`/wiki/${parsedTitle}`, { method: "delete" });
};

export default deleteOne;
