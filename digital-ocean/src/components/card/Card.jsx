import React from "react";
import Avatar from "../avatar/Avatar";
import { images } from "../../config/images";
import Tags from "../tags/Tags";
import Link from "antd/es/typography/Link";
import "./Card.scss";

const Card = ({ value }) => {
  return (
    <div className="card">
      <div className="card-img">
        <img src={images.cardThumbnail} alt="card-thumbnail" />
        <Tags value={"Staff picked"} className="tag-blue small" />
      </div>
      <div className="card-img-caption">
        <Avatar src={images.avatar} size={56} />
        <Tags value={"PaaS vendor"} className="tag-grey small" />
      </div>

      <div className="card-content">
        <h3>Mastodon</h3>
        <p>
          Mastodon Mastodon is free and open-source software that provides
          instant global communication.
        </p>
      </div>

      <div className="card-bottom">
        <h4>Specialist</h4>
        <p>
          Analytics, Big data, Financial, Developer,Digital Marketing, and 3
          more
        </p>

        <div className="link">
          <Link href="#">View more</Link>
        </div>
      </div>
    </div>
  );
};

export default Card;
