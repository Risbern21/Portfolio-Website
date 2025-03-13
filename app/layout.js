import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import FireflyBackground from "@/components/Fireflies";
import Sound from "@/components/Sound";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "ThreeJs Portfolio",
  description: "Risberns ThreeJS Portfolio Website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <FireflyBackground/>
        <Sound/>
        <div id="my-modal"/>
      </body>
    </html>
  );
}
