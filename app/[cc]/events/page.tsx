import * as React from "react";
import { type Metadata } from "next";
import { allEvents } from "contentlayer/generated";
import { Separator } from "@/components/ui/separator";
import { PageHeader, PageHeaderDescription } from "@/components/page-header";
import { Shell } from "@/components/shells/shell";
import { EventCardSkeleton } from "./_components/event-card-skeleton";
import { EventCard } from "./_components/event-card";
import { CC } from "../page";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  // metadataBase: new URL(process.env.NEXT_PUBLIC_APP_URL!),
  title: "Event",
  description: "Explore the latest news and updates from the community",
};

const config = {
  title: "Events",
  titleCn: "最新活动",
  description: "Explore the latest news and updates from the community",
};

interface PageProps {
  params: {
    cc: string;
  };
}

export async function generateStaticParams(): Promise<PageProps["params"][]> {
  return [{ cc: "cn" }, { cc: "en" }];
}

// 1. 明确定义组件props接口
interface EventPageProps {
  params: {
    cc?: CC;
  };
  limit?: number;
  showReadMore?: boolean;
  asSubsection?: boolean;
}

// 2. 修复组件名（确保是 EventPage 不是 EventPages）
export default function EventPage({
                                    params = { cc: "cn" },
                                    limit,
                                    showReadMore = false,
                                  }: EventPageProps) {
  const allFilteredEvents = allEvents
      .filter((event) => event.published)
      .sort((a, b) => b.date.localeCompare(a.date));

  const events = limit ? allFilteredEvents.slice(0, limit) : allFilteredEvents;

  return (
      <Shell
          className="md:pb-10 min-h-[calc(100vh-156px)]"
      >
        <PageHeader>
          <div className="text-2xl md:text-4xl font-bold text-gray-900 dark:text-white">
            {params.cc === "cn" ? config.titleCn : config.title}
          </div>
          <PageHeaderDescription className="text-lg text-gray-600 dark:text-gray-300">{config.description}</PageHeaderDescription>
        </PageHeader>
        <Separator className="hidden md:block my-2" />
        <section className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3">
          <React.Suspense
              fallback={Array.from({ length: 3 }).map((_, i) => (
                  <EventCardSkeleton key={i} />
              ))}
          >
            {events.map((event, i) => (
                <EventCard key={event.slug} event={event} i={i} lang={params.cc!} />
            ))}
          </React.Suspense>
        </section>
        {showReadMore && (
          <div className="flex justify-center mt-8">
            <Link href={`/${params.cc}/events`}>
              <Button variant="outline" size="lg" className="text-lg">
                {params.cc === "cn" ? "了解更多" : "Learn More"}
              </Button>
            </Link>
          </div>
        )}
      </Shell>
  );
}