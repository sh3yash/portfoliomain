

import { SiTailwindcss, SiExpress} from 'react-icons/si';
import { FaHtml5, FaCss3, FaReact, FaPython } from "react-icons/fa";
import { TbBrandJavascript } from "react-icons/tb";

import smartFoodLogo from 'assets/images/smart-food.png';

import weatherAppLofo from 'assets/images/weather-app.png';
import porfolioLogo from '../../../public/logo.svg';

export interface Project {
  name: string;
  description: string;
  img: string;
  stack: JSX.Element[];
  url?: string;
  git?: string;
}



export const customProjects: Project[] = [


  {
    name: 'Shopify Clone',
    url: 'https://shopifyclone3.netlify.app/',
    description: `Develop an integrated payments gateway solution that seamlessly integrates with a website or
              application, enabling secure and efficient online transactions, payment processing, and seamless
              financial transactions between customers and businesses.`,
    img: porfolioLogo,
    stack: [
      <FaCss3 key="css" color='#5ED4F4' className="text-[28px]" />,
      <FaReact key="react" color="#5ED4F4" className="text-[28px]" />,
      <FaHtml5 key="html" color='#ffA500' className="text-[28px]" />,
      <SiTailwindcss key="tailwind" color="#3FBDCC" className="text-[28px]" />,
    ],
    git: 'https://github.com/sh3yash/Shopify_Clone',
  },

  {
    name: 'Clever-Minds',
    url: 'https://cleverminds.netlify.app/',
    description: `🍽️ Discover our CSS & React-powered food ordering site. Enjoy a visually appealing interface 
              to explore diverse local menus. Customize and securely order your favorites for prompt delivery. Elevate your
              dining experience with convenience and quality.`,
    img: porfolioLogo,
    stack: [
      <FaCss3 key="css" color='#5ED4F4' className="text-[28px]" />,
      <FaReact key="react" color="#5ED4F4" className="text-[28px]" />,
      <FaHtml5 key="html" color='#ffA500' className="text-[28px]" />,
    ],
    git: 'https://github.com/sh3yash/Clever-Minds',
  },

  {
    name: 'Razor Pay Clone',
    url: 'https://razorpayclonebyyash.netlify.app/#',
    description: `Streamline Payments with the Razorpay Clone! Experience seamless
     transactions and robust payment processing with our Razorpay clone built using React.js.
      Whether you're a business looking to manage payments, track transactions, or integrate
       multiple payment gateways, this solution provides all the tools you need. Simplify your
        financial operations and enhance customer experience with a modern, intuitive interface
         that ensures security and efficiency. 💳💼`,
    img: weatherAppLofo,
    stack: [
      <FaCss3 key="css" color='#5ED4F4' className="text-[28px]" />,
      <FaReact key="react" color="#5ED4F4" className="text-[28px]" />,
      <FaHtml5 key="html" color='#ffA500' className="text-[28px]" />,
    ],
    git: 'https://github.com/sh3yash/RazorPay-Clone',
  },
  
  {
    name: 'College Website',
    url: 'https://kmmgp.netlify.app/',
    description: `Design a college website to provide essential information, such as courses, faculty, admission details,
              events, and resources, ensuring a user-friendly experience for prospective students, current students,
              and staff members.`,
    img: porfolioLogo,
    stack: [
      <FaCss3 key="css" color='#5ED4F4' className="text-[28px]" />,
      <FaHtml5 key="html" color='#ffA500' className="text-[28px]" />,
      <TbBrandJavascript key="javascript" color="#FFFF00" className="text-[28px]" />,
    ],
    git: 'https://github.com/sh3yash/college-website',
  },    

  {
    name: 'Sahaay- Farmers One Stop Solution"',
    url: 'https://agriculturewebsite.netlify.app/',
    description: `Empowering Farmers with Cutting-edge Tools! Explore seed prices,
     stay informed with real-time weather updates, unlock government schemes, and more.
      Cultivate success with smarter farming practices at your fingertips. 🌱🚜 `,
    img: smartFoodLogo,
    stack: [
      <FaCss3 key="css" color='#5ED4F4' className="text-[28px]" />,
      <FaHtml5 key="html" color='#ffA500' className="text-[28px]" />,
      <TbBrandJavascript key="javascript" color="#FFFF00" className="text-[28px]" />,
    ],
    git: 'https://github.com/sh3yash/Sahaay',
  },
  

  {
    name: 'INTEGRATED PAYMENTS GATEWAY',
    url: 'https://payment4integration.netlify.app/',
    description: `Develop an integrated payments gateway solution that seamlessly integrates with a website or
              application, enabling secure and efficient online transactions, payment processing, and seamless
              financial transactions between customers and businesses.`,
    img: porfolioLogo,
    stack: [
      <FaCss3 key="css" color='#5ED4F4' className="text-[28px]" />,
      <FaHtml5 key="html" color='#ffA500' className="text-[28px]" />,
      <TbBrandJavascript key="javascript" color="#FFFF00" className="text-[28px]" />,
    ],
    git: 'https://github.com/sh3yash/payment-integration',
  },
  

  {
    name: 'Face Recognition Based Attendance System',

    description: `Design a Python-based face recognition attendance system for educational
            institutions and workplaces,enabling accurate and real-time tracking of individuals for
              efficient attendance management andrecord-keeping.`,
    img: porfolioLogo,
    stack: [
      <FaPython key="python" color="#5ED4F4" className="text-[28px]" />,
    ],
    git: 'https://github.com/sh3yash/',
  },  


  {
    name: 'ZimClothing',

    description: `Develop an integrated payments gateway solution that seamlessly integrates with a website or
              application, enabling secure and efficient online transactions, payment processing, and seamless
              financial transactions between customers and businesses.`,
    img: porfolioLogo,
    stack: [
      <SiExpress key="expressjs" color="#5ED4F4" className="text-[28px]" />,
      <SiTailwindcss key="tailwind" color="#3FBDCC" className="text-[28px]" />,
      <FaHtml5 key="html" color='#ffA500' className="text-[28px]" />,
    ],
    git: 'https://github.com/sh3yash/ZimClothing',
  },
  
  

];
