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
      <ul className="list-disc pl-6 space-y-2 text-gray-700 dark:text-gray-200">
        <li>
          {cc === "cn"
            ? "作为团体标准主编单位，起草 2 项全国性团队标准："
            : "As a lead drafting organization, we have drafted two national group standards:"}
        </li>
        <li>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-4">
            <div className="space-y-2">
              <div>
                {cc === "cn"
                  ? "《含聚谷氨酸大量元素水溶肥料》"
                  : "Poly-γ-glutamic acid large-element water-soluble fertilizer"}
              </div>
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
                className="group relative block w-full overflow-hidden rounded-md border text-left"
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
                <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-black/40 text-sm font-medium text-white opacity-0 transition-opacity group-hover:opacity-100">
                  点击查看大图
                </div>
              </button>
            </div>
            <div className="space-y-2">
              <div>
                {cc === "cn"
                  ? "《含褐藻寡糖大量元素水溶肥料》"
                  : "Alginate oligosaccharide large-element water-soluble fertilizer"}
              </div>
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
                className="group relative block w-full overflow-hidden rounded-md border text-left"
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
                <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-black/40 text-sm font-medium text-white opacity-0 transition-opacity group-hover:opacity-100">
                  点击查看大图
                </div>
              </button>
            </div>
          </div>
        </li>
        <li>
          {cc === "cn"
            ? "作为团体标准起草单位，起草 3 项全国性团体标准："
            : "As a drafting organization, we have drafted three national group standards:"}
        </li>
        <li>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-4">
            <div className="space-y-2">
              <div>
                {cc === "cn"
                  ? "《含聚谷氨酸复合肥料》"
                  : "Poly-γ-glutamic acid compound fertilizer"}
              </div>
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
                className="group relative block w-full overflow-hidden rounded-md border text-left"
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
                <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-black/40 text-sm font-medium text-white opacity-0 transition-opacity group-hover:opacity-100">
                  点击查看大图
                </div>
              </button>
            </div>
            <div className="space-y-2">
              <div>
                {cc === "cn"
                  ? "《含聚谷氨酸磷酸肥料》"
                  : "Poly-γ-glutamic acid phosphate fertilizer"}
              </div>
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
                className="group relative block w-full overflow-hidden rounded-md border text-left"
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
                <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-black/40 text-sm font-medium text-white opacity-0 transition-opacity group-hover:opacity-100">
                  点击查看大图
                </div>
              </button>
            </div>
            <div className="space-y-2">
              <div>
                {cc === "cn"
                  ? "《含多肽大量元素水溶肥料》"
                  : "Peptide-containing large-element water-soluble fertilizer"}
              </div>
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
                className="group relative block w-full overflow-hidden rounded-md border text-left"
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
                <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-black/40 text-sm font-medium text-white opacity-0 transition-opacity group-hover:opacity-100">
                  点击查看大图
                </div>
              </button>
            </div>
          </div>
        </li>
      </ul>

      <div className="mt-6">
        <h3 className="text-xl font-semibold mb-3">
          {cc === "cn" ? "发明专利" : "Invention Patents"}
        </h3>
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
