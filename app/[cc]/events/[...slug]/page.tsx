import { notFound } from "next/navigation";
import { allEvents } from "contentlayer/generated";

import { Mdx } from "@/components/mdx/mdx-components";

import "@/styles/mdx.css";

import { type Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ChevronLeftIcon } from "@radix-ui/react-icons";

import { cn, formatDate } from "@/lib/utils";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { buttonVariants } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Shell } from "@/components/shells/shell";

interface EventPageProps {
  params: {
    cc: "cn" | "en";
    slug: string[];
  };
}

async function getEventFromParams(params: EventPageProps["params"]) {
  const slug = params?.slug?.join("/");
  const event = allEvents.find((event) => event.slugAsParams === slug);

  if (!event) {
    return null;
  }

  return event;
}

export async function generateMetadata({
  params,
}: EventPageProps): Promise<Metadata> {
  const event = await getEventFromParams(params);

  if (!event) {
    return {};
  }

  return {
    title: event.title,
    description: event.description,
  };
}

export async function generateStaticParams(): Promise<EventPageProps["params"][]> {
  return allEvents.flatMap((event) => {
    const slugParts = event.slugAsParams.split("/");
    return [
      { cc: "cn", slug: slugParts },
      { cc: "en", slug: slugParts },
    ];
  });
}

export default async function EventDetailPage({ params }: EventPageProps) {
  const event = await getEventFromParams(params);

  if (!event) {
    notFound();
  }

  return (
    <Shell as="article" variant="markdown">
      <Link
        href={`/${params.cc}/events`}
        className={cn(
          buttonVariants({ variant: "ghost" }),
          "absolute left-[-200px] top-14 hidden xl:inline-flex"
        )}
      >
        <ChevronLeftIcon className="mr-2 size-4" aria-hidden="true" />
        {params.cc === "cn" ? "返回行业动态" : "Back to Industry News"}
      </Link>

      <div className="space-y-2">
        <div className="flex items-center space-x-2 text-sm text-muted-foreground">
          {event.date && (
            <time dateTime={event.date}>{formatDate(event.date)}</time>
          )}
          {event.date ? <div>•</div> : null}
          <div>{event.readingTime}min</div>
        </div>
        <h1 className="inline-block text-4xl font-bold leading-tight lg:text-5xl">
          {event.title}
        </h1>
      </div>

      {event.ogImage && (
        <AspectRatio ratio={16 / 9}>
          <Image
            src={event.ogImage}
            alt={event.title ?? ""}
            fill
            className="rounded-md border bg-muted object-cover"
            priority
          />
        </AspectRatio>
      )}

      <Mdx code={event.body.code} />
      <Separator className="my-4" />

      <Link
        href={`/${params.cc}/events`}
        className={cn(
          buttonVariants({ variant: "ghost", className: "mx-auto mt-4 w-fit" })
        )}
      >
        <ChevronLeftIcon className="mr-2 size-4" aria-hidden="true" />
        {params.cc === "cn" ? "返回行业动态" : "Back to Industry News"}
        <span className="sr-only">Back</span>
      </Link>
    </Shell>
  );
}
