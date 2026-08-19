import React from "react";
import { Outlet } from "react-router";
import Card from "../components/Card.jsx";

function Courses() {
  return (
    <div>
      <div>Courses</div>

      {/* Cards */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "2rem",
        }}
      >
        <Card courseName="MERN" time="8 Months"></Card>
        <Card courseName="JAVA" time="10 Months"></Card>
        <Card courseName="DA" time="6 Months"></Card>
      </div>

      <div>Call to +91 1234567 to buy courses</div>
    </div>
  );
}

export default Courses;
