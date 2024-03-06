import React from "react";
const activeSkills = [
  "javascript",
  "react",
  "next js",
  "express js",
  "mongoose",
  "html5",
  "css3",
  "bootstrap",
  "tailwindcss",
];

const familiarTech = ["daisy ui", "material ui", "react-bootstrap", "java"];

const About = () => {
  return (
    <section className="bg-slate-50">
      <div
        id="about"
        className="pb-24 pt-5 max-w-6xl px-4 sm:px-6 mx-auto  text-center md:text-left "
      >
        <div className="text-center border-b-indigo-500 ">
          <h1 className="font-bold text-5xl pb-2 pt-10">About Me</h1>
          <p className="font-normal">
            You will find a little about me and technologies i use daily
          </p>
        </div>

        <div className="flex flex-col md:flex-row  gap-6 mt-16 justify-between">
          <div className=" w/2 ">
            <div>
              <h5 className="font-semibold text-xl pb-3  md:px-x-0 ">
                Want to know me?
              </h5>
            </div>
            <div className="pb-3 px-2 md:px-0">
              <p>
                n publishing and graphic design, Lorem ipsum is a placeholder
                text commonly used to demonstrate the visual form of a document
                or a typeface without relying on meaningful content. Lorem ipsum
                may be used as a placeholder before the final copy is available.
              </p>
            </div>
            <div className="pb-3 px-2 md:px-0">
              <p>
                n publishing and graphic design, Lorem ipsum is a placeholder
                text commonly used to demonstrate the visual form of a document
                or a typeface without relying on meaningful content. Lorem ipsum
                may be used as a placeholder before the final copy is available.
              </p>
            </div>
            <div>
              <button className="btn  btn-primary mt-2">Contact Me</button>
            </div>
          </div>
          <div className="w/2 ">
            <div>
              <div>
                <h5 className="font-semibold pb-2  text-xl ">
                  Skills and Technlogoies
                </h5>
              </div>
              <div>I'm actively using and familiar with following</div>
            </div>
            <div>
              <div>
                <h5 className="font-semibold py-2 text-xl">Actively using</h5>
              </div>
              <div className="py-4">
                <div className="flex flex-wrap gap-2 justify-center md:justify-start">
                  {activeSkills.map((skill) => {
                    return (
                      <div>
                        <button className=" btn  btn-outline  btn-primary capitalize ">
                          {skill}
                        </button>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
            <div>
              <div>
                <h5 className="font-semibold">Familiar with</h5>
              </div>
              <div className="py-4">
                <div className="flex flex-wrap gap-2 justify-center md:justify-start ">
                  {familiarTech.map((skill) => {
                    return (
                      <div>
                        <button className=" btn e btn-outline  btn-primary capitalize ">
                          {skill}
                        </button>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
