import { useEffect } from "react";
import "../../styles/industry.css";
import gsap from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { useLocation } from "react-router";

gsap.registerPlugin(ScrollToPlugin);
const Industry = () => {
  const location = useLocation();
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

    const timer2 = setTimeout(() => {
      gsap.to(window, {
        duration: 1,
        scrollTo: {
          y: "#business-container",
          autoKill: true,
        },
        ease: "power2.inOut",
      });
    }, 3000);
    const timer = setTimeout(() => {
      gsap.to(window, {
        duration: 1,
        scrollTo: {
          y: "#industries",
          autoKill: true,
        },
        ease: "power2.inOut",
      });
    }, 5000);
    if (location.hash) {
      const element = document.querySelector(location.hash);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
      clearTimeout(timer);
      clearTimeout(timer2);
    }
  }, [location]);

  return (
    <div>
      <div className="decode-text-container mt-8 overflow-hidden px-4 lg:px-6 box-border mx-auto flex justify-center items-center">
        <div
          className="decode-text text-xl lg:text-7xl uppercase font-medium flex gap-4 lg:gap-8 justify-center items-center"
          style={{ height: "calc(100vh - 70px)" }}
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
      <div
        className="bg-black bg-[url('/qoute_bg.png')] bg-no-repeat bg-center bg-contain bg-fixed text-white border border-red"
        id="business-container"
      >
        <div className="h-screen mb-4 font-light text-center flex flex-col justify-center items-center">
          <h1 className="text-xl lg:text-7xl font-medium tracking-wide mb-2 lg:mb-8  w-9/12">
            Leading the Future Across Diverse Sectors
          </h1>
          <p className="text-md lg:text-xl w-11/12 lg:w-8/12 tracking-wide">
            At MMG, we don’t just participate in industries; we dominate them
            with innovative solutions and unparalleled expertise. Below are the
            industries where we are reshaping standards and setting benchmarks
          </p>
        </div>

        {/* Industry Solutions */}
        <div
          id="industries"
          className="w-full mb-4 font-light text-center flex flex-col lg:flex-row justify-center items-center bg-gray-800 bg-opacity-10"
        >
          <div className="w-5/12 h-full p-8 hidden lg:flex justify-start items-center text-left text-gray-100 text-6xl font-normal">
            Revolutionizing Industrial Operations
          </div>
          <div className="w-full lg:w-7/12 px-4 py-1 lg:p-8 h-full text-left  flex flex-col justify-center items-start">
            <h1 className="text-3xl font-medium tracking-wide mb-1 lg:mb-8">
              Industrial Solutions
            </h1>

            <div className="w-full lg:w-5/12 h-full pb-2 text-left  text-[20px] text-gray-100 font-normal block lg:hidden">
              Revolutionizing Industrial Operations
            </div>
            <div className="text-md lg:text-lg tracking-wide">
              MMG’s Industrial Solutions division is transforming the industrial
              landscape with cutting-edge services and robust partnerships.
              Collaborating with Guangzhou Kwanshin IMP. & EXP. Co., Ltd. and
              Leung Bangladesh Ltd., we offer comprehensive solutions tailored
              to large-scale industrial projects.
            </div>
            <div className="text-md lg:text-lg tracking-wide">
              <div className="font-medium mt-2"> Spare Parts Supply</div>
              <div>
                Delivering premium spare parts compatible with industry leaders
                like Siemens, Rexroth, and Mitsubishi to ensure seamless
                operations.{" "}
              </div>
              <div className="font-medium mt-2">Diverse Product Offerings</div>
              <div>
                From building materials and hardware to high-tech automation
                products, we cater to a wide array of industrial needs.{" "}
              </div>
              <div className="font-medium mt-2">
                Export-Import Business Services
              </div>
              <div>
                Streamlining trade through:
                <ul className="list-disc pl-8">
                  <li>Efficient logistical solutions.</li>
                  <li>Hassle-free LC handling.</li>
                  <li>Expert foreign exchange services.</li>
                </ul>
              </div>
            </div>

            {/* <a
              href="/industry"
              className="uppercase px-3 py-1 bg-orange-500 text-white  font-normal rounded mt-8"
            >
              e-brochure
            </a> */}
          </div>
        </div>

        {/* Fisheries */}
        <div
          id="fisheries"
          className="w-full mb-4 font-light text-center flex flex-col lg:flex-row justify-center items-center bg-gray-800 bg-opacity-10"
        >
          <div className="w-5/12 h-full p-8 hidden lg:flex justify-start items-center text-left text-gray-100 text-6xl font-normal">
            Pioneers in Premium Seafood Export{" "}
          </div>
          <div className="w-full lg:w-7/12 px-4 py-1 lg:p-8 h-full text-left  flex flex-col justify-center items-start">
            <h1 className="text-3xl font-medium tracking-wide mb-1 lg:mb-8">
              Fisheries
            </h1>

            <div className="w-full lg:w-5/12 h-full pb-2 text-left  text-[20px] text-gray-100 font-normal block lg:hidden">
              Pioneers in Premium Seafood Export{" "}
            </div>
            <div className="text-md lg:text-lg tracking-wide">
              A proud concern of MMG, our fisheries business leads the way in
              exporting high-quality seafood across the globe. Specializing in
              shrimp, cattle fish, and soul fish, we cater to discerning markets
              with a commitment to freshness and excellence.
            </div>
            <div className="text-md lg:text-lg tracking-wide">
              <div className="font-medium mt-2">
                {" "}
                Global Markets, Unmatched Reach
              </div>
              <div>
                <ul className="list-disc pl-8">
                  <li>
                    Shrimp Exports: Supplying premium shrimp to Japan and China.
                  </li>
                  <li>
                    Fresh Seafood: Serving key importers in Oman, UAE, India,
                    and Saudi Arabia.
                  </li>
                </ul>
              </div>
              <div className="font-medium mt-2">
                Advanced Fleet for Reliable Deliveries
              </div>
              <div>
                <ul className="list-disc pl-8">
                  <li>
                    Fleet Capacity: State-of-the-art vessels with 400-ton
                    capacity, designed for efficiency.{" "}
                  </li>
                  <li>
                    Operational Excellence: Seamless management of both short
                    and long voyages to meet international demands.
                  </li>
                </ul>
              </div>
              <div className="font-medium mt-2">Seasonality and Quality</div>
              <div>
                <ul className="list-disc pl-8">
                  <li>
                    Seasonal Operations: From August to May, ensuring the peak
                    freshness of every catch.{" "}
                  </li>
                  <li>
                    Unwavering Standards: Strict quality control guarantees
                    superior seafood every time
                  </li>
                </ul>
              </div>
            </div>

            {/* <a
              href="/industry"
              className="uppercase px-3 py-1 bg-orange-500 text-white  font-normal rounded mt-8"
            >
              e-brochure
            </a> */}
          </div>
        </div>
        {/* Logistic Services */}
        <div
          id="logistic"
          className="w-full mb-4 font-light text-center flex flex-col lg:flex-row justify-center items-center bg-gray-800 bg-opacity-10"
        >
          <div className="w-5/12 h-full p-8 hidden lg:flex justify-start items-center text-left text-gray-100 text-6xl font-normal">
            Seamless Operations for Global Businesses{" "}
          </div>
          <div className="w-full lg:w-7/12 px-4 py-1 lg:p-8 h-full text-left  flex flex-col justify-center items-start">
            <h1 className="text-3xl font-medium tracking-wide mb-1 lg:mb-8">
              Logistics Services
            </h1>

            <div className="w-full lg:w-5/12 h-full pb-2 text-left  text-[20px] text-gray-100 font-normal block lg:hidden">
              Seamless Operations for Global Businesses{" "}
            </div>
            <div className="text-md lg:text-lg tracking-wide">
              MMG, through MM Seaways Ltd., delivers world-class logistics
              solutions designed to meet the dynamic needs of businesses
              worldwide.
            </div>
            <div className="text-md lg:text-lg tracking-wide">
              <div className="font-medium mt-2"> Our Expertise</div>
              <div>
                <ul className="list-disc pl-8">
                  <li>
                    Efficient Maritime Logistics: Reliable and timely solutions
                    tailored for global shipping needs.
                  </li>
                  <li>
                    Streamlined Supply Chain Operations: Customized services to
                    optimize supply chains and enhance efficiency.
                  </li>
                  <li>
                    Comprehensive Support: Expertise in cargo handling, shipping
                    schedules, and international trade compliance, ensuring
                    smooth operations across borders.
                  </li>
                </ul>
              </div>
              <div>
                With MM Seaways Ltd., MMG is your trusted partner for seamless
                logistics, helping your business stay ahead in a global market.
              </div>
            </div>

            {/* <a
              href="/industry"
              className="uppercase px-3 py-1 bg-orange-500 text-white  font-normal rounded mt-8"
            >
              e-brochure
            </a> */}
          </div>
        </div>
        {/* Automobile Dealership */}
        <div
          id="automobile"
          className="w-full mb-4 font-light text-center flex flex-col lg:flex-row justify-center items-center bg-gray-800 bg-opacity-10"
        >
          <div className="w-5/12 h-full p-8 hidden lg:flex justify-start items-center text-left text-gray-100 text-6xl font-normal">
            Exploring New Horizons in Mobility
          </div>
          <div className="w-full lg:w-7/12 px-4 py-1 lg:p-8 h-full text-left  flex flex-col justify-center items-start">
            <h1 className="text-3xl font-medium tracking-wide mb-1 lg:mb-8">
              Automobile Dealership
            </h1>

            <div className="w-full lg:w-5/12 h-full pb-2 text-left  text-[20px] text-gray-100 font-normal block lg:hidden">
              Exploring New Horizons in Mobility
            </div>
            <div className="text-md lg:text-lg tracking-wide">
              MMG is venturing into Bangladesh’s automobile sector, connecting
              global brands with local buyers.
            </div>
            <div className="text-md lg:text-lg tracking-wide">
              <div className="font-medium mt-2">Key Focus</div>
              <div>
                We aim to bring reliable vehicles and exceptional service to our
                customers while exploring opportunities to grow in the
                automotive dealership space.
              </div>
              <div className="font-medium mt-2">Commitment to Quality</div>
              <div>
                <ul className="list-disc pl-8">
                  <li>Partnering with trusted global brands.</li>
                  <li>Ensuring a seamless purchase and service experience.</li>
                </ul>
              </div>
              <div className="font-medium">Driving Forward</div>
              <div>
                MMG is committed to shaping the future of mobility, enhancing
                access to quality vehicles, and building lasting customer
                relationships
              </div>
            </div>
            {/* <a
              href="/industry"
              className="uppercase px-3 py-1 bg-orange-500 text-white  font-normal rounded mt-8"
            >
              e-brochure
            </a> */}
          </div>
        </div>
        {/* Real Estate */}
        <div
          id="real-estate"
          className="w-full mb-4 font-light text-center flex flex-col lg:flex-row justify-center items-center bg-gray-800 bg-opacity-10"
        >
          <div className="w-5/12 h-full p-8 hidden lg:flex justify-start items-center text-left text-gray-100 text-6xl font-normal">
            Redefining Real Estate Excellence{" "}
          </div>
          <div className="w-full lg:w-7/12 px-4 py-1 lg:p-8 h-full text-left  flex flex-col justify-center items-start">
            <h1 className="text-3xl font-medium tracking-wide mb-1 lg:mb-8">
              Real Estate
            </h1>

            <div className="w-full lg:w-5/12 h-full pb-2 text-left  text-[20px] text-gray-100 font-normal block lg:hidden">
              Redefining Real Estate Excellence{" "}
            </div>
            <div className="text-md lg:text-lg tracking-wide">
              MMG’s real estate ventures are a testament to innovation, luxury,
              and environmental sustainability, setting new standards in the
              industry.
            </div>
            <div className="text-md lg:text-lg tracking-wide">
              <div className="font-medium mt-2"> Premier Properties</div>
              <div>
                Specializing in top-tier residential and commercial properties,
                we deliver exceptional living and business spaces designed for
                modern lifestyles.
              </div>
              <div className="font-medium mt-2">Strategic Locations </div>
              <div>
                Our properties are situated in the most desirable areas of
                Dhaka, Chittagong, and other major cities, ensuring prime
                accessibility and value.
              </div>
              <div className="font-medium mt-2">
                Local Expertise, Global Reach
              </div>
              <div>
                Leveraging in-depth knowledge of the{" "}
                <span className="font-medium">Bangladeshi market</span>, we
                cater to:
                <ul className="list-disc pl-8">
                  <li>Local buyers seeking dream homes.</li>
                  <li>
                    International investors looking for lucrative opportunities.
                  </li>
                  <li>Tenants in search of premium spaces.</li>
                </ul>
              </div>
            </div>

            {/* <a
              href="/industry"
              className="uppercase px-3 py-1 bg-orange-500 text-white  font-normal rounded mt-8"
            >
              e-brochure
            </a> */}
          </div>
        </div>

        {/* Power & Energy */}
        <div
          id="power"
          className="w-full mb-4 font-light text-center flex flex-col lg:flex-row justify-center items-center bg-gray-800 bg-opacity-10"
        >
          <div className="w-5/12 h-full p-8 hidden lg:flex justify-start items-center text-left text-gray-100 text-6xl font-normal">
            Shaping a Sustainable Future{" "}
          </div>
          <div className="w-full lg:w-7/12 px-4 py-1 lg:p-8 h-full text-left  flex flex-col justify-center items-start">
            <h1 className="text-3xl font-medium tracking-wide mb-1 lg:mb-8">
              Power & Energy
            </h1>

            <div className="w-full lg:w-5/12 h-full pb-2 text-left  text-[20px] text-gray-100 font-normal block lg:hidden">
              Shaping a Sustainable Future{" "}
            </div>
            <div className="text-md lg:text-lg tracking-wide">
              MMG is revolutionizing the energy landscape, driving innovation,
              reliability, and sustainability in Bangladesh’s power and energy
              sector.
            </div>
            <div className="text-md lg:text-lg tracking-wide">
              <div className="font-bold"> Key Industry Player</div>
              <div>
                We are a trusted leader, delivering groundbreaking solutions
                that meet the growing energy demands of the nation.
              </div>
              <div className="font-bold">Sustainable Commitments </div>
              <div>
                With a focus on renewable energy and innovative technologies, we
                aim to:
                <ul className="list-disc pl-8">
                  <li>Ensure reliable power supply.</li>
                  <li>Foster environmental sustainability.</li>
                  <li>Contribute to the nation’s energy security.</li>
                </ul>
              </div>
              <div className="font-bold">Pioneering Progress</div>
              <div>
                At MMG, we are dedicated to powering progress and building a
                brighter, more sustainable future for Bangladesh.
              </div>
            </div>

            {/* <a
              href="/industry"
              className="uppercase px-3 py-1 bg-orange-500 text-white  font-normal rounded mt-8"
            >
              e-brochure
            </a> */}
          </div>
        </div>
        {/* Investment */}
        <div
          id="investment"
          className="w-full mb-4 font-light text-center flex flex-col lg:flex-row justify-center items-center bg-gray-800 bg-opacity-10"
        >
          <div className="w-5/12 h-full p-8 hidden lg:flex justify-start items-center text-left text-gray-100 text-6xl font-normal">
            Driving Growth Across Industries{" "}
          </div>
          <div className="w-full lg:w-7/12 px-4 py-1 lg:p-8 h-full text-left  flex flex-col justify-center items-start">
            <h1 className="text-3xl font-medium tracking-wide mb-1 lg:mb-8">
              Investment
            </h1>

            <div className="w-full lg:w-5/12 h-full pb-2 text-left  text-[20px] text-gray-100 font-normal block lg:hidden">
              Driving Growth Across Industries{" "}
            </div>
            <div className="text-md lg:text-lg tracking-wide">
              At MMG, we specialize in identifying and nurturing transformative
              opportunities that shape the future.
            </div>
            <div className="text-md lg:text-lg tracking-wide">
              <div className="font-bold">Our Focus</div>

              <ul className="list-disc pl-8">
                <li>
                  Diverse Portfolio: Investments across sectors such as real
                  estate, technology, manufacturing, and energy.
                </li>
                <li>
                  Market-Driven Strategy: Built on deep market insights and
                  robust partnerships, ensuring long-term value creation.
                </li>
                <li>
                  Commitment to Growth: Focused on industries that promote
                  sustainable development, innovation, and job creation.
                </li>
              </ul>
              <div>
                As a leading investment firm in Bangladesh, MMG is dedicated to
                fostering economic growth and driving meaningful change in key
                industries. Together, we’re building a brighter, more
                sustainable future for all.
              </div>
            </div>
            {/* <a
              href="/industry"
              className="uppercase px-3 py-1 bg-orange-500 text-white  font-normal rounded mt-8"
            >
              e-brochure
            </a> */}
          </div>
        </div>
        {/* Software Solutions */}
        <div
          id="software"
          className="w-full font-light text-center flex flex-col lg:flex-row justify-center items-center bg-gray-800 bg-opacity-10"
        >
          <div className="w-5/12 h-full p-8 hidden lg:flex justify-start items-center text-left text-gray-100 text-6xl font-normal">
            Driving Innovation for Businesses{" "}
          </div>
          <div className="w-full lg:w-7/12 px-4 py-1 lg:p-8 h-full text-left  flex flex-col justify-center items-start">
            <h1 className="text-3xl font-medium tracking-wide mb-1 lg:mb-8">
              Telecommunications & IT{" "}
            </h1>

            <div className="w-full lg:w-5/12 h-full pb-2 text-left  text-[20px] text-gray-100 font-normal block lg:hidden">
              Driving Innovation for Businesses{" "}
            </div>
            <div className="text-md lg:text-lg tracking-wide">
              MMG harnesses the power of technology to empower businesses with
              customized software solutions that enhance efficiency, streamline
              processes, and foster growth.
            </div>
            <div className="text-md lg:text-lg tracking-wide">
              <div className="font-bold">Innovative Offerings</div>
              Our services are tailored to meet the unique needs of diverse
              industries, including:
              <ul className="list-disc pl-8">
                <li>
                  Custom Software Development: Personalized solutions to match
                  your business requirements.
                </li>
                <li>
                  Mobile App Development: Seamless, user-friendly apps for
                  enhanced engagement.
                </li>
                <li>
                  Cloud Computing: Scalable and secure cloud solutions for
                  optimal performance.
                </li>
                <li>
                  ERP Systems: Comprehensive platforms to manage and integrate
                  core business processes.
                </li>
              </ul>
              <div className="font-bold">Industry Expertise</div>
              <div>
                From education to manufacturing, MMG delivers cutting-edge
                technologies that drive efficiency and open new pathways for
                growth.
              </div>
            </div>
            {/* <a
              href="/industry"
              className="uppercase px-3 py-1 bg-orange-500 text-white  font-normal rounded mt-8"
            >
              e-brochure
            </a> */}
          </div>
        </div>
      </div>
      <div className="relative w-[96vw] h-16 mt-4">
        <button
          className="w-12 h-12 absolute bottom-6 right-10"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          <img src="/go up.png" alt="" srcset="" />
        </button>
      </div>
    </div>
  );
};

export default Industry;
