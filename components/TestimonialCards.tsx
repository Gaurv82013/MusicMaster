"use client";
import { cn } from "@/lib/utils";
import React from "react";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";

const testimonials = [
    {
      "quote": "The structured courses helped me go from a beginner to confidently performing on stage.",
      "name": "Miles Groove",
      "title": "Jazz Guitarist"
    },
    {
      "quote": "I love how flexible the lessons are — I can practice anytime and keep improving steadily.",
      "name": "Melody Starr",
      "title": "Vocal Coach"
    },
    {
      "quote": "This platform bridges theory and practice beautifully, making complex concepts easy to understand.",
      "name": "Dr. Theo Soundwell",
      "title": "Music Theorist"
    },
    {
      "quote": "Music has the power to transform lives, and this platform makes that journey accessible to everyone.",
      "name": "Alice Harmony",
      "title": "Piano Instructor"
    },
    {
      "quote": "Learning here feels like being part of a global community of passionate musicians.",
      "name": "DJ Nova",
      "title": "Electronic Music Producer"
    },

];

const TestimonialCards = () => {
  return (
    <div className="relative flex h-screen w-full flex-col items-center justify-center overflow-hidden bg-black">
      {/* Grid background */}
      <div
        className={cn(
          "absolute inset-0",
          "[background-size:50px_50px]",
          "[background-image:linear-gradient(to_right,#1a1a1a_1px,transparent_1px),linear-gradient(to_bottom,#1a1a1a_1px,transparent_1px)]",
        )}
      />
      {/* Radial gradient for the container to give a faded look */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-black [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] dark:bg-black"></div>
      <p className="relative z-20 bg-gradient-to-b from-neutral-200 to-neutral-500 bg-clip-text pb-8 text-4xl font-bold text-transparent sm:text-7xl">
        <h1 className="text-green-500 text-center text-3xl pb-8">Hear our Harmoney: Voice of Success</h1>
        <div className="rounded-md flex flex-col antialiased dark:bg-black dark:bg-grid-black/[0.05] items-center justify-center relative overflow-hidden">
            <InfiniteMovingCards
                items={testimonials}    
              direction="right"
              speed="fast"
            />
        </div>
      </p>
    </div>
  )
}

export default TestimonialCards
