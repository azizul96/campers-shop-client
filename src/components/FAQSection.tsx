const FAQSection = () => {
  const faqs = [
    {
      question: "What is your return policy?",
      answer: "You can return any item within 30 days.",
    },
    {
      question: "Do you offer free shipping?",
      answer: "Yes, on orders over $50.",
    },
    // Add more FAQs as needed
  ];

  return (
    <>
      <h2 className="text-center font-bold text-3xl my-5 ">FAQ</h2>
      <div className="space-y-2">
        {faqs.map((faq, index) => (
          <div key={index} className="collapse collapse-arrow bg-emerald-200">
            <input type="radio" name="my-accordion-2" defaultChecked />
            <div className="collapse-title text-xl font-medium">
              {faq.question}
            </div>
            <div className="collapse-content">
              <p>{faq.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default FAQSection;
