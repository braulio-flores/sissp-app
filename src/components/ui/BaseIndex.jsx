import React from "react";
import FaqMain from "../student/FaqMain";
import StudentMain from "../student/StudentMain";
import { Route, Routes } from "react-router-dom";
import NavBar from "./NavBar";
import ProffesorsList from "../student/ProffesorsList";
import ValidationRequestsComponent from "../admin/ValidationRequestsComponent";
import DocumentationReviewComponent from "../admin/DocumentationReviewComponent";
import HomeMain from "./HomeMain";
// import NavBar from "./NavBar";

const BaseIndex = () => {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomeMain />} />
        <Route path="index/progress" element={<StudentMain />} />
        <Route path="index/proffesors" element={<ProffesorsList />} />
        <Route exact path="index/faqs" element={<FaqMain />} />
        <Route exact path="index/admin/validation" element={<ValidationRequestsComponent />} />
        <Route exact path="index/admin/documentationI" element={<DocumentationReviewComponent />} />
        <Route exact path="index/admin/documentationF" element={<DocumentationReviewComponent />} />
        <Route exact path="index/admin/manageprof" element={<FaqMain />} />
      </Routes>
    </>
  );
};

export default BaseIndex;
