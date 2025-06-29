import { useState } from "react";
import { FaChevronUp, FaChevronDown } from "react-icons/fa";

const faqs = [
  {
    question: "What is Netflix?",
    answer: (
      <>
        Netflix is a streaming service that offers a wide variety of
        award-winning TV shows, movies, anime, documentaries and more – on
        thousands of internet-connected devices.
        <br />
        <br />
        You can watch as much as you want, whenever you want, without a single
        ad – all for one low monthly price. There's always something new to
        discover, and new TV shows and movies are added every week!
      </>
    ),
  },
  {
    question: "How much does the Netflix cost?",
    answer:
      "Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from ₹149 to ₹649 a month. No extra costs, no contracts.",
  },
  {
    question: "Where can I watch?",
    answer: (
      <>
        Watch anywhere, anytime. Sign in with your Netflix account to watch
        instantly on the web at netflix.com from your personal computer or on
        any internet-connected device that offers the Netflix app, including
        smart TVs, smartphones, tablets, streaming media players and game
        consoles.
        <br />
        <br />
        You can also download your favourite shows with the iOS or Android app.
        Use downloads to watch while you're on the go and without an internet
        connection. Take Netflix with you anywhere.
      </>
    ),
  },
  {
    question: "How do I cancel?",
    answer:
      "Netflix is flexible. There are no annoying contracts and no commitments. You can easily cancel your account online in two clicks. There are no cancellation fees – start or stop your account anytime.",
  },
  {
    question: "What can I watch on Netflix?",
    answer:
      "Netflix has an extensive library of feature films, documentaries, TV shows, anime, award-winning Netflix originals, and more. Watch as much as you want, anytime you want.",
  },
  {
    question: "Is Netflix is good for kids?",
    answer: (
      <>
        The Netflix Kids experience is included in your membership to give
        parents control while kids enjoy family-friendly TV shows and films in
        their own space.
        <br />
        <br />
        Kids profiles come with PIN-protected parental controls that let you
        restrict the maturity rating of content kids can watch and block
        specific titles you don’t want kids to see.
      </>
    ),
  },
];
const FAQAccordion = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  return (
    <div className="bg-black text-white py-14 px-48">
      <h2 className="text-xl md:text-2xl font-semibold mb-5">
        Frequently Asked Questions
      </h2>
      <div className="">
        {faqs.map((faq, i) => (
          <div key={i} className="bg-[#2b2b2b] border border-gray-600 mb-2">
            <button
              onClick={() => toggleFAQ(i)}
              className="w-full flex justify-between items-center py-7 px-6 text-left text-white text-2xl "
            >
              {faq.question}
              {openIndex === i ? <FaChevronUp /> : <FaChevronDown />}
            </button>
            {openIndex === i && (
              <div className="px-6 py-7 text-white border-t border-black text-2xl">
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQAccordion;
