import useInput from "@/hooks/useInput";

interface IInput {
  placeholder: string;
}

const Input = ({ placeholder }: IInput) => {
  const [value, changeValue] = useInput({ type: "text", initValue: "" });

  return (
    <input
      type="text"
      value={value}
      onChange={changeValue}
      placeholder={placeholder}
      className="w-full border-b-2 p-2 outline-rose-400 disabled:bg-white"
    />
  );
};

export default Input;
