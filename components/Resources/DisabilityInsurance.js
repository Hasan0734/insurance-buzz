import React from "react";
import {  Collapse } from "antd";
import { disabilityInsuranceItems } from "@/data/faqs/disability-insurance";
const DisabilityInsurance = () => {
  return (
    <>
      <div
        id="disability-insurance"
        className="p-4"
        style={{ minHeight: "100vh", background: "#6f909e" }}
      >
        <h1 className="text-white font-bold text-2xl">
          Disability Insurance FAQs
        </h1>
        <Collapse
          ghost
          items={disabilityInsuranceItems}
          // defaultActiveKey={['1']}
        />
      </div>
    </>
  );
};

export default DisabilityInsurance;
