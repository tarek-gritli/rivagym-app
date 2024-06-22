import { BenefitType, ClassType, carouselItemType } from "./types";
import {
  HomeModernIcon,
  UserGroupIcon,
  AcademicCapIcon,
} from "@heroicons/react/24/solid";
import abdos from "./assets/abdos.jpg";
import yoga from "./assets/yoga.jpg";
import bodypump from "./assets/lesmills-bodypump.jpg";
import bodycombat from "./assets/lesmills-bodycombat.jpg";
import pilates from "./assets/pilate.jpg";
import zumba from "./assets/zumba.jpg";
import caf from "./assets/caf.jpg";
import crossfit from "./assets/crossfit.jpg";
import danceOrientale from "./assets/dance-orientale.jpeg";
import rpm from "./assets/lesmills-rpm.jpg";
import olympia from "./assets/olympia_logo.png";
import ifbb from "./assets/ifbb.svg";
import npc from "./assets/npc.svg";
import nabba from "./assets/nabba.png";
import arnoldClassic from "./assets/arnold_classic.png";

export const classes: ClassType[] = [
  {
    name: "Abdos",
    description:
      "Target your abdominal muscles with our focused Abdos class, designed to strengthen your core and improve overall stability.",
    image: abdos,
  },
  {
    name: "Yoga",
    description:
      "Find your inner peace and improve flexibility with our Yoga classes, suitable for all levels.",
    image: yoga,
  },
  {
    name: "BodyPump",
    description:
      "Boost your strength and endurance with Les Mills BodyPump, a high-energy weight training class.",
    image: bodypump,
  },
  {
    name: "Zumba",
    description:
      "Dance your way to fitness with Zumba, a fun and energetic class inspired by Latin dance moves.",
    image: zumba,
  },
  {
    name: "CAF",
    description:
      "CAF (Cuisses-Abdos-Fessiers) targets thighs, abs, and buttocks for a toned lower body.",
    image: caf,
  },
  {
    name: "CrossFit",
    description:
      "Challenge your limits with CrossFit, a high-intensity functional fitness program.",
    image: crossfit,
  },
  {
    name: "Dance Orientale",
    description:
      "Experience the rhythms and movements of Dance Orientale, a class focused on Middle Eastern dance styles.",
    image: danceOrientale,
  },
  {
    name: "RPM",
    description:
      "Les Mills RPM is an indoor cycling class, simulating various terrains for a challenging ride.",
    image: rpm,
  },
  {
    name: "BodyCombat",
    description:
      "Les Mills BodyCombat combines martial arts and high-energy moves for a powerful cardio workout.",
    image: bodycombat,
  },
  {
    name: "Pilate",
    description:
      "Improve your flexibility, strength, and balance with our Pilate classes, focusing on controlled movements.",
    image: pilates,
  },
];

export const benefits: BenefitType[] = [
  {
    title: "State-of-the-Art Equipment",
    Icon: HomeModernIcon,
    description:
      "Our gym is equipped with the latest fitness machines and tools to ensure you have the best workout experience possible.",
  },
  {
    title: "Community Focused",
    Icon: UserGroupIcon,
    description:
      "Join a community of fitness enthusiasts who support and motivate each other to reach their fitness goals.",
  },
  {
    title: "Expert Guidance",
    Icon: AcademicCapIcon,
    description:
      "Benefit from the knowledge and experience of our certified trainers who are here to guide you every step of the way.",
  },
];

export const carouselItems: carouselItemType[] = [
  {
    image: olympia,
    alt: "Mr. Olympia Logo",
  },
  {
    image: arnoldClassic,
    alt: "Arnold Classic Logo",
  },
  {
    image: npc,
    alt: "NPC Logo",
  },
  {
    image: nabba,
    alt: "NABBA Logo",
  },
  {
    image: ifbb,
    alt: "IFBB Logo",
  },
];
