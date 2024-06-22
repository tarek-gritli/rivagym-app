import { motion } from "framer-motion";
import { ClassType } from "../types";

const Class = ({ name, description, image }: ClassType) => {
  return (
    <motion.div
      className="flex flex-col items-center space-y-4"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <img
        src={image}
        alt={name}
        className="w-48 h-48 object-cover rounded-full"
      />
      <h3 className="text-2xl font-bold font-montserrat">{name}</h3>
      <p className="text-center font-montserrat">{description}</p>
    </motion.div>
  );
};

export default Class;
