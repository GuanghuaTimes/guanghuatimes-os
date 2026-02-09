"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";

export default function IntellectualPropertySection({ cc = "cn" }: { cc?: "cn" | "en" }) {
  const [lightbox, setLightbox] = useState<{ src: string; alt: string } | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!lightbox) return;

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setLightbox(null);
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [lightbox]);

  useEffect(() => {
    if (!lightbox) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [lightbox]);

  return (
    <div id="intellectual-property">
      <h2 className="text-2xl font-bold mb-3">
        {cc === "cn" ? (
          <>
            <span className="sm:hidden">标准制定</span>
            <span className="hidden sm:inline">知识产权</span>
          </>
        ) : (
          "Intellectual Property"
        )}
      </h2>
      <ul className="space-y-2 text-gray-700 dark:text-gray-200">
        <li>
          <strong>
            {cc === "cn"
              ? "作为团体标准主编单位，起草 2 项全国性团队标准："
              : "As a lead drafting organization, we have drafted two national group standards:"}
          </strong>
        </li>
        <li>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-4">
            <div className="space-y-2">
              <button
                type="button"
                onClick={() =>
                  setLightbox({
                    src: "/text/bzzd01.png",
                    alt:
                      cc === "cn"
                        ? "团体标准：《含聚谷氨酸大量元素水溶肥料》"
                        : "Group standard: Poly-γ-glutamic acid large-element water-soluble fertilizer",
                  })
                }
                className="group relative flex h-full w-full flex-col overflow-hidden rounded-md border text-left"
                title={cc === "cn" ? "点击查看大图" : "Click to view"}
              >
                <img
                  src="/text/bzzd01.png"
                  alt={
                    cc === "cn"
                      ? "团体标准：《含聚谷氨酸大量元素水溶肥料》"
                      : "Group standard: Poly-γ-glutamic acid large-element water-soluble fertilizer"
                  }
                  className="block h-80 w-full bg-white object-contain sm:h-96"
                />
                <div className="line-clamp-2 flex h-12 items-center justify-center overflow-hidden border-t px-3 text-center text-sm font-medium leading-snug">
                  {cc === "cn"
                    ? "《含聚谷氨酸大量元素水溶肥料》"
                    : "Poly-γ-glutamic acid large-element water-soluble fertilizer"}
                </div>
                <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-black/40 text-sm font-medium text-white opacity-0 transition-opacity group-hover:opacity-100">
                  点击查看大图
                </div>
              </button>
            </div>
            <div className="space-y-2">
              <button
                type="button"
                onClick={() =>
                  setLightbox({
                    src: "/text/bzzd02.png",
                    alt:
                      cc === "cn"
                        ? "团体标准：《含褐藻寡糖大量元素水溶肥料》"
                        : "Group standard: Alginate oligosaccharide large-element water-soluble fertilizer",
                  })
                }
                className="group relative flex h-full w-full flex-col overflow-hidden rounded-md border text-left"
                title={cc === "cn" ? "点击查看大图" : "Click to view"}
              >
                <img
                  src="/text/bzzd02.png"
                  alt={
                    cc === "cn"
                      ? "团体标准：《含褐藻寡糖大量元素水溶肥料》"
                      : "Group standard: Alginate oligosaccharide large-element water-soluble fertilizer"
                  }
                  className="block h-80 w-full bg-white object-contain sm:h-96"
                />
                <div className="line-clamp-2 flex h-12 items-center justify-center overflow-hidden border-t px-3 text-center text-sm font-medium leading-snug">
                  {cc === "cn"
                    ? "《含褐藻寡糖大量元素水溶肥料》"
                    : "Alginate oligosaccharide large-element water-soluble fertilizer"}
                </div>
                <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-black/40 text-sm font-medium text-white opacity-0 transition-opacity group-hover:opacity-100">
                  点击查看大图
                </div>
              </button>
            </div>
          </div>
        </li>
        <li>
          <strong>
            {cc === "cn"
              ? "作为团体标准起草单位，起草 3 项全国性团体标准："
              : "As a drafting organization, we have drafted three national group standards:"}
          </strong>
        </li>
        <li>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-4">
            <div className="space-y-2">
              <button
                type="button"
                onClick={() =>
                  setLightbox({
                    src: "/text/bzzd03.png",
                    alt:
                      cc === "cn"
                        ? "团体标准：《含聚谷氨酸复合肥料》"
                        : "Group standard: Poly-γ-glutamic acid compound fertilizer",
                  })
                }
                className="group relative flex h-full w-full flex-col overflow-hidden rounded-md border text-left"
                title={cc === "cn" ? "点击查看大图" : "Click to view"}
              >
                <img
                  src="/text/bzzd03.png"
                  alt={
                    cc === "cn"
                      ? "团体标准：《含聚谷氨酸复合肥料》"
                      : "Group standard: Poly-γ-glutamic acid compound fertilizer"
                  }
                  className="block h-80 w-full bg-white object-contain sm:h-96"
                />
                <div className="line-clamp-2 flex h-12 items-center justify-center overflow-hidden border-t px-3 text-center text-sm font-medium leading-snug">
                  {cc === "cn" ? "《含聚谷氨酸复合肥料》" : "Poly-γ-glutamic acid compound fertilizer"}
                </div>
                <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-black/40 text-sm font-medium text-white opacity-0 transition-opacity group-hover:opacity-100">
                  点击查看大图
                </div>
              </button>
            </div>
            <div className="space-y-2">
              <button
                type="button"
                onClick={() =>
                  setLightbox({
                    src: "/text/bzzd04.png",
                    alt:
                      cc === "cn"
                        ? "团体标准：《含聚谷氨酸磷酸肥料》"
                        : "Group standard: Poly-γ-glutamic acid phosphate fertilizer",
                  })
                }
                className="group relative flex h-full w-full flex-col overflow-hidden rounded-md border text-left"
                title={cc === "cn" ? "点击查看大图" : "Click to view"}
              >
                <img
                  src="/text/bzzd04.png"
                  alt={
                    cc === "cn"
                      ? "团体标准：《含聚谷氨酸磷酸肥料》"
                      : "Group standard: Poly-γ-glutamic acid phosphate fertilizer"
                  }
                  className="block h-80 w-full bg-white object-contain sm:h-96"
                />
                <div className="line-clamp-2 flex h-12 items-center justify-center overflow-hidden border-t px-3 text-center text-sm font-medium leading-snug">
                  {cc === "cn" ? "《含聚谷氨酸磷酸肥料》" : "Poly-γ-glutamic acid phosphate fertilizer"}
                </div>
                <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-black/40 text-sm font-medium text-white opacity-0 transition-opacity group-hover:opacity-100">
                  点击查看大图
                </div>
              </button>
            </div>
            <div className="space-y-2">
              <button
                type="button"
                onClick={() =>
                  setLightbox({
                    src: "/text/bzzd05.png",
                    alt:
                      cc === "cn"
                        ? "团体标准：《含多肽大量元素水溶肥料》"
                        : "Group standard: Peptide-containing large-element water-soluble fertilizer",
                  })
                }
                className="group relative flex h-full w-full flex-col overflow-hidden rounded-md border text-left"
                title={cc === "cn" ? "点击查看大图" : "Click to view"}
              >
                <img
                  src="/text/bzzd05.png"
                  alt={
                    cc === "cn"
                      ? "团体标准：《含多肽大量元素水溶肥料》"
                      : "Group standard: Peptide-containing large-element water-soluble fertilizer"
                  }
                  className="block h-80 w-full bg-white object-contain sm:h-96"
                />
                <div className="line-clamp-2 flex h-12 items-center justify-center overflow-hidden border-t px-3 text-center text-sm font-medium leading-snug">
                  {cc === "cn"
                    ? "《含多肽大量元素水溶肥料》"
                    : "Peptide-containing large-element water-soluble fertilizer"}
                </div>
                <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-black/40 text-sm font-medium text-white opacity-0 transition-opacity group-hover:opacity-100">
                  点击查看大图
                </div>
              </button>
            </div>
          </div>
        </li>
        <li>
          <strong>{cc === "cn" ? "发明专利：" : "Invention Patents:"}</strong>
        </li>
        <li>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
            {Array.from({ length: 7 }, (_, i) => i + 1).map((n) => (
              <button
                key={n}
                type="button"
                onClick={() =>
                  setLightbox({
                    src: `/text/zscq0${n}.png`,
                    alt:
                      cc === "cn" ? `发明专利 zscq0${n}` : `Invention patent zscq0${n}`,
                  })
                }
                className="group relative block w-full overflow-hidden rounded-md border text-left"
                title={cc === "cn" ? "点击查看大图" : "Click to view"}
              >
                <img
                  src={`/text/zscq0${n}.png`}
                  alt={cc === "cn" ? `发明专利 zscq0${n}` : `Invention patent zscq0${n}`}
                  className="block h-80 w-full bg-white object-contain sm:h-96"
                />
                <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-black/40 text-sm font-medium text-white opacity-0 transition-opacity group-hover:opacity-100">
                  点击查看大图
                </div>
              </button>
            ))}
          </div>
        </li>
      </ul>

      <div className="mt-6">
        <h3 className="text-xl font-semibold mb-3">
          {cc === "cn" ? "所获荣誉" : "Honors"}
        </h3>
        <div className="space-y-4">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-4">
            <div className="space-y-2">
              <button
                type="button"
                onClick={() =>
                  setLightbox({
                    src: "/text/shry01.png",
                    alt:
                      cc === "cn"
                        ? "国家科学技术进步奖"
                        : "National Science and Technology Progress Award",
                  })
                }
                className="group relative flex h-full w-full flex-col overflow-hidden rounded-md border text-left"
                title={cc === "cn" ? "点击查看大图" : "Click to view"}
              >
                <img
                  src="/text/shry01.png"
                  alt={
                    cc === "cn" ? "国家科学技术进步奖" : "National Science and Technology Progress Award"
                  }
                  className="block h-80 w-full bg-white object-contain sm:h-96"
                />
                <div className="line-clamp-2 flex h-12 items-center justify-center overflow-hidden border-t px-3 text-center text-sm font-medium leading-snug">
                  {cc === "cn" ? "国家科学技术进步奖" : "National Science and Technology Progress Award"}
                </div>
                <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-black/40 text-sm font-medium text-white opacity-0 transition-opacity group-hover:opacity-100">
                  点击查看大图
                </div>
              </button>
            </div>

            <div className="space-y-2">
              <button
                type="button"
                onClick={() =>
                  setLightbox({
                    src: "/text/shry02.png",
                    alt:
                      cc === "cn"
                        ? "湖北省科学技术发明奖"
                        : "Hubei Provincial Science and Technology Invention Award",
                  })
                }
                className="group relative flex h-full w-full flex-col overflow-hidden rounded-md border text-left"
                title={cc === "cn" ? "点击查看大图" : "Click to view"}
              >
                <img
                  src="/text/shry02.png"
                  alt={
                    cc === "cn"
                      ? "湖北省科学技术发明奖"
                      : "Hubei Provincial Science and Technology Invention Award"
                  }
                  className="block h-80 w-full bg-white object-contain sm:h-96"
                />
                <div className="line-clamp-2 flex h-12 items-center justify-center overflow-hidden border-t px-3 text-center text-sm font-medium leading-snug">
                  {cc === "cn" ? "湖北省科学技术发明奖" : "Hubei Provincial Science and Technology Invention Award"}
                </div>
                <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-black/40 text-sm font-medium text-white opacity-0 transition-opacity group-hover:opacity-100">
                  点击查看大图
                </div>
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-4">
            <div className="space-y-2">
              <button
                type="button"
                onClick={() =>
                  setLightbox({
                    src: "/text/shry03.png",
                    alt:
                      cc === "cn"
                        ? "中国烟草科学技术奖"
                        : "China Tobacco Science and Technology Award",
                  })
                }
                className="group relative flex h-full w-full flex-col overflow-hidden rounded-md border text-left"
                title={cc === "cn" ? "点击查看大图" : "Click to view"}
              >
                <img
                  src="/text/shry03.png"
                  alt={
                    cc === "cn" ? "中国烟草科学技术奖" : "China Tobacco Science and Technology Award"
                  }
                  className="block h-80 w-full bg-white object-contain sm:h-96"
                />
                <div className="line-clamp-2 flex h-12 items-center justify-center overflow-hidden border-t px-3 text-center text-sm font-medium leading-snug">
                  {cc === "cn" ? "中国烟草科学技术奖" : "China Tobacco Science and Technology Award"}
                </div>
                <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-black/40 text-sm font-medium text-white opacity-0 transition-opacity group-hover:opacity-100">
                  点击查看大图
                </div>
              </button>
            </div>

            <div className="space-y-2">
              <button
                type="button"
                onClick={() =>
                  setLightbox({
                    src: "/text/shry04.png",
                    alt:
                      cc === "cn"
                        ? "全国生态农业科技创新协助联盟理事单位"
                        : "National Ecological Agriculture Science and Technology Innovation Cooperation Alliance Council Member",
                  })
                }
                className="group relative flex h-full w-full flex-col overflow-hidden rounded-md border text-left"
                title={cc === "cn" ? "点击查看大图" : "Click to view"}
              >
                <img
                  src="/text/shry04.png"
                  alt={
                    cc === "cn"
                      ? "全国生态农业科技创新协助联盟理事单位"
                      : "National Ecological Agriculture Science and Technology Innovation Cooperation Alliance Council Member"
                  }
                  className="block h-80 w-full bg-white object-contain sm:h-96"
                />
                <div className="line-clamp-2 flex h-12 items-center justify-center overflow-hidden border-t px-3 text-center text-sm font-medium leading-snug">
                  {cc === "cn"
                    ? "全国生态农业科技创新协助联盟理事单位"
                    : "National Ecological Agriculture Science and Technology Innovation Cooperation Alliance Council Member"}
                </div>
                <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-black/40 text-sm font-medium text-white opacity-0 transition-opacity group-hover:opacity-100">
                  点击查看大图
                </div>
              </button>
            </div>

            <div className="space-y-2">
              <button
                type="button"
                onClick={() =>
                  setLightbox({
                    src: "/text/shry05.png",
                    alt:
                      cc === "cn"
                        ? "中华农业科技奖（优秀创新团队奖）（中国农业部颁发）"
                        : "China Agricultural Science and Technology Award (Excellent Innovation Team Award) (Issued by Ministry of Agriculture)",
                  })
                }
                className="group relative flex h-full w-full flex-col overflow-hidden rounded-md border text-left"
                title={cc === "cn" ? "点击查看大图" : "Click to view"}
              >
                <img
                  src="/text/shry05.png"
                  alt={
                    cc === "cn"
                      ? "中华农业科技奖（优秀创新团队奖）（中国农业部颁发）"
                      : "China Agricultural Science and Technology Award (Excellent Innovation Team Award) (Issued by Ministry of Agriculture)"
                  }
                  className="block h-80 w-full bg-white object-contain sm:h-96"
                />
                <div className="line-clamp-2 flex h-12 items-center justify-center overflow-hidden border-t px-3 text-center text-sm font-medium leading-snug">
                  {cc === "cn"
                    ? "中华农业科技奖（优秀创新团队奖）（中国农业部颁发）"
                    : "China Agricultural Science and Technology Award (Excellent Innovation Team Award) (Issued by Ministry of Agriculture)"}
                </div>
                <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-black/40 text-sm font-medium text-white opacity-0 transition-opacity group-hover:opacity-100">
                  点击查看大图
                </div>
              </button>
            </div>

            <div className="space-y-2">
              <button
                type="button"
                onClick={() =>
                  setLightbox({
                    src: "/text/shry06.png",
                    alt:
                      cc === "cn"
                        ? "中国生物刺激剂发展联盟理事单位"
                        : "China Biostimulant Development Alliance Council Member",
                  })
                }
                className="group relative flex h-full w-full flex-col overflow-hidden rounded-md border text-left"
                title={cc === "cn" ? "点击查看大图" : "Click to view"}
              >
                <img
                  src="/text/shry06.png"
                  alt={
                    cc === "cn"
                      ? "中国生物刺激剂发展联盟理事单位"
                      : "China Biostimulant Development Alliance Council Member"
                  }
                  className="block h-80 w-full bg-white object-contain sm:h-96"
                />
                <div className="line-clamp-2 flex h-12 items-center justify-center overflow-hidden border-t px-3 text-center text-sm font-medium leading-snug">
                  {cc === "cn" ? "中国生物刺激剂发展联盟理事单位" : "China Biostimulant Development Alliance Council Member"}
                </div>
                <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-black/40 text-sm font-medium text-white opacity-0 transition-opacity group-hover:opacity-100">
                  点击查看大图
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>

      {mounted && lightbox
        ? createPortal(
            <div
              className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/70 p-4"
              role="dialog"
              aria-modal="true"
              onClick={() => setLightbox(null)}
            >
              <div
                className="relative max-h-[90vh] max-w-[95vw] overflow-auto rounded-md bg-white p-2 dark:bg-slate-950"
                onClick={(e) => e.stopPropagation()}
              >
                <button
                  type="button"
                  onClick={() => setLightbox(null)}
                  className="absolute right-2 top-2 rounded-md bg-black/70 px-2 py-1 text-sm font-medium text-white"
                >
                  关闭
                </button>
                <img
                  src={lightbox.src}
                  alt={lightbox.alt}
                  className="block h-auto max-h-[85vh] w-auto max-w-[90vw]"
                />
              </div>
            </div>,
            document.body
          )
        : null}
    </div>
  );
}
