import "./ProductsList.css";
import Products from "../Components/Products";
import { useParams } from "react-router-dom";
function Home() {
  let { category } = useParams();
  let title = category;
  if (category === "all") {
    category = "";
    title = "Latest Products";
  }

  return (
    <div className="productspage">
      <h2 className="productspage-title">{title}</h2>

      <div className="productspage-items">
        <Products category={category} />
      </div>
    </div>
  );
}

export default Home;
