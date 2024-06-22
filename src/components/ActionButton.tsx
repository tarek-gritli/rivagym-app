import AnchorLink from "react-anchor-link-smooth-scroll";
import { pages } from "../types";

type ActionButtonProps = {
  setSelectedPage: (value: pages) => void;
  children: React.ReactNode;
};

const ActionButton = ({ children, setSelectedPage }: ActionButtonProps) => {
  return (
    <AnchorLink
      className="rounded-md bg-secondary-500 px-10 py-2 hover:bg-primary-500 text-white"
      onClick={() => setSelectedPage(pages.CONTACT)}
      href={`#${pages.CONTACT}`}
    >
      {children}
    </AnchorLink>
  );
};

export default ActionButton;
