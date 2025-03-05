import { useEffect, useState } from "react";
import axios from "axios";
const Career = () => {
  // fetch data with axios
  const [data, setData] = useState([]);
  useEffect(() => {
    // axios.get("http://localhost:5000/jobhighlights").then((res) => {
    //   setData(res.data?.data);
    //   console.log(res.data?.data);
    // });
  }, []);
  return (
    <div
      className="w-11/12 lg:w-10/12 mx-auto mb-8"
      style={{
        backgroundImage: "url(/mmg.png)",
        backgroundSize: "contain",
        backgroundPosition: `${data.length == 0 ? "center" : "start"}`,
        backgroundRepeat: "no-repeat",
      }}
    >
      {data?.length == 0 ? (
        <div className="text-center flex flex-col items-center justify-center gap-4 min-h-[70vh] mx-auto">
          <h1 className="text-2xl lg:text-5xl capitalize font-normal">
            We&apos;re not hiring right now
          </h1>
          <div className="w-11/12 lg:w-1/2 text-sm lg:text-lg">
            Thank you for your interest in joining MM SEAWAYS LTD. Currently, we
            are not hiring for any positions. keep an eye on this page for
            future updates.
          </div>
          <div className="text-sm lg:text-lg">
            If you’d like to stay updated, follow us on{" "}
            <span className="text-blue-900">
              <a
                href="https://www.linkedin.com/company/mmseaways/"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </a>
            </span>
          </div>
        </div>
      ) : (
        <div className="my-8">
          <div className="mb-8">
            <div className="w-full lg:w-7/12 mb-6 text-xl lg:text-2xl">
              At MM SEAWAYS <br /> we believe in empowering our team to grow and
              thrive. Join a dynamic workplace where innovation, teamwork, and
              personal development are at the core of what we do
            </div>
            <button className="text-white bg-black rounded-md px-4 py-2 text-xl">
              Get Started
            </button>
          </div>
          <div className="mb-8">
            <h1 className="text-4xl text-black mb-8 font-normal">
              Why Join Us?
            </h1>
            <div className="flex flex-wrap justify-between gap-4">
              <div className="w-[360px] border border-1 border-black p-4 flex flex-col justify-between items-center">
                <p className="text-2xl font-medium">Growth Opportunities</p>
                <p className="text-xl">
                  A chance to develop skills and grow within the organization.
                </p>
              </div>
              <div className="w-[360px] border border-1 border-black p-4 flex flex-col justify-center items-center rounded-sm">
                <p className="text-2xl font-medium">Work-Life Balance</p>
                <p className="text-xl">We value your time and well being. </p>
              </div>
              <div className="w-[360px] border border-1 border-black p-4 flex flex-col justify-center items-center rounded-sm">
                <p className="text-2xl font-medium">Innovative Project</p>
                <p className="text-xl">
                  Contribute to impactful project across industries.
                </p>
              </div>
            </div>
          </div>
          <div>
            <h1 className="text-4xl text-black mb-8 font-normal">
              Job Circulars
            </h1>
            <div className="flex flex-wrap gap-4 justify-between mx-auto text-white">
              {data?.map((job) => (
                <div
                  key={job._id}
                  className="bg-black rounded-md box-border p-4 w-full md:w-[360px] text-xl"
                >
                  <h1 className="text-center font-medium text-2xl mb-3">
                    {job.title}
                  </h1>
                  <div className="flex">
                    <img
                      src="/location.png"
                      alt=""
                      className="w-[24px] h-[24px] mr-2 mb-2"
                    />
                    <p>{job.location}</p>
                  </div>
                  <div className="flex">
                    <img
                      src="/briefcase.png"
                      alt=""
                      className="w-[24px] h-[24px] mr-2 mb-2"
                    />
                    <p>{job.employmentType}</p>
                  </div>
                  <div className="flex">
                    <img
                      src="/clock.png"
                      alt=""
                      className="w-[24px] h-[24px] mr-2 mb-2"
                    />
                    <p>{job.applicationDeadline?.split("T")[0]}</p>
                  </div>
                  <div className="flex justify-center">
                    <button className="text-black bg-white rounded-sm px-3 py-2 text-lg">
                      Apply Now
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
      <div className="relative w-[93vw] h-16">
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

export default Career;
