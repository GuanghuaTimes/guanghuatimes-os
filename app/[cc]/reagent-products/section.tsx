import Link from "next/link";
import Image from "next/image";
import { Shell } from "@/components/shells/shell";
import { Button } from "@/components/ui/button";
import { PageHeader, PageHeaderDescription } from "@/components/page-header";
import { Separator } from "@/components/ui/separator";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import type { CC } from "../page";

export function ReagentProductsSection({
  params,
  showReadMore = false,
}: {
  params: { cc?: CC };
  showReadMore?: boolean;
}) {
  const isCn = params.cc === "cn";

  const reagentCategories = [
    {
      id: "triple-axe-series",
      title: isCn ? "三板斧系列" : "Triple-Axe Series",
      image: "/Triple-Axe-Series/三板斧封面图.jpg",
      description: isCn
        ? "功能经作系列，主打“专而精”并非“大而全”"
        : "Core efficiency series focused on improving crop yield and quality with advanced biotech formulations.",
    },
    {
      id: "agrarius-series",
      title: isCn ? "AGRARIUS系列" : "AGRARIUS Series",
      image: "/agrarius-series/阿格瑞封面图.jpg",
      description: isCn
        ? "经济大田系列，营养全面、相互增效。"
        : "Internationally leading organic water-soluble fertilizer with fast dissolution and soil conditioning properties.",
    },
    {
      id: "guanghua-bio-series",
      title: isCn ? "光华生物系列" : "Guanghua Biotech Series",
      image: "/guanghua-bio-series/光华生物封面图.jpg",
      description: isCn
        ? "双向平衡系列，协同长效、使用灵活。"
        : "Deeply empowered by biotechnology, providing significant crop improvement effects with microbial technology.",
    },
  ];

  return (
    <Shell className="md:pb-10">
      <PageHeader>
        <div className="text-2xl md:text-4xl font-bold text-gray-900 dark:text-white">
          {isCn ? "制剂产品" : "Reagent Products"}
        </div>
        <PageHeaderDescription className="text-lg text-gray-600 dark:text-gray-300">
          {isCn
            ? "三大系列产品，为现代农业提供全方位解决方案"
            : "Three product series providing comprehensive solutions for modern agriculture"}
        </PageHeaderDescription>
      </PageHeader>

      <Separator className="my-6 hidden md:block" />

      <section className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-4 mt-6">
        {reagentCategories.map((product, i) => (
          <Link key={product.id} href={`/${params.cc}/${product.id}`}>
            <article className="space-y-4 group">
              <AspectRatio ratio={1 / 1} className="overflow-hidden relative bg-slate-50 dark:bg-slate-800 rounded-lg">
                <Image
                  src={product.image}
                  alt={product.title}
                  fill
                  sizes="(min-width: 1024px) 384px, (min-width: 768px) 288px, (min-width: 640px) 224px, 100vw"
                  className="object-contain group-hover:scale-105 transition-transform"
                  priority={i <= 1}
                />
              </AspectRatio>
              <div className="space-y-2">
                <CardHeader className="space-y-2.5 p-0">
                  <CardTitle className="line-clamp-1 dark:text-white">
                    {product.title}
                  </CardTitle>
                  <CardDescription className="line-clamp-2 dark:text-gray-300">
                    {product.description}
                  </CardDescription>
                </CardHeader>
              </div>
            </article>
          </Link>
        ))}
        {showReadMore && (
          <Link href={`/${params.cc}/reagent-products`} className="group">
            <article className="space-y-4">
              <AspectRatio
                ratio={1 / 1}
                className="overflow-hidden relative bg-white dark:bg-slate-800 rounded-lg border border-dashed border-slate-300/70 dark:border-slate-600/70"
              >
                <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 p-6">
                  <div className="text-lg font-semibold text-gray-900 dark:text-white">
                    {isCn ? "了解更多" : "Learn More"}
                  </div>
                  <Button
                    variant="outline"
                    size="lg"
                    className="text-lg hover:bg-[#1464A3] hover:text-white"
                  >
                    {isCn ? "查看全部制剂系列产品" : "Explore"}
                  </Button>
                </div>
              </AspectRatio>
            </article>
          </Link>
        )}
      </section>
    </Shell>
  );
}
