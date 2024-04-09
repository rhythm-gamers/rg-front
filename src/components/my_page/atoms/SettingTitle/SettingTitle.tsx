import { ReactNode } from "react";

interface ISettingTitle {
  children: ReactNode;
}

const SettingTitle = ({ children }: ISettingTitle) => {
  return <h3 className="text-2xl font-semibold">{children}</h3>;
};

export default SettingTitle;
