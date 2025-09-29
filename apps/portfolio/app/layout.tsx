import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import { ThemeProvider } from "@/components/theme-provider";
import ThemeToggle from "@/components/ui/theme-toggle";
import { GradientBackground } from "@/components/ui/gradient-background";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://portfolio.aliimam.in"),
  alternates: {
    canonical: "/",
  },
  title: {
    default: "Ali Imam",
    template: "%s | Ali Imam",
  },
  description: "My portfolio, blog, and personal website.",
  icons: {
    icon: "/ai-logo.png",
    shortcut: "/ai-logo.png",
    apple: "/ai-logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className={`${inter.className}`}>
      <body className="tracking-tight antialiased">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="h-screen">
            <div className="flex shadow-2xl h-screen bg-background mx-auto w-full max-w-2xl overflow-hidden border-x p-8 flex-col justify-between">
              <main className="space-y-6 overflow-auto">
                <Header />
                {children}
              </main>

              <Footer />
              <Analytics />
            </div>
            <GradientBackground
              className="absolute inset-0 dark:opacity-50 -z-50"
              squareSize={1}
              gridGap={4}
              color="#6B7280"
              maxOpacity={1}
              flickerChance={0.1}
            />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}

function Footer() {
  const links = [
    { name: "@aliimam", url: "https://x.com/aliimam_in" },
    { name: "youtube", url: "https://www.youtube.com/@aliimam_in" },
    { name: "linkedin", url: "https://www.linkedin.com/in/aliimam-in" },
    { name: "github", url: "https://github.com/aliimam-in" },
  ];

  return (
    <footer className="mx-auto mt-8 w-full max-w-[60ch] border-t pt-6 text-center">
      <div className="flex justify-center space-x-4 tracking-tight">
        {links.map((link) => (
          <a
            key={link.name}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 transition-colors duration-200 hover:text-blue-500 dark:text-gray-500"
          >
            {link.name}
          </a>
        ))}
      </div>
    </footer>
  );
}

function Header() {
  const links = [
    { name: "home", url: "/" },
    { name: "about", url: "/about" },
    { name: "work", url: "/work" },
    { name: "blogs", url: "/blogs" },
  ];

  return (
    <nav className="flex items-center justify-between text-center">
      <div className="flex justify-center space-x-4 tracking-tight">
        {links.map((link) => (
          <a
            key={link.name}
            href={link.url}
            rel="noopener noreferrer"
            className="text-gray-400 transition-colors duration-200 hover:text-blue-500 dark:text-gray-500 hover:dark:text-blue-500"
          >
            {link.name}
          </a>
        ))}
      </div>
      <ThemeToggle />
    </nav>
  );
}
