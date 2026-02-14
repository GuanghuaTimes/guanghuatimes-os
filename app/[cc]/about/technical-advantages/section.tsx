import Image from "next/image";

export default function TechnicalAdvantagesSection({ cc = "cn" }: { cc?: "cn" | "en" }) {
  const experts = [
    {
      imgSrc: "/text/专家/zj1.png",
      orgTitleCn: "华中农业大学｜湖北大学 二级教授 博导",
      nameCn: "陈守文",
      bulletsCn: [
        "主要研究芽孢杆菌代谢工程、发酵工程、蛋白高效表达、代谢组学、PGA 及其产品应用开发。",
        "国家百千万人才工程、国家有突出贡献青年专家、国务院政府特殊津贴获得者、教育部新世纪优秀人才。",
        "国家科学技术进步奖二等奖、湖北省科学技术发明一等奖获得者。",
      ],
    },
    {
      imgSrc: "/text/专家/zj2.png",
      orgTitleCn: "湖北华中农业大学｜教授 博导",
      nameCn: "姜玲",
      bulletsCn: [
        "主要研究 PGA 在农业上的应用。",
        "国家教育委员会科学进步一等奖、国家教育委员会科学技术进步一等奖、农业部优秀创新团队“中华农业科技奖”、农业部科学技术进步三等奖。",
        "2006 年至今先后主持国家自然科学基金面上项目 5 项、主持柑桔黄龙病脱毒和病原分子检测的多项横向课题。",
      ],
    },
    {
      imgSrc: "/text/专家/zj3.png",
      orgTitleCn: "湖北华中农业大学｜副教授 硕导",
      nameCn: "魏雪团",
      bulletsCn: [
        "主要研究碱胁迫增强 PGA 酸“从头合成”的关键效应基因研究、代谢工程改造强化地衣芽孢杆菌合成 PGA、微生物群落结构和多样性分析研究等。",
        "华农硕彦计划青年英才 A 岗获得者。",
        "生物化工青年学者工作委员会委员、国家自然科学基金通讯评审专家，获授权发明专利 10 余项。",
      ],
    },
    {
      imgSrc: "/text/专家/zj4.png",
      orgTitleCn: "海南大学热带农林学院｜三亚南繁研究院 硕导",
      nameCn: "冯顺",
      bulletsCn: [
        "海南大学热带农林学院、三亚南繁研究院硕士研究生导师。",
        "主要研究园艺植物病害生物防治、抗性基因功能、农产品采后生理与贮藏保鲜。",
        "主持多项自然科学基金，例如“二烯丙基三硫（DATS）对番茄灰霉病的生物防治研究”、“油梨根腐病的生防菌分离筛选及鉴定研究”、“水杨酸抑制马铃薯晚疫病发生的分子机理研究”。",
      ],
    },
    {
      imgSrc: "/text/专家/zj5.png",
      orgTitleCn: "海南大学｜讲师 硕导",
      nameCn: "单义翔",
      bulletsCn: [
        "主要从事植物光合生理与作物建模研究，聚焦光谱调控、作物水分状态及其对光合效率的影响。",
        "参与欧盟 PV4Plants 项目，系统研究不同红蓝光比例下番茄的光合动力学、气孔调节与果实品质形成机制。",
        "熟悉 LI-COR、热红外成像、光谱分析与遥感监测等技术，能够结合实验观测与功能–结构植物模型（FSPM）开展多尺度作物响应模拟。",
      ],
    },
    {
      imgSrc: "/text/专家/zj6.png",
      orgTitleCn: "河南省微生物学会｜理事",
      nameCn: "杨森",
      bulletsCn: [
        "河南省微生物学会理事，河南省有机固废生物转化工程技术中心主任，河南省乡村有机固废低碳利用产业技术创新联盟理事长，黑水虻生物技术首席专家，授权发明专利软著等 20 余项。",
        "黑水虻“虫菌互作”高效生物转化餐厨垃圾和畜禽养殖循环应用技术；黑水虻资源微生物的筛选与工业发酵与应用。",
        "聚焦黑水虻功能性共生微生物研究，主要用于土壤微生物生态修复和土传病害的生物防治；实践以黑水虻“虫菌互作”技术为核心的生态循环农业新模式。",
      ],
    },
    {
      imgSrc: "/text/专家/zj7.png",
      orgTitleCn: "西里西亚理工大学｜研究员",
      nameCn: "Tomasz Skalski",
      bulletsCn: [
        "美国威斯康星大学教授授予 VIPI 称号；著有 68 份科学出版物和 78 份会议报告。",
        "生物学、微生物学、生物统计学专家；协同进化促进伤口愈合过程专家。",
        "Teraz Polska 基金会颁发的“非常重要的波兰创新者”（2015）奖获得者。",
        "“用蚕桑幼虫活培养物敷料治疗难愈合伤口的应用”的项目获得了商业化，并获得了一种敷料实用新型专利，以及在波兰市场上实施医用敷料生产。",
      ],
    },
  ];

  return (
    <div id="technical-advantages" className="space-y-6">
      <h2 className="text-2xl font-bold">
        {cc === "cn" ? "技术优势" : "Technical Advantages"}
      </h2>

      <div>
        <div className="flex items-center justify-between gap-4">
          <h3 className="text-xl font-semibold">
            {cc === "cn" ? "专家资源" : "Expert Resources"}
          </h3>
        </div>

        <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-4">
          {experts.map((e, idx) => (
            <div key={idx} className="rounded-xl border bg-card/50 p-4 shadow-[6px_6px_14px_rgba(0,0,0,0.12)] dark:shadow-[6px_6px_14px_rgba(0,0,0,0.35)]">
              <div className="flex flex-col items-center text-center">
                <div className="relative h-20 w-20 overflow-hidden rounded-full border bg-muted">
                  <Image src={e.imgSrc} alt="" fill sizes="80px" className="object-cover" />
                </div>

                <div className="mt-3 w-full">
                  <div className="text-xl font-semibold text-[#13609B]">
                    {cc === "cn" ? e.nameCn : ""}
                  </div>
                  <div className="mt-1 text-[#13609B] font-semibold leading-relaxed">
                    {cc === "cn" ? e.orgTitleCn : ""}
                  </div>
                </div>
              </div>

              <ul className="mt-3 list-disc pl-5 space-y-1 text-gray-700 dark:text-gray-200 leading-relaxed">
                {(cc === "cn" ? e.bulletsCn : []).map((b, i) => (
                  <li key={i}>{b}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
