import React from "react";
// import { faq } from "../../resources/mocks/qafMock";
import FaqsFormAdd from "./FaqsFormAdd";
import FaqsItem from "./FaqsItem";

const FaqsContainer = () => {

  const faqs = JSON.parse(localStorage.getItem('questions'));
  console.log(faqs);

  return (
    <div className="container">
      <div className="row row-cols-1 row-cols-md-2 g-4">
        {faqs.map((item, i) => {
          return <FaqsItem key={item.id} {...item} />;
        })} 
      </div>
      <FaqsFormAdd />
    </div>
  );
};

export default FaqsContainer;
