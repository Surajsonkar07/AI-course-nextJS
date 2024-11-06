import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import React from 'react'
Link



const Header = () => {
  return (
    <div className="flex justify-between bg-slate-100  items-center px-14 py-3 mb-1 shadow-md">
        <Image src={'/logo_ai.png'} width={50} height={50}  alt="category_list"/>
        <Link href={'/dashboard'}><Button>Get Started</Button></Link>
      
    </div>
  )
}

export default Header
