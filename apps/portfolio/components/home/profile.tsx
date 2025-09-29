import { cn } from "@/lib/utils";
import { FlipSentences } from "@/components/ui/flip-sentences";

import { Tooltip, TooltipContent, TooltipTrigger } from "../ui/tooltip";
import { NameTransition } from "@/components/home/name";
import { India } from "@aliimam/logos";

export function ProfileHeader() {
  return (
    <div className="screen-line-after relative flex -mt-6 border-x border-b border-edge">
      <div className="shrink-0 border-r border-edge">
        <div className="mx-[2px] my-[3px]">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            className="size-32 object-cover rounded-full ring-1 ring-border ring-offset-2 ring-offset-background select-none sm:size-40"
            alt={`Ali's avatar`}
            src={"/ai.jpg"}
            fetchPriority="high"
          />
        </div> 
      </div> 
      <div className="flex flex-1 flex-col">
        <div
          className={cn(
            "flex grow items-end pb-1 pl-4",
            "bg-[repeating-linear-gradient(315deg,var(--pattern-foreground)_0,var(--pattern-foreground)_1px,transparent_0,transparent_50%)] bg-size-[10px_10px] [--pattern-foreground:var(--color-edge)]/56"
          )}
        >
           
        </div>

        <div className="border-t border-edge">
          <div className="flex items-center gap-2 pl-4 text-3xl font-semibold">
            <NameTransition />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              width={20}
              height={20}
              viewBox="0 0 24 24"
            >
              <path
                fill="#3b82f6"
                d="M24 12a4.454 4.454 0 0 0-2.564-3.91 4.437 4.437 0 0 0-.948-4.578 4.436 4.436 0 0 0-4.577-.948A4.44 4.44 0 0 0 12 0a4.423 4.423 0 0 0-3.9 2.564 4.434 4.434 0 0 0-2.43-.178 4.425 4.425 0 0 0-2.158 1.126 4.42 4.42 0 0 0-1.12 2.156 4.42 4.42 0 0 0 .183 2.421A4.456 4.456 0 0 0 0 12a4.465 4.465 0 0 0 2.576 3.91 4.433 4.433 0 0 0 .936 4.577 4.459 4.459 0 0 0 4.577.95A4.454 4.454 0 0 0 12 24a4.439 4.439 0 0 0 3.91-2.563 4.26 4.26 0 0 0 5.526-5.526A4.453 4.453 0 0 0 24 12Zm-13.709 4.917-4.38-4.378 1.652-1.663 2.646 2.646L15.83 7.4l1.72 1.591-7.258 7.926Z"
              />
            </svg>
          </div>
          <Tooltip>
          <TooltipTrigger className="absolute top-2 right-2.5">
            <India size={30}/>
          </TooltipTrigger>
          <TooltipContent side="left">
            <p>I am from India</p>
          </TooltipContent>
        </Tooltip>

          <div className="h-12 border-t border-edge py-1 pl-4 sm:h-auto">
            <FlipSentences sentences={["Designer", "Developer", "Design Engineer"]} />
          </div>
        </div>
      </div>
    </div>
  );
}
