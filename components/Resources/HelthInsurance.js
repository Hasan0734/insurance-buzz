import React from "react";
import {  Collapse } from "antd";
import { healthInsuranceItems } from "@/data/faqs/health-insurance";

const HelthInsurance = () => {
  return (
    <>
      <div
        className="p-4 "
        id="health-insurance"
        style={{ minHeight: "100vh", background: "#61b1bc" }}
      >
        <h1 className="text-white font-bold text-2xl">Health Insurance FAQs</h1>
        <Collapse
          ghost
          items={healthInsuranceItems}
          // defaultActiveKey={['1']}
        />
      </div>
    </>
  );
};

export default HelthInsurance;
