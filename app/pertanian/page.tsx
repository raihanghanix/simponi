import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import Link from "next/link";

const page = () => {
  return (
    <main>
      <Navbar />
      <section id="pertanian" className="">
        <div className="relative h-1/2">
          <Image
            src="/kelapa-sawit.png"
            alt="Gambar Perkebunan Sawit"
            fill={true}
            className="-z-10 object-cover object-center opacity-20 blur-md"
          />
          <div className="mx-auto flex h-full w-10/12 items-center justify-center">
            <h1 className="text-7xl font-bold leading-tight max-[1366px]:text-6xl max-[1200px]:text-5xl max-[542px]:text-4xl">
              Pertanian
            </h1>
          </div>
        </div>
        <div className="h-1/2 shadow-inner">
          <div className="mx-auto flex h-full w-10/12 items-center justify-between gap-8 py-8 max-[512px]:flex-col">
            <Link
              href=""
              className="flex h-full w-full flex-1 flex-col items-center justify-center gap-8 rounded-xl border border-bpsBlue text-4xl font-bold shadow-sm hover:bg-bpsBlue hover:text-white max-[512px]:flex-row"
            >
              {/* TODO: FIX IMAGES SIZE */}
              <Image
                src="/monev.png"
                alt="Gambar Icon Monev"
                width={2500 * 0.05}
                height={2500 * 0.05}
              />
              Monev
            </Link>
            <Link
              href=""
              className="flex h-full w-full flex-1 flex-col items-center justify-center gap-8 rounded-xl border border-bpsBlue text-4xl font-bold shadow-sm hover:bg-bpsBlue hover:text-white max-[512px]:flex-row"
            >
              <Image
                src="/jadwal.png"
                alt="Gambar Icon Jadwal"
                width={800 * 0.156}
                height={800 * 0.156}
              />
              Jadwal
            </Link>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
};

export default page;
