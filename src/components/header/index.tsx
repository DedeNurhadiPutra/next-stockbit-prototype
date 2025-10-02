"use client";

import Navbar from "@/components/header/navbar";
import Image from "next/image";
import { Input } from "@/components/ui/input";

export default function Header() {
  return (
    <div className="flex w-full h-[101px] max-h-[101px] flex-col bg-white">
      <div className="flex justify-between px-6 ">
        <div className="flex w-[425px] h-[60px] max-h-[60px] items-center gap-[30px]">
          <Image
            src="https://stockbit.com/img/stockbit.svg"
            alt="Picture of the author"
            width={75}
            height={40}
          />
          <Input
            type="email"
            placeholder="Cara cepat menjadi kaya.."
            className="rounded-none w-[320px] h-[30px]"
          />
        </div>
      </div>
      <div className="h-[1px] w-full bg-gray-300"></div>
      <div className="flex w-full h-10 max-h-10 items-center px-[10px] border-b">
        <Navbar />
      </div>
    </div>
  );
}
