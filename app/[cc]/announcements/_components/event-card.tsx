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
  const isExternalUrl = a.wechatUrl && a.wechatUrl.startsWith('http');
  const href = a.wechatUrl || `/${lang}/announcements/${a.slugAsParams}`;
  
  const cardContent = (
    <>
      <span className="sr-only">{a.title}</span>
      <article className="space-y-4 group">
        <AspectRatio ratio={16 / 9} className="overflow-hidden relative">
          {a.ogImage ? (
            <Image
              src={a.ogImage}
              alt={a.title ?? ""}
              fill
              sizes="(min-width: 1024px) 384px, (min-width: 768px) 288px, (min-width: 640px) 224px, 100vw"
              className="rounded-lg object-cover group-hover:scale-105 transition-transform"
              priority={i <= 1}
            />
          ) : (
            <PlaceholderImage asChild />
          )}
        </AspectRatio>
        <div className="space-y-2">
          <CardHeader className="space-y-2.5 p-0">
            <CardTitle className="line-clamp-1 dark:text-white">{a.title}</CardTitle>
            <CardDescription className="line-clamp-2 dark:text-gray-300">
              {a.description}
            </CardDescription>
          </CardHeader>
          <CardDescription className="dark:text-gray-400">
            {formatDate(a.date)}
          </CardDescription>
        </div>
      </article>
    </>
  );

  if (isExternalUrl) {
    return (
      <a key={a.slug} href={href} target="_blank" rel="noopener noreferrer">
        {cardContent}
      </a>
    );
  }

  return (
    <Link key={a.slug} href={href}>
      {cardContent}
    </Link>
  );
}
