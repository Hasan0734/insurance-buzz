import { ContactForm } from "@/components/ContactForm";
import { CoverageDetail } from "@/components/CoverageDetail";
import { HeroSection } from "@/components/HeroSection/HeroSection";
import { respInsuranceItems } from "@/data/faqs/resp";
import { Collapse } from "antd";
const RESP = () => {
  return (
    <>
      <HeroSection
        heading={"Registered Education Saving PLan (RESP)"}
        para={`A Registered Education Savings Plan (RESP) is an educational savings
            program supported by the Canadian government. Participants in an
            RESP make contributions that generate tax-free earnings to cover
            higher education expenses. Alongside parental contributions, the
            government also provides a specific contribution to these plans for
            children below the age of 18.`}
        img={"/images/sub/RESP.jpg"}
        color={"#5393becc"}
        position="top"
      />

      <div className="relative top-[-165px]">
        <ContactForm />
      </div>

      <div
        id="resp"
        className="p-4"
        style={{ minHeight: "100vh", background: "#5393becc" }}
      >
        <h1 className="text-white font-bold text-2xl">RESP Insurance FAQs</h1>
        <Collapse
          ghost
          items={respInsuranceItems}
          // defaultActiveKey={['1']}
        />
      </div>
    </>
  );
};

export default RESP;
