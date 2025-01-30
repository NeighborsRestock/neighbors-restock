import { Waves } from "@/components/Waves";
import type React from "react";

export const NotFound: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center overflow-hidden bg-[#0e1b23] text-white font-sans relative">
      <div className="z-10 px-4 sm:px-6 lg:px-8 text-center justify-self-start">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-2 sm:mb-4">
          404
        </h1>
        <h2 className="text-xl sm:text-2xl mb-4 sm:mb-8">Page Not Found</h2>
        <p className="text-base sm:text-lg mb-6 sm:mb-8 max-w-md mx-auto">
          Oops! The page you are looking for might have been removed, had its
          name changed, or is temporarily unavailable.
        </p>
        <a
          href="/"
          className="px-4 sm:px-6 py-2 sm:py-3 bg-white text-[#0e1b23] rounded-lg font-semibold hover:bg-opacity-90 transition-colors text-sm sm:text-base"
        >
          Go Back Home
        </a>
      </div>
      <Waves />
    </div>
  );
};
