import { AspectRatio } from "@/components/ui/aspect-ratio";
import { CC } from "../page";
import Image from "next/image";
import { cn } from "@/lib/utils";

// 核心修改1：重构公司介绍的contentCn为结构化数据（支持加粗+换行）
const config = {
  imgSrc: "/hero_temple.jpeg",
  article1: "",
  articleCn1: "",
  items: [
    {
      title: "Who are we?",
      titleCn: "公司介绍",
      imgSrc: ["/history/青年龙舟赛合影.jpg"],
      // 中文结构化数据：区分标签（加粗）和值（普通）
      contentCn: [
        { label: "公司名称：", value: "海南光华", isBold: true },
        { label: "成立时间：", value: "1999.01.01", isBold: true },
        { label: "地理位置：", value: "天涯海角", isBold: true },
      ],
      // 英文也同步重构为结构化数据（保持格式统一）
      content: [
        { label: "Company Name：", value: "Hainan Guanghua", isBold: true },
        { label: "Founded：", value: "1999.01.01", isBold: true },
        { label: "Location：", value: "Tianya Haijiao", isBold: true },
      ],
    },
    {
      title: "What do we have?",
      titleCn: "发展历程",
      imgSrc: ["/history/我们拥有什么.png"],
      // 非公司信息类内容保持字符串格式（无需加粗）
      contentCn:
          "感恩, 老市的先民们给我们留下的上百棵酸豆树, 也感恩大自然给予我们淡咸水交汇珠碧江, 让老市长大的孩子们都有游泳及抓鱼, 摸虾蟹的乐趣, 妇女们年年都有挖的“luen”（术名绿紫蛤）, 妈妈们做的luen饭也是我们老市村自创的一道特色饮食。天后庙, 康王庙的香火从古保留至今, 每年端午的龙舟赛是全村上下中老青男女参与度最高的节日, 十月十庙会, 妇女的调声跳舞, 每户人家的红白事, 大家在广场一起帮忙做村席, 最具有文化的当属”赠字“这个为逝者准备的仪式, 村里”先生“齐聚一堂与逝者家属悼念缅怀, 运用书法和诗词来中华文化的基石-汉字。还有我们传统生计---做盐。2022年我们依靠政府的生态修复项目将消失了26年的盐田重新恢复。这些容易看得见的地方传统, 还有很多那看不见的, 存在很多村民的脑子里和手艺里, 民间故事, 生活经验与智慧, 到自然里用什么草可以治病, 用什么可以作为食物, 如何做酒饼, 怎么酿酒, 怎么做腐竹……",
      content:
          "Gratitude, the ancestors of Laoshi left us hundreds of acacia trees, and also gratitude to nature for giving us the Zhu Bi River where fresh and salt water meet, allowing the children of Laoshi to swim, catch fish, and catch shrimp and crabs. The fun, the ... ",
    },
    {
      title: "Our mother river Zhu Bi River and the village tree acacia tree",
      titleCn: "公司理念",
      imgSrc: [
        "/history/我们的母亲河珠碧江与村树酸豆树.png",
        "/history/tree.jpeg",
        "/history/boat.jpeg",
      ],
      contentCn:
          "位于老市北面一条入海口的珠碧江, 淡咸水交汇的河口生境, 有各种各样的螃蟹, 以招潮蟹数量居多, 丰富多样的贝类, 鱼虾等等。虽然经历了一段疯狂的高密度, 高污染的南美白对虾养殖浪潮, 给它造成了严重的污染, 一度丰富的底栖生物, 螃蟹, 贝类几乎消失殆尽。而那些养殖户, 包括老市居民, 破产, 负债, 跑路……鱼塘也陷入大量闲置, 渐渐荒废破败的状态。对虾养殖这几年的停滞, 现在珠碧江河口一带又恢复了自然的生机, 招潮蟹回来了, 赶海的妇女也能挖到贝类了, 水鸟越来越多了。113棵酸豆树, 大多都是上百年的古树, 绿葱葱的将老市居民区包围着, 也有融入在老市民居的前街后院中, 给居民提供了日常的阴凉, 还有一年又一年的酸豆果实。那是一代代海头人童年一想到就流口水的“零食”。",
      content:
          "The Zhu Bi River, located at the northern end of Laoshi, is a river mouth habitat where fresh and salt water meet. There are various crabs, with a large number of fiddler crabs, a variety of shellfish, fish and shrimp, and so on. Although it has experienced a period of crazy high-density, high-pollution South American white shrimp farming wave, which has caused serious pollution to it, the once rich benthic organisms, crabs, shellfish, etc. have almost disappeared. Those aquaculture farmers, including Laoshi residents, went bankrupt, owed debts, and ran away... The fish ponds also fell into a state of a large number of idle, gradually abandoned and dilapidated. The stagnation of shrimp farming in recent years has now restored the natural vitality of the Zhu Bi River estuary, and the fiddler crabs have returned",
    },
    {
      title: "Our public space - The People's Library",
      titleCn: "我们的公共空间-平民书馆",
      imgSrc: ["/history/我们的公共空间-平民书馆.png"],
      contentCn:
          "平民书馆始创于2017年01月, 位于海南省儋州市海头镇老市村, 处于海河交汇处, 面对着美丽的珠碧江。书馆共2层, 有院落, 客厅, 书房, 民宿, 观景平台, 有两棵茂密古老的酸豆树在书馆建筑里长出来。创始人是谭喜云, 当地的村长。出于冲破壁垒, 建立连接的动机, 出于对社会教育与文化的关注, 谭喜云返乡驻扎, 创立书馆, 服务地方社区。平民书馆积极融入当地社区, 积极参与乡村社区里的公共事务, 包括教育, 环境, 文化, 生计等。它类似一家“医馆”, 可以“医”人, “医”社会, “医”自然环境。",
      content:
          "The People's Library was founded in January 2017 and is located in Laoshi Village, Haitou Town, Danzhou City, Hainan Province, at the confluence of the river and the sea, facing the beautiful Zhu Bi River. The library has 2 floors, with a courtyard, living room, study, homestay, and viewing platform. There are two dense ancient acacia trees growing in the library building. The founder is Tan Xiyun, the local village head. Out of the motivation to break through barriers and establish connections, out of concern for social education and culture, Tan Xiyun returned to his hometown and established the library to serve the local community. The People's Library actively integrates into the local community and actively participates in public affairs in rural communities, including education, environment, culture, livelihood, etc. It is similar to a 'clinic' that can 'treat' people, 'treat' society, and 'treat' the natural environment.",
    },
  ],
};

// 核心修改2：定义TS类型（避免类型报错）
interface ContentItem {
  label: string;
  value: string;
  isBold: boolean;
}

interface ConfigItem {
  title: string;
  titleCn: string;
  imgSrc: string[];
  contentCn: string | ContentItem[]; // 支持字符串/结构化数组
  content: string | ContentItem[];
}

interface Config {
  imgSrc: string;
  article1: string;
  articleCn1: string;
  items: ConfigItem[];
}

const typedConfig = config as Config;

interface PageProps {
  params: {
    cc: string;
  };
}

export async function generateStaticParams(): Promise<PageProps["params"][]> {
  return [{ cc: "cn" }, { cc: "en" }];
}

// 核心修改3：封装渲染文本的组件（支持结构化/字符串内容）
const RenderContent = ({ content, isCn }: { content: string | ContentItem[]; isCn: boolean }) => {
  // 如果是结构化数组（公司介绍），渲染加粗+换行的样式
  if (Array.isArray(content)) {
    return (
        <div className="space-y-2">
          {content.map((item, idx) => (
              <div key={idx} className="flex flex-col">
            <span className={cn(item.isBold ? "font-bold" : "font-normal")}>
              {item.label}
            </span>
                <span className="ml-2">{item.value}</span>
              </div>
          ))}
        </div>
    );
  }
  // 如果是普通字符串（其他内容），直接渲染
  return <div className="leading-relaxed">{content}</div>;
};

export default function Page({
                               params = { cc: "cn" },
                             }: {
  params: {
    cc?: CC;
  };
}) {
  return (
      <div className="sm:container px-4 sm:px-0 space-y-2 sm:space-y-12 mb-12">
        {/* desktop */}
        <div className="w-full max-w-[1400px] relative hidden sm:block">
          <AspectRatio ratio={16 / 3}>
            <Image
                src={typedConfig.imgSrc}
                alt=""
                fill
                className="object-cover"
                priority
            />
          </AspectRatio>
        </div>

        {/* mobile */}
        <div className="w-full max-w-[1400px] relative sm:hidden">
          <AspectRatio ratio={2 / 1}>
            <Image
                src={typedConfig.imgSrc}
                alt=""
                fill
                className="object-cover"
                priority
            />
          </AspectRatio>
        </div>

        {typedConfig.items.map((m, i) => (
            <div className="w-full relative sm:grid grid-cols-4 gap-6" key={i}>
              <h1 className="col-span-4 text-3xl font-semibold">
                {params.cc === "cn" ? m.titleCn : m.title}
              </h1>

              {/* 核心修改4：使用封装的组件渲染内容 */}
              <div className="col-span-2 text-gray-800">
                <RenderContent
                    content={params.cc === "cn" ? m.contentCn : m.content}
                    isCn={params.cc === "cn"}
                />
              </div>

              <div className="col-span-2 relative grid grid-cols-2 ">
                {m.imgSrc.map((src, idx) => (
                    <div
                        className={cn("relative w-full min-h-[300px]", {
                          "col-span-2": m.imgSrc.length - 1 === idx,
                        })}
                        key={idx}
                    >
                      <Image src={src} alt="" fill className="object-cover w-full" />
                    </div>
                ))}
              </div>
            </div>
        ))}
      </div>
  );
}