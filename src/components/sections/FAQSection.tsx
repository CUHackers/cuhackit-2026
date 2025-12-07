import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: React.ReactNode;
}

const faqData: FAQItem[] = [
  {
    question: "What is a hackathon?",
    answer: "A hackathon is an innovation challenge where participants collaborate to come up with an idea and bring it to life in the span of 24 hours. "
  },
  {
    question: "Who is CUhackit for?",
    answer: `CUhackit is open to both undergraduate and graduate students at Clemson and at other nearby universities. We encourage you to join us regardless of major, background, or experience!`
  },
  {
    question: "What are the rules?",
    answer: (
      <span>
        As an event supported by Major League Hacking, we abide and expect all participants to abide by the{' '}
        <a 
          href="https://github.com/MLH/mlh-policies/blob/main/code-of-conduct.md" 
          target="_blank" 
          rel="noopener noreferrer"
          className="underline font-bold"
        >
          MLH Code of Conduct
        </a>
        . Participants should also follow all applicable Clemson University policies.
      </span>
    )
  },
  {
    question: "Why should I attend CUhackit?",
    answer: "Alongside the free food, merch, mentoring, and prizes we provide, CUhackit is a great opportunity to make new connections with participants and sponsors, learn new skills, and work on a project that can expand your resume."
  },
  {
    question: "How big are teams?",
    answer: "Teams at CUhackit are between one and four people. Although you are allowed to work on your own, we strongly encourage you to work in a team, and we provide a team formation activity at the event for anyone who hadn't formed a team ahead of time."
  },
  {
    question: "How much does it cost?",
    answer: "CUhackit 2026 is free to all participants. This includes admission, food, mentoring, workshops, resources, and merch!"
  },
  {
    question: "Still have questiosns?",
    answer: (
      <span>
        We'd love to help! Reach out to us at{' '}
        <a 
          href="mailto:cuhackers@clemson.edu" 
          className="underline font-bold"
        >
          cuhackers@clemson.edu
        </a>
        .
      </span>
    )
  }
];

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleQuestion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="snap-start w-screen min-h-screen py-32 px-4" id="faq" style={{ backgroundColor: '#fef7dd' }}>
      <div className="max-w-4xl mx-auto">
        {/* Title */}
        <h2 
          className="text-center mb-12 text-5xl md:text-6xl lg:text-6xl"
          style={{
            fontFamily: '"brim-narrow-combined-2", sans-serif',
            fontWeight: 400,
            color: '#9e8564',
            // WebkitTextStroke: '1.0px #000000',
            textShadow: '0 0 8px rgba(0, 0, 0, 0.3)',
            letterSpacing: '0.02em'
          }}
        >
          FREQUENTLY ASKED<br />QUESTIONS
        </h2>

        {/* FAQ Accordion */}
        <div className="space-y-4">
          {faqData.map((faq, index) => (
            <div key={index} className="overflow-hidden">
              {/* Question Bar */}
              <button
                onClick={() => toggleQuestion(index)}
                className="w-full px-6 py-4 flex items-center justify-between transition-all duration-300"
                style={{
                  backgroundColor: '#8b6f47',
                  // Placeholder for texture image overlay
                  // backgroundImage: 'url(/src/assets/wood-texture.png)',
                  backgroundBlendMode: 'multiply'
                }}
              >
                <span 
                  className="text-left text-xl md:text-2xl"
                  style={{
                    fontFamily: 'Rockwell, "Rockwell Nova", "Courier New", serif',
                    fontWeight: 700,
                    color: '#fef7dd',
                    WebkitTextStroke: '0.5px #000000',
                  }}
                >
                  {faq.question}
                </span>
                <ChevronDown 
                  className={`flex-shrink-0 ml-4 transition-transform duration-300 ${openIndex === index ? 'rotate-180' : ''}`}
                  size={24}
                  color="#fef7dd"
                  strokeWidth={3}
                />
              </button>

              {/* Answer Panel */}
              <div 
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? 'max-h-96' : 'max-h-0'
                }`}
              >
                <div 
                  className="px-6 py-6"
                  style={{
                    backgroundColor: '#a07d4f',
                    // Placeholder for texture image overlay
                    // backgroundImage: 'url(/src/assets/wood-texture-light.png)',
                    backgroundBlendMode: 'multiply'
                  }}
                >
                  <p 
                    className="text-base md:text-lg"
                    style={{
                      color: '#2a2419',
                      fontFamily: 'system-ui, -apple-system, sans-serif'
                    }}
                  >
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQSection;
