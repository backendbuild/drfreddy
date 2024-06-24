// Hero.jsx
"use client"
import React from 'react';
import Image from 'next/image';
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";

const Hero = () => {
    return (
        <div className="hero bg-base-200 px-8 py-8">
            <Card className="hero-content flex flex-col lg:flex-row items-center shadow-lg">
                <Image src="/kapus.jpeg" width={300} height={300} className="lg:ml-10 mb-5 lg:mb-0" alt="kapus" />
                <div className="lg:ml-10">
                    <CardHeader>
                        <CardTitle>KEPALA PUSAT KEDOKTERAN KEPOLISIAN</CardTitle>
                        <CardDescription>Irjen. Pol. Dr. dr. Asep Hendradiana, Sp.An-TI., Subsp.IC(K)., M.Kes.</CardDescription>
                    </CardHeader>
                    <CardContent className="clamp">
                        <p>
                        Saya, Irjen. Pol. Dr. dr. Asep Hendradiana, Sp.An-TI., Subsp.IC(K)., M.Kes., dengan bangga mempersembahkan platform ini sebagai wujud komitmen Pusdokkes Polri dalam menyediakan layanan kesehatan berkualitas tinggi bagi anggota Polri dan masyarakat umum. Melalui website ini, kami berupaya untuk memberikan informasi yang komprehensif mengenai berbagai layanan medis, program kesehatan, dan penelitian yang kami laksanakan.
                        Pusdokkes Polri bertekad untuk terus mengembangkan diri dalam bidang kesehatan dengan mengadopsi teknologi terkini dan standar internasional, sehingga dapat memberikan pelayanan yang efektif dan efisien kepada seluruh stakeholder yang kami layani.
                        Terima kasih atas kunjungan Anda. Mari bersama-sama membangun Polri yang sehat dan bermartabat.
                        Salam sehat,
                        </p>
                    </CardContent>
                </div>
            </Card>
        </div>
    );
};

export default Hero;
