export default function SearchBar({ search, setSearch }) {
  return (
    <input
      type="text"
      placeholder="Search products..."
      value={search}
      onChange={(e) => setSearch(e.target.value)}
      className="border px-4 py-2 rounded-lg w-full md:w-70"
    />
  );
}
