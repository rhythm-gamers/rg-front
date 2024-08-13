import WikiAPI, { IWiki, TMenu } from "@/api/wiki";
import SectionTitle from "@/components/atoms/SectionTitle/SectionTitle";
import MainSectionWithBothSideAds from "@/components/molecules/MainSectionWithBothSideAds/MainSectionWithBothSideAds";
import Dropdown from "@/components/wiki/atoms/Dropdown/Dropdown";

type TWikis = [string, IWiki[]];

const Wiki = async ({ params }: { params: { wiki?: string[] } }) => {
  const slugs = params.wiki ?? [];
  const newWikis = await WikiAPI.getAll();
  const parsedNewWikis = Object.entries(newWikis.data) as TWikis[];

  const decodedMenu =
    slugs.length >= 1 ? (decodeURIComponent(slugs[0]) as TMenu) : undefined;
  const decodedSubMenu =
    slugs.length >= 2 ? decodeURIComponent(slugs[1]) : undefined;

  const getSelectedWiki = async () => {
    if (!decodedMenu || !slugs) return;
    const currentWiki = newWikis.data[decodedMenu]!;

    return await WikiAPI.getOne(
      slugs.length === 2 ? slugs[1] : currentWiki[0].title,
    );
  };

  const selectedWiki = await getSelectedWiki();

  return (
    <MainSectionWithBothSideAds sectionTitle="리듬 게임 용어집">
      <div className="flex flex-row mt-8">
        {/* 좌측 네비게이터 */}
        <div className="flex w-52">
          <div className="w-full h-[40rem] rounded-xl border-2 border-stone-300 flex flex-col items-center shadow-lg overflow-auto">
            {parsedNewWikis?.map((menus, idx) => {
              const active = menus[0] === decodedMenu ? true : false;
              const subMenus = menus[1];

              return (
                <Dropdown
                  menuItem={menus[0]}
                  key={idx}
                  active={active}
                  subMenuActive={decodedSubMenu ?? subMenus[0].title}
                  subMenus={subMenus}
                />
              );
            })}
          </div>
        </div>
        {/* 우측 설명란 */}
        <div className="ml-16 flex flex-1 flex-col">
          <SectionTitle className="!mt-0 !text-3xl">
            {selectedWiki ? selectedWiki.data.title : "리듬 게임 용어집 항목 1"}
          </SectionTitle>
          <p className="text-lg">
            {selectedWiki
              ? selectedWiki.data.content
              : "리듬 게임 용어집 항목1 내용1"}
          </p>
        </div>
      </div>
    </MainSectionWithBothSideAds>
  );
};

export default Wiki;
