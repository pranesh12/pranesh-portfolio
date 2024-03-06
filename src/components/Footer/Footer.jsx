import { FaLinkedin } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { FaFacebook } from "react-icons/fa";
import { TbHexagonLetterP } from "react-icons/tb";
import { FaSquareGithub } from "react-icons/fa6";
import Link from "next/link";

const Footer = () => {
  return (
    <section className="mx-auto  ">
      <div id="contact" className="py-10   mx-auto max-w-6xl px-4 sm:px-6 ">
        <footer className="footer ">
          <aside className="mx-auto md:mx-0">
            <div className="text-3xl mx-auto md:mx-0">
              <TbHexagonLetterP />
            </div>

            <p>Thanks for visiting my portfolio I am currently open for work</p>
            {/* <p>Developed by Pranesh Chakma</p> */}
            <h5 className="mx-auto md:mx-0 font-medium">
              praneshchakama6@gmail.com
            </h5>
          </aside>
          <nav className="mx-auto md:mx-0 md:ml-auto ">
            <h6 className=" mx-auto font-bold uppercase tracking-wide ">
              Contact me
            </h6>
            <div className="grid grid-flow-col gap-4 text-xl">
              <Link
                href="https://www.facebook.com/profile.php?id=100010448315616"
                target="_blank"
              >
                <FaFacebook />
              </Link>
              <Link
                href="https://mail.google.com/mail/u/0/#inbox?compose=jrjtXJVBDsWnPMxfNfmSvlbngNBQzmCbwzQzbXkdQqRpNcRWjBpMhlbWzmQSBNMvFgSFQQSH"
                target="_blank"
              >
                <SiGmail />
              </Link>
              <Link
                href="https://www.linkedin.com/in/pranesh-chakma/"
                target="_blank"
              >
                <FaLinkedin />
              </Link>
              <a href="https://github.com/pranesh12" target="_blank">
                <FaSquareGithub />
              </a>
            </div>
          </nav>
        </footer>
      </div>
    </section>
  );
};

export default Footer;
