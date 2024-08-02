import React from "react";
import footerPhoto from "../assets/footer photo.jpg";

const Footer = () => {
  return (
    <footer>
      <div className="wrapper bg-[#505E57] pt-32 py-10">
        <div className="container grid grid-flow-col grid-cols-4 ">
          <div>
            <img src={footerPhoto} alt="" className=" object-cover" />
          </div>
          <div className="pt-10 text-white text-lg">
            <p className=" text-yellow-400 text-lg text-bold">
              Doormat Navigation
            </p>
            <p>Home</p>
            <p>About</p>
            <p>Menu</p>
            <p>Reservations</p>
            <p>Order Online</p>
            <p>Login</p>
          </div>
          <div className="pt-10 text-white text-lg">
            <p className=" text-yellow-400 text-lg text-bold">Contact</p>
            <p>Address</p>
            <p>Phone Number</p>
            <p>E-mail</p>
          </div>
          <div className="pt-10 text-white text-lg">
            <p className=" text-yellow-400 text-lg text-bold">
              Social Media Links
            </p>
            <p>Instagram</p>
            <p>Tik Tok</p>
            <p>YouTube</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
