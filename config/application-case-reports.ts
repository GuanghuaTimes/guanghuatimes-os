export interface ApplicationCaseReport {
  slug: string;
  title: string;
  titleCn: string;
  description: string;
  descriptionCn: string;
  date: string;
  image: string;
  pdfFile: string;
}

export const applicationCaseReports: ApplicationCaseReport[] = [
  {
    slug: "ghar023",
    title: "GHAR023 Trial Report",
    titleCn: "GHAR023 试验结果报告",
    description: "Trial results report (PDF)",
    descriptionCn: "试验结果报告（PDF）",
    date: "2026-02-03",
    image: "/banner1.jpg",
    pdfFile: "GHAR023.pdf",
  },
];
