import * as React from "react";
import { type Metadata } from "next";
import Link from "next/link";
import { allDailyChemicalSeries } from "@/.contentlayer/generated";
import { Separator } from "@/components/ui/separator";
import { PageHeader, PageHeaderDescription } from "@/components/page-header";
import { Shell } from "@/components/shells/shell";
import { EventCardSkeleton } from "../articles/_components/event-card-skeleton";
import { ArticleCard } from "../articles/_components/event-card";
import { CC } from "../page";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
    metadataBase: new URL(process.env.NEXT_PUBLIC_APP_URL!),
    title: "Daily Chemical Series",
    description: "Daily Chemical Series Products",
};

const config = {
    title: "Daily Chemical Series",
    titleCn: "日化系列",
    description: "Daily Chemical Series Products",
    descriptionCn: "日化系列产品",
};

interface PageProps {
    params: {
        cc: string;
    };
}

export async function generateStaticParams(): Promise<PageProps["params"][]> {
    return [{ cc: "cn" }, { cc: "en" }];
}

export default function DailyChemicalSeriesPage({ 
    params = { cc: "cn" }, 
    limit, 
    showReadMore = false 
}: { 
    params: { cc?: CC }; 
    limit?: number; 
    showReadMore?: boolean; 
}) {
    const allFilteredArticles = (allDailyChemicalSeries || [])
        .filter((article: any) => article.published !== false)
        .sort((a: any, b: any) => b.date.localeCompare(a.date));
    
    const articles = limit ? allFilteredArticles.slice(0, limit) : allFilteredArticles;

    return (
        <Shell className="md:pb-10 min-h-[calc(100vh-156px)]">
            <PageHeader>
                <div className="text-2xl md:text-4xl font-bold text-gray-900 dark:text-white">
                    {params.cc === "cn" ? config.titleCn : config.title}
                </div>
                <PageHeaderDescription className="text-lg text-gray-600 dark:text-gray-300">
                    {params.cc === "cn" ? config.descriptionCn : config.description}
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
                            basePath="/daily-chemical-series"
                        />
                    ))
                ) : (
                    <div className="col-span-full text-center py-20">
                        <div className="text-gray-400 mb-4">
                            <svg className="w-16 h-16 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                        </div>
                        <h3 className="text-xl font-medium text-gray-600 mb-2">暂无产品</h3>
                        <p className="text-gray-500">敬请期待更多日化系列产品</p>
                    </div>
                )}
            </section>
            
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
