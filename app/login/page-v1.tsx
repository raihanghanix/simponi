"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { FormEvent } from "react";

// TODO: IMPLEMENT LOGIN
const Page = () => {
  const router = useRouter();

  const handleSubmit = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    router.push("/");
  };

  return (
    <section id="login" className="relative h-screen px-4 pb-4 pt-28">
      <div className="mx-auto flex h-full w-10/12 items-center justify-center gap-8 max-lg:flex-col max-lg:text-center">
        <div className="flex max-w-96 flex-col items-center justify-center gap-8 rounded-lg border border-bpsBlue p-8 text-center shadow-sm">
          <div className="flex items-center gap-2">
            <Image
              src="/bps-logo.png"
              alt="Logo BPS"
              width={961 * 0.08}
              height={505 * 0.08}
            />
            <p className="text-2xl font-bold text-bpsBlue">SIMPONI</p>
          </div>
          <div className="">
            <p>
              Silahkan masuk menggunakan username dan password yang sudah
              didaftarkan admin.
            </p>
          </div>
          <form
            action=""
            method="POST"
            className="flex w-full flex-col gap-4"
            onSubmit={handleSubmit}
          >
            <input
              type="text"
              name=""
              id=""
              placeholder="Username"
              className="w-full rounded-lg border border-black p-4"
              required
            />
            <input
              type="password"
              name=""
              id=""
              placeholder="Password"
              className="w-full rounded-lg border border-black p-4"
              required
            />
            <button
              type="submit"
              className="w-full rounded-lg bg-bpsBlue px-8 py-4 font-bold text-white hover:hover:text-[#F24E1E]"
            >
              Masuk
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Page;
