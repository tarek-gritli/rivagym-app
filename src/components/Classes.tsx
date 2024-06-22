import { motion } from "framer-motion";
import { pages } from "../types";
import Class from "./Class";
import { classes } from "../data";

type ClassesProps = {
  setSelectedPage: (value: pages) => void;
};

const Classes = ({ setSelectedPage }: ClassesProps) => {
  return (
    <section id="classes" className="mx-auto min-h-full w-5/6 py-20">
      <motion.div onViewportEnter={() => setSelectedPage(pages.CLASSES)}>
        <motion.div
          className="flex flex-col justify-center items-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
        >
          <h2 className="text-4xl font-bold text-center mb-10 font-montserrat">
            Our Classes
          </h2>
          <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
            {classes.map((cls, index) => (
              <motion.div
                key={`${cls.name}-${index}`}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <Class {...cls} />
              </motion.div>
            ))}
          </div>
          <p className="mt-10 text-center text-lg">
            Learn more about our classes by visiting our &nbsp;
            <a
              href="https://www.facebook.com/photo.php?fbid=444209728474831&set=pb.100086574212686.-2207520000&type=3"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              Facebook page
            </a>
            .
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Classes;
