import { FaChevronDown } from "react-icons/fa";

export default function CategoryFilter({ category, setCategory, categories }) {
  return (
    <div className="relative w-full md:w-auto">
      <select
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        className="input-field appearance-none pr-12 font-semibold cursor-pointer min-w-40"
      >
        {categories.map((e) => (
          <option key={e} value={e} className="bg-card text-foreground">
            {e}
          </option>
        ))}
      </select>
      <div className="absolute inset-y-0 right-4 flex items-center pointer-events-none text-muted">
        <FaChevronDown size={13}/>
      </div>
    </div>
  );
}

