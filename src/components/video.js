import react from "react";
import vids from "../images/vids.mp4";

export const Video = () => {
  const YOUTUBE_VIDEO_ID = "tvmUrOSahsc";

  return (
    <div className="mt-20 bg-gray-900 w-[100%] flex flex-row py-10  justify-center">
      <style>
        {`
            .caveat {
                font-family: "Caveat", cursive;
  font-optical-sizing: auto;
  font-weight: <weight>;
  font-style: normal;
            }
            `}
      </style>{" "}
      {/* Add the CSS to the component */}
      <div className="w-[10rem] mr-4 mt-[11rem] flex flex-col">
        <div className="w-[9rem]">
          <div className="text-[1.75rem] caveat text-yellow-400 ">
            Sharpe Trade In 2 mins
          </div>
        </div>
        <div class="relative w-[4rem] mt-3 ml-20 ">
          <svg
            viewBox="-20.5 0 287 287"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            transform="rotate(270)matrix(-1, 0, 0, 1, 0, 0)"
          >
            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
              {" "}
              <path
                d="M156.25 265.656C157.94 265.444 158.573 265.656 159.207 265.444C197.847 242.174 224.029 209.172 233.953 164.747C236.487 153.535 236.065 141.899 233.109 130.476C226.985 105.936 206.504 89.0121 181.377 87.5312C168.286 86.685 155.617 88.1659 144.215 95.3586C143.37 101.493 142.737 107.628 141.47 113.34C139.359 122.648 134.502 130.264 125.845 134.918C119.51 138.515 113.176 138.515 109.798 135.13C105.363 130.687 105.364 124.764 108.108 119.898C111.909 113.129 116.554 106.782 121.411 100.859C124.578 97.051 128.801 93.8777 132.602 90.7045C129.012 66.7994 106.419 56.645 79.3921 66.5878C78.5475 69.9726 77.7029 73.569 76.6472 76.9537C72.4242 89.4352 64.6117 98.9549 51.9427 103.397C47.0863 105.09 41.8075 105.724 37.5845 101.282C34.4173 97.8972 34.4173 91.9738 37.7957 86.0504C43.2856 76.7422 51.5204 70.1842 60.3887 64.4723C63.5559 62.5684 66.7232 60.6644 69.8904 58.972C65.6674 21.9508 32.517 -4.28131 0 10.5272C0.211149 7.77702 -1.29001e-05 5.44997 0.844584 4.18067C1.90033 2.69982 4.22297 1.85363 6.12332 1.43053C24.071 -1.95427 40.7518 0.161227 54.4765 13.2773C64.8228 23.0086 71.7908 34.8554 76.4361 48.3946C77.0695 50.2985 77.703 52.2024 78.5476 54.1064C78.5476 54.3179 78.9698 54.5295 79.8144 55.1641C81.7147 54.9526 84.0374 54.9526 86.36 54.5295C114.654 50.087 129.434 57.7027 142.526 84.1464C145.06 83.3002 148.016 82.454 150.761 81.3963C167.019 75.896 183.278 75.4729 199.747 80.9732C226.563 89.8583 243.877 112.917 245.778 142.111C246.833 157.977 244.089 173.209 238.388 188.017C224.452 223.769 201.648 251.905 167.441 270.31C165.752 271.368 163.852 272.214 162.163 273.272C161.951 273.483 161.74 273.906 161.107 275.176C168.286 276.868 175.043 276.233 181.8 275.81C188.345 275.599 195.102 274.964 202.281 274.541C201.648 280.041 198.691 282.157 195.102 283.426C190.879 284.695 186.656 286.388 182.433 286.599C171.031 287.023 159.418 287.234 147.804 286.599C138.725 285.965 136.191 281.099 140.203 273.695C148.86 258.04 157.728 242.386 166.597 226.731C168.075 224.192 169.975 222.077 172.298 219.115C176.31 223.769 174.62 227.154 173.142 230.327C167.23 241.751 161.951 253.175 156.25 265.656ZM43.919 94.9355C58.4883 93.0315 67.5677 83.7233 68.2012 70.6073C58.4883 76.9537 49.1978 82.6656 43.919 94.9355ZM115.288 127.726C127.745 124.764 133.658 116.302 132.391 103.397C124.367 110.167 117.399 116.514 115.288 127.726Z"
                fill="#f9d210"
              ></path>{" "}
            </g>
          </svg>
        </div>
      </div>
      <div className="w-[50rem] h-[30rem]  border-4 border-yellow-500 rounded-lg flex items-center justify-center">
        <iframe
          className=" w-full h-full "
          src={`https://www.youtube.com/embed/${YOUTUBE_VIDEO_ID}`}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          title="Embedded youtube video"
        />
      </div>
    </div>
  );
};
