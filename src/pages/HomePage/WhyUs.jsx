import React from "react";
import "../../styles/index.css";
import ShaderImageEffect from "./ShaderImage";
const WhyUs = () => {
  return (
    <div>
      <h1 className="text-7xl font-normal mb-8">Why Choose Us</h1>
      <p className="text-2xl w-9/12">
        With a strong commitment to excellence, we offer comprehensive global
        logistics solution tailored to must your needs.
      </p>
      <div className="flex flex-wrap justify-evenly gap-8 p-8 rounded-xl my-8 bg-gray-200 text-2xl">
        <div className="w-5/12 p-3 box-border flex justify-start gap-4 items-center">
          <img src="/whyus/e.png" style={{ width: 40, height: 40 }} />
          <p className="text">On Time Delivery</p>
        </div>
        <div className="w-5/12 p-3 box-border flex justify-start gap-4 items-center">
          <img src="/whyus/coin.png" style={{ width: 40, height: 40 }} />
          <p className="text">Reliable Cost</p>
        </div>
        <div className="w-5/12 p-3 box-border flex justify-start gap-4 items-center">
          <img src="/whyus/call.png" style={{ width: 40, height: 40 }} />
          <p className="text">24/7 Support</p>
        </div>

        <div className="w-5/12 p-3 box-border flex justify-start gap-4 items-center">
          <img src="/whyus/globe.png" style={{ width: 40, height: 40 }} />
          <p className="text">Global Tracking</p>
        </div>
      </div>
    </div>
  );
};

export default WhyUs;
