import YouTubeLogo from "./../../assets/youtube.png";
import LinkedListLogo from "./../../assets/linkedin.png";
import GitHubLogo from "./../../assets/github.png";
import GmailLogo from "./../../assets/gmail.png";
import GFGLogo from "./../../assets/gfg.png";
import UdemyLogo from "./../../assets/udemy.png";
import LeetCodeLogo from "./../../assets/leetcode.webp";
import { Link } from "react-router-dom";
import { FaResearchgate } from "react-icons/fa";


const SocialLinks = () => {
    return (
        <>
            <div className="flex flex-wrap gap-2 items-center">
                <Link rel="noopener noreferrer" target="_blank" to="https://www.linkedin.com/in/md-amanat-ullah-arman/" className=" bg-[#0277b530] p-2 rounded-2xl">
                    <img className="object-cover w-[28px] h-[28px] hover:cursor-pointer" src={LinkedListLogo} alt="LinkedList" />
                </Link>
                <Link rel="noopener noreferrer" target="_blank" to="https://github.com/amanat003" className="bg-[#00000025] p-2 rounded-2xl">
                    <img className="object-cover w-[28px] h-[28px] hover:cursor-pointer" src={GitHubLogo} alt="github" />
                </Link>
                <Link rel="noopener noreferrer" target="_blank" to="mailto:mdamanat99@gmail.com" className="bg-[#f4433630] p-2 rounded-2xl">
                    <img className="object-cover w-[28px] h-[28px] hover:cursor-pointer" src={GmailLogo} alt="gmail" />
                </Link>
                <Link rel="noopener noreferrer" target="_blank" to="https://leetcode.com/Md_Amanat_Ullah_Arman/" className="bg-[#00000020] p-2 rounded-2xl">
                    <img className="object-cover w-[28px] h-[28px] hover:cursor-pointer" src={LeetCodeLogo} alt="leetcode" />
                </Link>
                <Link rel="noopener noreferrer" target="_blank" to="https://www.researchgate.net/profile/Md-Amanat-Ullah-Arman" className="bg-[#2c8e4430] p-2 rounded-2xl">
                    <span className="object-cover w-[28px] h-[28px] hover:cursor-pointer">
                        <FaResearchgate className=" w-[28px] h-[28px]"></FaResearchgate>
                    </span>
                </Link>
            </div>
        </>
    );
};

export default SocialLinks;