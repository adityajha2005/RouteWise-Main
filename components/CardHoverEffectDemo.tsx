import { HoverEffect } from "./ui/card-hover-effect";

// Example card data for Routewise features
export const features = [
  {
    title: "Generative AI for Personalized Roadmaps",
    description:
      "Let AI generate personalized roadmaps based on your input, tailored to your needs, whether it's for learning paths or career development.",
    link: "https://github.com/.. ", // Link to the project or documentation
  },
  {
    title: "Downloadable Roadmaps",
    description:
      "Once your roadmap is created, easily download it as an image for future reference and to track your journey at any time.",
    link: "https://github.com/.. ", // Link to the project or documentation
  },
  {
    title: "Roadmap Spaces",
    description:
      "Store your roadmaps in dedicated spaces where you can access, view, and modify them whenever needed, keeping your journey organized.",
    link: "https://github.com/.. ", // Link to the project or documentation
  },
  {
    title: "Authentication with Clerk",
    description:
      "Secure authentication using Clerk to manage user accounts, ensuring that your roadmaps are personalized and safe across sessions.",
    link: "https://github.com/.. ", // Link to the project or documentation
  },
  {
    title: "AI-Driven Suggestions",
    description:
      "Receive AI-driven suggestions to enhance and refine your roadmap, making sure you stay on track and aligned with your goals.",
    link: "https://github.com/.. ",
  },
  {
    title: "Free Plan: 7 Calls for Free Users",
    description:
      "Free users can make up to 5 AI-powered roadmap generation requests without any charge, allowing them to explore the features before committing to a plan.",
    link: "https://github.com/.. ", 
  },
];

export function CardHoverEffectDemo() {
  return (
    <div className="max-w-5xl mx-auto px-8">
      <HoverEffect items={features} />
    </div>
  );
}
