// components.tsx
"use client"
import React from 'react';
import {
  NavigationMenuLink,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { cn } from '@/lib/utils';

export const componentsP: { title: string; href: string }[] = [
// title: "",
// href: "/docs/primitives/alert-dialog",
  {
    title: "Biddokpol Pusdokkes Polri",
    href: "#",
  },
  {
    title: "Bidyankes Pusdokkes Polri",
    href: "#",
  },
  {
    title: "Bidkesmapta Pusdokkes Polri",
    href: "#",
  },
  {
    title: "Bagopsnalmed Pusdokkes Polri",
    href: "#",
  },
  {
    title: "Bagfarmapol Pusdokkes Polri",
    href: "#",
  },
  {
    title: "Bagmatfaskes Pusdokkes Polri",
    href: "#",
  },
  {
    title: "LKOK Pusdokkes Polri",
    href: "#",
  },
  {
    title: "Lab DNA Pusdokkes Polri",
    href: "#",
  },
  {
    title: "Satkes Pusdokkes Polri",
    href: "#",
  },
  {
    title: "Bid DVI Pusdokkes Polri",
    href: "#",
  },
  {
    title: "Subbagbinfung Setpusdokkes Polri",
    href: "#",
  },
  {
    title: "Subbagsumda Set Pusdokkes Polri",
    href: "#",
  },
  {
    title: "Subbagren Setpusdokkes Polri",
    href: "#",
  },
  {
    title: "Urkeu Pusdokkes Polri",
    href: "#",
  },
  {
    title: "Urtu Setpusdokkes Polri",
    href: "#",
  },
];

export const ListItemP = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a"> & { title: string }
>(({ className, title, ...props }, ref) => {
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
          <div className="text-sm font-medium leading-loose ">{title}</div>
        </a>
      </NavigationMenuLink>
    </li>
  );
});

ListItemP.displayName = "ListItemP";
