import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Tacloban Mission",
  description: "타클로반 선교의 여정을 함께 준비합니다.",
  applicationName: "Tacloban Mission",
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "Tacloban Mission",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#f6f7f4",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  );
}
