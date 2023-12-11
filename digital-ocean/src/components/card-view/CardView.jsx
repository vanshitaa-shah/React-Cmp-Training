import { Col, Row } from "antd";
import React from "react";
import Card from "../card/Card";

const CardView = () => {
  return (
    <div className="card-view">
      <Row gutter={16}>
        <Col span={8}>
          <Card />
        </Col>
        <Col span={8}>
          <Card />
        </Col>
        <Col span={8}>
          <Card />
        </Col>
        <Col span={8}>
          <Card />
        </Col>
        <Col span={8}>
          <Card />
        </Col>
        <Col span={8}>
          <Card />
        </Col>
      </Row>
    </div>
  );
};

export default CardView;
