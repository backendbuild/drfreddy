import React from 'react';
import Image from 'next/image';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const Heroleast = () => {
  return (
    <div className="hero bg-base-200 px-2 py-2">
      <h1 className="text-center font-bold text-2xl px-6 py-6">JAJARAN KARO</h1>
      <div className="flex flex-col lg:flex-row justify-center items-center gap-4 p-4">
        <div className="flex-shrink-0">
          <Card className="flex flex-col items-center shadow-lg max-w-xs">
            <Image src="/kapus.jpeg" width={300} height={300} alt="kapus" />
            <CardContent>
              <CardHeader>
                <CardTitle>KARO DOKPOL</CardTitle>
                <CardDescription>Irjen. Pol. Dr. dr. Asep Hendradiana, Sp.An-TI., Subsp.IC(K)., M.Kes.</CardDescription>
              </CardHeader>
            </CardContent>
          </Card>
        </div>
        <div className="flex-shrink-0">
          <Card className="flex flex-col items-center shadow-lg max-w-xs">
            <Image src="/kapus.jpeg" width={300} height={300} alt="kapus" />
            <CardContent>
              <CardHeader>
                <CardTitle>KARO KESPOL 1</CardTitle>
                <CardDescription>Irjen. Pol. Dr. dr. Asep Hendradiana, Sp.An-TI., Subsp.IC(K)., M.Kes.</CardDescription>
              </CardHeader>
            </CardContent>
          </Card>
        </div>
        <div className="flex-shrink-0">
          <Card className="flex flex-col items-center shadow-lg max-w-xs">
            <Image src="/kapus.jpeg" width={300} height={300} alt="kapus" />
            <CardContent>
              <CardHeader>
                <CardTitle>KARO KESPOL 2</CardTitle>
                <CardDescription>Irjen. Pol. Dr. dr. Asep Hendradiana, Sp.An-TI., Subsp.IC(K)., M.Kes.</CardDescription>
              </CardHeader>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Heroleast;
