import { UserInputContext } from "@/app/_context/UserInputContext";
import CategoryList from "@/app/_shared/CategoryList";
import Image from "next/image";
import React, { useContext } from "react";

const SelectCategory = () => {
  const { userCourseInput, setUserCourseInput } = useContext(UserInputContext);

  const handleCategoryChange=(category)=>{setUserCourseInput(prev=>({...prev,category:category}))}
  return (
    <div>
      <h1 className="font-semibold my-5 text-xl">
        {" "}
        Select the Course Category 
      </h1>
      <div className="flex justify-evenly mt-4">
        {CategoryList.map((item) => (
          <div
            key={item.id}
            className="flex flex-col w-[10em]  shadow-md items-center border rounded-md p-3 "
            onClick={()=>handleCategoryChange(item.name)}
          >
            <Image src={item.icon} width={50} height={50} />
            <br />
            <h2>{item.name}</h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SelectCategory;
