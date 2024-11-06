import React from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";


const SelectOptaion = () => {
  return (
    <div className="grid grid-cols-2 gap-5 my-7  pl-28 font-bold">
      <div className="bold  text-start">
        <label>🎚️ Diffculty Level</label>
        <Select>
          <SelectTrigger className="w-[50vh]">
            <SelectValue placeholder="Select" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="Beginner">Beginner</SelectItem>
            <SelectItem value="Intermediate">Intermediate</SelectItem>
            <SelectItem value="Advance">Advance</SelectItem>
          </SelectContent>
        </Select>
      </div>{" "}
      <div className="bold  text-start">
        <label>🕜 Course Duration</label>
        <Select>
          <SelectTrigger className="w-[50vh]">
            <SelectValue placeholder="Select" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="1 hour">1 hour</SelectItem>
            <SelectItem value="2 hour">2 hour</SelectItem>
            <SelectItem value="More than 3 hour">More than 3 hour</SelectItem>
          </SelectContent>
        </Select>
      </div>{" "}
      <div className="bold  text-start">
        <label>🎬 Add Video</label>
        <Select>
          <SelectTrigger className="w-[50vh]">
            <SelectValue placeholder="Select" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="Yes">Yes</SelectItem>
            <SelectItem value="No">No</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <div className="text-start text-black w-[22.5vw]">
        <label>📝 Number of Chapter</label>
        <Input type='number' placeholder='Enter the number of video'  />
      </div>
    </div>
  );
};

export default SelectOptaion;
