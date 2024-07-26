import { links } from "@/utils/links";
import Container from "./Container";
import Link from "next/link";
import Image from "next/image";

const Hero = () => {
  return (
    <section
      id="hero"
      className="flex h-auto items-center justify-center bg-[url('/grid.svg')] bg-cover bg-center py-16"
    >
      <Container>
        <div className="flex flex-row items-center gap-8 rounded-full bg-white/5 px-4 py-8 backdrop-blur-sm max-xl:px-24 max-lg:flex-col max-lg:gap-16 max-lg:px-8">
          <div className="flex flex-col gap-16">
            <h1 className="text-start text-6xl font-bold leading-tight max-lg:text-center max-sm:leading-tight max-[400px]:text-5xl">
              Sistem Monitoring Produksi Terkini
            </h1>
            <p className="max-w-[900px] text-start text-lg leading-relaxed text-neutral-600 max-lg:text-center max-sm:leading-relaxed max-[400px]:text-base">
              SIMPONI merupakan website yang dirancang khusus untuk bagian
              produksi Badan Pusat Statistik Provinsi Jambi yang digunakan untuk
              monitoring dan evaluasi produksi di Provinsi Jambi.
            </p>
            <div className="flex w-full justify-start gap-8 max-lg:justify-center max-[678px]:flex-col max-[678px]:gap-4">
              {links.map((link, i) => {
                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    className="w-[168px] rounded-lg border border-neutral-300 bg-white px-5 py-3 text-center text-lg font-semibold text-neutral-600 transition-all duration-100 hover:bg-neutral-200 max-[678px]:w-full"
                  >
                    {link.name}
                  </Link>
                );
              })}
            </div>
          </div>
          <div>
            <Image
              src="/pohon.png"
              alt="Gambar Pohon"
              width={640}
              height={640}
              fill={false}
            />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Hero;
