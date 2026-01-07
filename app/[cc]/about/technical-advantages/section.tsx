export default function TechnicalAdvantagesSection({ cc = "cn" }: { cc?: "cn" | "en" }) {
  return (
    <div id="technical-advantages">
      <h2 className="text-2xl font-bold mb-3">
        {cc === "cn" ? "技术优势" : "Technical Advantages"}
      </h2>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 dark:text-gray-200">
        <li>
          {cc === "cn"
            ? "测试内容：核心技术与研发能力。"
            : "Placeholder: Core technologies and R&D capabilities."}
        </li>
        <li>
          {cc === "cn"
            ? "测试内容：生产工艺与质量管理。"
            : "Placeholder: Manufacturing processes and quality management."}
        </li>
        <li>
          {cc === "cn"
            ? "测试内容：产学研合作与技术转化。"
            : "Placeholder: Industry–academia collaboration and tech transfer."}
        </li>
      </ul>
    </div>
  );
}
