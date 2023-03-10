import React, { useState } from "react";
import { FiChevronDown } from "react-icons/fi";

const dataCollection = [
  {
    question: "Заказ №12564",
    answer: <img src="/src/assets/list.png" alt="" />,
  },
  {
    question: "Заказ №12564",
    answer: <img src="/src/assets/list.png" alt="" />,
  },
  {
    question: "Заказ №12564",
    answer: <img src="/src/assets/list.png" alt="" />,
  },
];

function Accordion() {
  const [accordion, setActiveAccordion] = useState(-1);

  function toggleAccordion(index) {
    setActiveAccordion(index);
  }

  return (
    <div className="container">
      {/* <div>
        <span className="accordion__title">Frequently asked questions</span>
        <h1>Lets answer some of your questions</h1>
      </div> */}
      <div className="accordion__faq">
        {dataCollection.map((item, index) => (
          <div key={index} onClick={() => toggleAccordion(index)}>
            <div className="accordion__faq-heading">
              <h3 className={accordion === index ? "active" : ""}>
                {item.question}
              </h3>
            </div>
            <div className="flex items-centre justify-center">
              {accordion === index ? (
                <>
                  {""}
                  <span className="verticle">
                    <FiChevronDown></FiChevronDown>
                  </span>
                </>
              ) : (
                <>
                  <span className="verticle">
                    <FiChevronDown></FiChevronDown>
                  </span>
                </>
              )}
            </div>
            <div>
              <p className={accordion === index ? "active" : "inactive"}>
                {item.answer}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Accordion;
