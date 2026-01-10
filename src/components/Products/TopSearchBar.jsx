const TopSearchBar = () => {
  return (
    <div className="w-full px-4 sm:px-10 mt-6 flex items-center gap-2">
      <div className="flex items-center w-full bg-white border rounded-full px-3">
        <span className="text-[#0B2C63] mr-2">🔍</span>
        <input
          type="text"
          placeholder="SEARCH"
          className="flex-1 p-2 outline-none text-black placeholder:text-[#0B2C63]"
        />
      </div>
      <button className="bg-white text-[#0B2C63] px-4 py-2 rounded-l-full">FILTER</button>
      <button className="bg-[#0B2C63] text-white px-4 py-2 rounded-r-full">➤</button>
    </div>
  );
};

export default TopSearchBar;
