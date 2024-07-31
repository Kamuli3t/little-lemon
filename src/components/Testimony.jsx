import React from "react";
import Avatar from "../assets/public.png";

const Testimony = () => {
  return (
    <div className="grid grid-flow-row grid-row-3 bg-slate-200 w-100 p-4 rounded-md">
      <div className="text-xl mb-4 ">Rating</div>
      <div className="flex justify-start items-center gap-4 w-full mb-4">
        <div>
          <img src={Avatar} alt="avatar" className=" size-[45px]" />
        </div>
        <p className="font-bold">Name Here</p>
      </div>

      <div>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo suscipit
        similique iusto eos doloribus amet, nam minima magnam obcaecati.
      </div>
    </div>
  );
};

export default Testimony;
