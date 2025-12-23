import Image from "next/image";
import Link from "next/link";
import { type Article } from "contentlayer/generated";
import { formatDate } from "@/lib/utils";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { PlaceholderImage } from "@/components/placeholder-image";
import { CC } from "../../page";
import { Badge } from "@/components/ui/badge";

interface ArticleCardProps {
    article: Article;
    i: number;
    lang: CC;
}

export function ArticleCard({ article, i, lang }: ArticleCardProps) {
    // 修复：明确判断 wechatUrl 是否存在且是有效的 URL
    const hasWechatLink = Boolean(
        article.wechatUrl &&
        typeof article.wechatUrl === 'string' &&
        article.wechatUrl.startsWith('http')
    );

    return (
        <article className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden hover:shadow-lg transition-all duration-300 h-full flex flex-col group">
            {hasWechatLink ? (
                <a
                    href={article.wechatUrl as string}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block transition-all duration-300 hover:-translate-y-1 flex flex-col flex-1"
                >
                    <CardContent article={article} i={i} lang={lang} hasWechatLink={hasWechatLink} />
                </a>
            ) : (
                <Link
                    href={`/${lang}/articles/${article.slug}`}
                    className="block transition-all duration-300 hover:-translate-y-1 flex flex-col flex-1"
                >
                    <CardContent article={article} i={i} lang={lang} hasWechatLink={hasWechatLink} />
                </Link>
            )}
        </article>
    );
}

interface CardContentProps {
    article: Article;
    i: number;
    lang: CC;
    hasWechatLink: boolean;
}

function CardContent({ article, i, lang, hasWechatLink }: CardContentProps) {
    return (
        <>
            <div className="relative bg-gray-100">
                <AspectRatio ratio={4/3}>
                    {article.image ? (
                        <Image
                            src={article.image}
                            alt={article.title}
                            fill
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                            className="object-cover transition-transform duration-500 group-hover:scale-105"
                            priority={i <= 3}
                        />
                    ) : (
                        <PlaceholderImage asChild className="bg-gradient-to-br from-green-50 to-blue-50" />
                    )}
                </AspectRatio>

                {hasWechatLink && (
                    <div className="absolute top-3 right-3">
                        <Badge variant="outline" className="bg-blue-500/20 backdrop-blur-sm text-white border-0 text-xs">
                            ↗
                        </Badge>
                    </div>
                )}
            </div>

            <div className="p-4 flex-1 flex flex-col">
                <CardHeader className="space-y-3 p-0 mb-3">
                    <CardTitle className="line-clamp-2 text-lg font-semibold text-gray-900 group-hover:text-green-600 transition-colors leading-tight">
                        {article.title}
                    </CardTitle>
                    {article.description && (
                        <CardDescription className="line-clamp-3 text-sm text-gray-600 leading-relaxed">
                            {article.description}
                        </CardDescription>
                    )}
                </CardHeader>

                <div className="mt-auto pt-3 border-t border-gray-100">
                    <div className="flex items-center justify-end text-xs text-gray-500">
                        <span className="text-green-600 font-medium group-hover:underline flex items-center gap-1">
              {hasWechatLink
                  ? (lang === 'cn' ? '阅读原文' : 'Read Original')
                  : (lang === 'cn' ? '阅读更多' : 'Read More')
              }
                            <svg className="w-3 h-3 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </span>
                    </div>
                </div>
            </div>
        </>
    );
}