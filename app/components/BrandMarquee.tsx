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

      <div className="mt-6 space-y-3 overflow-hidden px-4 sm:hidden">
        <div className="mobile-brand-marquee flex w-max items-center">
          {[...brandLogos.slice(0, 9), ...brandLogos.slice(0, 9)].map(
            (logoSrc, index) => (
              <div
                key={`mobile-top-${logoSrc}-${index}`}
                className="mx-4 flex h-12 w-24 shrink-0 items-center justify-center"
              >
                <div className="relative h-7 w-full">
                  <Image
                    src={logoSrc}
                    alt={`鍝佺墝 ${index + 1}`}
                    fill
                    className="object-contain"
                    sizes="96px"
                  />
                </div>
              </div>
            )
          )}
        </div>

        <div className="mobile-brand-marquee-reverse flex w-max items-center">
          {[...brandLogos.slice(9), ...brandLogos.slice(9)].map(
            (logoSrc, index) => (
              <div
                key={`mobile-bottom-${logoSrc}-${index}`}
                className="mx-4 flex h-12 w-24 shrink-0 items-center justify-center"
              >
                <div className="relative h-7 w-full">
                  <Image
                    src={logoSrc}
                    alt={`鍝佺墝 ${index + 10}`}
                    fill
                    className="object-contain"
                    sizes="96px"
                  />
                </div>
              </div>
            )
          )}
        </div>
      </div>

      <div className="relative mt-6 hidden overflow-hidden py-4 sm:block">
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

        .mobile-brand-marquee {
          animation: mobile-brand-marquee 18s linear infinite;
        }

        .mobile-brand-marquee-reverse {
          animation: mobile-brand-marquee-reverse 20s linear infinite;
        }

        @keyframes brand-marquee {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-50%);
          }
        }

        @keyframes mobile-brand-marquee {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-50%);
          }
        }

        @keyframes mobile-brand-marquee-reverse {
          from {
            transform: translateX(-50%);
          }
          to {
            transform: translateX(0);
          }
        }
      `}</style>
    </section>
  );
}
