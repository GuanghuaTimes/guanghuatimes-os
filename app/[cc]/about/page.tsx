import { type Metadata } from "next";
import { PageHeaderHeading } from "@/components/page-header";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import Image from "next/image";
import Link from "next/link";
import { aboutConfig } from "@/config/about";
import { CC } from "../page";
import AboutTabs from "./tabs";

export const metadata: Metadata = {
  // metadataBase: new URL(process.env.NEXT_PUBLIC_APP_URL!),
  title: "About",
  description: "about the community",
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
  params: {
    cc?: CC;
  };
}) {
  return (
    <>
      {/* desktop */}
      <div className="w-full max-w-[1400px] mx-auto relative hidden sm:block">
        <AspectRatio ratio={16 / 6}>
          <Image
            src={aboutConfig.imgSrc}
            alt=""
            fill
            sizes="100vw"
            quality={75}
            className="object-cover"
            priority
          />
        </AspectRatio>
      </div>

      {/* mobile */}
      <div className="w-full max-w-[1400px] mx-auto relative sm:hidden">
        <AspectRatio ratio={1 / 1}>
          <Image
            src={aboutConfig.imgSrc}
            alt=""
            fill
            sizes="100vw"
            quality={75}
            className="object-cover"
            priority
          />
        </AspectRatio>
      </div>

      <div className="container flex flex-col lg:flex-row gap-6 my-6">
        <PageHeaderHeading className="flex-none lg:max-w-[250px]">
          {params.cc === "cn" ? aboutConfig.titleCn : aboutConfig.title}
        </PageHeaderHeading>
        <div className="md:text-lg">
          {params.cc === "cn"
            ? aboutConfig.descriptionCn
            : aboutConfig.description}
        </div>
      </div>

      {/* tabbed company profile sections */}
      <AboutTabs cc={params.cc || "cn"} />

    </>
  );
}
