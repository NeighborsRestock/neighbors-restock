import type React from "react";

export const NotFound: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#0e1b23] text-white font-sans relative overflow-hidden">
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
      <div className="absolute bottom-0 left-0 right-0 w-screen">
        <svg
          className="waves"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          viewBox="0 24 150 28"
          preserveAspectRatio="none"
          shapeRendering="auto"
        >
          <defs>
            <path
              id="gentle-wave"
              d="M-160 44c30 0 58-18 88-18s 58 18 88 88-18 v44h-352z"
            />
          </defs>
          <g className="parallax">
            <use
              xlinkHref="#gentle-wave"
              x="140"
              y="0"
              fill="rgba(255,255,255,1.1"
            />
            <use
              xlinkHref="#gentle-wave"
              x="140"
              y="3"
              fill="rgba(255,255,255,0.9)"
            />
            <use
              xlinkHref="#gentle-wave"
              x="150"
              y="5"
              fill="rgba(255,255,255,0.7)"
            />
            <use
              xlinkHref="#gentle-wave"
              x="160"
              y="7"
              fill="rgba(255,255,255,0.5)"
            />
            <use
              xlinkHref="#gentle-wave"
              x="190"
              y="9"
              fill="rgba(255,255,255,0.3)"
            />
            <use
              xlinkHref="#gentle-wave"
              x="200"
              y="11"
              fill="rgba(255,255,255,0.1)"
            />
            <use xlinkHref="#gentle-wave" x="98" y="7" fill="#fff" />
          </g>
        </svg>
      </div>
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600;700&display=swap');

          body {
            font-family: 'Open Sans', sans-serif;
          }

          .waves {
            position: relative;
            width: 150%;
            height: 15vh;
            margin-bottom: -7px;
            min-height: 100px;
            max-height: 150px;
            opacity: 1
          }
          .parallax > use {
            animation: move-forever 25s cubic-bezier(.55,.5,.45,.5) infinite;
            transition: opacity 1s ease-in-out;
            opacity: 1
          }
          .parallax > use:nth-child(1) {
            animation-delay: -2s;
            animation-duration: 14s;
          }
          .parallax > use:nth-child(2) {
            animation-delay: -3s;
            animation-duration: 27s;
          }
          .parallax > use:nth-child(3) {
            animation-delay: -4s;
            animation-duration: 36s;
          }
          .parallax > use:nth-child(4) {
            animation-delay: -5s;
            animation-duration: 50s;
          }
          .parallax > use:nth-child(5) {
            animation-delay: -7s;
            animation-duration: 60s;
          }
          .parallax > use:nth-child(6) {
            animation-delay: -10s;
            animation-duration: 75s;
          }
          @keyframes move-forever {
            0% {
              transform: translate3d(-100px,0,0);
              opacity: 0;
            }
            5% {
              opacity: 1
            }
            80% {
              opacity: 0.4;
            }
            100% { 
              transform: translate3d(85px,0,0);
              opacity: 0;
            }
          }
          @media (max-width: 768px) {
            .waves {
              height: 40px;
              min-height: 40px;
            }
          }
          @media (max-width: 480px) {
            .waves {
              height: 30px;
              min-height: 30px;
            }
            .parallax > use {
              animation-duration: 20s;
            }
          }
          @media (min-width: 1024px) {
            .waves {
              height: 20vh;
              min-height: 150px;
              max-height: 200px;
            }
          }
        `}
      </style>
    </div>
  );
};
