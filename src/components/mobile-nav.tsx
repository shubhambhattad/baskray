"use client";

import * as React from "react";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Image from "next/image";

import Link from "next/link";

export function MobileNav() {
  return (
    <div className=" md:hidden flex justify-between items-center px-4">
      <div className="flex gap-4 ">
        <Image
          src="/bask-ray-logo.png"
          width={1000}
          height={1000}
          quality={100}
          alt="sppu-logo"
          className="object-contain w-32 my-4"
        />
      </div>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button>Menu</Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-56">
          <Link href="/">
            <DropdownMenuItem>Home</DropdownMenuItem>
          </Link>
          <Link href="/about-us">
            <DropdownMenuItem>About Us</DropdownMenuItem>
          </Link>

          <Link href="/services">
            <DropdownMenuItem>Services</DropdownMenuItem>
          </Link>

          <Link href="/blogs">
            <DropdownMenuItem>Blogs</DropdownMenuItem>
          </Link>

          <Link href="/contact-us">
            <DropdownMenuItem>Contact</DropdownMenuItem>
          </Link>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}
