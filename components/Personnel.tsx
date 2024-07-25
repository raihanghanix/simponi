import Image from "next/image";
import Container from "./Container";

const Personnel = () => {
  return (
    <section
      id="personil"
      className="flex h-auto items-center justify-center bg-neutral-50/80 py-8 shadow-inner"
    >
      <Container>
        <div className="flex flex-col items-center justify-center gap-16 p-8 max-xl:px-24 max-lg:px-8">
          <h2 className="text-center text-4xl font-bold">Personil</h2>
          <div className="grid grid-cols-5 gap-4 max-xl:grid-cols-4 max-lg:grid-cols-3 max-md:grid-cols-2 max-[512px]:grid-cols-1">
            {Array.from({ length: 10 }).map((_, i) => (
              <div
                key={i}
                className="flex flex-col items-center justify-center gap-8 rounded-lg border border-neutral-300 bg-white p-8 shadow"
              >
                <Image src="/avatar.svg" alt="" width={200} height={200} />
                <p className="text-lg font-bold text-neutral-600">
                  Personil {i + 1}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Personnel;
