import Image from "next/image";
import Link from "next/link";

type LogoLinkProps = {
  type: "textOnly" | "logoOnly" | "both";
  textColor: string;
};

const LogoLink = ({ type, textColor }: LogoLinkProps) => {
  return (
    <Link href="/" className="flex items-start justify-start gap-2">
      {type === "logoOnly" && (
        <Image src="/bps-logo.png" alt="Logo BPS" width={64} height={64} />
      )}

      {type === "textOnly" && <p className="text-2xl font-bold">SIMPONI</p>}

      {type === "both" && (
        <>
          <Image src="/bps-logo.png" alt="Logo BPS" width={64} height={64} />
          <p className="text-2xl font-bold" style={{ color: `${textColor}` }}>
            SIMPONI
          </p>
        </>
      )}
    </Link>
  );
};

export default LogoLink;
