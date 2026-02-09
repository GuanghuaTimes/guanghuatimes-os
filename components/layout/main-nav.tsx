"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import type { MainNavItem } from "@/types";
import { useRouter } from "next/navigation";


import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { Palmtree } from "lucide-react";
import { CC } from "@/app/[cc]/page";
import { Button } from "@/components/ui/button";

interface MainNavProps {
  items?: MainNavItem[];
  lang: CC;
}

export function MainNav({ items, lang }: MainNavProps) {
  const router = useRouter();
  const disabledGroups = new Set(["Services", "Nature School"]);
  const isGroupDisabled = (groupTitle?: string) =>
    groupTitle ? disabledGroups.has(groupTitle) : false;

  const [openValue, setOpenValue] = React.useState<string>("");
  const closeTimerRef = React.useRef<ReturnType<typeof setTimeout> | null>(null);

  const isExternalHref = (href?: string, external?: boolean) =>
    Boolean(external || (href && /^https?:\/\//i.test(href)));

  const resolveHref = (href?: string, external?: boolean) => {
    if (!href) return href;
    return isExternalHref(href, external) ? href : `/${lang}/${href}`;
  };

  const navigateToGroup = (item: MainNavItem) => {
    if (!item.href || isGroupDisabled(item.title)) return;
    const url = resolveHref(item.href, item.external);
    if (url) router.push(url);
  };

  const cancelClose = () => {
    if (closeTimerRef.current) {
      clearTimeout(closeTimerRef.current);
      closeTimerRef.current = null;
    }
  };

  const scheduleClose = () => {
    cancelClose();
    closeTimerRef.current = setTimeout(() => {
      setOpenValue("");
    }, 200);
  };

  return (
    <div className="hidden md:flex justify-between w-full text-lg">
      <Link
        href={`/${lang}`}
        className="mr-auto hidden items-center space-x-2 md:flex"
      >
        {/*<Palmtree className="size-6" />*/}
          <Image
              src="/Logo.png"  // 你的logo文件路径
              alt={lang === "cn" ? siteConfig.nameCn : siteConfig.name}
              width={24}
              height={24}
              className="size-6"
          />
        <span className="hidden font-bold md:inline-block">
          {lang === "cn" ? siteConfig.nameCn : siteConfig.name}
        </span>
        <span className="sr-only">Home</span>
      </Link>
      <NavigationMenu
        value={openValue}
        onValueChange={(next) => {
          // Keep menus open on click: ignore click-triggered close while the cursor is still in the nav.
          if (!next && openValue) return;
          setOpenValue(next);
        }}
        onMouseEnter={cancelClose}
        onMouseLeave={scheduleClose}
      >
        <NavigationMenuList>
          {items?.[0]?.items ? (
            <NavigationMenuItem
              value={items[0].title}
              onMouseEnter={() => setOpenValue(items[0].title)}
            >
              <NavigationMenuTrigger
                className="h-auto text-base"
                onClick={() => navigateToGroup(items[0])}
              >
                {lang === "cn" ? items[0].titleCn : items[0].title}
              </NavigationMenuTrigger>
              <NavigationMenuContent onMouseEnter={cancelClose} onMouseLeave={scheduleClose}>
                <ul className="grid gap-3 p-6 md:w-[400px]  md:grid-cols-[.75fr_1fr]">
                  <li className="row-span-3">
                    <NavigationMenuLink asChild>
                      <Link
                        href={`/${lang}`}
                        className="flex size-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                      >
                        {/*<Palmtree className="size-6" />*/}
                          <Image
                              src="/Logo.png"  // 你的logo文件路径
                              alt={lang === "cn" ? siteConfig.nameCn : siteConfig.name}
                              width={24}
                              height={24}
                              className="size-6"
                          />
                        <div className="mb-2 mt-4 text-md font-medium">
                          {lang === "cn" ? siteConfig.nameCn : siteConfig.name}
                        </div>
                        <p className="text-sm leading-tight text-muted-foreground">
                          {lang === "cn"
                            ? siteConfig.descriptionCn
                            : siteConfig.description}
                        </p>
                        <span className="sr-only">Home</span>
                      </Link>
                    </NavigationMenuLink>
                  </li>
                  {items[0].items.map((item) => (
                    <ListItem
                      key={item.title}
                      title={lang === "cn" ? item.titleCn : item.title}
                      href={resolveHref(item.href, item.external)}
                      target={isExternalHref(item.href, item.external)
                        ? "_blank"
                        : undefined}
                      rel={isExternalHref(item.href, item.external)
                        ? "noreferrer"
                        : undefined}
                    >
                      {item.description}
                    </ListItem>
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
          ) : null}
          {items
            ?.filter((item) => item.title !== items[0]?.title)
            .map((item) =>
              item?.items && item.items.length > 0 ? (
                <NavigationMenuItem
                  key={item.title}
                  value={item.title}
                  onMouseEnter={() => setOpenValue(item.title)}
                >
                  <NavigationMenuTrigger
                    className="h-auto capitalize text-base"
                    onClick={() => navigateToGroup(item)}
                  >
                    {lang === "cn" ? item.titleCn : item.title}
                  </NavigationMenuTrigger>
                  <NavigationMenuContent onMouseEnter={cancelClose} onMouseLeave={scheduleClose}>
                    <ul className="grid w-[300px] gap-3 p-4 grid-cols-1">
                      {item.href && !isGroupDisabled(item.title) && item.title !== "Contact Us" && item.title !== "News" && item.title !== "Product Categories" && item.title !== "Application Cases" && (
                        <li className="mb-2">
                          <Link
                            href={resolveHref(item.href, item.external) ?? "#"}
                            target={isExternalHref(item.href, item.external)
                              ? "_blank"
                              : undefined}
                            rel={isExternalHref(item.href, item.external)
                              ? "noreferrer"
                              : undefined}
                            className="block px-4 py-2 rounded-md bg-green-50 hover:bg-green-100 dark:bg-green-900/20 dark:hover:bg-green-900/30 transition-colors"
                          >
                            <div className="flex items-center justify-between">
                              <span className="font-semibold text-green-700 dark:text-green-400">
                                {lang === "cn" ? `查看全部${item.titleCn}` : `View All ${item.title}`}
                              </span>
                              <svg className="w-4 h-4 text-green-700 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                              </svg>
                            </div>
                          </Link>
                        </li>
                      )}
                      {item.items.map((subItem) => 
                        subItem.items && subItem.items.length > 0 ? (
                          <li key={subItem.title} className="relative group/submenu">
                            <Link
                              href={resolveHref(subItem.href, subItem.external) ?? "#"}
                              target={isExternalHref(subItem.href, subItem.external)
                                ? "_blank"
                                : undefined}
                              rel={isExternalHref(subItem.href, subItem.external)
                                ? "noreferrer"
                                : undefined}
                              className="flex items-center justify-between select-none rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground"
                            >
                              <div>
                                <div className="text-sm font-medium leading-none">
                                  {lang === "cn" ? subItem.titleCn : subItem.title}
                                </div>
                                {subItem.description && (
                                  <p className="line-clamp-2 text-sm leading-snug text-muted-foreground mt-1">
                                    {subItem.description}
                                  </p>
                                )}
                              </div>
                              <svg className="w-4 h-4 ml-2 text-muted-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                              </svg>
                            </Link>
                            <ul className="absolute left-full top-0 ml-1 w-[200px] rounded-md border bg-popover p-2 shadow-md opacity-0 invisible group-hover/submenu:opacity-100 group-hover/submenu:visible transition-all duration-200 z-50">
                              {subItem.items.map((nestedItem) => {
                                const disabled = isGroupDisabled(item.title);
                                return disabled ? (
                                  <li key={nestedItem.title}>
                                    <div
                                      className="block select-none space-y-1 rounded-md p-3 leading-none text-muted-foreground cursor-not-allowed opacity-70"
                                      title="即将上线/敬请期待"
                                    >
                                      <div className="text-sm font-medium leading-none">
                                        {lang === "cn" ? nestedItem.titleCn : nestedItem.title}
                                      </div>
                                    </div>
                                  </li>
                                ) : (
                                  <li key={nestedItem.title}>
                                    <Link
                                      href={resolveHref(nestedItem.href, nestedItem.external) ?? "#"}
                                      target={isExternalHref(nestedItem.href, nestedItem.external)
                                        ? "_blank"
                                        : undefined}
                                      rel={isExternalHref(nestedItem.href, nestedItem.external)
                                        ? "noreferrer"
                                        : undefined}
                                      className="block select-none rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground"
                                    >
                                      <div className="text-sm font-medium leading-none">
                                        {lang === "cn" ? nestedItem.titleCn : nestedItem.title}
                                      </div>
                                    </Link>
                                  </li>
                                );
                              })}
                            </ul>
                          </li>
                        ) : (
                          (() => {
                            const disabled = isGroupDisabled(item.title);
                            return disabled ? (
                              <li key={subItem.title}>
                                <div
                                  className="block select-none space-y-1 rounded-md p-3 leading-none text-muted-foreground cursor-not-allowed opacity-70"
                                  title="即将上线/敬请期待"
                                >
                                  <div className="text-sm font-medium leading-none">
                                    {lang === "cn" ? subItem.titleCn : subItem.title}
                                  </div>
                                  <p className="line-clamp-2 text-sm leading-snug">
                                    {subItem.description}
                                  </p>
                                </div>
                              </li>
                            ) : (
                              <ListItem
                                key={subItem.title}
                                title={lang === "cn" ? subItem.titleCn : subItem.title}
                                href={resolveHref(subItem.href, subItem.external)}
                                target={isExternalHref(subItem.href, subItem.external)
                                  ? "_blank"
                                  : undefined}
                                rel={isExternalHref(subItem.href, subItem.external)
                                  ? "noreferrer"
                                  : undefined}
                              >
                                {subItem.description}
                              </ListItem>
                            );
                          })()
                        )
                      )}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              ) :
                item.href && !isGroupDisabled(item.title) && (
                  <NavigationMenuItem key={item.title}>
                    <Link
                      href={resolveHref(item.href, item.external) ?? "#"}
                      legacyBehavior
                      passHref
                    >
                      <NavigationMenuLink
                        className={cn(
                          navigationMenuTriggerStyle(),
                          "h-auto text-base"
                        )}
                        target={isExternalHref(item.href, item.external)
                          ? "_blank"
                          : undefined}
                        rel={isExternalHref(item.href, item.external)
                          ? "noreferrer"
                          : undefined}
                      >
                        {lang === "cn" ? item.titleCn : item.title}
                      </NavigationMenuLink>
                    </Link>
                  </NavigationMenuItem>
                )
            )}
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, href, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <Link
          ref={ref}
          href={String(href)}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </Link>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";
