import { allArticles } from "@/.contentlayer/generated";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { PageHeader, PageHeaderDescription } from "@/components/page-header";
import { Separator } from "@/components/ui/separator";
import { Shell } from "@/components/shells/shell";
import { ArticleCard } from "./_components/event-card";
import type { CC } from "../page";

export function ArticlesSection({
  params,
  limit,
  showReadMore = false,
}: {
  params: { cc?: CC };
  limit?: number;
  showReadMore?: boolean;
}) {
  const allFilteredArticles = (allArticles || [])
    .filter((article: any) => article.published)
    .sort((a: any, b: any) => b.date.localeCompare(a.date));

  const articles = limit ? allFilteredArticles.slice(0, limit) : allFilteredArticles;

  return (
    <Shell className="md:pb-10 min-h-[calc(100vh-156px)]">
      <PageHeader>
        <div className="text-2xl md:text-4xl font-bold text-gray-900 dark:text-white">
          {params.cc === "cn" ? "原料产品" : "Agricultural Inputs"}
        </div>
        <PageHeaderDescription className="text-lg text-gray-600 dark:text-gray-300">
          Agricultural Inputs
        </PageHeaderDescription>
      </PageHeader>

      <Separator className="my-6" />

      <section className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {articles.length > 0 ? (
          articles.map((article: any, i: number) => (
            <ArticleCard key={article.slug} article={article} i={i} lang={params.cc!} />
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
            <h3 className="text-xl font-medium text-gray-600 mb-2">暂无文章</h3>
            <p className="text-gray-500">请检查 content/articles/ 目录是否有 .mdx 文件</p>
          </div>
        )}
      </section>

      {showReadMore && (
        <div className="flex justify-center mt-8">
          <Link href={`/${params.cc}/articles`}>
            <Button variant="outline" size="lg" className="text-lg">
              {params.cc === "cn" ? "了解更多" : "Read More"}
            </Button>
          </Link>
        </div>
      )}
    </Shell>
  );
}
