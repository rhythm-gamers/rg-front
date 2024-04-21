import { IAuthRes } from ".";
import fetchExtended from "../fetchExtended";
import { parseJsonWithWrap } from "../utils";

const steamLogin = async (): Promise<{ data: IAuthRes }> => {
  const res = await fetchExtended(`/auth/steam`, {
    method: "get",
    credentials: "include",
  });
  const json = await res.json();
  const parsedJson = parseJsonWithWrap(json);
  return parsedJson;
};

export default steamLogin;
