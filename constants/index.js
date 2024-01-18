import {
    RxCrop,
    RxDesktop,
    RxPencil2,
    RxReader,
    RxRocket,
    RxAccessibility,
  } from "react-icons/rx";
  
  import SpaceCity1 from "../assests/SpaceCity1.jpg";
  import SpaceCity5 from "../assests/SpaceCity5.jpeg";
  import SpaceCity6 from "../assests/SpaceCity6.jpeg";
  import SpaceCity7 from "../assests/SpaceCity7.jpeg";
  import SpaceCity8 from "../assests/SpaceCity8.jpeg";
  import SpaceCity9 from "../assests/SpaceCity9.jpeg";
import Aichat from '@/app/Aichat/page';
import Exect from "@/app/Exect/page";
import Shop from "@/app/Shop/page";
import Echos from "@/app/Echos/page";
import Future from "@/app/Future/page";
import News from '@/app/News/page';



  
  export const ServiceData = [
    {
      link: '/Aichat',
      app: Aichat,
      icon: RxCrop,
      title: "Artificial Intelligence",
      content: "Research with open sources, chat-GPT-AI",
      backgroundImage: SpaceCity9,
    },
    {
      link: '/Exect',
      app: Exect,
      icon: RxPencil2,
      title: "Executive Dashboard",
      content: "Acknowledge and appreciate our loyal Founders & Executives.",
      backgroundImage: SpaceCity1,
    },
    {
      link: '/Shop',
      app: Shop,
      icon: RxDesktop,
      title: "Shop",
      content: "Invest in the Imperial work and get products not offered to the uninitiated.",
      backgroundImage: SpaceCity6,
    },
    {
      link: '/Echos',
      app: Echos,
      icon: RxReader,
      title: "Echos",
      content: "Our Mission.",
      backgroundImage: SpaceCity7,
    },
    {
      link: '/Future',
      app: Future,
      icon: RxAccessibility,
      title: "Future Endeavors",
      content: "Exploring the projects and theoretical ideas currently under development by the Imperial-Order, all aimed at advancing the welfare of humanity.",
      backgroundImage: SpaceCity5,
    },
    {
      link: '/News',
      app: News,
      icon: RxRocket,
      title: "Crypto",
      content: "Get up to date.",
      backgroundImage: SpaceCity8,
    },
  ];