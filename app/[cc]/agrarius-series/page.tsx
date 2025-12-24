import { type Metadata } from "next";

import { AgrariusSeriesSection } from "./section";
import type { CC } from "../page";

export const metadata: Metadata = {
    metadataBase: process.env.NEXT_PUBLIC_APP_URL
      ? new URL(process.env.NEXT_PUBLIC_APP_URL)
      : undefined,
    title: "AGRARIUS Series",
    description: "AGRARIUS Biotech Series Products",
};

interface PageProps {
    params: {
        cc: string;
    };
}

export async function generateStaticParams(): Promise<PageProps["params"][]> {
    return [{ cc: "cn" }, { cc: "en" }];
}

export default function AgrariusSeriesPage({ params }: PageProps) {
  return <AgrariusSeriesSection params={{ cc: params.cc as CC }} />;
}
