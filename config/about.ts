export type AboutConfig = {
  titleCn: string;
  title: string;
  descriptionCn: string;
  description: string;
  imgSrc: string;
  navs: { href: string; titleCn: string; title: string; imgSrc: string }[];
  history: { year: string; content: string }[];
  sections: { title: string; titleEn: string; content: string }[];
};

export const aboutConfig: AboutConfig = {
  // 核心价值观与理念 [cite: 6]
  titleCn: '关于光华时代',
  title: 'About Guanghua Times',
  descriptionCn: '光华时代致力于农业科技创新，专注于土壤改良与生态农业建设。我们始终秉承“绿色、天然、可持续发展”的经营理念，通过生物技术赋能，为现代农业提供高效、环保的系统解决方案。',
  description: 'Guanghua Times is committed to agricultural technology innovation, focusing on soil improvement and ecological agriculture. We always adhere to the philosophy of "Green, Natural, and Sustainable Development".',
  
  // 建议稍后更新为公司大楼或基地实拍图 [cite: 5, 8]
  imgSrc: '/images/about-hero.jpg', 
  
  // 底部导航关联 [cite: 9, 10]
  navs: [
    { 
      href: '/products', 
      titleCn: '产品与服务', 
      title: 'Products & Services', 
      imgSrc: '/images/nav-products.jpg' 
    },
    { 
      href: '/news', 
      titleCn: '新闻活动', 
      title: 'News & Events', 
      imgSrc: '/images/nav-news.jpg' 
    }
  ],

  // 详细阐述公司发展历程 [cite: 21, 22]
  history: [
    {
      year: '发展历程',
      content: '详细阐述光华时代的各个发展阶段，记录从成立至今的重要事件、技术突破及里程碑式的成就。',
    }
  ],

  // 完善板块内容 [cite: 23, 24]
  sections: [
    {
      title: '研发团队',
      titleEn: 'R&D Team',
      content: '展示公司强大的科技支撑与专家团队实力，致力于生物技术与农业应用的深度融合。',
    },
    {
      title: '企业文化',
      titleEn: 'Corporate Culture',
      content: '以绿色农业为核心，倡导人与自然和谐共生，通过持续创新推动行业健康发展。',
    }
  ]
};
