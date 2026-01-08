import { type Metadata } from "next";

import { TripleAxeSeriesSection } from "./section";
import type { CC } from "../page";

export const metadata: Metadata = {
    metadataBase: process.env.NEXT_PUBLIC_APP_URL
      ? new URL(process.env.NEXT_PUBLIC_APP_URL)
      : undefined,
    title: "Triple-Axe Series",
    description: "Triple-Axe Series Products",
};

interface PageProps {
    params: {
        cc: string;
    };
}

export async function generateStaticParams(): Promise<PageProps["params"][]> {
    return [{ cc: "cn" }, { cc: "en" }];
}

export default function TripleAxeSeriesPage({ params }: PageProps) {
  return <TripleAxeSeriesSection params={{ cc: params.cc as CC }} />;
}
