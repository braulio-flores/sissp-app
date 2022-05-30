import React from "react";
import { useSelector } from "react-redux";
import { progressSteepsCatalog } from "../../resources/mocks/steepsBarMock";
import "./progressBar.css";
import ProgressBarItem from "./ProgressBarItem";

const ProgressBar = () => {
  
  const { maxSteep } = useSelector(data=>data.ui);

  return (
    <div className="container m-5">
      <ul className="progressbar">
        {
          progressSteepsCatalog.map(({ steepItemName }, i)=>{
            return <ProgressBarItem key={i} steepItemName={steepItemName} i={i} active={maxSteep>i ? "active" : ""} />
          })
        }
      </ul>
    </div>
  );
};

export default ProgressBar;
