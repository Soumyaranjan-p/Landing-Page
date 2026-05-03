import React from "react";
import { cn } from "../lib/utils";
export default function Hero() {
  return (
    <section className="relative h-screen w-full overflow-hidden [--pattern:var(--color-neutral-300)]">
       <HorizontalScale/>
    </section>
  );
}


const HorizontalScale= ({className}: {className?: string})=>{

    return  <div className={cn("h-14 w-full bg-[repeating-linear-gradient(315deg,var(--pattern)_0,var(--pattern)_1px,transparent_1px,transparent_50%)] bg-[size:10px_10px] border-y border-[var(--pattern0)]",className)} />
}