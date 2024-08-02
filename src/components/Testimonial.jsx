import React from "react";
import Header from "./Header";
import Testimony from "./Testimony";

const Testimonial = () => {
  return (
    <div className="wrapper__testimonial flex p-10">
      <div className="container testimonial">
        <Header heading="h2" content="TESTIMONIALS" className="mb-5" />
        <div className="testimonials grid grid-cols-1 md:grid-cols-2  gap-x-[2rem] gap-y-[1rem] w-[80%] pb-10">
          <Testimony />
          <Testimony />
          <Testimony />
          <Testimony />
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
