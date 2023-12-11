import { Avatar } from "antd";
import React from "react";

const UserAvatar = ({ src, shape, size, icon }) => {
  return <Avatar src={src} size={size} icon={icon} shape={shape} />;
};

export default UserAvatar;
