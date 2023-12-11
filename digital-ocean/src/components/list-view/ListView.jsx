import { Col, Row } from "antd";
import React from "react";
import CardList from "../card-list/CardList";
import "./ListView.scss";

const ListView = () => {
  return (
    <div className="listing">
      <div className="listing-header">
        <Row gutter={0}>
          <Col span={6}>
            <h5>Company</h5>
          </Col>
          <Col span={18}>
            <h5>Specialist</h5>
          </Col>
        </Row>
      </div>

      <div className="listing-content">
        <CardList />
        <CardList />
        <CardList />
        <CardList />
        <CardList />
        <CardList />
        <CardList />
        <CardList />
        <CardList />
      </div>
    </div>
  );
};

export default ListView;
