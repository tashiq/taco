import "../../styles/index.css";
const Banner = () => {
  return (
    <div className="lg:px-6 sm:px-2 pt-4 lg:pt-8 pb-2 lg:pb-8 h-auto">
      <div className="overflow-hidden relative">
        <video
          className="rounded-md lg:rounded-xl w-full lg:w-[90vw] h-[65vh] object-cover"
          src="/top banner.mp4"
          type="video/mp4"
          autoPlay
          muted
          loop
        />
        <div className="text-xl md:text-2xl lg:text-4xl absolute top-1/2 w-5/12 lg:4/12 -translate-y-1/2 text-white lg:pl-12 pl-4 font-normal">
          Your Trusted Shipping Lines and Logistics Partner
        </div>
      </div>
    </div>
  );
};

export default Banner;
