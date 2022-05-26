import React from "react";
import AdminMain from "../admin/AdminMain";
import StudentMain from "../student/StudentMain";
import NavBar from "./NavBar";

const BaseIndex = () => {
  return (
    
    <>
        <NavBar />
        <StudentMain />
    </>
  );
};

export default BaseIndex;
