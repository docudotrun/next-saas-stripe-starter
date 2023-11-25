import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import Balancer from "react-wrap-balancer";

const pricingFaqData = [
  {
    id: "item-1",
    question: "What is the cost of the free plan?",
    answer: "Our free plan is completely free, with no monthly or annual charges. It's a great way to get started and explore our basic features.",
  },
  {
    id: "item-2",
    question: "How much does the Pro Monthly plan cost?",
    answer: "The Pro Monthly plan is priced at $40 per month. It provides access to our core features and is billed on a monthly basis.",
  },
  {
    id: "item-3",
    question: "What is the price of the Business Monthly plan?",
    answer: "The Business Monthly plan is available for $1000 per month. It offers advanced features and is billed on a monthly basis for added flexibility.",
  },
  {
    id: "item-4",
    question: "Do you offer any annual subscription plans?",
    answer: "Yes, we offer annual subscription plans for even more savings. The Pro Annual plan is $384 per year, and the Business Annual plan is $9600 per year.",
  },
  {
    id: "item-5",
    question: "Is there a trial period for the paid plans?",
    answer: "We offer a 14-day free trial for both the Pro Monthly and Pro Annual plans. It's a great way to experience all the features before committing to a paid subscription.",
  },
  {
    id: "item-6",
    question: "How much cost for training an extra model?",
    answer: "$800 for up to 200 pages and 20 fields. Additional fields or pages will increase the price.",
  },
];

export function PricingFaq() {
  return (
    <section className="container max-w-4xl py-2">
      <div className="mb-14 space-y-6 text-center">
        <h1 className="text-center font-heading text-3xl md:text-5xl">
          <Balancer>Frequently Asked Questions</Balancer>
        </h1>
        <p className="text-md text-muted-foreground">
          <Balancer>
            Explore our comprehensive FAQ to find quick answers to common inquiries.
            If you need further assistance, don&apos;t hesitate to contact us for personalized help.
          </Balancer>
        </p>
      </div>
      <Accordion type="single" collapsible className="w-full">
        {pricingFaqData.map((faqItem) => (
          <AccordionItem key={faqItem.id} value={faqItem.id}>
            <AccordionTrigger>{faqItem.question}</AccordionTrigger>
            <AccordionContent>{faqItem.answer}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  )
}