"use client";

import CustomBtn, { ICustomBtn } from "@/components/atoms/CustomBtn/CustomBtn";
import { FaRegThumbsUp } from "react-icons/fa";
import PostAPI from "@/api/post";
import { useState } from "react";
import CommentAPI from "@/api/comment";

interface ILikeBtn extends ICustomBtn {
  apiType: "post" | "comment";
  index: number;
  initialLikes: number;
}

const LikeBtn = ({
  apiType,
  index,
  initialLikes,
  size,
  type,
  border,
  widthFull,
  roundedFull,
  haveShadow,
  className,
}: ILikeBtn) => {
  const [likes, setLikes] = useState(initialLikes);

  const handleLike = async () => {
    if (apiType === "post") await PostAPI.increaseLike(index);
    else if (apiType === "comment") await CommentAPI.increaseLike(index);
    else return;

    setLikes(likes + 1);
  };

  return (
    <CustomBtn
      size={size}
      type={type}
      border={border}
      widthFull={widthFull}
      roundedFull={roundedFull}
      haveShadow={haveShadow}
      className={className}
      onClick={handleLike}
    >
      <FaRegThumbsUp />
      <span>{likes}</span>
    </CustomBtn>
  );
};

export default LikeBtn;
