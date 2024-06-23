import { pages } from "../types";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import contactImage from "../assets/contact-image.jpg";

type ContactProps = {
  setSelectedPage: (value: pages) => void;
};

const Contact = ({ setSelectedPage }: ContactProps) => {
  const inputStyles = `mb-5 w-full rounded-lg bg-primary-300
  px-5 py-3 placeholder-white`;

  const {
    register,
    trigger,
    formState: { errors },
  } = useForm();

  const onSubmit = async (e: any) => {
    const isValid = await trigger();
    if (!isValid) {
      e.preventDefault();
    }
  };

  return (
    <section id="contact" className="mx-auto w-full p-24 bg-blue-20">
      <motion.div onViewportEnter={() => setSelectedPage(pages.CONTACT)}>
        <motion.div
          className="md:w-3/5 mb-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <h2 className="text-4xl font-bold text-primary-500">
            JOIN NOW TO GET IN SHAPE
          </h2>
          <p className="my-5 text-secondary-500">
            Ready to embark on your fitness journey? Join us and experience a
            transformative journey towards a healthier, fitter you. Our
            community and expert trainers are here to support you every step of
            the way.
          </p>
        </motion.div>

        <div className="flex flex-col md:flex-row justify-between gap-8">
          <motion.div
            className="basis-3/5"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            <form
              target="_blank"
              onSubmit={onSubmit}
              action={`https://formsubmit.co/${
                import.meta.env.VITE_MAIL_STRING
              }`}
              method="POST"
              className="p-8 bg-primary-100 rounded-lg shadow-lg"
            >
              <input
                className={inputStyles}
                type="text"
                placeholder="NAME"
                {...register("name", {
                  required: true,
                  maxLength: 100,
                })}
              />
              {errors.name && (
                <p className="text-secondary-500">
                  {errors.name.type === "required" && "Name field is required."}
                  {errors.name.type === "maxLength" &&
                    "Max length is 100 char."}
                </p>
              )}

              <input
                className={inputStyles}
                type="tel"
                placeholder="PHONE NUMBER"
                {...register("phone", {
                  required: true,
                  minLength: 8,
                  maxLength: 8,
                  pattern: /^[0-9\b]+$/,
                })}
              />
              {errors.phone && (
                <p className="text-secondary-500">
                  {errors.phone.type === "required" &&
                    "Phone number field is required."}
                  {errors.phone.type === "minLength" &&
                    "Phone number is too short."}
                  {errors.phone.type === "maxLength" &&
                    "Phone number is too long."}
                  {errors.phone.type === "pattern" && "Invalid phone number."}
                </p>
              )}

              <input
                className={inputStyles}
                type="email"
                placeholder="EMAIL"
                {...register("email", {
                  required: true,
                  pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                })}
              />
              {errors.email && (
                <p className="text-secondary-500">
                  {errors.email.type === "required" &&
                    "Email field is required."}
                  {errors.email.type === "pattern" && "Invalid email address."}
                </p>
              )}

              <textarea
                className={inputStyles}
                placeholder="MESSAGE"
                rows={4}
                {...register("message", {
                  required: true,
                  maxLength: 2000,
                })}
              />
              {errors.message && (
                <p className="text-secondary-500">
                  {errors.message.type === "required" &&
                    "Message field is required."}
                  {errors.message.type === "maxLength" &&
                    "Max length is 2000 char."}
                </p>
              )}

              <button
                type="submit"
                className="mt-5 rounded-lg bg-secondary-500 text-white px-4 sm:px-10 py-3 w-full transition duration-500 hover:bg-secondary-400"
              >
                SUBMIT
              </button>
            </form>
          </motion.div>

          <motion.div
            className="relative basis-2/5"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            <div className="w-full">
              <img
                className="w-full rounded-lg shadow-lg"
                alt="contact-us-image"
                src={contactImage}
              />
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Contact;
