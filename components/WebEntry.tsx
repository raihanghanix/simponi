import Container from "./Container";
import Link from "next/link";
import { webEntryLinks } from "@/utils/links";

const WebEntry = () => {
  return (
    <section
      id="web-entry"
      className="flex h-auto items-start justify-start py-16 shadow-inner max-lg:py-8"
    >
      <Container>
        <div className="flex flex-col items-start justify-start gap-8 px-4 py-8 max-xl:px-24 max-lg:gap-16 max-lg:px-8">
          <div className="flex w-full flex-col gap-16">
            <h1 className="text-start text-6xl font-bold leading-tight max-lg:text-center max-sm:text-5xl max-sm:leading-tight">
              Web Entry
            </h1>
            <div className="grid w-full grid-cols-2 justify-start gap-8 max-lg:justify-center max-[678px]:gap-4 max-sm:grid-cols-1">
              {webEntryLinks.map((link, i) => {
                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    className="flex gap-8 rounded-lg border border-neutral-300 bg-white p-12 text-lg transition-colors duration-100 hover:bg-neutral-200"
                  >
                    <div className="flex flex-1 flex-col gap-2 truncate">
                      <p className="font-semibold">{link.name}</p>
                      <p className="truncate font-normal text-neutral-600">
                        {link.href}
                      </p>
                    </div>
                    <div className="flex items-center justify-center">
                      <i className="fa-solid fa-arrow-up-right-from-square text-bpsBlue"></i>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default WebEntry;
