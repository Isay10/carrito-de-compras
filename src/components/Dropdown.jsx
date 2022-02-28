import "./Dropdown.css";

export default function Dropdown({ options, label }) {
  return (
    <div className="dropdown-container">
      <label className="dropdown-label">{label}</label>
      <select className="dropdown-select">
        {options.map((data, index) => {
          return (
            <option className="dropdown-option" value={data.trim()} key={index}>
              {data}
            </option>
          );
        })}
      </select>
    </div>
  );
}
