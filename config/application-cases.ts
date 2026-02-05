export const applicationCasesConfig = {
  title: "Application Cases",
  titleCn: "应用案例",
  description: "Explore our successful application cases",
  descriptionCn: "探索我们的成功应用案例",
  imgSrc: "/banner2.jpg",
};

export interface ApplicationCase {
  id: string;
  title: string;
  titleCn: string;
  description: string;
  descriptionCn: string;
  image: string;
  wechatUrl?: string;
}

export const applicationCases: ApplicationCase[] = [
  {
    id: "case-1",
    title: "Mango Orchard Pest Control",
    titleCn: "芒果园病虫害防治案例",
    description: "Successful pest control solution for mango orchards in Hainan Province",
    descriptionCn: "海南省芒果园病虫害综合防治成功案例",
    image: "/banner1.jpg",
    wechatUrl: "",
  },
  {
    id: "case-2",
    title: "Rice Field Growth Enhancement",
    titleCn: "水稻增产增效案例",
    description: "Improved rice yield with our bio-fertilizer solutions",
    descriptionCn: "使用光华生物肥料实现水稻增产增效",
    image: "/banner1.jpg",
    wechatUrl: "",
  },
  {
    id: "case-3",
    title: "Vegetable Greenhouse Application",
    titleCn: "蔬菜大棚应用案例",
    description: "Comprehensive solution for greenhouse vegetable cultivation",
    descriptionCn: "蔬菜大棚综合种植解决方案",
    image: "/banner1.jpg",
    wechatUrl: "",
  },
  {
    id: "case-4",
    title: "Tropical Fruit Protection",
    titleCn: "热带水果保护案例",
    description: "Effective protection for tropical fruits against diseases",
    descriptionCn: "热带水果病害防护有效方案",
    image: "/banner1.jpg",
    wechatUrl: "",
  },
  {
    id: "case-5",
    title: "Soil Improvement Project",
    titleCn: "土壤改良项目案例",
    description: "Soil restoration and improvement using bio-technology",
    descriptionCn: "生物技术土壤修复与改良项目",
    image: "/banner1.jpg",
    wechatUrl: "",
  },
];
