import React from "react";
import {
  FaDribbble,
  FaFacebook,
  FaInstagram,
  FaGithub,
  FaTwitter,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="max-w-[1240px] mx-auto py-16 px-4 grid lg:grid-cols-3 gap-8 text-gray-300">
      <div>
        <h1 className="w-full text-3xl font-bold text-[#00df9a]">REACT.</h1>
        <p className="py-4">
          Unlock insights, drive growth. Empowering businesses with data-driven
          decisions. Simplifying analytics and management for success. Your
          partner in harnessing the power of data.
        </p>
        <div className="flex justify-between md:w-[75%] my-6">
          <FaFacebook size={30} className="hover:scale-110 duration-200 hover:cursor-pointer"/>
          <FaInstagram size={30} className="hover:scale-110 duration-200 hover:cursor-pointer"/>
          <FaTwitter size={30} className="hover:scale-110 duration-200 hover:cursor-pointer"/>
          <FaGithub size={30} className="hover:scale-110 duration-200 hover:cursor-pointer"/>
          <FaDribbble size={30} className="hover:scale-110 duration-200 hover:cursor-pointer"/>
        </div>
      </div>
      <div className="lg:col-span-2 flex justify-between mt-4">
        <div>
          <h6 className="font-medium text-gray-400">Solutions</h6>
          <ul>
            <li className="py-2 text-sm hover:text-gray-600 hover:cursor-pointer">
              Analytics
            </li>
            <li className="py-2 text-sm hover:text-gray-600 hover:cursor-pointer">
              Marketing
            </li>
            <li className="py-2 text-sm hover:text-gray-600 hover:cursor-pointer">
              Commerce
            </li>
            <li className="py-2 text-sm hover:text-gray-600 hover:cursor-pointer">
              Insights
            </li>
          </ul>
        </div>
        <div>
          <h6 className="font-medium text-gray-400">Support</h6>
          <ul>
            <li className="py-2 text-sm hover:text-gray-600 hover:cursor-pointer">
              Pricing
            </li>
            <li className="py-2 text-sm hover:text-gray-600 hover:cursor-pointer">
              Documentation
            </li>
            <li className="py-2 text-sm hover:text-gray-600 hover:cursor-pointer">
              Guides
            </li>
            <li className="py-2 text-sm hover:text-gray-600 hover:cursor-pointer">
              API Status
            </li>
          </ul>
        </div>
        <div>
          <h6 className="font-medium text-gray-400">Company</h6>
          <ul>
            <li className="py-2 text-sm hover:text-gray-600 hover:cursor-pointer">
              About
            </li>
            <li className="py-2 text-sm hover:text-gray-600 hover:cursor-pointer">
              Blog
            </li>
            <li className="py-2 text-sm hover:text-gray-600 hover:cursor-pointer">
              Press
            </li>
            <li className="py-2 text-sm hover:text-gray-600 hover:cursor-pointer">
              Careers
            </li>
            <li className="py-2 text-sm hover:text-gray-600 hover:cursor-pointer">
              Jobs
            </li>
          </ul>
        </div>
        <div>
          <h6 className="font-medium text-gray-400">Legal</h6>
          <ul>
            <li className="py-2 text-sm hover:text-gray-600 hover:cursor-pointer">
              Claim
            </li>
            <li className="py-2 text-sm hover:text-gray-600 hover:cursor-pointer">
              Policy
            </li>
            <li className="py-2 text-sm hover:text-gray-600 hover:cursor-pointer">
              Terms
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
