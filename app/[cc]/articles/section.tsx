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
  asSubsection = false,
}: {
  params: { cc?: CC };
  limit?: number;
  showReadMore?: boolean;
  asSubsection?: boolean;
}) {
  const allFilteredArticles = (allArticles || [])
    .filter((article: any) => article.published)
    .sort((a: any, b: any) => b.date.localeCompare(a.date));

  const articles = limit ? allFilteredArticles.slice(0, limit) : allFilteredArticles;

  const content = (
    <>
      {!asSubsection && (
        <>
          <PageHeader>
            <div className="text-2xl md:text-4xl font-bold text-gray-900 dark:text-white">
              {params.cc === "cn" ? "农业科普" : "Knowledge Base"}
            </div>
            <PageHeaderDescription className="text-lg text-gray-600 dark:text-gray-300">
              {params.cc === "cn" ? "探索农业科普知识和技术文章" : "Explore farming knowledge and technical articles"}
            </PageHeaderDescription>
          </PageHeader>
          <Separator className="my-6" />
        </>
      )}

      <section className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {articles.length > 0 ? (
          articles.map((article: any, i: number) => (
            <ArticleCard key={article.slug} article={article} i={i} lang={params.cc!} />
          ))
        ) : (
          <div className="col-span-full text-center py-12 text-gray-500">
            {params.cc === "cn" ? "暂无农业科普文章" : "No articles yet"}
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
    </>
  );

  if (asSubsection) {
    return <div className="space-y-6">{content}</div>;
  }

  return (
    <Shell className="md:pb-10 min-h-[calc(100vh-156px)]">
      {content}
    </Shell>
  );
}
