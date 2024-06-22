import { pages } from "../types";
import { motion } from "framer-motion";
import Benefit from "./Benefit";
import { benefits } from "../data";

type BenefitsProps = {
  setSelectedPage: (value: pages) => void;
};
const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const Benefits = ({ setSelectedPage }: BenefitsProps) => {
  return (
    <section id="benefits" className="mx-auto min-h-full w-5/6 py-20">
      <motion.div onViewportEnter={() => setSelectedPage(pages.BENEFITS)}>
        <motion.div
          className="flex flex-col justify-center items-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={container}
        >
          <h2 className="text-4xl font-bold text-center mb-10 font-montserrat">
            Benefits
          </h2>
          <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
            {benefits.map((benefit, index) => (
              <Benefit key={index} {...benefit} />
            ))}
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Benefits;
