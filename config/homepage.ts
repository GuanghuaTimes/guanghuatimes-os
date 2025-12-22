export const homepageConfig = {
  // 首页大图轮播：根据文档展示核心产品系列
  carouselItems: [
    {
      imgSrc: '/product-images/sanbanfu-hero.jpg', // 建议后续上传三板斧系列大图
      title: 'Triple-Axe Series',
      titleCn: '三板斧系列',
      description: "Core effective bio-solutions for modern agriculture.",
      descriptionCn: '核心效能系列：生物技术赋能，助力作物高产质优。',
      href: '/products'
    },
    {
      imgSrc: '/product-images/（AGRARIUS）小粒低聚型20kg袋装370X750X80mm（效果图）20250324.jpg',
      title: 'AGRARIUS Series',
      titleCn: 'AGRARIUS 系列',
      description: "Innovation-driven organic water-soluble fertilizer.",
      descriptionCn: '小粒低聚型有机水溶肥料：营养全面，全水快溶，调理土壤。',
      href: '/products'
    },
    {
      imgSrc: '/product-images/（AGRARIUS）生物蛋白肽20kg（效果图）20250324.png',
      title: 'Biotech Protein Peptide',
      titleCn: '生物蛋白肽系列',
      description: "Enhance root growth and soil fertility with polyglutamic acid.",
      descriptionCn: '富含聚谷氨酸、有机质，强力促根，显著增强土壤肥力。',
      href: '/products'
    }
  ],

  // 首页快速导航：对齐文档要求的五大分类与服务
  navs: [
    {
      imgSrc: "/images/nav-about.jpg",
      title: "About Us",
      titleCn: "公司简介",
      href: "/about",
    },
    {
      imgSrc: "/images/nav-products.jpg",
      title: "Product Categories",
      titleCn: "产品分类",
      href: "/products",
    },
    {
      imgSrc: "/images/nav-services.jpg",
      title: "Technical Services",
      titleCn: "服务介绍",
      href: "/products", // 建议后期指向服务专门的板块
    },
    {
      imgSrc: "/images/nav-news.jpg",
      title: "Company News",
      titleCn: "公司动态",
      href: "/news",
    },
  ],
};
