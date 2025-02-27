import React, { useState } from "react";

const Journey = () => {
  const [clicked, setClicked] = useState(false);
  const [four, setFour] = useState(
    "Our foundation was laid with the launch of MMG’s Industrial Solutions, partnering with global"
  );
  const [fourBtn, setFourBtn] = useState(false);

  const [sixteen, setSixteen] = useState(
    "We entered the fisheries industry, becoming a"
  );
  const [sixteenBtn, setSixteenBtn] = useState(false);
  const [twofour, setTwoFour] = useState(
    "With MM Seaways, we extended our expertise to logistics, offering freight forwarding"
  );
  const [twoFourBtn, setTwoFourBtn] = useState(false);

  return (
    <div className="p-4 lg:p-12 flex flex-col lg:flex-row gap-2 lg:gap-12 justify-between items-center bg-black text-white mb-1 z-10 relative">
      <div className="bg-white text-black flex flex-col gap-3 items-start justify-start w-full lg:w-3/12 p-2 lg:p-4 rounded">
        <h1 className="text-3xl font-bold">Our Journey</h1>
        <p>
          Since 2004, MMG has grown into a diversified conglomerate, driven by
          innovation and excellence. From industrial solutions to fisheries and
          logistics, we continue to expand our horizons to meet global market
          demands.
        </p>
      </div>
      <div className="h-full flex flex-row items-end w-full lg:w-9/12 gap-4 ">
        {clicked && (
          <button
            className="hidden lg:block translate-y-4"
            onClick={() => setClicked((prev) => !prev)}
          >
            <img src="/arrow left.png" alt="" />
          </button>
        )}
        <div className="flex flex-col lg:flex-row w-full lg:w-11/12">
          <div
            className={`flex flex-col lg:flex-row w-full ${
              clicked && "hidden"
            }`}
          >
            <div className="min-w-64  border-l-2 lg:border-l-0 border-white pl-4 lg:pl-0 pb-4">
              <h1 className="h-3/12 font-medium">2004</h1>
              <div className="relative my-2 lg:my-8 h-0 border-b-0 lg:border-b-2 border-white">
                <div className="border-2 border-white w-[30px] h-[30px] rounded-full bg-black -translate-y-1/2 p-[3px] pt-[6px] absolute -left-8 lg:left-2 -rotate-90 lg:rotate-0">
                  <img
                    src="/down.png"
                    className="w-[30px] h-[15px]"
                    onClick={() => {
                      setFourBtn(false);
                      setFour(
                        "Our foundation was laid with the launch of MMG’s Industrial Solutions, partnering with global"
                      );
                    }}
                  />
                </div>
              </div>
              <p className="pr-4 pl-2">
                <p className="font-bold">Industrial Solutions Division</p>
                {four}
              </p>
              {!fourBtn && (
                <button
                  className="text-green-700 pl-2"
                  onClick={() => {
                    setFourBtn(true);
                    setFour(
                      "Our foundation was laid with the launch of MMG’s Industrial Solutions, partnering with global leaders to deliver premium spare parts, engineering services, and diverse industrial products."
                    );
                  }}
                >
                  read more
                </button>
              )}
            </div>
            <div className="min-w-64  border-l-2 lg:border-l-0 border-white pl-4 lg:pl-0 pb-4">
              <h1 className="h-3/12 font-medium">2016</h1>
              <div className="relative my-2 lg:my-8 h-0 border-b-0 lg:border-b-2 border-white">
                <div className="border-2 border-white w-[30px] h-[30px] rounded-full bg-black -translate-y-1/2 p-[3px] pt-[6px] absolute -left-8 lg:left-2 -rotate-90 lg:rotate-0">
                  <img
                    src="/down.png"
                    className="w-[30px] h-[15px]"
                    onClick={() => {
                      setSixteenBtn(false);
                      setSixteen(
                        "We entered the fisheries industry, becoming a"
                      );
                    }}
                  />
                </div>
              </div>
              <p className="pr-4 pl-2">
                <p className="font-bold">Fisheries Business</p>
                {sixteen}
              </p>
              {!sixteenBtn && (
                <button
                  className="text-green-700 pl-2"
                  onClick={() => {
                    setSixteenBtn(true);
                    setSixteen(
                      "We entered the fisheries industry, becoming a trusted exporter of premium seafood, supplying fresh shrimp, cattle fish, and soul fish to markets worldwide."
                    );
                  }}
                >
                  read more
                </button>
              )}
            </div>
            <div className="min-w-64  border-l-2 lg:border-l-0 border-white pl-4 lg:pl-0 pb-4">
              <h1 className="h-3/12 font-medium">2024</h1>
              <div className="relative my-2 lg:my-8 h-0 border-b-0 lg:border-b-2 border-white">
                <div className="border-2 border-white w-[30px] h-[30px] rounded-full bg-black -translate-y-1/2 p-[3px] pt-[6px] absolute -left-8 lg:left-2 -rotate-90 lg:rotate-0">
                  <img
                    src="/down.png"
                    className="w-[30px] h-[15px]"
                    onClick={() => {
                      setTwoFourBtn(false);
                      setTwoFour(
                        "With MM Seaways, we extended our expertise to logistics, offering freight forwarding"
                      );
                    }}
                  />
                </div>
              </div>
              <p className="pr-4 pl-2">
                <p className="font-bold">MM Seaways LTD.</p>
                {twofour}
              </p>
              {!twoFourBtn && (
                <button
                  className="text-green-700 pl-2"
                  onClick={() => {
                    setTwoFourBtn(true);
                    setTwoFour(
                      "With MM Seaways, we extended our expertise to logistics, offering freight forwarding, feeder services, and customs clearance with a strong global network."
                    );
                  }}
                >
                  read more
                </button>
              )}
            </div>
            <div className="block lg:hidden w-72 mt-8">
              <h1 className="mb-2 text-2xl font-bold">Beyond the Core</h1>
              <p>
                We also explore other sectors, including Power & Energy,
                Automobile Dealerships, Software Solutions, Real Estate,
                Investments.
              </p>
            </div>
          </div>
          <div className={`w-72 ${!clicked && "hidden"}`}>
            <h1 className="mb-6 text-2xl font-bold">Beyond the Core</h1>
            <p>
              We also explore other sectors, including Power & Energy,
              Automobile Dealerships, Software Solutions, Real Estate,
              Investments.
            </p>
          </div>
        </div>
        {!clicked && (
          <button
            className="hidden lg:block"
            onClick={() => setClicked((prev) => !prev)}
          >
            <img src="/arrow right.png" alt="" />
          </button>
        )}
      </div>
    </div>
  );
};

export default Journey;
