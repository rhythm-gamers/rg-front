import { ILoginReq } from ".";
import fetchExtended from "../fetchExtended";

/**
 *
 * @param {ILoginReq} req
 *  { username, password }
 * @returns
 */
const login = async (req: ILoginReq) => {
  const body = JSON.stringify(req);
  await fetchExtended(`/auth/login`, {
    method: "post",
    body,
  });
};

export default login;
