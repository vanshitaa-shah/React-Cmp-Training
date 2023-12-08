import Search from "antd/es/input/Search";
import React from "react";
import { images } from "../../config/images";
import "./Banner.scss";

const Banner = () => {
  return (
    <div className="banner">
      <img src={images.header} alt="" />
      <div className="content">
        <h1>Find a specialist</h1>
        <p>
          Power up your app, Droplet, Kubernetes clusters, and more with Droplet
          1-Click preconfigured VMs, Kubernetes 1-Click helm deployments
        </p>
        <Search placeholder="What do you need help with?" />
      </div>
    </div>
  );
};

export default Banner;
