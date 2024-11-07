import { useEffect } from "react";
import CardList from "../../components/card-list";
import useUrl from "../../hook/useUrl";
import "./style.css";

function Home() {
  const {setLimit,setPage,setTotalPage} = useUrl()
  useEffect(() => {
    setLimit(8)
    setPage(1)
    setTotalPage(2)
  }, [])
  return (
    <div className="home">
      <div className="block-vertical"></div>
      <CardList />
    </div>
  );
}

export default Home;
