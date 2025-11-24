import "./global.css";
import { Capriola } from "next/font/google";

const capriola = Capriola({ subsets: ["latin"], weight: "400" });

export const metadata = {
  title: "Weather App",
  description: "Frontend exercise for Bluecrest Wellness",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={capriola.className}>
      <body>{children}</body>
    </html>
  );
}
