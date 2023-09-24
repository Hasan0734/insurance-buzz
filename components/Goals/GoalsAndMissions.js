import React from "react";
import GoalsBox from "./GoalsBox";

const GoalsAndMissions = () => {
  return (
    // <div className='bg-[#62B1BCE5] px-3 py-5 pb-10'>
    <div className="">
      <div className="px-3 py-5 pb-10">
        <div className="flex flex-col md:items-center mt-10  max-w-7xl m-auto">
          <h2
            className="text-black p-[0.40rem] mb-2 text-center text-4xl font-bold
       "
          >
            <span className=" relative after:absolute after:w-full after:h-[2px] after:rounded-full after:bg-orange-500 after:left-0 after:-bottom-1">
              Our Goals and Mission
            </span>
          </h2>
          <div className=" flex justify-center mt-6">
            <h4 className=" font-bold text-2xl leading-tight text-black text-center">
            Securing Your Today and Tomorrow Through Expert Insurance Guidance
            </h4>
          </div>
         

          <div className="flex lg:flex-row flex-col justify-center  mt-3 gap-4 w-full">
            <div className="flex flex-col mt-10 gap-6 w-3/4">
              <GoalsBox
                text1={"At our core"}
                text2={
                  "At our core, we prioritize unwavering integrity and professionalism in our interactions with you, our valued client."
                }
              />
              <GoalsBox
                text1={"Goals"}
                text2={
                  "Our primary goal is to gain a comprehensive understanding of your financial situation, enabling us to offer top-notch information, services, and products of the utmost quality. Together, we strive to assist you in achieving your financial objectives"
                }
                diff
              />
              <GoalsBox
                text1={"Mission"}
                text2={
                  "At InsuranceBuzz, we understand that insurance buying can be tricky and taxing. Our mission is to bring a difference in people's lives by connecting them to the financial security they can rely on for life. With our insurance advisory services, we help you invest in the right insurance plans that serve as a long-term protection for any unforeseen incident."
                }
              />
            </div>

            {/* <div className='flex  relative flex-1 justify-center'>
            <div className='absolute top-0 right-[16%] z-0'>
              <img src="/images/dots.svg" alt="dots" />
            </div>
            <img className=' z-10' src="/images/goals.png" alt="our-goal-and-mission" />
          </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default GoalsAndMissions;
