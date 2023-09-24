import WhyChooseBox from "./WhyChooseBox";

const WhyChoose = () => {
  return (
    <div className="bg-[#151b32e5] text-white">
      <div className="flex flex-col px-5 max-w-7xl py-5 pt-16 m-auto">
        {/* <span className='bg-[#FFDB58] w-fit text-black p-[0.35rem] mb-2'>
          Why InsuranceBuzz
        </span> */}
        <h2 className="text-white p-[0.40rem] mb-2 text-center text-4xl font-bold">
          <span className=" relative after:absolute after:w-full after:h-[2px] after:rounded-full after:bg-orange-500 after:left-0 after:-bottom-1">
            Why InsuranceBuzz
          </span>
        </h2>
        <div className="mt-8 text-base text-gray-200">
          When it comes to securing your future, InsuranceBuzz is the name you
          can trust. We offer personalized insurance advisory services that
          cater to your unique needs. Our team is committed to providing you
          with unbiased advice and helping you make informed decisions. With
          InsuranceBuzz, you can have peace of mind knowing that your financial
          security is in good hands.
        </div>
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
  );
};

export default WhyChoose;
