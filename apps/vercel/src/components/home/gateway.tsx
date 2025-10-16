"use client";

import { Sparkles, GitBranch } from "@aliimam/icons";
import { RotateCcw } from "lucide-react";

export function Gateway() {
  return (
    <div className="flex px-4 lg:px-0 mx-auto max-w-6xl flex-col items-center justify-center">
      <div className="w-full border-x border-b">
        <div className="grid md:grid-cols-2">
          <div className="p-10">
            <h1 className="flex gap-1 text-muted-foreground w-full text-sm lg:text-md">
              <Sparkles size={18} />
              Vercel AI Gateway
            </h1>
            <h1 className="pt-4 font-semibold w-full tracking-tight text-sm lg:text-2xl">
              Deploy AI in seconds.
            </h1>
            <h1 className="text-muted-foreground font-medium w-full tracking-tight text-sm lg:text-2xl">
              Access all major models through a single, unified interface and
              shared AI credit wallet.
            </h1>
            <div className="pt-20">
              <img
                className="size-full dark:hidden"
                alt={`Ali's avatar`}
                src={"/ai-gateway-full-light.svg"}
                fetchPriority="high"
              />
              <img
                className="size-full hidden dark:block"
                alt={`Ali's avatar`}
                src={"/ai-gateway-full-dark.svg"}
                fetchPriority="high"
              />
            </div>
          </div>
          <div className="p-10 border-t md:border-t-0 md:border-l">
            <h1 className="flex gap-1 text-muted-foreground w-full text-sm lg:text-md">
              <RotateCcw size={18} />
              Instant Rollbacks
            </h1>
            <h1 className="pt-4 font-semibold w-full tracking-tight text-sm lg:text-2xl">
              Go ahead, deploy on Friday.
            </h1>
            <h1 className="text-muted-foreground font-medium w-full tracking-tight text-sm lg:text-2xl">
              Safely manage releases with automated deployments and instant
              rollbacks.
            </h1>
            <div className="flex flex-col space-y-4 mt-10">
              <div className="border flex gap-6 w-fit  shadow-sm p-4 rounded-xl self-start">
                <div className="space-y-3">
                  <div className="text-sm flex items-center justify-between">
                    <div>
                      <span className="font-bold"> vercel-site/</span>
                      <span className="font-bold self-end">aliimam</span>
                    </div>
                    <span className="text-muted-foreground text-xs">
                      1d ago
                    </span>
                  </div>
                  <p className="text-sm flex gap-2 items-center">
                    <GitBranch strokeWidth={2} size={14} />
                    ba5f55f <span className="">Update bento box design</span>
                  </p>
                </div>
                <div className="flex items-center  justify-center">
                  <span className="absolute text-xs">90</span>
                  <svg
                    aria-hidden="true"
                    fill="none"
                    height="32"
                    strokeWidth="2"
                    viewBox="0 0 100 100"
                    width="32"
                  >
                    <circle
                      cx="50"
                      cy="50"
                      r="45"
                      strokeWidth="10"
                      strokeDashoffset="0"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      stroke="green"
                    ></circle>
                  </svg>
                </div>
              </div>

              <div className="flex relative justify-center">
                <div className="flex items-center justify-center">
                  <svg
                    data-size="large"
                    fill="none"
                    height="152"
                    viewBox="0 0 117 152"
                    width="117"
                  >
                    <path
                      d="M3.99999 4L3.99999 60C3.99999 66.6274 9.37258 72 16 72L104 72C110.627 72 116 77.3726 116 84L116 152"
                      stroke="url(#paint0_linear_1364_100888)"
                      strokeWidth="2"
                    />
                    <path
                      d="M3.99999 4L3.99999 60C3.99999 66.6274 9.37258 72 16 72L104 72C110.627 72 116 77.3726 116 84L116 152"
                      stroke="url(#paint1_linear_1364_100888)"
                      strokeWidth="2"
                    />
                    <g clipPath="url(#clip0_1364_100888)">
                      <path
                        clipRule="evenodd"
                        d="M4 0.5L8 7.5H0L4 0.5Z"
                        fill="#45DEC4"
                        fillRule="evenodd"
                      />
                    </g>
                    <defs>
                      <linearGradient
                        gradientUnits="userSpaceOnUse"
                        id="paint0_linear_1364_100888"
                        x1="116"
                        x2="4"
                        y1="72"
                        y2="72"
                      >
                        <stop stopColor="#E5484D" />
                        <stop offset="0.5" stopColor="#FFC634" />
                        <stop offset="1" stopColor="#45DEC4" />
                      </linearGradient>
                      <linearGradient
                        gradientUnits="userSpaceOnUse"
                        id="paint1_linear_1364_100888"
                        x1="116"
                        x2="116"
                        y1="152"
                        y2="1.56712e-05"
                      >
                        <stop stopColor="var(--ds-background-200)" />
                        <stop
                          offset="0.322368"
                          stopColor="var(--ds-background-200)"
                          stopOpacity="0"
                        />
                      </linearGradient>
                      <clipPath id="clip0_1364_100888">
                        <rect fill="white" height="8" width="8" />
                      </clipPath>
                    </defs>
                  </svg>
                </div>

                <RotateCcw size={35} className="absolute translate-y-1/2 top-9 rounded-full bg-background border p-2"/>
              </div>

              <div className="border border-dashed self-end flex gap-6 w-fit  shadow-sm p-4 rounded-xl">
                <div className="space-y-3">
                  <div className="text-sm flex items-center justify-between">
                    <div>
                      <span className="font-bold"> vercel-site/</span>
                      <span className="font-bold self-end">ai</span>
                    </div>
                    <span className="text-muted-foreground text-xs">
                      1d ago
                    </span>
                  </div>
                  <p className="text-sm flex gap-2 items-center">
                    <GitBranch strokeWidth={2} size={14} />
                    ba5f55f <span className="">Update bento box design</span>
                  </p>
                </div>
                <div className="flex items-center  justify-center">
                  <span className="absolute text-xs">55</span>
                  <svg
                    aria-hidden="true"
                    fill="none"
                    height="32"
                    strokeWidth="2"
                    viewBox="0 0 100 100"
                    width="32"
                  >
                    <circle
                      cx="50"
                      cy="50"
                      r="45"
                      strokeWidth="10"
                      strokeDashoffset="0"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      stroke="red"
                    ></circle>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
