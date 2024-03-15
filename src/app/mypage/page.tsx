import MainSection from "@/components/public/molecules/MainSection/MainSection";

const MyPage = () => {
  return (
    <MainSection>
      <div className="flex w-full h-full px-20 py-5 gap-10">
        <div className="w-[25rem] h-[35rem] sticky top-20 bg-red-500">
          <div className="flex flex-col px-5">
            <h2 className="mt-5 mb-8">마이페이지</h2>
            <div className="flex flex-col gap-5">
              <div className="w-full text-center bg-gray-500 py-3 rounded-lg">
                계정 설정
              </div>
              <div className="w-full text-center bg-gray-500 py-3 rounded-lg">
                플레이트 설정
              </div>
              <div className="w-full text-center bg-gray-500 py-3 rounded-lg">
                게임 설정
              </div>
            </div>
          </div>
        </div>
        <div className="w-full h-screen bg-blue-400"></div>
      </div>
    </MainSection>
  );
};

export default MyPage;
