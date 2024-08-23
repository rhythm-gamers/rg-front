import Link from "next/link";

interface IBoardRow {
  isHeader: boolean;
  index: string;
  title: string;
  writer: string;
  createdAt: string;
  views: string;
  likes: string;
}

const BoardContent = ({
  index,
  title,
  writer,
  createdAt,
  views,
  likes,
}: IBoardRow) => (
  <>
    <div className="basis-1/12">
      <p>{index}</p>
    </div>
    <div className="basis-6/12 text-left">
      <p>{title}</p>
    </div>
    <div className="basis-2/12">
      <p>{writer}</p>
    </div>
    <div className="basis-2/12">
      <p>{createdAt}</p>
    </div>
    <div className="basis-1/12">
      <p>{views}</p>
    </div>
    <div className="basis-1/12">
      <p>{likes}</p>
    </div>
  </>
);

const BoardRow = ({
  isHeader,
  index,
  title,
  writer,
  createdAt,
  views,
  likes,
}: IBoardRow) => {
  return (
    <>
      {isHeader ? (
        <div className="flex flex-row py-3 gap-6 border-b border-black text-lg text-center text-[#333333] px-4 border-t-2 font-bold">
          <BoardContent
            isHeader={isHeader}
            index={index}
            title={title}
            writer={writer}
            createdAt={createdAt}
            views={views}
            likes={likes}
          />
        </div>
      ) : (
        <Link
          href={`/community/${index}`}
          className="flex flex-row py-3 gap-6 border-b border-black text-lg text-center text-[#333333] px-4 hover:bg-gray-200"
        >
          <BoardContent
            isHeader={isHeader}
            index={index}
            title={title}
            writer={writer}
            createdAt={createdAt}
            views={views}
            likes={likes}
          />
        </Link>
      )}
    </>
  );
};

export default BoardRow;
