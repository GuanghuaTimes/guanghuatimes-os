import Link from "next/link";

export default function CompanyOverviewSection({ cc = "cn" }: { cc?: "cn" | "en" }) {
  return (
    <div id="company-overview">
      <div className="space-y-6">
        <div>
          <h3 className="text-xl font-semibold mb-2">
            {cc === "cn" ? "成立起源" : "Establishment Origin"}
          </h3>
          <p className="text-gray-700 dark:text-gray-200 leading-relaxed">
            {cc === "cn"
              ? "武汉光华时代生物科技有限公司由国际领先的微生物专家团队与光华集团于2013年共同发起设立，承载近20年的技术探索与市场实践。"
              : "Wuhan Guanghua Times Biotechnology Co., Ltd. was jointly established in 2013 by an internationally leading team of microbiology experts and Guanghua Group, carrying nearly 20 years of technical exploration and market practice."}
          </p>
        </div>
        <div>
          <h3 className="text-xl font-semibold mb-2">
            {cc === "cn" ? "公司定位" : "Company Positioning"}
          </h3>
          <p className="text-gray-700 dark:text-gray-200 leading-relaxed">
            {cc === "cn"
              ? "专注于微生物领域及生物工程技术的研发，是拥有完全自主知识产权、具备全套完整的聚谷氨酸产品生产链，专业从事聚谷氨酸原料及其特种肥料、生产、销售及服务的高新企业。"
              : "Focusing on research and development in the field of microbiology and bioengineering technology, we are a high-tech enterprise with complete independent intellectual property rights and a complete polyglutamic acid product production chain, specializing in polyglutamic acid raw materials and special fertilizers, production, sales and services."}
          </p>
        </div>
        <div>
          <h3 className="text-xl font-semibold mb-2">
            <Link href={`/${cc}/products`} className="hover:underline text-primary">
              {cc === "cn" ? "主营业务" : "Core Business"}
            </Link>
          </h3>
          {cc === "cn" ? (
            <>
              <p className="text-gray-700 dark:text-gray-200 leading-relaxed">
                公司主营PGA、AOS原料及特肥制剂，具备年产能原料6000吨，制剂10万吨，致力于成为世界一流的微生物发酵企业，为全球绿色农业提供增效应用解决方案。
              </p>
              <ul className="mt-3 space-y-2 text-gray-700 dark:text-gray-200 leading-relaxed">
                <li>原料分子量、纯度、含量定制化服务；增效复配包定制化服务。</li>
                <li>
                  光华时代<sup>®</sup>目前除承接OEM订单外，还可根据客户需求进行ODM，制定制剂定制化加工方案。
                </li>
                <li>原料/制剂产品应用效果对比试验服务。</li>
                <li>作物基础营养方案定制化服务。</li>
                <li>作物“植保+营养”全程增产提质技术开发服务。</li>
              </ul>
            </>
          ) : (
            <p className="text-gray-700 dark:text-gray-200 leading-relaxed">
              The company mainly produces PGA and AOS raw materials and special fertilizer formulations, with an annual production capacity of 6,000 tons of raw materials and 100,000 tons of formulations. We are committed to becoming a world-class microbial fermentation enterprise and providing efficiency-enhancing application solutions for global green agriculture.
            </p>
          )}
        </div>
        <div>
          <h3 className="text-xl font-semibold mb-4">
            {cc === "cn" ? "发展历程" : "Development History"}
          </h3>
          <div className="space-y-3 text-gray-700 dark:text-gray-200">
            {cc === "cn" ? (
              <>
                <div className="flex gap-3">
                  <span className="font-semibold text-primary min-w-[60px]">2001</span>
                  <span>华中农业大学陈守文教授领衔的PGA项目组正式成立</span>
                </div>
                <div className="flex gap-3">
                  <span className="font-semibold text-primary min-w-[60px]">2006</span>
                  <span>中烟电视台农业频道报道华中农业大学PGA项目科研成果</span>
                </div>
                <div className="flex gap-3">
                  <span className="font-semibold text-primary min-w-[60px]">2007</span>
                  <span>PGA项目由朱英国院士领衔的专家委员会鉴定验收</span>
                </div>
                <div className="flex gap-3">
                  <span className="font-semibold text-primary min-w-[60px]">2010</span>
                  <span>荣获中国烟草系统科学技术二等奖</span>
                </div>
                <div className="flex gap-3">
                  <span className="font-semibold text-primary min-w-[60px]">2013</span>
                  <span>武汉光华时代生物科技有限公司正式注册成立</span>
                </div>
                <div className="flex gap-3">
                  <span className="font-semibold text-primary min-w-[60px]">2014</span>
                  <span>华中农大PGA项目荣获湖北省科学技术发明一等奖</span>
                </div>
                <div className="flex gap-3">
                  <span className="font-semibold text-primary min-w-[60px]">2015</span>
                  <span>光华生物PGA年产万吨生产基地正式投产</span>
                </div>
                <div className="flex gap-3">
                  <span className="font-semibold text-primary min-w-[60px]">2020</span>
                  <span>武汉光华时代生物科技有限公司荣获国家高新技术企业</span>
                </div>
                <div className="flex gap-3">
                  <span className="font-semibold text-primary min-w-[60px]">2024</span>
                  <span>湖大细胞工厂高产PGA项目荣获湖北省科学技术发明一等奖，同年成立光华时代海南分公司并组建应用研究中心</span>
                </div>
              </>
            ) : (
              <>
                <div className="flex gap-3">
                  <span className="font-semibold text-primary min-w-[60px]">2001</span>
                  <span>PGA project team led by Professor Chen Shouwen from Huazhong Agricultural University officially established</span>
                </div>
                <div className="flex gap-3">
                  <span className="font-semibold text-primary min-w-[60px]">2006</span>
                  <span>CCTV Agriculture Channel reported on the PGA project research achievements of Huazhong Agricultural University</span>
                </div>
                <div className="flex gap-3">
                  <span className="font-semibold text-primary min-w-[60px]">2007</span>
                  <span>PGA project evaluated and accepted by expert committee led by Academician Zhu Yingguo</span>
                </div>
                <div className="flex gap-3">
                  <span className="font-semibold text-primary min-w-[60px]">2010</span>
                  <span>Won Second Prize of Science and Technology in China Tobacco System</span>
                </div>
                <div className="flex gap-3">
                  <span className="font-semibold text-primary min-w-[60px]">2013</span>
                  <span>Wuhan Guanghua Times Biotechnology Co., Ltd. officially registered and established</span>
                </div>
                <div className="flex gap-3">
                  <span className="font-semibold text-primary min-w-[60px]">2014</span>
                  <span>Huazhong Agricultural University PGA project won First Prize of Hubei Province Science and Technology Invention</span>
                </div>
                <div className="flex gap-3">
                  <span className="font-semibold text-primary min-w-[60px]">2015</span>
                  <span>Guanghua Bio PGA production base with annual capacity of 10,000 tons officially put into operation</span>
                </div>
                <div className="flex gap-3">
                  <span className="font-semibold text-primary min-w-[60px]">2020</span>
                  <span>Wuhan Guanghua Times Biotechnology Co., Ltd. awarded National High-tech Enterprise</span>
                </div>
                <div className="flex gap-3">
                  <span className="font-semibold text-primary min-w-[60px]">2024</span>
                  <span>Hubei University Cell Factory High-yield PGA project won First Prize of Hubei Province Science and Technology Invention. In the same year, Guanghua Times Hainan Branch was established and Application Research Center was formed</span>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
