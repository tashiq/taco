import "../../styles/index.css";
import { useLocation } from "react-router";
const Services = () => {
  const location = useLocation();
  const serviceData = [
    {
      text: "Feeder Service",
      desc: `Our feeder division connects regional trade hubs with efficient, direct services to Singapore, Port Klang, Colombo, and Jebel Ali (Dubai), continuously adding more destinations. Backed by local expertise, our team ensures seamless operations by leveraging in-depth knowledge of local conditions to minimize administrative delays. We operate reliable feeder vessels tailored to trade requirements, providing a dependable link between smaller ports and global shipping networks.`,
      id: "feederage",
      serviceImg: "/ship.png",
      backtext: "Feederage",
    },
    {
      text: "Shipping Liner Agency",
      desc: `As a licensed NVOCC operator, MM Seaways offers tailored shipping liner agency solutions, including export cargo bookings, import consignment delivery, and in-house customs clearance. We specialize in freight consolidations to destinations like Europe, Puerto Rico, the Hawaiian Islands, Singapore, and Malaysia. Our services also include seamless documentation, intermodal transport, warehousing, industrial packing, and project cargo operations, ensuring efficient and reliable global shipping solutions.
 `,
      serviceImg: "/container.png",
      id: "oceanline",
      backtext: "Ocean Line",
    },
    {
      text: "Freight Forwarding",
      desc: `MM Seaways offers comprehensive freight forwarding services, seamlessly integrating air, ocean, and ground logistics. With expertise in LCL, FCL, temperature-controlled shipments, and hazardous cargo, we leverage a robust global network to ensure timely deliveries, efficient import and export consolidations, direct shipment boarding, transparent processes, and flexible solutions tailored to your needs.
`,
      serviceImg: "/truck.png",
      id: "freight",
      backtext: "Transpo",
    },

    {
      text: "Customs Clearance & Logistics",
      desc: `Our Customs Clearance and Logistics team ensures seamless cargo processing, whether for imports, exports, or transshipments. We specialize in classification, value assistance, and duty drawback filing, offering expert guidance to minimize delays and additional costs. Operating across all major Bangladeshi ports, MM Seaways delivers tailored solutions with precision, handling documentation, duty exemptions, and compliance.`,
      backtext: "Clear Log",
      id: "clear",
      serviceImg: "/clear.png",
    },
  ];

  useEffect(() => {
    if (location.hash) {
      const element = document.querySelector(location.hash);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);
  return (
    <>
      <div class="relative -z-50 mx-auto my-0">
        {serviceData.map((item, index) => (
          <SingleService
            key={index}
            id={item.id}
            text={item.text}
            serviceImg={item.serviceImg}
            desc={item.desc}
            rev={index % 2 == 0}
            backtext={item.backtext}
          />
        ))}
      </div>
    </>
  );
};

import PropTypes from "prop-types";
import { useEffect } from "react";

const SingleService = ({ serviceImg, backtext, text, id, desc, rev }) => {
  return (
    <>
      <div class="p-24 relative -z-10" id={id}>
        <h2 className="sticky flex justify-center items-center top-[10px] h-[60vh] p-[10px] font-medium mb-[10px] text-[9rem] text-center text-[rgba(2,150,141,0.32)] -z-10">
          {backtext}
        </h2>
        <div className="min-h-screen z-10 flex justify-between items-center gap-3">
          {rev == 0 ? (
            <>
              <div className="w-[60%] overflow-hidden">
                <img className="w-[90%]" src={serviceImg} alt={text} />
              </div>
              <div className="w-[40%]">
                <h1 className="text-[32px] font-medium mb-3">{text}</h1>
                <div>{desc}</div>
              </div>
            </>
          ) : (
            <>
              <div className="w-[60%] overflow-hidden">
                <h1 className="text-[32px] font-medium mb-3">{text}</h1>
                <div>{desc}</div>
              </div>
              <div className="w-[90%]">
                <img src={serviceImg} alt="Shiper Liner Agency" />
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
};
SingleService.propTypes = {
  serviceImg: PropTypes.string.isRequired,
  backtext: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
  rev: PropTypes.bool.isRequired,
};

export default Services;
