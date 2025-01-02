import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";

export function AnimatedTestimonialsDemo() {
  const testimonials = [
    {
      quote:
        "The AI-driven roadmap generator has transformed our planning process. It automatically tailors our strategy to match the most up-to-date industry trends.",
      name: "Aditya",
      designation: "Creator & CEO at Routewise",
      src: "/test-1.jpg", // Updated image path
    },
    {
      quote:
        "Thanks to the intelligent insights provided by the AI, we were able to align our development efforts with market needs more effectively than ever before.",
      name: "Michael Rodriguez",
      designation: "CTO at NexaTech",
      src: "/test-2.jpeg",
    },
    {
      quote:
        "The roadmap generator has increased our team's productivity. The AI identifies potential bottlenecks and suggests timely solutions.",
      name: "Emily Watson",
      designation: "Operations Director at CloudBridge",
      src: "/test-3.jpg", // Updated image path
    },
    {
      quote:
        "The AI's predictive capabilities have been a game-changer, allowing us to optimize our project timelines and deliver on commitments ahead of schedule.",
      name: "James Kim",
      designation: "Engineering Lead at QuantumFlex",
      src: "/test-4.jpg", // Updated image path
    },
  ];

  return <AnimatedTestimonials testimonials={testimonials} />;
}
