import Link from "next/link";

type FilledLinkProps = {
  linkObj: TLink;
};

const FilledLink = ({ linkObj }: FilledLinkProps) => {
  return (
    <Link
      key={linkObj.name}
      href={linkObj.href}
      target="_blank"
      className="flex gap-8 rounded-lg border-b-4 border-neutral-200 p-12 text-lg transition-transform duration-100 hover:scale-95"
      style={{ background: linkObj.bgColor }}
    >
      <div className="flex flex-1 flex-col gap-2 truncate">
        <p className="truncate font-semibold text-white">{linkObj.name}</p>
        <p className="truncate font-normal text-neutral-100">
          {linkObj.belongsTo}
        </p>
      </div>
      <div
        className={`flex flex-col items-center justify-center gap-4 ${
          linkObj.iconClassName ? "" : "hidden"
        }`}
      >
        <i
          className={`${
            linkObj.iconClassName ? linkObj.iconClassName : "hidden"
          } text-white`}
        ></i>
      </div>
    </Link>
  );
};

export default FilledLink;
