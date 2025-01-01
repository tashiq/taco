import { useEffect } from "react";
import "../../styles/industry.css";
import gsap from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

gsap.registerPlugin(ScrollToPlugin);
const Industry = () => {
  useEffect(() => {
    function decodeText() {
      const text = document.querySelectorAll(".text-animation");
      if (!text) return;

      const state = Array.from({ length: text.length }, (_, i) => i);
      // console.log(state);
      state.forEach((_, i) => {
        const child = text[i];
        child.classList.remove("state-1", "state-2", "state-3");
      });

      const shuffled = shuffle(state);
      shuffled.forEach((index) => {
        // const child = text.children[index];
        const child = text[index];
        const classes = child.classList;
        const state1Time = Math.round(Math.random() * (2000 - 300)) + 50;
        if (classes.contains("text-animation")) {
          setTimeout(() => firstStages(child), state1Time);
        }
      });
    }

    function firstStages(child) {
      if (child.classList.contains("state-2")) {
        child.classList.add("state-3");
      } else if (child.classList.contains("state-1")) {
        child.classList.add("state-2");
      } else if (!child.classList.contains("state-1")) {
        child.classList.add("state-1");
        setTimeout(() => secondStages(child), 100);
      }
    }

    function secondStages(child) {
      if (child.classList.contains("state-1")) {
        child.classList.add("state-2");
        setTimeout(() => thirdStages(child), 100);
      } else if (!child.classList.contains("state-1")) {
        child.classList.add("state-1");
      }
    }

    function thirdStages(child) {
      if (child.classList.contains("state-2")) {
        child.classList.add("state-3");
      }
    }

    function shuffle(array) {
      let currentIndex = array.length;
      while (currentIndex !== 0) {
        const randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        [array[currentIndex], array[randomIndex]] = [
          array[randomIndex],
          array[currentIndex],
        ];
      }
      return array;
    }

    decodeText();

    setTimeout(() => {
      gsap.to(window, {
        duration: 1,
        scrollTo: {
          y: "#business-container",
          autoKill: true,
        },
        ease: "power2.inOut",
      });
    }, 4000);
  }, []);
  return (
    <div>
      <div className="decode-text-container container mx-auto flex justify-center items-center">
        <div
          className="decode-text text-7xl uppercase font-medium flex gap-8 justify-center items-center"
          style={{ height: "calc(100vh - 90px)" }}
        >
          {"Discover the Legacy of MMG".split(" ").map((word, index) => (
            <div key={index} className="flex">
              {word.split("").map((char, i2) => (
                <div key={i2} className="text-animation inline-block">
                  {char}
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
      <div className="business-container text-white" id="business-container">
        <div className="h-screen text-center flex flex-col justify-center items-center">
          <h1 className="text-5xl font-medium tracking-wide mb-8  w-7/12">
            Leading the Future Across Diverse Sectors
          </h1>
          <p className="text-lg w-5/12 tracking-wide">
            At MMG, we don’t just participate in industries; we dominate them
            with innovative solutions and unparalleled expertise. Below are the
            industries where we are reshaping standards and setting benchmarks
          </p>
        </div>

        {/* Industry Solutions */}
        <div className="w-full h-screen text-center flex justify-center items-center bg-gray-800 bg-opacity-10">
          <div className="w-4/12 h-full p-8  flex justify-center items-center">
            <img
              src="/ventures/Industrial Solutions.jpg"
              className="w-full h-4/6 rounded"
            />
          </div>
          <div className="w-8/12 p-8 h-full text-left  flex flex-col justify-center items-start">
            <h1 className="text-4xl font-medium tracking-wide mb-8">
              Industrial Solutions
            </h1>
            <div className="text-lg tracking-wide">
              MMG’s Industrial Solutions division is revolutionizing the way
              businesses operate. Through our strong partnerships with Guangzhou
              Kwanshin IMP. & EXP. Co., Ltd. and Leung Bangladesh Ltd., we
              provide end-to-end solutions for large-scale industrial projects:
            </div>
            <ul className="text-lg tracking-wide mt-4 list-disc w-5/6">
              <li>
                Spare Parts Supply: Offering premium spare parts compatible with
                global leaders like Siemens, Rexroth, and Mitsubishi.
              </li>
              <li>
                Project Engineering Services: Comprehensive support, from
                providing technical equipment to dispatching engineers who
                enhance plant productivity.
              </li>
              <li>
                Diverse Product Offerings: Covering industries from building
                materials and hardware to high-tech automation products.
              </li>
              <li>
                Export-Import Business Services: Simplifying trade with
                logistical solutions, LC handling, and foreign exchange
                services.
              </li>
            </ul>
          </div>
        </div>

        {/* Fisheries */}
        <div className="w-full h-screen text-center flex justify-center items-center bg-gray-800 bg-opacity-10">
          <div className="w-4/12 h-full p-8  flex justify-center items-center">
            <img
              src="/ventures/Fisheries.jpg"
              className="w-full h-4/6 rounded"
            />
          </div>
          <div className="w-8/12 p-8 h-full text-left  flex flex-col justify-center items-start">
            <h1 className="text-4xl font-medium tracking-wide mb-8">
              Fisheries
            </h1>
            <div className="text-lg tracking-wide">
              MMG’s Industrial Solutions division is revolutionizing the way
              businesses operate. Through our strong partnerships with Guangzhou
              Kwanshin IMP. & EXP. Co., Ltd. and Leung Bangladesh Ltd., we
              provide end-to-end solutions for large-scale industrial projects:
            </div>
            <ul className="text-lg tracking-wide mt-4 list-disc w-5/6">
              <li>
                Spare Parts Supply: Offering premium spare parts compatible with
                global leaders like Siemens, Rexroth, and Mitsubishi.
              </li>
              <li>
                Project Engineering Services: Comprehensive support, from
                providing technical equipment to dispatching engineers who
                enhance plant productivity.
              </li>
              <li>
                Diverse Product Offerings: Covering industries from building
                materials and hardware to high-tech automation products.
              </li>
              <li>
                Export-Import Business Services: Simplifying trade with
                logistical solutions, LC handling, and foreign exchange
                services.
              </li>
            </ul>
          </div>
        </div>
        {/* Logistic Services */}
        <div className="w-full h-screen text-center flex justify-center items-center bg-gray-800 bg-opacity-10">
          <div className="w-4/12 h-full p-8  flex justify-center items-center">
            <img
              src="/ventures/Logistics Services.jpg"
              className="w-full h-4/6 rounded"
            />
          </div>
          <div className="w-8/12 p-8 h-full text-left  flex flex-col justify-center items-start">
            <h1 className="text-4xl font-medium tracking-wide mb-8">
              Logistics Services
            </h1>
            <div className="text-lg tracking-wide">
              MMG’s Industrial Solutions division is revolutionizing the way
              businesses operate. Through our strong partnerships with Guangzhou
              Kwanshin IMP. & EXP. Co., Ltd. and Leung Bangladesh Ltd., we
              provide end-to-end solutions for large-scale industrial projects:
            </div>
            <ul className="text-lg tracking-wide mt-4 list-disc w-5/6">
              <li>
                Spare Parts Supply: Offering premium spare parts compatible with
                global leaders like Siemens, Rexroth, and Mitsubishi.
              </li>
              <li>
                Project Engineering Services: Comprehensive support, from
                providing technical equipment to dispatching engineers who
                enhance plant productivity.
              </li>
              <li>
                Diverse Product Offerings: Covering industries from building
                materials and hardware to high-tech automation products.
              </li>
              <li>
                Export-Import Business Services: Simplifying trade with
                logistical solutions, LC handling, and foreign exchange
                services.
              </li>
            </ul>
          </div>
        </div>
        {/* Automobile Dealership */}
        <div className="w-full h-screen text-center flex justify-center items-center bg-gray-800 bg-opacity-10">
          <div className="w-4/12 h-full p-8  flex justify-center items-center">
            <img
              src="/ventures/Real Estate.jpg"
              className="w-full h-4/6 rounded"
            />
          </div>
          <div className="w-8/12 p-8 h-full text-left  flex flex-col justify-center items-start">
            <h1 className="text-4xl font-medium tracking-wide mb-8">
              Automobile Dealership
            </h1>
            <div className="text-lg tracking-wide">
              MMG’s Industrial Solutions division is revolutionizing the way
              businesses operate. Through our strong partnerships with Guangzhou
              Kwanshin IMP. & EXP. Co., Ltd. and Leung Bangladesh Ltd., we
              provide end-to-end solutions for large-scale industrial projects:
            </div>
            <ul className="text-lg tracking-wide mt-4 list-disc w-5/6">
              <li>
                Spare Parts Supply: Offering premium spare parts compatible with
                global leaders like Siemens, Rexroth, and Mitsubishi.
              </li>
              <li>
                Project Engineering Services: Comprehensive support, from
                providing technical equipment to dispatching engineers who
                enhance plant productivity.
              </li>
              <li>
                Diverse Product Offerings: Covering industries from building
                materials and hardware to high-tech automation products.
              </li>
              <li>
                Export-Import Business Services: Simplifying trade with
                logistical solutions, LC handling, and foreign exchange
                services.
              </li>
            </ul>
          </div>
        </div>
        {/* Real Estate */}
        <div className="w-full h-screen text-center flex justify-center items-center bg-gray-800 bg-opacity-10">
          <div className="w-4/12 h-full p-8  flex justify-center items-center">
            <img
              src="/ventures/Real Estate.jpg"
              className="w-full h-4/6 rounded"
            />
          </div>
          <div className="w-8/12 p-8 h-full text-left  flex flex-col justify-center items-start">
            <h1 className="text-4xl font-medium tracking-wide mb-8">
              Real Estate
            </h1>
            <div className="text-lg tracking-wide">
              MMG’s Industrial Solutions division is revolutionizing the way
              businesses operate. Through our strong partnerships with Guangzhou
              Kwanshin IMP. & EXP. Co., Ltd. and Leung Bangladesh Ltd., we
              provide end-to-end solutions for large-scale industrial projects:
            </div>
            <ul className="text-lg tracking-wide mt-4 list-disc w-5/6">
              <li>
                Spare Parts Supply: Offering premium spare parts compatible with
                global leaders like Siemens, Rexroth, and Mitsubishi.
              </li>
              <li>
                Project Engineering Services: Comprehensive support, from
                providing technical equipment to dispatching engineers who
                enhance plant productivity.
              </li>
              <li>
                Diverse Product Offerings: Covering industries from building
                materials and hardware to high-tech automation products.
              </li>
              <li>
                Export-Import Business Services: Simplifying trade with
                logistical solutions, LC handling, and foreign exchange
                services.
              </li>
            </ul>
          </div>
        </div>

        {/* Power & Energy */}
        <div className="w-full h-screen text-center flex justify-center items-center bg-gray-800 bg-opacity-10">
          <div className="w-4/12 h-full p-8  flex justify-center items-center">
            <img
              src="/ventures/Real Estate.jpg"
              className="w-full h-4/6 rounded"
            />
          </div>
          <div className="w-8/12 p-8 h-full text-left  flex flex-col justify-center items-start">
            <h1 className="text-4xl font-medium tracking-wide mb-8">
              Power & Energy
            </h1>
            <div className="text-lg tracking-wide">
              MMG’s Industrial Solutions division is revolutionizing the way
              businesses operate. Through our strong partnerships with Guangzhou
              Kwanshin IMP. & EXP. Co., Ltd. and Leung Bangladesh Ltd., we
              provide end-to-end solutions for large-scale industrial projects:
            </div>
            <ul className="text-lg tracking-wide mt-4 list-disc w-5/6">
              <li>
                Spare Parts Supply: Offering premium spare parts compatible with
                global leaders like Siemens, Rexroth, and Mitsubishi.
              </li>
              <li>
                Project Engineering Services: Comprehensive support, from
                providing technical equipment to dispatching engineers who
                enhance plant productivity.
              </li>
              <li>
                Diverse Product Offerings: Covering industries from building
                materials and hardware to high-tech automation products.
              </li>
              <li>
                Export-Import Business Services: Simplifying trade with
                logistical solutions, LC handling, and foreign exchange
                services.
              </li>
            </ul>
          </div>
        </div>
        {/* Investment */}
        <div className="w-full h-screen text-center flex justify-center items-center bg-gray-800 bg-opacity-10">
          <div className="w-4/12 h-full p-8  flex justify-center items-center">
            <img
              src="/ventures/Real Estate.jpg"
              className="w-full h-4/6 rounded"
            />
          </div>
          <div className="w-8/12 p-8 h-full text-left  flex flex-col justify-center items-start">
            <h1 className="text-4xl font-medium tracking-wide mb-8">
              Investment
            </h1>
            <div className="text-lg tracking-wide">
              MMG’s Industrial Solutions division is revolutionizing the way
              businesses operate. Through our strong partnerships with Guangzhou
              Kwanshin IMP. & EXP. Co., Ltd. and Leung Bangladesh Ltd., we
              provide end-to-end solutions for large-scale industrial projects:
            </div>
            <ul className="text-lg tracking-wide mt-4 list-disc w-5/6">
              <li>
                Spare Parts Supply: Offering premium spare parts compatible with
                global leaders like Siemens, Rexroth, and Mitsubishi.
              </li>
              <li>
                Project Engineering Services: Comprehensive support, from
                providing technical equipment to dispatching engineers who
                enhance plant productivity.
              </li>
              <li>
                Diverse Product Offerings: Covering industries from building
                materials and hardware to high-tech automation products.
              </li>
              <li>
                Export-Import Business Services: Simplifying trade with
                logistical solutions, LC handling, and foreign exchange
                services.
              </li>
            </ul>
          </div>
        </div>
        {/* Software Solutions */}
        <div className="w-full h-screen text-center flex justify-center items-center bg-gray-800 bg-opacity-10">
          <div className="w-4/12 h-full p-8  flex justify-center items-center">
            <img
              src="/ventures/Real Estate.jpg"
              className="w-full h-4/6 rounded"
            />
          </div>
          <div className="w-8/12 p-8 h-full text-left  flex flex-col justify-center items-start">
            <h1 className="text-4xl font-medium tracking-wide mb-8">
              Software Solutions
            </h1>
            <div className="text-lg tracking-wide">
              MMG’s Industrial Solutions division is revolutionizing the way
              businesses operate. Through our strong partnerships with Guangzhou
              Kwanshin IMP. & EXP. Co., Ltd. and Leung Bangladesh Ltd., we
              provide end-to-end solutions for large-scale industrial projects:
            </div>
            <ul className="text-lg tracking-wide mt-4 list-disc w-5/6">
              <li>
                Spare Parts Supply: Offering premium spare parts compatible with
                global leaders like Siemens, Rexroth, and Mitsubishi.
              </li>
              <li>
                Project Engineering Services: Comprehensive support, from
                providing technical equipment to dispatching engineers who
                enhance plant productivity.
              </li>
              <li>
                Diverse Product Offerings: Covering industries from building
                materials and hardware to high-tech automation products.
              </li>
              <li>
                Export-Import Business Services: Simplifying trade with
                logistical solutions, LC handling, and foreign exchange
                services.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Industry;
