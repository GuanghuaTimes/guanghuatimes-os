import { redirect } from "next/navigation";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Daily Chemical Products",
  description: "Daily Chemical Products - Redirect",
};

interface PageProps {
  params: {
    cc: string;
  };
}

export async function generateStaticParams(): Promise<PageProps["params"][]> {
  return [{ cc: "cn" }, { cc: "en" }];
}

export default function DailyChemicalProductsRedirect({ params }: PageProps) {
  redirect(`/${params.cc}/daily-chemical-series`);
}
