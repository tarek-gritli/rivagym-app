import { BenefitType } from "../types";
import { motion } from "framer-motion";

const childVariant = {
  hidden: {
    opacity: 0,
    scale: 0.9,
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
    },
  },
};

const Benefit = ({ Icon, title, description }: BenefitType) => {
  return (
    <motion.div variants={childVariant} className="flex flex-col items-center">
      <Icon className="h-12 w-12 text-blue-500" />
      <h3 className="text-xl font-bold my-4">{title}</h3>
      <p className="text-center font-montserrat">{description}</p>
    </motion.div>
  );
};

export default Benefit;
