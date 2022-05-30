import React from "react";
import { faq } from "../../mocks/qafMock";
import FaqsFormAdd from "./FaqsFormAdd";
import FaqsItem from "./FaqsItem";

const FaqsContainer = () => {

  return (
    <div className="container">
      <div className="row row-cols-1 row-cols-md-2 g-4">
        {
          faq.map((item, i)=>{
            return <FaqsItem key={item.id} {...item}/>
          })
        }          
      </div>
      <FaqsFormAdd />
    </div>
  );
};

export default FaqsContainer;
