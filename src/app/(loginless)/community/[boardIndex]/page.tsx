import PostAPI from "@/api/post";
import CustomBtn from "@/components/atoms/CustomBtn/CustomBtn";
import SectionTitle from "@/components/atoms/SectionTitle/SectionTitle";
import MainSectionWithBothSideAds from "@/components/molecules/MainSectionWithBothSideAds/MainSectionWithBothSideAds";
import Footer from "@/components/organisms/Footer/Footer";
import { FaRegThumbsUp } from "react-icons/fa";

const Board = async ({ params }: { params: { boardIndex: number } }) => {
  const {
    data: {
      post: { title, content, views, likes, user, createdAt },
    },
  } = await PostAPI.getOne(params.boardIndex);

  const parsedDate = new Date(createdAt)
    .toLocaleDateString("ko-KR", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
    })
    .slice(0, -1);

  return (
    <>
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
                <span>{parsedDate}</span>
              </div>
            </div>
          </div>
          <hr className="mt-2 mb-5 border-black" />
          <div className="leading-relaxed">
            <p>{content}</p>
          </div>
          <div className="my-2 flex flex-col justify-center items-center">
            <p>추천</p>
            <CustomBtn
              size={"md"}
              type={"accept"}
              className="mb-2 !px-8 flex gap-3 items-center"
            >
              <FaRegThumbsUp />
              <span>{likes}</span>
            </CustomBtn>
          </div>
        </div>
      </MainSectionWithBothSideAds>
      <Footer />
    </>
  );
};

export default Board;
