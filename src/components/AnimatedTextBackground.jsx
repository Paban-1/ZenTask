import React, { useEffect, useRef } from "react";
import gsap from "gsap";

const AnimatedTextBackground = ({
  text = " ZenTask ",
  text2=" Register Now ",
  speed = 140,
  fontSize = "12rem",
  opacity = 1,
}) => {
  const layer1 = useRef(null);
  const layer2 = useRef(null);

  useEffect(() => {
    const tl1 = gsap.timeline({ repeat: -1 });
    const tl2 = gsap.timeline({ repeat: -1 });

    tl1.fromTo(
      layer1.current,
      { x: "-100%" },
      { x: "100%", duration: speed, ease: "linear" }
    );
    tl2.fromTo(
      layer2.current,
      { x: "100%" },
      { x: "-100%", duration: speed, ease: "linear" }
    );

    return () => {
      tl1.kill();
      tl2.kill();
    };
  }, [speed]);
  return (
    <div className="absolute inset-0 overflow-hidden select-none pointer-events-none">
      <div
        ref={layer1}
        className="whitespace-nowrap absolute top-0 left-0 text-white"
        style={{ fontFamily: "fantasy", fontSize, opacity, lineHeight: "1" }}
      >
        <h2 className="rotate-2">
        {text.repeat(20)}
        </h2>
      </div>

      <div
        ref={layer2}
        className="whitespace-nowrap absolute bottom-0 right-0  text-[#3E2723] "
        style={{ fontFamily: "fantasy", fontSize, opacity, lineHeight: "1" }}
      >
        <h2 className="rotate-2">
        {text.repeat(20)}
        </h2>
      </div>
    </div>
  );
};

export default AnimatedTextBackground;
