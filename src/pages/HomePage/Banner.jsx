import "../../styles/banner.css";
import "../../styles/index.css";
const Banner = () => {
  return (
    <div className="banner overflow-hidden">
      <div className="top-video-container overflow-hidden">
        <video src="/top banner.mp4" type="video/mp4" autoPlay muted loop />
        <div className="text-4xl absolute top-1/2 w-4/12 -translate-y-1/2 text-white pl-12">
          Your Trusted Shipping Lines and Logistics Partner
          {/* <div className="text-5xl font-normal mt-1 content">
            <h2>Your Trusted </h2>
            <h2>Your Trusted </h2>
          </div>
          <div className="text-5xl font-normal mt-1 content">
            <h2>Shipping Lines and </h2>
            <h2>Shipping Lines and </h2>
          </div>
          <div className="text-5xl font-normal mt-1 content">
            <h2>Logistics Partner</h2>
            <h2>Logistics Partner</h2>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Banner;
