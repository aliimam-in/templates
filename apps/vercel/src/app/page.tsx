import { Connected } from "@/components/home/connected";
import { Deploy } from "@/components/home/deploy";
import { Gateway } from "@/components/home/gateway";
import { Hero } from "@/components/home/hero";
import { Ovservality } from "@/components/home/ovservality";
import { Ready } from "@/components/home/ready";
import { Scale } from "@/components/home/scale";

export default function Home() {
  return (
    <div className="">
      <Hero />
      <Deploy/>
      <Connected/>
      <Ovservality/>
      <Gateway/>
      <Scale/>
      <Ready/>
    </div>
  );
}
