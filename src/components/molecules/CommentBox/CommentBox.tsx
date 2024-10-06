import { FiThumbsUp, FiAlertTriangle } from "react-icons/fi";
import { PiArrowElbowDownRightBold } from "react-icons/pi";
import UserProfile, { IUserProfile } from "../UserProfile/UserProfile";

interface ICommentBox extends IUserProfile {
  isReComment: boolean;
  content: string;
}

const CommentView = ({
  isReComment,
  content,
  imgSrc,
  imgAlt,
  nickname,
  level,
}: ICommentBox) => {
  return (
    <div
      className={`flex flex-col p-6 gap-3 bg-gray-200 rounded-2xl ${
        isReComment && `w-full`
      }`}
    >
      <UserProfile
        imgSrc={imgSrc}
        imgAlt={imgAlt}
        nickname={nickname}
        level={level}
      />
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
  isReComment,
  content,
  imgSrc,
  imgAlt,
  nickname,
  level,
}: ICommentBox) => {
  if (isReComment)
    return (
      <div className="flex flex-row my-2">
        <PiArrowElbowDownRightBold className="text-2xl mx-2 mt-2" />
        <CommentView
          isReComment={isReComment}
          content={content}
          imgSrc={imgSrc}
          imgAlt={imgAlt}
          nickname={nickname}
          level={level}
        />
      </div>
    );
  else
    return (
      <CommentView
        isReComment={isReComment}
        content={content}
        imgSrc={imgSrc}
        imgAlt={imgAlt}
        nickname={nickname}
        level={level}
      />
    );
};

export default CommentBox;
