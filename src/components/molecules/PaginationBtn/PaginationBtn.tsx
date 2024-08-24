import Link from "next/link";

interface IPaginationBtn {
  pageNumber: number;
}

const PaginationBtn = ({ pageNumber }: IPaginationBtn) => {
  return (
    <>
      <Link
        href={`/community?page=${pageNumber}`}
        className="flex h-5 w-5 justify-center items-center"
      >
        {pageNumber}
      </Link>
    </>
  );
};

export default PaginationBtn;
