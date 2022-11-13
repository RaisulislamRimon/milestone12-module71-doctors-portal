import React from "react";
import chair from "../../../assets/images/chair.png";
import PrimaryButton from "../../../components/PrimaryButton/PrimaryButton";

const Banner = () => {
  return (
    <div style={{ background: "url('../../../assets/images/bg.png')" }}>
      <div className="hero">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img
            src={chair}
            className="rounded-lg lg:w-1/2 shadow-2xl"
            alt="hero"
          />
          <div>
            <h1 className="text-5xl font-bold">Box Office News!</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
            <PrimaryButton>Get Started</PrimaryButton>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
