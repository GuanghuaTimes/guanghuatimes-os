import Link from "next/link";
import Image from "next/image";

import { allRawMaterials } from "@/.contentlayer/generated";
import { Button } from "@/components/ui/button";
import { PageHeader, PageHeaderDescription } from "@/components/page-header";
import { Separator } from "@/components/ui/separator";
import { Shell } from "@/components/shells/shell";
import { ProductCard } from "@/components/product-card";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { PlaceholderImage } from "@/components/placeholder-image";
import type { CC } from "../page";

export function RawMaterialsSection({
  params,
  limit,
  showReadMore = false,
  asHomepage = false,
}: {
  params: { cc?: CC };
  limit?: number;
  showReadMore?: boolean;
  asHomepage?: boolean;
}) {
  const allFilteredProducts = (allRawMaterials || [])
    .filter((product: any) => {
      const p = product?.published;
      if (p === false) return false;
      if (typeof p === "string" && p.trim().toLowerCase() === "false") return false;
      return true;
    })
    .sort((a: any, b: any) => b.date.localeCompare(a.date));

  const products = limit ? allFilteredProducts.slice(0, limit) : allFilteredProducts;

  const VerticalCard = ({ product, i }: { product: any; i: number }) => (
    <Link href={`/${params.cc}/raw-materials/${product.slugAsParams}`}>
      <article className="space-y-4 group">
        <AspectRatio ratio={16 / 9} className="overflow-hidden relative">
          {product.image ? (
            <Image
              src={product.image}
              alt={product.title}
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
            <CardTitle className="line-clamp-1 dark:text-white">{product.title}</CardTitle>
            <CardDescription className="line-clamp-2 dark:text-gray-300">
              {product.description}
            </CardDescription>
          </CardHeader>
        </div>
      </article>
    </Link>
  );

  return (
    <Shell className={asHomepage ? "md:pb-10" : "md:pb-10 min-h-[calc(100vh-156px)]"}>
      <PageHeader>
        <div className="text-2xl md:text-4xl font-bold text-gray-900 dark:text-white">
          {params.cc === "cn" ? "原料产品" : "Raw Materials"}
        </div>
        <PageHeaderDescription className="text-lg text-gray-600 dark:text-gray-300">
          {params.cc === "cn" ? "优质原料产品系列" : "Premium Raw Material Products"}
        </PageHeaderDescription>
      </PageHeader>

      {!asHomepage && <Separator className="my-6" />}

      {asHomepage ? (
        <section className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mt-6">
          {products.length > 0 ? (
            products.map((product: any, i: number) => (
              <VerticalCard key={product.slug} product={product} i={i} />
            ))
          ) : (
            <div className="col-span-full text-center py-12 text-gray-500 dark:text-gray-400">
              {params.cc === "cn" ? "暂无产品" : "No products yet"}
            </div>
          )}
        </section>
      ) : (
        <section className="flex flex-col gap-6">
          {products.length > 0 ? (
            products.map((product: any, i: number) => (
              <ProductCard
                key={product.slug}
                product={product}
                i={i}
                lang={params.cc!}
                basePath="/raw-materials"
              />
            ))
          ) : (
            <div className="col-span-full text-center py-20">
              <div className="text-gray-400 dark:text-gray-500 mb-4">
                <svg className="w-16 h-16 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-medium text-gray-600 dark:text-gray-400 mb-2">
                {params.cc === "cn" ? "暂无产品" : "No products yet"}
              </h3>
              <p className="text-gray-500 dark:text-gray-400">
                {params.cc === "cn" ? "敬请期待更多原料产品" : "Stay tuned for more raw materials"}
              </p>
            </div>
          )}
        </section>
      )}

      {showReadMore && (
        <div className="flex justify-center mt-8">
          <Link href={`/${params.cc}/raw-materials`}>
            <Button variant="outline" size="lg" className="text-lg">
              {params.cc === "cn" ? "了解更多" : "Learn More"}
            </Button>
          </Link>
        </div>
      )}
    </Shell>
  );
}
