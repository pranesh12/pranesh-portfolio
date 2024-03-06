import Image from "next/image";
import ok from "../../../public/asset/ok.webp";
import Link from "next/link";

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
            <div className="mt-2">
              <p>
                A passionate web app developer focoused on creating interactive,
                scalable,responsive web application.
              </p>
            </div>

            <div className="flex content-center gap-5 mt-5  justify-center md:justify-start ">
              <Link href="/#projects">
                <button className="btn  btn-primary ">See my work</button>
              </Link>
              <Link
                href="https://drive.google.com/file/d/1Rlg15gSs-Z8oBNSWpXB-HaE1-tDXUk0W/view?usp=drive_link"
                target="_blank"
              >
                <button className="btn btn-outline btn-primary">
                  View Resume
                </button>
              </Link>
            </div>
          </div>
        </div>
        <div className="md:w-1/2 pt-6 md:pt-0 ">
          <Image src={ok} />
        </div>
      </div>
    </div>
  );
};

export default Hero;
