import { useState } from "react";
import { FaChevronUp, FaChevronDown } from "react-icons/fa";
import { useSelector } from "react-redux";
import { faqLang } from "../i18n";

const FAQAccordion = () => {
  const langKey = useSelector((store) => store.config.lang);
  const faqs = [
    {
      question: faqLang[langKey].que1,
      answer: faqLang[langKey].ans1,
    },
    {
      question: faqLang[langKey].que2,
      answer: faqLang[langKey].ans2,
    },
    {
      question: faqLang[langKey].que3,
      answer: faqLang[langKey].ans3,
    },
    {
      question: faqLang[langKey].que4,
      answer: faqLang[langKey].ans4,
    },
    {
      question: faqLang[langKey].que5,
      answer: faqLang[langKey].ans5,
    },
    {
      question: faqLang[langKey].que6,
      answer: faqLang[langKey].ans6,
    },
  ];
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  return (
    <div className="bg-black text-white py-14 px-48">
      <h2 className="text-xl md:text-2xl font-semibold mb-5">
        {faqLang[langKey].frequentlyQue}
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
