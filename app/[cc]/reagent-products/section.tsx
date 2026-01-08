import Link from "next/link";

import { Button } from "@/components/ui/button";
import { PageHeader, PageHeaderDescription } from "@/components/page-header";
import { Separator } from "@/components/ui/separator";
import { Shell } from "@/components/shells/shell";
import type { CC } from "../page";

export function ReagentProductsSection({
  params,
  showReadMore = false,
}: {
  params: { cc?: CC };
  showReadMore?: boolean;
}) {
  return (
    <Shell className="md:pb-10">
      <section className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        <div className="col-span-full">
          <Link href={`/${params.cc}/reagent-products`} className="block">
            <div className="bg-gradient-to-br from-green-50 to-blue-50 dark:from-green-900/20 dark:to-blue-900/20 rounded-2xl p-8 md:p-12 hover:shadow-lg transition-shadow cursor-pointer">
              <div className="max-w-3xl mx-auto text-center">
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-4">
                  {params.cc === "cn" ? "探索我们的制剂产品系列" : "Explore Our Reagent Product Series"}
                </h3>
                <p className="text-lg text-gray-600 dark:text-gray-300">
                  {params.cc === "cn" 
                    ? "包括三板斧系列、AGRARIUS系列和光华生物系列，为您提供全方位的生物制剂解决方案" 
                    : "Including Raw Materials, AGRARIUS Series, and Guanghua Bio Series, providing comprehensive biological reagent solutions"}
                </p>
              </div>
            </div>
          </Link>
        </div>
      </section>
    </Shell>
  );
}
