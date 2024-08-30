import React from "react";
import { Link } from "react-router-dom";
import { Logo } from "../index";
import icons from "../../assets/index";

function Footer() {
  return (
    <section>
      <div className="w-full h-fit grid grid-cols-[60%_1fr_1fr] gap-4 py-6 border-t-8 border-accent-red">
        <div className="pl-20">
          <div>
            <div className="px-6 flex items-center gap-6">
              <Logo />
              <div>
                <h1 className="text-2xl font-bold">React Blog App</h1>
                <p className="text-left pt-2 text-xs">
                  &#xb7; &copy; 2024 &#xb7; All rights reserved &#xb7;
                </p>
              </div>
            </div>
          </div>
          <div>
            <ul className="flex gap-8 py-8">
              {icons.map((item, index) => (
                <li
                  key={index}
                  className="w-8 aspect-square border rounded-full border-accent-orange"
                >
                  <a href={item.link} target="_blank" rel="noopener noreferrer">
                    <img src={item.image} alt="social-logo" className="p-2" />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="w-full p-6">
          <div className="h-full text-left">
            <h3 className=" tracking-px mb-9  text-xs font-semibold uppercase text-accent-red">
              Support
            </h3>
            <ul>
              <li className="mb-4">
                <Link
                  className="text-base font-medium text-accent-orange hover:text-accent-red"
                  to="/"
                >
                  Account
                </Link>
              </li>
              <li className="mb-4">
                <Link
                  className="text-base font-medium text-accent-orange hover:text-accent-red"
                  to="/"
                >
                  Help
                </Link>
              </li>
              <li className="mb-4">
                <Link
                  className="text-base font-medium text-accent-orange hover:text-accent-red"
                  to="/"
                >
                  Contact Us
                </Link>
              </li>
              <li>
                <Link
                  className="text-base font-medium text-accent-orange hover:text-accent-red"
                  to="/"
                >
                  Customer Support
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="w-full p-6">
          <div className="h-full text-left">
            <h3 className="tracking-px mb-9  text-xs font-semibold uppercase text-accent-red">
              Legals
            </h3>
            <ul>
              <li className="mb-4">
                <Link
                  className="text-base font-medium text-accent-orange hover:text-accent-red"
                  to="/"
                >
                  Terms &amp; Conditions
                </Link>
              </li>
              <li className="mb-4">
                <Link
                  className="text-base font-medium text-accent-orange hover:text-accent-red"
                  to="/"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  className="text-base font-medium text-accent-orange hover:text-accent-red"
                  to="/"
                >
                  Licensing
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Footer;
