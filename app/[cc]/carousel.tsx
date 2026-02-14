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

function getCarouselHref(lang: CC, imgSrc: string) {
  const m = /\/banner\/(?:banner)?(\d+)\./i.exec(imgSrc);
  const idx = m ? Number(m[1]) : NaN;

  if (idx === 1) return `/${lang}/products`;
  if (idx === 4) return `/${lang}/raw-material-products`;

  return null;
}

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
                    {getCarouselHref(lang, item.imgSrc) ? (
                      <Link
                        href={getCarouselHref(lang, item.imgSrc)!}
                        className="absolute inset-0 z-10"
                        aria-label={lang === "cn" ? "轮播图跳转" : "Carousel link"}
                      />
                    ) : null}
                    <Link
                      href={`/${lang}/contact`}
                      className="absolute z-20 left-[4%] bottom-[14%] h-10 w-36 bg-transparent"
                      aria-label={lang === "cn" ? "联系我们" : "Contact Us"}
                    />
                    <Image
                      src={item.imgSrc}
                      alt=""
                      fill
                      sizes="100vw"
                      quality={75}
                      className={
                        "object-contain object-center" +
                        (getCarouselHref(lang, item.imgSrc) ? " cursor-pointer" : "")
                      }
                    />
                  </div>
                ) : (
                  <div className="relative w-full aspect-[18/7] overflow-hidden">
                    {getCarouselHref(lang, item.imgSrc) ? (
                      <Link
                        href={getCarouselHref(lang, item.imgSrc)!}
                        className="absolute inset-0 z-10"
                        aria-label={lang === "cn" ? "轮播图跳转" : "Carousel link"}
                      />
                    ) : null}
                    <Link
                      href={`/${lang}/contact`}
                      className="absolute z-20 left-[5%] bottom-[16%] h-[10px] w-10 translate-y-[3px] bg-transparent"
                      aria-label={lang === "cn" ? "联系我们" : "Contact Us"}
                    />
                    <Image
                      src={item.imgSrc}
                      alt=""
                      fill
                      sizes="100vw"
                      quality={75}
                      className={
                        "object-contain object-center" +
                        (getCarouselHref(lang, item.imgSrc) ? " cursor-pointer" : "")
                      }
                    />
                  </div>
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
