import Link from "next/link";
import Image from "next/image";

import { allDailyChemicalSeries } from "@/.contentlayer/generated";
import { Button } from "@/components/ui/button";
import { PageHeader, PageHeaderDescription } from "@/components/page-header";
import { Separator } from "@/components/ui/separator";
import { Shell } from "@/components/shells/shell";
import { ProductCard } from "@/components/product-card";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { PlaceholderImage } from "@/components/placeholder-image";
import type { CC } from "../page";

export function DailyChemicalSeriesSection({
  params,
  limit,
  showReadMore = false,
  asHomepage = false,
}: {
  params: { cc?: CC };
  limit?: number;
  showReadMore?: boolean;
  asHomepage?: boolean;
}) {
  const allFilteredArticles = (allDailyChemicalSeries || [])
    .filter((article: any) => {
      const p = article?.published;
      if (p === false) return false;
      if (typeof p === "string" && p.trim().toLowerCase() === "false") return false;
      return true;
    })
    .sort((a: any, b: any) => b.date.localeCompare(a.date));

  const articles = limit ? allFilteredArticles.slice(0, limit) : allFilteredArticles;

  const VerticalCard = ({ product, i }: { product: any; i: number }) => {
    const hasWechatLink = Boolean(
      product.wechatUrl &&
      typeof product.wechatUrl === 'string' &&
      product.wechatUrl.startsWith('http')
    );

    const cardContent = (
      <article className="space-y-4 group">
        <AspectRatio ratio={1 / 1} className="overflow-hidden relative bg-slate-50 dark:bg-slate-800 rounded-lg">
          {product.image ? (
            <Image
              src={product.image}
              alt={product.title}
              fill
              sizes="(min-width: 1024px) 384px, (min-width: 768px) 288px, (min-width: 640px) 224px, 100vw"
              className="object-contain group-hover:scale-105 transition-transform"
              priority={i <= 1}
            />
          ) : (
            <PlaceholderImage asChild />
          )}
        </AspectRatio>
        <div className="space-y-2">
          <CardHeader className="space-y-2.5 p-0">
            <CardTitle className="line-clamp-1 dark:text-white">{product.title}</CardTitle>
            <CardDescription className="line-clamp-2 dark:text-gray-300">
              {product.description}
            </CardDescription>
          </CardHeader>
        </div>
      </article>
    );

    if (hasWechatLink) {
      return (
        <a href={product.wechatUrl} target="_blank" rel="noopener noreferrer">
          {cardContent}
        </a>
      );
    }

    return (
      <Link href={`/${params.cc}/daily-chemical-series/${product.slugAsParams}`}>
        {cardContent}
      </Link>
    );
  };

  return (
    <Shell className={asHomepage ? "md:pb-10" : "md:pb-10 min-h-[calc(100vh-156px)]"}>
      <PageHeader>
        <div className="text-2xl md:text-4xl font-bold text-gray-900 dark:text-white">
          {params.cc === "cn" ? "日化系列" : "Daily Chemical Series"}
        </div>
        <PageHeaderDescription className="text-lg text-gray-600 dark:text-gray-300">
          {params.cc === "cn" ? "日化系列产品" : "Daily Chemical Series Products"}
        </PageHeaderDescription>
      </PageHeader>

      {!asHomepage && <Separator className="my-6" />}

      {asHomepage ? (
        <section className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mt-6">
          {articles.length > 0 ? (
            articles.map((article: any, i: number) => (
              <VerticalCard key={article.slug} product={article} i={i} />
            ))
          ) : (
            <div className="col-span-full text-center py-12 text-gray-500 dark:text-gray-400">
              {params.cc === "cn" ? "暂无产品" : "No products yet"}
            </div>
          )}
        </section>
      ) : (
        <section className="flex flex-col gap-6">
          {articles.length > 0 ? (
            articles.map((article: any, i: number) => (
              <ProductCard
                key={article.slug}
                product={article}
                i={i}
                lang={params.cc!}
                basePath="/daily-chemical-series"
              />
            ))
          ) : (
            <div className="col-span-full text-center py-20">
              <div className="text-gray-400 dark:text-gray-500 mb-4">
                <svg className="w-16 h-16 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-medium text-gray-600 dark:text-gray-400 mb-2">暂无产品</h3>
              <p className="text-gray-500 dark:text-gray-400">敬请期待更多日化系列产品</p>
            </div>
          )}
        </section>
      )}

      {showReadMore && (
        <div className="flex justify-center mt-8">
          <Link href={`/${params.cc}/daily-chemical-series`}>
            <Button variant="outline" size="lg" className="text-lg">
              {params.cc === "cn" ? "了解更多" : "Learn More"}
            </Button>
          </Link>
        </div>
      )}
    </Shell>
  );
}
