"use client";
import React, { useState } from 'react';
import Image from 'next/image';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { components, ListItem } from "@/landing/head/profile";
import { componentsP, ListItemP } from "@/landing/head/pusdokkes";
import { componentsB, ListItemB } from "@/landing/head/biddokkes";
import { componentsR, ListItemR } from "@/landing/head/rumahsakit";
import { componentsN, ListItemN } from "@/landing/head/newsn";
import { componentsS, ListItemS } from "@/landing/head/spgdt";

const Head = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="bg-blue-950 bg-opacity-80 backdrop-blur-lg p-4 sm:p-6 fixed w-full z-50">
      <div className="flex flex-col sm:flex-row justify-center items-center w-full">
        <div className="flex items-center justify-between w-full sm:w-auto">
          <Image
            src="/logopus.png"
            width={200}
            height={50}
            alt="logo"
            className="m-2 sm:m-5"
          />
          <button
            className="sm:hidden block"
            onClick={toggleMenu}
          >
            <svg
              className="w-6 h-6 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {menuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              )}
            </svg>
          </button>
        </div>
        <div className={`w-full sm:flex justify-center ${menuOpen ? 'block' : 'hidden'} sm:w-auto`}>
          <NavigationMenu className="w-full">
            <NavigationMenuList className="flex flex-col sm:flex-row sm:space-x-4">
              <NavigationMenuItem>
                <NavigationMenuTrigger>Rumah Sakit</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid gap-3 p-4 w-full md:w-[500px] md:grid-cols-3 lg:w-[1000px] overflow-y-auto">
                    {componentsR.map((component) => (
                      <ListItem
                        key={component.title}
                        title={component.title}
                        href={component.href}
                      />
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger>PUSDOKKES</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid gap-3 p-4 w-full md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                    {componentsP.map((component) => (
                      <ListItem
                        key={component.title}
                        title={component.title}
                        href={component.href}
                      />
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger>BIDDOKKES</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid gap-3 p-4 w-full md:w-[500px] md:grid-cols-4 lg:w-[900px]">
                    {componentsB.map((component) => (
                      <ListItem
                        key={component.title}
                        title={component.title}
                        href={component.href}
                      />
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger>Profile</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid gap-3 p-4 w-full md:w-[400px] md:grid-cols-2 lg:w-[600px]">
                    {components.map((component) => (
                      <ListItem
                        key={component.title}
                        title={component.title}
                        href={component.href}
                      />
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger>Pelayanan</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid gap-3 p-4 w-full md:w-[400px] md:grid-cols-1 lg:w-[800px]">
                    {componentsS.map((component) => (
                      <ListItem
                        key={component.title}
                        title={component.title}
                        href={component.href}
                      />
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger>Berita</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid gap-3 p-4 w-full md:w-[400px] md:grid-cols-2 lg:w-[600px]">
                    {componentsN.map((component) => (
                      <ListItem
                        key={component.title}
                        title={component.title}
                        href={component.href}
                      />
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>
      </div>
    </nav>
  );
};

export default Head;
