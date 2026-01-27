import { notFound } from "next/navigation";
import { allTripleAxeSeries } from "contentlayer/generated";

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

interface PostPageProps {
  params: {
    cc: string;
    slug: string[];
  };
}

async function getPostFromParams(params: PostPageProps["params"]) {
  const slug = params?.slug?.join("/");
  return allTripleAxeSeries.find((item) => item.slugAsParams === slug) ?? null;
}

export async function generateMetadata({
  params,
}: PostPageProps): Promise<Metadata> {
  const post = await getPostFromParams(params);

  if (!post) {
    return {};
  }

  return {
    title: post.title,
    description: post.description,
  };
}

export async function generateStaticParams(): Promise<PostPageProps["params"][]> {
  const ccs = ["cn", "en"];
  return allTripleAxeSeries.flatMap((item) =>
    ccs.map((cc) => ({
      cc,
      slug: item.slugAsParams.split("/"),
    }))
  );
}

export default async function TripleAxeSeriesPostPage({ params }: PostPageProps) {
  const post = await getPostFromParams(params);

  if (!post) {
    notFound();
  }

  return (
    <Shell as="article" variant="markdown">
      <Link
        href={`/${params.cc}/triple-axe-series`}
        className={cn(
          buttonVariants({ variant: "ghost" }),
          "absolute left-[-200px] top-14 hidden xl:inline-flex"
        )}
      >
        <ChevronLeftIcon className="mr-2 size-4" aria-hidden="true" />
        {params.cc === "cn" ? "返回列表" : "Back"}
      </Link>

      <div className="space-y-2">
        <div className="flex items-center space-x-2 text-sm text-muted-foreground">
          {post.date && <time dateTime={post.date}>{formatDate(post.date)}</time>}
          {post.date ? <div>•</div> : null}
          <div>{post.readingTime}min</div>
        </div>
        {post.title && (
          <h1 className="inline-block text-4xl font-bold leading-tight lg:text-5xl">
            {post.title}
          </h1>
        )}
      </div>

      <Mdx code={post.body.code} />
      <Separator className="my-4" />
    </Shell>
  );
}
