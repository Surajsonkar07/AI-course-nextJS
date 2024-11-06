import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import React from "react";

const TopicDescription = () => {
  return (
    <div className="flex flex-col items-center">
      <div className="w-[50vw] text-start mt-6 ">
        <lable className='font-bold'>
        💡 Write the topic for which you want to generate a course(e.g. Python
          Course,Yoga,etc)
        </lable>
        <Input placeholder={"Topic"} />
      </div>
      <div className="w-[50vw] text-start mt-6 ">
        <lable className='font-bold'>
        📝Tell us more about your course,what you want to include in the course(Optional)
        </lable>
        <Textarea placeholder={"About your course"} />
      </div>
    </div>
  );
};

export default TopicDescription;
