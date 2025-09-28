import type { NextConfig } from 'next';
import createMDX from '@next/mdx'; 
 
const nextConfig: NextConfig = {
  pageExtensions: ['mdx', 'ts', 'tsx'],
    
  experimental: {
    mdxRs: true
  }
};

const withMDX = createMDX({});

export default withMDX(nextConfig);
