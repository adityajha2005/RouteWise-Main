import { Zap, Rocket, Layers, PenTool, Sliders, Package } from "lucide-react";

import {
  SiteConfig,
  FeatureSection,
  FAQProps,
  Problems,
  Reviews,
  PricingSectionFeatures,
  BuiltWithRouteWise,
} from "@/types";




export const pricingSectionFeatures: PricingSectionFeatures = [
  "🚀 Unlimited Plans : No Limit to number of credits",
  "🎨 Hassle-free and Latest LLM-based roadmaps",
  "⚡ Performance Optimized: Seamless, Real-time Roadmap Generation Using Advanced AI Algorithms",
  "🔧 Code-Free Customization: Tailor Your Roadmaps Without Technical Hassles",
];
export const FAQList: FAQProps[] = [
  {
    question: "What makes Routewise different from other roadmap tools?",
    answer:
      "Routewise uses AI-driven algorithms to generate personalized roadmaps for your projects, automatically adapting to industry trends and evolving user inputs.",
    value: "item-1",
  },
  {
    question: "Who can benefit from using Routewise?",
    answer:
      "Routewise is perfect for startups, product managers, project teams, and organizations looking to streamline their project planning and keep up with fast-changing industry demands.",
    value: "item-2",
  },
  {
    question: "Is Routewise easy to use for beginners?",
    answer:
      "Yes! Routewise offers an intuitive user interface with simple prompts, making it accessible for both beginners and experienced project managers to create effective roadmaps.",
    value: "item-3",
  },
  
  {
    question: "Can Routewise help with prioritizing tasks in my roadmap?",
    answer:
      "Absolutely! Routewise not only generates roadmaps but also helps prioritize tasks by analyzing dependencies and potential bottlenecks to optimize workflow efficiency.",
    value: "item-4",
  },
];
export const siteConfigs: SiteConfig = {
  name: "Routewise",
  tagline: "Seamless Collaboration for Developers",
  description:
    "A real-time collaborative platform for developers, enabling efficient teamwork and innovation.",
};
export const footerConfig = {
  logo: "Routewise",
  brand: "Routewise",
  description: "Empowering developers to collaborate and innovate together.",
  sections: [
    {
      title: "Links",
      links: [
        // { text: "Features", href: "#features" },
        // { text: "Pricing", href: "#pricing" },
        { text: "Twitter", href: "https://x.com/adxtya_jha" },
        { text: "Contact", href: "mailto:2005@akjha.com" },
        { text: "Linkedin", href: "https://www.linkedin.com/in/aditya-jha-654800280/" },

      ],
    },
    {
      title: "Legal",
      links: [
        { text: "Terms of Service", href: "/tos" },
        { text: "Privacy Policy", href: "/privacy" },
      ],
    },
  ],
};


