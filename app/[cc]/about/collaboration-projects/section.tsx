import Image from "next/image";

export default function CollaborationProjectsSection({ cc = "cn" }: { cc?: "cn" | "en" }) {
  return (
    <div id="collaboration-projects">
      <h2 className="text-2xl font-bold mb-3">
        {cc === "cn" ? "合作项目" : "Collaboration Projects"}
      </h2>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 dark:text-gray-200">
        <li>
          {cc === "cn"
            ? "测试内容：与高校/科研院所/企业的合作项目。"
            : "Placeholder: Projects with universities, institutes, and enterprises."}
        </li>
        <li>
          {cc === "cn"
            ? "测试内容：示范推广与落地应用案例。"
            : "Placeholder: Demonstration, promotion, and real-world applications."}
        </li>
      </ul>

      <div className="mt-8">
        <h3 className="text-xl font-semibold mb-3">
          {cc === "cn" ? "合作企业" : "Cooperation Partners"}
        </h3>
        <Image
          src="/text/hz1.png"
          alt=""
          width={1600}
          height={900}
          className="h-auto w-full max-w-4xl rounded-lg border object-contain bg-white"
        />
      </div>
    </div>
  );
}
