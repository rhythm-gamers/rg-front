import SectionTitle from "@/components/atoms/SectionTitle/SectionTitle";
import MainSectionWithBothSideAds from "@/components/molecules/MainSectionWithBothSideAds/MainSectionWithBothSideAds";

const Board = async ({ params }: { params: { boardIndex: number } }) => {
  return (
    <MainSectionWithBothSideAds sectionTitle="자유 게시판">
      <div className="mx-auto w-[900px]">
        <div>
          <SectionTitle className="!mt-4 !font-normal">
            <p>글제목글제목글제목글제목글제목{params.boardIndex}</p>
          </SectionTitle>
          <div className="flex justify-between">
            <div>
              <span>작성자</span>
            </div>
            <div>
              <span>조회수: 0</span>
              {" | "}
              <span>추천: 0</span>
              {" | "}
              <span>2024-08-22</span>
            </div>
          </div>
        </div>
        <hr className="mt-2 mb-5 border-black" />
        <div className="leading-relaxed">
          <p>
            국가는 국민 모두의 생산 및 생활의 기반이 되는 국토의 효율적이고
            균형있는 이용·개발과 보전을 위하여 법률이 정하는 바에 의하여 그에
            관한 필요한 제한과 의무를 과할 수 있다. 새로운 회계연도가 개시될
            때까지 예산안이 의결되지 못한 때에는 정부는 국회에서 예산안이 의결될
            때까지 다음의 목적을 위한 경비는 전년도 예산에 준하여 집행할 수
            있다. 대통령은 국무총리·국무위원·행정각부의 장 기타 법률이 정하는
            공사의 직을 겸할 수 없다. 국가는 균형있는 국민경제의 성장 및 안정과
            적정한 소득의 분배를 유지하고. 국가안전보장회의의 조직·직무범위 기타
            필요한 사항은 법률로 정한다. 국가는 노인과 청소년의 복지향상을 위한
            정책을 실시할 의무를 진다. 법원은 최고법원인 대법원과 각급법원으로
            조직된다. 재의의 요구가 있을 때에는 국회는 재의에 붙이고. 종교와
            정치는 분리된다. 대통령은 법률이 정하는 바에 의하여 사면·감형 또는
            복권을 명할 수 있다. 국가유공자·상이군경 및 전몰군경의 유가족은
            법률이 정하는 바에 의하여 우선적으로 근로의 기회를 부여받는다,
            국회에 제출된 법률안 기타의 의안은 회기중에 의결되지 못한 이유로
            폐기되지 아니한다. 복수정당제는 보장된다. 내부규율과 사무처리에 관한
            규칙을 제정할 수 있다, 대한민국의 주권은 국민에게 있고. 1차에 한하여
            중임할 수 있다. 국회는 회계연도 개시 30일전까지 이를 의결하여야
            한다. 국회는 상호원조 또는 안전보장에 관한 조약. 정당해산의 결정
            또는 헌법소원에 관한 인용결정을 할 때에는 재판관 6인 이상의 찬성이
            있어야 한다, 국토와 자원은 국가의 보호를 받으며. 사회적 특수계급의
            제도는 인정되지 아니하며. 원장은 국회의 동의를 얻어 대통령이
            임명하고. 여자의 근로는 특별한 보호를 받으며, 모든 국민은 종교의
            자유를 가진다. 헌법재판소는 법관의 자격을 가진 9인의 재판관으로
            구성하며. 대한민국의 영토는 한반도와 그 부속도서로 한다.
          </p>
        </div>
      </div>
    </MainSectionWithBothSideAds>
  );
};

export default Board;
