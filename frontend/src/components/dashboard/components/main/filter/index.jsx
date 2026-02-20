export default function CategoryFilter({
  category,
  setCategory,
  categories,
}) {
  return (
    <select
      value={category}
      onChange={(e) => setCategory(e.target.value)}
      className="border px-4 py-2 rounded-lg w-full md:w-48"
    >
      {categories.map((e) => (
        <option key={e} value={e} className="">
          {e}
        </option>
      ))}
    </select>
  );
}
