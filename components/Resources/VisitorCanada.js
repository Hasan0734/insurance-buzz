import React from "react";
import {  Collapse } from "antd";
import { visitorCanadaInsuranceItems } from "@/data/faqs/visitor-canada-insurance";

const VisitorCanada = () => {
  return (
    <>
      <div
        id="critical-insurance"
        className="p-4"
        style={{ minHeight: "100vh", background: "#308b84" }}
      >
        <h1 className="text-white font-bold text-2xl">
        Visitor to Canada Insurance
        </h1>
        <Collapse
          ghost
          items={visitorCanadaInsuranceItems}
          // defaultActiveKey={['1']}
        />
      </div>
    </>
  );
};

export default VisitorCanada;
