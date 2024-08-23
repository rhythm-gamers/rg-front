import BoardRow from "@/components/molecules/BoardRow/BoardRow";
import MainSectionWithBothSideAds from "@/components/molecules/MainSectionWithBothSideAds/MainSectionWithBothSideAds";
import CustomBtn from "../../../components/atoms/CustomBtn/CustomBtn";
import Link from "next/link";

const Community = async () => {
  return (
    <MainSectionWithBothSideAds sectionTitle="자유 게시판">
      <div className="w-[900px] mx-auto flex flex-col mt-4">
        <BoardRow // 게시판 헤더
          isHeader
          index="번호"
          title="제목"
          writer="작성자"
          createdAt="작성일"
          views="조회수"
          likes="추천"
        />
        <BoardRow
          isHeader={false}
          index="3939"
          title="ㅁㄴㅇㄻㄴㅇㄻㄴㅇㄹ"
          writer="zeppline"
          createdAt="2024-08-18"
          views="3939"
          likes="39"
        />
        <div className="flex justify-end">
          <Link href="/community/write">
            <CustomBtn size={"sm"} type={"deny"} className="my-2">
              글쓰기
            </CustomBtn>
          </Link>
        </div>
      </div>
    </MainSectionWithBothSideAds>
  );
};

export default Community;
