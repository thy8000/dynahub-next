import React from 'react';

const CategoryCard: React.FC<{ name: string; image: string; }> = ({ name, image }) => {
  return (
    <div className="relative w-[180px] h-[180px] shrink-0">
      <div className="w-full h-full rounded-[50px] overflow-hidden relative group cursor-pointer shadow-md transition-all duration-300 hover:shadow-xl">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div
          className="absolute inset-0 bg-gradient-to-t from-black/90 to-black/20 opacity-100 group-hover:opacity-80 transition-opacity"
        />
        <div className="absolute top-[114px] left-1/2 -translate-x-1/2 bg-white/30 backdrop-blur-sm rounded-[3px] px-3 py-1 flex items-center justify-center">
          <span className="text-white text-[13px] font-semibold uppercase tracking-[0.78px] font-['Manrope'] whitespace-nowrap">
            {name}
          </span>
        </div>
      </div>
    </div>
  );
};

export default CategoryCard;