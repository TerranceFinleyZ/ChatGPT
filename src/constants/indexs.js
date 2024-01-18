import {
    RxCrop,
    RxDesktop,
    RxPencil2,
    RxReader,
    RxRocket,
    RxAccessibility,
  } from "react-icons/rx";

import { BiDna } from "react-icons/bi";
import { IoEarthOutline } from "react-icons/io5";
import { FaBalanceScale } from "react-icons/fa";
  
  import SpaceCity1 from "../assests/SpaceCity1.jpg";

import Tech from '@/app/Tech/page';
import Poli from "@/app/Poli/page";
import Sos from '@/app/Sos/page';




  
  export const MissionData = [
    {
      link: '/Tech',
      app: Tech,
      icon: BiDna,
      title: "Technology",
      content: 'Exploring the Role of Technology in Achieving Our Objectives.',
      backgroundImage: SpaceCity1,
    },
    {
      link: '/Sos',
      app: Sos,
      icon: IoEarthOutline,
      title: "Society",
      content: "Constructively Molding Society for a Brighter and More Prosperous Future.",
      backgroundImage: SpaceCity1,
    },
    {
      link: '/Poli',
      app: Poli,
      icon: FaBalanceScale,
      title: "Politics",
      content: "In the Realm of Politics: Which Guidelines do We Adhere To?",
      backgroundImage: SpaceCity1,
    },
  ];