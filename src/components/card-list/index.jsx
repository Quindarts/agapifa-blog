import "./CardList.css";
import Card from "../Card";
import data from "../../data/tagList.json"


function CardList() {
  return (
    <div className="card-list">
      {data.data.record.map((card, index) => (
        <Card key={index} {...card} />
      ))}
      <div className="pagination">
        <span>&laquo;</span>
        <span>1</span>
        <span>2</span>
        <span>3</span>
        <span>&raquo;</span>
      </div>
    </div>
  );
}

export default CardList;
