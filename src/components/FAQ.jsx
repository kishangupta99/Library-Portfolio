import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiPlus, FiMinus } from 'react-icons/fi';

const faqData = [
  {
    question: "What are the timings of the study hall?",
    answer: "We are open 24/7 for all our members. You can study anytime that suits your schedule, day or night."
  },
  {
    question: "What are the fees and payment options?",
    answer: "We offer flexible monthly and quarterly plans starting at ₹600/month. We accept UPI, cash, and bank transfers."
  },
  {
    question: "What facilities are provided?",
    answer: "We provide high-speed Wi-Fi, air-conditioned rooms, comfortable individual seating, power backup, RO drinking water, and access to a curated library."
  },
  {
    question: "Is there a trial period available?",
    answer: "Yes, we offer a Two-day free trial for you to experience our peaceful environment and top-notch facilities before committing."
  },
  {
    question: "How do I register for a seat?",
    answer: "You can register by visiting us in person with a valid ID and a passport-sized photograph. We recommend calling us first to check for seat availability."
  },
  {
    question: "Are there lockers available for our belongings?",
    answer: "Yes, secure individual lockers are available for a nominal monthly fee to safely store your books, laptop, and other personal items."
  },
  {
    question: "Is there a separate area for breaks and lunch?",
    answer: "Absolutely. We have a dedicated pantry area where you can have your meals and relax without disturbing the quiet study zone."
  },
  {
    question: "How is the quiet environment maintained?",
    answer: "We have a strict no-talking policy in the main study area and dedicated staff to ensure a peaceful and silent atmosphere for focused learning."
  },
];

const AccordionItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-200 py-4">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex justify-between items-center text-left text-lg font-medium text-gray-800"
      >
        <span>{question}</span>
        {isOpen ? <FiMinus /> : <FiPlus />}
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <p className="mt-2 text-gray-600">{answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const FAQ = () => {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16" id="faq">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 text-brand-dark">
          Frequently Asked Questions
        </h2>
        <div className="max-w-3xl mx-auto">
          {faqData.map((item, index) => (
            <AccordionItem key={index} question={item.question} answer={item.answer} />
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default FAQ;