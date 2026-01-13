"use client";

import * as React from "react";
import { useEffect, useMemo, useRef, useState } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import { Shell } from "@/components/shells/shell";
import { PageHeader, PageHeaderDescription } from "@/components/page-header";
import { Separator } from "@/components/ui/separator";
import { Newspaper, Building2, BookOpen } from "lucide-react";
import { CC } from "../page";
import { EventsSection } from "../events/section";
import { AnnouncementsSection } from "../announcements/section";
import { ArticlesSection } from "../articles/section";

interface PageProps {
  params: {
    cc?: CC;
  };
}

type TabKey = "industry-news" | "company-news" | "knowledge-base";

export default function NewsPage({ params = { cc: "cn" } }: PageProps) {
  const isCn = params.cc === "cn";

  const tabs = useMemo(
    () => [
      { 
        key: "industry-news" as TabKey, 
        cn: "行业动态", 
        en: "Industry News",
        icon: Newspaper,
      },
      { 
        key: "company-news" as TabKey, 
        cn: "公司新闻", 
        en: "Company News",
        icon: Building2,
      },
      { 
        key: "knowledge-base" as TabKey, 
        cn: "农业科普", 
        en: "Knowledge Base",
        icon: BookOpen,
      },
    ],
    []
  );

  const [active, setActive] = useState<TabKey>("industry-news");

  const containerRef = useRef<HTMLDivElement | null>(null);
  const btnRefs = useRef<Record<TabKey, HTMLButtonElement | null>>({
    "industry-news": null,
    "company-news": null,
    "knowledge-base": null,
  });
  const [indicator, setIndicator] = useState<{ left: number; width: number }>({ left: 0, width: 0 });

  const recalcIndicator = () => {
    const c = containerRef.current;
    const b = btnRefs.current[active];
    if (!c || !b) return;
    const cRect = c.getBoundingClientRect();
    const bRect = b.getBoundingClientRect();
    setIndicator({ left: bRect.left - cRect.left, width: bRect.width });
  };

  useEffect(() => {
    recalcIndicator();
    btnRefs.current[active]?.scrollIntoView({ behavior: "smooth", inline: "center", block: "nearest" });
  }, [active]);

  useEffect(() => {
    const onResize = () => recalcIndicator();
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  // 监听路由变化
  const pathname = usePathname();
  
  useEffect(() => {
    const map: Record<string, TabKey> = {
      "#industry-news": "industry-news",
      "#company-news": "company-news",
      "#knowledge-base": "knowledge-base",
    };
    const applyFromHash = () => {
      const hash = window.location.hash;
      const k = map[hash];
      if (k) {
        setActive(k);
      }
    };
    // 立即执行和延迟执行
    applyFromHash();
    const timer = setTimeout(applyFromHash, 50);
    const timer2 = setTimeout(applyFromHash, 200);
    window.addEventListener("hashchange", applyFromHash);
    return () => {
      clearTimeout(timer);
      clearTimeout(timer2);
      window.removeEventListener("hashchange", applyFromHash);
    };
  }, [pathname]);

  useEffect(() => {
    const map: Record<TabKey, string> = {
      "industry-news": "#industry-news",
      "company-news": "#company-news",
      "knowledge-base": "#knowledge-base",
    };
    const hash = map[active];
    if (hash) {
      history.replaceState(null, "", hash);
    }
  }, [active]);

  const [enter, setEnter] = useState(false);
  useEffect(() => {
    setEnter(false);
    const id = requestAnimationFrame(() => setEnter(true));
    return () => cancelAnimationFrame(id);
  }, [active]);

  const renderContent = () => {
    switch (active) {
      case "industry-news":
        return <EventsSection params={{ cc: params.cc }} asSubsection />;
      case "company-news":
        return <AnnouncementsSection params={{ cc: params.cc }} asSubsection />;
      case "knowledge-base":
        return <ArticlesSection params={{ cc: params.cc }} asSubsection />;
      default:
        return null;
    }
  };

  return (
    <Shell className="md:pb-10 min-h-[calc(100vh-156px)]">
      <PageHeader>
        <div className="text-2xl md:text-4xl font-bold text-gray-900 dark:text-white">
          {isCn ? "新闻资讯" : "News & Information"}
        </div>
        <PageHeaderDescription className="text-lg text-gray-600 dark:text-gray-300">
          {isCn 
            ? "了解行业动态、公司新闻和农业科普知识" 
            : "Stay informed with industry news, company updates, and farming knowledge"}
        </PageHeaderDescription>
      </PageHeader>

      <Separator className="hidden md:block my-4" />

      {/* 选项卡导航 */}
      <div role="tablist" aria-label="News Tabs" className="sticky top-16 z-10 bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div ref={containerRef} className="relative flex gap-2 overflow-x-auto px-2 pb-3 border-b border-border">
          <span
            className="absolute bottom-0 h-[2px] bg-primary transition-all duration-300"
            style={{ left: indicator.left, width: indicator.width }}
          />
          {tabs.map((t) => {
            const isActive = t.key === active;
            const IconComponent = t.icon;
            return (
              <button
                key={t.key}
                ref={(el) => (btnRefs.current[t.key] = el)}
                role="tab"
                aria-selected={isActive}
                aria-controls={`panel-${t.key}`}
                tabIndex={isActive ? 0 : -1}
                onKeyDown={(e) => {
                  if (e.key === "ArrowRight" || e.key === "ArrowLeft") {
                    e.preventDefault();
                    const idx = tabs.findIndex((x) => x.key === active);
                    const nextIdx = e.key === "ArrowRight" ? (idx + 1) % tabs.length : (idx - 1 + tabs.length) % tabs.length;
                    setActive(tabs[nextIdx].key);
                  }
                }}
                className={`relative px-4 py-2 rounded-full text-sm md:text-base transition-colors whitespace-nowrap border flex items-center gap-2
                  ${isActive ? "bg-primary text-primary-foreground border-primary shadow-sm" : "bg-muted/40 text-muted-foreground hover:text-foreground hover:bg-muted border-transparent"}`}
                onClick={() => setActive(t.key)}
              >
                <IconComponent className="w-4 h-4" />
                {isCn ? t.cn : t.en}
              </button>
            );
          })}
        </div>
      </div>

      {/* 内容区域 */}
      <div
        id={`panel-${active}`}
        role="tabpanel"
        aria-labelledby={active}
        className={`pt-4 transition-all duration-300 ease-out ${enter ? "opacity-100 translate-y-0" : "opacity-0 translate-y-1"}`}
      >
        {renderContent()}
      </div>
    </Shell>
  );
}
