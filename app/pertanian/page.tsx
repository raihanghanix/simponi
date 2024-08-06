import Container from "@/components/Container";
import { pertanianLinks } from "@/utils/links";
import Spreadsheet from "@/components/Spreadsheet";
import Heading from "@/components/Heading";
import FilledLink from "@/components/FilledLink";
import Subheading from "@/components/Subheading";

const page = () => {
  const spreadsheetId =
    pertanianLinks.filter((item) => item.name === "Monev").at(0)
      ?.spreadsheetId ?? "";

  return (
    <section
      id="pek"
      className="flex h-auto items-start justify-start py-16 shadow-inner max-lg:py-8"
    >
      <Container>
        <div className="flex flex-col items-start justify-start gap-8 px-4 py-8 max-xl:px-24 max-lg:gap-16 max-lg:px-8">
          <div className="flex w-full flex-col gap-16">
            <Heading>Pertanian</Heading>
            <div className="grid w-full grid-cols-3 justify-start gap-4 max-lg:grid-cols-1 max-lg:justify-center">
              {pertanianLinks.map((linkObj) => {
                return <FilledLink key={linkObj.name} linkObj={linkObj} />;
              })}
            </div>
            <Subheading>Monitoring Pertanian</Subheading>
            <Spreadsheet spreadsheetId={spreadsheetId} />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default page;
