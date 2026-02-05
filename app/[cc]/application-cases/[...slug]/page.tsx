import { notFound, redirect } from "next/navigation";
import { type Metadata } from "next";

import { applicationCaseReports } from "@/config/application-case-reports";

interface PostPageProps {
  params: {
    slug: string[];
    cc: string;
  };
}

async function getPostFromParams(params: PostPageProps["params"]) {
  const slug = params?.slug?.[0];
  if (!slug) return null;
  const caseItem = applicationCaseReports.find((p) => p.slug === slug);
  return caseItem ?? null;
}

export async function generateMetadata({
  params,
}: PostPageProps): Promise<Metadata> {
  const caseItem = await getPostFromParams(params);
  const isCn = params.cc === "cn";

  if (!caseItem) {
    return {};
  }

  return {
    title: isCn ? caseItem.titleCn : caseItem.title,
    description: isCn ? caseItem.descriptionCn : caseItem.description,
  };
}

export async function generateStaticParams(): Promise<
  PostPageProps["params"][]
> {
  return applicationCaseReports.flatMap((caseItem) => [
    { cc: "cn", slug: [caseItem.slug] },
    { cc: "en", slug: [caseItem.slug] },
  ]);
}

export default async function PostPage({ params }: PostPageProps) {
  const caseItem = await getPostFromParams(params);

  if (!caseItem) {
    notFound();
  }

  const pdfUrl = `/api/application-case-pdf/${caseItem.pdfFile}#toolbar=0&navpanes=0&scrollbar=0`;

  redirect(pdfUrl);
}
