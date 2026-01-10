const SidebarFilter = () => {
  return (
    <div className="w-[280px] mt-[120px] bg-[#0B2C63F0] text-white p-4 fixed top-0 left-0 bottom-0 z-40 shadow-md overflow-y-auto">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-bold">Material Type</h2>
        <button className="text-white text-xl">×</button>
      </div>
      <div className="space-y-2">
        {Array(8).fill().map((_, i) => (
          <div key={i} className="bg-white/80 text-black py-1 px-3 rounded">Empty</div>
        ))}
      </div>

      <h2 className="text-lg font-bold mt-6">Size</h2>
      <div className="space-y-2 mt-2">
        {Array(5).fill().map((_, i) => (
          <div key={i} className="bg-white/80 text-black py-1 px-3 rounded">Empty</div>
        ))}
      </div>

      {/* Outer white block */}
        <div className="bg-white p-4 rounded mt-6">
        {/* Color title + Custom Colors link */}
        <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-bold text-black">Color</h2>
            <span className="text-xs font-semibold text-[#0B3F87]  cursor-pointer">
            Custom Colors
            </span>
        </div>

        {/* Inner gray box for color dots */}
        <div className="bg-[#e1e1e1] p-4 rounded">
            <div className="flex flex-col items-center gap-3">
            {/* Row 1 */}
            <div className="flex gap-3">
                {["#000", "#f00", "#ffa500", "#008000", "#999966"].map((color, i) => (
                <div
                    key={i}
                    className="w-5 h-5 rounded-full border-2 border-white"
                    style={{ backgroundColor: color }}
                />
                ))}
            </div>
            {/* Row 2 */}
            <div className="flex gap-3">
                {["#c0c0c0", "#666666", "#800080", "#1E90FF", "#FFD700"].map((color, i) => (
                <div
                    key={i}
                    className="w-5 h-5 rounded-full border-2 border-white"
                    style={{ backgroundColor: color }}
                />
                ))}
            </div>
            </div>
        </div>
        </div>


      
    </div>
  );
};

export default SidebarFilter;
