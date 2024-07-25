import { links } from "@/utils/links";
import Container from "./Container";
import Link from "next/link";

const Hero = () => {
  return (
    <section
      id="hero"
      className="flex h-auto items-center justify-center bg-[url('/grid.svg')] bg-cover bg-center py-16"
    >
      <Container>
        <div className="flex flex-col items-center justify-center gap-24 rounded-full bg-white/5 p-8 backdrop-blur-sm">
          <h1 className="text-center text-6xl font-bold leading-tight max-[540px]:text-5xl max-[540px]:leading-tight">
            Sistem Monitoring Produksi Terkini
          </h1>
          <p className="max-w-[900px] text-center text-lg leading-relaxed text-neutral-600 max-[540px]:text-base max-[540px]:leading-relaxed">
            SIMPONI merupakan website yang dirancang khusus untuk bagian
            produksi Badan Pusat Statistik Provinsi Jambi yang digunakan untuk
            monitoring dan evaluasi produksi di Provinsi Jambi.
          </p>
          <div className="flex w-full items-center justify-center gap-8 max-[678px]:flex-col max-[678px]:gap-4">
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
      </Container>
    </section>
  );
};

export default Hero;
