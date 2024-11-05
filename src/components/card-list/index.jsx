import "./CardList.css";
import Card from "../Card";

const cards = Array(9).fill({
  id: 43,
  title: "Next.js 14 App Router Localization with next-intl",
  description:
    "open-source mobile UI framework,open-source mobile UI frameworopen-source mobile UI framewor",
  thumbnail: {
    presignedUrl:
      "https://cdn.prod.website-files.com/5ee12d8d7f840543bde883de/5ef3a1148ac97166a06253c1_flutter-logo-white-inset.svg",
  },
  date: "NGÀY 27 THÁNG 9 NĂM 2021",
  tags: [
    {
      id: 3,
      name: "ReactJS",
    },
  ],
  author: {
    id: 1,
    username: "admin",
  },
  reactions: {
    totalReactions: 0,
  },
  comments: {
    totalComments: 0,
  },
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
