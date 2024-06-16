import React from "react";
import FooterLogo from "../../assets/logo.png";
import {
  FaFacebook,
  FaInstagram,
  FaTiktok,
  FaLocationArrow,
  FaMobileAlt,
} from "react-icons/fa";
import NatureVid from "../../assets/video/footer.mp4";
import { Link } from "react-router-dom";

const FooterLinks = [
  {
    title: "דף הבית",
    link: "/",
  },
  {
    title: "אודות",
    link: "/about",
  },
  {
    title: "מומלצים",
    link: "/best-places",
  },
  {
    title: "Blogs",
    link: "/blogs",
  },
];

const Footer = () => {
  return (
    <>
      <div className=" dark:bg-gray-950 py-10 relative overflow-hidden">
        <video
          autoPlay
          loop
          muted
          className="absolute right-0 top-0 h-full overflow-hidden w-full object-cover z-[-1]"
        >
          <source src={NatureVid} type="video/mp4" />
        </video>
        <div dir="rtl" className="container">
          <div className="grid md:grid-cols-3 py-5 bg-white/80 backdrop-blur-sm rounded-t-xl">
            <div className="py-8 px-4">
              <h1 className="flex items-center gap-3 text-xl sm:text-3xl font-bold text-justify sm:text-left">
                <img src={FooterLogo} alt="" className="max-h-[60px]" />
                {/* TravelloGo */}
              </h1>
              <p className="text-sm">
              צור איתנו קשר כדי לשריין את מקומך עכשיו
              </p>
              <br />
              <div className="flex items-center gap-3 ">
                <FaLocationArrow />
                <p>משרדנו ממוקם ליד ונילה,טמרה</p>
              </div>
              <div className="flex items-center gap-3 mt-3">
                <FaMobileAlt />
                <a href="http://wa.me/+9720524296572">0524296572</a>
                <a href="http://wa.me/+9720552687587">0552687587</a>
                
              </div>
              {/* social handles */}
              <div>
                <div className="flex items-center gap-3 mt-6">
                  <a href="https://www.instagram.com/teletravel48/">
                    <FaInstagram className="text-3xl" />
                  </a>
                  <a href="https://www.facebook.com/teletravel48">
                    <FaFacebook className="text-3xl" />
                  </a>
                  <a href="https://www.tiktok.com/@tele.travel">
                    <FaTiktok className="text-3xl" />
                  </a>
                </div>
              </div>
            </div>
            <div dir="rtl" className="grid grid-cols-2 sm:grid-cols-3 col-span-2 md:pl-10">
              <div>
                <div className="py-8 px-4">
                
                  <ul className="flex flex-col gap-3">
                    {FooterLinks.map((link) => (
                      <li className="cursor-pointer hover:translate-x-1 duration-300 hover:!text-primary space-x-1 text-gray-700 dark:text-gray-200">
                        <Link
                          to={link.link}
                          onClick={() => window.scrollTo(0, 0)}
                        >
                          <span>&#11162;</span>
                          <span>{link.title}</span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            
              <div>
                
              </div>
            </div>
          </div>
          <div>
            
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
