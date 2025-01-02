import { LucideIcon } from "lucide-react";

export type SiteConfig = {
  name: string;
  tagline: string;
  description: string;
};

export type Problem = {
  title: string;
  description: string;
};
export type Problems = Problem[];

export type FeatureItem = {
  icon: LucideIcon;
  title: string;
  description: string;
};

export type Review = {
  name: string;
  twitterhandle: string;
  review: string;
  rating: number;
  image: string;
};

export type Reviews = Review[];

export type FeatureSection = {
  title: string;
  description: string;
  list: FeatureItem[];
  src: string;
};

export type PricingSectionFeatures = string[];

export type FAQProps = {
  question: string;
  answer: string;
  value: string;
};

export type Product = {
  attributes: {
    buy_now_url: string;
  };
};

export type Products = {
  data: Product[];
};

export type ButtonProps = {
  onClick?: () => void;
  text: string;
  toolTipText?: string;
  redirect?: string;
};

export type BuiltWithRouteWise ={
  url: string;
  title: string;
  description:string;
  image: string;
}
