"use client";
import React, { useState } from "react";
import { TbCategoryFilled } from "react-icons/tb";
import { TbFileDescription } from "react-icons/tb";
import { HiMiniSquares2X2 } from "react-icons/hi2";
import { Button } from "@/components/ui/button";
import SelectCategory from "./_componenets/SelectCategory";
import TopicDescription from "./_componenets/TopicDescription";
import SelectOptaion from "./_componenets/SelectOptaion";

const CraeteCourse = () => {
  const StepperOptains = [
    {
      id: 1,
      name: "category",
      icon: <TbCategoryFilled />,
    },
    {
      id: 2,
      name: "Topic & Desc",
      icon: <TbFileDescription />,
    },
    {
      id: 3,
      name: "Optain",
      icon: <HiMiniSquares2X2 />,
    },
  ];
  const [activeindex, setActiveIndex] = useState(0);
  console.log(activeindex);
  return (
    <div className="w-[150vh] text-center">
      <div className=" flex items-center flex-col  text-center justify-center mt-10 font-bold">
        <h2 className="text-4xl">Create Course</h2>

        <div className="flex">
          {StepperOptains.map((item, index) => (
            <div key={item.id} className="flex items-center">
              <div
                className={` flex  flex-col items-center w-[50px] md:w-[10em] ${
                  activeindex >= index && "text-black"
                }`}
              >
                <div
                  className={`text-[5em]  p-3 rounded-full ${
                    activeindex >= index ? "bg-black text-white" : "bg-gray-300"
                  }`}
                >
                  {item.icon}
                </div>
                <h2 className=" hidden md:block md:text-sm">{item.name}</h2>
              </div>
              {index !== StepperOptains?.length - 1 && (
                <div
                  className={`h-1 md:w-[3em] rounded-full lg:w-[170px] ${
                    activeindex - 1 >= index ? "bg-black" : "bg-gray-300"
                  }`}
                ></div>
              )}
            </div>
          ))}
        </div>
      </div>
      {/* components */}
      {activeindex==0 ?<SelectCategory/>:null}
      {activeindex==1 ?<TopicDescription/>:null}
      {activeindex==2 ?<SelectOptaion/>:null}

      {/* button */}
      <div className="flex justify-between mx-20 mt-4">
        {" "}
        <Button
          disabled={activeindex == 0}
          onClick={() => setActiveIndex(activeindex - 1)}
        >
          Previous
        </Button>
        {activeindex < 2 && (
          <Button onClick={() => setActiveIndex(activeindex + 1)}>Next</Button>
        )}
        {activeindex == 2 && (
          <Button onClick={() => setActiveIndex(activeindex + 1)}>
            Generate Course Layout
          </Button>
        )}
      </div>
    </div>
  );
};

export default CraeteCourse;
