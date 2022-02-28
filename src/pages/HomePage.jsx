import Dropdown from "../components/Dropdown";
import ProductCard from "../components/ProductCard";
import Searcher from "../components/Searcher";
import "./HomePage.css";

export default function HomePage() {
  return (
    <main>
      <h1 className="title-home">Catalogo</h1>
      <div className="searcher-home">
        <Searcher placeholder={"Buscar Productos..."} />
        <Dropdown
          options={["Mas baratos", "Mas caros"]}
          label={"ORDENAR POR"}
        />
      </div>
      <ProductCard />
    </main>
  );
}
