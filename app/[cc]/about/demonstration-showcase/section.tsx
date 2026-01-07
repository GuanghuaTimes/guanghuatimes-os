export default function DemonstrationShowcaseSection({ cc = "cn" }: { cc?: "cn" | "en" }) {
  return (
    <div id="demonstration-showcase">
      <h2 className="text-2xl font-bold mb-3">
        {cc === "cn" ? "示范展示" : "Demonstration & Showcase"}
      </h2>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 dark:text-gray-200">
        <li>
          {cc === "cn"
            ? "测试内容：示范基地/展示中心/典型案例。"
            : "Placeholder: Demonstration bases, exhibition centers, exemplary cases."}
        </li>
        <li>
          {cc === "cn"
            ? "测试内容：应用成效与客户反馈。"
            : "Placeholder: Outcomes and client feedback."}
        </li>
      </ul>
    </div>
  );
}
