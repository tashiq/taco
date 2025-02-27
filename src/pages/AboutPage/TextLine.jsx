// import React, { useEffect, useRef, useState } from "react";

// const TextLine = () => {
//   const carouselRef = useRef(null);
//   const [items, setItems] = useState([
//     "Telecommunications & IT",
//     "Logistics Services",
//     "Automobile Dealership",
//     "Real Estate",
//     "Fisheries",
//     "Investment",
//     "Industrial Solutions",
//     "Power & Energy",
//   ]);
//   useEffect(() => {
//     let total = 0,
//       index = 0;
//     carouselRef.current.style.transition = "transform 0.5s ease";
//     const interval = setInterval(() => {
//       // index = index++ % 8;
//       total += carouselRef.current.children[index++ % 8].offsetWidth;
//       // console.log(total);
//       carouselRef.current.style.transform = `translateX(-${total}px)`;
//       setItems((prevItems) => {
//         // console.log(prevItems[index % 8]);
//         return [...prevItems, prevItems[index % 8]];
//       });
//     }, 1000);

//     return () => clearInterval(interval);
//   }, []);
//   return (
//     <div
//       className="w-max overflow-hidden py-4 px-6 flex gap-20 justify-evenly items-center text-3xl font-normal agdasima"
//       ref={carouselRef}
//     >
//       {items.map((item, index) => (
//         <p key={index} className="w-fit">
//           {item}
//         </p>
//       ))}
//     </div>
//   );
// };

// export default TextLine;
import "../../styles/textline.css";
const TextLine = () => {
  return (
    <div class="p-1 lg:p-4 overflow-hidden whitespace-nowrap">
      <div class="inline-block animate-marquee text-lg lg:text-3xl font-normal agdasima">
        Telecommunications & IT &nbsp;&nbsp;&nbsp;&nbsp; Logistics Services
        &nbsp;&nbsp;&nbsp;&nbsp; Automobile Dealership &nbsp;&nbsp;&nbsp;&nbsp;
        Real Estate &nbsp;&nbsp;&nbsp;&nbsp; Fisheries &nbsp;&nbsp;&nbsp;&nbsp;
        Investment &nbsp;&nbsp;&nbsp;&nbsp; Industrial Solutions
        &nbsp;&nbsp;&nbsp;&nbsp; Power & Energy &nbsp;&nbsp;&nbsp;&nbsp;
        Telecommunications & IT &nbsp;&nbsp;&nbsp;&nbsp; Logistics Services
        &nbsp;&nbsp;&nbsp;&nbsp; Automobile Dealership &nbsp;&nbsp;&nbsp;&nbsp;
        Real Estate &nbsp;&nbsp;&nbsp;&nbsp; Fisheries &nbsp;&nbsp;&nbsp;&nbsp;
        Investment &nbsp;&nbsp;&nbsp;&nbsp; Industrial Solutions
        &nbsp;&nbsp;&nbsp;&nbsp; Power & Energy &nbsp;&nbsp;&nbsp;&nbsp;
        Telecommunications & IT &nbsp;&nbsp;&nbsp;&nbsp; Logistics Services
        &nbsp;&nbsp;&nbsp;&nbsp; Automobile Dealership &nbsp;&nbsp;&nbsp;&nbsp;
        Real Estate &nbsp;&nbsp;&nbsp;&nbsp; Fisheries &nbsp;&nbsp;&nbsp;&nbsp;
        Investment &nbsp;&nbsp;&nbsp;&nbsp; Industrial Solutions
        &nbsp;&nbsp;&nbsp;&nbsp; Power & Energy &nbsp;&nbsp;&nbsp;&nbsp;
        Telecommunications & IT &nbsp;&nbsp;&nbsp;&nbsp; Logistics Services
        &nbsp;&nbsp;&nbsp;&nbsp; Automobile Dealership &nbsp;&nbsp;&nbsp;&nbsp;
        Real Estate &nbsp;&nbsp;&nbsp;&nbsp; Fisheries &nbsp;&nbsp;&nbsp;&nbsp;
        Investment &nbsp;&nbsp;&nbsp;&nbsp; Industrial Solutions
        &nbsp;&nbsp;&nbsp;&nbsp; Power & Energy
        &nbsp;&nbsp;&nbsp;&nbsp;Telecommunications & IT &nbsp;&nbsp;&nbsp;&nbsp;
        Logistics Services &nbsp;&nbsp;&nbsp;&nbsp; Automobile Dealership
        &nbsp;&nbsp;&nbsp;&nbsp; Real Estate &nbsp;&nbsp;&nbsp;&nbsp; Fisheries
        &nbsp;&nbsp;&nbsp;&nbsp; Investment &nbsp;&nbsp;&nbsp;&nbsp; Industrial
        Solutions &nbsp;&nbsp;&nbsp;&nbsp; Power & Energy
        &nbsp;&nbsp;&nbsp;&nbsp; Telecommunications & IT
        &nbsp;&nbsp;&nbsp;&nbsp; Logistics Services &nbsp;&nbsp;&nbsp;&nbsp;
        Automobile Dealership &nbsp;&nbsp;&nbsp;&nbsp; Real Estate
        &nbsp;&nbsp;&nbsp;&nbsp; Fisheries &nbsp;&nbsp;&nbsp;&nbsp; Investment
        &nbsp;&nbsp;&nbsp;&nbsp; Industrial Solutions &nbsp;&nbsp;&nbsp;&nbsp;
        Power & Energy &nbsp;&nbsp;&nbsp;&nbsp;Telecommunications & IT
        &nbsp;&nbsp;&nbsp;&nbsp; Logistics Services &nbsp;&nbsp;&nbsp;&nbsp;
        Automobile Dealership &nbsp;&nbsp;&nbsp;&nbsp; Real Estate
        &nbsp;&nbsp;&nbsp;&nbsp; Fisheries &nbsp;&nbsp;&nbsp;&nbsp; Investment
        &nbsp;&nbsp;&nbsp;&nbsp; Industrial Solutions &nbsp;&nbsp;&nbsp;&nbsp;
        Power & Energy &nbsp;&nbsp;&nbsp;&nbsp; Telecommunications & IT
        &nbsp;&nbsp;&nbsp;&nbsp; Logistics Services &nbsp;&nbsp;&nbsp;&nbsp;
        Automobile Dealership &nbsp;&nbsp;&nbsp;&nbsp; Real Estate
        &nbsp;&nbsp;&nbsp;&nbsp; Fisheries &nbsp;&nbsp;&nbsp;&nbsp; Investment
        &nbsp;&nbsp;&nbsp;&nbsp; Industrial Solutions &nbsp;&nbsp;&nbsp;&nbsp;
        Power & Energy &nbsp;&nbsp;&nbsp;&nbsp;Telecommunications & IT
        &nbsp;&nbsp;&nbsp;&nbsp; Logistics Services &nbsp;&nbsp;&nbsp;&nbsp;
        Automobile Dealership &nbsp;&nbsp;&nbsp;&nbsp; Real Estate
        &nbsp;&nbsp;&nbsp;&nbsp; Fisheries &nbsp;&nbsp;&nbsp;&nbsp; Investment
        &nbsp;&nbsp;&nbsp;&nbsp; Industrial Solutions &nbsp;&nbsp;&nbsp;&nbsp;
        Power & Energy &nbsp;&nbsp;&nbsp;&nbsp; Telecommunications & IT
        &nbsp;&nbsp;&nbsp;&nbsp; Logistics Services &nbsp;&nbsp;&nbsp;&nbsp;
        Automobile Dealership &nbsp;&nbsp;&nbsp;&nbsp; Real Estate
        &nbsp;&nbsp;&nbsp;&nbsp; Fisheries &nbsp;&nbsp;&nbsp;&nbsp; Investment
        &nbsp;&nbsp;&nbsp;&nbsp; Industrial Solutions &nbsp;&nbsp;&nbsp;&nbsp;
        Power & Energy &nbsp;&nbsp;&nbsp;&nbsp;Telecommunications & IT
        &nbsp;&nbsp;&nbsp;&nbsp; Logistics Services &nbsp;&nbsp;&nbsp;&nbsp;
        Automobile Dealership &nbsp;&nbsp;&nbsp;&nbsp; Real Estate
        &nbsp;&nbsp;&nbsp;&nbsp; Fisheries &nbsp;&nbsp;&nbsp;&nbsp; Investment
        &nbsp;&nbsp;&nbsp;&nbsp; Industrial Solutions &nbsp;&nbsp;&nbsp;&nbsp;
        Power & Energy &nbsp;&nbsp;&nbsp;&nbsp; Telecommunications & IT
        &nbsp;&nbsp;&nbsp;&nbsp; Logistics Services &nbsp;&nbsp;&nbsp;&nbsp;
        Automobile Dealership &nbsp;&nbsp;&nbsp;&nbsp; Real Estate
        &nbsp;&nbsp;&nbsp;&nbsp; Fisheries &nbsp;&nbsp;&nbsp;&nbsp; Investment
        &nbsp;&nbsp;&nbsp;&nbsp; Industrial Solutions &nbsp;&nbsp;&nbsp;&nbsp;
        Power & Energy &nbsp;&nbsp;&nbsp;&nbsp;Telecommunications & IT
        &nbsp;&nbsp;&nbsp;&nbsp; Logistics Services &nbsp;&nbsp;&nbsp;&nbsp;
        Automobile Dealership &nbsp;&nbsp;&nbsp;&nbsp; Real Estate
        &nbsp;&nbsp;&nbsp;&nbsp; Fisheries &nbsp;&nbsp;&nbsp;&nbsp; Investment
        &nbsp;&nbsp;&nbsp;&nbsp; Industrial Solutions &nbsp;&nbsp;&nbsp;&nbsp;
        Power & Energy &nbsp;&nbsp;&nbsp;&nbsp; Telecommunications & IT
        &nbsp;&nbsp;&nbsp;&nbsp; Logistics Services &nbsp;&nbsp;&nbsp;&nbsp;
        Automobile Dealership &nbsp;&nbsp;&nbsp;&nbsp; Real Estate
        &nbsp;&nbsp;&nbsp;&nbsp; Fisheries &nbsp;&nbsp;&nbsp;&nbsp; Investment
        &nbsp;&nbsp;&nbsp;&nbsp; Industrial Solutions &nbsp;&nbsp;&nbsp;&nbsp;
        Power & Energy &nbsp;&nbsp;&nbsp;&nbsp;Telecommunications & IT
        &nbsp;&nbsp;&nbsp;&nbsp; Logistics Services &nbsp;&nbsp;&nbsp;&nbsp;
        Automobile Dealership &nbsp;&nbsp;&nbsp;&nbsp; Real Estate
        &nbsp;&nbsp;&nbsp;&nbsp; Fisheries &nbsp;&nbsp;&nbsp;&nbsp; Investment
        &nbsp;&nbsp;&nbsp;&nbsp; Industrial Solutions &nbsp;&nbsp;&nbsp;&nbsp;
        Power & Energy &nbsp;&nbsp;&nbsp;&nbsp; Telecommunications & IT
        &nbsp;&nbsp;&nbsp;&nbsp; Logistics Services &nbsp;&nbsp;&nbsp;&nbsp;
        Automobile Dealership &nbsp;&nbsp;&nbsp;&nbsp; Real Estate
        &nbsp;&nbsp;&nbsp;&nbsp; Fisheries &nbsp;&nbsp;&nbsp;&nbsp; Investment
        &nbsp;&nbsp;&nbsp;&nbsp; Industrial Solutions &nbsp;&nbsp;&nbsp;&nbsp;
        Power & Energy &nbsp;&nbsp;&nbsp;&nbsp;Telecommunications & IT
        &nbsp;&nbsp;&nbsp;&nbsp; Logistics Services &nbsp;&nbsp;&nbsp;&nbsp;
        Automobile Dealership &nbsp;&nbsp;&nbsp;&nbsp; Real Estate
        &nbsp;&nbsp;&nbsp;&nbsp; Fisheries &nbsp;&nbsp;&nbsp;&nbsp; Investment
        &nbsp;&nbsp;&nbsp;&nbsp; Industrial Solutions &nbsp;&nbsp;&nbsp;&nbsp;
        Power & Energy &nbsp;&nbsp;&nbsp;&nbsp; Telecommunications & IT
        &nbsp;&nbsp;&nbsp;&nbsp; Logistics Services &nbsp;&nbsp;&nbsp;&nbsp;
        Automobile Dealership &nbsp;&nbsp;&nbsp;&nbsp; Real Estate
        &nbsp;&nbsp;&nbsp;&nbsp; Fisheries &nbsp;&nbsp;&nbsp;&nbsp; Investment
        &nbsp;&nbsp;&nbsp;&nbsp; Industrial Solutions &nbsp;&nbsp;&nbsp;&nbsp;
        Power & Energy &nbsp;&nbsp;&nbsp;&nbsp;Telecommunications & IT
        &nbsp;&nbsp;&nbsp;&nbsp; Logistics Services &nbsp;&nbsp;&nbsp;&nbsp;
        Automobile Dealership &nbsp;&nbsp;&nbsp;&nbsp; Real Estate
        &nbsp;&nbsp;&nbsp;&nbsp; Fisheries &nbsp;&nbsp;&nbsp;&nbsp; Investment
        &nbsp;&nbsp;&nbsp;&nbsp; Industrial Solutions &nbsp;&nbsp;&nbsp;&nbsp;
        Power & Energy &nbsp;&nbsp;&nbsp;&nbsp; Telecommunications & IT
        &nbsp;&nbsp;&nbsp;&nbsp; Logistics Services &nbsp;&nbsp;&nbsp;&nbsp;
        Automobile Dealership &nbsp;&nbsp;&nbsp;&nbsp; Real Estate
        &nbsp;&nbsp;&nbsp;&nbsp; Fisheries &nbsp;&nbsp;&nbsp;&nbsp; Investment
        &nbsp;&nbsp;&nbsp;&nbsp; Industrial Solutions &nbsp;&nbsp;&nbsp;&nbsp;
        Power & Energy &nbsp;&nbsp;&nbsp;&nbsp;Telecommunications & IT
        &nbsp;&nbsp;&nbsp;&nbsp; Logistics Services &nbsp;&nbsp;&nbsp;&nbsp;
        Automobile Dealership &nbsp;&nbsp;&nbsp;&nbsp; Real Estate
        &nbsp;&nbsp;&nbsp;&nbsp; Fisheries &nbsp;&nbsp;&nbsp;&nbsp; Investment
        &nbsp;&nbsp;&nbsp;&nbsp; Industrial Solutions &nbsp;&nbsp;&nbsp;&nbsp;
        Power & Energy &nbsp;&nbsp;&nbsp;&nbsp; Telecommunications & IT
        &nbsp;&nbsp;&nbsp;&nbsp; Logistics Services &nbsp;&nbsp;&nbsp;&nbsp;
        Automobile Dealership &nbsp;&nbsp;&nbsp;&nbsp; Real Estate
        &nbsp;&nbsp;&nbsp;&nbsp; Fisheries &nbsp;&nbsp;&nbsp;&nbsp; Investment
        &nbsp;&nbsp;&nbsp;&nbsp; Industrial Solutions &nbsp;&nbsp;&nbsp;&nbsp;
        Power & Energy &nbsp;&nbsp;&nbsp;&nbsp;Telecommunications & IT
        &nbsp;&nbsp;&nbsp;&nbsp; Logistics Services &nbsp;&nbsp;&nbsp;&nbsp;
        Automobile Dealership &nbsp;&nbsp;&nbsp;&nbsp; Real Estate
        &nbsp;&nbsp;&nbsp;&nbsp; Fisheries &nbsp;&nbsp;&nbsp;&nbsp; Investment
        &nbsp;&nbsp;&nbsp;&nbsp; Industrial Solutions &nbsp;&nbsp;&nbsp;&nbsp;
        Power & Energy &nbsp;&nbsp;&nbsp;&nbsp; Telecommunications & IT
        &nbsp;&nbsp;&nbsp;&nbsp; Logistics Services &nbsp;&nbsp;&nbsp;&nbsp;
        Automobile Dealership &nbsp;&nbsp;&nbsp;&nbsp; Real Estate
        &nbsp;&nbsp;&nbsp;&nbsp; Fisheries &nbsp;&nbsp;&nbsp;&nbsp; Investment
        &nbsp;&nbsp;&nbsp;&nbsp; Industrial Solutions &nbsp;&nbsp;&nbsp;&nbsp;
        Power & Energy &nbsp;&nbsp;&nbsp;&nbsp; Telecommunications & IT
        &nbsp;&nbsp;&nbsp;&nbsp; Logistics Services &nbsp;&nbsp;&nbsp;&nbsp;
        Automobile Dealership &nbsp;&nbsp;&nbsp;&nbsp; Real Estate
        &nbsp;&nbsp;&nbsp;&nbsp; Fisheries &nbsp;&nbsp;&nbsp;&nbsp; Investment
        &nbsp;&nbsp;&nbsp;&nbsp; Industrial Solutions &nbsp;&nbsp;&nbsp;&nbsp;
        Power & Energy &nbsp;&nbsp;&nbsp;&nbsp; Telecommunications & IT
        &nbsp;&nbsp;&nbsp;&nbsp; Logistics Services &nbsp;&nbsp;&nbsp;&nbsp;
        Automobile Dealership &nbsp;&nbsp;&nbsp;&nbsp; Real Estate
        &nbsp;&nbsp;&nbsp;&nbsp; Fisheries &nbsp;&nbsp;&nbsp;&nbsp; Investment
        &nbsp;&nbsp;&nbsp;&nbsp; Industrial Solutions &nbsp;&nbsp;&nbsp;&nbsp;
        Power & Energy &nbsp;&nbsp;&nbsp;&nbsp;
      </div>
    </div>
  );
};

export default TextLine;
