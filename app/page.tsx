"use client";

import Image from "next/image";
import {
  ChevronDown,
  ChevronUp,
  Facebook,
  Linkedin,
  MessageCircle,
  Play,
  Share2,
} from "lucide-react";
import { useEffect, useState } from "react";

const navItems = ["产品", "解决方案", "资源", "关于我们", "行业报告"];

const productMenuColumns = [
  {
    title: "支付",
    items: [
      { name: "线上收银台", desc: "定制您的结账体验" },
      { name: "扫码签约", desc: "消除屏幕端支付的阻碍" },
      { name: "代扣", desc: "让复购更便捷" },
      { name: "订阅", desc: "周期性自动扣款" },
    ],
  },
  {
    title: "业务优化",
    items: [
      { name: "Antom Shield", desc: "AI 智能风险管理" },
      { name: "全球支付管家", desc: "覆盖全球支付，轻松提升支付成功率及运营效率" },
      { name: "收入增长引擎", desc: "提高支付成功率" },
      { name: "合并支付", desc: "跨店支付，一次搞定" },
      { name: "收单分账", desc: "实时分账与打款，灵活无缝对接" },
    ],
  },
  {
    title: "数字化营销",
    items: [{ name: "A+ Rewards", desc: "流量增长引擎" }],
  },
];

const solutionMenuItems = [
  { name: "电商平台", desc: "让企业电商支付更便捷" },
  { name: "数字娱乐", desc: "引领游戏与娱乐行业的新纪元" },
  { name: "航旅出行", desc: "助力旅游与出行企业进一步发展" },
];

const resourceMenuItems = [
  { name: "文档中心", desc: "实用的开发者指南与工具，助力快速集成" },
  { name: "指南", desc: "探索并深入了解全球支付的方方面面" },
  { name: "行业知识", desc: "支付前沿新闻与实用指南，把握行业动向" },
  { name: "常见问题", desc: "关于 Antom 的一切" },
  { name: "客户支持计划", desc: "选择合适的服务计划，助力业务增长" },
  { name: "通知中心", desc: "" },
];

const aboutMenuItems = [
  { name: "关于Antom", desc: "了解 Antom——蚂蚁国际旗下品牌" },
  { name: "新闻", desc: "" },
];

const aboutSideItems = ["蚂蚁国际", "Alipay+", "Bettr", "万里汇"];

const reportMenuItems = [
  "东南亚游戏玩家心智洞察与消费行为报告",
  "海外短剧行业洞察报告：东南亚",
  "亚洲电商报告：八国电商市场'性格'与支付'血脉'",
  "36氪出海 x Antom 独家深度解读：《跨境支付'成本问不到'》",
];

const slides = [
  { src: "/1.webp", alt: "轮播图 1" },
  { src: "/2.jpeg", alt: "轮播图 2" },
  { src: "/3.jpeg", alt: "轮播图 3" },
  { src: "/4.png", alt: "轮播图 4" },
  { src: "/5.png", alt: "轮播图 5" },
  { src: "/6.webp", alt: "轮播图 6" },
];

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

const paymentFeatures = [
  {
    title: "线上收银台",
    description: "轻松接收来自全球消费者的线上付款",
    image: "/26.svg",
  },
  {
    title: "扫码签约",
    description: "手机扫描大屏二维码以绑定支付方式",
    image: "/27.svg",
  },
  {
    title: "代扣",
    description: "授权您直接从指定支付方式扣款",
    image: "/25.svg",
  },
  {
    title: "订阅",
    description: "周期性发起代扣",
    image: "/28.svg",
  },
];

const paymentMethodImages = [
  "/30.png",
  "/31.png",
  "/32.png",
  "/33.png",
  "/34.png",
  "/35.png",
  "/36.png",
  "/37.png",
  "/38.png",
  "/39.png",
];

const advancedFeatures = [
  {
    title: "收入增长引擎",
    description:
      "通过支付能力查询、智能重试和交易挽回，博得更高的支付成功率",
    image: "/43.svg",
  },
  {
    title: "合并支付",
    description: "支持多商户多币种合并支付，提升顾客付款效率",
    image: "/40.svg",
  },
  {
    title: "收单分账",
    description:
      "平台商户将收单款项直接结算给多个参与方，降低汇兑损失",
    image: "/41.svg",
  },
  {
    title: "全球支付管家",
    description: "一站式全球支付管理平台",
    image: "/42.svg",
  },
  {
    title: "Antom Shield",
    description: "实时智能风控决策，降低风险，及时保障交易安全",
    image: "/44.svg",
  },
];

const securityFeatures = [
  {
    title: "银行卡欺诈预防",
    image: "/45.svg",
  },
  {
    title: "拒付争议管理",
    image: "/47.svg",
  },
  {
    title: "风险管理门户",
    image: "/46.svg",
  },
];

const securityHighlights = [
  {
    title: "全球领先的风险管理技术",
    description: "通过图计算、深度学习算法和实时决策减少拒付。",
    image: "/49.svg",
  },
  {
    title: "全球安全报告",
    description:
      "通过风险监测和报告网络，实时掌握全球安全动态，优化风险管理效率。",
    image: "/50.svg",
  },
  {
    title: "资深专家团队",
    description:
      "我们拥有 100 多名经验丰富的风险管理专家，为全球企业量身定制解决方案。",
    image: "/51.svg",
  },
  {
    title: "防止欺诈，保护客户",
    description:
      "利用 3D Secure 和实时决策防止欺诈，同时保障顺畅的用户体验。",
    image: "/48.svg",
  },
];

const footerColumns = [
  {
    title: "支付产品",
    items: ["线上收银台", "扫码签约", "代扣", "订阅", "支付方式"],
  },
  {
    title: "业务优化",
    items: [
      "Antom Shield",
      "全球支付管家",
      "收入增长引擎",
      "合并支付",
      "收单分账",
      "__TITLE__数字化营销",
      "A+ Rewards",
    ],
  },
  {
    title: "解决方案",
    items: [
      "电商平台",
      "__TITLE__资源",
      "文档中心",
      "指南",
      "行业知识",
      "常见问题",
      "客户支持计划",
      "通知中心",
    ],
  },
  {
    title: "关于我们",
    items: ["关于Antom", "蚂蚁国际", "Alipay+", "Bettr", "万里汇", "联系我们", "新闻"],
  },
];

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [activeNav, setActiveNav] = useState<string | null>(null);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 3500);

    return () => window.clearInterval(timer);
  }, []);

  return (
    <main className="min-h-screen bg-[linear-gradient(180deg,#f8fafc_0%,#eef4ff_42%,#ffffff_100%)] text-slate-900">
      <header className="sticky top-0 z-20 border-b border-white/60 bg-white/85 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-8 px-1 py-5 lg:px-2">
          <div className="flex items-center gap-8">
          <div className="relative h-10 w-36 shrink-0">
            <Image
              src="/antom.svg"
              alt="Antom"
              fill
              priority
              className="object-contain object-left"
              sizes="144px"
            />
          </div>

          <nav className="hidden items-center gap-2 md:flex">
            {navItems.map((item) => (
              <button
                key={item}
                type="button"
                onClick={() =>
                  setActiveNav((current) => (current === item ? null : item))
                }
                className={`flex items-center gap-1 px-4 py-2 text-sm font-semibold transition ${
                  activeNav === item
                    ? "border-b-4 border-[#1738c6] text-slate-950"
                    : "text-slate-700 hover:text-slate-950"
                }`}
              >
                <span>{item}</span>
                {activeNav === item ? (
                  <ChevronUp className="h-4 w-4" />
                ) : (
                  <ChevronDown className="h-4 w-4" />
                )}
              </button>
            ))}
          </nav>
          </div>
          <button
            type="button"
            className="hidden rounded-full bg-[#1738c6] px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-[#1330a9] md:inline-flex"
          >
            联系我们
          </button>
        </div>

        <div className="border-t border-slate-200/80 bg-white/70 md:hidden">
          <div className="mx-auto flex max-w-7xl flex-wrap gap-x-3 gap-y-2 px-1 py-3">
            {navItems.map((item) => (
              <button
                key={item}
                type="button"
                className="flex items-center gap-1 rounded-full bg-slate-100 px-3 py-1.5 text-sm font-medium text-slate-700"
              >
                <span>{item}</span>
                <ChevronDown className="h-4 w-4" />
              </button>
            ))}
          </div>
        </div>

        {activeNav === "产品" ? (
          <div className="hidden border-t border-slate-200 bg-white md:block">
            <div className="mx-auto grid max-w-7xl gap-6 px-1 py-8 lg:grid-cols-[0.9fr_1fr_1fr_0.8fr] lg:px-2">
              <div>
                <h2 className="text-3xl font-semibold tracking-tight text-slate-950">
                  产品
                </h2>
                <p className="mt-4 text-xl leading-[1.45] text-slate-500">
                  一站式支付、增长、数字化解决方案。
                </p>
                <a
                  href="#"
                  className="mt-5 inline-block text-lg font-semibold text-[#1738c6]"
                >
                  查看所有支付方式
                </a>
                <p className="mt-3 max-w-md text-base leading-7 text-slate-500">
                  Antom 支持全球300+支付方式，助您轻松布局国际市场。
                </p>
              </div>

              {productMenuColumns.map((column) => (
                <div key={column.title}>
                  <h3 className="text-[1.35rem] font-semibold tracking-tight text-slate-950">
                    {column.title}
                  </h3>
                  <div className="mt-5 space-y-5">
                    {column.items.map((item) => (
                      <div key={item.name}>
                        <div className="text-[1.15rem] font-semibold text-[#1738c6]">
                          {item.name}
                        </div>
                        <p className="mt-1 text-sm leading-6 text-slate-600">
                          {item.desc}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        ) : null}

        {activeNav === "解决方案" ? (
          <div className="hidden border-t border-slate-200 bg-white md:block">
            <div className="mx-auto grid max-w-7xl gap-8 px-1 py-8 lg:grid-cols-[0.95fr_1fr] lg:px-2">
              <div>
                <h2 className="text-3xl font-semibold tracking-tight text-slate-950">
                  解决方案
                </h2>
                <p className="mt-4 max-w-md text-xl leading-[1.5] text-slate-500">
                  定制化解决方案，助力业务增长提速。
                </p>
              </div>

              <div className="space-y-7">
                {solutionMenuItems.map((item) => (
                  <div key={item.name}>
                    <div className="text-[1.15rem] font-semibold text-[#1738c6]">
                      {item.name}
                    </div>
                    <p className="mt-1 text-base leading-7 text-slate-600">
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ) : null}

        {activeNav === "资源" ? (
          <div className="hidden border-t border-slate-200 bg-white md:block">
            <div className="mx-auto grid max-w-7xl gap-8 px-1 py-8 lg:grid-cols-[0.95fr_1fr] lg:px-2">
              <div>
                <h2 className="text-3xl font-semibold tracking-tight text-slate-950">
                  资源
                </h2>
                <p className="mt-4 max-w-md text-xl leading-[1.5] text-slate-500">
                  为您的业务提供丰富资源支持
                </p>
              </div>

              <div className="space-y-7">
                {resourceMenuItems.map((item) => (
                  <div key={item.name}>
                    <div className="text-[1.15rem] font-semibold text-[#1738c6]">
                      {item.name}
                    </div>
                    {item.desc ? (
                      <p className="mt-1 text-base leading-7 text-slate-600">
                        {item.desc}
                      </p>
                    ) : null}
                  </div>
                ))}
              </div>
            </div>
          </div>
        ) : null}

        {activeNav === "关于我们" ? (
          <div className="hidden border-t border-slate-200 bg-white md:block">
            <div className="mx-auto grid max-w-7xl gap-8 px-1 py-8 lg:grid-cols-[1fr_0.9fr_0.34fr] lg:px-2">
              <div>
                <h2 className="text-3xl font-semibold tracking-tight text-slate-950">
                  关于我们
                </h2>
                <p className="mt-4 max-w-lg text-xl leading-[1.5] text-slate-500">
                  我们的平台致力于帮助企业更快实现商业目标。
                </p>
              </div>

              <div className="space-y-7">
                {aboutMenuItems.map((item) => (
                  <div key={item.name}>
                    <div className="text-[1.15rem] font-semibold text-[#1738c6]">
                      {item.name}
                    </div>
                    {item.desc ? (
                      <p className="mt-1 text-base leading-7 text-slate-600">
                        {item.desc}
                      </p>
                    ) : null}
                  </div>
                ))}
              </div>

              <div className="bg-slate-100 px-8 py-8">
                <div className="space-y-8">
                  {aboutSideItems.map((item) => (
                    <div
                      key={item}
                      className="text-[1.15rem] font-semibold text-[#1738c6]"
                    >
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ) : null}

        {activeNav === "行业报告" ? (
          <div className="hidden border-t border-slate-200 bg-white md:block">
            <div className="mx-auto grid max-w-7xl gap-8 px-1 py-8 lg:grid-cols-[0.95fr_1fr] lg:px-2">
              <div>
                <h2 className="text-3xl font-semibold tracking-tight text-slate-950">
                  行业报告
                </h2>
                <p className="mt-4 max-w-lg text-xl leading-[1.5] text-slate-500">
                  深入了解市场与行业趋势，获取助力业务成长的实用指南。
                </p>
              </div>

              <div className="space-y-7">
                {reportMenuItems.map((item) => (
                  <div
                    key={item}
                    className="text-[1.15rem] font-semibold leading-8 text-[#1738c6]"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        ) : null}
      </header>

      <section className="flex flex-col py-0">
        <div className="relative overflow-hidden bg-slate-950">
          <div
            className="flex transition-transform duration-700 ease-out"
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          >
            {slides.map((slide) => (
              <div
                key={slide.src}
                className="relative h-[300px] min-w-full sm:h-[420px] lg:h-[620px]"
              >
                <Image
                  src={slide.src}
                  alt={slide.alt}
                  fill
                  priority={slide.src === slides[0].src}
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 1280px"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-slate-950/10" />
              </div>
            ))}
          </div>

          <div className="pointer-events-none absolute inset-x-0 bottom-0 z-10 p-6 sm:p-10 lg:p-14">
            <div className="mx-auto max-w-7xl">
              <div className="max-w-3xl">
              <h1 className="text-3xl font-semibold leading-tight tracking-tight text-white drop-shadow-[0_8px_24px_rgba(15,23,42,0.35)] sm:text-4xl lg:text-5xl">
                AI平台赋能支付，增长与数字化转型
              </h1>
              <p className="mt-4 max-w-2xl text-sm leading-7 text-white/88 drop-shadow-[0_6px_18px_rgba(15,23,42,0.3)] sm:text-base">
                Antom以AI驱动解决方案和覆盖多市场的本土洞察，助力各类规模企业持续增长。我们面向各行业客户出海展业的多种需求，打造安全可靠、随需而扩的一站式全球支付平台。
              </p>
              </div>
            </div>
          </div>

          <div className="absolute bottom-5 left-1/2 flex -translate-x-1/2 gap-2 rounded-full bg-black/30 px-3 py-2 backdrop-blur-sm">
            {slides.map((slide, index) => (
              <button
                key={slide.src}
                type="button"
                aria-label={`切换到第 ${index + 1} 张轮播图`}
                onClick={() => setCurrentSlide(index)}
                className={`h-2.5 rounded-full transition-all ${
                  currentSlide === index
                    ? "w-8 bg-white"
                    : "w-2.5 bg-white/55 hover:bg-white/80"
                }`}
              />
            ))}
          </div>
        </div>

        <div className="flex w-full flex-col items-center justify-between gap-8 px-6 py-8 sm:flex-row sm:items-start sm:gap-6 lg:px-10">
          <div className="min-w-0 flex-1 text-center">
            <div className="text-3xl font-semibold tracking-tight text-slate-950">
              200+
            </div>
            <div className="mt-2 text-sm text-slate-600">个国家/地区收单</div>
          </div>
          <div className="hidden h-12 w-px bg-slate-200 sm:block" />
          <div className="min-w-0 flex-1 text-center">
            <div className="text-3xl font-semibold tracking-tight text-slate-950">
              300+
            </div>
            <div className="mt-2 text-sm text-slate-600">支付方式</div>
          </div>
          <div className="hidden h-12 w-px bg-slate-200 sm:block" />
          <div className="min-w-0 flex-1 text-center">
            <div className="text-3xl font-semibold tracking-tight text-slate-950">
              100+
            </div>
            <div className="mt-2 text-sm text-slate-600">交易币种</div>
          </div>
        </div>

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
                  className="mx-7 flex h-20 w-44 shrink-0 items-center justify-center"
                >
                  <div className="relative h-12 w-full">
                    <Image
                      src={logoSrc}
                      alt={`品牌 ${index + 1}`}
                      fill
                      className="object-contain"
                      sizes="160px"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="pt-14">
          <div className="mx-auto max-w-5xl text-center">
            <h2 className="text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
              支付功能
            </h2>
            <p className="mt-5 text-base leading-8 text-slate-600 sm:text-lg">
              Antom 不断扩展全球收单服务，助力大中小企业便捷接入本地支付网络。依托强大的全球合作伙伴网络，Antom 能够为企业的数字化转型、业务增长与全球拓展提供便利。无论是利用丰富多样的支付产品进行本地或跨境交易，还是借助 Alipay+ 生态开辟支付以外的更多服务，一切都可通过 Antom 轻松实现。依托近 20 亿电子钱包用户、自带的会员与营销工具，我们助您触达更多客户，加速业务增长。
            </p>
          </div>

          <div className="mx-auto mt-10 grid max-w-6xl gap-5 sm:grid-cols-2">
            {paymentFeatures.map((feature) => (
              <article
                key={feature.title}
                className="flex items-center justify-between gap-6 rounded-[28px] border border-slate-200 bg-white/85 p-6 shadow-[0_18px_45px_rgba(15,23,42,0.08)] backdrop-blur-sm"
              >
                <div className="flex-1 text-left">
                  <h3 className="text-2xl font-semibold tracking-tight text-slate-950">
                    {feature.title}
                  </h3>
                  <p className="mt-3 min-h-12 text-sm leading-7 text-slate-600 sm:text-base">
                    {feature.description}
                  </p>
                  <button
                    type="button"
                    className="mt-6 inline-flex items-center rounded-full bg-slate-950 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-slate-800"
                  >
                    了解详情
                  </button>
                </div>

                <div className="relative h-32 w-32 shrink-0 sm:h-36 sm:w-36">
                  <Image
                    src={feature.image}
                    alt={feature.title}
                    fill
                    className="object-contain"
                    sizes="144px"
                  />
                </div>
              </article>
            ))}
          </div>

          <article className="mx-auto mt-5 flex max-w-6xl flex-col overflow-hidden rounded-[32px] border border-slate-200 bg-white/85 shadow-[0_18px_45px_rgba(15,23,42,0.08)] backdrop-blur-sm lg:flex-row">
            <div className="flex flex-1 flex-col justify-center px-6 py-8 sm:px-8 sm:py-10">
              <h3 className="text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
                安全、合规地提供收单服务
              </h3>
              <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-600 sm:text-base">
                丰富的本地收单牌照资源和收单伙伴关系，让我们的服务遍及中国内地、中国香港、日本、韩国、泰国、印尼、菲律宾、巴基斯坦、新加坡、澳大利亚、美国及欧盟等市场。
              </p>
            </div>

            <div className="relative min-h-[260px] flex-1 lg:min-h-[340px]">
              <Image
                src="/29.webp"
                alt="安全、合规地提供收单服务"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </article>

          <section className="pt-14">
            <div className="mx-auto max-w-5xl text-center">
              <h2 className="text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
                覆盖全球的收单能力
              </h2>
              <p className="mt-5 text-base leading-8 text-slate-600 sm:text-lg">
                支持300+支付方式，包括银行卡、网银、电子钱包等国际主流和本地常用付款方式，涵盖超过100种交易币种，连接您和20亿消费者。
              </p>
              <button
                type="button"
                className="mt-6 inline-flex items-center rounded-full bg-slate-950 px-6 py-3 text-sm font-medium text-white transition hover:bg-slate-800"
              >
                查看支付方式
              </button>
            </div>

            <div className="mx-auto mt-10 grid max-w-6xl grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
              {paymentMethodImages.map((imageSrc, index) => (
                <div
                  key={imageSrc}
                  className="rounded-[24px] border border-slate-200 bg-white/85 p-4 shadow-[0_18px_45px_rgba(15,23,42,0.08)] backdrop-blur-sm"
                >
                  <div className="relative h-24 w-full sm:h-28">
                    <Image
                      src={imageSrc}
                      alt={`支付方式 ${index + 1}`}
                      fill
                      className="object-contain"
                      sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 20vw"
                    />
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section className="pt-14">
            <div className="mx-auto max-w-5xl text-center">
              <h2 className="text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
                改善支付表现
              </h2>
              <p className="mt-5 text-base leading-8 text-slate-600 sm:text-lg">
                除了为您接收全球交易，我们还准备了一系列增强工具，帮您更精细地处理每一笔交易。通过防范欺诈、提升支付成功率等手段，助力实现降本增效并提升消费者满意度。
              </p>
            </div>

            <div className="mx-auto grid max-w-6xl gap-5 sm:grid-cols-2">
              {advancedFeatures.map((feature) => (
                <article
                  key={feature.title}
                  className="flex items-center justify-between gap-6 rounded-[28px] border border-slate-200 bg-white/85 p-6 shadow-[0_18px_45px_rgba(15,23,42,0.08)] backdrop-blur-sm"
                >
                  <div className="flex-1 text-left">
                    <h3 className="text-2xl font-semibold tracking-tight text-slate-950">
                      {feature.title}
                    </h3>
                    <p className="mt-3 min-h-12 text-sm leading-7 text-slate-600 sm:text-base">
                      {feature.description}
                    </p>
                    <button
                      type="button"
                      className="mt-6 inline-flex items-center rounded-full bg-slate-950 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-slate-800"
                    >
                      了解详情
                    </button>
                  </div>

                  <div className="relative h-32 w-32 shrink-0 sm:h-36 sm:w-36">
                    <Image
                      src={feature.image}
                      alt={feature.title}
                      fill
                      className="object-contain"
                      sizes="144px"
                    />
                  </div>
                </article>
              ))}
            </div>
          </section>

          <section className="pt-14">
            <div className="mx-auto max-w-5xl text-center">
              <h2 className="text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
                深耕安全解决方案
              </h2>
              <p className="mt-5 text-base leading-8 text-slate-600 sm:text-lg">
                行业领先的欺诈管理解决方案，基于十余年全球支付反欺诈经验，为各行业定制专业风控解决方案，让您放心交易。
              </p>
            </div>

            <div className="mx-auto mt-10 grid max-w-6xl gap-5 sm:grid-cols-3">
              {securityFeatures.map((feature) => (
                <article
                  key={feature.title}
                  className="flex flex-col items-center rounded-[28px] border border-slate-200 bg-white/85 px-6 py-8 text-center shadow-[0_18px_45px_rgba(15,23,42,0.08)] backdrop-blur-sm"
                >
                  <div className="relative h-24 w-24 sm:h-28 sm:w-28">
                    <Image
                      src={feature.image}
                      alt={feature.title}
                      fill
                      className="object-contain"
                      sizes="112px"
                    />
                  </div>
                  <h3 className="mt-6 text-xl font-semibold tracking-tight text-slate-950">
                    {feature.title}
                  </h3>
                </article>
              ))}
            </div>

            <div className="mx-auto mt-8 grid max-w-6xl gap-8 lg:grid-cols-[1.15fr_0.85fr]">
              <div className="divide-y divide-slate-200/80">
                {securityHighlights.map((item) => (
                  <article
                    key={item.title}
                    className="flex items-start gap-4 py-5 first:pt-0 last:pb-0"
                  >
                    <div className="relative h-14 w-14 shrink-0 sm:h-16 sm:w-16">
                      <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        className="object-contain"
                        sizes="64px"
                      />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold tracking-tight text-slate-950">
                        {item.title}
                      </h3>
                      <p className="mt-2 text-sm leading-7 text-slate-600 sm:text-base">
                        {item.description}
                      </p>
                    </div>
                  </article>
                ))}
              </div>

              <div className="relative min-h-[320px] overflow-hidden rounded-[28px] bg-slate-50 lg:min-h-full">
                <Image
                  src="/52.svg"
                  alt="安全解决方案"
                  fill
                  className="object-contain p-6 sm:p-8"
                  sizes="(max-width: 1024px) 100vw, 40vw"
                />
              </div>
            </div>
          </section>

          <section className="pt-14">
            <div className="mx-auto max-w-5xl text-center">
              <h2 className="text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
                以创新驱动增长
              </h2>
              <p className="mt-5 text-base leading-8 text-slate-600 sm:text-lg">
                借助前沿的数字营销与定制化产品，显著提升支付成功率与营收表现，释放您的增长潜力。
              </p>
            </div>

            <article className="mx-auto mt-10 grid max-w-6xl gap-6 overflow-hidden rounded-[32px] border border-slate-200 bg-white/85 p-6 shadow-[0_18px_45px_rgba(15,23,42,0.08)] backdrop-blur-sm lg:grid-cols-[1fr_0.9fr] lg:p-8">
              <div className="flex flex-col justify-center">
                <h3 className="text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
                  A+ Rewards
                </h3>
                <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-600 sm:text-base">
                  Antom 的 AI 营销解决方案，助您提升用户互动、获客效率与营销成效。
                </p>
                <button
                  type="button"
                  className="mt-6 inline-flex w-fit items-center rounded-full bg-slate-950 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-slate-800"
                >
                  了解详情
                </button>
              </div>

              <div className="relative min-h-[260px] rounded-[28px] bg-slate-50">
                <Image
                  src="/53.svg"
                  alt="A+ Rewards"
                  fill
                  className="object-contain p-6 sm:p-8"
                  sizes="(max-width: 1024px) 100vw, 40vw"
                />
              </div>
            </article>
          </section>

          <section className="pt-14">
            <div className="mx-auto max-w-5xl text-center">
              <h2 className="text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
                解决方案
              </h2>
              <p className="mt-5 text-base leading-8 text-slate-600 sm:text-lg">
                基于对行业模式和展业痛点的深刻理解，我们构建产品组合，推出一站式垂直行业解决方案，帮助您更高效、更智能地应对全球支付需求，实现数字化经营。
              </p>
            </div>

            <div className="mx-auto mt-10 grid max-w-6xl gap-5 lg:grid-cols-2">
              <article className="flex items-center justify-between gap-6 overflow-hidden rounded-[32px] border border-slate-200 bg-white/85 p-6 shadow-[0_18px_45px_rgba(15,23,42,0.08)] backdrop-blur-sm sm:p-8">
                <div className="flex flex-1 flex-col justify-center">
                  <h3 className="text-3xl font-semibold tracking-tight text-slate-950">
                    电商平台
                  </h3>
                  <p className="mt-4 text-sm leading-7 text-slate-600 sm:text-base">
                    助力平台客户向入驻商户提供更优质的服务
                  </p>
                  <button
                    type="button"
                    className="mt-6 inline-flex w-fit items-center rounded-full bg-slate-950 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-slate-800"
                  >
                    了解详情
                  </button>
                </div>

                <div className="relative h-40 w-40 shrink-0 rounded-[28px] bg-slate-50 sm:h-48 sm:w-48">
                  <Image
                    src="/55.svg"
                    alt="电商平台"
                    fill
                    className="object-contain p-6"
                    sizes="(max-width: 1024px) 100vw, 30vw"
                  />
                </div>
              </article>

              <article className="flex items-center justify-between gap-6 overflow-hidden rounded-[32px] border border-slate-200 bg-white/85 p-6 shadow-[0_18px_45px_rgba(15,23,42,0.08)] backdrop-blur-sm sm:p-8">
                <div className="flex flex-1 flex-col justify-center">
                  <h3 className="text-3xl font-semibold tracking-tight text-slate-950">
                    数字娱乐
                  </h3>
                  <p className="mt-4 text-sm leading-7 text-slate-600 sm:text-base">
                    助力转化并留存更多全球数字娱乐用户
                  </p>
                  <button
                    type="button"
                    className="mt-6 inline-flex w-fit items-center rounded-full bg-slate-950 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-slate-800"
                  >
                    了解详情
                  </button>
                </div>

                <div className="relative h-40 w-40 shrink-0 rounded-[28px] bg-slate-50 sm:h-48 sm:w-48">
                  <Image
                    src="/54.svg"
                    alt="数字娱乐"
                    fill
                    className="object-contain p-6"
                    sizes="(max-width: 1024px) 100vw, 30vw"
                  />
                </div>
              </article>
            </div>
          </section>

          <section className="pt-14">
            <article className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-[1fr_0.95fr]">
              <div className="flex flex-col justify-center">
                <h2 className="text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
                  助力泰国越捷航空，为全球旅行者提升支付体验
                </h2>
                <p className="mt-5 text-sm leading-8 text-slate-600 sm:text-base">
                  “支付是营收增长的关键一环，助力我们能以更快速度驶向未来。” 观看视频，了解泰国越捷航空如何与 Antom 旗下品牌 2C2P 携手合作，共同开拓全球展业新旅程。
                </p>
              </div>

              <div className="overflow-hidden rounded-[28px] bg-slate-950">
                <video
                  className="h-full w-full object-cover"
                  controls
                  preload="metadata"
                >
                  <source src="/56.webm" type="video/webm" />
                  您的浏览器暂不支持视频播放。
                </video>
              </div>
            </article>
          </section>

          <section className="pt-14">
            <div className="mx-auto max-w-6xl">
              <div className="mb-0">
                <h2 className="text-3xl font-semibold leading-none tracking-tight text-slate-950 sm:text-4xl">
                  新闻
                </h2>
              </div>

              <div className="-mt-20 grid gap-5 md:grid-cols-3">
                {[
                  { src: "/57.webp", label: "BillEase" },
                  { src: "/58.webp", label: "Kakao Pay" },
                  { src: "/59.webp", label: "NAVER Pay" },
                ].map((item) => (
                  <div key={item.src}>
                    <div className="relative overflow-hidden rounded-[28px]">
                    <div className="relative h-[260px] sm:h-[320px]">
                      <Image
                        src={item.src}
                        alt={item.label}
                        fill
                        className="object-contain object-bottom"
                        sizes="(max-width: 768px) 100vw, 33vw"
                      />
                    </div>
                    </div>
                    <p className="mt-0 text-sm font-medium text-slate-700">
                      {item.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section className="pt-14">
            <div className="mx-auto flex max-w-6xl flex-col gap-6 rounded-[32px] bg-[#0f2f7a] px-6 py-10 shadow-[0_24px_60px_rgba(15,47,122,0.28)] sm:px-8 lg:flex-row lg:items-center lg:justify-between lg:py-12">
              <div>
                <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                  即刻启用Antom收单服务
                </h2>
                <p className="mt-3 text-base text-white/80 sm:text-lg">
                  助力您的业务增长
                </p>
              </div>

              <button
                type="button"
                className="inline-flex w-fit items-center rounded-full bg-white px-6 py-3 text-sm font-medium text-[#0f2f7a] transition hover:bg-white/90"
              >
                联系我们
              </button>
            </div>
          </section>

          <footer className="mt-14 bg-[#051b86] text-white">
            <div className="mx-auto max-w-6xl px-6 py-10 sm:px-8">
              <div className="grid gap-8 lg:grid-cols-[1fr_1fr_1fr_1fr_0.9fr]">
                {footerColumns.map((column) => (
                  <div key={column.title}>
                    <h3 className="text-2xl font-semibold text-white/65">
                      {column.title}
                    </h3>
                    <ul className="mt-6 space-y-5 text-[1.05rem] font-semibold">
                      {column.items.map((item) => (
                        <li
                          key={item}
                          className={
                            item.startsWith("__TITLE__")
                              ? "pt-2 text-2xl text-white/65"
                              : ""
                          }
                        >
                          {item.replace("__TITLE__", "")}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}

                <div>
                  <h3 className="text-2xl font-semibold text-white/65">
                    关注 Antom
                  </h3>
                  <div className="mt-8 flex flex-wrap gap-6">
                    <Linkedin className="h-10 w-10" strokeWidth={1.8} />
                    <Facebook className="h-10 w-10" strokeWidth={1.8} />
                    <Share2 className="h-10 w-10" strokeWidth={1.8} />
                    <Play className="h-10 w-10" strokeWidth={1.8} />
                    <MessageCircle className="h-10 w-10" strokeWidth={1.8} />
                  </div>
                </div>
              </div>

              <div className="mt-10 border-t border-white/20 pt-8">
                <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
                  <div className="flex flex-wrap items-center gap-8 text-2xl font-semibold">
                    <span className="text-lg font-medium">Ant International</span>
                    <span>Alipay+</span>
                    <span>Bettr</span>
                    <span>WorldFirst</span>
                  </div>

                  <div className="flex flex-wrap items-center gap-8 text-xl">
                    <span>网站使用条款</span>
                    <span>Cookie声明</span>
                    <span>© 2026 Antom</span>
                  </div>
                </div>

                <div className="mt-6 flex flex-wrap gap-8 text-lg text-white/45">
                  <span>沪公网安备31011502400860</span>
                  <span>沪ICP备2021033667号-5</span>
                </div>
              </div>
            </div>
          </footer>
        </section>
      </section>

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
    </main>
  );
}
