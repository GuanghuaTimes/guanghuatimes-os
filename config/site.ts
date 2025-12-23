import type { FooterItem, MainNavItem } from "@/types";
import {title} from "process";

export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "GuanghuaTimes Bio",
  nameCn: "光华时代生物",
  heroSlogan: "Welcome to Guanghua Times",
  heroSubSlogan: "Innovation-driven, quality creates the future; Technology empowers, service creates value!",
  heroSubSloganCn: "创新驱动 品质铸就未来； 技术赋能，服务创造价值！",
  description: "The best place to visit",
  descriptionCn: "终身学习的生态社区",
  url: "https://alan-webpage.vercel.app",
  ogImage: "https://alan-webpage.vercel.app/opengraph-image.png",
  mainNav: [
    {
      title: "About",
      titleCn: "关于我们",
      items: [
        {
          title: "About",
          titleCn: "关于光华时代",
          href: "about",
          description: "About Guanghua Times",
          items: [],
        },
        {
          title: "R&D Team",
          titleCn: "研发团队",
          href: "history",
          description: "R&D Team",
          items: [],
        },
        {
          title: "Corporate culture",
          titleCn: "企业文化",
          href: "travel-information",
          description: "Corporate culture",
          items: [],
        },
        // {
        //   title: "Policy Plan",
        //   titleCn: "政策计划",
        //   href: "policy-plan",
        //   description: "老市 Policy Plan.",
        //   items: [],
        // },
        // {
        //   title: "Contact",
        //   titleCn: "联系我们",
        //   href: "contact",
        //   description: "Contact 老市.",
        //   items: [],
        // },
        // {
        //   title: "Appointment",
        //   titleCn: "预约参观",
        //   href: "appointment",
        //   description: "Visitor Appointment",
        //   items: [],
        // },
      ],
    },
    {
      title: "News",
      titleCn: "新闻活动",
      items: [
        {
          title: "Industry News",
          titleCn: "行业动态",
          href: "events",
          description: "Industry News",
          items: [],
        },
        {
          title: "Company News",
          titleCn: "公司新闻",
          href: "announcements",
          description: "Company News",
          items: [],
        },
        {
          title: "Farming Knowledge Base",
          titleCn: "农业科普",
          href: "articles",
          description: "Farming Knowledge Base",
          items: [],
        },
      ],
    },
    {
      title: "Product Categories",
      titleCn: "公司产品",
      items: [
        {
          title: "Three Core Solutions",
          titleCn: "原料产品",
          href: "articles",
          description: "Three Core Solutions",
          items: [],
        },
        {
          title: "AGRARIUS Biotech Series",
          titleCn: "AGRARIUS系列",
          href: "agrarius-series",
          description: "AGRARIUS Biotech Series",
          items: [],
        },
        {
          title: "Guanghua Biotech Series",
          titleCn: "光华生物系列",
          href: "guanghua-bio-series",
          description: "Guanghua Biotech Series",
          items: [],
        },
        {
          title: "Daily Chemical Series",
          titleCn: "日化系列",
          href: "daily-chemical-series",
          description: "Daily Chemical Series",
          items: [],
        },
        // {
        //   title: "Elder Care",
        //   titleCn: "老人关怀",
        //   href: "elder-care",
        //   description: "Elder Care",
        //   items: [],
        // },
        // {
        //   title: "Kid Care",
        //   titleCn: "儿童关怀",
        //   href: "kid-care",
        //   description: "Kid Care",
        //   items: [],
        // },
        // {
        //   title: "Mental Care",
        //   titleCn: "心理关怀",
        //   href: "mental-care",
        //   description: "Mental Care",
        //   items: [],
        // },
        // {
        //   title: "Laoshi Salt Conservation Center",
        //   titleCn: "老市盐保育中心",
        //   href: "salt-conservation-center",
        //   description: "Laoshi Salt Conservation Center",
        //   items: [],
        // },
      ],
    },
    {
      title:"服务",
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
      title: "Nature School",
      titleCn: "应用案例",
      items: [
        {
          title: "Introduction to Nature School",
          titleCn: "自然学校介绍",
          href: "nature-school",
          description: "Introduction to Nature School",
          items: [],
        },
        {
          title: "Activities & Courses",
          titleCn: "全部活動",
          href: "activities-at-nature-school",
          description: "Activities & Courses",
          items: [],
        },
        // {
        //   title: "Calendar",
        //   titleCn: "活動日誌",
        //   href: "calendar-at-nature-schol",
        //   description: "Calendar",
        //   items: [],
        // },
      ],
    },
    {
      title: "Support Us",
      titleCn: "联系我们",
      items: [
        {
          title: "Donate",
          titleCn: "联系方式",
          href: "donate",
          description: "Donate",
          items: [],
        },
        {
          title: "Volunteer",
          titleCn: "在线客服",
          href: "volunteer",
          description: "Volunteer",
          items: [],
        },
        {
          title: "Volunteer",
          titleCn: "留言表单",
          href: "volunteer",
          description: "Volunteer",
          items: [],
        },
        {
          title: "Map Navigation",
          titleCn: "地图导航",
          href: "map-navigation",
          description: "Navigate to our office",
          items: [],
        },
      ],
    },
  ] satisfies MainNavItem[],
  footerNav: [
    {
      title: "Volunteers Wanted",
      titleCn: "志愿者招募",
      href: "",
      description: "Join us to build the community!",
      descriptionCn: "定义你的青春, 突破自己的框架；来与我们一起社区营造吧！",
    },
    {
      title: "Donation",
      titleCn: "捐款支持",
      href: "about",
      description: "Support us with your donation!",
      descriptionCn:
        "爱惜乡土, 积少成多, 卷起衣袖赞助我们；改变, 让你我都看得见。",
    },
    {
      title: "Visiting Appointment",
      titleCn: "参访预约",
      href: "blog",
      description: "Make an appointment to visit and explore Laoshi Village",
      descriptionCn: "预约参观, 探索老市村, 发掘这片土地上你从未接触过的感动",
    },
  ] satisfies FooterItem[],
};
