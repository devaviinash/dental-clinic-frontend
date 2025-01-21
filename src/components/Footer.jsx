import React from "react";
import { Fade } from "react-awesome-reveal";

const Footer = () => {
  return (
    <footer className="px-4 bg-[#0A2540] text-white">
      <div className="container flex flex-col justify-between py-10 mx-auto space-y-8 lg:flex-row lg:space-y-0">
        <div className="lg:w-1/3">
          <a
            rel="noopener noreferrer"
            href="/"
            className="flex justify-center space-x-2 lg:justify-start"
          >
            <div className="flex items-center justify-center w-8 h-8 rounded-full bg-gray-100">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="30"
                height="30"
                fill="none"
              >
                <path
                  d="M9.19807 4.45825C8.55418 4.22291 7.94427 4 7 4C5 4 4 6 4 8.5C4 10.0985 4.40885 11.0838 4.83441 12.1093C5.0744 12.6877 5.31971 13.2788 5.5 14C5.649 14.596 5.7092 15.4584 5.77321 16.3755C5.92401 18.536 6.096 21 7.5 21C8.39898 21 8.79286 19.5857 9.22652 18.0286C9.75765 16.1214 10.3485 14 12 14C13.6515 14 14.2423 16.1214 14.7735 18.0286C15.2071 19.5857 15.601 21 16.5 21C17.904 21 18.076 18.536 18.2268 16.3755C18.2908 15.4584 18.351 14.596 18.5 14C18.6803 13.2788 18.9256 12.6877 19.1656 12.1093C19.5912 11.0838 20 10.0985 20 8.5C20 6 19 4 17 4C16.0557 4 15.4458 4.22291 14.8019 4.45825C14.082 4.72136 13.3197 5 12 5C10.6803 5 9.91796 4.72136 9.19807 4.45825Z"
                  stroke="blue"
                  strokeWidth="1"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <Fade>
              <span className="self-center text-2xl font-bold">DentRW</span>
            </Fade>
          </a>
        </div>

        <div className="text-slate-400 grid grid-cols-2 text-sm gap-x-3 gap-y-8 lg:w-2/3 sm:grid-cols-4">
          <div className="space-y-3 ">
            <h3 className="dark:text-gray-50 font-semibold">SERVICES</h3>
            <ul className="space-y-1">
              <li>
                <a className="hover:underline hover:text-gray-300">X-rays</a>
              </li>
              <li>
                <a className="hover:underline hover:text-gray-300">Filling</a>
              </li>
              <li>
                <a className="hover:underline hover:text-gray-300">Implants</a>
              </li>
              <li>
                <a className="hover:underline hover:text-gray-300">Cleaning</a>
              </li>
              <li>
                <a className="hover:underline hover:text-gray-300">
                  Restoration
                </a>
              </li>
              <li>
                <a className="hover:underline hover:text-gray-300">
                  Consultation
                </a>
              </li>
            </ul>
          </div>
          <div className="space-y-3">
            <h3 className="dark:text-gray-50 font-semibold">COMPANY</h3>
            <ul className="space-y-1">
              <li>
                <a className="hover:underline hover:text-gray-300">Team</a>
              </li>
              <li>
                <a className="hover:underline hover:text-gray-300">Privacy</a>
              </li>
              <li>
                <a className="hover:underline hover:text-gray-300">About us</a>
              </li>
              <li>
                <a className="hover:underline hover:text-gray-300">
                  Terms & Conditions
                </a>
              </li>
            </ul>
          </div>
          <div className="space-y-3">
            <h3 className="dark:text-gray-50 font-semibold">HELP DESK</h3>
            <ul className="space-y-1">
              <li>
                <a className="hover:underline hover:text-gray-300">FAQS</a>
              </li>
              <li>
                <a className="hover:underline hover:text-gray-300">Pricing</a>
              </li>
              <li>
                <a className="hover:underline hover:text-gray-300">Booking</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="flex justify-between items-center py-6 px-1 border-t border-gray-700 text-sm text-gray-400">
        <p>
          &copy; {new Date().getFullYear()} Guru Nanak Dental. <br /> All rights
          reserved.
        </p>
        <p>
          Developed by{" "}
          <a
            href="https://wa.me/919970933226?text=Hi,%20I%20found%20you%20through%20Guru%20Nank%20Dental%20website%20and%20would%20like%20to%20request%20an%20appointment."
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 transition-colors duration-300"
          >
            Avinash Chavan
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
