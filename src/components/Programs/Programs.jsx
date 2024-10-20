import React from "react";
import "./Programs.css";
import Program_1 from "../../assets/Program 1.jpg";
import Program_2 from "../../assets/Program 2.jpg";
import Program_3 from "../../assets/Program 3.jpg";
const Programs = () => {
  return (
    <div className="programs">
      <div className="program">
        <img src={Program_1} alt="" />
        <div className="info">
          <h3>Nursery</h3>
          <p>
            Introduction to learning through fun activities, focusing on social
            skills and creativity.
          </p>
        </div>
      </div>
      <div className="program">
        <img src={Program_2} alt="" />
        <div className="info">
          <h3>Jr. KG</h3>
          <p>
            Building basic literacy and numeracy, with emphasis on physical and
            cognitive development.
          </p>
        </div>
      </div>
      <div className="program">
        <img src={Program_3} alt="" />
        <div className="info">
          <h3>Sr. KG</h3>
          <p>
            Preparing for primary school with more structured learning and
            critical thinking activities.
          </p>
        </div>
      </div>
    </div>
  );
};
export default Programs;
