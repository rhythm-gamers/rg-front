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
      post: { title, content, views, likeCount, user, createdAt },
    },
  } = await PostAPI.getOne(params.boardIndex);

  const comments = await CommentAPI.getAllByPostId({
    postId: params.boardIndex,
    page: 0,
    limit: 30,
  });
  const commentCount = comments.data.commentCount;

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
              initialLikes={likeCount}
              size={"md"}
              type={"accept"}
              className="mb-2 !px-8 flex gap-3 items-center"
            >
              <FaRegThumbsUp />
              <span>{likeCount}</span>
            </LikeBtn>
          </div>
          <div>
            <p className="w-60 pb-2 mb-4 border-b border-black text-xl">
              댓글 {commentCount}개
            </p>
            {comments.data.comments.map((comment) => (
              <CommentBox
                key={comment.id}
                content={comment.content}
                imgSrc={"pp_stair.png"}
                imgAlt={"프로필 사진"}
                nickname={comment.user.nickname}
                userLevel={comment.user.userLevel}
                createdAt={comment.createdAt}
                reComments={comment.reComments}
              />
            ))}
            {/*
            <CommentWriteBox
              isReComment={true}
              imgSrc={"pp_stair.png"}
              imgAlt={"프로필 사진"}
              nickname={"닉네임3"}
              level={3}
            /> */}
            <CommentWriteBox
              isReComment={false}
              imgSrc={"pp_stair.png"}
              imgAlt={"프로필 사진"}
              nickname={user.nickname}
              userLevel={0}
            />
          </div>
        </div>
      </MainSectionWithBothSideAds>
      <Footer />
    </>
  );
};

export default Board;
