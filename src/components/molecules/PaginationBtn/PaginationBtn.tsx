import Link from "next/link";

interface IPaginationBtn {
  pageNumber: number;
  currentPage: number;
}

const PaginationBtn = ({ pageNumber, currentPage }: IPaginationBtn) => {
  return (
    <>
      <Link
        href={`/community?page=${pageNumber}`}
        className={`flex h-5 w-5 justify-center items-center ${currentPage === pageNumber ? "text-rhythm-theme" : ""}`}
      >
        {pageNumber}
      </Link>
    </>
  );
};

export default PaginationBtn;
