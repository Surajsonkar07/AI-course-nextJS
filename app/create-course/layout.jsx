"use client";
import React, { useState } from "react";
import Header from "../dashboard/_components/Header";
import { UserInputContext } from "../_context/UserInputContext";

const CraeteCourseLayout = ({ children }) => {
  const [userCourseInput,setUserCourseInput]=useState([]);

  return (
    <div className=" flex  flex-col  items-center text-center">
      <UserInputContext.Provider value={{userCourseInput,setUserCourseInput}}>
        <>
        <Header className="w-[500em]" />
        {children}
        </>
      </UserInputContext.Provider>
    </div>
  );
};

export default CraeteCourseLayout;
