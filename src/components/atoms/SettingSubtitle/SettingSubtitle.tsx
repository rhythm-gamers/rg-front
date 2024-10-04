import { ReactNode } from "react";

interface ISettingSubtitle {
  children: ReactNode;
}

const SettingSubtitle = ({ children }: ISettingSubtitle) => {
  return <p className="text-lg font-semibold">{children}</p>;
};

export default SettingSubtitle;
