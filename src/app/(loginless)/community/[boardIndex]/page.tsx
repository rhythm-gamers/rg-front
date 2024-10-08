import "react-quill/dist/quill.core.css";
import CommentAPI from "@/api/comment";
import PostAPI from "@/api/post";
import SectionTitle from "@/components/atoms/SectionTitle/SectionTitle";
import LikeBtn from "@/components/molecules/LikeBtn/LikeBtn";
import MainSectionWithBothSideAds from "@/components/molecules/MainSectionWithBothSideAds/MainSectionWithBothSideAds";
import Footer from "@/components/organisms/Footer/Footer";
import { FaRegThumbsUp } from "react-icons/fa";
import { PiArrowElbowDownRightBold, PiPaperPlaneTilt } from "react-icons/pi";
import UserProfile from "@/components/molecules/UserProfile/UserProfile";
import CommentBox from "../../../../components/molecules/CommentBox/CommentBox";
import CommentWriteBox from "../../../../components/molecules/CommentWriteBox/CommentWriteBox";

const Board = async ({ params }: { params: { boardIndex: number } }) => {
  const {
    data: {
      post: { title, content, views, likeCount: likes, user, createdAt },
    },
  } = await PostAPI.getOne(params.boardIndex);

  const comments = await CommentAPI.getAllByPostId({
    postId: params.boardIndex,
    page: 0,
    limit: 10,
  });

  const commentCount = comments.data.length;

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
          <div
            dangerouslySetInnerHTML={{ __html: content }}
            className="leading-relaxed ql-editor !h-fit !p-0"
          ></div>
          <div className="mt-12 mb-4 flex flex-col justify-center items-center">
            <p>추천</p>
            <LikeBtn
              apiType="post"
              index={params.boardIndex}
              initialLikes={likes}
              size={"md"}
              type={"accept"}
              className="mb-2 !px-8 flex gap-3 items-center"
            >
              <FaRegThumbsUp />
              <span>{likes}</span>
            </LikeBtn>
          </div>
          <div>
            <p className="w-60 pb-2 mb-4 border-b border-black text-xl">
              댓글 {commentCount}개
            </p>
            {/* TODO: 매핑 작업 필요함 */}
            <CommentBox
              isReComment={false}
              content={"댓글"}
              imgSrc={"pp_stair.png"}
              imgAlt={"프로필 사진"}
              nickname={"닉네임1"}
              level={1}
            />
            <CommentBox
              isReComment={true}
              content={"대댓글"}
              imgSrc={"pp_stair.png"}
              imgAlt={"프로필 사진"}
              nickname={"닉네임2"}
              level={2}
            />
            <CommentWriteBox
              isReComment={true}
              imgSrc={"pp_stair.png"}
              imgAlt={"프로필 사진"}
              nickname={"닉네임3"}
              level={3}
            />
            <CommentWriteBox
              isReComment={false}
              imgSrc={"pp_stair.png"}
              imgAlt={"프로필 사진"}
              nickname={"닉네임4"}
              level={4}
            />
          </div>
        </div>
      </MainSectionWithBothSideAds>
      <Footer />
    </>
  );
};

export default Board;
