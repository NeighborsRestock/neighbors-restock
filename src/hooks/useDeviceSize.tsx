import { useState, useEffect, useCallback } from "react";

export type UseDeviceSize = "mobile" | "tablet" | "desktop";

const useDeviceSize = (): UseDeviceSize => {
  const getDeviceSize = useCallback((): UseDeviceSize => {
    const width = window.innerWidth;
    if (width <= 700) return "mobile"; // Mobile: <768px
    if (width <= 900) return "tablet"; // Tablet: 768px - 1023px
    return "desktop"; // Desktop: 1024px+
  }, []);

  const [deviceSize, setDeviceSize] = useState(getDeviceSize);

  useEffect(() => {
    const handleResize = () => setDeviceSize(getDeviceSize());

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return deviceSize;
};

export default useDeviceSize;
