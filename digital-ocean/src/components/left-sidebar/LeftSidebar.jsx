import Link from "antd/es/typography/Link";
import React from "react";
import Filter from "../filter/Filter";
import "./LeftSidebar.scss";

const LeftSidebar = () => {
  return (
    <div className="leftsidebar">
      <div className="filter-header">
        <h5>Filter</h5>
        <Link>Reset</Link>
      </div>
      <Filter />
    </div>
  );
};

export default LeftSidebar;
