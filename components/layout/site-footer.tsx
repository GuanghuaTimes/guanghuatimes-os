import Image from "next/image";
import { CC } from "@/app/[cc]/page";

interface SiteFooterProps {
  lang: CC;
}

export function SiteFooter({ lang }: SiteFooterProps) {
  const socialLinks = [
    {
      name: "kuaishou",
      label: "快手",
      icon: (
        <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current">
          <rect x="2" y="2" width="20" height="20" rx="4" fill="currentColor"/>
          <circle cx="7" cy="7" r="2" fill="#235283"/>
          <rect x="11" y="5" width="8" height="4" rx="1" fill="#235283"/>
          <rect x="5" y="12" width="14" height="8" rx="1" fill="#235283"/>
          <path d="M9 15v3l4-1.5L9 15z" fill="currentColor"/>
        </svg>
      ),
      qrCode: "/qr-kuaishou.jpg",
    },
    {
      name: "douyin",
      label: "抖音",
      icon: (
        <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current">
          <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/>
        </svg>
      ),
      qrCode: "/qr-douyin.png",
    },
    {
      name: "wechat",
      label: "公众号",
      icon: (
        <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current">
          <path d="M8.691 2.188C3.891 2.188 0 5.476 0 9.53c0 2.212 1.17 4.203 3.002 5.55a.59.59 0 01.213.665l-.39 1.48c-.019.07-.048.141-.048.213 0 .163.13.295.29.295a.326.326 0 00.167-.054l1.903-1.114a.864.864 0 01.717-.098 10.16 10.16 0 002.837.403c.276 0 .543-.027.811-.05-.857-2.578.157-4.972 1.932-6.446 1.703-1.415 3.882-1.98 5.853-1.838-.576-3.583-4.196-6.348-8.596-6.348zM5.785 5.991c.642 0 1.162.529 1.162 1.18a1.17 1.17 0 01-1.162 1.178A1.17 1.17 0 014.623 7.17c0-.651.52-1.18 1.162-1.18zm5.813 0c.642 0 1.162.529 1.162 1.18a1.17 1.17 0 01-1.162 1.178 1.17 1.17 0 01-1.162-1.178c0-.651.52-1.18 1.162-1.18zm5.34 2.867c-1.797-.052-3.746.512-5.28 1.786-1.72 1.428-2.687 3.72-1.78 6.22.942 2.453 3.666 4.229 6.884 4.229.826 0 1.622-.12 2.361-.336a.722.722 0 01.598.082l1.584.926a.272.272 0 00.14.047c.134 0 .24-.111.24-.247 0-.06-.023-.12-.038-.177l-.327-1.233a.582.582 0 01-.023-.156.49.49 0 01.201-.398C23.024 18.48 24 16.82 24 14.98c0-3.21-2.931-5.837-6.656-6.088V8.89c-.135-.01-.27-.027-.407-.03zm-2.53 3.274c.535 0 .969.44.969.982a.976.976 0 01-.969.983.976.976 0 01-.969-.983c0-.542.434-.982.97-.982zm4.844 0c.535 0 .969.44.969.982a.976.976 0 01-.969.983.976.976 0 01-.969-.983c0-.542.434-.982.969-.982z"/>
        </svg>
      ),
      qrCode: "/qr-wechat.png",
    },
    {
      name: "shipinhao",
      label: "视频号",
      icon: (
        <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current">
          <circle cx="12" cy="12" r="11" fill="currentColor"/>
          <path d="M6 8.5C6 8.5 8 15 9.5 15C11 15 12 9 12 9C12 9 13 15 14.5 15C16 15 18 8.5 18 8.5" stroke="#235283" strokeWidth="2.5" strokeLinecap="round" fill="none"/>
          <circle cx="17" cy="9" r="1.5" fill="#235283"/>
        </svg>
      ),
      qrCode: "/qr-shipinhao.jpg",
    },
  ];

  return (
    <footer className="w-full bg-[#235283] text-gray-300 py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
          <div className="space-y-2 text-sm">
            <p>
              <span className="text-gray-400">电&nbsp;&nbsp;话</span>
              <span className="ml-4 text-white">400-067-6027</span>
            </p>
            <p>
              <span className="text-gray-400">邮&nbsp;&nbsp;箱</span>
              <span className="ml-4 text-white">pga@ghpga.com</span>
            </p>
            <p>
              <span className="text-gray-400">地&nbsp;&nbsp;址</span>
              <span className="ml-4 text-white">海南省海口市龙华区龙昆北路景瑞大厦A座621</span>
            </p>
          </div>
          
          <div className="flex items-center gap-4">
            {socialLinks.map((social) => (
              <div
                key={social.name}
                className="relative group"
              >
                <div className="w-10 h-10 rounded-full bg-gray-700 hover:bg-gray-600 flex items-center justify-center cursor-pointer transition-colors text-white">
                  {social.icon}
                </div>
                
                <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-3 z-[100] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 max-sm:fixed max-sm:bottom-auto max-sm:top-1/2 max-sm:left-1/2 max-sm:-translate-y-1/2">
                  <div className="bg-white rounded-lg shadow-xl w-[140px] h-[160px] sm:w-[160px] sm:h-[180px] px-[5px] pt-[5px] pb-[5px] overflow-hidden flex flex-col">
                    <div className="relative w-[130px] h-[130px] sm:w-[150px] sm:h-[150px] mx-auto">
                      <Image
                        src={social.qrCode}
                        alt={social.label}
                        fill
                        className="object-contain"
                      />
                    </div>
                    <div className="text-center text-gray-700 text-xs mt-auto">
                      官方{social.label}
                    </div>
                  </div>
                  <div className="absolute top-full left-1/2 -translate-x-1/2 -mt-1 max-sm:hidden">
                    <div className="w-3 h-3 bg-white rotate-45 shadow-xl" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
