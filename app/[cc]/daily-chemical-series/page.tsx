import { type Metadata } from "next";

import { DailyChemicalSeriesSection } from "./section";
import type { CC } from "../page";

export const metadata: Metadata = {
    metadataBase: process.env.NEXT_PUBLIC_APP_URL
      ? new URL(process.env.NEXT_PUBLIC_APP_URL)
      : undefined,
    title: "Daily-Chemical Series",
    description: "Daily-Chemical Series Products",
};

interface PageProps {
    params: {
        cc: string;
    };
}

export async function generateStaticParams(): Promise<PageProps["params"][]> {
    return [{ cc: "cn" }, { cc: "en" }];
}

export default function DailyChemicalSeriesPage({ params }: PageProps) {
  return <DailyChemicalSeriesSection params={{ cc: params.cc as CC }} />;
}
