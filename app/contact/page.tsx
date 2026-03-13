import Image from "next/image";
import SiteHeader from "../components/SiteHeader";
import SiteFooter from "../components/SiteFooter";
import BrandMarquee from "../components/BrandMarquee";

const contactItems = [
  "演示产品功能",
  "基于您的业务需求，制定一整套收单解决方案",
  "介绍定价、测算成本",
  "提供产品集成的技术支持",
];

const offerItems = [
  "多场景可用的支付工具",
  "提升营收的增强功能",
  "数字化营销解决方案",
  "覆盖全球的支付能力",
  "百位专家打造的顶尖风控系统",
];

const contactMethods = [
  { image: "/61.jpg", label: "WhatsApp", value: "123456789" },
  { image: "/62.png", label: "WeChat", value: "123456789" },
  { image: "/63.png", label: "QQ", value: "123456789" },
];

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      <SiteHeader />

      {/* Hero image */}
      <div className="relative h-[280px] w-full sm:h-[380px] lg:h-[480px]">
        <Image
          src="/60.jpg"
          alt="联系我们"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-slate-950/10" />
      </div>

      {/* Main content */}
      <section className="mx-auto max-w-6xl px-6 py-16 sm:px-8 lg:py-20">
        <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
          {/* Left: text */}
          <div>
            <h1 className="text-4xl font-semibold tracking-tight text-slate-950 sm:text-5xl">
              联系我们
            </h1>

            <div className="mt-10">
              <h2 className="text-xl font-semibold text-slate-950">
                咨询全球收单解决方案：
              </h2>
              <ul className="mt-5 space-y-4">
                {contactItems.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-base leading-7 text-slate-600">
                    <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[#1738c6]" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-10">
              <h2 className="text-xl font-semibold text-slate-950">
                我们提供：
              </h2>
              <ul className="mt-5 space-y-4">
                {offerItems.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-base leading-7 text-slate-600">
                    <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[#1738c6]" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right: contact methods */}
          <div className="flex flex-col gap-6">
            {contactMethods.map((method) => (
              <div
                key={method.label}
                className="flex items-center gap-5 rounded-[24px] border border-slate-200 bg-white px-6 py-5 shadow-[0_8px_30px_rgba(15,23,42,0.07)]"
              >
                <div className="relative h-14 w-14 shrink-0 overflow-hidden rounded-xl">
                  <Image
                    src={method.image}
                    alt={method.label}
                    fill
                    className="object-contain"
                    sizes="56px"
                  />
                </div>
                <div>
                  <div className="text-base font-semibold text-slate-950">
                    {method.label}
                  </div>
                  <div className="mt-1 text-lg font-medium text-[#1738c6]">
                    {method.value}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Brand marquee */}
      <div className="bg-white">
        <BrandMarquee />
      </div>

      <SiteFooter />
    </main>
  );
}
