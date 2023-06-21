import React, { useState } from "react";
import "./Roadmap.css";
import arrow_left from "../../assets/icon-arrow-left.svg"
import arrow_right from "../../assets/icon-arrow-right.svg"

function Roadmap({ milestones }) {
  const [currentIndex, setCurrentIndex] = useState(2);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => prevIndex + 1);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => prevIndex - 1);
  };
  return (
    <div id="roadmap">
      <section
        _ngcontent-nxk-c15=""
        id="roadmap"
        className="roadmap-wrapper pt-5 mb-5 pb-md-5 pb-0"
      >
        <p
          _ngcontent-nxk-c15=""
          className="float-text text-uppercase mt-4 mt-md-0"
        >
          Roadmap
        </p>
        <h2
          _ngcontent-nxk-c15=""
          className="mb-md-4 mb-0 pb-3 pb-md-5 mt-4 mt-md-1 fw-bold header-text text-center text-uppercase"
        >
          <span _ngcontent-nxk-c15="" translate="" className="  new_text_here">
            Roadmap
          </span>
        </h2>
        <div className="roadmap-slider">
          <div className="slider-container">
            {milestones.map((milestone, index) => (
              <div
                key={index}
                className={`milestone ${
                  index === currentIndex ? "active" : ""
                }`}
              >
                <h3 className="pb-4">{milestone.title}</h3>
                <p>{milestone.description}</p>
                <p>{milestone.description2}</p>
                <p>{milestone.description3}</p>
                <p>{milestone.description4}</p>
              </div>
            ))}
          </div>
          <div className="navigation">
            <button
              className="prev-button"
              onClick={handlePrev}
              disabled={currentIndex === 0}
            >
              <img src={arrow_left} alt="" />
            </button>
            <button
              className="next-button"
              onClick={handleNext}
              disabled={currentIndex === milestones.length - 1}
            >
              <img src={arrow_right} alt="" />
            </button>
          </div>
        </div>
        {/**/}
        {/**/}
      </section>
    </div>
  );
}

export default Roadmap;
