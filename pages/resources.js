import { Menu } from "antd";

import { HeroSection } from "@/components/HeroSection/HeroSection";

import { useRouter, useSearchParams, usePathname } from "next/navigation";
import LifeInsurance from "@/components/Resources/LifeInsurance";
import CriticalInsurance from "@/components/Resources/CriticalInsurance";
import DisabilityInsurance from "@/components/Resources/DisabilityInsurance";
import HelthInsurance from "@/components/Resources/HelthInsurance";
import TermInsurance from "@/components/Resources/TermInsurance";
import TravelInsurance from "@/components/Resources/TravelInsurance";
import IntStudentInsurance from "@/components/Resources/IntStudentInsurance";
import SuperVisaInsurance from "@/components/Resources/SuperVisaInsurance";
import RESP from "@/components/Resources/RESP";
import RRSP from "@/components/Resources/RRSP";
import TFSA from "@/components/Resources/TFSA";
import ImportantLinks from "@/components/Resources/ImportantLinks";
import { useEffect, useRef, useState } from "react";

const items = [
  {
    key: "life-insurance",
    href: "#life-insurance",
    label: "Life Insurance",
    children: [
      {
        key: "critical-insurance",
        href: "#critical-insurance",
        label: "Critical Illness Insurance",
      },
      {
        key: "disability-insurance",
        href: "#disability-insurance",
        label: "Disability Insurance",
      },
      {
        key: "health-insurance",
        href: "#health-insurance",
        label: "Health Insurance",
      },
    ],
  },

  {
    key: "term-insurance",
    href: "#term-insurance",
    label: "Term Life Insurance",
  },
  {
    key: "travel-insurance",
    href: "#travel-insurance",
    label: "Travel Insurance",
    children: [
      {
        key: "international-students-insurance",
        href: "#international-insurance",
        label: "International Students Insurance",
      },
      {
        key: "supervisa-insurance",
        href: "#supervisa-insurance",
        label: "Super Visa Insurance",
      },
    ],
  },

  {
    key: "investments",
    href: "#investments",
    label: "Investments",
    children: [
      {
        key: "resp",
        href: "#resp",
        label: "RESP",
      },
      {
        key: "rrsp",
        href: "#rrsp",
        label: "RRSP",
      },
      {
        key: "tfsa",
        href: "#tfsa",
        label: "TFSA",
      },
    ],
  },

  {
    key: "claim-insurance",
    href: "#claim-insurance",
    label: "Claim Process",
  },
  {
    key: "important-links",
    href: "#important-links",
    label: "Important Links",
  },
];

const ResourcesPage = () => {
  const [current, setCurrent] = useState("life-insurance");
  const [collapsed, setCollapsed] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  const searchParams = useSearchParams();
  const tab = searchParams.get("tab");
  const ref = useRef();


  useEffect(() => {
    console.log(ref.current.offsetTop)
    if(tab){
      window.scrollTo(0, ref.current.offsetTop - 120);
    }
  
  }, [tab])

  const onClick = (e) => {
    router.push({ href: pathname, query: { tab: e.key } },  undefined, { scroll: false } );
    setCurrent(e.key);

  };

  const renderSection = (params) => {
    switch (params) {
      case "life-insurance":
        return <LifeInsurance />;
      case "critical-insurance":
        return <CriticalInsurance />;
      case "disability-insurance":
        return <DisabilityInsurance />;
      case "health-insurance":
        return <HelthInsurance />;
      case "term-insurance":
        return <TermInsurance />;
      case "travel-insurance":
        return <TravelInsurance />;
      case "international-students-insurance":
        return <IntStudentInsurance />;
      case "supervisa-insurance":
        return <SuperVisaInsurance />;
      case "resp":
        return <RESP />;
      case "rrsp":
        return <RRSP />;
      case "tfsa":
        return <TFSA />;
      case "claim-insurance":
        return <LifeInsurance />;
      case "important-links":
        return <ImportantLinks />;
      default:
        return <LifeInsurance />;
    }
  };


  return (
    <>
      <HeroSection
        heading={"Frequently Asked Questions"}
        para={`Welcome to the hub of frequently asked questions on insurance.`}
        img={"/images/sub/FAQ-hero-image.jpeg"}
        color={"#5393becc"}
        position="top"
      />
      <div className="bg-[#305fa9] relative left-0 right-0 top-[-165px]" ref={ref}>
        <div className="grid grid-cols-6">
          <Menu
            onClick={onClick}
            selectedKeys={[current]}
            mode="inline"
            items={items}
            defaultSelectedKeys={["1"]}
            defaultOpenKeys={["sub1"]}
            style={{ height: "100vh" }}
            theme="dark"
          />
          <div className="col-span-5  container mr-20">
            {renderSection(tab)}
          </div>
        </div>
      </div>
    </>
  );
};

export default ResourcesPage;
