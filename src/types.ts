export enum pages {
  HOME = "home",
  BENEFITS = "benefits",
  CLASSES = "classes",
  CONTACT = "contact",
}
export type carouselItemType = {
  image: string;
  alt: string;
};

export type BenefitType = {
  title: string;
  description: string;
  Icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
};

export type ClassType = {
  name: string;
  description: string;
  image: string;
};
