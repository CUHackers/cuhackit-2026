import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
}

const faqData: FAQItem[] = [
  {
    question: "What is love?",
    answer: "Baby don't  hurt me, don't hurt me no more."
  },
  {
    question: "We're no strangers to love?",
    answer: `Never gonna give you up, never gonna let you down
Never gonna run around and desert you
Never gonna make you cry, never gonna say goodbye
Never gonna tell a lie and hurt you
We've known each other for so long
Your heart's been aching, but you're too shy to say it
Inside, we both know what's been going on
We know the game and we're gonna play it
And if you ask me how I'm feeling
Don't tell me you're too blind to see
Never gonna give you up, never gonna let you down
Never gonna run around and desert you
Never gonna make you cry, never gonna say goodbye
Never gonna tell a lie and hurt you
Never gonna give you up, never gonna let you down
Never gonna run around and desert you
Never gonna make you cry, never gonna say goodbye
Never gonna tell a lie and hurt you
We've known each other for so long
Your heart's been aching, but you're too shy to say it
Inside, we both know what's been going on
We know the game and we're gonna play it
I just wanna tell you how I'm feeling
Gotta make you understand
Never gonna give you up, never gonna let you down
Never gonna run around and desert you
Never gonna make you cry, never gonna say goodbye
Never gonna tell a lie and hurt you
Never gonna give you up, never gonna let you down
Never gonna run around and desert you
Never gonna make you cry, never gonna say goodbye
Never gonna tell a lie and hurt you
Never gonna give you up, never gonna let you down
Never gonna run around and desert you
Never gonna make you cry, never gonna say goodbye
Never gonna tell a lie and hurt you.`
  },
  {
    question: "Can bee's fly?",
    answer: `According to all known laws of aviation, there is no way a bee should be able to fly.
Its wings are too small to get its fat little body off the ground.
The bee, of course, flies anyway because bees don't care what humans think is impossible.`
  },
  {
    question: "Question Goes Here",
    answer: "Answer goes here. This is where you'll put the detailed response to the frequently asked question."
  },
  {
    question: "Question Goes Here",
    answer: "Answer goes here. This is where you'll put the detailed response to the frequently asked question."
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
            WebkitTextStroke: '1.0px #000000',
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
                  // backgroundImage: 'url(/assets/wood-texture.png)',
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
                    // backgroundImage: 'url(/assets/wood-texture-light.png)',
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
