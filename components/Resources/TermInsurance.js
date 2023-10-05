import React from "react";
import {  Collapse } from "antd";
import { termLifeInsuranceItems } from "@/data/faqs/term-life-insurance";


const TermInsurance = () => {
  return (
    <>
      <div
        id="term-insurance"
        className="p-4"
        style={{ minHeight: "100vh", background: "#ed8b08" }}
      >
        <h1 className="text-white font-bold text-2xl">Term Insurance FAQs</h1>
        <Collapse
          ghost
          items={termLifeInsuranceItems}
          // defaultActiveKey={['1']}
        />
      </div>
    </>
  );
};

export default TermInsurance;
