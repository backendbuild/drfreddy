import React from 'react';
import Link from 'next/link';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from '@/components/ui/button';
import { Input } from "@/components/ui/input"

const Homespgdt = () => {
  return (
    <div className="justify-center flex py-8 px-8">
      <Card className="shadow-lg">
        <CardHeader>
          <CardTitle>Sistem Penanggulangan Gawat Darurat Terpadu</CardTitle>
          <CardDescription>
            Sistem Penanggulangan Gawat Darurat Terpadu (SPGDT) memadukan penanganan gawat darurat mulai dari tingkat pra rumah sakit sampai tingkat rumah sakit dan rujukan antara rumah sakit dengan pendekatan lintas program dan multisektoral.
          </CardDescription>
        </CardHeader>
        
        <CardContent>
        <Input className="mb-4" type="PENCARIAN SISTEM RUJUK" placeholder="CARI RUMAH SAKIT DENGAN SISTEM PENANGGULANGAN GAWAT DARURAT TERPADU" />
          <Select>
            <SelectTrigger id="framework">
              <SelectValue placeholder="Select" />
            </SelectTrigger>
            <SelectContent position="popper">
              <SelectItem value="rs1">RS. Bhayangkara TK I R. Said Sukanto</SelectItem>
              <SelectItem value="rs2">RS. Bhayangkara Gorontalo</SelectItem>
              <SelectItem value="rs3">RS. Bhayangkara Kendari</SelectItem>
              <SelectItem value="rs4">RS. Bhayangkara Balikpapan</SelectItem>
            </SelectContent>
          </Select>
        </CardContent>
        <CardFooter>
          <Link href="https://wa.me/+6281286944990">
              <Button type="button">HUBUNGI RUMAH SAKIT</Button>
          </Link>
        </CardFooter>
      </Card>
    </div>
  );
};

export default Homespgdt;
