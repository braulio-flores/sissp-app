import React from "react";
import { useDispatch } from "react-redux";
import { changeStep } from "../../actions/ui";

const ProgressBarItem = ({i, steepItemName, active}) => {
  const dispatch = useDispatch();

  const handleClikStep = ({ target }) => {
    dispatch(changeStep(target.value));
  };

  return (
    <>
      <li className={active} value={i} onClick={handleClikStep}>
        {steepItemName}
      </li>
    </>
  );
};

export default ProgressBarItem;
