import { type Metadata } from "next";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import Image from "next/image";
import { CC } from "../page";
import { applicationCasesConfig } from "@/config/application-cases";
import { applicationCaseReports } from "@/config/application-case-reports";
import { CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { PlaceholderImage } from "@/components/placeholder-image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Application Cases",
  description: "Explore our successful application cases",
};

interface PageProps {
  params: {
    cc: string;
  };
}

export async function generateStaticParams(): Promise<PageProps["params"][]> {
  return [{ cc: "cn" }, { cc: "en" }];
}

export default function Page({
  params = { cc: "cn" },
}: {
  params: { cc?: CC };
}) {
  const isCn = params.cc === "cn";

  const cases = [...applicationCaseReports].sort((a, b) =>
    b.date.localeCompare(a.date)
  );

  const CaseCard = ({
    caseItem,
    index,
  }: {
    caseItem: (typeof applicationCaseReports)[number];
    index: number;
  }) => {
    const pdfUrl = `/api/application-case-pdf/${caseItem.pdfFile}#toolbar=0&navpanes=0&scrollbar=0`;
    const cardContent = (
      <article className="space-y-4 group cursor-pointer">
        <AspectRatio ratio={16 / 9} className="overflow-hidden relative">
          {caseItem.image ? (
            <Image
              src={caseItem.image}
              alt={isCn ? caseItem.titleCn : caseItem.title}
              fill
              sizes="(min-width: 1024px) 384px, (min-width: 768px) 288px, (min-width: 640px) 224px, 100vw"
              className="rounded-lg object-cover group-hover:scale-105 transition-transform"
              priority={index <= 1}
            />
          ) : (
            <PlaceholderImage asChild />
          )}
        </AspectRatio>
        <div className="space-y-2">
          <CardHeader className="space-y-2.5 p-0">
            <CardTitle className="line-clamp-1 dark:text-white">
              {isCn ? caseItem.titleCn : caseItem.title}
            </CardTitle>
            <CardDescription className="line-clamp-2 dark:text-gray-300">
              {isCn ? caseItem.descriptionCn : caseItem.description}
            </CardDescription>
          </CardHeader>
        </div>
      </article>
    );

    return (
      <Link
        href={pdfUrl}
        target="_blank"
        rel="noreferrer"
      >
        {cardContent}
      </Link>
    );
  };

  return (
    <>
      <div className="container py-6 space-y-6">
        <h1 className="text-2xl md:text-4xl font-bold text-gray-900 dark:text-white">
          {isCn ? applicationCasesConfig.titleCn : applicationCasesConfig.title}
        </h1>

        <p className="text-lg text-gray-600 dark:text-gray-300">
          {isCn ? applicationCasesConfig.descriptionCn : applicationCasesConfig.description}
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {cases.length > 0 ? (
            cases.map((caseItem, index) => (
              <CaseCard key={caseItem.slug} caseItem={caseItem} index={index} />
            ))
          ) : (
            <div className="text-center text-gray-500 col-span-full py-12">
              {isCn ? "暂无案例" : "No cases available"}
            </div>
          )}
        </div>
      </div>
    </>
  );
}
