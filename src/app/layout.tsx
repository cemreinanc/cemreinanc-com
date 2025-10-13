import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Footer } from "~/app/footer";
import { Header } from "~/app/header";
import { Providers } from "~/app/providers";
import { TailwindIndicator } from "~/components/ui/tailwind-indicator";
import { ThemeProvider } from "~/components/ui/theme-provider";
import { Analytics } from "~/lib/analytics";
import { getURL } from "~/lib/constants";
import { cn } from "~/lib/utils";

import "./globals.css";
import "lenis/dist/lenis.css";

const geist = Geist({
  variable: "--font-geist",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: getURL(),
  title: {
    default: "Cemre Inanc",
    template: "%s | Cemre Inanc",
  },
  description:
    "A full stack developer who builds websites, interactive platforms and web apps for events, museums, and cultural projects. I run Kraftend and often collaborate with partner agencies; much of my work has supported larger organizations like Nike, Beko, BBVA, Samsung, Netflix, Red Bull and many more.",
  openGraph: {
    type: "website",
    url: getURL(),
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    creator: "@cemreinanc",
    site: "@cemreinanc",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html className={cn(geist.variable, geistMono.variable)} lang="en" suppressHydrationWarning>
      <body className="flex min-h-screen w-full flex-col">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          disableTransitionOnChange
          enableSystem
        >
          <Providers>
            <div className="relative mx-auto w-full max-w-screen-sm flex-1 px-4 pt-20">
              <Header />
              {children}
              <Footer />
            </div>
          </Providers>
          <TailwindIndicator />
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  );
}
