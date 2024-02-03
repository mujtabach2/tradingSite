import React from "react";

export const Dashboard = () => {
  return (
    <div className="flex h-[100vh] w-[100vw]">
      {/* First Column */}
      <div className="flex-col w-[10vw]">
        {/* First Row */}
        <div className="flex h-[7vh] bg-black border-2 border-white">
          {/* Content for the first cell in the first row */}
          asdas
        </div>

        {/* Second Row */}
        <div className="flex h-[93vh] bg-black border-2 border-white">
          {/* Content for the second cell in the second row */}
          asdasd
        </div>
      </div>

      {/* Second Column */}
      <div className="flex-col w-[90vw] ">
        {/* Content for the second cell in the first row */}
        <div className="flex h-[7vh] bg-black border-2 border-blue-300">
          {/* Content for the first cell in the first row */}
          
        </div>

        {/* Second Row */}
        <div className="flex-col h-[90vh]">
          {/* Content for the second cell in the second row */}
          <div className="flex h-[23vh] w-[90vw]">
            {/* Content for the first cell in the second row */}
            <div className="flex-col h-[23vh] w-[18vw] bg-black border-2 border-white">
              asd
            </div>
            <div className="flex-col h-[23vh] w-[18vw] bg-black border-2 border-white">
              sadas
            </div>
            <div className="flex-col h-[23vh] w-[18vw] bg-black border-2 border-white">
              asdas
            </div>
            <div className="flex-col h-[23vh] w-[18vw] bg-black border-2 border-white">
              asdas
            </div>
            <div className="flex-col h-[23vh] w-[18vw] bg-black border-2 border-white">
              asdasd
            </div>
          </div>

          <div className="flex h-[70vh] w-[90vw]">
            {/* Content for the second cell in the second row */}
            <div className="flex-col h-[70vh] w-[50vw] bg-black border-2 border-white">
              asd
            </div>
            <div className="flex h-[70vh] w-[40vw] bg-black border-2 border-white">
              <div className="flex-col h-[70vh] w-[20vw] bg-black border-2 border-white">
                <div className="flex-row h-[35vh] w-[20vw] bg-black border-2 border-white"></div>
                <div className="flex-row h-[35vh] w-[20vw] bg-black border-2 border-white"></div>
              </div>
              <div className="flex-col h-[70vh] w-[20vw] bg-black border-2 border-white">
                <div className="flex-row h-[35vh] w-[20vw] bg-black border-2 border-white"></div>
                <div className="flex-row h-[35vh] w-[20vw] bg-black border-2 border-white"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
