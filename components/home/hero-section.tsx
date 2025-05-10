import React from "react";
import { Button } from "../ui/button";
import { cn } from "@/lib/utils";
import Image from "next/image";

type Props = {};

const HeroSection = (props: Props) => {
  return (
    <section className="realtive min-h-[600px] w-full overflow-hidden bg-gradient-to-br from purple-600 via-indigo-950 to-indigo-950 ">
      {/* Gradient overlay */}
      <div className="absolute inset-0 before:absolute before:left-1/4 before:top-0 before:h-[500px] before:w-[500px] before:rounded-full before:bg-gradient-to-r before:to-indigo-600/20 before:blur-2xl " />
      <div className="cntainer relative mx-auto flex h-full flex-col items-center justify-center px-4 py-24 md:flex-row md:py-32">
        
      </div>
    </section>
  );
};


