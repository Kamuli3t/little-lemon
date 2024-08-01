import React from "react";
import Header from "./Header";
import He from "../assets/onsiteheadshot.jpg";
import She from "../assets/6108-06166728en_Masterfile.jpg";

const About = () => {
  return (
    <div class="container p-4 m-4">
      <Header
        content="Little Lemon"
        heading="h3"
        className=" text-black mt-40"
      />
      <Header content="Chicago" heading="h4" className=" text-black" />
      <div class="flex mt-10">
        <div class="w-1/2">
          <p class="mt-4 text-base">
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis enim velit mollit. Exercitation
            veniam consequat sunt nostrud amet.
          </p>
          <p class="mt-4 text-base">
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis enim velit mollit.
          </p>
        </div>
        <div class="w-1/2 relative">
          <div
            class="absolute  w-[50%] h-[340px] "
            // style={{ top: 0, right: "50%", transform: "translate(50%, 0)" }}
          >
            <img
              src={She}
              alt=""
              className="object-cover bottom-0 translate-x-[10%] rounded-xl shadow-lg"
            />
          </div>
          <div
            class="absolute w-[50%] h-[340px]"
            // style={{ top: "50%", right: "0", transform: "translate(0, -50%)" }}
          >
            <img
              src={He}
              alt=""
              className=" object-cover z-10 translate-x-[80%] translate-y-[-40%] rounded-xl shadow-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
