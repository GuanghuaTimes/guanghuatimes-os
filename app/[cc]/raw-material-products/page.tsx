import { redirect } from "next/navigation";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Raw Material Products",
  description: "Raw Material Products - Redirect",
};

interface PageProps {
  params: {
    cc: string;
  };
}

export async function generateStaticParams(): Promise<PageProps["params"][]> {
  return [{ cc: "cn" }, { cc: "en" }];
}

export default function RawMaterialProductsRedirect({ params }: PageProps) {
  redirect(`/${params.cc}/reagent-products`);
}
