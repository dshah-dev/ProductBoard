import { IoMdSearch } from "react-icons/io";

export default function SearchBar({ search, setSearch }) {
  return (
    <div className="relative flex-1 ">
      <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none text-muted focus-within:text-primary-brand transition-colors">
        <IoMdSearch size={22}/>
      </div>
      <input
        type="text"
        placeholder="Search products..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="input-field pl-12"
      />
    </div>
  );
}