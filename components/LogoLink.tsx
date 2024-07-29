import Image from "next/image";
import Link from "next/link";
import bpsLogo from "@/app/img/bps-logo.png";

type LogoLinkProps = {
  type: "textOnly" | "logoOnly" | "both";
  textColor: string;
};

const LogoLink = ({ type, textColor }: LogoLinkProps) => {
  return (
    <Link href="/" className="flex items-start justify-start gap-2">
      {type === "logoOnly" && (
        <Image src={bpsLogo} alt="Logo BPS" width={64} height={64} />
      )}

      {type === "textOnly" && <p className="text-2xl font-bold">SIMPONI</p>}

      {type === "both" && (
        <>
          <Image src={bpsLogo} alt="Logo BPS" width={64} height={64} />
          <p className="text-2xl font-bold" style={{ color: `${textColor}` }}>
            SIMPONI
          </p>
        </>
      )}
    </Link>
  );
};

export default LogoLink;
