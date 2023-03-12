import * as React from "react";
import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import lozad from "lozad";

interface LazyImageProps {
  src: string;
  alt: string;
  variants: any;
  className: string;
  viewport: { once: boolean };
}

/** Lazy loading for images using lozad library */

const LazyImage: React.FC<LazyImageProps> = ({
  src,
  alt,
  variants,
  className,
  viewport,
}) => {
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const observer = lozad(imgRef.current ?? undefined, {
      loaded: function (el) {
        el.classList.add("fade");
      },
    });
    observer.observe();
  }, [src]);

  return (
    <motion.img
      viewport={viewport}
      initial="hidden"
      variants={variants}
      ref={imgRef}
      src={src}
      alt={alt}
      whileInView="visible"
      className={`lozad ${className}`}
    />
  );
};

export default LazyImage;
