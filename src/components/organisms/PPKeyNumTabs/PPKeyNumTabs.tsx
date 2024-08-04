import CategoryBtn from "@/components/atoms/CategoryBtn/CategoryBtn";

interface IPPKeyNumTabs {
  keyNums: number[];
}

const PPKeyNumTabs = ({ keyNums }: IPPKeyNumTabs) => {
  return (
    <div className="flex text-black py-2 mt-5 text-lg bg-white border rounded-md">
      {keyNums.map((keyNum) => (
        <CategoryBtn value={keyNum} />
      ))}
    </div>
  );
};

export default PPKeyNumTabs;
