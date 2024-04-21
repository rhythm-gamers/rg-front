import fetchExtended from "../fetchExtended";

/**
 *
 * @param boardName board title
 */
const deleteOne = async (boardName: string) => {
  const parsedBoardName = new URLSearchParams(boardName);
  await fetchExtended(`/board/${parsedBoardName}`, { method: "delete" });
};

export default deleteOne;
