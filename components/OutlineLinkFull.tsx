import Link from "next/link";

type OutlineLinkFullProps = {
  linkObj: TLink;
};

const OutlineLinkFull = ({ linkObj }: OutlineLinkFullProps) => {
  return (
    <Link
      key={linkObj.name}
      href={linkObj.href}
      className="flex gap-8 rounded-lg border border-neutral-300 bg-white p-12 text-lg transition-colors duration-100 hover:bg-neutral-200"
    >
      <div className="flex flex-1 flex-col gap-2 truncate">
        <p className="truncate font-semibold">{linkObj.name}</p>
        <p className="truncate font-normal text-neutral-600">{linkObj.href}</p>
      </div>
      <div
        className={`flex flex-col items-center justify-center gap-4 ${
          linkObj.iconClassName ? "" : "hidden"
        }`}
      >
        <i
          className={`${
            linkObj.iconClassName ? linkObj.iconClassName : "hidden"
          } text-bpsBlue`}
        ></i>
      </div>
    </Link>
  );
};

export default OutlineLinkFull;
