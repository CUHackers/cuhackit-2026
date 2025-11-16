import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "What is a hackathon?",
    answer: "A hackathon is an event where students come together to build innovative projects in a limited time frame. It's a great opportunity to learn new skills, work with others, and bring your ideas to life!"
  },
  {
    question: "Who can attend?",
    answer: "CUhackit is open to all undergraduate and graduate students. No prior coding experience is required - we welcome beginners and experienced hackers alike!"
  },
  {
    question: "How much does it cost?",
    answer: "CUhackit is completely FREE! We'll provide meals, snacks, swag, and workshops throughout the weekend. All you need to bring is yourself and your creativity!"
  },
  {
    question: "Do I need a team?",
    answer: "You can come with a team or join one at the event! Teams can have up to 4 people. We'll have team formation activities if you're looking for teammates."
  },
  {
    question: "What should I bring?",
    answer: "Bring your laptop, chargers, and any hardware you want to use. Don't forget comfortable clothes, toiletries, and a sleeping bag if you plan to rest overnight!"
  },
  {
    question: "What can I build?",
    answer: "Anything! Hardware, software, web apps, mobile apps - your creativity is the limit. We'll have several tracks and challenges with specific themes and prizes."
  },
  {
    question: "Will there be food?",
    answer: "Yes! We'll provide all meals, snacks, and drinks throughout the event. We'll accommodate dietary restrictions - just let us know when you register."
  },
  {
    question: "What if I've never been to a hackathon?",
    answer: "That's perfect! CUhackit is beginner-friendly. We'll have workshops, mentors, and resources to help you learn and build your first project."
  }
];

const FAQSection = () => {
  return (
    <section className="relative py-24">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-5xl font-western mb-4" style={{ textShadow: 'var(--shadow-text)' }}>
            <span className="text-gradient">Trail Guide</span>
          </h2>
          <p className="text-xl text-muted-foreground font-body">
            Got questions? We've got answers, partner!
          </p>
        </div>

        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem 
              key={index} 
              value={`item-${index}`}
              className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-lg px-6 hover:border-primary/50 transition-colors"
            >
              <AccordionTrigger className="text-left hover:text-primary transition-colors">
                <span className="font-body font-bold">{faq.question}</span>
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground font-body">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        <div className="mt-12 text-center">
          <p className="text-muted-foreground font-body mb-4">
            Still got questions, partner?
          </p>
          <button className="px-6 py-3 bg-gradient-to-r from-primary to-accent rounded-lg font-body font-bold hover:shadow-lg hover:shadow-primary/50 transition-all duration-300 hover:scale-105 border-2 border-primary/30">
            Holler at Us
          </button>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
