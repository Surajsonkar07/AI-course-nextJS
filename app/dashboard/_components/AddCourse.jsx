"use client"
import { Button } from "@/components/ui/button";
import { useUser } from "@clerk/nextjs";
import Link from "next/link";
import React from "react";
 

const AddCourse = () => {
const {user}=useUser()
  return (
    <div className="flex items-center justify-between px-6">
      <div className=" ">
        <h2 className="text-2xl">Hello,<span className=" font-semibold">{user?.fullName}</span></h2>
        <p className="text-gray-500">Craete new course with AI , Share with friends and Earn from it </p>
      </div>
      <Link href={"/create-course"}><Button>+ Create Ai Course</Button></Link>
        
    </div>
  );
};

export default AddCourse;
