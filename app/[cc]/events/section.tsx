import * as React from "react";
import Link from "next/link";

import { allEvents } from "contentlayer/generated";
import { Button } from "@/components/ui/button";
import { PageHeader, PageHeaderDescription } from "@/components/page-header";
import { Separator } from "@/components/ui/separator";
import { Shell } from "@/components/shells/shell";
import { EventCard } from "./_components/event-card";
import { EventCardSkeleton } from "./_components/event-card-skeleton";
import type { CC } from "../page";

export function EventsSection({
  params,
  limit,
  showReadMore = false,
}: {
  params: { cc?: CC };
  limit?: number;
  showReadMore?: boolean;
  asSubsection?: boolean;
}) {
  const allFilteredEvents = allEvents
    .filter((event) => event.published)
    .sort((a, b) => b.date.localeCompare(a.date));

  const events = limit ? allFilteredEvents.slice(0, limit) : allFilteredEvents;

  return (
    <Shell className="md:pb-10 min-h-[calc(100vh-156px)]">
      <PageHeader>
        <div className="text-2xl md:text-4xl font-bold text-gray-900 dark:text-white">
          {params.cc === "cn" ? "最新活动" : "Events"}
        </div>
        <PageHeaderDescription className="text-lg text-gray-600 dark:text-gray-300">
          Explore the latest news and updates from the community
        </PageHeaderDescription>
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
