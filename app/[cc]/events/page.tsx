import { type Metadata } from "next";

import { EventsSection } from "./section";
import type { CC } from "../page";

export const metadata: Metadata = {
  // metadataBase: new URL(process.env.NEXT_PUBLIC_APP_URL!),
  title: "Event",
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

export default function EventPage({ params }: PageProps) {
  return <EventsSection params={{ cc: params.cc as CC }} />;
}