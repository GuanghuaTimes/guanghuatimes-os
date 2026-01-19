import Image from "next/image";
import Link from "next/link";
import { type Article } from "contentlayer/generated";
import { formatDate } from "@/lib/utils";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { PlaceholderImage } from "@/components/placeholder-image";
import type { CC } from "../../page";
import { Badge } from "@/components/ui/badge";

type CardItem = Pick<Article, "title" | "description" | "ogImage" | "wechatUrl" | "slug" | "slugAsParams">;

function getSlugAsParams(article: any, basePath: string) {
    if (typeof article?.slugAsParams === "string" && article.slugAsParams.length > 0) {
        return article.slugAsParams;
    }

    if (typeof article?.slug === "string" && article.slug.length > 0) {
        const s = article.slug.replace(/^\//, "");
        const bp = basePath.replace(/^\//, "");
        if (s.startsWith(`${bp}/`)) {
            return s.slice(bp.length + 1);
        }
        return s;
    }

    return "";
}

interface ArticleCardProps {
    article: CardItem;
    i: number;
    lang: CC;
    basePath?: string;
}

export function ArticleCard({ article, i, lang, basePath = "/articles" }: ArticleCardProps) {
    const hasWechatLink = Boolean(
        article.wechatUrl &&
        typeof article.wechatUrl === 'string' &&
        article.wechatUrl.startsWith('http')
    );

    const normalizedBasePath = basePath.startsWith("/") ? basePath : `/${basePath}`;
    const slugAsParams = getSlugAsParams(article, normalizedBasePath);

    const cardContent = (
        <article className="space-y-4 group">
            <AspectRatio ratio={16 / 9} className="overflow-hidden relative">
                {article.ogImage ? (
                    <Image
                        src={article.ogImage}
                        alt={article.title}
                        fill
                        sizes="(min-width: 1024px) 384px, (min-width: 768px) 288px, (min-width: 640px) 224px, 100vw"
                        className="rounded-lg object-cover group-hover:scale-105 transition-transform"
                        priority={i <= 1}
                    />
                ) : (
                    <PlaceholderImage asChild />
                )}
                {hasWechatLink && (
                    <div className="absolute top-2 right-2">
                        <Badge variant="outline" className="bg-blue-500/20 backdrop-blur-sm text-white border-0 text-xs">
                            ↗
                        </Badge>
                    </div>
                )}
            </AspectRatio>
            <div className="space-y-2">
                <CardHeader className="space-y-2.5 p-0">
                    <CardTitle className="line-clamp-1 dark:text-white">{article.title}</CardTitle>
                    <CardDescription className="line-clamp-2 dark:text-gray-300">
                        {article.description}
                    </CardDescription>
                </CardHeader>
            </div>
        </article>
    );

    if (hasWechatLink) {
        return (
            <a
                href={article.wechatUrl as string}
                target="_blank"
                rel="noopener noreferrer"
            >
                <span className="sr-only">{article.title}</span>
                {cardContent}
            </a>
        );
    }

    return (
        <Link href={`/${lang}${normalizedBasePath}/${slugAsParams}`}>
            <span className="sr-only">{article.title}</span>
            {cardContent}
        </Link>
    );
}