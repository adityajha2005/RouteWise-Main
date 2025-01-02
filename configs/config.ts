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

// export const siteConfigs: SiteConfig = {
//   name: "RouteWise",
//   tagline: "Build your Customized roadmap to success",
//   description:
//   "RouteWise is a Google-powered roadmap generator that helps you create a personalized learning roadmap for any technology.",
// };

// export const problems: Problems = [
//   {
//     title: "Overwhelmed by Learning Paths",
//     description:
//       "Too many resources and conflicting advice on where to start? RouteWise helps you cut through the noise with a structured, goal-oriented roadmap.",
//   },
//   {
//     title: "Unclear Skill Progression",
//     description:
//       "Confused about which skills to focus on and in what order? RouteWise organizes your learning into clear milestones to keep you on track.",
//   },
//   {
//     title: "Time Wasted on Trial and Error",
//     description:
//       "Spending endless hours figuring out what to learn next? RouteWise generates a tailored roadmap, so you can spend more time learning and less time planning.",
//   },
// ];

// export const routeWiseFeatures: FeatureSection[] = [
//   {
//     title: "Effortless Roadmap Generation",
//     description:
//       "Simplify the process of learning new technologies with just a few clicks.",
//     list: [
//       {
//         icon: Zap,
//         title: "No Prior Experience Needed",
//         description:
//           "Designed for learners at all levels—no technical background required.",
//       },
//       {
//         icon: Rocket,
//         title: "Instant Roadmaps",
//         description: "Generate a structured learning plan in minutes.",
//       },
//       {
//         icon: Layers,
//         title: "Easy Customization",
//         description:
//           "Tailor your roadmap to fit your goals using a simple JSON file.",
//       },
//     ],
//     src: "/images/roadmap_generation.jpg",
//   },
//   {
//     title: "Modern & Goal-Oriented",
//     description:
//       "Empower your learning journey with a visually appealing and user-friendly interface.",
//     list: [
//       {
//         icon: PenTool,
//         title: "Clarity and Focus",
//         description:
//           "A structured design that helps you prioritize skills effectively.",
//       },
//       {
//         icon: Sliders,
//         title: "Personalized Learning Paths",
//         description:
//           "Easily customize roadmaps to align with your unique learning goals.",
//       },
//       {
//         icon: Package,
//         title: "Ready-to-Use Templates",
//         description:
//           "Start your journey with pre-built roadmaps for popular technologies.",
//       },
//     ],
//     src: "/images/learning_path.png",
//   },
// ];


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
        { text: "Twitter", href: "https://twitter.com/Routewise" },
        { text: "Contact", href: "mailto:support@Routewise.com" },
        { text: "Linkedin", href: "mailto:support@Routewise.com" },

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


// // Testimonials of the product
// export const reviews: Reviews = [
//   {
//     name: "Manjesh",
//     rating: 5,
//     review:
//       "This template is a game-changer. It saves a lot of Development time.",
//     image: "/images/manjesh.jpg",
//     twitterhandle: "https://x.com/manjesh_webdev",
//   },
//   {
//     name: "Deeps",
//     rating: 5,
//     review:
//       "Happy to see Indie launch, a simple straightforward next js landing page template to launch quickly.",
//     image: "/images/deeps.png",
//     twitterhandle: "https://x.com/soulblissX",
//   },
//   {
//     name: "Vincent",
//     rating: 5,
//     review:
//       "Very cool bro, code looks well structured and for my first time using next.js, it's a breeze to install and get it running. In 2 commands, my landing page was ready.",
//     image: "/images/vincent.jpg",
//     twitterhandle: "https://twitter.com/vincent_build",
//   },
// ];

// export const FAQList: FAQProps[] = [
//   {
//     question: "What tech stack is used in this template?",
//     answer:
//       "The template is built using Next.js, Tailwind CSS, Framer Motion, and Shadcn UI - a powerful combination for modern, responsive web applications.",
//     value: "item-1",
//   },
//   {
//     question: "How do I set up the project?",
//     answer:
//       "Once you get the code zip, unzip it, run 'npm install' in the terminal, and then execute 'npm run dev'. This will start the project on your local development server.",
//     value: "item-2",
//   },
//   {
//     question: "Who should use this template?",
//     answer:
//       "Entrepreneurs validating an idea with minimal resources. Creators establishing an online presence quickly. Businesses launching a simple yet professional landing page with minimal coding knowledge.",
//     value: "item-3",
//   },
//   {
//     question: "Can I launch my landing page for my MVP?",
//     answer:
//       "Definitely! This template is perfectly designed for quickly launching a professional and compelling landing page for your Minimum Viable Product. With its clean design, responsive layout, and easy customization, you can have your MVP landing page up and running in no time.",
//     value: "item-4",
//   },
// ];

// export const builtWithRouteWise: BuiltWithRouteWise[] = [
//   {
//     title: "RouteWise",
//     url: "https://www.getRouteWise.com/",
//     image: "/images/lander_light.png",
//     description: "Built with RouteWise",
//   },
//   {
//     title:"Awesome BoilerPlates",
//     url: "https://boiler-plate-starters.vercel.app/",
//     image: "/images/starters.png",
//     description: "Find production-ready boilerplates for every tech stack.",
//   }
// ];

// export const footerConfig = {
//   logo: "RocketLaunch",
//   brand: "RouteWise",
//   description: "Build your Landing Page in no time",
//   sections: [
//     {
//       title: "Links",
//       links: [
//         { text: "Pricing", href: "#pricing" },
//         { text: "Features", href: "#features" },
//         { text: "twitter", href: "https://twitter.com/raghu_rtr" },
//         { text: "contact", href: "mailto:rtr@rtrdev.me" },
//       ],
//     },
//     {
//       title: "Legal",
//       links: [
//         { text: "Terms of services", href: "/tos" },
//         { text: "Privacy policy", href: "/privacy" },
//       ],
//     },
//   ],
// };
