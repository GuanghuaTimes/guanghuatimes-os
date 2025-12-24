import { type Metadata } from "next";

import { AnnouncementsSection } from "./section";
import type { CC } from "../page";

export const metadata: Metadata = {
  // metadataBase: new URL(process.env.NEXT_PUBLIC_APP_URL!),
  title: "Announcement",
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

export default function AnnouncementPage({ params }: PageProps) {
  return <AnnouncementsSection params={{ cc: params.cc as CC }} />;
}
