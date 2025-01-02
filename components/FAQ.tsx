import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion";
  import MaxWidthWrapper from "@/components/MaxWidthWrapper";
//   import Heading from "@/components/ui/heading";
import Heading from "./ui/heading";
  import { FAQList } from "@/configs/config";
  import { FAQProps } from "@/types";
  
  const FAQ = () => {
    return (
      <div>
        <MaxWidthWrapper>
          <section id="faq" className="container pt-24 sm:pt-32">
            <Heading
              title="Frequently Asked Questions"
              description="Here are some common questions you might have."
            />
            <Accordion type="single" collapsible className="w-full AccordionRoot">
              {FAQList.map(({ question, answer, value }: FAQProps) => (
                <AccordionItem key={value} value={value}>
                  <AccordionTrigger className="text-left text-xl">
                    {question}
                  </AccordionTrigger>
                  <AccordionContent>{answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </section>
        </MaxWidthWrapper>
      </div>
    );
  };
  
  export default FAQ;
  