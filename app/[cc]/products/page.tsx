import { productsConfig } from "@/config/products";
import Image from "next/image";
import Link from "next/link";

const categoryLinks: Record<string, string> = {
  sanbanfu: "triple-axe-series",
  agrarius: "agrarius-series",
  biotech: "guanghua-bio-series",
  "daily-chemical": "daily-chemical-series",
  "raw-materials": "articles",
};

export default function ProductsPage({ params }: { params: { cc: string } }) {
  const isCn = params.cc === "cn";

  return (
    <div className="min-h-screen bg-white">
      {/* 1. 头部 Banner (对应架构：产品与服务总览) */}
      <section className="bg-slate-50 py-16 px-6 text-center">
        <h1 className="text-4xl font-bold text-slate-900 mb-4">
          {isCn ? productsConfig.titleCn : productsConfig.titleEn}
        </h1>
        <p className="text-lg text-slate-600 max-w-3xl mx-auto">
          {isCn ? productsConfig.descriptionCn : productsConfig.descriptionEn}
        </p>
      </section>

      {/* 2. 产品分类板块 (对应架构：三板斧、AGRARIUS、光华生物、日化、原料) [cite: 1, 15] */}
      <section className="max-w-7xl mx-auto py-16 px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {productsConfig.categories.map((item) => (
            <Link key={item.id} href={`/${params.cc}/${categoryLinks[item.id] || 'products'}`}>
              <div className="group border rounded-2xl overflow-hidden hover:shadow-xl transition-all cursor-pointer">
                <div className="aspect-[4/3] relative bg-slate-100">
                  <Image 
                    src={item.imgSrc} 
                    alt={item.titleCn} 
                    fill 
                    className="object-cover group-hover:scale-105 transition-transform"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{isCn ? item.titleCn : item.titleEn}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed">{item.description}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* 3. 服务介绍板块 (对应架构：种植技术指导、土壤改良服务) [cite: 1, 17] */}
      <section className="bg-green-50 py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">{isCn ? "专业农业服务" : "Professional Services"}</h2>
          <div className="grid md:grid-cols-2 gap-10">
            {productsConfig.services.map((service, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl shadow-sm">
                <h3 className="text-2xl font-bold text-green-700 mb-4">{isCn ? service.titleCn : service.titleEn}</h3>
                <p className="text-slate-600 mb-6">{isCn ? service.contentCn : service.contentEn}</p>
                <div className="flex flex-wrap gap-2">
                  {service.process.map((step, i) => (
                    <span key={i} className="bg-green-100 text-green-800 text-xs px-3 py-1 rounded-full">
                      {i + 1}. {step}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. 咨询入口 (对应架构：在线服务/咨询入口) [cite: 1, 19] */}
      <section className="max-w-5xl mx-auto py-20 px-6 text-center">
        <div className="bg-slate-900 text-white rounded-3xl p-12">
          <h2 className="text-3xl font-bold mb-6">
            {isCn ? productsConfig.consultation.titleCn : productsConfig.consultation.titleEn}
          </h2>
          <a 
            href={isCn ? "/cn/contact" : "/en/contact"}
            className="inline-block bg-green-500 hover:bg-green-600 text-white px-10 py-4 rounded-full font-bold transition-colors"
          >
            {isCn ? productsConfig.consultation.buttonText : "Get in Touch"}
          </a>
        </div>
      </section>
    </div>
  );
}
