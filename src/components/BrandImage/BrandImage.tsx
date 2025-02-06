import { useState, useEffect, useRef } from "react";

interface BrandImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
  containerClassName?: string;
  objectFit?: "contain" | "cover";
}

export function BrandImage({
  src,
  alt,
  width,
  height,
  className = "",
  containerClassName = "",
  objectFit = "contain",
}: BrandImageProps) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (imgRef.current) {
      observer.observe(imgRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  const handleImageLoad = () => {
    setIsLoaded(true);
  };

  return (
    <div className={`relative w-full overflow-hidden ${containerClassName}`}>
      <div className="aspect-w-16 aspect-h-9">
        <img
          ref={imgRef}
          src={src || "/placeholder.svg"}
          alt={alt}
          width={width}
          height={height}
          onLoad={handleImageLoad}
          className={`
              w-full h-full transition-opacity duration-300
              ${objectFit === "contain" ? "object-contain" : "object-cover"}
              ${isLoaded ? "opacity-100" : "opacity-0"}
              ${className}
            `}
        />
      </div>
    </div>
  );
}
