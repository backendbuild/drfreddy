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

export const componentsN: { title: string; href: string }[] = [
    {
        title: "Artikel",
        href: "#",
      },
      {
        title: "Video",
        href: "#",
      },
    
];

export const ListItemN = React.forwardRef<
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
          <div className="text-sm font-medium leading-loose">{title}</div>
        </a>
      </NavigationMenuLink>
    </li>
  );
});

ListItemN.displayName = "ListItemN";
