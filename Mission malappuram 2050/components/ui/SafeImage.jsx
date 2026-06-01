"use client";

import Image from "next/image";
import { useState } from "react";
import { imageFallback } from "@/lib/images";

export default function SafeImage({ src, alt, onImageError, ...props }) {
  const [currentSrc, setCurrentSrc] = useState(src);
  const [usedFallback, setUsedFallback] = useState(false);

  return (
    <Image
      {...props}
      src={usedFallback ? imageFallback : currentSrc}
      alt={alt}
      onError={() => {
        if (!usedFallback) {
          setUsedFallback(true);
          setCurrentSrc(imageFallback);
          onImageError?.(src);
        }
      }}
    />
  );
}
