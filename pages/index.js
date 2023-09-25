import InsuranceSolutions from "@/components/InsuranceSolutions";
import Coverages from "@/components/Coverages/Coverages";
import Process from "@/components/Process/Process";
import GoalsAndMissions from "@/components/Goals/GoalsAndMissions";
import WhyChoose from "@/components/WhyChoose/WhyChoose";
import Hero from "@/components/Hero";
import Head from "next/head";
import TravelSlider from "@/components/TravelSlider";
import LifeSlider from "@/components/LifeSlider";
import { Testimonials } from "@/components/Testimonials/Testimonials";

export default function Home() {
  return (
    <>
      <Head>
        <title>Insurance Buzz</title>
      </Head>
      <div
        className=" relative top-[-165px] z-0 "
        style={{
          background: `url(${"/images/home.jpg"})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <Hero />
      </div>

      <div
        style={{
          background: `url(${"/images/new/life-insurance.jpeg"})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className="relative top-[-165px]"
      >
        <Process />
      </div>

      <div
        // style={{
        //   background: `url(${"/images/sub/mission.jpg"})`,
        //   backgroundRepeat: "no-repeat",
        //   backgroundSize: "cover",
        //   backgroundPosition: "center",
        // }}
        className="relative top-[-165px] my-20"
      >
        <GoalsAndMissions />
      </div>

      <div
        style={{
          background: `url(${"/images/new/team-trust.jpg"})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className="relative top-[-165px]"
      >
        <WhyChoose />
      </div>

      <div className="flex flex-col relative top-[-125px] bg-[white] p-10 pt-10 gap-4">
        <span className=" text-center my-4 text-2xl text-black font-bold">
          Travel Insurance Providers
        </span>
        <TravelSlider />

        <span className="mt-5 text-center my-4 text-2xl text-black font-bold">
          Life Insurance Providers
        </span>
        <LifeSlider />
      </div>

      <div className="px-5 relative top-[-135px] xl:px-0 mt-16 bg-[#FFDB58] py-20">
        <div
          style={{ boxShadow: "0px 5px 7px 0px rgb(114 114 114 / 25%)" }}
          className=" px-5 py-6  xl:max-w-7xl max-w-screen-lg rounded-xl bg-white m-auto"
        >
          <div className="">
            <span className="text-black text-center text-xl mb-4 font-bold">
              Reliable Insurance Solutions
            </span>
          </div>
          <div className="grid mt-4 md:grid-cols-3 grid-cols-1 gap-5">
            <InsuranceSolutions
              image={"/images/building.png"}
              countNumber={30}
              suffix={"+"}
              title={"Insurance Companies"}
            />
            <InsuranceSolutions
              image={"/images/insurance-policy.png"}
              countNumber={12}
              suffix={"K+"}
              title={"Insurance Policies"}
            />
            <InsuranceSolutions
              image={"/images/insurancesol2.png"}
              countNumber={8}
              suffix={"+"}
              title={"Insurance Types"}
            />
          </div>
        </div>
      </div> 

      <div className="">
        <h2
          className="text-black p-[0.40rem] mb-2 text-center text-4xl font-bold
       "
        >
          <span className=" relative after:absolute after:w-full after:h-[2px] after:rounded-full after:bg-orange-500 after:left-0 after:-bottom-1">
            Testimonials
          </span>
        </h2>

        <Testimonials />
      </div>
    </>
  );
}
