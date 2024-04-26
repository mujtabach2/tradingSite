import mySvg from "../images/right-quotation-sign-svgrepo-com.svg";
import pfp from "../images/marko-headshot.jpeg";

export const Qoute = () => {
  return (
    <div class="mt-40">
      <div class=" flex justify-center items-center">
        <div className="divider divider-warning mb-20 w-[70rem]"></div>
      </div>
      <div className="w-[40rem] ml-[30rem]  mb-40 flex flex-col  justify-center items-center">
        <div class="mb-10">
          <div className="text-[1rem] lato text-yellow-500">Testimonials</div>
          <div className="text-l md:text-2xl lg:text-6xl lato font-bold text-white">
            What Our Customers Say
          </div>
        </div>

        <div class="flex flex-col items-center">
          <div class="flex flex-row pr-[70%] ">
            <img src={mySvg} alt="quotation" className="w-6 mb-4" />
          </div>

          <div className="w-3/4 text-left">
            <h2 className="text-[1.25rem] font text-white">
              Game-changer! Real-time sentiment analysis and comprehensive stock
              insights in one place. Must-have for traders!
            </h2>
          </div>
          <div className="flex mr-[45%] gap-4 mt-4">
            <img src={pfp} alt="marko" className="w-16 h-16 rounded-full" />
            <div className="flex flex-col">
              <h3 className="text-white font-bold">Marko Frankfurt</h3>
              <p className="text-white text-left">Trader</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
