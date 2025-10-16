"use client";

import { ChartArea, Plus } from "@aliimam/icons";

export function Ovservality() {
  return (
    <div className="flex px-4 lg:px-0 mx-auto max-w-6xl flex-col items-center justify-center">
      <div className="relative bg-background w-full border-x border-b">
        <Plus size={30} strokeWidth={0.8} className="absolute -bottom-4 -left-4" />
        <Plus
          size={30}
          strokeWidth={0.8}
          className="absolute -top-4 -right-4"
        />
        <div className="grid">
          <div className="p-10">
            <h1 className="flex gap-1 text-muted-foreground w-full text-sm lg:text-md">
              <ChartArea size={18} />
              Observability
            </h1>
            <h1 className="pt-4 font-semibold w-full tracking-tight text-sm lg:text-2xl">
              Route-aware observability.
            </h1>
            <h1 className="text-muted-foreground font-medium max-w-sm w-full tracking-tight text-sm lg:text-2xl">
              Monitor and analyze the performance and traffic of your projects.
            </h1>
            <div className="lg:-mt-32">
              <img
                className="size-full dark:hidden"
                alt={`Ali's avatar`}
                src={"/analytics-large-light.avif"}
                fetchPriority="high"
              />
              <img
                className="size-full hidden dark:block"
                alt={`Ali's avatar`}
                src={"/analytics-large-dark.avif"}
                fetchPriority="high"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
