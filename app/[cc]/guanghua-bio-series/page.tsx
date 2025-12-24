import { type Metadata } from "next";

import { GuanghuaBioSeriesSection } from "./section";
import type { CC } from "../page";

export const metadata: Metadata = {
    metadataBase: process.env.NEXT_PUBLIC_APP_URL
      ? new URL(process.env.NEXT_PUBLIC_APP_URL)
      : undefined,
    title: "Guanghua Biotech Series",
    description: "Guanghua Biotech Series Products",
};

interface PageProps {
    params: {
        cc: string;
    };
}

export async function generateStaticParams(): Promise<PageProps["params"][]> {
    return [{ cc: "cn" }, { cc: "en" }];
}

export default function GuanghuaBioSeriesPage({ params }: PageProps) {
  return <GuanghuaBioSeriesSection params={{ cc: params.cc as CC }} />;
}
