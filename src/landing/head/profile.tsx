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

export const components: { title: string; href: string }[] = [
    {
        title: "VISI & MISI",
        href: "#",
      },
      {
        title: "MOTTO",
        href: "#",
      },
      {
        title: "SEJARAH DOKKES",
        href: "#",
      },
      {
        title: "Pimpinan dari Masa Ke Masa",
        href: "#",
      },
      {
        title: "Mars Dokkes Polri",
        href: "#",
      },
];

export const ListItem = React.forwardRef<
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
          <div className="text-sm font-medium leading-none">{title}</div>
        </a>
      </NavigationMenuLink>
    </li>
  );
});

ListItem.displayName = "ListItem";
