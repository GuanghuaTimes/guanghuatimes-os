"use client";

import { useState } from "react";
import { allArticles } from "@/.contentlayer/generated";
import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import { PageHeader, PageHeaderDescription } from "@/components/page-header";
import { Separator } from "@/components/ui/separator";
import { Shell } from "@/components/shells/shell";
import { ArticleCard } from "./_components/event-card";
import type { CC } from "../page";

const ITEMS_PER_PAGE = 5;

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
  const [currentPage, setCurrentPage] = useState(1);
  
  const allFilteredArticles = (allArticles || [])
    .filter((article: any) => article.published)
    .sort((a: any, b: any) => {
      if (a.pinned && !b.pinned) return -1;
      if (!a.pinned && b.pinned) return 1;
      return b.date.localeCompare(a.date);
    });

  const articles = limit ? allFilteredArticles.slice(0, limit) : allFilteredArticles;
  
  const totalPages = Math.ceil(articles.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const paginatedArticles = articles.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  const isCn = params.cc === "cn";

  const content = (
    <>
      {!asSubsection && (
        <>
          <PageHeader>
            <div className="text-2xl md:text-4xl font-bold text-gray-900 dark:text-white">
              {isCn ? "农业科普" : "Knowledge Base"}
            </div>
            <PageHeaderDescription className="text-lg text-gray-600 dark:text-gray-300">
              {isCn ? "探索农业科普知识和技术文章" : "Explore farming knowledge and technical articles"}
            </PageHeaderDescription>
          </PageHeader>
          <Separator className="my-6" />
        </>
      )}

      <section className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {paginatedArticles.length > 0 ? (
          paginatedArticles.map((article: any, i: number) => (
            <ArticleCard key={article.slug} article={article} i={i} lang={params.cc!} />
          ))
        ) : (
          <div className="text-center py-12 text-gray-500 dark:text-gray-400">
            {isCn ? "暂无农业科普文章" : "No articles yet"}
          </div>
        )}
      </section>

      {/* 分页控件 */}
      {totalPages > 1 && (
        <div className="flex items-center justify-center gap-2 mt-8">
          <Button
            variant="outline"
            size="sm"
            onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
            disabled={currentPage === 1}
            className="flex items-center gap-1"
          >
            <ChevronLeft className="w-4 h-4" />
            {isCn ? "上一页" : "Prev"}
          </Button>
          
          <div className="flex items-center gap-1">
            {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
              <Button
                key={page}
                variant={currentPage === page ? "default" : "outline"}
                size="sm"
                onClick={() => setCurrentPage(page)}
                className="w-8 h-8 p-0"
              >
                {page}
              </Button>
            ))}
          </div>
          
          <Button
            variant="outline"
            size="sm"
            onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))}
            disabled={currentPage === totalPages}
            className="flex items-center gap-1"
          >
            {isCn ? "下一页" : "Next"}
            <ChevronRight className="w-4 h-4" />
          </Button>
        </div>
      )}

      {/* 页码信息 */}
      {articles.length > 0 && (
        <div className="text-center text-sm text-gray-500 dark:text-gray-400 mt-4">
          {isCn 
            ? `共 ${articles.length} 条，第 ${currentPage}/${totalPages} 页` 
            : `Total ${articles.length} items, Page ${currentPage}/${totalPages}`}
        </div>
      )}

      {showReadMore && (
        <div className="flex justify-center mt-8">
          <Link href={`/${params.cc}/articles`}>
            <Button variant="outline" size="lg" className="text-lg">
              {isCn ? "了解更多" : "Read More"}
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
