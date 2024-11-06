import { UserButton } from "@clerk/nextjs";
import Image from "next/image";
import React from "react";

const Header = () => {
  return (
    <div className="flex justify-between px-10 py-2 w-[90vw] shadow-lg rounded-xl mx-4 ">
      <Image src={"/logo_ai.png"} className="bg-slate-200" width={50} height={50} alt="logo" />
      <UserButton />
    </div>
  );
};

export default Header;
