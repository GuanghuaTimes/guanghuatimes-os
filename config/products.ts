export type ProductConfig = {
  titleCn: string;
  titleEn: string;
  descriptionCn: string;
  descriptionEn: string;
  // 产品分类
  categories: {
    id: string;
    titleCn: string;
    titleEn: string;
    imgSrc: string;
    description: string;
  }[];
  // 服务介绍
  services: {
    titleCn: string;
    titleEn: string;
    contentCn: string;
    contentEn: string;
    process: string[]; // 服务流程
  }[];
  // 咨询入口配置
  consultation: {
    titleCn: string;
    titleEn: string;
    buttonText: string;
    href: string;
  };
};

export const productsConfig: ProductConfig = {
  titleCn: "产品与服务",
  titleEn: "Products & Services",
  descriptionCn: "依托生物技术创新，提供覆盖农作物全生命周期的产品解决方案与专业技术支持。",
  descriptionEn: "Based on biotech innovation, providing product solutions and professional support for the full crop life cycle.",

  // 1. 产品分类：对应文档二.1部分
  categories: [
    {
      id: "sanbanfu",
      titleCn: "三板斧系列",
      titleEn: "Triple-Axe Series",
      imgSrc: "/product-images/sanbanfu.jpg",
      description: "核心效能系列，专注于提升作物产量与品质。"
    },
    {
      id: "agrarius",
      titleCn: "AGRARIUS系列",
      titleEn: "AGRARIUS Series",
      imgSrc: "/product-images/agrarius-main.jpg",
      description: "国际领先的有机水溶肥料，全水快溶，调理土壤。"
    },
    {
      id: "biotech",
      titleCn: "光华生物系列",
      titleEn: "Guanghua Biotech",
      imgSrc: "/product-images/biotech-contrast.jpg",
      description: "生物技术深度赋能，提供显著的作物对比改良效果。"
    },
    {
      id: "daily-chemical",
      titleCn: "日化系列",
      titleEn: "Daily Chemical",
      imgSrc: "/product-images/daily-chem-group.jpg",
      description: "提取天然精华，应用于健康日化产品。"
    },
    {
      id: "raw-materials",
      titleCn: "原料系列",
      titleEn: "Raw Materials",
      imgSrc: "/product-images/raw-materials.jpg",
      description: "供应高品质生物农业基础原料。"
    }
  ],

  // 2. 服务介绍：对应文档二.2部分
  services: [
    {
      titleCn: "种植技术指导",
      titleEn: "Planting Guidance",
      contentCn: "提供线上专家咨询与线下实地考察相结合的全程技术支持，针对不同作物制定个性化施肥方案。",
      contentEn: "Expert online consultation and offline field guidance for personalized fertilization plans.",
      process: ["预约登记", "现状评估", "方案制定", "实地指导", "效果跟踪"]
    },
    {
      titleCn: "土壤改良服务",
      titleEn: "Soil Improvement",
      contentCn: "针对土壤板结、酸化、重金属残留等问题，利用生物制剂进行深层调理，恢复土壤生命力。",
      contentEn: "Specialized soil remediation using bio-agents to restore soil health and fertility.",
      process: ["土样检测", "原因分析", "配方定制", "改良实施", "后期监测"]
    }
  ],

  // 3. 在线咨询入口：对应文档二.3部分
  consultation: {
    titleCn: "需要专业的农业技术支持？",
    titleEn: "Need Professional Support?",
    buttonText: "立即咨询",
    href: "/contact"
  }
};
