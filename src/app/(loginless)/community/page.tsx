import BoardRow from "@/components/molecules/BoardRow/BoardRow";
import MainSectionWithBothSideAds from "@/components/molecules/MainSectionWithBothSideAds/MainSectionWithBothSideAds";
import CustomBtn from "../../../components/atoms/CustomBtn/CustomBtn";
import Link from "next/link";
import PostAPI from "@/api/post";

const Community = async ({
  searchParams,
}: {
  searchParams: { page?: number };
}) => {
  const page = searchParams.page ?? 0;
  const newPosts = await PostAPI.getAllByBoardName({
    boardName: "자유게시판",
    page: page,
    limit: 30,
  });

  return (
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
            isHeader={false}
            index={post.id}
            title={post.title}
            writer={post.user.nickname}
            createdAt={new Date(post.createdAt).toLocaleDateString()}
            views={post.views}
            likes={post.likes}
          />
        ))}

        <div className="flex justify-end">
          <Link href="/community/write">
            <CustomBtn size={"sm"} type={"deny"} className="my-2">
              글쓰기
            </CustomBtn>
          </Link>
        </div>
      </div>
    </MainSectionWithBothSideAds>
  );
};

export default Community;
