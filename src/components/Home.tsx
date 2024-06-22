import { pages } from "../types";
import { useMediaQuery } from "usehooks-ts";
import ActionButton from "./ActionButton";
import Carousel from "./Carousel";
import AnchorLink from "react-anchor-link-smooth-scroll";
import RivaTextPrimary from "../assets/riva-text-primary.png";
import RivaAthlete from "../assets/athlete.png";
import { motion } from "framer-motion";

type HomeProps = {
  setSelectedPage: (value: pages) => void;
};

const Home = ({ setSelectedPage }: HomeProps) => {
  const isAboveMediumScreens = useMediaQuery("(min-width:1060px)");

  return (
    <section id="home" className="gap-16 bg-gray-20 py-10 md:h-full md:pb-0">
      <motion.div
        className="mx-auto w-5/6 items-center justify-center md:flex md:h-5/6"
        onViewportEnter={() => setSelectedPage(pages.HOME)}
      >
        <div className="z-10 mt-32 md:basis-3/5">
          <motion.div
            className="md:-mt-20"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 },
            }}
          >
            <div className="relative">
              <div className="before:absolute before:-top-10 before:-left-10 before:z-[-1] md:before:content-rivatext">
                <img alt="home-page-text" src={RivaTextPrimary} />
              </div>
            </div>

            <p className="mt-8 text-sm">
              Welcome to Riva Gym! We offer a wide range of classes and benefits
              to help you achieve your fitness goals. Explore our website to
              learn more about our offerings and feel free to contact us if you
              have any questions. Get started on your fitness journey today!
            </p>
          </motion.div>

          {/* Buttons */}
          <motion.div
            className="mt-8 flex items-center gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 },
            }}
          >
            <ActionButton setSelectedPage={setSelectedPage}>
              Join Now
            </ActionButton>
            <AnchorLink
              className="text-sm font-bold text-primary-500 underline hover:text-secondary-500"
              onClick={() => setSelectedPage(pages.CONTACT)}
              href={`#${pages.CONTACT}`}
            >
              <p>Learn More</p>
            </AnchorLink>
          </motion.div>
        </div>

        {/* Athlete */}
        <div
          className="flex basis-3/5 justify-center md:z-10
              md:ml-40 md:mt-16 md:justify-items-end"
        >
          <img alt="home-pageGraphic" src={RivaAthlete} />
        </div>
      </motion.div>

      {/* Carousel for medium screens and above only */}
      {isAboveMediumScreens && <Carousel />}
    </section>
  );
};

export default Home;
