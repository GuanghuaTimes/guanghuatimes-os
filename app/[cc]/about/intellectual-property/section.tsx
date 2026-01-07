export default function IntellectualPropertySection({ cc = "cn" }: { cc?: "cn" | "en" }) {
  return (
    <div id="intellectual-property">
      <h2 className="text-2xl font-bold mb-3">
        {cc === "cn" ? "知识产权" : "Intellectual Property"}
      </h2>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 dark:text-gray-200">
        <li>
          {cc === "cn"
            ? "测试内容：发明专利/软件著作权/商标等。"
            : "Placeholder: Invention patents, software copyrights, trademarks, etc."}
        </li>
        <li>
          {cc === "cn"
            ? "测试内容：专利布局与成果转化。"
            : "Placeholder: Patent portfolio and commercialization."}
        </li>
      </ul>
    </div>
  );
}
