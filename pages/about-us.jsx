import AboutUs from "@/components/AboutUs/AboutUs";
// import MainNav from '@/components/NormalNav/MainNav';
// import TopNav from '@/components/NormalNav/TopNav';
import React from "react";

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
  return (
    <div>
      <div
        className=" relative top-[-165px]"
        style={{
          background: `#62B1BCCC`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <AboutUs />
      </div>
      <div className="max-w-7xl mx-auto">
        <img className="w-full" src="/images/about-us-1440px.jpg" alt="" />
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

      <div className="bg-white py-20">
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
            PolicyAdvisor came to be when our founders learnt first-hand that
            insurance buying is unnecessarily complicated. The industry largely
            still relies on an archaic in-person application process that just
            doesn’t make sense in a <b>digital-first</b> world.
            <br />
            <br />
            With Canadian life insurance ownership now at a multi-decade low and
            30% of Canadians lacking any life insurance coverage at all, it’s
            clear that the old insurance model isn’t working for modern Canucks.
            So that’s why, we’ve been busy building the tools required to help{" "}
            <b>more Canadians get coverage</b> in a quick, intuitive manner.
          </div>
        </div>
      </div>

      <div className="bg-[#f3f3f3] py-20">
        <div className="max-w-7xl mx-auto   px-4 lg:px-0">
          <h2
            className="text-black p-[0.40rem] mb-2 text-center text-4xl font-bold
       "
          >
            <span className=" relative after:absolute after:w-full after:h-[2px] after:rounded-full after:bg-orange-500 after:left-0 after:-bottom-1">
              Our process
            </span>
          </h2>
          <div className="grid grid-cols-1 gap-5 lg:grid-cols-2 mt-10 text-base leading-8">
            <div className="order-2 md:order-1 mt-5 text-justify">
              We’ve built <b>proprietary digital tools</b> that will help you
              assess your insurance needs, within a matter of minutes. We
              harness data from multiple sources and our algorithms scan
              hundreds of complex insurance documents to identify{" "}
              <b>the right policy match for you</b>. We then offer you the
              lowest rates available from a large database of the most trusted
              insurance companies in the country.
              <br />
              <br />
              If you’re ever confused somewhere along the way, we also offer a
              <b>dedicated, licensed insurance concierge</b> to help you
              complete your insurance forms, update you on the progress of your
              application and answer your questions, through phone, email or
              live chat.
            </div>
            <div className="order-1 md:order-2">
              <img
                className="w-2/5 md:w-full"
                src="/images/claim-process.png"
                alt="web-scrns"
              />
            </div>
          </div>
        </div>
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
            We’re a group of passionate{" "}
            <b>insurance experts, developers, designers</b>
            and <b>marketers</b>, who share the goal of creating a better
            insurance-buying experience for Canadians. Our professional
            expertise across multiple disciplines makes us uniquely capable to
            bring about <b>innovation to the insurance industry</b> and{" "}
            <b> challenge the status quo.</b> Ah! and did we tell you, we are
            insurance buyers ourselves.
            <br />
            <br />
            We’re a <b>100% independent insurance advisor</b> and we are not
            owned by an insurance company. We’re registered with and regulated
            by Financial Services Regulatory Authority of Ontario (FSRA),
            Insurance Council of British Columbia, the Alberta Insurance Council
            (AIC) and Insurance Council of Manitoba (ICM) in respective
            provinces.
          </div>
        </div>
      </div>
      <div className="relative">
        <div className="relative hidden md:block">
          <img
            className="w-full sm:h-[600px]"
            src="/images/customer.jpg"
            alt="customer"
          />
          <div className="bg-black/30 absolute inset-0 w-full h-full"></div>
        </div>
        <div className="max-w-4xl mx-auto md:absolute bottom-0 left-0 right-0">
          <div className="bg-gray-200 sm:bg-white px-4 py-10 sm:px-10">
            <h2
              className="text-black p-[0.40rem] mb-2 text-center text-4xl font-bold
       "
            >
              <span className=" relative after:absolute after:w-full after:h-[2px] after:rounded-full after:bg-orange-500 after:left-0 after:-bottom-1">
                Our customer
              </span>
            </h2>
            <div className="text-base leading-8 mt-5">
              We’re building our tools for the digital customers. Those who are
              <b>forward thinkers</b> and believe that modern technology
              empowers. Those that believe{" "}
              <b>there must be a better way to buy insurance products.</b> Those
              that want to be in control while doing so. We’re building
              PolicyAdvisor to protect you and everything that is important to
              you.
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white pt-20 border-t">
        <div className="max-w-2xl mx-auto px-4 lg:px-0">
          <h2
            className="text-black p-[0.40rem] mb-2 text-center text-4xl font-bold
       "
          >
            <span className=" relative after:absolute after:w-full after:h-[2px] after:rounded-full after:bg-orange-500 after:left-0 after:-bottom-1">
              Our pledge
            </span>
          </h2>
          <div className="mt-10 mb-14">
            {data.map((item) => (
              <>
                <div className="">
                  <h4 className="mb-4 text-xl font-semibold">{item.title}</h4>
                  <p className="text-base">{item.text}</p>
                </div>
                <hr className="w-2/5 border border-gray-300 my-5" />
              </>
            ))}
          </div>
          <div className="">
            <div className="flex items-center justify-center">
              <img className="w-10" src="/images/right-quote-sign.png" alt="" />
            </div>
            <h2 className="text-center font-bold text-3xl pt-5 pb-2 text-gray-900">
              Go live your life, we've got you covered
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUsPage;
