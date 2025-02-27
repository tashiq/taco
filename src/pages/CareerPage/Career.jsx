const Career = () => {
  return (
    <div
      className="text-center flex flex-col items-center justify-center gap-4 min-h-96 w-11/12 lg:w-10/12 mx-auto"
      style={{
        backgroundImage: "url(/mmg.png)",
        backgroundSize: "contain",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <h1 className="text-2xl lg:text-5xl capitalize font-normal">
        We&apos;re not hiring right now
      </h1>
      <div className="w-11/12 lg:w-1/2 text-sm lg:text-lg">
        Thank you for your interest in joining MM SEAWAYS LTD. Currently, we are
        not hiring for any positions. keep an eye on this page for future
        updates.
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
  );
};

export default Career;
