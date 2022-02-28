export default function Dropdown({ options, label }) {
  return (
    <div>
      <label>{label}</label>
      <select>
        {options.map((data, index) => {
          return (
            <option value={data.trim()} key={index}>
              {data}
            </option>
          );
        })}
      </select>
    </div>
  );
}
