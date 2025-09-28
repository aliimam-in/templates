'use client'

import { FAQ } from '@/components/home/faq'
import { FeaturesSection } from '@/components/home/features'
import { HeroSection } from '@/components/home/hero'
import * as React from 'react'   

export default function Home() {
    return (
        <div>
             <HeroSection/>
             <FeaturesSection/>
             <FAQ/>
        </div>
    )
}
