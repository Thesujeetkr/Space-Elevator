import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const BenefitsHome = () => {
  const benefits = [
    {
      id: 1,
      title: "2–3 Weeks Installation",
      description:
        "Lorem ipsum dolor sit amet, consectetur cdolor col adipiscing elit. Integer mattis nunc augue vel lacinia erat euismod ut. Sed eleifend tellus nonole tincidunt aliquet.",
    },
    {
      id: 2,
      title: "Whisper-Quiet, Smooth Ride",
      description:
        "Lorem ipsum dolor sit amet, consectetur cdolor col adipiscing elit. Integer mattis nunc augue vel lacinia erat euismod ut. Sed eleifend tellus nonole tincidunt aliquet.",
    },
    {
      id: 3,
      title: "World-Class Safety",
      description:
        "Lorem ipsum dolor sit amet, consectetur cdolor col adipiscing elit. Integer mattis nunc augue vel lacinia erat euismod ut. Sed eleifend tellus nonole tincidunt aliquet.",
    },
    {
      id: 4,
      title: "No Deep Pit. No Shaft.",
      description:
        "Lorem ipsum dolor sit amet, consectetur cdolor col adipiscing elit. Integer mattis nunc augue vel lacinia erat euismod ut. Sed eleifend tellus nonole tincidunt aliquet.",
    },
    {
      id: 5,
      title: "Tailored for Your Taste",
      description:
        "Lorem ipsum dolor sit amet, consectetur cdolor col adipiscing elit. Integer mattis nunc augue vel lacinia erat euismod ut. Sed eleifend tellus nonole tincidunt aliquet.",
    },
    {
      id: 6,
      title: "Eco-Friendly Performance",
      description:
        "Lorem ipsum dolor sit amet, consectetur cdolor col adipiscing elit. Integer mattis nunc augue vel lacinia erat euismod ut. Sed eleifend tellus nonole tincidunt aliquet.",
    },
  ];

  
 const liftRef = useRef(null);
  const lineRef = useRef(null);

   useEffect(() => {
    const lift = liftRef.current;
    const line = lineRef.current;

    if (!lift || !line) return;

    const moveDistance = line.offsetHeight - lift.offsetHeight;

    gsap.to(lift, {
      y: moveDistance, 
      ease: "none",
      scrollTrigger: {
        trigger: line,             
        start: "top",     
        end: "bottom bottom",      
        scrub: 2,               
      },
    });
  }, []);

  return (
    <div className="benefits relative w-full py-10 max-w-7xl mx-auto">
      <div className="secTitles text-center mb-20 ">
        <h2 className="section-title text-7xl">Benefits</h2>
        <p className="text-4xl font-bold leading-5 mb-4">
          6 Game-Changing Perks of Space Elevators You
        </p>
        <p className="text-4xl font-bold">Won’t See Anywhere Else</p>
      </div>

      <div
        className="relative grid grid-cols-2 gap-11 place-items-center h-full w-full z-3"
        id="benefits"
      >
        <div className="lift-icon-2" ref={liftRef}>
          <img src="/lift-img2.png" alt="Lift" />
        </div>
        <div className="verticle-line blue-line" ref={lineRef}></div>

        {benefits.map((item) => (
          <div
            key={item.id}
            className="box w-[80%] h-[250px] p-6 rounded-xl relative overflow-hidden z-5 pr-30"
          >
            <h3 className="text-base font-bold mb-4">{item.title}</h3>
            <p className="text-sm text-[#FFFFFF70]">{item.description}</p>
            <div className="absolute w-[100px] h-[100px] border-[1px] border-[#4C4C4C69] rounded-full -bottom-3 -right-3 circle-outline"></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BenefitsHome;
