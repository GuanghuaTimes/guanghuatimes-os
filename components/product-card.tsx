import Image from "next/image";
import Link from "next/link";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { CardTitle, CardDescription } from "@/components/ui/card";
import { PlaceholderImage } from "@/components/placeholder-image";
import type { CC } from "@/app/[cc]/page";

interface ProductCardProps {
    product: {
        title: string;
        description?: string;
        image?: string;
        slug: string;
        slugAsParams?: string;
        wechatUrl?: string;
    };
    i: number;
    lang: CC;
    basePath?: string;
    layout?: "horizontal" | "vertical";
}

function getSlugAsParams(product: any, basePath: string) {
    if (typeof product?.slugAsParams === "string" && product.slugAsParams.length > 0) {
        return product.slugAsParams;
    }
    if (typeof product?.slug === "string" && product.slug.length > 0) {
        const s = product.slug.replace(/^\//, "");
        const bp = basePath.replace(/^\//, "");
        if (s.startsWith(`${bp}/`)) {
            return s.slice(bp.length + 1);
        }
        return s;
    }
    return "";
}

export function ProductCard({ product, i, lang, basePath = "/products", layout = "horizontal" }: ProductCardProps) {
    const normalizedBasePath = basePath.startsWith("/") ? basePath : `/${basePath}`;
    const slugAsParams = getSlugAsParams(product, normalizedBasePath);
    const isEven = i % 2 === 0;
    
    const hasWechatLink = Boolean(
        product.wechatUrl &&
        typeof product.wechatUrl === 'string' &&
        product.wechatUrl.startsWith('http')
    );

    const verticalCardContent = (
        <article className="flex flex-col group bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100 dark:border-gray-700 h-full">
            {/* 产品图片 */}
            <div className="w-full">
                <AspectRatio ratio={4/3} className="overflow-hidden">
                    {product.image ? (
                        <Image
                            src={product.image}
                            alt={product.title}
                            fill
                            sizes="(min-width: 768px) 33vw, 100vw"
                            className="object-cover group-hover:scale-105 transition-transform duration-500"
                            priority={i <= 4}
                        />
                    ) : (
                        <PlaceholderImage asChild className="bg-gradient-to-br from-green-50 to-blue-50" />
                    )}
                </AspectRatio>
            </div>

            {/* 产品信息 */}
            <div className="flex-1 p-4 md:p-5 flex flex-col">
                <CardTitle className="text-lg md:text-xl font-bold text-green-700 dark:text-green-400 mb-2 group-hover:text-green-600 transition-colors">
                    {product.title}
                </CardTitle>
                {product.description && (
                    <CardDescription className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed line-clamp-2 mb-3 flex-1">
                        {product.description}
                    </CardDescription>
                )}
                <div className="flex items-center text-green-600 dark:text-green-400 font-medium text-sm mt-auto">
                    <span className="mr-2">{lang === 'cn' ? '了解更多' : 'Learn More'}</span>
                    <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                </div>
            </div>
        </article>
    );

    const horizontalCardContent = (
        <article className={`flex flex-col ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'} gap-6 items-center group bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100 dark:border-gray-700`}>
            {/* 产品图片 */}
            <div className="w-full md:w-2/5 flex-shrink-0">
                <AspectRatio ratio={4/3} className="overflow-hidden">
                    {product.image ? (
                        <Image
                            src={product.image}
                            alt={product.title}
                            fill
                            sizes="(min-width: 768px) 40vw, 100vw"
                            className="object-cover group-hover:scale-105 transition-transform duration-500"
                            priority={i <= 2}
                        />
                    ) : (
                        <PlaceholderImage asChild className="bg-gradient-to-br from-green-50 to-blue-50" />
                    )}
                </AspectRatio>
            </div>

            {/* 产品信息 */}
            <div className="flex-1 p-6 md:p-8">
                <CardTitle className="text-xl md:text-2xl font-bold text-green-700 dark:text-green-400 mb-3 group-hover:text-green-600 transition-colors">
                    {product.title}
                </CardTitle>
                {product.description && (
                    <CardDescription className="text-base text-gray-600 dark:text-gray-300 leading-relaxed line-clamp-3 mb-4">
                        {product.description}
                    </CardDescription>
                )}
                <div className="flex items-center text-green-600 dark:text-green-400 font-medium">
                    <span className="mr-2">{lang === 'cn' ? '了解更多' : 'Learn More'}</span>
                    <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                </div>
            </div>
        </article>
    );

    const cardContent = layout === "vertical" ? verticalCardContent : horizontalCardContent;

    if (hasWechatLink) {
        return (
            <a href={product.wechatUrl} target="_blank" rel="noopener noreferrer">
                {cardContent}
            </a>
        );
    }

    return (
        <Link href={`/${lang}${normalizedBasePath}/${slugAsParams}`}>
            {cardContent}
        </Link>
    );
}
