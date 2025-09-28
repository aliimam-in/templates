'use client'

import Link from 'next/link'

import { useTheme } from 'next-themes'
import { ArrowUp, Facebook, Heart, Instagram, Linkedin, Mail, Moon, Sun, X, Youtube } from 'lucide-react'

function handleScrollTop() {
    window.scroll({
        top: 0,
        behavior: 'smooth',
    })
}

const navigation = {
    categories: [
        {
            id: 'women',
            name: 'Women',

            sections: [
                {
                    id: 'about',
                    name: 'About',
                    items: [
                        { name: 'About', href: '/about' },
                        { name: 'Works', href: '/agency/works' },
                        { name: 'Pricing', href: '/pricing' },
                    ],
                },
                {
                    id: 'features',
                    name: 'Features',
                    items: [
                        { name: 'Products', href: '/products' },
                        { name: 'Agency', href: '/agency' },
                        { name: 'Dashboard', href: '/dashboard' },
                    ],
                },
                {
                    id: 'products',
                    name: 'Products',
                    items: [
                        { name: 'DIcons', href: '/products/dicons' },
                        { name: 'DShapes', href: '/products/dshapes' },
                        { name: 'Graaadients', href: '/products/graaadients' },
                    ],
                },
                {
                    id: 'designs',
                    name: 'Designs',
                    items: [
                        { name: 'Design', href: '/designs' },
                        { name: 'Components', href: '/components' },
                        { name: 'Blogs', href: '/blogs' },
                    ],
                },
                {
                    id: 'other',
                    name: 'Others',
                    items: [
                        { name: 'Graphic', href: '/graphic' },
                        { name: '3D Icons', href: '/products/3dicons' },
                        { name: 'Colors', href: '/products/colors/generate' },
                    ],
                },
                {
                    id: 'company',
                    name: 'Company',
                    items: [
                        { name: 'Contact', href: '/contact' },
                        { name: 'Terms', href: '/terms' },
                        { name: 'Privacy', href: '/privacy' },
                    ],
                },
            ],
        },
    ],
}

const Underline = `hover:-translate-y-1 border border-dotted rounded-xl p-2.5 transition-transform `

export function Footer() {
    return (
        <footer className="mx-auto w-full border-t px-2">
            <div className="relative mx-auto grid max-w-5xl items-center justify-center gap-6 p-10 pb-0 md:flex">
                 
                <p className="text-primary/60 bg-transparent text-center text-xs leading-4 ">
                    Welcome to Dalim, where creativity meets strategy to bring your vision to life. I am passionate about transforming ideas into compelling visual experiences. I specialize in crafting unique brand identities, immersive digital experiences, and engaging content that resonates with your audience. My mission is to empower businesses and brands to stand out in a crowded market. I believe in the power of design to tell stories, evoke emotions, and drive meaningful connections. I
                    believe in quality, not quantity. Dalim is actually an agency of one. This means you'll work directly with me, founder of Designali.
                </p>
            </div>

            <div className="mx-auto max-w-5xl px-6 py-10">
                <div className="border-b border-dotted"> </div>
                <div className="py-10">
                    {navigation.categories.map((category) => (
                        <div
                            key={category.name}
                            className="grid grid-cols-3 flex-row justify-between gap-6 leading-6 md:flex">
                            {category.sections.map((section) => (
                                <div key={section.name}>
                                    <ul
                                        role="list"
                                        aria-labelledby={`${category.id}-${section.id}-heading-mobile`}
                                        className="flex flex-col space-y-2">
                                        {section.items.map((item) => (
                                            <li
                                                key={item.name}
                                                className="flow-root">
                                                <Link
                                                    href={item.href}
                                                    className="text-sm text-slate-600 hover:text-black md:text-xs dark:text-slate-400 hover:dark:text-white">
                                                    {item.name}
                                                </Link>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>
                    ))}
                </div>
                <div className="border-b border-dotted"> </div>
            </div>

            <div className="flex flex-wrap justify-center gap-y-6">
                <div className="flex flex-wrap items-center justify-center gap-6 gap-y-4 px-6">
                    <Link
                        aria-label="Logo"
                        href="mailto:contact@dalim.in"
                        rel="noreferrer"
                        target="_blank"
                        className={Underline}>
                        <Mail
                            strokeWidth={1.5}
                            className="h-5 w-5"
                        />
                    </Link>
                    <Link
                        aria-label="Logo"
                        href="https://x.com/dalim_in"
                        rel="noreferrer"
                        target="_blank"
                        className={Underline}>
                        <X className="h-5 w-5" />
                    </Link>
                    <Link
                        aria-label="Logo"
                        href="https://www.instagram.com/dalim.in/"
                        rel="noreferrer"
                        target="_blank"
                        className={Underline}>
                        <Instagram className="h-5 w-5" />
                    </Link>

                    <Link
                        aria-label="Logo"
                        href="https://www.facebook.com/dalim.agency"
                        rel="noreferrer"
                        target="_blank"
                        className={Underline}>
                        <Facebook className="h-5 w-5" />
                    </Link>
                    <Link
                        aria-label="Logo"
                        href="https://www.linkedin.com/company/dalim"
                        rel="noreferrer"
                        target="_blank"
                        className={Underline}>
                        <Linkedin className="h-5 w-5" />
                    </Link>
                    <Link
                        aria-label="Logo"
                        href="https://www.youtube.com/@dalim-in"
                        rel="noreferrer"
                        target="_blank"
                        className={Underline}>
                        <Youtube className="h-5 w-5" />
                    </Link>
                </div>
                <ThemeToogle />
            </div>

            <div className="mx-auto mb-10 mt-10 flex flex-col justify-between text-center text-xs md:max-w-7xl">
                <div className="flex flex-row items-center justify-center gap-1 text-slate-600 dark:text-slate-400">
                    <span> © </span>
                    <span>{new Date().getFullYear()}</span>
                    <span>Made with</span>
                    <Heart className="mx-1 h-4 w-4 animate-pulse text-red-600" />
                    <span> by </span>
                    <span className="hover:text-ali dark:hover:text-ali cursor-pointer text-black dark:text-white">
                        <Link
                            aria-label="Logo"
                            className="font-bold"
                            href="https://www.instagram.com/aliimam.in/"
                            target="_blank">
                            Ali Imam {''}
                        </Link>
                    </span>
                    -
                    <span className="hover:text-ali cursor-pointer text-slate-600 dark:text-slate-400 dark:hover:text-red-600">
                        <Link
                            aria-label="Logo"
                            className=""
                            href="/">
                            Dalim
                        </Link>
                    </span>
                </div>
            </div>
        </footer>
    )
}

const ThemeToogle = () => {
    const { setTheme } = useTheme()

    return (
        <div className="flex items-center justify-center">
            <div className="flex items-center rounded-full border border-dotted">
                <button
                    onClick={() => setTheme('light')}
                    className="dark:bg-background mr-3 rounded-full bg-black p-2 text-white dark:text-white">
                    <Sun
                        className="h-5 w-5"
                        strokeWidth={1}
                    />
                    <span className="sr-only">T</span>
                </button>

                <button
                    type="button"
                    onClick={handleScrollTop}>
                    <ArrowUp className="h-3 w-3" />
                    <span className="sr-only">Top</span>
                </button>

                <button
                    onClick={() => setTheme('dark')}
                    className="ml-3 rounded-full p-2 text-black dark:bg-black dark:text-white">
                    <Moon
                        className="h-5 w-5"
                        strokeWidth={1}
                    />
                    <span className="sr-only">T</span>
                </button>
            </div>
        </div>
    )
}
