import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/react'
import { ThemeProvider } from '@/components/theme-provider'
import ThemeToggle from '@/components/ui/theme-toggle'
import { GradientBackground } from '@/components/ui/gradient-background'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
    metadataBase: new URL('https://template-01-ui.dalim.in'),
    alternates: {
        canonical: '/',
    },
    title: {
        default: 'Ali Imam',
        template: '%s | Ali Imam',
    },
    description: 'My portfolio, blog, and personal website.',
}

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html
            lang="en"
            suppressHydrationWarning
            className={`${inter.className}`}>
            <body className="tracking-tight antialiased">
                <ThemeProvider
                    attribute="class"
                    defaultTheme="system"
                    enableSystem
                    disableTransitionOnChange>
                    <div className="flex min-h-screen flex-col justify-between p-8 pt-0 text-gray-900 md:pt-8 dark:text-zinc-200">
                        <main className="mx-auto w-full max-w-[60ch] space-y-6">
                            <Header />
                            {children}
                        </main> 
                            <GradientBackground
                                className="absolute -z-10 -m-8 opacity-50"
                                squareSize={1}
                                gridGap={4}
                                color="#6B7280"
                                maxOpacity={0.5}
                                flickerChance={0.1}
                                 
                            /> 
                        <Footer />
                        <Analytics />
                    </div>
                </ThemeProvider>
            </body>
        </html>
    )
}

function Footer() {
    const links = [
        { name: '@aliimam', url: 'https://x.com/dalim_in' },
        { name: 'youtube', url: 'https://www.youtube.com/@dalim-in' },
        { name: 'linkedin', url: 'https://www.linkedin.com/company/dalim-in' },
        { name: 'github', url: 'https://github.com/dalim-in' },
    ]

    return (
        <footer className="mx-auto mt-12 w-full max-w-[60ch] border-t pt-6 text-center">
            <div className="flex justify-center space-x-4 tracking-tight">
                {links.map((link) => (
                    <a
                        key={link.name}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 transition-colors duration-200 hover:text-blue-500 dark:text-gray-500">
                        {link.name}
                    </a>
                ))}
            </div>
        </footer>
    )
}

function Header() {
    const links = [
        { name: 'home', url: '/' },
        { name: 'work', url: '/work' },
    ]

    return (
        <nav className="flex items-center justify-between border-b pb-6 text-center">
            <div className="flex justify-center space-x-4 tracking-tight">
                {links.map((link) => (
                    <a
                        key={link.name}
                        href={link.url}
                        rel="noopener noreferrer"
                        className="text-gray-400 transition-colors duration-200 hover:text-blue-500 dark:text-gray-500 hover:dark:text-blue-500">
                        {link.name}
                    </a>
                ))}
            </div>
            <ThemeToggle />
        </nav>
    )
}
