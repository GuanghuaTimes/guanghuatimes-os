import * as React from "react";
import Link from "next/link";

import { allAnnouncements } from "contentlayer/generated";
import { Button } from "@/components/ui/button";
import { PageHeader, PageHeaderDescription } from "@/components/page-header";
import { Separator } from "@/components/ui/separator";
import { Shell } from "@/components/shells/shell";
import { EventCardSkeleton } from "./_components/event-card-skeleton";
import { AnnouncementCard } from "./_components/event-card";
import type { CC } from "../page";

export function AnnouncementsSection({
  params,
  limit,
  showReadMore = false,
  asSubsection = false,
}: {
  params: {
    cc?: CC;
  };
  limit?: number;
  showReadMore?: boolean;
  asSubsection?: boolean;
}) {
  const allFilteredAnnouncements = allAnnouncements.sort((a, b) =>
    b.date.localeCompare(a.date)
  );

  const announcements = limit
    ? allFilteredAnnouncements.slice(0, limit)
    : allFilteredAnnouncements;

  const content = (
    <>
      {!asSubsection && (
        <>
          <PageHeader>
            <div className="text-2xl md:text-4xl font-bold text-gray-900 dark:text-white">
              {params.cc === "cn" ? "公司新闻" : "Company News"}
            </div>
            <PageHeaderDescription className="text-lg text-gray-600 dark:text-gray-300">
              {params.cc === "cn" ? "阅读公司最新公告和动态" : "Read the latest announcements and updates"}
            </PageHeaderDescription>
          </PageHeader>
          <Separator className="hidden md:block my-2" />
        </>
      )}
      <section className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
        <React.Suspense
          fallback={Array.from({ length: 3 }).map((_, i) => (
            <EventCardSkeleton key={i} />
          ))}
        >
          {announcements.length > 0 ? (
            announcements.map((announcement, i) => (
              <AnnouncementCard
                key={announcement.slug}
                announcement={announcement}
                i={i}
                lang={params.cc!}
              />
            ))
          ) : (
            <div className="col-span-full text-center py-12 text-gray-500">
              {params.cc === "cn" ? "暂无公司新闻" : "No company news yet"}
            </div>
          )}
        </React.Suspense>
      </section>

      {showReadMore && (
        <div className="flex justify-center mt-8">
          <Link href={`/${params.cc}/announcements`}>
            <Button variant="outline" size="lg" className="text-lg">
              {params.cc === "cn" ? "了解更多" : "Learn More"}
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
