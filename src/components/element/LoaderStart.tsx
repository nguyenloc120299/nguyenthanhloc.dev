"use client";

import React, { useRef, useEffect } from "react";
import imagesLoaded from "imagesloaded";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";


gsap.registerPlugin(ScrollTrigger);

const LoaderStart: React.FC = () => {
  const loaderRef = useRef<HTMLDivElement>(null);
  const loaderContentRef = useRef<HTMLDivElement>(null);

  useGSAP((context, contextSafe) => {
    if (loaderRef.current) {
      // Theo dõi trạng thái tải của hình ảnh
      const imgLoad = imagesLoaded(loaderRef.current);

      imgLoad.on("done", () => {
        if (loaderContentRef.current) {
          loaderContentRef.current.classList.add("fade-out");
        }

        setTimeout(() => {
          if (loaderRef.current) {
            loaderRef.current.classList.add("loaded");
          }
        }, 300);

        // Thiết lập GSAP animations
        gsap.set(".animate-headline", { y: 50, opacity: 0 });

        ScrollTrigger.batch(".animate-headline", {
          interval: 0.1,
          batchMax: 4,
          onEnter: (batch) =>
            gsap.to(batch, {
              opacity: 1,
              y: 0,
              ease: "sine",
              stagger: { each: 0.15, grid: [1, 4] },
              overwrite: true,
            }),
          onLeave: (batch) =>
            gsap.set(batch, { opacity: 1, y: 0, overwrite: true }),
          onEnterBack: (batch) =>
            gsap.to(batch, {
              opacity: 1,
              y: 0,
              stagger: 0.15,
              overwrite: true,
            }),
          onLeaveBack: (batch) =>
            gsap.set(batch, { opacity: 0, y: 50, overwrite: true }),
        });
      });
    }

    return () => {
      // Cleanup logic if needed
    };
  }, { scope: loaderRef });

  return (
    <div id="loader" className="loader" ref={loaderRef}>
      <div id="loaderContent" className="loader__content" ref={loaderContentRef}>
        <div className="loader__shadow"></div>
        <div className="loader__box"></div>
      </div>
    </div>
  );
};

export default LoaderStart;
