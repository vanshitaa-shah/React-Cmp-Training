import { Col, Row, Space } from "antd";
import React from "react";
import Avatar from "../avatar/Avatar";
import { images } from "../../config/images";
import "./CardList.scss";
import Tags from "../tags/Tags";

const CardList = () => {
  return (
    <div className="card-list">
      <Row gutter={0} className="card-list-wrap">
        <Col span={6} className="card-list-title">
          <Avatar src={images.avatar} size={40} />
          <h4>Mastodon</h4>
        </Col>
        <Col span={18}>
          <p>
            Mastodon is free and open-source software that provides instant
            global communication.
          </p>
          <Space size={[0, 4]}>
            <Tags value="Analytics" className="tag-grey small" />
            <Tags value="Big data" className="tag-grey small" />
            <Tags value="Financial" className="tag-grey small" />
            <Tags value="Developer" className="tag-grey small" />
            <Tags value="Digital Marketing" className="tag-grey small" />
            <Tags value="3 more" className="tag-grey small" />
          </Space>
        </Col>
      </Row>
    </div>
  );
};

export default CardList;
