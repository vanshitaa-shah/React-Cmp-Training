import React from "react";
import { Button } from "antd";
import "./Button.scss";

const BaseButton = ({ value, type }) => {
  return <Button type={type}>{value}</Button>;
};

export default BaseButton;
