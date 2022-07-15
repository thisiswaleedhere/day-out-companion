import React from "react";
import { AiOutlineGithub } from 'react-icons/ai';
import { CgWebsite } from 'react-icons/cg';
import { FaUmbrellaBeach } from "react-icons/fa";

const Footer = () => {

    return (
        <div className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 py-4 mt-4 min-w-[350px]">
            <div>

                <div className="flex justify-center text-center font-light font-Josefin text-2xl text-gray-50"><div className="pr-2"><FaUmbrellaBeach /></div><div>Day Out Companion</div></div>
            </div>

            <hr className="h-0.5 w-2/3 mx-auto bg-gray-400 mt-2 mb-4" />
            <div className="text-center text-xs font-Josefin text-gray-100">Made by MW </div>
            <div className="flex justify-center space-x-4 mt-1 text-gray-100">
                <div><AiOutlineGithub /></div>
                <div><CgWebsite /></div>
            </div>


        </div>

    )
}

export default Footer;