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

export const componentsR: { title: string; href: string }[] = [
    {
        "title": "RS. Bhayangkara TK I R. Said Sukanto",
        "href": "#"
    },
    {
        "title": "RS. Bhayangkara Medan",
        "href": "#"
    },
    {
        "title": "RS. Bhayangkara Setukpa Lemdiklat Polri",
        "href": "#"
    },
    {
        "title": "RS. Bhayangkara Ternate",
        "href": "#"
    },
    {
        "title": "RS. Bhayangkara Gorontalo",
        "href": "#"
    },
    {
        "title": "RS. Bhayangkara Mappaoudang Makassar",
        "href": "#"
    },
    {
        "title": "RS. Bhayangkara Pekanbaru",
        "href": "#"
    },
    {
        "title": "RS. Bhayangkara Jambi",
        "href": "#"
    },
    {
        "title": "RS. Bhayangkara Indramayu",
        "href": "#"
    },
    {
        "title": "RS. Bhayangkara Lumajang",
        "href": "#"
    },
    {
        "title": "RS. Bhayangkara Mataram",
        "href": "#"
    },
    {
        "title": "RS. Bhayangkara Pontianak",
        "href": "#"
    },
    {
        "title": "RS. Bhayangkara Balikpapan",
        "href": "#"
    },
    {
        "title": "RS. Bhayangkara Palu",
        "href": "#"
    },
    {
        "title": "RS. Bhayangkara Tebing Tinggi Medan",
        "href": "#"
    },
    {
        "title": "RS. Bhayangkara Pusdik Brimob Watukosek",
        "href": "#"
    },
    {
        "title": "RS. Bhayangkara Kendari",
        "href": "#"
    },
    {
        "title": "RS. Bhayangkara Sartika Asih Bandung",
        "href": "#"
    },
    {
        "title": "RS. Bhayangkara HS. Samsoeri Mertojoso Surabaya",
        "href": "#"
    },
    {
        "title": "RS. Bhayangkara Prof. Awaloedin Djamin Semarang",
        "href": "#"
    },
    {
        "title": "RS. Bhayangkara Pusdik Gasum Porong",
        "href": "#"
    },
    {
        "title": "RS. Bhayangkara Bengkulu",
        "href": "#"
    },
    {
        "title": "RS. Bhayangkara Palembang",
        "href": "#"
    },
    {
        "title": "RS. Bhayangkara Tulungagung",
        "href": "#"
    },
    {
        "title": "RS. Bhayangkara Denpasar",
        "href": "#"
    },
    {
        "title": "RS. Bhayangkara Banjarmasin",
        "href": "#"
    },
    {
        "title": "RS. Bhayangkara Manado",
        "href": "#"
    },
    {
        "title": "RS. Bhayangkara Jayapura",
        "href": "#"
    },
    {
        "title": "RS. Bhayangkara Kelapa Dua",
        "href": "#"
    },
    {
        "title": "RS. Bhayangkara Bondowoso",
        "href": "#"
    },
    {
        "title": "RS. Bhayangkara Banda Aceh",
        "href": "#"
    },
    {
        "title": "RS. Bhayangkara Bogor",
        "href": "#"
    },
    {
        "title": "RS. Bhayangkara Kep. Babel",
        "href": "#"
    },
    {
        "title": "RS. Bhayangkara Lampung",
        "href": "#"
    },
    {
        "title": "RS. Bhayangkara Pusdik Shabara Porong",
        "href": "#"
    },
    {
        "title": "RS. Bhayangkara Cianjur",
        "href": "#"
    },
    {
        "title": "RS. Bhayangkara Nganjuk",
        "href": "#"
    },
    {
        "title": "RS. Bhayangkara Moh. Dahlan Surabaya",
        "href": "#"
    },
    {
        "title": "RS. Bhayangkara Yogyakarta",
        "href": "#"
    },
    {
        "title": "RS. Bhayangkara Palangkaraya",
        "href": "#"
    },
    {
        "title": "RS. Bhayangkara Kalimantan Utara",
        "href": "#"
    },
    {
        "title": "RS. Bhayangkara Mamuju Sulawesi Barat",
        "href": "#"
    },
    {
        "title": "RS. Bhayangkara Kupang",
        "href": "#"
    },
    {
        "title": "RS. Bhayangkara Padang",
        "href": "#"
    },
    {
        "title": "RS. Bhayangkara Lemdiklat Polri",
        "href": "#"
    },
    {
        "title": "RS. Bhayangkara Akpol",
        "href": "#"
    },
    {
        "title": "RS. Bhayangkara Sespim Lemdiklat Polri",
        "href": "#"
    },
    {
        "title": "RS. Bhayangkara Surakarta",
        "href": "#"
    },
    {
        "title": "RS. Bhayangkara Batam",
        "href": "#"
    },
    {
        "title": "RS. Bhayangkara Kediri",
        "href": "#"
    },
    {
        "title": "RS. Bhayangkara Lodewijk Mandacan Papua Barat",
        "href": "#"
    },
    {
        "title": "RS. Bhayangkara Hasta Brata Batu Malang",
        "href": "#"
    },
    {
        "title": "RS. Bhayangkara Wahyu Tutuko Bojonegoro",
        "href": "#"
    },
    {
        "title": "RS. Bhayangkara Dumai",
        "href": "#"
    },
    {
        "title": "RS. Bhayangkara Batang Toru",
        "href": "#"
    },
    {
        "title": "RS. Bhayangkara Banten",
        "href": "#"
    },
    {
        "title": "RSB TK III Wahyu Tutuko Bojonegoro",
        "href": "#"
    },
    {
        "title": "KA RS Bhayangkara Mal",
        "href": "#"
    }
];

export const ListItemR = React.forwardRef<
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

ListItemR.displayName = "ListItemR";
