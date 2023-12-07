import Link from "antd/es/typography/Link";
import React from "react";
import "./HeaderMenu.scss";

const HeaderMenu = () => {
  return (
    <div className="headermenu">
      <ul>
        <li>
          <Link href="">Product</Link>
        </li>
        <li>
          <Link href="">Solutions</Link>
        </li>
        <li>
          <Link href="">Marketplace</Link>
        </li>
        <li>
          <Link href="">Community</Link>
        </li>
        <li>
          <Link href="">Partners</Link>
        </li>
        <li>
          <Link href="">Pricing</Link>
        </li>
      </ul>
    </div>
  );
};

export default HeaderMenu;
