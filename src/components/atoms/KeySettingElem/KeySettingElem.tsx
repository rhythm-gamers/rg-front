interface IKeySettingElem {
  value: string;
}

const KeySettingElem = ({ value }: IKeySettingElem) => {
  return (
    <div className="flex justify-center items-center w-20 h-20 bg-neutral-100 rounded-lg shadow-md border-2">
      <span>{value}</span>
    </div>
  );
};

export default KeySettingElem;
