import Searcher from "../components/Searcher";
import Dropdown from "../components/Dropdown";
import ProductCard from "../components/ProductCard";

export default function HomePage() {
  return (
    <main>
      <h1>Catalogo</h1>
      <Searcher placeholder={"Buscar Productos"} />
      <Dropdown options={["Mas baratos", "Mas caros"]} label={"ORDENAR POR"} />
      <ProductCard />
    </main>
  );
}
