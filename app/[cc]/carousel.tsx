"use client";

import Autoplay from "embla-carousel-autoplay";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
import Link from "next/link";
import { CC } from "./page";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { homepageConfig } from "@/config/homepage";

export default function CarouselComponent({
  lang,
  mobile = false,
  items,
}: {
  lang: CC;
  mobile?: boolean;
  items?: Array<{
    imgSrc: string;
    title: string;
    titleCn: string;
    description: string;
    descriptionCn: string;
    href: string;
  }>;
}) {
  const carouselItems = items ?? homepageConfig.carouselItems
  return (
    <Carousel
      opts={{ loop: true }}
      className={
        "w-full overflow-hidden px-0" +
        (mobile ? " sm:hidden" : " hidden sm:block")
      }
      plugins={[
        Autoplay({
          delay: 5000,
        }),
      ]}
    >
      <CarouselContent className="!ml-0">
        {carouselItems.map((item, i) => (
          <CarouselItem key={i} className="pl-0">
            <Card className="rounded-none border-0 shadow-none">
              <CardContent className="flex items-center justify-center p-0">
                {!mobile ? (
                  <div className="relative w-full aspect-[5/2] overflow-hidden">
                    <div className="absolute inset-0 z-10 bg-black/20 flex justify-center items-center p-4">
                      <Link href={`${lang}${item.href}`}>
                        <h1 className="hover:underline font-bold text-white text-center max-w-6xl text-xl md:text-3xl">
                          {lang === "cn" ? item.titleCn : item.title}
                          <br />
                          <br />
                          <span>
                            {lang === "cn" ? item.descriptionCn : item.description}
                          </span>
                        </h1>
                      </Link>
                    </div>
                    <Image
                      src={item.imgSrc}
                      alt=""
                      fill
                      sizes="100vw"
                      quality={75}
                      className="object-contain bg-black/10 object-center"
                    />
                  </div>
                ) : (
                  <AspectRatio ratio={4 / 5} className="relative w-full overflow-hidden">
                    <div className="absolute inset-0 z-10 bg-black/20 flex justify-center items-center p-4">
                      <Link href={`${lang}${item.href}`}>
                        <h1 className="hover:underline font-bold text-white text-center max-w-6xl text-lg leading-tight">
                          {lang === "cn" ? item.titleCn : item.title}
                          <br />
                          <br />
                          <span className="text-sm font-normal">
                            {lang === "cn" ? item.descriptionCn : item.description}
                          </span>
                        </h1>
                      </Link>
                    </div>
                    <Image
                      src={item.imgSrc}
                      alt=""
                      fill
                      sizes="100vw"
                      quality={75}
                      className="object-cover bg-black/10 object-center"
                    />
                  </AspectRatio>
                )}
              </CardContent>
            </Card>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="hidden sm:block" />
      <CarouselNext className="hidden sm:block" />
    </Carousel>
  );
}
