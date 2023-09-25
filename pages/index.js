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

      <div
        className="px-5 relative top-[-135px] xl:px-0 mt-16  py-20 after:absolute after:w-full after:h-full after:inset-0
         after:bg-black/10 -z-[11] after:-z-10"
        style={{
          background: "url(/images/5348666.jpg)",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div
          style={{ boxShadow: "0px 5px 7px 0px rgb(114 114 114 / 25%)" }}
          className=" px-5 py-6  xl:max-w-7xl max-w-screen-lg rounded-xl backdrop-blur bg-white/80 m-auto opacity-100 z-10"
        >
          <div className="">
            <span className="text-black text-center text-xl mb-4 font-bold">
              Reliable Insurance Solutions
            </span>
          </div>
          <div className="grid mt-4 md:grid-cols-4 grid-cols-1 gap-5">
            <InsuranceSolutions
              image={"/images/dollar-symbol.png"}
              countNumber={0}
              suffix={''}
              title={"Investment"}
            />
            <InsuranceSolutions
              image={"/images/building-orange.png"}
              countNumber={30}
              suffix={"+"}
              title={"Insurance Companies"}
            />
            <InsuranceSolutions
              image={"/images/insurance-policy-orange.png"}
              countNumber={12}
              suffix={"K+"}
              title={"Insurance Policies"}
            />
            <InsuranceSolutions
              image={"/images/insurancesol2-orange.png"}
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
