import React, { useEffect, useRef } from "react";
import { motion, useInView, useAnimation } from "framer-motion";

interface Props {
  children: JSX.Element;
  width?: "fit-content" | "100%";
  backgroundColor?: string;
}

export const Reveal = ({
  children,
  width = "fit-content",
  backgroundColor = "transparent",
}: Props) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  const mainControl = useAnimation();

  useEffect(() => {
    if (inView) {
      mainControl.start("visible");
    } else {
      mainControl.start("hidden");
    }
  }, [inView, mainControl]);
  return (
    <div ref={ref} style={{ position: "relative", width, overflow: "hidden" }}>
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 75, backgroundColor: "transparent" },
          visible: { opacity: 1, y: 0, backgroundColor },
        }}
        initial="hidden"
        animate={mainControl}
        transition={{ duration: 0.5, delay: 0.25 }}
        style={{
          borderRadius: "5px",
        }}
      >
        {children}
      </motion.div>
    </div>
  );
};
