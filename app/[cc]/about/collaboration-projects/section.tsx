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
          {cc === "cn" ? "合作院校" : "Cooperation Universities"}
        </h3>
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
          <div className="rounded-md border bg-white p-3">
            <div className="relative h-28 w-full">
              <Image
                src="/text/合作院校/海南大学.png"
                alt={cc === "cn" ? "海南大学" : "Hainan University"}
                fill
                sizes="(min-width: 640px) 25vw, 50vw"
                quality={70}
                className="object-contain"
              />
            </div>
            <div className="mt-2 text-center text-sm font-medium">
              {cc === "cn" ? "海南大学" : "Hainan University"}
            </div>
          </div>

          <div className="rounded-md border bg-white p-3">
            <div className="relative h-28 w-full">
              <Image
                src="/text/合作院校/华中农业大学.png"
                alt={cc === "cn" ? "华中农业大学" : "Huazhong Agricultural University"}
                fill
                sizes="(min-width: 640px) 25vw, 50vw"
                quality={70}
                className="object-contain"
              />
            </div>
            <div className="mt-2 text-center text-sm font-medium">
              {cc === "cn" ? "华中农业大学" : "Huazhong Agricultural University"}
            </div>
          </div>

          <div className="rounded-md border bg-white p-3">
            <div className="relative h-28 w-full">
              <Image
                src="/text/合作院校/湖北轻工业大学.png"
                alt={cc === "cn" ? "湖北轻工业大学" : "Hubei University of Technology"}
                fill
                sizes="(min-width: 640px) 25vw, 50vw"
                quality={70}
                className="object-contain"
              />
            </div>
            <div className="mt-2 text-center text-sm font-medium">
              {cc === "cn" ? "湖北轻工业大学" : "Hubei University of Technology"}
            </div>
          </div>

          <div className="rounded-md border bg-white p-3">
            <div className="relative h-28 w-full">
              <Image
                src="/text/合作院校/湖北大学.png"
                alt={cc === "cn" ? "湖北大学" : "Hubei University"}
                fill
                sizes="(min-width: 640px) 25vw, 50vw"
                quality={70}
                className="object-contain"
              />
            </div>
            <div className="mt-2 text-center text-sm font-medium">
              {cc === "cn" ? "湖北大学" : "Hubei University"}
            </div>
          </div>
        </div>
      </div>

      <div className="mt-8">
        <h3 className="text-xl font-semibold mb-3">
          {cc === "cn" ? "合作企业" : "Cooperation Partners"}
        </h3>
        <Image
          src="/text/hz1.png"
          alt=""
          width={1600}
          height={900}
          className="h-auto w-full max-w-none object-contain bg-white"
        />
      </div>
    </div>
  );
}
