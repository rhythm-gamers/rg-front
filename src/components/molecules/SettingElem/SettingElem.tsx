import { ReactNode } from "react";
import SettingSubtitle from "../../atoms/SettingSubtitle/SettingSubtitle";

interface ISettingElem {
  title: string;
  children?: ReactNode;
}

const SettingElem = ({ title, children }: ISettingElem) => {
  return (
    <div className="flex flex-col gap-8">
      <SettingSubtitle>{title}</SettingSubtitle>
      {children}
    </div>
  );
};

export default SettingElem;
