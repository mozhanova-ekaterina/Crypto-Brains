import clsx from "clsx";
import bg from "./images/Background.png";
import computer from "@images/Computer.png";

export const Background = () => {
  return (
    <div className="absolute top-0 right-0 left-0 h-[1080px] container z-[-1]">
      <img className="w-full h-full" src={bg} alt="" />
      <div className="absolute top-[160px] right-0">
        <img className="" src={computer} alt="" />
        <Line className="top-[380px]" />
        <Line className="top-[190px]" />
      </div>
    </div>
  );
};

function Line({ className }: { className?: string }) {
  return (
    <div className={clsx("absolute right-[57px]", className)}>
      <svg
        width="646"
        height="174"
        viewBox="0 0 646 174"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M176.029 54.0411C176.029 54.0411 2 75.323 2 115.278C2 155.234 183.414 183.208 300.828 167.612C435.616 149.708 708.682 134.723 630.028 16.2168C621.849 3.89444 612.991 2 612.991 2"
          stroke="url(#paint0_linear_21317_2379)"
          stroke-width="4"
          stroke-linecap="round"
          strokeDasharray="1000"
          strokeDashoffset="1000"
        >
          <animate
            attributeName="stroke-dashoffset"
            from="1000"
            to="0"
            dur="2.5s"
            fill="freeze"
          />
        </path>
        <defs>
          <linearGradient
            id="paint0_linear_21317_2379"
            x1="2"
            y1="86.9999"
            x2="644"
            y2="86.9999"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#9AC321" stop-opacity="0.1">
              <animate
                attributeName="stop-opacity"
                values="0.1;0.8;0.1"
                dur="0.6s"
                repeatCount="indefinite"
              />
            </stop>
            <stop offset="0.484182" stop-color="#9AC321" stop-opacity="0.8">
              <animate
                attributeName="stop-opacity"
                values="0.5;1;0.5"
                dur="0.6s"
                repeatCount="indefinite"
                begin="0.1s"
              />
            </stop>
            <stop offset="1" stop-color="#9AC321" stop-opacity="0.1">
              <animate
                attributeName="stop-opacity"
                values="0.1;0.5;0.1"
                dur="0.6s"
                begin="0.2s"
                repeatCount="indefinite"
              />
            </stop>
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}
