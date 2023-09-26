import { CheckIcon, XMarkIcon } from "@heroicons/react/24/outline";
import WhyChooseBox from "./WhyChooseBox";
import Link from "next/link";

const WhyChoose = () => {
  return (
    <div className="bg-[#151b32e5] text-white">
      <div className=" py-5 pt-16">
        {/* <span className='bg-[#FFDB58] w-fit text-black p-[0.35rem] mb-2'>
          Why InsuranceBuzz
        </span> */}
        <h2 className="text-white p-[0.40rem] mb-2 text-center text-4xl font-bold">
          <span className=" relative after:absolute after:w-full after:h-[2px] after:rounded-full after:bg-orange-500 after:left-0 after:-bottom-1">
            Why InsuranceBuzz
          </span>
        </h2>
        <div className="mt-8 text-lg text-gray-200 container mx-auto">
            When it comes to securing your future, InsuranceBuzz is the name you
            can trust. We offer personalized insurance advisory services that
            cater to your unique needs. Our team is committed to providing you
            with unbiased advice and helping you make informed decisions. With
            InsuranceBuzz, you can have peace of mind knowing that your
            financial security is in good hands.
          </div>

        <div className=" mt-10  py-20">
          <div className="grid grid-cols-1 md:grid-cols-3 container mx-auto h-full  gap-7 items-center">
            <div className=" rounded-xl bg-white shadow-lg p-7 py-10">
              <h3 className="text-2xl font-bold text-center text-gray-900 bg-orange-200 rounded-md py-5">
                Insurance Brokers
              </h3>
              <ul className="mt-5 px-10 flex flex-col gap-8 text-gray-700  text-lg font-semibold">
                <li className=" flex items-center gap-2">
                  <XMarkIcon width={22} className="text-red-500" />
                  <span>Simple, quick, online</span>
                </li>
                <li className=" flex items-center gap-2">
                  <XMarkIcon width={22}  className="text-red-500" />
                  <span>Compare the market</span>
                </li>
                <li className=" flex items-center gap-2">
                  <CheckIcon width={22}   className="text-green-500"/>
                  <span>Live advisor support</span>
                </li>
                <li className=" flex items-center gap-2">
                  <XMarkIcon width={22}  className="text-red-500"/>
                  <span>Impartial, trusted advice</span>
                </li>
                <li className=" flex items-center gap-2">
                  <XMarkIcon width={22}  className="text-red-500"/>
                  <span>Commission-free advisors</span>
                </li>
                <li className=" flex items-center gap-2">
                  <CheckIcon width={22}   className="text-red-500"/>
                  <span>Apply from anywhere</span>
                </li>
              </ul>
            </div>
            <div className=" rounded-xl bg-blue-300 shadow-lg p-7 pt-10 pb-10">
              <div className="mb-5">
                <h3 className="text-2xl font-bold text-center text-white bg-indigo-600 rounded-md py-5">
                  Insurance Buzz
                </h3>
              </div>
              <ul className="px-10 flex flex-col gap-8 text-white text-lg font-semibold">
                <li className="  flex items-center gap-2">
                  <CheckIcon width={22}   />
                  <span>Simple, quick, online</span>
                </li>
                <li className="  flex items-center gap-2">
                  <CheckIcon width={22}   />
                  <span>Compare the market</span>
                </li>
                <li className=" flex items-center gap-2">
                  <CheckIcon width={22}   />
                  <span>Live advisor support</span>
                </li>
                <li className=" flex items-center gap-2">
                  <CheckIcon width={22}   />
                  <span>Impartial, trusted advice</span>
                </li>
                <li className=" flex items-center gap-2">
                  <CheckIcon width={22}   />
                  <span>Commission-free advisors</span>
                </li>
                <li className=" flex items-center gap-2">
                  <CheckIcon width={22}   />
                  <span>Apply from anywhere</span>
                </li>
              </ul>
              <div className="text-center mt-14">
                <Link
                  href={"/"}
                  className="px-5 py-3 bg-orange-500  text-lg rounded-full"
                >
                  Learn more
                </Link>
              </div>
            </div>

            <div className=" rounded-xl bg-white shadow-lg p-7 py-10">
              <h3 className="text-2xl font-bold text-center text-gray-900 bg-orange-200 rounded-md py-5">
                Insurance Companies
              </h3>
              <ul className="mt-5 px-10 flex flex-col gap-8 text-lg font-semibold text-gray-700">
                <li className="flex items-center gap-2">
                 <XMarkIcon width={22}  className="text-red-500"/>
                  <span>Simple, quick, online</span>
                </li>
                <li className=" flex items-center gap-2">
                 <XMarkIcon width={22}  className="text-red-500"/>
                  <span>Compare the market</span>
                </li>
                <li className=" flex items-center gap-2">
                  <CheckIcon width={22}   className="text-green-500"/>
                  <span>Live advisor support</span>
                </li>
                <li className=" flex items-center gap-2">
                 <XMarkIcon width={22}  className="text-red-500"/>
                  <span>Impartial, trusted advice</span>
                </li>
                <li className=" flex items-center gap-2">
                 <XMarkIcon width={22}  className="text-red-500"/>
                  <span>Commission-free advisors</span>
                </li>
                <li className=" flex items-center gap-2">
                 <XMarkIcon width={22}  className="text-red-500"/>
                  <span>Apply from anywhere</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="container mx-auto">
        
          <div className="my-10 grid sm:grid-cols-3 grid-cols-1 gap-10">
            <WhyChooseBox
              image={"/images/trust.png"}
              title={"Trust and Transparency"}
              description={
                "We believe in building trust with our clients through transparent communication and honest advice. Our aim is to provide you with the information you need to make informed decisions about your insurance coverage."
              }
            />
            <WhyChooseBox
              image={"/images/personalization.png"}
              title={"Personalized Solutions"}
              description={
                "We understand that everyone's insurance needs are unique. That's why we at InsuranceBuzz offer personalized solutions tailored to vour specific requirements. Our team of experts will work closely with you to find the right insurance plans that fit your lifestyle and budget."
              }
            />
            <WhyChooseBox
              image={"/images/customer-service.png"}
              title={"Exceptional Customer Service"}
              description={
                "At InsuranceBuzz, we prioritize customer satisfaction above all else. Our dedicated team is committed to providing exceptional customer service, ensuring that your insurance buying experience is smooth and hassle-free. We are always here to assist you throughout the process."
              }
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChoose;
