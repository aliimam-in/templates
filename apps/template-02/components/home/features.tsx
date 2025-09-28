'use client'

import { Activity, Map as MapIcon, MessageCircle } from 'lucide-react'
import { Device } from '../ui/device'
import { Awards } from '../ui/award'
import Book from '../ui/book'
import { Gauge } from '../ui/gauge'

export function FeaturesSection() {
    return (
        <section className="px-4 pt-16 md:pt-32">
            <div className="mx-auto grid max-w-5xl border md:grid-cols-2">
                <div className="flex items-center justify-center">
                    <Device
                        variant="macbook"
                        width={400}
                        src="/dalim-ui-dark.jpg"
                    />
                </div>
                <div className="overflow-hidden flex justify-center  border-t bg-zinc-50 p-6 sm:p-12 md:border-0 md:border-l dark:bg-transparent">
                    <Awards
                        variant="award"
                        title="WINNER"
                        subtitle="A Design Award & Competetion"
                        recipient="Ali Imam"
                        date="June 2025"
                        level="gold"
                    />
                </div>
                <div className="col-span-full border-y p-12">
                    <p className="text-center text-4xl font-semibold lg:text-7xl">99.99% Uptime Design</p>
                </div>
                <div className="col-span-full flex justify-center gap-6 border-b pt-6">
                    <Book
                        author="Ali"
                        color="magenta"
                        textColor="white">
                        <div className="space-y-2 pl-3 text-white">
                            <svg
                                width="24"
                                height="24"
                                viewBox="0 0 392.02 324.6"
                                fill="currentColor"
                                xmlns="http://www.w3.org/2000/svg">
                                <path
                                    fill="#fff200"
                                    d="M268.08,0c-27.4,0-51.41,4.43-72.07,13.26C175.36,4.43,151.35,0,123.95,0H0v324.6h123.95c27.37,0,51.38-4.58,72.07-13.7,20.69,9.12,44.7,13.7,72.07,13.7h123.95V0h-123.95ZM324.09,268.36h-47.91c-20.25,0-37.3-4.05-51.18-12.15-12.28-7.17-21.94-17.41-28.99-30.7h0s0,0,0,0c0,0,0,0,0,0h0c-7.05,13.29-16.71,23.53-28.99,30.7-13.87,8.1-30.93,12.15-51.18,12.15h-47.91V56.24h47.91c19.8,0,36.67,4.01,50.61,12.04,12.51,7.2,22.35,17.47,29.55,30.77h0s0,0,0,0c0,0,0,0,0,0h0c7.2-13.3,17.04-23.57,29.55-30.77,13.95-8.02,30.82-12.04,50.61-12.04h47.91v212.13Z"></path>
                            </svg>
                            <h1 className="pt-2 text-3xl font-semibold leading-7">
                                Learn <br /> Designs
                            </h1>
                            <p className="text-xs leading-3 opacity-70">A Practical Handbook for Visual Consistency & Creativity</p>
                        </div>
                    </Book>
                    <Book
                        author="Ali"
                        color="red"
                        textColor="white">
                        <div className="space-y-2 pl-3 text-white">
                            <div className="absolute right-4 top-4">
                                <svg
                                    width="24"
                                    height="24"
                                    viewBox="0 0 392.02 324.6"
                                    fill="currentColor"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        fill="#fff200"
                                        d="M268.08,0c-27.4,0-51.41,4.43-72.07,13.26C175.36,4.43,151.35,0,123.95,0H0v324.6h123.95c27.37,0,51.38-4.58,72.07-13.7,20.69,9.12,44.7,13.7,72.07,13.7h123.95V0h-123.95ZM324.09,268.36h-47.91c-20.25,0-37.3-4.05-51.18-12.15-12.28-7.17-21.94-17.41-28.99-30.7h0s0,0,0,0c0,0,0,0,0,0h0c-7.05,13.29-16.71,23.53-28.99,30.7-13.87,8.1-30.93,12.15-51.18,12.15h-47.91V56.24h47.91c19.8,0,36.67,4.01,50.61,12.04,12.51,7.2,22.35,17.47,29.55,30.77h0s0,0,0,0c0,0,0,0,0,0h0c7.2-13.3,17.04-23.57,29.55-30.77,13.95-8.02,30.82-12.04,50.61-12.04h47.91v212.13Z"></path>
                                </svg>
                            </div>
                            <h1 className="pt-2 text-3xl font-semibold leading-7">
                                Design <br /> Without Limits
                            </h1>
                            <p className="text-xs leading-3 opacity-70">A Practical Handbook for Visual Consistency & Creativity</p>
                        </div>
                    </Book>
                    <Book
                        depth={8}
                        color="#fff200"
                        variant="notebook"
                        textColor="black">
                        <div className="mt-8 space-y-2 text-center text-black">
                            <div className="flex justify-center">
                                <svg
                                    width="24"
                                    height="24"
                                    viewBox="0 0 392.02 324.6"
                                    fill="currentColor"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        fill="#fff200"
                                        d="M268.08,0c-27.4,0-51.41,4.43-72.07,13.26C175.36,4.43,151.35,0,123.95,0H0v324.6h123.95c27.37,0,51.38-4.58,72.07-13.7,20.69,9.12,44.7,13.7,72.07,13.7h123.95V0h-123.95ZM324.09,268.36h-47.91c-20.25,0-37.3-4.05-51.18-12.15-12.28-7.17-21.94-17.41-28.99-30.7h0s0,0,0,0c0,0,0,0,0,0h0c-7.05,13.29-16.71,23.53-28.99,30.7-13.87,8.1-30.93,12.15-51.18,12.15h-47.91V56.24h47.91c19.8,0,36.67,4.01,50.61,12.04,12.51,7.2,22.35,17.47,29.55,30.77h0s0,0,0,0c0,0,0,0,0,0h0c7.2-13.3,17.04-23.57,29.55-30.77,13.95-8.02,30.82-12.04,50.61-12.04h47.91v212.13Z"></path>
                                </svg>
                            </div>
                            <h1 className="pt-2 text-2xl font-bold leading-6 tracking-tighter">
                                Designs <br /> That Gives
                            </h1>
                            <p className="mt-2 text-xs leading-3 opacity-70">A Practical Handbook for Visual Consistency & Creativity</p>
                        </div>
                    </Book>
                    <Book
                        author="Ali"
                        color="purple"
                        textColor="white">
                        <div className="space-y-2 pl-3 text-white">
                            <svg
                                width="24"
                                height="24"
                                viewBox="0 0 392.02 324.6"
                                fill="currentColor"
                                xmlns="http://www.w3.org/2000/svg">
                                <path
                                    fill="#fff200"
                                    d="M268.08,0c-27.4,0-51.41,4.43-72.07,13.26C175.36,4.43,151.35,0,123.95,0H0v324.6h123.95c27.37,0,51.38-4.58,72.07-13.7,20.69,9.12,44.7,13.7,72.07,13.7h123.95V0h-123.95ZM324.09,268.36h-47.91c-20.25,0-37.3-4.05-51.18-12.15-12.28-7.17-21.94-17.41-28.99-30.7h0s0,0,0,0c0,0,0,0,0,0h0c-7.05,13.29-16.71,23.53-28.99,30.7-13.87,8.1-30.93,12.15-51.18,12.15h-47.91V56.24h47.91c19.8,0,36.67,4.01,50.61,12.04,12.51,7.2,22.35,17.47,29.55,30.77h0s0,0,0,0c0,0,0,0,0,0h0c7.2-13.3,17.04-23.57,29.55-30.77,13.95-8.02,30.82-12.04,50.61-12.04h47.91v212.13Z"></path>
                            </svg>
                            <h1 className="pt-2 text-3xl font-semibold leading-7">
                                Learn <br /> Designs
                            </h1>
                            <p className="text-xs leading-3 opacity-70">A Practical Handbook for Visual Consistency & Creativity</p>
                        </div>
                    </Book>
                </div>
                <div className="flex items-center justify-center">
                    <Gauge
                        value={81}
                        size={200}
                        gradient={true}
                        primary="success"
                        tickMarks={true}
                        label="Progress"
                        transition={{ length: 1200, delay: 200 }}
                    />
                </div>
                <div className="flex justify-center overflow-hidden border-t bg-zinc-50 p-6 sm:p-12 md:border-0 md:border-l dark:bg-transparent">
                    <Gauge
                        value={8}
                        size={200}
                        multiRing={{
                            enabled: true,
                            rings: [
                                { value: 90 * 0.6, color: '#fff200' },
                                { value: 63 * 0.6, color: '#10b981' },
                            ],
                        }}
                        transition={{ length: 1000, delay: 300 }}
                    />
                </div>
            </div>
        </section>
    )
}
