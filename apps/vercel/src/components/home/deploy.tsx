"use client";

import { GitMerge, Globe, Terminal } from "@aliimam/icons";

export function Deploy() {
  return (
    <div className="flex px-4 lg:px-0 mx-auto max-w-6xl flex-col items-center justify-center">
      <div className="space-y-3 w-full border-x py-20 border-b">
        <h1 className="flex gap-2 w-full text-center items-center justify-center text-3xl leading-none font-semibold tracking-tight lg:text-4xl">
          Develop with your favorite tools
          <Terminal className="mt-2" strokeWidth={2.5} size={34} />
        </h1>
        <h1 className="flex gap-2 w-full text-center items-center justify-center text-3xl leading-none font-semibold tracking-tight lg:text-4xl">
          Launch globally, instantly
          <Globe strokeWidth={2.5} size={30} />
          Keep pushing
          <GitMerge strokeWidth={2.5} size={30} />
        </h1>
      </div>
      <div className="space-y-3 w-full border-x py-2 border-b" />
    </div>
  );
}
