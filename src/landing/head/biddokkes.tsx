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

export const componentsB: { title: string; href: string }[] = [
    {
        "title": "Biddokkes Polda Aceh",
        "href": "#"
    },
    {
        "title": "Biddokkes Polda Sumbar",
        "href": "#"
    },
    {
        "title": "Biddokkes Polda Bengkulu",
        "href": "#"
    },
    {
        "title": "Biddokkes Polda Sumsel",
        "href": "#"
    },
    {
        "title": "Biddokkes Polda Kep. Bangka Belitung",
        "href": "#"
    },
    {
        "title": "Biddokkes Polda Metro Jaya",
        "href": "#"
    },
    {
        "title": "Biddokkes Polda Jawa Tengah",
        "href": "#"
    },
    {
        "title": "Biddokkes Polda Jawa Timur",
        "href": "#"
    },
    {
        "title": "Biddokkes Polda Bali",
        "href": "#"
    },
    {
        "title": "Biddokkes Polda NTB",
        "href": "#"
    },
    {
        "title": "Biddokkes Polda Kalteng",
        "href": "#"
    },
    {
        "title": "Biddokkes Polda Kaltim",
        "href": "#"
    },
    {
        "title": "Biddokkes Polda Sulteng",
        "href": "#"
    },
    {
        "title": "Biddokkes Polda Sulawesi Tenggara",
        "href": "#"
    },
    {
        "title": "Biddokkes Polda Maluku",
        "href": "#"
    },
    {
        "title": "Biddokkes Polda Papua",
        "href": "#"
    },
    {
        "title": "Biddokkes Polda Sumut",
        "href": "#"
    },
    {
        "title": "Biddokkes Polda Riau",
        "href": "#"
    },
    {
        "title": "Biddokkes Polda Jambi",
        "href": "#"
    },
    {
        "title": "Biddokkes Polda Lampung",
        "href": "#"
    },
    {
        "title": "Biddokkes Kep. Riau",
        "href": "#"
    },
    {
        "title": "Biddokkes Polda Jawa Barat",
        "href": "#"
    },
    {
        "title": "Biddokkes Polda Yogyakarta",
        "href": "#"
    },
    {
        "title": "Biddokkes Polda Banten",
        "href": "#"
    },
    {
        "title": "BIDDOKKES POLDA NTT",
        "href": "#"
    },
    {
        "title": "Biddokkes Polda Kalbar",
        "href": "#"
    },
    {
        "title": "Biddokkes Polda Kalsel",
        "href": "#"
    },
    {
        "title": "Biddokkes Polda Sulut",
        "href": "#"
    },
    {
        "title": "Biddokkes Polda Sulsel",
        "href": "#"
    },
    {
        "title": "Biddokkes Polda Gorontalo",
        "href": "#"
    },
    {
        "title": "Biddokkes Polda Maluku Utara",
        "href": "#"
    },
    {
        "title": "Biddokkes Polda Papua Barat",
        "href": "#"
    },
    {
        "title": "Biddokkes Polda Sulawesi Barat",
        "href": "#"
    },
    {
        "title": "Biddokkes Polda Kalimantan Utara",
        "href": "#"
    },
    {
        "title": "Bidkesjas Korbrimob",
        "href": "#"
    }
];

export const ListItemB = React.forwardRef<
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

ListItemB.displayName = "ListItemB";
