import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/components/ThemeProvider";
import { withBasePath } from "@/lib/base-path";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Social Media Dashboard",
  description:
    "Track follower totals and today's engagement across Facebook, Twitter, Instagram, and YouTube.",
  icons: {
    icon: withBasePath("/favicon-32x32.png"),
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${inter.variable} h-full`}
    >
      <body className="bg-background text-text-primary min-h-full font-sans antialiased">
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
