import type { FooterItem, MainNavItem } from "@/types";

export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "GuanghuaTimes Bio",
  nameCn: "光华时代生物",
  heroSlogan: "Welcome to Guanghua Times",
  heroSubSlogan: "Innovation-driven, quality creates the future; Technology empowers, service creates value!",
  heroSubSloganCn: "创新驱动 品质铸就未来； 技术赋能，服务创造价值！",
  description: "Leading agricultural technology innovation and ecological construction.",
  descriptionCn: "致力于农业科技创新，专注于土壤改良与生态农业建设。",
  url: "https://guanghuatimes.vercel.app", // 建议更新为您最新的预览链接
  ogImage: "https://guanghuatimes.vercel.app/opengraph-image.png",
  
  mainNav: [
    {
      title: "About",
      titleCn: "关于我们",
      items: [
        {
          title: "About",
          titleCn: "关于光华时代",
          href: "about",
          description: "Company profile and core values.",
          items: [],
        },
        {
          title: "R&D Team",
          titleCn: "研发团队",
          href: "about", // 暂时指向about页面的对应板块
          description: "Our professional R&D team.",
          items: [],
        },
        {
          title: "Corporate Culture",
          titleCn: "企业文化",
          href: "about",
          description: "Green, natural, sustainable development.",
          items: [],
        },
      ],
    },
    {
      title: "Products & Services",
      titleCn: "产品与服务",
      items: [
        {
          title: "Triple-Axe Series",
          titleCn: "三板斧系列",
          href: "products",
          description: "Core effective series.",
          items: [],
        },
        {
          title: "AGRARIUS Series",
          titleCn: "AGRARIUS系列",
          href: "products",
          description: "Professional biotech series.",
          items: [],
        },
        {
          title: "Guanghua Biotech",
          titleCn: "光华生物系列",
          href: "products",
          description: "Comparative effect exhibition.",
          items: [],
        },
        {
          title: "Cosmetics Series",
          titleCn: "日化系列",
          href: "products",
          description: "Daily chemical products.",
          items: [],
        },
        {
          title: "Raw Materials",
          titleCn: "原料系列",
          href: "products",
          description: "Industrial raw materials.",
          items: [],
        },
      ],
    },
    {
      title: "News",
      titleCn: "新闻活动",
      items: [
        {
          title: "Industry News",
          titleCn: "行业动态",
          href: "news",
          description: "Latest agricultural industry trends.",
          items: [],
        },
        {
          title: "Company News",
          titleCn: "公司新闻",
          href: "news",
          description: "Our latest updates and honors.",
          items: [],
        },
      ],
    },
    {
      title: "Support",
      titleCn: "联系我们",
      items: [
        {
          title: "Contact Info",
          titleCn: "联系方式",
          href: "contact",
          description: "Phone, email and address.",
          items: [],
        },
        {
          title: "Online Service",
          titleCn: "在线客服",
          href: "contact",
          description: "Direct online consultation.",
          items: [],
        },
        {
          title: "Feedback Form",
          titleCn: "留言表单",
          href: "contact",
          description: "Leave your message here.",
          items: [],
        },
        {
          title: "Map Navigation",
          titleCn: "地图导航",
          href: "contact",
          description: "Locate our office.",
          items: [],
        },
      ],
    },
  ] satisfies MainNavItem[],
  
  footerNav: [
    {
      title: "Core Values",
      titleCn: "经营理念",
      href: "about",
      description: "Green, Natural, Sustainable Development",
      descriptionCn: "绿色、天然、可持续发展 —— 通过生物技术赋能现代农业。",
    },
    {
      title: "Services",
      titleCn: "技术服务",
      href: "products",
      description: "Planting guidance and soil improvement.",
      descriptionCn: "提供专业的种植技术指导与全方位的土壤改良服务。",
    },
    {
      title: "Contact Us",
      titleCn: "联系我们",
      href: "contact",
      description: "Reach out to us for more information.",
      descriptionCn: "如有任何疑问或合作意向，欢迎随时联系我们。",
    },
  ] satisfies FooterItem[],
};
