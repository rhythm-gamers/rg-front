import fetchExtended from "../fetchExtended";
import { parseJsonWithWrap } from "../utils";

const logout = async (): Promise<{ data: IAuthRes }> => {
  const res = await fetchExtended(`/auth/logout`, {
    method: "post",
  });
  const json = await res.json();
  const parsedJson = parseJsonWithWrap(json);
  return parsedJson;
};

export default logout;
