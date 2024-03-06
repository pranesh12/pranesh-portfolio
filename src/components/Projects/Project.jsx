import { projects } from "@/utils/project";

import Link from "next/link";
import React from "react";

const Project = () => {
  return (
    <section>
      <div id="projects" className="pb-8 pt-5 px-4 sm:px-6 max-w-6xl mx-auto  ">
        <div className="text-center border-b-indigo-500 ">
          <h1 className="font-bold text-4xl md:text-5xl pb-2 pt-10">
            Projects
          </h1>
          <p className="font-normal mt-4">
            These are some of the projects I built to practice and get better at
            the technologies mentioned above.
          </p>
        </div>

        <div className="mt-10 md:mt-20 gap-y-16 gap-x-10 grid grid-cols-1 md:grid-cols-2">
          {projects &&
            projects.map((project) => {
              return (
                <div key={project.id}>
                  <div className="card  card-compact bg-base-100 shadow-xl">
                    <figure>
                      <img
                        className=" object-cover"
                        src={project.image}
                        alt={project.name}
                      />
                    </figure>
                    <div className="card-body">
                      <h2 className="card-title text-xl md:text-2xl ">
                        {project.heading}
                      </h2>
                      <p className="text-sm md:text-base ">{project.detail}</p>
                      <div className="flex flex-wrap gap-x-2 gap-y-3">
                        {project.tech.map((t, idx) => {
                          return (
                            <div key={idx}>
                              <button className="btn btn-primary btn-outline gap-2 btn-sm  font-medium">
                                {t}
                              </button>
                            </div>
                          );
                        })}
                      </div>
                      <div className="mt-5">
                        <Link target="_blank" href={project.live}>
                          <button className="btn btn-primary  mr-5  px-8">
                            Live
                          </button>
                        </Link>
                        <Link target="_blank" href={project.source}>
                          <button className="btn btn-primary  mr-5 px-8">
                            Code
                          </button>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </section>
  );
};

export default Project;
