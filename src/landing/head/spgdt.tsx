// components.tsx
"use client"
import React from 'react';
import {
  NavigationMenuLink,
} from "@/components/ui/navigation-menu";
import { cn } from '@/lib/utils';
import Link from 'next/link';

export const componentsS: { title: string; href: string }[] = [
  {
    title: "Sistem Penanggulangan Gawat Darurat Terpadu",
    href: "/src/inside/pagespgdt", // Ensure this is the correct path
  },
];

export const ListItemS = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a"> & { title: string; href: string }
>(({ className, title, href, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <Link
          ref={ref}
          href={href}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-loose">{title}</div>
        </Link>
      </NavigationMenuLink>
    </li>
  );
});

ListItemS.displayName = "ListItemS";
