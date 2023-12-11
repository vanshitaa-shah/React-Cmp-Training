import { Col, Row, Space } from "antd";
import React from "react";
import Banner from "../components/banner/Banner";
import LeftSidebar from "../components/left-sidebar/LeftSidebar";
import Tags from "../components/tags/Tags";

const Layout = ({ children, isListView, setIsListView }) => {
  return (
    <>
      <Banner />
      <div className="container py-48">
        <Row gutter={62}>
          <Col span={6}>
            <LeftSidebar />
          </Col>
          <Col span={18}>
            <div className="filter-header">
              <Space size={[0, 4]} className="filter-tags">
                <Tags value="Blockchain" closable={true} className="tag-grey" />
                <Tags
                  value="Cloud Aggregator"
                  closable={true}
                  className="tag-grey"
                />
                <Tags
                  value="Cloud Management"
                  closable={true}
                  className="tag-grey"
                />
              </Space>
              <div
                className="toggle-icon"
                onClick={() => setIsListView(!isListView)}
              >
                {isListView ? (
                  <ion-icon name="apps-outline"></ion-icon>
                ) : (
                  <ion-icon name="list"></ion-icon>
                )}
              </div>
            </div>

            {children}
          </Col>
        </Row>
      </div>
    </>
  );
};

export default Layout;
