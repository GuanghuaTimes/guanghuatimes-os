import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function ReagentProductsPage({ params }: { params: { cc: string } }) {
  const isCn = params.cc === "cn";

  const reagentCategories = [
    {
      id: "sanbanfu",
      titleCn: "三板斧系列",
      titleEn: "Triple-Axe Series",
      imgSrc: "/product-images/sanbanfu.jpg",
      description: isCn 
        ? "核心效能系列，专注于提升作物产量与品质。采用先进的生物技术配方，为作物提供全方位营养支持。" 
        : "Core efficiency series focused on improving crop yield and quality with advanced biotech formulations.",
      features: isCn 
        ? ["高效营养配方", "快速吸收", "显著增产", "改善品质"]
        : ["High-efficiency nutrition", "Fast absorption", "Significant yield increase", "Quality improvement"]
    },
    {
      id: "agrarius",
      titleCn: "AGRARIUS系列",
      titleEn: "AGRARIUS Series",
      imgSrc: "/product-images/agrarius-main.jpg",
      description: isCn
        ? "国际领先的有机水溶肥料，全水快溶，调理土壤。采用进口原料，确保产品质量和效果。"
        : "Internationally leading organic water-soluble fertilizer with fast dissolution and soil conditioning properties.",
      features: isCn
        ? ["全水快溶", "有机认证", "土壤调理", "进口原料"]
        : ["Fully water-soluble", "Organic certified", "Soil conditioning", "Imported materials"]
    },
    {
      id: "biotech",
      titleCn: "光华生物系列",
      titleEn: "Guanghua Biotech Series",
      imgSrc: "/product-images/biotech-contrast.jpg",
      description: isCn
        ? "生物技术深度赋能，提供显著的作物对比改良效果。结合微生物技术，激发作物自身潜力。"
        : "Deeply empowered by biotechnology, providing significant crop improvement effects with microbial technology.",
      features: isCn
        ? ["生物技术", "微生物菌剂", "对比显著", "绿色环保"]
        : ["Biotechnology", "Microbial agents", "Significant results", "Eco-friendly"]
    }
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-gray-950">
      {/* 头部 Banner */}
      <section className="bg-gradient-to-br from-green-50 to-blue-50 dark:from-green-900/20 dark:to-blue-900/20 py-20 px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            {isCn ? "制剂产品系列" : "Reagent Product Series"}
          </h1>
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-8">
            {isCn 
              ? "专业生物制剂产品，为现代农业提供全方位解决方案" 
              : "Professional biological reagent products providing comprehensive solutions for modern agriculture"}
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <span className="bg-white dark:bg-gray-800 px-4 py-2 rounded-full text-sm font-medium text-gray-700 dark:text-gray-300 shadow-sm">
              {isCn ? "高效配方" : "High Efficiency"}
            </span>
            <span className="bg-white dark:bg-gray-800 px-4 py-2 rounded-full text-sm font-medium text-gray-700 dark:text-gray-300 shadow-sm">
              {isCn ? "科技创新" : "Innovation"}
            </span>
            <span className="bg-white dark:bg-gray-800 px-4 py-2 rounded-full text-sm font-medium text-gray-700 dark:text-gray-300 shadow-sm">
              {isCn ? "绿色环保" : "Eco-friendly"}
            </span>
          </div>
        </div>
      </section>

      {/* 产品系列展示 */}
      <section className="max-w-7xl mx-auto py-16 px-6">
        <div className="space-y-16">
          {reagentCategories.map((product, index) => (
            <div 
              key={product.id} 
              className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-8 items-center`}
            >
              {/* 产品图片 */}
              <div className="w-full lg:w-1/2">
                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-xl group">
                  <Image 
                    src={product.imgSrc} 
                    alt={product.titleCn} 
                    fill 
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>

              {/* 产品信息 */}
              <div className="w-full lg:w-1/2 space-y-6">
                <div>
                  <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                    {isCn ? product.titleCn : product.titleEn}
                  </h2>
                  <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                    {product.description}
                  </p>
                </div>

                {/* 产品特点 */}
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                    {isCn ? "产品特点" : "Key Features"}
                  </h3>
                  <div className="grid grid-cols-2 gap-3">
                    {product.features.map((feature, i) => (
                      <div 
                        key={i} 
                        className="flex items-center gap-2 bg-green-50 dark:bg-green-900/20 px-4 py-2 rounded-lg"
                      >
                        <svg 
                          className="w-5 h-5 text-green-600 dark:text-green-400 flex-shrink-0" 
                          fill="none" 
                          stroke="currentColor" 
                          viewBox="0 0 24 24"
                        >
                          <path 
                            strokeLinecap="round" 
                            strokeLinejoin="round" 
                            strokeWidth={2} 
                            d="M5 13l4 4L19 7" 
                          />
                        </svg>
                        <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* 了解更多按钮 */}
                <div>
                  <Link href={`/${params.cc}/${product.id === 'sanbanfu' ? 'triple-axe-series' : product.id === 'agrarius' ? 'agrarius-series' : 'guanghua-bio-series'}`}>
                    <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white">
                      {isCn ? "了解更多详情" : "Learn More"}
                      <svg 
                        className="w-4 h-4 ml-2" 
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                      >
                        <path 
                          strokeLinecap="round" 
                          strokeLinejoin="round" 
                          strokeWidth={2} 
                          d="M9 5l7 7-7 7" 
                        />
                      </svg>
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 咨询入口 */}
      <section className="bg-gray-50 dark:bg-gray-900 py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
            {isCn ? "需要专业的产品咨询？" : "Need Professional Consultation?"}
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
            {isCn 
              ? "我们的专业团队随时为您提供技术支持和产品建议" 
              : "Our professional team is ready to provide technical support and product recommendations"}
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href={`/${params.cc}/volunteer`}>
              <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white text-lg px-8">
                {isCn ? "立即咨询" : "Contact Us"}
              </Button>
            </Link>
            <Link href={`/${params.cc}/products`}>
              <Button size="lg" variant="outline" className="text-lg px-8">
                {isCn ? "查看全部产品" : "View All Products"}
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
