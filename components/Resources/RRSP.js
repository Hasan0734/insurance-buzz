import React from "react";
import {  Collapse } from "antd";
import { rrspInsuranceItems } from "@/data/faqs/rrsp";
const RRSP = () => {
  return (
    <>
      <div
        id="rrsp"
        className="p-4"
        style={{ minHeight: "100vh", background: "#256c18CC" }}
      >
        <h1 className="text-white font-bold text-2xl">RRSP Insurance FAQs</h1>
        <Collapse
          ghost
          items={rrspInsuranceItems}
          // defaultActiveKey={['1']}
        />
      </div>
    </>
  );
};

export default RRSP;
