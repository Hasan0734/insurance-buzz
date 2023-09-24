import React, { useState } from "react";
import ProcessBox from "./ProcessBox";

const Process = () => {
  const [isOpen, setIsOpen] = useState({
    first: true,
    second: false,
    third: false,
    forth: false,
    fifth: false,
  });
  const toogle = (key) => {
    console.log(key);
    setIsOpen({
      first: false,
      second: false,
      third: false,
      forth: false,
      fifth: false,
    });
    if (key === "first") {
      setIsOpen({
        first: true,
        second: false,
        third: false,
        forth: false,
        fifth: false,
      });
    } else if (key === "second") {
      setIsOpen({
        first: false,
        second: true,
        third: false,
        forth: false,
        fifth: false,
      });
    } else if (key === "third") {
      setIsOpen({
        first: false,
        second: false,
        third: true,
        forth: false,
        fifth: false,
      });
    } else if (key === "forth") {
      setIsOpen({
        first: false,
        second: false,
        third: false,
        forth: true,
        fifth: false,
      });
    } else {
      setIsOpen({
        first: false,
        second: false,
        third: false,
        forth: false,
        fifth: true,
      });
    }
  };
  return (
    <div className="bg-[#27272db5]">
      <div className="flex flex-col px-5 py-20  max-w-7xl m-auto">
        <h2
          className="text-white p-[0.40rem] mb-2 text-center text-4xl font-bold
       "
        >
          <span className=" relative after:absolute after:w-full after:h-[2px] after:rounded-full after:bg-orange-500 after:left-0 after:-bottom-1">
            Our Process
          </span>
        </h2>
        <div className=" flex justify-center mt-6">
          <h4 className="max-w-[50%] font-bold text-2xl leading-tight text-white text-center">
            Personalized, cost-effective coverage that matches your needs and
            financial goals.
          </h4>
        </div>

        <div className="flex md:flex-row flex-col md:justify-between gap-5 my-10">
          <div className="ml-3">
            <div
              className={`relative pb-5 pl-6 border-l ${
                isOpen.first ? "border-blue-500" : "border-white"
              }`}
            >
              <div
                onClick={() => {
                  toogle("first");
                }}
                className={`w-[35px] h-[35px] rounded-full  absolute border-4 border-white -left-[1.1rem] cursor-pointer ${
                  isOpen.first ? "bg-[#2196F3]" : "bg-white"
                }`}
              >
                <span
                  className={`text-center ml-[0.35rem]  text-xs ${
                    isOpen.first ? "text-white" : "text-black"
                  }`}
                >
                  01
                </span>
              </div>

              <div className="pt-10 ">
                <span
                  onClick={() => {
                    toogle("first");
                  }}
                  className={`block rounded-md cursor-pointer ${
                    isOpen.first ? "bg-[#2196F3]" : "bg-white"
                  } xl:w-[70%] w-full lg:w-[80%] block px-4 py-2 ${
                    isOpen.first ? "text-white" : "text-black"
                  } mb-2`}
                >
                  Analyize numerious insurance documents
                </span>
              </div>
            </div>

            <div
              className={`relative pb-5 pl-6 border-l ${
                isOpen.second ? "border-blue-500" : "border-white"
              }`}
            >
              <div
                onClick={() => {
                  toogle("second");
                }}
                className={`w-[35px] h-[35px] rounded-full border-4 border-white  absolute -left-[1.1rem] cursor-pointer ${
                  isOpen.second ? "bg-[#2196F3]" : "bg-white"
                }`}
              >
                <span
                  className={`text-center ml-[0.35rem]  text-xs ${
                    isOpen.second ? "text-white" : "text-black"
                  }`}
                >
                  02
                </span>
              </div>

              <div className="pt-10">
                <span
                  onClick={() => {
                    toogle("second");
                  }}
                  className={`block rounded-md cursor-pointer ${
                    isOpen.second ? "bg-[#2196F3]" : "bg-white"
                  } xl:w-[70%] w-full lg:w-[80%] block px-4 py-2 ${
                    isOpen.second ? "text-white" : "text-black"
                  } mb-2`}
                >
                  Identify ideal policy that suits your needs
                </span>
              </div>
            </div>

            <div
              className={`relative pb-5 pl-6 border-l ${
                isOpen.third ? "border-blue-500" : "border-white"
              }`}
            >
              <div
                onClick={() => {
                  toogle("third");
                }}
                className={`w-[35px] h-[35px] rounded-full absolute border-4 border-white -left-[1.1rem] cursor-pointer ${
                  isOpen.third ? "bg-[#2196F3]" : "bg-white"
                }`}
              >
                <span
                  className={`text-center ml-[0.35rem]  text-xs ${
                    isOpen.third ? "text-white" : "text-black"
                  }`}
                >
                  03
                </span>
              </div>

              <div className="pt-10">
                <span
                  onClick={() => {
                    toogle("third");
                  }}
                  className={`block rounded-md cursor-pointer ${
                    isOpen.third ? "bg-[#2196F3]" : "bg-white"
                  } xl:w-[70%] w-full lg:w-[80%] block px-4 py-2 ${
                    isOpen.third ? "text-white" : "text-black"
                  } mb-2`}
                >
                  Get the most competitive rates
                </span>
              </div>
            </div>

            <div className="relative  pb-5 pl-6 ">
              <div
                onClick={() => {
                  toogle("forth");
                }}
                className={`w-[35px] h-[35px] rounded-full absolute border-4 border-white -left-[1.1rem] cursor-pointer ${
                  isOpen.forth ? "bg-[#2196F3]" : "bg-white"
                }`}
              >
                <span
                  className={`text-center ml-[0.35rem]  text-xs ${
                    isOpen.forth ? "text-white" : "text-black"
                  }`}
                >
                  04
                </span>
              </div>

              <div className="pt-10">
                <span
                  onClick={() => {
                    toogle("forth");
                  }}
                  className={`block rounded-md cursor-pointer ${
                    isOpen.forth ? "bg-[#2196F3]" : "bg-white"
                  } xl:w-[70%] w-full lg:w-[80%] block px-4 py-2 ${
                    isOpen.forth ? "text-white" : "text-black"
                  } mb-2`}
                >
                  Get Covered
                </span>
              </div>
            </div>
          </div>

          {isOpen.first ? (
            <ProcessBox
              text1={`At InsuranceBuzz, our process begins with a meticulous analysis of the numerous insurance documents in the market. We understand that the insurance landscape can be overwhelming, filled with complex policies and intricate details. That's why our team of dedicated experts is here to decipher the fine print for you. We dive deep into the world of insurance documents, breaking down the jargon and sifting through the details, ensuring that you have a clear understanding of your options.`}
              text2={`Our commitment to you is to simplify the process. We believe that knowledge is power, and by carefully examining these documents, we empower you to make informed decisions about your insurance needs. Whether you're a business owner, a homeowner, or an individual seeking coverage, InsuranceBuzz has got you covered. Our thorough analysis ensures that no stone is left unturned, helping you navigate the insurance landscape with confidence.`}
              // point1={
              //   'If you face any challenges, we assist with forms, application updates, and inquiries via phone, email, or live chat'
              // }
              // point2={`Your satisfaction and understanding are our main concerns, and we're here to guide you at every stage`}
            />
          ) : isOpen.second ? (
            <ProcessBox
              text1={`Insurance is not a one-size-fits-all solution. That's why the next step in the InsuranceBuzz process is to dentify the ideal policy tailored to your unique needs. We understand that your life, your assets, and your goals are distinct from anyone else's. That's why our team takes the time to get to know you personally. We consider your lifestyle, your family, your business, and your dreams to create a customized insurance plan that provides precisely the coverage you need.`}
              text2={`Our goal is to be your insurance partner, guiding you through the process of finding the right policy.
                We'll assess your risk profile, your budget, and your future plans to recommend insurance solutions that align perfectly with your life. Whether you're seeking protection for your family's future, your business assets, or any other aspect of your life, InsuranceBuzz is here to ensure that you have a policy that suits you like a glove. With us, it's not just about insurance; it's about tailored protection that gives you peace
                of mind.`}
              // point1={
              //   'If you face any challenges, we assist with forms, application updates, and inquiries via phone, email, or live chat'
              // }
              // point2={`Your satisfaction and understanding are our main concerns, and we're here to guide you at every stage`}
            />
          ) : isOpen.third ? (
            <ProcessBox
              text1={`At InsuranceBuzz, we know that getting the most competitive insurance rates is crucial. Your financial
              security matters, and we're committed to helping you maximize your budget. Our process includes
              shopping the market for you, leveraging our industry expertise and strong relationships with reputable
              insurance providers to secure the best rates available.`}
              text2={`We understand that affordability is essential, but we never compromise on the quality of coverage. Our goal is to find a cost-effective solution that meets your needs without cutting corners. We'll work closely with you to assess your unique circumstances and budget, ensuring that you receive not just coverage but the best value for your investment. With our dedication to securing competitive rates, you can have confidence that your insurance plan from InsuranceBuzz aligns with your financial goals.`}
              // point1={
              //   'If you face any challenges, we assist with forms, application updates, and inquiries via phone, email, or live chat'
              // }
              // point2={`Your satisfaction and understanding are our main concerns, and we're here to guide you at every stage`}
            />
          ) : isOpen.forth ? (
            <ProcessBox
              text1={`The final step in the InsuranceBuzz process is to simplify the paperwork for you. We know that dealing with insurance forms can be a time-consuming and daunting task. That's why we're here to streamline the process. Our team will assist you in filling out all the necessary insurance forms, ensuring that every detail is accurate and complete.`}
              text2={`We take the hassle out of paperwork, so you can focus on what truly matters. Whether you're applying for a new policy or updating an existing one, our experts will guide you through the process, making it as smooth and straightforward as possible. We're here to save you time and effort, ensuring that your insurance journey with InsuranceBuzz is hassle-free from start to finish. Your peace of mind is our priority, and that includes simplifying the administrative aspects of insurance for you.`}
              // point1={
              //   'If you face any challenges, we assist with forms, application updates, and inquiries via phone, email, or live chat'
              // }
              // point2={`Your satisfaction and understanding are our main concerns, and we're here to guide you at every stage`}
            />
          ) : (
            <ProcessBox
              text1={
                "Our platform utilizes advanced digital tools to quickly assess your insurance needs within minutes."
              }
              text2={
                "We analyze complex insurance documents using data from various sources to find the perfect policy for you. We also provide competitive rates by accessing a vast database of reputable insurance companies"
              }
              point1={
                "If you face any challenges, we assist with forms, application updates, and inquiries via phone, email, or live chat"
              }
              point2={`Your satisfaction and understanding are our main concerns, and we're here to guide you at every stage`}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default Process;
