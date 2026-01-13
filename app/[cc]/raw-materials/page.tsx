import { type Metadata } from "next";

import { RawMaterialsSection } from "./section";
import type { CC } from "../page";

export const metadata: Metadata = {
    metadataBase: process.env.NEXT_PUBLIC_APP_URL
      ? new URL(process.env.NEXT_PUBLIC_APP_URL)
      : undefined,
    title: "Raw Materials",
    description: "Explore raw material products",
};

interface PageProps {
    params: {
        cc: string;
    };
}

export async function generateStaticParams(): Promise<PageProps["params"][]> {
    return [{ cc: "cn" }, { cc: "en" }];
}

export default function RawMaterialsPage({ params }: PageProps) {
  return <RawMaterialsSection params={{ cc: params.cc as CC }} />;
}
