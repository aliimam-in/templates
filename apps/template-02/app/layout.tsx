import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google' 
import { ThemeProvider } from '@/components/theme-provider' 
import { Header } from '@/components/layout/header'
import { Footer } from '@/components/layout/footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
    metadataBase: new URL('https://template-02-ui.dalim.in'),
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
                    <div className="">
                        <Header/>
                         
                         {children}
                         
                        <Footer/>
                    </div>
                </ThemeProvider>
            </body>
        </html>
    )
}

