import AnchorLink from "react-anchor-link-smooth-scroll";
import { pages } from "../types";

type LinkProps = {
  page: string;
  selectedPage: pages;
  setSelectedPage: (value: pages) => void;
};
const Link = ({ page, selectedPage, setSelectedPage }: LinkProps) => {
  return (
    <AnchorLink
      className={`${
        selectedPage === page.toLowerCase() ? "text-primary-500" : ""
      } transition duration-500 hover:text-primary-500`}
      href={`#${page.toLowerCase()}`}
      onClick={() => setSelectedPage(page.toLowerCase() as pages)}
    >
      {page}
    </AnchorLink>
  );
};

export default Link;
