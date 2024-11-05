import "./CardList.css";
import Card from "../Card";

const cards = Array(9).fill({
  title: "FLUTTER",
  description: "open-source mobile UI framework",
  author: "Admin",
  date: "NGÀY 27 THÁNG 9 NĂM 2021"
});

function CardList() {
  return (
    <div className="card-list">
      {cards.map((card, index) => (
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
