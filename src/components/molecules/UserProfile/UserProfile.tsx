import Image from "next/image";

export interface IUserProfile {
  imgSrc: string;
  imgAlt: string;
  nickname: string;
  level: number;
}

const UserProfile = ({ imgSrc, imgAlt, nickname, level }: IUserProfile) => {
  return (
    <div className="flex flex-row gap-2 items-center">
      <Image
        width={40}
        height={40}
        src={`${process.env.NEXT_PUBLIC_AWS_CLOUDFRONT_URL}/${imgSrc}`}
        alt={imgAlt}
      />
      <span>{nickname}</span>
      <span>LV.{level}</span>
    </div>
  );
};

export default UserProfile;
