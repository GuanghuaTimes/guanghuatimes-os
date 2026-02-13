import Image from "next/image";

export default function CollaborationProjectsSection({ cc = "cn" }: { cc?: "cn" | "en" }) {
  const universityLogoVersion = "20260213-2";
  return (
    <div id="collaboration-projects">
      <div>
        <h2 className="text-2xl font-bold mb-3">
          {cc === "cn" ? "合作院校" : "Cooperation Universities"}
        </h2>
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
          <div className="bg-white p-3">
            <div className="relative h-28 w-full">
              <Image
                src={`/text/合作院校/%E6%B5%B7%E5%8D%97%E5%A4%A7%E5%AD%A6.png?v=${universityLogoVersion}`}
                alt={cc === "cn" ? "海南大学" : "Hainan University"}
                fill
                sizes="(min-width: 640px) 25vw, 50vw"
                quality={70}
                className="object-contain"
              />
            </div>
          </div>

          <div className="bg-white p-3">
            <div className="relative h-28 w-full">
              <Image
                src={`/text/合作院校/湖北大学.png?v=${universityLogoVersion}`}
                alt={cc === "cn" ? "湖北大学" : "Hubei University"}
                fill
                sizes="(min-width: 640px) 25vw, 50vw"
                quality={70}
                className="object-contain"
              />
            </div>
          </div>

          <div className="bg-white p-3">
            <div className="relative h-28 w-full">
              <Image
                src={`/text/合作院校/华中农业大学.png?v=${universityLogoVersion}`}
                alt={cc === "cn" ? "华中农业大学" : "Huazhong Agricultural University"}
                fill
                sizes="(min-width: 640px) 25vw, 50vw"
                quality={70}
                className="object-contain"
              />
            </div>
          </div>

          <div className="bg-white p-3">
            <div className="relative h-28 w-full">
              <Image
                src={`/text/合作院校/武汉轻工大学.png?v=${universityLogoVersion}`}
                alt={cc === "cn" ? "武汉轻工大学" : "Wuhan Polytechnic University"}
                fill
                sizes="(min-width: 640px) 25vw, 50vw"
                quality={70}
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="mt-8">
        <h2 className="text-2xl font-bold mb-3">
          {cc === "cn" ? "合作企业" : "Cooperation Partners"}
        </h2>
        <div className="mx-auto w-full max-w-4xl">
          <Image
            src="/text/hz1.png"
            alt=""
            width={1600}
            height={900}
            className="h-auto w-full object-contain bg-white"
          />
        </div>
      </div>
    </div>
  );
}
