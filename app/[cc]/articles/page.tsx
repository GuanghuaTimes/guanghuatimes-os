import { type Metadata } from "next";

import { ArticlesSection } from "./section";
import type { CC } from "../page";

export const metadata: Metadata = {
    metadataBase: process.env.NEXT_PUBLIC_APP_URL
      ? new URL(process.env.NEXT_PUBLIC_APP_URL)
      : undefined,
    title: "Articles",
    description: "Explore the latest news and updates from the community",
};

interface PageProps {
    params: {
        cc: string;
    };
}

export async function generateStaticParams(): Promise<PageProps["params"][]> {
    return [{ cc: "cn" }, { cc: "en" }];
}

export default function ArticlePage({ params }: PageProps) {
  return <ArticlesSection params={{ cc: params.cc as CC }} />;
}