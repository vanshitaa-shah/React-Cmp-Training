import { Collapse } from "antd";
import React from "react";
import Checkbox from "../checkbox/Checkbox";
import "./Filter.scss";

const partnerProfile = [
  "Blockchain",
  "Cloud Aggregator",
  "Cloud Management",
  "DevOps",
  "Digital Marketing",
  "E-Commerce",
  "Kafka",
];

const servicesValues = [];
const regions = [
  "Africa",
  "Australia",
  "Canada",
  "Europe - East",
  "Europe - South",
  "Europe - North",
  "Europe - West",
];

const Filter = () => {
  const onChange = (key) => {
    console.log(key);
  };

  const items = [
    {
      key: "1",
      label: (
        <>
          <span>Partner Profile</span>
          <span className="badge badge-primary">3</span>
        </>
      ),
      children: (
        <div className="filter-panel">
          <div className="categories">
            {partnerProfile.map((val) => (
              <Checkbox key={val} value={val} />
            ))}
          </div>
        </div>
      ),
    },
    {
      key: "2",
      label: (
        <>
          <span>Services</span>
        </>
      ),
      children: (
        <div className="filter-panel">
          <div className="categories">
            {partnerProfile.map((val) => (
              <Checkbox key={val} value={val} />
            ))}
          </div>
        </div>
      ),
    },
    {
      key: "3",
      label: (
        <>
          <span>Regions</span>
        </>
      ),
      children: (
        <div className="filter-panel">
          <div className="categories">
            {regions.map((val) => (
              <Checkbox key={val} value={val} />
            ))}
          </div>
        </div>
      ),
    },
  ];
  return (
    <div className="filter-content">
      <Collapse
        defaultActiveKey={["1"]}
        onChange={onChange}
        expandIconPosition="end"
        items={items}
      ></Collapse>
    </div>
  );
};

export default Filter;
