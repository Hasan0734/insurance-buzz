"use client";
import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import { useRouter } from "next/router";
import CoverageBox from "../components/Coverages/CoverageBox";

const services = [
  {
    id: 1,
    title: "Life Insurance",
    image: "/images/new/life-new.jpeg",
    url: "/life-insurance",
  },
  {
    id: 2,
    title: "Super Visa Insurance",
    image: "/images/new/super-visa.jpeg",
    url: "/visitor-canada",
  },
  {
    id: 3,
    title: "Visitor to Canada",
    image: "/images/new/visitor.png",
    url: "/travel-insurance",
  },
  {
    id: 4,
    title: "Travel Insurance",
    image: "/images/sub/travel-new.png",
    url: "/international-student-insurance",
  },
  {
    id: 5,
    title: "Intl student Insurance",
    image: "/images/new/intl-new.jpg",
    url: "/investments/rrsp",
  },
  {
    id: 6,
    title: "RRSP / TFSA",
    image: "/images/new/rrsp.jpeg",
    url: "/investments/resp",
  },
  {
    id: 7,
    title: "RESP",
    image: "/images/new/resp-new.jpeg",
    url: "/investments/resp",
  },
  {
    id: 8,
    title: "Critical Illness Insurance",
    image: "/images/new/critical-illness.jpg",
    url: "/life-insurance/critical-illness-insurance",
  },
  {
    id: 9,
    title: "Disability Insurance",
    image: "/images/new/disability-insurance.jpeg",
    url: "/life-insurance/disability-insurance",
  },
  {
    id: 10,
    title: "Health Insurance",
    image: "/images/sub/health-new.jpeg",
    url: "/life-insurance/health-insurance",
  },
];

const Hero = () => {
  const [sticky, setSticky] = useState(false);

  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 100) {
        setSticky(true);
      } else {
        setSticky(false);
      }
    };

    // Add the scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener when the component unmounts or route changes
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [router.asPath]);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [{ breakpoint: "1343px" }],
  };
  return (
    <>
      <div className="bg-[#45A1D3CC] pt-44">
        <div className=" h-full max-w-7xl m-auto py-4 xl:px-0 sm:px-10 pb-22 overflow-x-hidden">
          <div>
            <Slider {...settings}>
              <div className="flex px-[24px] flex-col gap-5">
                <h1 className="sm:text-[40px] text-[20px] font-bold text-white">
                  Life Insurance
                </h1>

                <h3 className="text-[#EDEDED] text-base lg:w-[40%] w-full">
                  “Where Your Legacy Begins, Safeguarding Generations Ahead.”
                </h3>
                <div className="flex gap-2 mt-6">
                  <button
                    onClick={() => router.push("/life-insurance")}
                    style={{ fontSize: "15px" }}
                    className="p-3 text-white bg-[#FF9801] rounded"
                  >
                    Request Quote
                  </button>
                </div>
              </div>

              <div className="flex px-[24px] flex-col gap-5">
                <h1 className="sm:text-[40px] text-[40px] font-bold text-white">
                  Travel Insurance
                </h1>

                <h3 className="text-[#EDEDED] text-base lg:w-[40%] w-full">
                  Remember to include your travel insurance in your packing. You
                  can get your price estimates online right away.
                </h3>
                <div className="flex gap-2 mt-6">
                  <button
                    onClick={() => router.push("/travel-insurance")}
                    style={{ fontSize: "15px" }}
                    className="p-3 text-white bg-[#FF9801] rounded"
                  >
                    Start Your Trip
                  </button>
                </div>
              </div>

              <div className="flex px-[24px] flex-col gap-5">
                <h1 className="sm:text-[40px] text-[40px] font-bold text-white">
                  Super Visa Insurance
                </h1>

                <h3 className="text-[#EDEDED] text-base lg:w-[40%] w-full">
                  “Your Passport to Peace of Mind and Family Reunions.”
                </h3>
                <div className="flex gap-2 mt-6">
                  <button
                    onClick={() => router.push("/super-visa-insurance")}
                    style={{ fontSize: "15px" }}
                    className="p-3 text-white bg-[#FF9801] rounded"
                  >
                    Request Quote
                  </button>
                </div>
              </div>

              <div className="flex px-[24px] flex-col gap-5">
                <h1 className="sm:text-[40px] text-[40px] font-bold text-white">
                  Home Insurance
                </h1>

                <h3 className="text-[#EDEDED] text-base lg:w-[40%] w-full">
                  “Safeguarding What Matters Most - Your Home, Your Peace of
                  Mind.”
                </h3>
                <div className="flex gap-2 mt-6">
                  <button
                    onClick={() => router.push("/home-insurance")}
                    style={{ fontSize: "15px" }}
                    className="p-3 text-white bg-[#FF9801] rounded"
                  >
                    Request Quote
                  </button>
                </div>
              </div>

              <div className="flex px-[24px] flex-col gap-5">
                <h1 className="sm:text-[40px] text-[40px] font-bold text-white">
                  Auto Insurance
                </h1>

                <h3 className="text-[#EDEDED] text-base lg:w-[40%] w-full">
                  Auto Insurance That Travels the Extra Mile for You.
                  <br />
                  Ride with Confidence, Backed by Our Auto Insurance.
                </h3>
                <div className="flex gap-2 mt-6">
                  <button
                    onClick={() => router.push("/auto-insurance")}
                    style={{ fontSize: "15px" }}
                    className="p-3 text-white bg-[#FF9801] rounded"
                  >
                    Request Quote
                  </button>
                </div>
              </div>

              <div className="flex px-[24px] flex-col gap-5">
                <h1 className="sm:text-[40px] text-[40px] font-bold text-white">
                  TFSA and RRSP Insurance
                </h1>

                <h3 className="text-[#EDEDED] text-base lg:w-[40%] w-full">
                  “Secure Your Tomorrow with RRSP &amp; TFSA – Where Smart
                  Investing Meets Tax Benefits.”
                </h3>
                <div className="flex gap-2 mt-6">
                  <button
                    onClick={() => router.push("/investments/rrsp")}
                    style={{ fontSize: "15px" }}
                    className="p-3 text-white bg-[#FF9801] rounded"
                  >
                    Request Quote
                  </button>
                </div>
              </div>
            </Slider>
          </div>
        </div>

        <h2
          className="text-white p-[0.40rem] mb-2 text-center text-4xl font-bold
       "
        >
          <span className=" relative after:absolute after:w-full after:h-[2px] after:rounded-full after:bg-orange-500 after:left-0 after:-bottom-1">
            Our Services
          </span>
        </h2>

        <div className="max-w-7xl mx-auto grid xl:grid-cols-5 md:grid-cols-3 sm:grid-cols-2  grid-cols-1 gap-5  px-4 pt-10 pb-16">
          {services.map((service) => (
            <CoverageBox
              key={service.id}
              onClick={() => router.push(service.url)}
              image={service.image}
              text={service.title}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default Hero;
