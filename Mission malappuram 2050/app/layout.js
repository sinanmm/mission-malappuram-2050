import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

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

export const metadata = {
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
  openGraph: {
    title: "Mission Malappuram 2050",
    description:
      "Building the World's First District Prepared for the Artificial Super Intelligence Era.",
    type: "website",
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mission Malappuram 2050",
    description:
      "A district designed for the future, by its own people.",
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
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
