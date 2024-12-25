import Image from "next/image";
import Link from "next/link";
import { type Announcement } from "contentlayer/generated";
import { formatDate } from "@/lib/utils";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { PlaceholderImage } from "@/components/placeholder-image";
import { CC } from "../../page";

interface AnnouncementCardProps {
  announcement: Announcement;
  i: number;
  lang: CC;
}

export function AnnouncementCard({
  announcement: a,
  i,
  lang,
}: AnnouncementCardProps) {
  return (
    <Link key={a.slug} href={a.url}>
      <span className="sr-only">{a.title}</span>
      <article className="space-y-4">
        <AspectRatio ratio={16 / 9} className="overflow-hidden relative">
          {a.image ? (
            <Image
              src={a.image}
              alt={a.title}
              fill
              sizes="(min-width: 1024px) 384px, (min-width: 768px) 288px, (min-width: 640px) 224px, 100vw"
              className="rounded-lg object-cover hover:scale-105"
              priority={i <= 1}
            />
          ) : (
            <PlaceholderImage asChild />
          )}
        </AspectRatio>
        <div className="space-y-2">
          <CardHeader className="space-y-2.5 p-0">
            <CardTitle className="line-clamp-1">{a.title}</CardTitle>
            <CardDescription className="line-clamp-2">
              {a.description}
            </CardDescription>
          </CardHeader>
          <CardDescription>
            {a.author} {formatDate(a.date)}
          </CardDescription>
        </div>
      </article>
    </Link>
  );
}
