import { FiThumbsUp, FiAlertTriangle } from "react-icons/fi";
import { PiArrowElbowDownRightBold } from "react-icons/pi";
import UserProfile, { IUserProfile } from "../UserProfile/UserProfile";
import { ICommentRes } from "@/api/comment";

interface ICommentView extends IUserProfile {
  content: string;
  createdAt: string;
}

interface ICommentBox extends ICommentView, Pick<ICommentRes, "reComments"> {}

const CommentView = ({
  content,
  imgSrc,
  imgAlt,
  nickname,
  userLevel,
  createdAt,
}: ICommentView) => {
  const parsedDate = new Date(createdAt)
    .toLocaleDateString("ko-KR", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
    })
    .slice(0, -1);

  return (
    <div className="flex flex-col p-6 gap-3 bg-gray-200 rounded-2xl w-full">
      <div className="flex justify-between items-center">
        <UserProfile
          imgSrc={imgSrc}
          imgAlt={imgAlt}
          nickname={nickname}
          userLevel={userLevel}
        />
        <span>{parsedDate}</span>
      </div>
      <div>
        <p>{content}</p>
      </div>
      <div className="flex flex-row gap-4 items-center">
        <FiThumbsUp className="text-blue-400 text-xl" />
        <PiArrowElbowDownRightBold className="text-xl" />
        <FiAlertTriangle className="text-red-400 text-xl" />
      </div>
    </div>
  );
};

const CommentBox = ({
  content,
  imgSrc,
  imgAlt,
  nickname,
  userLevel,
  createdAt,
  reComments,
}: ICommentBox) => {
  return (
    <>
      <div className="mb-2">
        <CommentView
          content={content}
          imgSrc={imgSrc}
          imgAlt={imgAlt}
          nickname={nickname}
          userLevel={userLevel}
          createdAt={createdAt}
        />
      </div>
      {reComments.map((reComment) => (
        <div key={reComment.id} className="flex flex-row mb-2">
          <PiArrowElbowDownRightBold className="text-2xl mx-2 mt-2" />
          <CommentView
            content={reComment.content}
            imgSrc={imgSrc}
            imgAlt={imgAlt}
            nickname={reComment.user.nickname}
            userLevel={reComment.user.userLevel}
            createdAt={reComment.createdAt}
          />
        </div>
      ))}
    </>
  );
};

export default CommentBox;
