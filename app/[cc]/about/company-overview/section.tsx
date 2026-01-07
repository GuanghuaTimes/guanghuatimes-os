import Link from "next/link";

export default function CompanyOverviewSection({ cc = "cn" }: { cc?: "cn" | "en" }) {
  return (
    <div id="company-overview">
      <h2 className="text-2xl font-bold mb-3">
        {cc === "cn" ? "公司概况" : "Company Overview"}
      </h2>
      <div className="space-y-4">
        <div>
          <h3 className="text-xl font-semibold">
            {cc === "cn" ? "简介" : "Brief Introduction"}
          </h3>
          <p className="text-gray-700 dark:text-gray-200">
            {cc === "cn"
              ? "测试内容：这里是公司简介的测试文本。后续可在代码中自行修改。"
              : "Placeholder content: This is a test paragraph for the company's brief introduction. You can modify it later in code."}
          </p>
        </div>
        <div>
          <h3 className="text-xl font-semibold">
            {cc === "cn" ? "定位" : "Positioning"}
          </h3>
          <p className="text-gray-700 dark:text-gray-200">
            {cc === "cn"
              ? "测试内容：公司战略定位与发展方向。"
              : "Placeholder content: Company strategic positioning and development direction."}
          </p>
        </div>
        <div>
          <h3 className="text-xl font-semibold">
            <Link href={`/${cc}/products`} className="hover:underline">
              {cc === "cn" ? "主营业务（点击跳转产品中心）" : "Core Business (Go to Products)"}
            </Link>
          </h3>
          <p className="text-gray-700 dark:text-gray-200">
            {cc === "cn"
              ? "测试内容：公司的主营业务版块与产品/服务介绍。"
              : "Placeholder content: Company's core business segments and product/service overview."}
          </p>
        </div>
      </div>
    </div>
  );
}
