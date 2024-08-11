import {FaCss3,  FaGithub, FaDocker, FaHtml5, FaNodeJs, FaReact, } from 'react-icons/fa';
import { TbBrandVscode } from "react-icons/tb";
import {
  SiExpress,
  SiJavascript,
  SiMongodb,
  SiTailwindcss,

} from 'react-icons/si';
import { FaJava, FaPython } from "react-icons/fa";
import { TbBrandCpp } from "react-icons/tb";
import { GrOracle } from "react-icons/gr";

export const skillset = [
  {
    name: '',
    items: [
      {
        label: 'Javascipt',
        icon: <SiJavascript color="#E9D54B" className="text-[48px] sm:text-[64px]" />,
        expirience: "Expert",
      },
      {
        label: 'C++',
        icon: <TbBrandCpp color="#2F75C0" className="text-[48px] sm:text-[64px]" />,
        expirience: "Expert",
      },
      {
        label: 'Java Core',
        icon: <FaJava color="#2F75C0" className="text-[48px] sm:text-[64px]" />,
        expirience: "Proficient",
      },
      {
        label: 'Python',
        icon: <FaPython color="#2F75C0" className="text-[48px] sm:text-[64px]" />,
        expirience: "Proficient",
      },

    ],
  },
  {
    name: 'Front-End',
    items: [
      {
        label: 'React',
        icon: <FaReact color="#5ED4F4" className="text-[48px] sm:text-[64px]" />,
        expirience: "Expert",
      },
      {
        label: 'HTML5',
        icon: <FaHtml5 color="#DE4B25" className="text-[48px] sm:text-[64px]" />,
        expirience: "Expert",
      },
      {
        label: 'CSS3',
        icon: <FaCss3 color="#2873BC" className="text-[48px] sm:text-[64px]" />,
        expirience: "Expert",
      },
      {
        label: 'Tailwind',
        icon: <SiTailwindcss color="#3FBDCC" className="text-[48px] sm:text-[64px]" />,
        expirience: "Proficient",
      },
    ],
  },
  {
    name: 'Back-End',
    items: [
      {
        label: 'Node.js',
        icon: <FaNodeJs color="#86cf35" className="text-[48px] sm:text-[64px]" />,
        expirience: "Novice",
      },
      {
        label: 'Express',
        icon: <SiExpress color="#818283" className="text-[48px] sm:text-[64px]" />,
        expirience: "Novice",
      },
      {
        label: 'MongoDB',
        icon: <SiMongodb color="#2c913f" className="text-[48px] sm:text-[64px]" />,
        expirience: "Novice",
      },
    ],
  },
  {
    name: 'Others',
    items: [

      {
        label: 'Git and GitHub',
        icon: <FaGithub className="text-[48px] text-black light:text-black sm:text-[64px]" />,
        expirience: "Expert",
      },
      {
        label: 'VS Code',
        icon: <TbBrandVscode className="text-[48px] text-sky-800 light:text-black sm:text-[64px]" />,
        expirience: "Expert",
      },
      {
        label: 'Oracle',
        icon: <GrOracle className="text-[48px] text-red-600 light:text-black sm:text-[64px]" />,
        expirience: "Proficient",
      },
      {
        label: 'Docker',
        icon: <FaDocker className="text-[48px] text-sky-400 light:text-black sm:text-[64px]" />,
        expirience: "Novice",
      },
      
    ],
  },
];
