import type { FooterItem, MainNavItem } from "@/types";
import {title} from "process";

export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "GuanghuaTimes Bio",
  nameCn: "光华时代",
  heroSlogan: "Welcome to Guanghua Times",
  heroSubSlogan: "Innovation-driven, quality creates the future; Technology empowers, service creates value!",
  heroSubSloganCn: "创新驱动 品质铸就未来； 技术赋能，服务创造价值！",
  description: "The best place to visit",
  descriptionCn: "",
  url: "https://alan-webpage.vercel.app",
  ogImage: "https://alan-webpage.vercel.app/opengraph-image.png",
  mainNav: [
    {
      title: "About",
      titleCn: "关于我们",
      items: [
        {
          title: "About",
          titleCn: "光华时代",
          href: "about",
          description: "About Guanghua Times",
          items: [],
        },
      ],
    },
    {
      title: "News",
      titleCn: "新闻资讯",
      href: "news",
      items: [
        {
          title: "Industry News",
          titleCn: "行业动态",
          href: "news#industry-news",
          description: "Industry News",
          items: [],
        },
        {
          title: "Company News",
          titleCn: "公司新闻",
          href: "news#company-news",
          description: "Company News",
          items: [],
        },
        {
          title: "Knowledge Base",
          titleCn: "农业科普",
          href: "news#knowledge-base",
          description: "Knowledge Base",
          items: [],
        },
      ],
    },
    {
      title: "Product Categories",
      titleCn: "公司产品",
      items: [
        {
          title: "Raw Material Products",
          titleCn: "原料产品",
          href: "raw-materials",
          description: "Raw Material Products",
          items: [],
        },
        {
          title: "Reagent Products",
          titleCn: "制剂产品",
          href: "reagent-products",
          description: "Reagent Products",
          items: [
            {
              title: "Triple-Axe Series",
              titleCn: "三板斧系列",
              href: "triple-axe-series",
              description: "Triple-Axe Series Products",
              items: [],
            },
            {
              title: "AGRARIUS Series",
              titleCn: "AGRARIUS系列",
              href: "agrarius-series",
              description: "AGRARIUS Biotech Series",
              items: [],
            },
            {
              title: "Guanghua Bio Series",
              titleCn: "光华生物系列",
              href: "guanghua-bio-series",
              description: "Guanghua Biotech Series",
              items: [],
            },
          ],
        },
        {
          title: "Daily-Chemical Products",
          titleCn: "日化产品",
          href: "daily-chemical-products",
          description: "Daily-Chemical Products",
          items: [],
        },
      ],
    },
    {
      title:"Services",
      titleCn:"服务",
      items:[
        {
          title: "Service Introduction",
          titleCn: "服务介绍",
          href: "ecology-diversity",
          description: "Service Introduction",
          items: [],
        },
        {
          title: "Contact & Call-back Access",
          titleCn: "在线服务/咨询入口",
          href: "library",
          description: "Call-back & Direct Call Service Entry",
          items: [],
        },
      ]
    },
    {
      title: "Application Cases",
      titleCn: "应用案例",
      items: [
        {
          title: "All Cases",
          titleCn: "全部案例",
          href: "application-cases",
          description: "All Application Cases",
          items: [],
        },
      ],
    },
    {
      title: "Contact Us",
      titleCn: "联系我们",
      href: "contact",
      description: "Contact information, online service and map navigation",
      items: [
        {
          title: "Contact Information",
          titleCn: "联系方式",
          href: "contact#contact-info",
          description: "Phone numbers and email",
          items: [],
        },
        {
          title: "Online Service",
          titleCn: "在线客服",
          href: "contact#online-service",
          description: "Online customer service",
          items: [],
        },
        {
          title: "Map Navigation",
          titleCn: "地图导航",
          href: "contact#map-navigation",
          description: "Navigate to our office",
          items: [],
        },
      ],
    },
  ] satisfies MainNavItem[],
  footerNav: [
    {
      title: "Products",
      titleCn: "产品中心",
      href: "products",
      description: "Explore our product categories",
      descriptionCn: "查看我们的产品与系列",
    },
    {
      title: "Contact Us",
      titleCn: "联系我们",
      href: "contact",
      description: "Contact information, online service and map navigation",
      descriptionCn: "联系方式、在线客服与地图导航",
    },
    {
      title: "About Us",
      titleCn: "关于我们",
      href: "about",
      description: "Learn more about Guanghua Times",
      descriptionCn: "了解公司与团队",
    },
  ] satisfies FooterItem[],
};
