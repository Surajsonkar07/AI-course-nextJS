"use client"; // Ensure this component is treated as a client-side component

import Image from "next/image";
import React from "react";
import { IoHome } from "react-icons/io5";
import { GiArmorUpgrade } from "react-icons/gi";
import { BsStack } from "react-icons/bs";
import { LuLogOut } from "react-icons/lu";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { Progress } from "@/components/ui/progress";

const Sidebar = () => {
  const Menu = [
    {
      id: 1,
      name: "Home",
      icon: <IoHome />,
      path: "/dashboard",
    },
    {
      id: 2,
      name: "Explore",
      icon: <BsStack />,
      path: "/dashboard/explore",
    },
    {
      id: 3,
      name: "Upgrade",
      icon: <GiArmorUpgrade />,
      path: "/dashboard/upgrade",
    },
    {
      id: 4,
      name: "Logout",
      icon: <LuLogOut />,
      path: "/dashboard/logout",
    },
  ];

  const path = usePathname();

  return (
    <div className="fixed h-full md:w-64 p-5 shadow-md">
      <Image src="/logo_ai.png" width={50} height={50} alt="Logo"  />
      <hr className="my-5" />
      <ul>
        {Menu.map((item) => (
          <li key={item.id}>
            <Link href={item.path}>
              <section
                className={`flex gap-5 p-2 mt-3 items-center hover:bg-gray-200 hover:text-black rounded-lg ${
                  item.path == path && "bg-gray-200 text-black"
                }`}
              >
                <span className="text-2xl">{item.icon}</span>
                <h2 className="text-2xl">{item.name}</h2>
              </section>
            </Link>
          </li>
        ))}
      </ul>
      <div className=" absolute bottom-20 w-[80%] h-[10px]">
        {" "}
        <Progress value={60}  />
        <h2 className="text-md my-2">3 Out of 5 Course created</h2>
        <h2 className="text-xs text-gray-500">Upgrade yoyr plan for unlimted course generate</h2>
      </div>
    </div>
  );
};

export default Sidebar;
