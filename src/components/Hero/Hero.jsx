import Image from "next/image";
import React from "react";
import dev from "../../../public/asset/dev.png";

const Hero = () => {
  return (
    <div
      id="top"
      className="max-w-6xl px-4 sm:px-6  mx-auto text-lg leading-8 pt-16 md:pt-0"
    >
      <div className="flex flex-col md:flex-row pt-6 md:pt-0 md:h-dvh content-center items-center ">
        <div className="w-full md:w-1/2 ">
          <div className=" text-center md:text-left ">
            <div>
              <p>Hello I am</p>
            </div>
            <div>
              <h1 className="font-semibold text-6xl">Pranesh Chakma</h1>
            </div>
            <div>
              <p>
                a passionate front end developer focoused on creating
                interactive , scalable,responsive web app
              </p>
            </div>

            <div className="flex content-center gap-5 mt-5  justify-center md:justify-start ">
              <button className="btn  btn-primary ">See my work</button>
              <button className="btn btn-outline btn-primary">
                View Resume
              </button>
            </div>
          </div>
        </div>
        <div className="md:w-1/2 pt-6 md:pt-0 ">
          <Image src={dev} />
        </div>
      </div>
    </div>
  );
};

export default Hero;
