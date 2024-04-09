import { ForwardedRef, ReactNode, forwardRef } from "react";
import SettingTitle from "../../atoms/SettingTitle/SettingTitle";

interface ISettingSection {
  title: string;
  children?: ReactNode;
}

const SettingSection = forwardRef(
  (
    { title, children }: ISettingSection,
    ref: ForwardedRef<HTMLTableSectionElement>,
  ) => {
    return (
      <section ref={ref} className="flex flex-col gap-24">
        <SettingTitle>{title}</SettingTitle>
        {children}
        <hr className="border-2 rounded-lg" />
      </section>
    );
  },
);

export default SettingSection;
