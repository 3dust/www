"use client";

import Image from "next/image";
import Link from "next/link";
import { ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";

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

export default function SiteHeader() {
  const [activeNav, setActiveNav] = useState<string | null>(null);

  return (
    <header className="sticky top-0 z-20 border-b border-white/60 bg-white/85 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-8 px-1 py-5 lg:px-2">
        <div className="flex items-center gap-8">
          <div className="relative h-10 w-36 shrink-0">
            <Link href="/">
              <Image
                src="/antom.svg"
                alt="Antom"
                fill
                priority
                className="object-contain object-left"
                sizes="144px"
              />
            </Link>
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
        <Link
          href="/contact"
          className="hidden rounded-full bg-[#1738c6] px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-[#1330a9] md:inline-flex"
        >
          联系我们
        </Link>
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
              <a href="#" className="mt-5 inline-block text-lg font-semibold text-[#1738c6]">
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
                  <div key={item} className="text-[1.15rem] font-semibold text-[#1738c6]">
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
                <div key={item} className="text-[1.15rem] font-semibold leading-8 text-[#1738c6]">
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      ) : null}
    </header>
  );
}
