import React from 'react'
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
  

const about = () => {
  return (
    <div className="justify-center flex py-14 px-14">
        <Card className="shadow-lg">
            <CardHeader>
                <CardTitle className="justify-center flex">VISI</CardTitle>
            </CardHeader>
            <CardContent>
                <p className="text-justify">Untuk mewujudkan fungi dan peran Dokkes Polri di bidang Kedokteran Kepolisian dan Kesehatan Kepolisian (Pelayanan Kesehatan dan Kesehatan Kesamaptaan) yang dibutuhkan pada tugas operasional maupun pembinaan Polri harus direalisasikan secara optimal dengan kinerja tinggi serta mampu menjawab tantangan dan ancaman ke depan sesuai dengan perkembangan lingkungan strategis, maka dirumuskan Visi Dokkes Polri tahun 2020 - 2024 sebagai betrikut
                `Terwujudnya pelayanan Kedokteran Kepolisian dan Kesehatan Kepolisian yang PRIMA`</p>
            </CardContent>
            <CardHeader>
                <CardTitle className="justify-center flex">MISI</CardTitle>
            </CardHeader>
            <CardFooter>
                <p>Menyelenggarakan Kedokteran Kepolisian untuk pelaksanaan tugas pokok dan fungsi Polri serta pelayanan Kesehatan Kepolisian secara profesional , modern, dan akuntabel</p>
            </CardFooter>
        </Card>
    </div>
  )
}

export default about