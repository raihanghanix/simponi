import Image from "next/image";
import Link from "next/link";

type LogoLinkProps = {
  isCentered?: boolean;
  type: "textOnly" | "logoOnly" | "both";
};

const LogoLink = ({ isCentered, type }: LogoLinkProps) => {
  return (
    <Link
      href="/"
      className={`flex gap-2 w-fit ${
        isCentered ? "items-center justify-center" : "items-start justify-start"
      }`}
    >
      {type === "logoOnly" && (
        <Image src="/bps-logo.png" alt="Logo BPS" width={64} height={64} />
      )}
      {type === "textOnly" && <p className="text-2xl font-bold">SIMPONI</p>}
      {type === "both" && (
        <>
          <Image src="/bps-logo.png" alt="Logo BPS" width={64} height={64} />
          <p className="text-2xl font-bold">SIMPONI</p>
        </>
      )}
    </Link>
  );
};

export default LogoLink;
