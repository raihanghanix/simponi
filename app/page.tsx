import Container from "@/components/Container";
import Image from "next/image";
import { links } from "@/utils/links";
import pohon from "@/app/img/pohon.png";
import Heading from "@/components/Heading";
import Description from "@/components/Description";
import OutlineLinkMinimal from "@/components/OutlineLinkMinimal";

const Home = () => {
  return (
    <section
      id="hero"
      className="flex h-auto items-center justify-center py-16 shadow-inner max-lg:py-8"
    >
      <Container>
        <div className="flex flex-row items-center gap-8 px-4 py-8 max-xl:px-24 max-lg:flex-col max-lg:gap-16 max-lg:px-8">
          <div className="flex flex-col gap-16">
            <Heading>Sistem Monitoring Produksi Terkini</Heading>
            <Description>
              SIMPONI merupakan website yang dirancang khusus untuk bagian
              produksi Badan Pusat Statistik Provinsi Jambi yang digunakan untuk
              monitoring dan evaluasi produksi di Provinsi Jambi.
            </Description>
            <div className="max-lg :justify-center flex w-full justify-start gap-8 max-[678px]:flex-col max-[678px]:gap-4">
              {links.map((linkObj) => {
                if (linkObj.name === "Web Entry") return null;
                return (
                  <OutlineLinkMinimal key={linkObj.name} linkObj={linkObj} />
                );
              })}
            </div>
          </div>
          <div>
            <Image src={pohon} alt="Gambar Pohon" width={640} height={640} />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Home;
