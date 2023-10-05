import React from "react";
import {  Collapse } from "antd";
import { travelInsuranceItems } from "@/data/faqs/travel-insurance";


const TravelInsurance = () => {
  return (
    <>
      <div
        className="p-4"
        id="travel-insurance"
        style={{ minHeight: "100vh", background: "#9ab88c" }}
      >
        <h1 className="text-white font-bold text-2xl">Travel Insurance FAQs</h1>
        <Collapse
          ghost
          items={travelInsuranceItems}
          // defaultActiveKey={['1']}
        />
      </div>
    </>
  );
};

export default TravelInsurance;
