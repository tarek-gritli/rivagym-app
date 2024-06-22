import Logo from "../assets/riva-logo.png";
const Footer = () => {
  return (
    <footer>
      <div className="p-10 justify-content mx-auto w-5/6 gap-16 md:flex">
        <div className="mt-16 basis-1/2 md:mt-0">
          <img alt="logo" src={Logo} />
          <p className="my-5">
            Riva Gym is dedicated to providing our members with the best fitness
            experience possible. Our state-of-the-art facilities and expert
            trainers ensure you reach your fitness goals.
          </p>
          <p>© RivaGym 2022. All Rights Reserved.</p>
        </div>
        <div className="mt-16 basis-1/4 md:mt-0">
          <h4 className="font-bold">Links</h4>
          <p className="my-5">
            <a
              href="https://www.facebook.com/rivagymbardo"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              Facebook
            </a>
          </p>
          <p className="my-5">
            <a
              href="https://www.instagram.com/rivagymclub/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              Instagram
            </a>
          </p>
        </div>
        <div className="mt-16 md:mt-0 md:w-1/4">
          <h4 className="font-bold text-gray-800 mb-2">Contact Us</h4>
          <p className="text-sm leading-relaxed">
            For any inquiries or assistance, feel free to reach out to us.
          </p>
          <p className="mt-2 text-xs text-gray-600">Phone: 56 051 550</p>
          <p className="mt-2 text-xs text-gray-600">
            Email: Rivagymclub@gmail.com
          </p>
          <p className="mt-2 text-xs text-gray-600">
            Address: Rue de l'aérobic, le Bardo 2, Tunis, Tunisia 2000
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
