import Link from "next/link";

type OutlineLinkMinimalProps = {
  linkObj: TLink;
};

const OutlineLinkMinimal = ({ linkObj }: OutlineLinkMinimalProps) => {
  return (
    <Link
      key={linkObj.name}
      href={linkObj.href}
      className="w-[168px] rounded-lg border border-neutral-300 bg-white px-5 py-3 text-center text-lg font-semibold text-neutral-600 transition-colors duration-100 hover:bg-neutral-200 max-[678px]:w-full"
    >
      {linkObj.name}
    </Link>
  );
};

export default OutlineLinkMinimal;
