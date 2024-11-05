import "./Card.css";
import PropTypes from 'prop-types';

function Card(props) {
  const { title, description, author, date }=props;
  return (
    <div className="card">
      <div className="card-image">
        <img src="https://via.placeholder.com/150" alt="Flutter" />
      </div>
      <div className="card-content">
        <h3>{title}</h3>
        <p>{description}</p>
        <div className="card-footer">
          <span>{author}</span>
          <span>{date}</span>
        </div>
      </div>
    </div>
  );
}
Card.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
};

export default Card;
