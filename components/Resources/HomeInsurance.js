import React from "react";
import {  Collapse } from "antd";
import { autoInsuranceItems } from "@/data/faqs/auto-insurance";
import { homeInsuranceItems } from "@/data/faqs/home-insurance";

const HomeInsurance = () => {
  return (
    <>
      <div
        id="critical-insurance"
        className="p-4"
        style={{ minHeight: "100vh", background: "#308b84" }}
      >
        <h1 className="text-white font-bold text-2xl">
          Home Insurance FAQs
        </h1>
        <Collapse
          ghost
          items={homeInsuranceItems}
          // defaultActiveKey={['1']}
        />
      </div>
    </>
  );
};

export default HomeInsurance;
