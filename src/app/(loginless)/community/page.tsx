import BoardRow from "@/components/molecules/BoardRow/BoardRow";
import MainSectionWithBothSideAds from "@/components/molecules/MainSectionWithBothSideAds/MainSectionWithBothSideAds";
import CustomBtn from "../../../components/atoms/CustomBtn/CustomBtn";
import Link from "next/link";
import PostAPI from "@/api/post";
import PaginationBtn from "../../../components/molecules/PaginationBtn/PaginationBtn";
import {
  MdKeyboardArrowRight,
  MdKeyboardDoubleArrowRight,
  MdKeyboardArrowLeft,
  MdKeyboardDoubleArrowLeft,
} from "react-icons/md";
import Footer from "@/components/organisms/Footer/Footer";

const boardRowLimit = 1;

const generatePages = (currentPage: number, totalPage: number): number[] => {
  let start = 1;
  let end = totalPage;

  if (totalPage <= 10) {
    start = 1;
    end = totalPage;
  } else if (currentPage <= 5) {
    start = 1;
    end = 10;
  } else if (currentPage >= totalPage - 4) {
    start = Math.max(totalPage - 9, 1);
    end = totalPage;
  } else {
    start = currentPage - 4;
    end = currentPage + 5;
  }

  return Array.from({ length: end - start + 1 }, (_, i) => start + i);
};

const Community = async ({
  searchParams,
}: {
  searchParams: { page?: number };
}) => {
  const page = searchParams.page ?? 1;
  const newPosts = await PostAPI.getAllByBoardName({
    boardName: "자유게시판",
    page: page - 1,
    limit: boardRowLimit,
  });
  const pageCount = Math.ceil(newPosts.data.allCount / boardRowLimit);
  const pages = generatePages(page, pageCount);

  return (
    <>
      <MainSectionWithBothSideAds sectionTitle="자유 게시판">
        <div className="w-[900px] mx-auto flex flex-col mt-4">
          <BoardRow // 게시판 헤더
            isHeader
            index="번호"
            title="제목"
            writer="작성자"
            createdAt="작성일"
            views="조회수"
            likes="추천"
          />
          {newPosts.data.posts.map((post) => (
            <BoardRow
              key={`post ${post.id}`}
              isHeader={false}
              index={post.id}
              title={post.title}
              writer={post.user.nickname}
              createdAt={post.createdAt}
              views={post.views}
              likes={post.likeCount}
              commentCount={post.commentCount}
            />
          ))}
          <div>
            <div className="flex justify-end">
              <Link href="/community/write">
                <CustomBtn size={"sm"} type={"deny"} className="my-2">
                  글쓰기
                </CustomBtn>
              </Link>
            </div>
            <div className="flex justify-center gap-1">
              {pages.map((page) => (
                <PaginationBtn key={`page ${page}`} pageNumber={page} />
              ))}
            </div>
          </div>
        </div>
      </MainSectionWithBothSideAds>
      <Footer />
    </>
  );
};

export default Community;

{
  /* <button className="flex h-5 w-5 justify-center items-center">
              <MdKeyboardArrowRight size={20} className="text-rhythm-theme" />
            </button>
            <button className="flex h-5 w-5 justify-center items-center">
              <MdKeyboardDoubleArrowRight
                size={20}
                className="text-rhythm-theme"
              />
            </button> */
} //TODO: 애로우 버튼 생성 필요
