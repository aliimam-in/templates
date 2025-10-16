"use client";

import { Building, Shield } from "@aliimam/icons";
import { Button } from "../ui/button";

export function Scale() {
  return (
    <div className="flex px-4 lg:px-0 mx-auto max-w-6xl flex-col items-center justify-center">
      <div className="space-y-3 w-full border-x py-20 border-b">
        <h1 className="flex flex-wrap gap-2 w-full text-center items-center justify-center text-3xl leading-none font-semibold tracking-tight lg:text-4xl">
          Scale your
          <Button variant={"outline"} className="rounded-full h-10 px-6">
            <Building/>
            Enterprise
            </Button>
            without compromising
            <Button variant={"outline"} className="rounded-full h-10 px-6">
            <Shield/>
            Security
            </Button>
        </h1> 
      </div>
      <div className="space-y-3 w-full border-x py-2 border-b" />
    </div>
  );
}
