import * as React from "react";
import { type Metadata } from "next";
import { allArticles } from "@/.contentlayer/generated";
import { Separator } from "@/components/ui/separator";
import { PageHeader, PageHeaderDescription } from "@/components/page-header";
import { Shell } from "@/components/shells/shell";
import { EventCardSkeleton } from "./_components/event-card-skeleton";
import { ArticleCard } from "./_components/event-card";
import { CC } from "../page";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
    metadataBase: new URL(process.env.NEXT_PUBLIC_APP_URL!),
        title: "Articles",
    description: "Explore the latest news and updates from the community",
};

const config = {
    title: "Agricultural Inputs",
    titleCn: "原料产品",
    description: "Agricultural Inputs",
};

interface PageProps {
    params: {
        cc: string;
    };
}

export async function generateStaticParams(): Promise<PageProps["params"][]> {
    return [{ cc: "cn" }, { cc: "en" }];
}

export default function ArticlePage({ params = { cc: "cn" } }: { params: { cc?: CC } }) {
    const articles = (allArticles || [])
        .filter((article: any) => article.published)
        .sort((a: any, b: any) => b.date.localeCompare(a.date));

    console.log('=== DEBUG ===');
    console.log('文章总数:', articles.length);

    return (
        <Shell className="md:pb-10 min-h-[calc(100vh-156px)]">
            <PageHeader>
                <div className="text-2xl md:text-4xl font-bold text-gray-900">
                    {params.cc === "cn" ? config.titleCn : config.title}
                </div>
                <PageHeaderDescription className="text-lg text-gray-600">
                    {config.description}
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
                        />
                    ))
                ) : (
                    <div className="col-span-full text-center py-20">
                        <div className="text-gray-400 mb-4">
                            <svg className="w-16 h-16 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                        </div>
                        <h3 className="text-xl font-medium text-gray-600 mb-2">暂无文章</h3>
                        <p className="text-gray-500">请检查 content/articles/ 目录是否有 .mdx 文件</p>
                    </div>
                )}
            </section>
        </Shell>
    );
}