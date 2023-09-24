import { CoverageDetail } from "@/components/CoverageDetail";
import { HeroSection } from "@/components/HeroSection/HeroSection";
import { internationalStudentsInsuranceFAQs } from "@/data/faqs/international-student-insurance";
import { Collapse } from "antd";
const StudentInsurance = () => {
  return (
    <>
      <HeroSection
        heading={"International Student Insurance"}
        para={`Ensure your family's future even when you're not there - life
            insurance offers the peace of mind that your loved ones will be
            financially secure. It's a lasting gift that guarantees protection
            and support, no matter what life brings.`}
        img={"/images/new/international-student-insurance.jpg"}
        color={"#A94443CC"}
        position="top"
      />

      <div className="relative top-[-165px]">
        <CoverageDetail />
      </div>

      <div className="container mx-auto relative top-[-105px] flex flex-col gap-5">
        <div className="space-y-1">
          <h1 className="font-bold text-lg">
            International Students Insurance
          </h1>
          <p className="text-gray-700 text-md">
            Studying in a different location can be both exhilarating and
            intimidating. Student travel insurance ensures that you receive the
            necessary support in the event of unforeseen emergencies. There's no
            doubt that traveling can be an enriching experience for students,
            expanding their horizons, exposing them to diverse cultures, and
            offering valuable insights into the world. Nonetheless, it's crucial
            to acknowledge that travel carries inherent risks.
          </p>
          <p className="text-gray-700 text-md">
            Accidents are a possibility, and on occasion, they can result in
            severe injuries or even fatalities. This underscores the
            significance of students having travel insurance.
          </p>
        </div>

        <div className="space-y-2">
          <h2 className="font-bold text-lg">Points to Remember</h2>
          <ul className="list-disc ml-6">
            <li className="text-md">
              Students studying abroad are not covered by their home country's
              public healthcare system.
            </li>
            <li className="text-md">
              Student travel medical insurance offers substantial coverage for
              emergencies, often reaching into the millions.
            </li>
            <li className="text-md">
              These insurance policies cater to both Canadian students traveling
              overseas for their studies and international students coming to
              Canada for educational purposes.
            </li>
          </ul>
        </div>
      </div>

      <div
        className="p-5 relative top-[-60px]"
        id="life-insurance"
        style={{ background: "#A94443CC" }}
      >
        <h1 className="text-white font-bold text-2xl container mx-auto">
        International Students Insurance FAQs
        </h1>
        <Collapse
          ghost
          items={internationalStudentsInsuranceFAQs}
          // defaultActiveKey={['1']}
        />
      </div>
    </>
  );
};

export default StudentInsurance;
