import { Facebook, Linkedin, MessageCircle, Play, Share2 } from "lucide-react";

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

export default function SiteFooter() {
  return (
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
  );
}
