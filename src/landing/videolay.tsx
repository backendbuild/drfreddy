import React from 'react';
import Image from 'next/image';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const Videolay = () => {
  return (
    <div className="hero bg-base-200 px-2 py-2">
      <h1 className="text-center font-bold text-2xl px-4 py-4">VIDEO DOKKES POLRI</h1>
      <div className="flex flex-col lg:flex-row justify-center items-center gap-4 p-4">
        <div className="flex-shrink-0">
          <Card className="flex flex-col items-center shadow-lg max-w-xs">
          <iframe
            className="object-cover w-full h-48 rounded-t"
            src="https://www.youtube.com/embed/-jlEpjTRt_I?si=_QjGjvVrXLZiwzzo"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
        ></iframe>
          </Card>
        </div>
        <div className="flex-shrink-0">
          <Card className="flex flex-col items-center shadow-lg max-w-xs">
          <iframe
            className="object-cover w-full h-48 rounded-t"
            src="https://www.youtube.com/embed/-jlEpjTRt_I?si=_QjGjvVrXLZiwzzo"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
        ></iframe>
          </Card>
        </div>
        <div className="flex-shrink-0">
          <Card className="flex flex-col items-center shadow-lg max-w-xs">
          <iframe
            className="object-cover w-full h-48 rounded-t"
            src="https://www.youtube.com/embed/-jlEpjTRt_I?si=_QjGjvVrXLZiwzzo"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
        ></iframe>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Videolay;
