import "./preloader.scss";

interface IPreloaderProps {
  mainPreloader?: boolean;
}

const Preloader = ({ mainPreloader }: IPreloaderProps) => {
  return (
    <div
      style={{ minHeight: mainPreloader ? "100vh" : "70vh" }}
      className="preloader"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 100 100"
        preserveAspectRatio="xMidYMid"
        width="200"
        height="200"
      >
        <g>
          <circle
            cx="50"
            cy="50"
            fill="none"
            stroke="#4bcb36"
            strokeWidth="10"
            r="35"
            strokeDasharray="164.93361431346415 56.97787143782138"
          >
            <animateTransform
              attributeName="transform"
              type="rotate"
              repeatCount="indefinite"
              dur="1s"
              values="0 50 50;360 50 50"
              keyTimes="0;1"
            ></animateTransform>
          </circle>
          <g></g>
        </g>
      </svg>
    </div>
  );
};

export default Preloader;
