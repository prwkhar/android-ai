import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Layout from "@/components/Layout";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Android Developer Guide",
  description: "Hackerbone's Android Developer Guide — ATB for your lab",
  favicon:
    "https://www.gstatic.com/devrel-devsite/prod/vdbb152dfd6ef5e309aa1d261d45f3fd443aed2691cbfba3f9f80f8a4012a0a8f/android/images/favicon.svg",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
