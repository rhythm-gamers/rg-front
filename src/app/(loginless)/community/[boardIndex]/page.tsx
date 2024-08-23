import PostAPI from "@/api/post";
import SectionTitle from "@/components/atoms/SectionTitle/SectionTitle";
import MainSectionWithBothSideAds from "@/components/molecules/MainSectionWithBothSideAds/MainSectionWithBothSideAds";

const Board = async ({ params }: { params: { boardIndex: number } }) => {
  const {
    data: {
      post: { title, content, views, likes, user, createdAt },
    },
  } = await PostAPI.getOne(params.boardIndex);

  return (
    <MainSectionWithBothSideAds sectionTitle="자유 게시판">
      <div className="mx-auto w-[900px]">
        <div>
          <SectionTitle className="!mt-4 !font-normal">
            <p>{title}</p>
          </SectionTitle>
          <div className="flex justify-between">
            <div>
              <span>{user.nickname}</span>
            </div>
            <div>
              <span>조회수: {views}</span>
              {" | "}
              <span>추천: {likes}</span>
              {" | "}
              <span>{new Date(createdAt).toLocaleDateString()}</span>
            </div>
          </div>
        </div>
        <hr className="mt-2 mb-5 border-black" />
        <div className="leading-relaxed">
          <p>{content}</p>
        </div>
      </div>
    </MainSectionWithBothSideAds>
  );
};

export default Board;
