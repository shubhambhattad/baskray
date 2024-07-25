"use client";
import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import Heading from "./ui/heading";

export const Services = ({
  items,
  className,
}: {
  items: {
    title: string;
    slug: {
      _type: string;
      current: string;
    };
    imageURL: string;
    metaDesc: string | null;
  }[];
  className?: string;
}) => {
  let [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div>
      <Heading title="Services" />
      <div
        className={cn(
          "grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3  py-10",
          className
        )}
      >
        {items.map((item, idx) => (
          <Link
            href={`/services/${item?.slug?.current}`}
            key={item?.slug?.current}
            className="relative group  block p-2 h-full w-full"
            onMouseEnter={() => setHoveredIndex(idx)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <AnimatePresence>
              {hoveredIndex === idx && (
                <motion.span
                  className="absolute inset-0 h-full w-full bg-orange-100 block  rounded-3xl"
                  layoutId="hoverBackground"
                  initial={{ opacity: 0 }}
                  animate={{
                    opacity: 1,
                    transition: { duration: 0.15 },
                  }}
                  exit={{
                    opacity: 0,
                    transition: { duration: 0.15, delay: 0.2 },
                  }}
                />
              )}
            </AnimatePresence>
            <Card>
              <CardTitle>{item.title}</CardTitle>
              <CardDescription>{item.metaDesc}</CardDescription>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
};

export const Card = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "rounded-2xl h-full w-full p-4 overflow-hidden  bg-white border border-orange-300 group-hover:border-orange-300 relative z-20",
        className
      )}
    >
      <div className="relative z-50">
        <div className="p-4">{children}</div>
      </div>
    </div>
  );
};
export const CardTitle = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <h4
      className={cn(
        "text-gray-700 tracking-wide mt-4 text-xl font-semibold underline",
        className
      )}
    >
      {children}
    </h4>
  );
};
export const CardDescription = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <p
      className={cn(
        "mt-8 text-gray-600-400 tracking-wide leading-relaxed text-base",
        className
      )}
    >
      {children}
    </p>
  );
};
