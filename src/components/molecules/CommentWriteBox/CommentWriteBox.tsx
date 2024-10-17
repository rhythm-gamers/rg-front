"use client";

import { PiArrowElbowDownRightBold, PiPaperPlaneTilt } from "react-icons/pi";
import UserProfile, { IUserProfile } from "../UserProfile/UserProfile";
import { useRef } from "react";

interface ICommentWriteBox extends IUserProfile {
  isReComment: boolean;
}

const CommentWriteView = ({
  isReComment,
  imgSrc,
  imgAlt,
  nickname,
  userLevel,
}: ICommentWriteBox) => {
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const changeTextareaHeight = () => {
    if (textareaRef.current == null) return;
    textareaRef.current.style.height = "auto";
    textareaRef.current.style.height = textareaRef.current.scrollHeight + "px";
  };

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
        userLevel={userLevel}
      />
      <div className="flex flex-row items-end justify-between w-full p-4 gap-2 bg-white rounded-xl">
        <textarea
          ref={textareaRef}
          className="w-full h-auto resize-none outline-none"
          rows={1}
          onChange={changeTextareaHeight}
          maxLength={8000}
          placeholder="댓글을 입력해주세요"
        />
        <button
          onClick={() => {
            console.log(textareaRef.current?.value);
          }}
        >
          <PiPaperPlaneTilt className="text-2xl" />
        </button>
      </div>
    </div>
  );
};

const CommentWriteBox = ({
  isReComment,
  imgSrc,
  imgAlt,
  nickname,
  userLevel,
}: ICommentWriteBox) => {
  if (isReComment)
    return (
      <div className="flex flex-row mb-2">
        <PiArrowElbowDownRightBold className="text-2xl mx-2 mt-2" />
        <CommentWriteView
          isReComment={isReComment}
          imgSrc={imgSrc}
          imgAlt={imgAlt}
          nickname={nickname}
          userLevel={userLevel}
        />
      </div>
    );
  else
    return (
      <div className="mb-2">
        <CommentWriteView
          isReComment={isReComment}
          imgSrc={imgSrc}
          imgAlt={imgAlt}
          nickname={nickname}
          userLevel={userLevel}
        />
      </div>
    );
};

export default CommentWriteBox;
