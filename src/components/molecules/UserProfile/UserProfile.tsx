import { IUser } from "@/api/post";
import Image from "next/image";

export interface IUserProfile extends Omit<IUser, "id"> {
  imgSrc: string;
  imgAlt: string;
}

const UserProfile = ({ imgSrc, imgAlt, nickname, userLevel }: IUserProfile) => {
  return (
    <div className="flex flex-row gap-2 items-center">
      <Image
        width={40}
        height={40}
        src={`${process.env.NEXT_PUBLIC_AWS_CLOUDFRONT_URL}/${imgSrc}`}
        alt={imgAlt}
      />
      <span>{nickname}</span>
      <span>LV.{userLevel}</span>
    </div>
  );
};

export default UserProfile;
