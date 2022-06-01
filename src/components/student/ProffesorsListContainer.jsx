import React from "react";
import { professorsCatalog } from "../../resources/mocks/profMock";
import ProffesorsListItem from "./ProffesorsListItem";

const ProffesorsListContainer = () => {
  return (
    <div className="container">
      <div className="row row-cols-1 row-cols-md-3 g-4">
        {
            professorsCatalog.map((item, i)=>{
                return <ProffesorsListItem key={i} item = {item}/>
            })
        }
      </div>
    </div>
  );
};

export default ProffesorsListContainer;
