"use client";

import * as React from "react";
import Link from "next/link";

import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import Image from "next/image";

const components: { title: string; href: string; description: string }[] = [
  {
    title: "Constructive Finance",
    href: "/docs/primitives/alert-dialog",
    description:
      "Real Value offers Construction Finance to Real Estate Developers for projects in select cities.",
  },
  {
    title: "Loan Against Property",
    href: "/docs/primitives/hover-card",
    description:
      "Real Value offers Construction Finance to Real Estate Developers for projects in select cities.",
  },
  {
    title: "Unsecured Business Loan",
    href: "/docs/primitives/progress",
    description:
      "Real Value offers Construction Finance to Real Estate Developers for projects in select cities.",
  },
  {
    title: "SME Loans",
    href: "/docs/primitives/scroll-area",
    description:
      "Real Value offers Construction Finance to Real Estate Developers for projects in select cities.",
  },
  {
    title: "Life Insurance",
    href: "/docs/primitives/tabs",
    description:
      "Real Value offers Construction Finance to Real Estate Developers for projects in select cities.",
  },
  {
    title: "Home Loan",
    href: "/docs/primitives/tooltip",
    description:
      "Real Value offers Construction Finance to Real Estate Developers for projects in select cities.",
  },
];

export function Navbar() {
  return (
    <div className="hidden md:flex my-2 max-w-5xl mx-auto  items-center justify-between">
      <Image
        className="h-20 w-auto"
        quality={100}
        src="/bask-ray-logo.png"
        height={80}
        width={200}
        alt="logo"
      ></Image>
      <NavigationMenu className=" my-2">
        <NavigationMenuList>
          <NavigationMenuItem>
            <Link href="/" legacyBehavior passHref>
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                Home
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link href="/about-us" legacyBehavior passHref>
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                About Us
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link href="/products" legacyBehavior passHref>
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                Products
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <Link href="/blogs" legacyBehavior passHref>
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                Blogs
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link href="/contact-us" legacyBehavior passHref>
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                Contact Us
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";
