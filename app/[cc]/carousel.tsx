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
}: {
  lang: CC;
  mobile?: boolean;
}) {
  return (
    <Carousel
      className={
        "w-full overflow-hidden px-2" +
        (mobile ? " sm:hidden px-0" : " hidden sm:block")
      }
      plugins={[
        Autoplay({
          delay: 5000,
        }),
      ]}
    >
      <CarouselContent>
        {homepageConfig.carouselItems.map((item, i) => (
          <CarouselItem key={i}>
            <Card>
              <CardContent className="flex items-center justify-center">
                <AspectRatio
                  ratio={!mobile ? 16 / 9 : 4 / 5}
                  className="relative overflow-hidden"
                >
                  <div className="absolute inset-0 z-10 bg-black/20 flex justify-center items-center p-4">
                    <Link href={`${lang}${item.href}`}>
                      <h1 className={`hover:underline font-bold text-white text-center max-w-6xl ${mobile ? 'text-lg leading-tight' : 'text-xl md:text-3xl'}`}>
                        {lang === "cn" ? item.titleCn : item.title}
                        <br className={mobile ? 'block' : 'hidden'} />
                        <br className={mobile ? 'hidden' : 'block'} />
                        <span className={mobile ? 'text-sm font-normal' : ''}>
                          {lang === "cn" ? item.descriptionCn : item.description}
                        </span>
                      </h1>
                    </Link>
                  </div>
                  <Image
                    src={item.imgSrc}
                    alt=""
                    fill
                    className="object-cover bg-black/10 object-center"
                  />
                </AspectRatio>
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
