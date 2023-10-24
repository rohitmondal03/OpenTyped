"use client"

import { useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import SplitTypes from "split-type";

import { cn } from "@/lib/utils";


type Props = {
  content: string
  className: string
}


export default function TextOpacityAnimation(
  { content, className }: Props
) {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const splitTypes = document.querySelector(".reveal-type");

    // @ts-ignore
    const text = new SplitTypes(splitTypes, { types: "chars, words" });
    gsap.from(text.chars, {
      scrollTrigger: {
        trigger: splitTypes,
        start: "top 70%",
        end: "top 0%",
        scrub: true,
        markers: false,
      },
      opacity: 0.1,
      stagger: 0.5,
    });
  }, []);

  return (
    <p className={cn("reveal-type", className)}>
      {content}
    </p>
  )
}