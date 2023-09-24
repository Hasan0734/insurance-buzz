import { CoverageDetail } from "@/components/CoverageDetail";
import { HeroSection } from "@/components/HeroSection/HeroSection";
import { healthInsuranceItems } from "@/data/faqs/health-insurance";
import { Collapse } from "antd";

const HealthPage = () => {
  return (
    <>
      <HeroSection
        heading={"Health Insurance - Drug and Dental Plans"}
        para={` Disability insurance offers protection against income loss caused by
            the inability to work due to either permanent or temporary
            disabilities. This type of insurance assists by replacing a portion
            of your lost income and covering medical expenses in the event of an
            accident resulting in disability.`}
        img={"/images/sub/health.jpeg"}
        color={"#eabd03cc"}
        position="10% 40%"
      />

      <div className="relative top-[-165px]">
        <CoverageDetail />
      </div>

      <div className="container mx-auto relative top-[-105px] flex flex-col gap-5">
        <div className="space-y-1">
          <h1 className="font-bold">
            Is Dental Insurance a Valuable Investment in Canada?
          </h1>
          <p className="text-sm text-gray-700">
            Given that government-subsidized dental coverage is not accessible
            to all Canadians, dental insurance might prove advantageous for
            specific individuals. However, its value depends on individual
            circumstances and oral health requirements.
          </p>
        </div>

        <div className="space-y-2 mb-10">
          <h1 className="font-bold">
            Advantages of Having a Health Insurance - Drug & Dental Plan
          </h1>
          <ul className="list-disc ml-6">
            <li>
              It addresses a broad spectrum of ongoing minor healthcare expenses
              that would otherwise be paid out of pocket.
            </li>
            <li>
              <h1 className="font-bold">Tailored Coverage:</h1>
              <p>
                You have the flexibility to create a personalized plan by
                incorporating optional coverages to suit your needs, whether
                it's prescription drug, dental, home care, or a combination like
                prescription drugs and home care along with medical equipment.
              </p>
            </li>
            <li>
              <h1 className="font-bold">Family Inclusion:</h1>
              <p>
                Your spouse and dependent children under the age of 21 who are
                not employed can be included in your coverage plan.
              </p>
            </li>
            <li>
              <h1 className="font-bold">Premium Payment:</h1>
              <p>
                While you cannot purchase insurance for anyone else, including
                your parents, you do have the option to cover the premium on
                their behalf if you choose to do so.
              </p>
            </li>
          </ul>
        </div>
      </div>

      <div
        className="p-5 relative top-[-90px]"
        id="life-insurance"
        style={{ background: "#eabd03" }}
      >
        <h1 className="text-white font-bold text-2xl container mx-auto">
          Health Insurance FAQs
        </h1>
        <Collapse
          ghost
          items={healthInsuranceItems}
          // defaultActiveKey={['1']}
        />
      </div>
    </>
  );
};

export default HealthPage;
