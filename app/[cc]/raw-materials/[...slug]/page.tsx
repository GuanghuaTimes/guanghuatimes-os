import { notFound } from "next/navigation";
import { allRawMaterials } from "contentlayer/generated";

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
import { MdxPager } from "@/components/pagers/mdx-pager";
import { Shell } from "@/components/shells/shell";

interface PostPageProps {
  params: {
    slug: string[];
    cc: string;
  };
}

async function getPostFromParams(params: PostPageProps["params"]) {
  const slug = params?.slug?.join("/");
  const product = allRawMaterials.find((p) => p.slugAsParams === slug);

  if (!product) {
    null;
  }

  return product;
}

export async function generateMetadata({
  params,
}: PostPageProps): Promise<Metadata> {
  const product = await getPostFromParams(params);

  if (!product) {
    return {};
  }

  return {
    title: product.title,
    description: product.description,
  };
}

export async function generateStaticParams(): Promise<
  PostPageProps["params"][]
> {
  return allRawMaterials.map((product) => ({
    cc: "cn",
    slug: product.slugAsParams.split("/"),
  }));
}

export default async function PostPage({ params }: PostPageProps) {
  const product = await getPostFromParams(params);
  const isCn = params.cc === "cn";

  if (!product) {
    notFound();
  }

  return (
    <Shell as="article" variant="markdown">
      <Link
        href={`/${params.cc}/raw-materials`}
        className={cn(
          buttonVariants({ variant: "ghost" }),
          "absolute left-[-200px] top-14 hidden xl:inline-flex"
        )}
      >
        <ChevronLeftIcon className="mr-2 size-4" aria-hidden="true" />
        {isCn ? "返回列表" : "Back to list"}
      </Link>
      <div className="space-y-2">
        <div className="flex items-center space-x-2 text-sm text-muted-foreground">
          {product.date && (
            <time dateTime={product.date}>{formatDate(product.date)}</time>
          )}
          {product.date ? <div>•</div> : null}
          <div>{product.readingTime}min</div>
        </div>
        <h1 className="inline-block text-4xl font-bold leading-tight lg:text-5xl">
          {product.title}
        </h1>
      </div>
      {product.image && (
        <AspectRatio ratio={16 / 9}>
          <Image
            src={product.image}
            alt={product.title}
            fill
            className="rounded-md border bg-muted"
            priority
          />
        </AspectRatio>
      )}
      <Mdx code={product.body.code} />
      <Separator className="my-4" />
      <MdxPager currentItem={product} allItems={allRawMaterials} />
      <Link
        href={`/${params.cc}/raw-materials`}
        className={cn(
          buttonVariants({ variant: "ghost", className: "mx-auto mt-4 w-fit" })
        )}
      >
        <ChevronLeftIcon className="mr-2 size-4" aria-hidden="true" />
        {isCn ? "返回原料产品列表" : "Back to Raw Materials"}
        <span className="sr-only">{isCn ? "返回原料产品列表" : "Back to Raw Materials"}</span>
      </Link>
    </Shell>
  );
}
