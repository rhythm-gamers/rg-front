import { IAuthRes, IRegisterReq } from ".";
import fetchExtended from "../fetchExtended";
import { parseJsonWithWrap, reqObjectToBody } from "../utils";

/**
 *
 * @param {IRegisterReq} req
 * { username, password, nickname }
 * @returns
 */
const register = async (req: IRegisterReq): Promise<{ data: IAuthRes }> => {
  const body = reqObjectToBody(req);
  const res = await fetchExtended(`/auth/register`, {
    method: "post",
    body,
  });
  const json = await res.json();
  const parsedJson = parseJsonWithWrap(json);
  return parsedJson;
};

export default register;
