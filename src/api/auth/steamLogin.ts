import fetchExtended from "../fetchExtended";

const steamLogin = async () => {
  const res = await fetchExtended(`/auth/steam`, {
    method: "get",
  });
};

export default steamLogin;
