import Link from "next/link";
import Image from "next/image";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { CardTitle, CardDescription } from "@/components/ui/card";
import { PageHeader, PageHeaderDescription } from "@/components/page-header";
import { Separator } from "@/components/ui/separator";
import { Shell } from "@/components/shells/shell";
import type { CC } from "../page";

export default function ReagentProductsPage({ params }: { params: { cc: string } }) {
  const isCn = params.cc === "cn";

  const reagentCategories = [
    {
      id: "triple-axe-series",
      title: isCn ? "三板斧系列" : "Triple-Axe Series",
      image: "/Triple-Axe Series/三板斧封面.png",
      description: isCn 
        ? "核心效能系列，专注于提升作物产量与品质。采用先进的生物技术配方，为作物提供全方位营养支持。" 
        : "Core efficiency series focused on improving crop yield and quality with advanced biotech formulations.",
    },
    {
      id: "agrarius-series",
      title: isCn ? "AGRARIUS系列" : "AGRARIUS Series",
      image: "/product-images/agrarius-main.jpg",
      description: isCn
        ? "国际领先的有机水溶肥料，全水快溶，调理土壤。采用进口原料，确保产品质量和效果。"
        : "Internationally leading organic water-soluble fertilizer with fast dissolution and soil conditioning properties.",
    },
    {
      id: "guanghua-bio-series",
      title: isCn ? "光华生物系列" : "Guanghua Biotech Series",
      image: "/product-images/biotech-contrast.jpg",
      description: isCn
        ? "生物技术深度赋能，提供显著的作物对比改良效果。结合微生物技术，激发作物自身潜力。"
        : "Deeply empowered by biotechnology, providing significant crop improvement effects with microbial technology.",
    }
  ];

  return (
    <Shell className="md:pb-10 min-h-[calc(100vh-156px)]">
      <PageHeader>
        <div className="text-2xl md:text-4xl font-bold text-gray-900 dark:text-white">
          {isCn ? "制剂产品系列" : "Reagent Product Series"}
        </div>
        <PageHeaderDescription className="text-lg text-gray-600 dark:text-gray-300">
          {isCn 
            ? "专业生物制剂产品，为现代农业提供全方位解决方案" 
            : "Professional biological reagent products providing comprehensive solutions for modern agriculture"}
        </PageHeaderDescription>
      </PageHeader>

      <Separator className="my-6" />

      <section className="flex flex-col gap-6">
        {reagentCategories.map((product, i) => {
          const isEven = i % 2 === 0;
          return (
            <Link key={product.id} href={`/${params.cc}/${product.id}`}>
              <article className={`flex flex-col ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'} gap-6 items-center group bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100 dark:border-gray-700`}>
                {/* 产品图片 */}
                <div className="w-full md:w-[30%] flex-shrink-0">
                  <AspectRatio ratio={425/350} className="overflow-hidden bg-slate-50 dark:bg-slate-800">
                    <Image
                      src={product.image}
                      alt={product.title}
                      fill
                      sizes="(min-width: 768px) 30vw, 100vw"
                      className="object-contain group-hover:scale-105 transition-transform duration-500"
                      priority={i <= 2}
                    />
                  </AspectRatio>
                </div>

                {/* 产品信息 */}
                <div className="flex-1 p-6 md:p-8">
                  <CardTitle className="text-xl md:text-2xl font-bold text-green-700 dark:text-green-400 mb-3 group-hover:text-green-600 transition-colors">
                    {product.title}
                  </CardTitle>
                  <CardDescription className="text-base text-gray-600 dark:text-gray-300 leading-relaxed line-clamp-3 mb-4">
                    {product.description}
                  </CardDescription>
                  <div className="flex items-center text-green-600 dark:text-green-400 font-medium">
                    <span className="mr-2">{isCn ? '了解更多' : 'Learn More'}</span>
                    <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </div>
                </div>
              </article>
            </Link>
          );
        })}
      </section>
    </Shell>
  );
}
