import "./Searcher.css";

export default function Searcher({ placeholder }) {
  return (
    <div className="search-container">
      <input type="search" placeholder={placeholder} className="input-search" />
    </div>
  );
}
