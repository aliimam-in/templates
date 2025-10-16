"use client";

import { Lock, MessageSquare, Terminal, CircleArrowUp } from "@aliimam/icons";

export function Connected() {
  return (
    <div className="flex px-4 lg:px-0 mx-auto max-w-6xl flex-col items-center justify-center">
      <div className=" w-full border-x border-b">
        <div className="grid md:grid-cols-2 ">
          <div className="p-10">
            <h1 className="flex gap-1 text-muted-foreground w-full text-sm lg:text-md">
              <Terminal size={18} />
              Git-connected Deploys
            </h1>
            <h1 className="pt-4 font-semibold w-full tracking-tight text-sm lg:text-2xl">
              From localhost to https, in seconds.
            </h1>
            <h1 className="text-muted-foreground font-medium w-full tracking-tight text-sm lg:text-2xl">
              Deploy from Git or your CLI.
            </h1>
            <div className="border mt-10 w-60 lg:w-80 shadow-sm p-4 rounded-xl">
              <div className="flex gap-1 mb-3">
                <div className="h-2 w-2 rounded-full bg-primary/30" />
                <div className="h-2 w-2 rounded-full bg-primary/30" />
                <div className="h-2 w-2 rounded-full bg-primary/30" />
              </div>
              <p className="text-[10px] font-mono">
                ▲ ~ vercel-site/ git push Enumerating objects: 1, done. Counting
                objects: 100% (1/1), done. Writing objects: 100% (1/1), 72
                bytes, done. Total 1 (delta 0), reused 0 (delta 0). To
                github.com:vercel/ vercel-site.git 21326a9..81663c3 main - main
              </p>
            </div>
            <div className="border bg-background shadow-sm relative ml-30 z-10 -mt-10 w-fit lg:w-90 p-4 rounded-xl">
              <div className="grid items-center grid-cols-3 gap-1 mb-3">
                <div className="flex gap-1">
                  <div className="h-2 w-2 rounded-full bg-red-500" />
                  <div className="h-2 w-2 rounded-full bg-blue-500" />
                  <div className="h-2 w-2 rounded-full bg-green-500" />
                </div>
                <div className="flex items-center gap-2">
                  <Lock size={12} />
                  <p className="text-[10px] font-mono">vercel.com</p>
                </div>
              </div>
              <div className="flex flex-col items-center justify-center p-6 pb-0 border">
                <span className="text-3xl font-bold text-muted-foreground text-center ">
                  What will you ship?
                </span>
                <div className="w-0 pt-6 h-0 border-l-28 border-r-28 border-b-48 border-l-transparent border-r-transparent"></div>
              </div>
            </div>
          </div>
          <div className="p-10 border-t md:border-t-0 md:border-l">
            <h1 className="flex gap-1 text-muted-foreground w-full text-sm lg:text-md">
              <MessageSquare size={18} />
              Collaborative Pre-production
            </h1>
            <h1 className="pt-4 font-semibold w-full tracking-tight text-sm lg:text-2xl">
              Every deploy is remarkable.
            </h1>
            <h1 className="text-muted-foreground font-medium w-full tracking-tight text-sm lg:text-2xl">
              Chat with your team on real, production-grade UI, not just
              designs.
            </h1>
            <div className="flex flex-col space-y-4 mt-10">
              <div className="border bg-background w-60 shadow-sm p-4 rounded-xl self-start">
                <p className="text-sm">
                  Swapped out the{" "}
                  <span className="bg-secondary p-1 px-2 rounded-md">
                    button
                  </span>{" "}
                  for some variant we need
                </p>
              </div>
              <div className="self-end">
                <div className="flex bg-background gap-4 items-center">
                  <div id="pointer" className="relative">
                    <svg
                      width="16.8"
                      height="18.2"
                      viewBox="0 0 12 13"
                      className="fill-blue-500"
                      stroke="white"
                      strokeWidth="1"
                      xmlns="http://www.w3.org/2000/svg"
                      transform="scale(-1,1) translate(-12,0)"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M12 5.50676L0 0L2.83818 13L6.30623 7.86537L12 5.50676V5.50676Z"
                      />
                    </svg>

                    <span className="bg-blue-500 relative -top-1 right-3 rounded-3xl px-2 py-1 text-xs text-primary-foreground">
                      AI
                    </span>
                  </div>
                  <p className="text-sm border w-fit shadow-sm p-4 rounded-xl">
                    How about this instead?
                  </p>
                </div>
              </div>
              <div className="self-start">
                <div className="flex gap-4 bg-background items-center">
                  <p className="text-sm border w-60 shadow-sm p-4 rounded-xl">
                    I like it. Does this work with the brand tweaks{" "}
                    <strong>@aliimam-in</strong>
                  </p>
                  <div id="pointer" className="relative">
                    <svg
                      width="16.8"
                      height="18.2"
                      viewBox="0 0 12 13"
                      className="fill-rose-500"
                      stroke="white"
                      strokeWidth="1"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M12 5.50676L0 0L2.83818 13L6.30623 7.86537L12 5.50676V5.50676Z"
                      />
                    </svg>

                    <span className="bg-rose-500 relative -top-1 left-3 rounded-3xl px-2 py-1 text-xs text-primary-foreground">
                      Ali Imam
                    </span>
                  </div>
                </div>
              </div>
              <div className="self-end">
                <div className="flex bg-background gap-4 items-end">
                  <p className="text-sm flex gap-3 items-center border w-fit shadow-sm p-4 rounded-xl">
                    This Looks Graet!
                    <CircleArrowUp />
                  </p>
                  <div id="pointer" className="relative">
                    <svg
                      width="16.8"
                      height="18.2"
                      viewBox="0 0 12 13"
                      className="fill-green-500"
                      stroke="white"
                      strokeWidth="1"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M12 5.50676L0 0L2.83818 13L6.30623 7.86537L12 5.50676V5.50676Z"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
