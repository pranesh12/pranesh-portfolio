import { educations } from "@/utils/education";
import React from "react";

const Education = () => {
  return (
    <section className="bg-slate-50">
      <div
        id="education"
        className="pb-8 pt-5 max-w-6xl px-4 sm:px-6 mx-auto   "
      >
        <div className="text-center border-b-indigo-500 ">
          <h1 className="font-bold text-4xl  md:text-5xl pb-2 pt-10">
            Education
          </h1>
        </div>

        <div className="mt-10 text-center md:text-left md:mt-20  gap-y-5 gap-x-96 grid grid-cols-1 mx-auto md:grid-cols-2  ">
          {educations.map((e, idx) => {
            return (
              <>
                <div key={idx} className="">
                  <h5 className="font-semibold">{e.degreeName}</h5>
                  <p>{e.institution}</p>
                </div>
                <div className="md:ml-auto">
                  <p>{e.year}</p>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Education;
