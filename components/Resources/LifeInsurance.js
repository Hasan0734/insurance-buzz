import React from "react";
import {  Collapse } from "antd";
import { lifeInsuranceItems } from "@/data/faqs/life-insurance";


const LifeInsurance = () => {
  return (
    <>
      <div
        className="p-4 "
        id="life-insurance"
        style={{ minHeight: "100vh", background: "#305fa9" }}
      >
        <h1 className="text-white font-bold text-2xl">Life Insurance FAQs</h1>
        <Collapse
          ghost
          items={lifeInsuranceItems}
          // defaultActiveKey={['1']}
        />
      </div>
    </>
  );
};

export default LifeInsurance;
