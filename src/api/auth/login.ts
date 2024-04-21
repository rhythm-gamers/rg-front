import { IAuthRes, ILoginReq } from ".";
import fetchExtended from "../fetchExtended";
import { parseJsonWithWrap, reqObjectToBody } from "../utils";

/**
 *
 * @param {ILoginReq} req
 *  { username, password }
 * @returns
 */
const login = async (req: ILoginReq): Promise<{ data: IAuthRes }> => {
  const body = reqObjectToBody(req);
  const res = await fetchExtended(`/auth/login`, {
    method: "post",
    body,
  });
  const json = await res.json();
  const parsedJson = parseJsonWithWrap(json);
  return parsedJson;
};

export default login;
