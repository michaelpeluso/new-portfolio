import DesktopNav from "./DesktopNav";
import Footer from "./Footer";
import MobileNav from "./MobileNav";

import { LinkedInLogoIcon } from "@radix-ui/react-icons";
import { SiGithub, SiHandshake } from "react-icons/si";
import { FaEnvelope, FaFileAlt } from "react-icons/fa";

const pageItems = [
    { name: "Home", path: "/" },
    //{ name: "About", path: "/about" },
    { name: "Portfolio", path: "/portfolio" },
    { name: "Career", path: "/career" },
    //{ name: "Shelf", path: "/shelf" },
];

const infoItems = [
    { name: "LinkedIn", icon: <LinkedInLogoIcon className="w-4 h-4 lg:w-5 lg:h-5" />, path: "https://www.linkedin.com/in/michaelpeluso5/" },
    { name: "Github", icon: <SiGithub />, path: "https://github.com/michaelpeluso" },
    { name: "Handshake", icon: <SiHandshake />, path: "https://njit.joinhandshake.com/profiles/bdzs5d" },
    { name: "Contact", icon: <FaEnvelope />, path: "mailto:mfpel29@gmail.com" },
    { name: "Resume", icon: <FaFileAlt />, path: "/Michael_Peluso_Resume.pdf" },
];

const Nav = () => {
    return (
        <>
            <div className="hidden md:block">
                <DesktopNav pageItems={pageItems} infoItems={infoItems} />
            </div>
            <div className="block md:hidden">
                <MobileNav pageItems={pageItems} infoItems={infoItems} />
            </div>

            <Footer pageItems={pageItems} infoItems={infoItems} />
        </>
    );
};

export default Nav;
