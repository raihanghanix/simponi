import Image from "next/image";
import Link from "next/link";
import Container from "./Container";
import { links } from "@/utils/links";
import LogoLink from "./LogoLink";

const Footer = () => {
  return (
    <footer id="footer" className="relative">
      <Image
        src="/footer-bg.jpeg"
        alt="Gambar Hutan"
        fill={true}
        className="absolute -z-10 object-cover object-center opacity-10 blur-sm"
      />
      <Container>
        <div className="grid w-full grid-cols-4 gap-4 px-4 py-8 max-xl:px-24 max-lg:grid-cols-2 max-lg:gap-16 max-lg:px-8 max-sm:grid-cols-1">
          <div className="h-fit w-fit">
            <LogoLink type="both" textColor="#000" />
          </div>
          <div className="flex flex-shrink-0 flex-col gap-6">
            <p className="font-bold">Halaman</p>
            {links.map((link, i) => {
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className="w-fit text-neutral-600 underline hover:text-black"
                >
                  {link.name}
                </Link>
              );
            })}
          </div>
          <div className="flex flex-shrink-0 flex-col gap-6">
            <p className="font-bold">Jam Kerja</p>
            <div>
              <p className="mb-2 font-bold">Senin - Kamis</p>
              <p className="text-neutral-600">07.30 - 16.00</p>
            </div>
            <div>
              <p className="mb-2 font-bold">Jumat</p>
              <p className="text-neutral-600">07.30 - 16.30</p>
            </div>
          </div>
          <div className="flex flex-shrink-0 flex-col gap-6">
            <p className="font-bold">Kontak Kami</p>
            <div>
              <p className="mb-2 font-bold">Alamat</p>
              <p className="text-neutral-600">
                Jalan Ahmad Yani No.4 Telanaipura Jambi.
              </p>
            </div>
            <div>
              <p className="mb-2 font-bold">Email</p>
              <p className="text-neutral-600">produksi1500@bps.go.id</p>
            </div>
            <div>
              <p className="mb-2 font-bold">Telepon</p>
              <p className="text-neutral-600">0741-60497</p>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
