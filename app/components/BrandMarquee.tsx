"use client";

import Image from "next/image";

const brandLogos = [
  "/7.png",
  "/8.png",
  "/9.png",
  "/10.png",
  "/11.png",
  "/12.png",
  "/13.png",
  "/14.png",
  "/15.png",
  "/16.png",
  "/17.svg",
  "/18.png",
  "/19.png",
  "/20.png",
  "/21.png",
  "/22.png",
  "/23.png",
  "/24.png",
];

export default function BrandMarquee() {
  return (
    <section className="pt-10">
      <h2 className="text-center text-2xl font-semibold tracking-tight text-slate-950 sm:text-3xl">
        深受众多国际知名品牌信赖
      </h2>

      <div className="relative mt-6 overflow-hidden py-4">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-20 bg-gradient-to-r from-white via-white/85 to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-20 bg-gradient-to-l from-white via-white/85 to-transparent" />

        <div className="brand-marquee flex w-max items-center">
          {[...brandLogos, ...brandLogos].map((logoSrc, index) => (
            <div
              key={`${logoSrc}-${index}`}
              className="mx-8 flex h-[11rem] w-[18rem] shrink-0 items-center justify-center"
            >
              <div className="relative h-[7rem] w-full overflow-hidden">
                <Image
                  src={logoSrc}
                  alt={`品牌 ${index + 1}`}
                  fill
                  className="object-contain"
                  style={{ transform: "scale(1.45)" }}
                  sizes="180px"
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .brand-marquee {
          animation: brand-marquee 36s linear infinite;
        }

        @keyframes brand-marquee {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </section>
  );
}
