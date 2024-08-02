import React from "react";
import Header from "./Header";
import He from "../assets/onsiteheadshot.jpg";
import She from "../assets/6108-06166728en_Masterfile.jpg";

const About = () => {
  return (
    <div class="container p-4 ">
      <Header
        content="Little Lemon"
        heading="h3"
        className=" text-black mt-40"
      />
      <Header content="Chicago" heading="h4" className=" text-black" />
      <div class="flex mt-10">
        <div class="w-1/2">
          <p class="mt-4 mb-10 text-base">
            Welcome to Little Lemon, a family-owned Mediterranean restaurant
            where tradition meets modern flair. We specialize in classic
            Mediterranean recipes served with a contemporary twist. Our
            commitment to using the freshest ingredients ensures that every dish
            is a delightful experience. Join us for a warm, inviting atmosphere
            and exceptional dining. Thank you for choosing Little Lemon!
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
              className="object-cover bottom-0 translate-x-[10%] md:translate-y-[-40%] rounded-xl shadow-lg"
            />
          </div>
          <div
            class="absolute w-[50%] h-[340px]"
            // style={{ top: "50%", right: "0", transform: "translate(0, -50%)" }}
          >
            <img
              src={He}
              alt=""
              className=" object-cover z-10 translate-x-[80%] translate-y-[-40%] md:translate-y-[-80%]  rounded-xl shadow-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
