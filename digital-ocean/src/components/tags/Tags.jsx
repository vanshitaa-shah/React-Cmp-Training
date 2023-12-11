import { Tag } from "antd";
import React from "react";
import "./Tags.scss";

const Tags = ({ onClose, closable, value, className }) => {
  return (
    <Tag closable onClose={onClose} className={`tag ${className}`}>
      {value}
    </Tag>
  );
};

export default Tags;
