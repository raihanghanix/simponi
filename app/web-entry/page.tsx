import Container from "@/components/Container";
import { webEntryLinks } from "@/utils/links";
import OutlineLinkFull from "@/components/OutlineLinkFull";
import Heading from "@/components/Heading";

const page = () => {
  return (
    <section
      id="web-entry"
      className="flex h-auto items-start justify-start py-16 shadow-inner max-lg:py-8"
    >
      <Container>
        <div className="flex flex-col items-start justify-start gap-8 px-4 py-8 max-xl:px-24 max-lg:gap-16 max-lg:px-8">
          <div className="flex w-full flex-col gap-16">
            <Heading>Web Entry</Heading>
            <div className="grid w-full grid-cols-2 justify-start gap-4 max-lg:grid-cols-1 max-lg:justify-center max-[678px]:gap-4">
              {webEntryLinks.map((linkObj, i) => {
                return <OutlineLinkFull key={linkObj.name} linkObj={linkObj} />;
              })}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default page;
