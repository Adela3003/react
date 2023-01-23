import React from "react";
import data from "../../data";
import "./Coaches.css";

function Coaches () {
  return (
    <div >
      <div className="coaches">
       { data.coaches.map(coach => (
        <div className="coach" key={coach.id}>
          <img className="imag" src={coach.image} alt={coach.name} />
          <div className="coach-info">
          <p> {coach.name}</p>
          <p> {coach.age}</p>
          <p> {coach.description}</p>
          </div>
        </div>
      ))}
      </div>
   </div>
  );
};

export default Coaches;
