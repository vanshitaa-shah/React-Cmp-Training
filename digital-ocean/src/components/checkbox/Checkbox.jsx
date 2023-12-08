import React from "react";
import { Checkbox } from "antd";
import "./Checkbox.scss";

const BaseCheckbox = ({ value }) => {
  return <Checkbox>{value}</Checkbox>;
};

export default BaseCheckbox;
