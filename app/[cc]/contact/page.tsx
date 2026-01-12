"use client";

import * as React from "react";
import { useEffect, useState } from "react";
import { Shell } from "@/components/shells/shell";
import { PageHeader, PageHeaderDescription } from "@/components/page-header";
import { Button } from "@/components/ui/button";
import { MapPin, Navigation, ExternalLink, Phone, MessageCircle, Mail } from "lucide-react";
import { CC } from "../page";

interface PageProps {
  params: {
    cc?: CC;
  };
}

type Location = {
  id: string;
  name: string;
  nameCn: string;
  address: string;
  addressEn?: string;
  phone: string;
  latitude?: number;
  longitude?: number;
  region?: string;
};

const locations: Location[] = [
  {
    id: "wuhan",
    name: "Wuhan Guanghua Times Biotech Co., Ltd.",
    nameCn: "武汉光华时代生物科技有限公司",
    address: "武汉市东西湖区径河办事处通源南路6号2号楼1层",
    addressEn: "1st Floor, Building 2, No. 6 Tongyuan South Road, Jinghe, Dongxihu District, Wuhan",
    phone: "400-067-6027",
    region: "武汉",
  },
  {
    id: "hainan",
    name: "Guanghua Times (Hainan) Biotech Co., Ltd.",
    nameCn: "光华时代(海南)生物科技有限公司",
    address: "海南省海口市龙华区龙昆北路景瑞大厦A座6楼621",
    addressEn: "Room 621, 6th Floor, Block A, Jingrui Building, Longkun North Road, Longhua District, Haikou City, Hainan Province",
    phone: "178-8998-1376",
    region: "海口",
    latitude: 20.0444,
    longitude: 110.3298,
  },
];

const WECHAT_CUSTOMER_SERVICE_URL = "https://work.weixin.qq.com/kfid/kfc6e4e0780d6cec748";

export default function ContactPage({ params = { cc: "cn" } }: PageProps) {
  const [userLocation, setUserLocation] = useState<{ lat: number; lng: number } | null>(null);
  const [locationError, setLocationError] = useState<string>("");
  const [selectedLocation, setSelectedLocation] = useState<Location>(locations[0]);
  const isCn = params.cc === "cn";

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setUserLocation({
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          });
        },
        (error) => {
          console.error("Error getting location:", error);
          setLocationError(
            isCn
              ? "无法获取您的位置，请检查浏览器权限设置"
              : "Unable to get your location, please check browser permissions"
          );
        }
      );
    }
  }, [isCn]);

  const openAmap = () => {
    let url = "";
    if (selectedLocation.latitude && selectedLocation.longitude) {
      url = `https://uri.amap.com/navigation?to=${selectedLocation.longitude},${selectedLocation.latitude},${encodeURIComponent(isCn ? selectedLocation.nameCn : selectedLocation.name)}&mode=car&policy=1&src=myapp&coordinate=gaode&callnative=1`;
    } else {
      url = `https://www.amap.com/search?query=${encodeURIComponent(selectedLocation.address)}`;
    }
    window.open(url, "_blank");
  };

  const openBaiduMap = () => {
    let url = "";
    if (selectedLocation.latitude && selectedLocation.longitude) {
      url = `https://api.map.baidu.com/direction?destination=name:${encodeURIComponent(isCn ? selectedLocation.nameCn : selectedLocation.name)}|latlng:${selectedLocation.latitude},${selectedLocation.longitude}&mode=driving&region=${encodeURIComponent(selectedLocation.region || "海口")}&output=html&src=webapp.baidu.openAPIdemo`;
    } else {
      url = `https://api.map.baidu.com/direction?destination=name:${encodeURIComponent(selectedLocation.address)}&mode=driving&region=${encodeURIComponent(selectedLocation.region || "全国")}&output=html&src=webapp.baidu.openAPIdemo`;
    }
    window.open(url, "_blank");
  };

  const openTencentMap = () => {
    let url = `https://apis.map.qq.com/uri/v1/routeplan?type=drive&to=${encodeURIComponent(selectedLocation.address)}&policy=0&referer=myapp`;
    if (selectedLocation.latitude && selectedLocation.longitude) {
      url += `&tocoord=${selectedLocation.latitude},${selectedLocation.longitude}`;
    }
    window.open(url, "_blank");
  };

  const openGoogleMaps = () => {
    let url = "";
    if (selectedLocation.latitude && selectedLocation.longitude) {
      url = `https://www.google.com/maps/dir/?api=1&destination=${selectedLocation.latitude},${selectedLocation.longitude}&travelmode=driving`;
    } else {
      url = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(selectedLocation.address)}&travelmode=driving`;
    }
    window.open(url, "_blank");
  };

  return (
    <Shell className="md:pb-10 min-h-[calc(100vh-156px)]">
      <PageHeader>
        <div className="text-2xl md:text-4xl font-bold text-gray-900 dark:text-white">
          {isCn ? "联系我们" : "Contact Us"}
        </div>
        <PageHeaderDescription className="text-lg text-gray-600 dark:text-gray-300">
          {isCn ? "我们期待与您取得联系" : "We look forward to hearing from you"}
        </PageHeaderDescription>
      </PageHeader>

      {/* 上方区域：联系方式 + 在线客服（上下布局） */}
      <div className="mt-8 flex flex-col gap-6">
        {/* 上方：联系方式 - 三个小卡片横向布局 */}
        <div id="contact-info" className="scroll-mt-20">
          <h3 className="text-xl font-bold mb-6 flex items-center gap-2 text-gray-900 dark:text-white">
            <Phone className="w-5 h-5 text-green-600" />
            {isCn ? "联系方式" : "Contact Information"}
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {locations.map((loc) => (
              <div key={loc.id} className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-5 border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-shadow">
                <div className="w-10 h-10 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center mb-3">
                  <Phone className="w-5 h-5 text-green-600" />
                </div>
                <h4 className="font-semibold text-gray-900 dark:text-white mb-1">
                  {isCn ? loc.nameCn : loc.name}
                </h4>
                <p className="text-sm text-gray-500 dark:text-gray-400 mb-3">
                  {isCn ? loc.address : loc.addressEn}
                </p>
                <a 
                  href={`tel:${loc.phone.replace(/-/g, "")}`}
                  className="inline-flex items-center gap-2 text-lg font-bold text-green-600 hover:text-green-700 transition-colors"
                >
                  {loc.phone}
                </a>
              </div>
            ))}
            {/* 企业邮箱卡片 */}
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-5 border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-shadow">
              <div className="w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center mb-3">
                <Mail className="w-5 h-5 text-blue-600" />
              </div>
              <h4 className="font-semibold text-gray-900 dark:text-white mb-1">
                {isCn ? "企业邮箱" : "Business Email"}
              </h4>
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-3">
                {isCn ? "商务合作咨询" : "Business inquiries"}
              </p>
              <a 
                href="mailto:pga@ghpga.com"
                className="inline-flex items-center gap-2 text-lg font-bold text-blue-600 hover:text-blue-700 transition-colors"
              >
                pga@ghpga.com
              </a>
            </div>
          </div>
        </div>

        {/* 下方：在线客服 */}
        <div id="online-service" className="bg-gradient-to-br from-green-500 to-green-600 rounded-xl shadow-lg p-6 text-white scroll-mt-20">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <h3 className="text-xl font-bold mb-2 flex items-center gap-2">
                <MessageCircle className="w-5 h-5" />
                {isCn ? "在线客服" : "Online Customer Service"}
              </h3>
              <p className="text-green-100">
                {isCn 
                  ? "点击按钮，通过企业微信与我们的客服团队实时沟通" 
                  : "Click the button to chat with our customer service team via WeChat Work"}
              </p>
              <p className="mt-2 text-sm text-green-100">
                {isCn ? "工作时间：周一至周五 9:00-18:30" : "Working hours: Mon-Fri 9:00-18:30"}
              </p>
            </div>
            <a
              href={WECHAT_CUSTOMER_SERVICE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-white text-green-600 px-6 py-4 rounded-xl font-bold text-lg hover:bg-green-50 transition-colors shadow-md shrink-0"
            >
              <MessageCircle className="w-6 h-6" />
              {isCn ? "立即咨询" : "Start Chat"}
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>

      {/* 下方区域：地图导航 */}
      <div id="map-navigation" className="mt-10 space-y-6 scroll-mt-20">
        <h3 className="text-xl font-bold text-gray-900 dark:text-white flex items-center gap-2">
          <MapPin className="w-5 h-5 text-blue-600" />
          {isCn ? "地图导航" : "Map Navigation"}
        </h3>

        {/* 地址选择 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {locations.map((loc) => (
            <div
              key={loc.id}
              role="button"
              tabIndex={0}
              onClick={() => setSelectedLocation(loc)}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") setSelectedLocation(loc);
              }}
              className={[
                "bg-white dark:bg-gray-800 rounded-lg shadow-md p-5 border-2 cursor-pointer",
                "transition-all hover:shadow-lg",
                selectedLocation.id === loc.id
                  ? "border-blue-500 ring-2 ring-blue-200 dark:ring-blue-800"
                  : "border-gray-200 dark:border-gray-700",
              ].join(" ")}
            >
              <div className="flex items-start gap-3">
                <div className={`p-2 rounded-full ${selectedLocation.id === loc.id ? "bg-blue-100" : "bg-gray-100"}`}>
                  <MapPin className={`w-5 h-5 ${selectedLocation.id === loc.id ? "text-blue-600" : "text-gray-500"}`} />
                </div>
                <div className="flex-1">
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-1">
                    {isCn ? loc.nameCn : loc.name}
                  </h4>
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    {isCn ? loc.address : loc.addressEn}
                  </p>
                  {selectedLocation.id === loc.id && (
                    <span className="inline-block mt-2 text-xs bg-blue-100 text-blue-600 px-2 py-1 rounded-full">
                      {isCn ? "已选择" : "Selected"}
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* 位置状态 */}
        {locationError && (
          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-3 text-sm">
            <p className="text-yellow-800">{locationError}</p>
          </div>
        )}
        {userLocation && (
          <div className="bg-green-50 border border-green-200 rounded-lg p-3 text-sm">
            <p className="text-green-800">{isCn ? "已获取您的位置" : "Your location detected"}</p>
          </div>
        )}

        {/* 导航按钮 */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          <Button
            onClick={openAmap}
            className="h-auto py-4 flex flex-col items-center gap-2 bg-blue-600 hover:bg-blue-700"
          >
            <Navigation className="w-5 h-5" />
            <span className="font-semibold">{isCn ? "高德地图" : "Amap"}</span>
          </Button>

          <Button
            onClick={openBaiduMap}
            className="h-auto py-4 flex flex-col items-center gap-2 bg-red-600 hover:bg-red-700"
          >
            <Navigation className="w-5 h-5" />
            <span className="font-semibold">{isCn ? "百度地图" : "Baidu"}</span>
          </Button>

          <Button
            onClick={openTencentMap}
            className="h-auto py-4 flex flex-col items-center gap-2 bg-green-600 hover:bg-green-700"
          >
            <Navigation className="w-5 h-5" />
            <span className="font-semibold">{isCn ? "腾讯地图" : "Tencent"}</span>
          </Button>

          <Button
            onClick={openGoogleMaps}
            className="h-auto py-4 flex flex-col items-center gap-2 bg-purple-600 hover:bg-purple-700"
          >
            <Navigation className="w-5 h-5" />
            <span className="font-semibold">Google</span>
          </Button>
        </div>

        {/* 使用说明 */}
        <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-5 border border-gray-200 dark:border-gray-700">
          <h4 className="font-semibold mb-2 text-gray-900 dark:text-white">
            {isCn ? "使用说明" : "Instructions"}
          </h4>
          <ul className="space-y-1 text-sm text-gray-600 dark:text-gray-400">
            <li>• {isCn ? "选择目的地后，点击地图按钮启动导航" : "Select destination, then click map button to start navigation"}</li>
            <li>• {isCn ? "如已安装地图APP，将自动打开进行导航" : "If map app is installed, it will open automatically"}</li>
            <li>• {isCn ? "建议允许浏览器获取位置以获得准确导航" : "Allow location access for accurate navigation"}</li>
          </ul>
        </div>
      </div>
    </Shell>
  );
}
