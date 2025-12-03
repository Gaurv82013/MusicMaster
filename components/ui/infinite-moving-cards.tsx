"use client";

import { cn } from "@/lib/utils";
import React, { useEffect } from "react";

export const InfiniteMovingCards = ({
  items,
  direction = "left",
  speed = "fast",
  pauseOnHover = true,
  className,
}: {
  items: {
    quote: string;
    name: string;
    title: string;
  }[];
  direction?: "left" | "right";
  speed?: "fast" | "normal" | "slow";
  pauseOnHover?: boolean;
  className?: string;
}) => {
  const containerRef = React.useRef<HTMLDivElement>(null);

  useEffect(() => {
    getDirection();
    getSpeed();
  }, []);

  const getDirection = () => {
    if (containerRef.current) {
      if (direction === "left") {
        containerRef.current.style.setProperty(
          "--animation-direction",
          "forwards",
        );
      } else {
        containerRef.current.style.setProperty(
          "--animation-direction",
          "reverse",
        );
      }
    }
  };
  const getSpeed = () => {
    if (containerRef.current) {
      if (speed === "fast") {
        containerRef.current.style.setProperty("--animation-duration", "20s");
      } else if (speed === "normal") {
        containerRef.current.style.setProperty("--animation-duration", "40s");
      } else {
        containerRef.current.style.setProperty("--animation-duration", "80s");
      }
    }
  };

  const renderCard = (item: { quote: string; name: string; title: string }, index: number) => (
    <li
      className="relative w-[320px] h-[220px] max-w-full shrink-0 rounded-3xl border border-blue-400 shadow-sm bg-gradient-to-br from-[#1B2335] to-[#232b45] flex flex-col justify-between p-6 gap-4 transition-transform hover:scale-105 duration-300"
      key={`${item.name}-${index}`}
    >
      <blockquote className="flex flex-col h-full justify-between">
        <span className="relative z-20 text-base leading-relaxed font-medium text-white mb-4">
          {item.quote}
        </span>
        <div className="relative z-20 flex flex-row items-center gap-3 mt-auto">
          <span className="flex flex-col gap-0.5">
            <span className="text-base font-semibold text-blue-300">{item.name}</span>
            <span className="text-sm font-normal text-blue-200">{item.title}</span>
          </span>
        </div>
      </blockquote>
    </li>
  );
  return (
    <div
      ref={containerRef}
      className={cn(
        "scroller relative z-20 max-w-7xl overflow-hidden [mask-image:linear-gradient(to_right,transparent,green_20%,green_80%,transparent)]",
        className,
      )}
    >
      <ul
        className={cn(
          "flex w-max min-w-full shrink-0 flex-nowrap gap-4 py-4 animate-scroll",
          pauseOnHover && "hover:[animation-play-state:paused]",
        )}
      >
        {items.map((item, idx) => renderCard(item, idx))}
        {items.map((item, idx) => renderCard(item, idx + items.length))}
      </ul>
    </div>
  );
};
