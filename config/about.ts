export type AboutConfig = {
  titleCn: string;
  title: string;
  descriptionCn: string;
  description: string;
  imgSrc: string;
  navs: { href: string; titleCn: string; title: string; imgSrc: string }[];
  // 补齐这两个最后缺失的定义声明
  history: { year: string; content: string }[];
  sections: { title: string; titleEn: string; content: string }[];
};

export const aboutConfig: AboutConfig = {
  titleCn: '关于光华时代',
  title: 'About Guanghua Times',
  descriptionCn: '光华时代致力于农业科技创新，专注于土壤改良与生态农业建设。我们始终秉承“绿色、天然、可持续发展”的经营理念，通过生物技术赋能，为现代农业提供高效、环保的系统解决方案。',
  description: 'Guanghua Times is committed to agricultural science and technology innovation, focusing on soil improvement and ecological agriculture. We provide efficient and environmentally friendly system solutions for modern agriculture.',
  imgSrc: '/images/about-hero.jpg',
  
  navs: [
    { 
      href: '/about', 
      titleCn: '关于我们', 
      title: 'About Us', 
      imgSrc: '/images/nav-about.jpg' 
    },
    { 
      href: '/activities', 
      titleCn: '最新动态', 
      title: 'Latest News', 
      imgSrc: '/images/nav-activities.jpg' 
    }
  ],

  history: [
    {
      year: '发展历程',
      content: '详细阐述公司的发展阶段，包括各个发展阶段的重要事件、里程碑式的成就等。',
    }
  ],

  sections: [
    {
      title: '研发团队',
      titleEn: 'R&D Team',
      content: '展示公司强大的科技支撑与专家团队实力。',
    },
    {
      title: '企业文化',
      titleEn: 'Corporate Culture',
      content: '以绿色农业为核心，倡导人与自然和谐共生的可持续发展之路。',
    }
  ]
};
