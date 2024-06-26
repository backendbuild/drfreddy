import React from 'react';
import Image from 'next/image';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const Newslay = () => {
  return (
    <div className="hero bg-base-200 px-2 py-2">
      <h1 className="text-center font-bold text-2xl px-4 py-4">ARTIKEL DOKKES POLRI</h1>
      <div className="flex flex-col lg:flex-row justify-center items-center gap-4 p-4">
        <div className="flex-shrink-0">
          <Card className="flex flex-col items-center shadow-lg max-w-xs">
            <Image src="/78.jpeg" width={400} height={400} alt="kapus" />
            <CardContent>
              <CardHeader className="text-justify">
                <CardTitle>BHAYANGKARA KE-78</CardTitle>
                <CardDescription>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Asperiores nulla nisi dolorum sed ratione atque commodi eum qui impedit corrupti, ea placeat architecto voluptate nesciunt eius tempora quae iste praesentium?</CardDescription>
              </CardHeader>
            </CardContent>
          </Card>
        </div>
        <div className="flex-shrink-0">
          <Card className="flex flex-col items-center shadow-lg max-w-xs">
            <Image src="/78.jpeg" width={400} height={400} alt="kapus" />
            <CardContent>
              <CardHeader>
                <CardTitle className="text-justify">HUT DOKKES POLRI KE-78</CardTitle>
                <CardDescription>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi praesentium quos nulla animi, ipsam tempora suscipit neque earum totam quis nihil exercitationem ullam nesciunt cum iste aut minus. Magnam, dolores?</CardDescription>
              </CardHeader>
            </CardContent>
          </Card>
        </div>
        <div className="flex-shrink-0">
          <Card className="flex flex-col items-center shadow-lg max-w-xs">
            <Image src="/78.jpeg" width={400} height={400} alt="kapus" />
            <CardContent>
              <CardHeader className="text-justify">
                <CardTitle>HUT RUMKIT POLRI Tk. I</CardTitle>
                <CardDescription>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corrupti eum mollitia cupiditate vitae totam earum ea necessitatibus labore impedit asperiores dolorum quam sunt porro, eius deserunt ab ratione, placeat ipsam!</CardDescription>
              </CardHeader>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Newslay;
