import { AspectRatio } from "@/components/ui/aspect-ratio";
import Image from "next/image";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";
import { RawMaterialsSection } from "./raw-materials/section";
import { carouselImgVersion, homepageConfig } from "@/config/homepage";
import { ReagentProductsSection } from "./reagent-products/section";
import { DailyChemicalSeriesSection } from "./daily-chemical-series/section";
import CarouselComponent from "./carousel";
import path from "path";
import { readdir } from "fs/promises";

export type CC = "en" | "cn";

interface PageProps {
  params: {
    cc: string;
  };
}

export async function generateStaticParams(): Promise<PageProps["params"][]> {
  return [{ cc: "cn" }, { cc: "en" }];
}

export default async function LandingPage({
  params = { cc: "cn" },
}: {
  params: {
    cc?: CC;
  };
}) {
  const getCarouselItems = async () => {
    try {
      const bannerDir = path.join(process.cwd(), "public", "banner");
      const files = await readdir(bannerDir);

      const matches = files
        .map((f) => {
          const m = /^banner(\d+)\.(png|jpe?g|webp|avif)$/i.exec(f);
          if (!m) return null;
          return { file: f, index: Number(m[1]) };
        })
        .filter((x): x is { file: string; index: number } => Boolean(x))
        .sort((a, b) => a.index - b.index);

      if (matches.length === 0) return homepageConfig.carouselItems;

      return matches.map((m) => ({
        imgSrc: `/banner/${m.file}?v=${carouselImgVersion}`,
        title: "Welcome to Guanghua Times",
        titleCn: "欢迎来到光华时代",
        description:
          "Innovation-driven, quality creates the future; Technology empowers, service creates value!",
        descriptionCn: "创新驱动，品质铸就未来；技术赋能，服务创造价值！",
        href: "/about",
      }));
    } catch {
      return homepageConfig.carouselItems;
    }
  };

  const carouselItems = await getCarouselItems();

  return (
    <div className="grow flex flex-col items-center justify-center relative w-full">
      <CarouselComponent lang={params.cc!} mobile items={carouselItems} />
      <CarouselComponent lang={params.cc!} items={carouselItems} />
      <div className="container sm:px-8 relative">
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
      <div className="container sm:px-8 hidden md:block my-2">
        <Separator />
      </div>
      <div className="w-full">
        <ReagentProductsSection params={{ cc: params.cc }} showReadMore={true} />
      </div>
      <div className="container sm:px-8 hidden md:block my-2">
        <Separator />
      </div>
      <div className="w-full">
        <RawMaterialsSection params={{ cc: params.cc }} limit={3} showReadMore={true} asHomepage={true} />
      </div>
      <div className="container sm:px-8 hidden md:block my-2">
        <Separator />
      </div>
      <div className="w-full">
        <DailyChemicalSeriesSection params={{ cc: params.cc }} limit={3} showReadMore={true} asHomepage={true} />
      </div>
    </div>
  );
}
// 测试热重载 Mon Dec  8 16:01:06 CST 2025
// 测试 Mon Dec  8 16:03:32 CST 2025
// 热重载测试 Mon Dec  8 16:11:55 CST 2025
// 热重载测试 Mon Dec  8 16:13:34 CST 2025
