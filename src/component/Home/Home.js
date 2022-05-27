import React from "react";
import Calculator from "../calculator/Calculator";
import "./home.css";

function Home() {
  return (
    <>
      <main className="main">
        <div className="main-content responsive-wrapper">
          <article className="widget">
            <h2>Showing These Calculator Are Created Using By ReactJS 🤯</h2>
            <p>
              This Calculator consists of multiple arithmetic operators: These
              are <strong>Addition </strong> Subtraction{" "}
              <strong>Multiplication </strong> Division Operation. The
              Calculator PerForm Only Simple Operation Not Advanace
              <strong> Mathematical Operators</strong>
            </p>
          </article>
        </div>
      </main>

      <Calculator />
    </>
  );
}

export default Home;
