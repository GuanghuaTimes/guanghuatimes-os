import { AspectRatio } from "@/components/ui/aspect-ratio";
import Image from "next/image";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";
import { RawMaterialsSection } from "./raw-materials/section";
import { homepageConfig } from "@/config/homepage";
import { ReagentProductsSection } from "./reagent-products/section";
import { DailyChemicalSeriesSection } from "./daily-chemical-series/section";
import CarouselComponent from "./carousel";

export type CC = "en" | "cn";

interface PageProps {
  params: {
    cc: string;
  };
}

export async function generateStaticParams(): Promise<PageProps["params"][]> {
  return [{ cc: "cn" }, { cc: "en" }];
}

export default function LandingPage({
  params = { cc: "cn" },
}: {
  params: {
    cc?: CC;
  };
}) {
  return (
    <div className="grow flex flex-col items-center justify-center relative w-full">
      <CarouselComponent lang={params.cc!} mobile />
      <CarouselComponent lang={params.cc!} />
      <div className="container relative">
        <div className="hidden md:grid grid-cols-4 my-2 gap-2">
          {homepageConfig.navs.map((m, i) => (
            <Link
              href={`/${params.cc}/${m.href}`}
              className="col-span-1 relative group overflow-hidden"
              key={i}
            >
              <div className="absolute inset-0 z-10 bg-black/30 flex justify-center items-center">
                <h1 className="text-xl font-bold text-white text-center p-2">
                  {params.cc === "cn" ? m.titleCn : m.title}
                </h1>
              </div>
              <AspectRatio ratio={16 / 13}>
                <Image
                  src={m.imgSrc}
                  alt=""
                  fill
                  className="object-cover group-hover:scale-105"
                  priority
                />
              </AspectRatio>
            </Link>
          ))}
        </div>
      </div>
      <Separator className="container hidden md:block my-2" />
      <div className="w-full">
        <ReagentProductsSection params={{ cc: params.cc }} showReadMore={true} />
      </div>
      <Separator className="container hidden md:block my-2" />
      <div className="w-full">
        <RawMaterialsSection params={{ cc: params.cc }} limit={4} showReadMore={true} asHomepage={true} />
      </div>
      <Separator className="container hidden md:block my-2" />
      <div className="w-full">
        <DailyChemicalSeriesSection params={{ cc: params.cc }} limit={4} showReadMore={true} asHomepage={true} />
      </div>
    </div>
  );
}
// 测试热重载 Mon Dec  8 16:01:06 CST 2025
// 测试 Mon Dec  8 16:03:32 CST 2025
// 热重载测试 Mon Dec  8 16:11:55 CST 2025
// 热重载测试 Mon Dec  8 16:13:34 CST 2025
