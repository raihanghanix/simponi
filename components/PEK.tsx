import Container from "./Container";
import Link from "next/link";
import { pekLinks } from "@/utils/links";
import Spreadsheet from "./Spreadsheet";

const PEK = () => {
  return (
    <section
      id="pek"
      className="flex h-auto items-start justify-start py-16 shadow-inner max-lg:py-8"
    >
      <Container>
        <div className="flex flex-col items-start justify-start gap-8 px-4 py-8 max-xl:px-24 max-lg:gap-16 max-lg:px-8">
          <div className="flex w-full flex-col gap-16">
            <h1 className="text-start text-6xl font-bold leading-tight max-lg:text-center max-sm:text-5xl max-sm:leading-tight">
              PEK
            </h1>
            <div
              className={`grid w-full grid-cols-3 justify-start gap-4 max-lg:grid-cols-1 max-lg:justify-center`}
            >
              {pekLinks.map((link, i) => {
                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    target="_blank"
                    className="flex gap-8 rounded-lg border-b-4 border-neutral-200 p-12 text-lg transition-transform duration-100 hover:scale-95"
                    style={{ background: link.bgColor }}
                  >
                    <div className="flex flex-1 flex-col gap-2 truncate">
                      <p className="truncate font-semibold text-white">
                        {link.name}
                      </p>
                      <p className="truncate font-normal text-neutral-100">
                        {link.href}
                      </p>
                    </div>
                    <div
                      className={`flex flex-col items-center justify-center gap-4 ${
                        link.iconTopClassName || link.iconBottomClassName
                          ? ""
                          : "hidden"
                      }`}
                    >
                      <i
                        className={`${
                          link.iconTopClassName
                            ? link.iconTopClassName
                            : "hidden"
                        } text-white`}
                      ></i>
                      <i
                        className={`${
                          link.iconBottomClassName
                            ? link.iconBottomClassName
                            : "hidden"
                        } text-white`}
                      ></i>
                    </div>
                  </Link>
                );
              })}
            </div>
            <h2 className="text-start text-3xl font-bold leading-tight max-lg:text-center max-sm:text-2xl max-sm:leading-tight">
              Monitoring PEK
            </h2>
            <Spreadsheet
              spreadsheetId={
                pekLinks.filter((item) => item.name === "Monev").at(0)
                  ?.spreadsheetId ?? ""
              }
            />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default PEK;
