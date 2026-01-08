import Link from "next/link";

import { allTripleAxeSeries } from "@/.contentlayer/generated";
import { Button } from "@/components/ui/button";
import { PageHeader, PageHeaderDescription } from "@/components/page-header";
import { Separator } from "@/components/ui/separator";
import { Shell } from "@/components/shells/shell";
import { ArticleCard } from "../articles/_components/event-card";
import type { CC } from "../page";

export function TripleAxeSeriesSection({
  params,
  limit,
  showReadMore = false,
}: {
  params: { cc?: CC };
  limit?: number;
  showReadMore?: boolean;
}) {
  const allFilteredArticles = (allTripleAxeSeries || [])
    .filter((article: any) => {
      const p = article?.published;
      if (p === false) return false;
      if (typeof p === "string" && p.trim().toLowerCase() === "false") return false;
      return true;
    })
    .sort((a: any, b: any) => b.date.localeCompare(a.date));

  const articles = limit ? allFilteredArticles.slice(0, limit) : allFilteredArticles;

  return (
    <Shell className="md:pb-10 min-h-[calc(100vh-156px)]">
      <PageHeader>
        <div className="text-2xl md:text-4xl font-bold text-gray-900 dark:text-white">
          {params.cc === "cn" ? "三板斧系列" : "Triple-Axe Series"}
        </div>
        <PageHeaderDescription className="text-lg text-gray-600 dark:text-gray-300">
          {params.cc === "cn" ? "核心效能系列，专注于提升作物产量与品质" : "Core efficiency series focused on improving crop yield and quality"}
        </PageHeaderDescription>
      </PageHeader>

      <Separator className="my-6" />

      <section className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {articles.length > 0 ? (
          articles.map((article: any, i: number) => (
            <ArticleCard
              key={article.slug}
              article={article}
              i={i}
              lang={params.cc!}
              basePath="/triple-axe-series"
            />
          ))
        ) : (
          <div className="col-span-full text-center py-20">
            <div className="text-gray-400 mb-4">
              <svg
                className="w-16 h-16 mx-auto"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1}
                  d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <h3 className="text-xl font-medium text-gray-600 mb-2">暂无产品</h3>
            <p className="text-gray-500">敬请期待更多三板斧系列产品</p>
          </div>
        )}
      </section>

      {showReadMore && (
        <div className="flex justify-center mt-8">
          <Link href={`/${params.cc}/triple-axe-series`}>
            <Button variant="outline" size="lg" className="text-lg">
              {params.cc === "cn" ? "了解更多" : "Learn More"}
            </Button>
          </Link>
        </div>
      )}
    </Shell>
  );
}
