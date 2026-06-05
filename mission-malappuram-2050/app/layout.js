import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import MotionProvider from "@/components/providers/MotionProvider";
import StartupLoader from "@/components/providers/StartupLoader";
import { LOGO } from "@/lib/brand";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://missionmalappuram2050.org";

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: "Mission Malappuram 2050 | Building the Future District",
  description:
    "Building the World's First District Prepared for the Artificial Super Intelligence Era. A community-owned future district transformation platform.",
  keywords: [
    "Mission Malappuram 2050",
    "Malappuram",
    "AI district",
    "future district",
    "community platform",
    "Kerala",
    "ASI preparedness",
  ],
  manifest: "/manifest.webmanifest",
  icons: {
    icon: [
      { url: LOGO.icons.ico, sizes: "any" },
      { url: LOGO.icons[16], sizes: "16x16", type: "image/png" },
      { url: LOGO.icons[32], sizes: "32x32", type: "image/png" },
      { url: LOGO.icons[48], sizes: "48x48", type: "image/png" },
    ],
    apple: [
      {
        url: LOGO.icons.apple,
        sizes: "180x180",
        type: "image/png",
      },
    ],
  },
  openGraph: {
    title: "Mission Malappuram 2050",
    description:
      "Building the World's First District Prepared for the Artificial Super Intelligence Era.",
    type: "website",
    locale: "en_IN",
    images: [
      {
        url: LOGO.og.src,
        width: LOGO.og.width,
        height: LOGO.og.height,
        alt: "Mission Malappuram 2050",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mission Malappuram 2050",
    description:
      "A district designed for the future, by its own people.",
    images: [LOGO.og.src],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.variable} ${playfair.variable} font-body bg-brand-mist text-brand-midnight antialiased`}
      >
        <MotionProvider>
          <StartupLoader />
          <Header />
          <main>{children}</main>
          <Footer />
        </MotionProvider>
      </body>
    </html>
  );
}
