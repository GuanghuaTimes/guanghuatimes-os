import { notFound } from "next/navigation";
import { allApplicationCases } from "contentlayer/generated";

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
  const caseItem = allApplicationCases.find((p) => p.slugAsParams === slug);

  if (!caseItem) {
    null;
  }

  return caseItem;
}

export async function generateMetadata({
  params,
}: PostPageProps): Promise<Metadata> {
  const caseItem = await getPostFromParams(params);

  if (!caseItem) {
    return {};
  }

  return {
    title: caseItem.title,
    description: caseItem.description,
  };
}

export async function generateStaticParams(): Promise<
  PostPageProps["params"][]
> {
  return allApplicationCases.map((caseItem) => ({
    cc: "cn",
    slug: caseItem.slugAsParams.split("/"),
  }));
}

export default async function PostPage({ params }: PostPageProps) {
  const caseItem = await getPostFromParams(params);
  const isCn = params.cc === "cn";

  if (!caseItem) {
    notFound();
  }

  return (
    <Shell as="article" variant="markdown">
      <Link
        href={`/${params.cc}/application-cases`}
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
          {caseItem.date && (
            <time dateTime={caseItem.date}>{formatDate(caseItem.date)}</time>
          )}
          {caseItem.date ? <div>•</div> : null}
          <div>{caseItem.readingTime}min</div>
        </div>
        <h1 className="inline-block text-4xl font-bold leading-tight lg:text-5xl">
          {caseItem.title}
        </h1>
      </div>
      {caseItem.image && (
        <AspectRatio ratio={16 / 9}>
          <Image
            src={caseItem.image}
            alt={caseItem.title}
            fill
            className="rounded-md border bg-muted"
            priority
          />
        </AspectRatio>
      )}
      <Mdx code={caseItem.body.code} />
      <Separator className="my-4" />
      <MdxPager currentItem={caseItem} allItems={allApplicationCases} />
      <Link
        href={`/${params.cc}/application-cases`}
        className={cn(
          buttonVariants({ variant: "ghost", className: "mx-auto mt-4 w-fit" })
        )}
      >
        <ChevronLeftIcon className="mr-2 size-4" aria-hidden="true" />
        {isCn ? "返回应用案例列表" : "Back to Application Cases"}
        <span className="sr-only">{isCn ? "返回应用案例列表" : "Back to Application Cases"}</span>
      </Link>
    </Shell>
  );
}
