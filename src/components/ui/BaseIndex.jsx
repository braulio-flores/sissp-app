import React from "react";
import FaqMain from "../student/FaqMain";
import StudentMain from "../student/StudentMain";
import { Route, Routes } from "react-router-dom";
import NavBar from "./NavBar";
// import NavBar from "./NavBar";

const BaseIndex = () => {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="index/progress" element={<StudentMain />} />
        <Route exact path="index/faqs" element={<FaqMain />} />
      </Routes>

      {/* <Route path="progress" element={<StudentMain />} /> */}
      {/* <Route path="/faqs" element={<FaqMain />} /> */}
      {/* <Route path="faqs" element={<FaqMain />} /> */}

      {/* <Route path="progress" element={<StudentMain />} />
          <Route path="/faqs" element={<FaqMain />} /> */}
      {/* <FaqMain /> */}
    </>
  );
};

export default BaseIndex;
