import React from "react";
import FaqMain from "../student/FaqMain";
import StudentMain from "../student/StudentMain";
import { Navigate, Route, Routes } from "react-router-dom";
import NavBar from "./NavBar";
import ProffesorsList from "../student/ProffesorsList";
import ValidationRequestsComponent from "../admin/ValidationRequestsComponent";
import HomeMain from "./HomeMain";
import DocumentationInicialReviewComponent from "../admin/DocumentationInicialReviewComponent";
import ManageProffesorsComponent from "../admin/ManageProffesorsComponent";
import EnlacesComponent from "../student/EnlacesComponent.jsx";
import { useSelector } from "react-redux";
import { getValidations } from "../../helpers/getValidations";
import { getQuestions } from "../../helpers/getQuestions";
import { getDocuments } from "../../helpers/getDocuments";
// import NavBar from "./NavBar";

const BaseIndex = () => {

  const {session} = useSelector(data=>data.ui);
  getValidations();
  getQuestions();
  getDocuments();

  return (
    session.start ?
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomeMain />} />
        <Route path="index/progress" element={<StudentMain />} />
        <Route path="index/proffesors" element={<ProffesorsList />} />
        <Route exact path="index/faqs" element={<FaqMain />} />
        <Route exact path="index/enlaces" element={<EnlacesComponent />} />
        <Route exact path="index/admin/validation" element={<ValidationRequestsComponent />} />
        <Route exact path="index/admin/documentationI" element={<DocumentationInicialReviewComponent />} />
        {/* <Route exact path="index/admin/documentationF" element={<DocumentationReviewComponent />} /> */}
        <Route exact path="index/admin/manageprof" element={<ManageProffesorsComponent />} />
        <Route exact path="/*" element={<HomeMain />} />
        <Route exact path="*" element={<HomeMain />} />
        <Route exact path="/index/*" element={<HomeMain />} />
      </Routes>
    </>
    :
    <Navigate to="/logeo" replace={true}></Navigate>
  );
};

export default BaseIndex;
