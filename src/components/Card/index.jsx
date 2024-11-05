/* eslint-disable react/prop-types */
import "./Card.css";
import PropTypes from "prop-types";

import { Icon } from "@iconify/react";

function Card(props) {
  const { id, title, description, thumbnail, author, date } = props;
  return (
    <div key={id} className="card">
      <div className="card-image">
        <img src={`${thumbnail?.presignedUrl}`} alt="Flutter" />
      </div>
      <div className="card-content">
        <h5>{title}</h5>
        <p>{description}</p>
        <div className="card-footer">
          <div className="card-author" onClick={() => {}}>
            <div>
              <Icon icon="mingcute:user-4-line" width="24" height="24" />
            </div>
            <span>{author?.username}</span>
          </div>
          <span className="right-text">{date}</span>
        </div>
      </div>
    </div>
  );
}

Card.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  author: PropTypes.object.isRequired,
  date: PropTypes.string.isRequired,
  thumbnail: PropTypes.object.isRequired,
};

export default Card;
