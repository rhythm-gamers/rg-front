import login from "./login";
import logout from "./logout";
import register from "./register";
import steamLogin from "./steamLogin";

export interface IRegisterReq {
  username: string;
  password: string;
  nickname: string;
}

export interface ILoginReq
  extends Pick<IRegisterReq, "username" | "password"> {}

export interface IAuthRes {
  code?: number;
  timestamp?: string;
  path?: string;
  method?: string;
  message?: string;
}

const AuthAPI = {
  steamLogin,
  login,
  logout,
  register,
};

export default AuthAPI;
