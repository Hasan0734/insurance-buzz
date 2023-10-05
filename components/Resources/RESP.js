import React from "react";
import {  Collapse } from "antd";
import { respInsuranceItems } from "@/data/faqs/resp";
const RESP = () => {
  return (
    <>
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
