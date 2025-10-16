"use client";

import { Plus } from "@aliimam/icons";
import { Button } from "../ui/button";

export function Ready() {
  return (
    <div className="flex px-4 lg:px-0 mx-auto max-w-6xl flex-col items-center justify-center">
      <div className="relative grid md:grid-cols-3 w-full border-x border-b">
        <Plus size={30} strokeWidth={0.8} className="absolute -top-4 -left-4" />
        <Plus
          size={30}
          strokeWidth={0.8}
          className="absolute -bottom-4 -right-4"
        />
        <div className="flex  p-10 max-w-2xl col-span-2 flex-col">
          <h1 className="pt-4 font-semibold w-full tracking-tight text-sm lg:text-2xl">
            Ready to deploy?{" "}
            <span className="text-muted-foreground">
              Start building with a free account. Speak to an expert for your
            </span>{" "}
            <span className="text-blue-500">Pro</span>{" "}
            <span className="text-muted-foreground">or</span>{" "}
            <span className="text-violet-500">Enterprise</span>{" "}
            <span className="text-muted-foreground">needs.</span>
          </h1>
          <div className="mt-6 flex-wrap flex gap-3">
            <Button className="w-fit rounded-full h-10 px-6">
              Start Deploying
            </Button>

            <Button
              variant={"outline"}
              className="w-fit rounded-full h-10 px-6"
            >
              Talk to an expert
            </Button>
          </div>
        </div>
        <div className="flex p-10 border-t md:border-t-0 md:border-l md:max-w-xl col-span-1 flex-col">
          <h1 className="pt-4  font-semibold w-full tracking-tight text-sm lg:text-lg">
            Explore Vercel Enterprise{" "}
            <span className="text-muted-foreground">
              with an interactive product tour, trial, or a personalized demo.
            </span>
          </h1>
          <div className="mt-6 flex gap-3">
            <Button
              variant={"outline"}
              className="w-fit rounded-full h-10 px-6"
            >
              Explore Enterprise
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
