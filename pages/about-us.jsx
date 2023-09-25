// import MainNav from '@/components/NormalNav/MainNav';
// import TopNav from '@/components/NormalNav/TopNav';
import GoalsAndMissions from "@/components/Goals/GoalsAndMissions";
import Process from "@/components/Process/Process";
import React, { useEffect, useState } from "react";

const data = [
  {
    id: 1,
    title: "",
    text: "We’re focused on changing the way Canadians buy insurance. In doing so, we affirm to certain principles:",
  },
  {
    id: 2,
    title: "We put our customer first.",
    text: "We will make your insurance buying experience as seamless and pleasant as we can.",
  },
  {
    id: 3,
    title: "We keep it simple.",
    text: "Enough said.",
  },
  {
    id: 4,
    title: "We’re always honest.",
    text: "Our advisors are salary-based and do not earn commissions. We’re on Team You and will only offer advice that is in your best interests. You have no obligation to buy anything if we don’t find a product at a price that you’re satisfied with.",
  },
  {
    id: 5,
    title: "We’re always available.",
    text: "We are always online. If you have questions about anything at all, we will do our best to provide you with answers no matter what time you’re asking, no appointment necessary.",
  },
  {
    id: 6,
    title: "We only work with the best.",
    text: "We partner exclusively with the most trusted insurance companies in Canada, that are leaders in the protection industry.",
  },
  {
    id: 7,
    title: "We protect your privacy.",
    text: "Your security is our priority and your data is safe with us. We won’t sell your info to third parties.",
  },
];

const AboutUsPage = () => {
  const [sticky, setSticky] = useState(false);

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
  }, []);

  return (
    <div className="relative">
      <div
        className={`absolute left-0 right-0 top-[-165px] h-[165px] bg-[#62B1BCCC] `}
      ></div>

      <div className="bg-white  py-20">
        <div className="max-w-7xl mx-auto  px-4 lg:px-0">
          <h2
            className="text-black p-[0.40rem] mb-2 text-center text-4xl font-bold
       "
          >
            <span className=" relative after:absolute after:w-full after:h-[2px] after:rounded-full after:bg-orange-500 after:left-0 after:-bottom-1">
              Our story
            </span>
          </h2>
          <div className="max-w-4xl mx-auto mt-5 text-justify text-base leading-8">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters, as opposed to using 'Content here, content
            here', making it look like readable English.
            <br />
            <br />
            Many desktop publishing packages and web page editors now use Lorem
            Ipsum as their default model text, and a search for 'lorem ipsum'
            will uncover many web sites still in their infancy. Various versions
            have evolved over the years, sometimes by accident, sometimes on
            purpose (injected humour and the like).
          </div>
        </div>
      </div>

      <div
        style={{
          background: `url(${"/images/new/life-insurance.jpeg"})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className=""
      >
        <Process />
      </div>

      <div className="relative  py-20">
        <GoalsAndMissions />
      </div>

      <div className="bg-white py-20">
        <div className="max-w-7xl mx-auto  px-4 lg:px-0">
          <h2
            className="text-black p-[0.40rem] mb-2 text-center text-4xl font-bold
       "
          >
            <span className=" relative after:absolute after:w-full after:h-[2px] after:rounded-full after:bg-orange-500 after:left-0 after:-bottom-1">
              Our team
            </span>
          </h2>
          <div className="max-w-4xl mx-auto mt-10 text-justify text-base leading-8">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters, as opposed to using 'Content here, content
            here', making it look like readable English.
            <br />
            <br />
            Many desktop publishing packages and web page editors now use Lorem
            Ipsum as their default model text, and a search for 'lorem ipsum'
            will uncover many web sites still in their infancy. Various versions
            have evolved over the years, sometimes by accident, sometimes on
            purpose (injected humour and the like).
          </div>
        </div>
      </div>
      <div className="bg-[#f3f3f3] pt-16">
        <div className="max-w-7xl mx-auto  px-4 lg:px-0">
          <h2
            className="text-black p-[0.40rem] mb-2 text-center text-4xl font-bold
       "
          >
            <span className=" relative after:absolute after:w-full after:h-[2px] after:rounded-full after:bg-orange-500 after:left-0 after:-bottom-1">
              Our Vision
            </span>
          </h2>
          <div className="max-w-4xl mx-auto mt-5 text-justify text-base leading-8">
            Insurance buying is opaque and stressful. At PolicyAdvisor, we’re
            building a new kind of insurance advisor, built for the way you
            live. We combine <b>modern technology, intuitive design</b> and{" "}
            <b>human expertise</b> to make insurance buying{" "}
            <b>simpler, straightforward and stress-free.</b>
            <br />
            <br />
            Sound good?
          </div>
          <div>
            <img
              className="w-full"
              src="/images/web-scrns.png"
              alt="web-scrns"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUsPage;
