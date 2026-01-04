"use client";

import * as React from "react";
import { useEffect, useState } from "react";
import { Shell } from "@/components/shells/shell";
import { PageHeader, PageHeaderDescription } from "@/components/page-header";
import { Button } from "@/components/ui/button";
import { MapPin, Navigation, ExternalLink } from "lucide-react";
import { CC } from "../page";

interface PageProps {
  params: {
    cc?: CC;
  };
}

type Location = {
  id: string;
  name: string;
  address: string;
  addressEn?: string;
  latitude?: number;
  longitude?: number;
  region?: string;
};

const config = {
  title: "Map Navigation",
  titleCn: "地图导航",
  description: "Navigate to our office",
  descriptionCn: "导航到我们的办公室",
  address: "海南省海口市龙华区龙昆北路景瑞大厦A座6楼621",
  addressEn: "Room 621, 6th Floor, Block A, Jingrui Building, Longkun North Road, Longhua District, Haikou City, Hainan Province",
  // 目标地址坐标 (海口市龙华区龙昆北路景瑞大厦)
  latitude: 20.0444,
  longitude: 110.3298,
};

const locations: Location[] = [
  {
    id: "wuhan",
    name: "武汉光华集团",
    address: "武汉市东西湖区径河街道通源南路6号",
    region: "武汉",
  },
  {
    id: "hainan",
    name: "海南光华生物科技有限公司",
    address: config.address,
    addressEn: config.addressEn,
    latitude: config.latitude,
    longitude: config.longitude,
    region: "海口",
  },
];

export default function MapNavigationPage({ params = { cc: "cn" } }: PageProps) {
  const [userLocation, setUserLocation] = useState<{ lat: number; lng: number } | null>(null);
  const [locationError, setLocationError] = useState<string>("");
  const [selectedLocation, setSelectedLocation] = useState<Location>(locations[0]);

  useEffect(() => {
    // 获取用户当前位置
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
            params.cc === "cn"
              ? "无法获取您的位置，请检查浏览器权限设置"
              : "Unable to get your location, please check browser permissions"
          );
        }
      );
    }
  }, [params.cc]);

  // 打开高德地图导航
  const openAmap = () => {
    let url = "";
    if (selectedLocation.latitude && selectedLocation.longitude) {
      url = `https://uri.amap.com/navigation?to=${selectedLocation.longitude},${selectedLocation.latitude},${encodeURIComponent(selectedLocation.name || selectedLocation.address)}&mode=car&policy=1&src=myapp&coordinate=gaode&callnative=1`;
    } else {
      // 无坐标时，使用搜索页作为降级方案
      url = `https://www.amap.com/search?query=${encodeURIComponent(selectedLocation.address)}`;
    }
    window.open(url, "_blank");
  };

  // 打开百度地图导航
  const openBaiduMap = () => {
    let url = "";
    if (selectedLocation.latitude && selectedLocation.longitude) {
      url = `https://api.map.baidu.com/direction?destination=name:${encodeURIComponent(selectedLocation.name || selectedLocation.address)}|latlng:${selectedLocation.latitude},${selectedLocation.longitude}&mode=driving&region=${encodeURIComponent(selectedLocation.region || "海口")}&output=html&src=webapp.baidu.openAPIdemo`;
    } else {
      url = `https://api.map.baidu.com/direction?destination=name:${encodeURIComponent(selectedLocation.address)}&mode=driving&region=${encodeURIComponent(selectedLocation.region || "全国")}&output=html&src=webapp.baidu.openAPIdemo`;
    }
    window.open(url, "_blank");
  };

  // 打开腾讯地图导航
  const openTencentMap = () => {
    let url = `https://apis.map.qq.com/uri/v1/routeplan?type=drive&to=${encodeURIComponent(selectedLocation.address)}&policy=0&referer=myapp`;
    if (selectedLocation.latitude && selectedLocation.longitude) {
      url += `&tocoord=${selectedLocation.latitude},${selectedLocation.longitude}`;
    }
    window.open(url, "_blank");
  };

  // 打开Google地图导航
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
          {params.cc === "cn" ? config.titleCn : config.title}
        </div>
        <PageHeaderDescription className="text-lg text-gray-600 dark:text-gray-300">
          {params.cc === "cn" ? config.descriptionCn : config.description}
        </PageHeaderDescription>
      </PageHeader>

      <div className="mt-8 space-y-8">
        {/* 地址选择 */}
        <div className="space-y-4">
          <h3 className="text-xl font-semibold mb-2 dark:text-white">
            {params.cc === "cn" ? "选择地址" : "Choose Location"}
          </h3>
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
                  "bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 border",
                  "transition-colors",
                  selectedLocation.id === loc.id
                    ? "border-blue-500 dark:border-blue-500"
                    : "border-gray-200 dark:border-gray-700",
                ].join(" ")}
              >
                <div className="flex items-start gap-4">
                  <div className="bg-blue-100 p-3 rounded-full">
                    <MapPin className="w-6 h-6 text-blue-600" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold mb-2 dark:text-white">
                      {loc.name}
                    </h3>
                    <p className="text-gray-700 dark:text-gray-200 text-lg">
                      {loc.address}
                    </p>
                    {loc.latitude && loc.longitude ? (
                      <div className="mt-4 text-sm text-gray-500 dark:text-gray-400">
                        <p>
                          {params.cc === "cn" ? "坐标：" : "Coordinates: "}
                          {loc.latitude}, {loc.longitude}
                        </p>
                      </div>
                    ) : null}
                    {selectedLocation.id === loc.id ? (
                      <div className="mt-2 text-sm text-blue-600 dark:text-blue-400">
                        {params.cc === "cn" ? "当前选择" : "Selected"}
                      </div>
                    ) : null}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 用户位置信息 */}
        {locationError && (
          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
            <p className="text-yellow-800 dark:text-yellow-200">{locationError}</p>
          </div>
        )}

        {userLocation && (
          <div className="bg-green-50 border border-green-200 rounded-lg p-4">
            <p className="text-green-800 dark:text-green-200">
              {params.cc === "cn" ? "已获取您的位置" : "Your location detected"}
            </p>
          </div>
        )}

        {/* 导航选项 */}
        <div className="space-y-4">
          <h3 className="text-xl font-semibold mb-4 dark:text-white">
            {params.cc === "cn" ? "选择导航方式" : "Choose Navigation Method"}
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* 高德地图 */}
            <Button
              onClick={openAmap}
              className="h-auto py-6 flex flex-col items-center gap-2 bg-blue-600 hover:bg-blue-700"
              size="lg"
            >
              <Navigation className="w-6 h-6" />
              <span className="text-lg font-semibold">
                {params.cc === "cn" ? "高德地图导航" : "Amap Navigation"}
              </span>
              <ExternalLink className="w-4 h-4" />
            </Button>

            {/* 百度地图 */}
            <Button
              onClick={openBaiduMap}
              className="h-auto py-6 flex flex-col items-center gap-2 bg-red-600 hover:bg-red-700"
              size="lg"
            >
              <Navigation className="w-6 h-6" />
              <span className="text-lg font-semibold">
                {params.cc === "cn" ? "百度地图导航" : "Baidu Maps Navigation"}
              </span>
              <ExternalLink className="w-4 h-4" />
            </Button>

            {/* 腾讯地图 */}
            <Button
              onClick={openTencentMap}
              className="h-auto py-6 flex flex-col items-center gap-2 bg-green-600 hover:bg-green-700"
              size="lg"
            >
              <Navigation className="w-6 h-6" />
              <span className="text-lg font-semibold">
                {params.cc === "cn" ? "腾讯地图导航" : "Tencent Maps Navigation"}
              </span>
              <ExternalLink className="w-4 h-4" />
            </Button>

            {/* Google地图 */}
            <Button
              onClick={openGoogleMaps}
              className="h-auto py-6 flex flex-col items-center gap-2 bg-purple-600 hover:bg-purple-700"
              size="lg"
            >
              <Navigation className="w-6 h-6" />
              <span className="text-lg font-semibold">
                {params.cc === "cn" ? "Google地图导航" : "Google Maps Navigation"}
              </span>
              <ExternalLink className="w-4 h-4" />
            </Button>
          </div>
        </div>

        {/* 使用说明 */}
        <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 border border-gray-200 dark:border-gray-700">
          <h4 className="font-semibold mb-3 dark:text-white">
            {params.cc === "cn" ? "使用说明" : "Instructions"}
          </h4>
          <ul className="space-y-2 text-gray-700 dark:text-gray-300">
            <li>
              • {params.cc === "cn"
                ? "点击上方按钮将打开对应的地图应用"
                : "Click the button above to open the corresponding map app"}
            </li>
            <li>
              • {params.cc === "cn"
                ? "如果您已安装地图APP，将自动打开APP进行导航"
                : "If you have the map app installed, it will automatically open for navigation"}
            </li>
            <li>
              • {params.cc === "cn"
                ? "如果未安装APP，将在浏览器中打开网页版地图"
                : "If the app is not installed, the web version will open in your browser"}
            </li>
            <li>
              • {params.cc === "cn"
                ? "建议允许浏览器获取您的位置以获得更准确的导航"
                : "It is recommended to allow the browser to access your location for more accurate navigation"}
            </li>
          </ul>
        </div>
      </div>
    </Shell>
  );
}
