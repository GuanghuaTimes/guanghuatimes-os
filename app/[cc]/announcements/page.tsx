import * as React from "react";
import { type Metadata } from "next";
import { allAnnouncements } from "contentlayer/generated";
import { Separator } from "@/components/ui/separator";
import { PageHeader, PageHeaderDescription } from "@/components/page-header";
import { Shell } from "@/components/shells/shell";
import { EventCardSkeleton } from "./_components/event-card-skeleton";
import { AnnouncementCard } from "./_components/event-card";
import { CC } from "../page";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  // metadataBase: new URL(process.env.NEXT_PUBLIC_APP_URL!),
  title: "Announcement",
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

const config = {
  title: "最新公告",
};

export default function AnnouncementPage({
  params = { cc: "cn" },
  limit,
  showReadMore = false,
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
  
  const announcements = limit ? allFilteredAnnouncements.slice(0, limit) : allFilteredAnnouncements;

  return (
    <Shell
        className="md:pb-10 min-h-[calc(100vh-156px)]"
    >
      <PageHeader>
        <div className="text-2xl md:text-4xl font-bold text-gray-900 dark:text-white">{config.title}</div>
        <PageHeaderDescription className="text-lg text-gray-600 dark:text-gray-300">announcements..</PageHeaderDescription>
      </PageHeader>
      <Separator className="hidden md:block my-2" />
      <section className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
        <React.Suspense
          fallback={Array.from({ length: 3 }).map((_, i) => (
            <EventCardSkeleton key={i} />
          ))}
        >
          {announcements.map(
            (announcement, i) =>
              (
                <AnnouncementCard
                  key={announcement.slug}
                  announcement={announcement}
                  i={i}
                  lang={params.cc!}
                />
              )
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
    </Shell>
  );
}
