import React from "react";

const Gratitude = () => {
  return (
    <div>
      <div className="w-5/12 my-4 p-4">
        <div className="text-2xl font-normal">
          We extend our gratitude to the talented professionals who brought our
          vision to life through this website.
        </div>
        <div className="text-lg text-white p-6 rounded bg-black mt-4">
          <a
            href="https://www.linkedin.com/in/umma-maharunnasa-mim-161243223/"
            target="_blank"
            className="font-medium text-lg hover:underline"
          >
            Umma Maharunnasa Mim
          </a>{" "}
          – Web Designer <br />
          <a
            href="https://tashiq.github.io/portfolio/"
            className="font-medium text-lg hover:underline"
            target="_blank"
          >
            Fahim Foisal
          </a>
          – Web Developer <br />
          This website is the result of Mim’s creative designs and Foisal’s
          seamless development expertise, ensuring an engaging digital presence
          for MM Seaways Ltd.
        </div>
      </div>
    </div>
  );
};

export default Gratitude;
