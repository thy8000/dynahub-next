import React from 'react';
import CategoryCard from './CategoryCard';

const categories = [
  {
    name: 'Action',
    image: 'https://api.builder.io/api/v1/image/assets/TEMP/105bbefa503cd547676f3ccb2b80fc0c0ec46c74?width=360',
  },
  {
    name: 'Gaming',
    image: 'https://api.builder.io/api/v1/image/assets/TEMP/f03bc9e1497eefc06d099c442724301476812900?width=360',
  },
  {
    name: 'Racing',
    image: 'https://api.builder.io/api/v1/image/assets/TEMP/baf5406427f787d07c7682b6958ccd176c52612d?width=360',
  },
  {
    name: 'Animation',
    image: 'https://api.builder.io/api/v1/image/assets/TEMP/1043c7f76d404dda099018f94ccc50d3837d7dfe?width=360',
  },
  {
    name: 'Fighter',
    image: 'https://api.builder.io/api/v1/image/assets/TEMP/2d66a820ec3096b3eb1bec0c867dff4e0123988e?width=360',
  },
  {
    name: 'Story',
    image: 'https://api.builder.io/api/v1/image/assets/TEMP/c68f55b9d39e72c57a24e88d230a42bc35a016c6?width=360',
  },
];

const CategoryGrid: React.FC = () => {
  return (
    <div className="w-full max-w-[1320px] mx-auto py-10 px-4">
      <div className="relative flex items-center mb-16 h-10">
        <div className="relative shrink-0 z-10">
          <svg width="250" height="40" viewBox="0 0 250 40" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M10.2788 2.85061C10.7931 1.15867 12.371 0 14.1607 0H244.816C247.531 0 249.478 2.58294 248.698 5.14939L238.971 37.1494C238.457 38.8413 236.879 40 235.089 40H4.43392C1.71907 40 -0.228107 37.4171 0.551999 34.8506L10.2788 2.85061Z"
              className="fill-accent"
            />
          </svg>
          <div className="absolute inset-0 flex items-center justify-center">
            <h2 className="text-white font-extrabold text-[20px] font-['Manrope'] capitalize leading-6">
              Exciting Categories
            </h2>
          </div>
        </div>
        <div className="flex-1 h-[5px] border-t border-b border-category-border ml-[-1px] mt-[4px]" />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 justify-items-center">
        {categories.map((category) => (
          <CategoryCard 
            key={category.name} 
            name={category.name} 
            image={category.image} 
          />
        ))}
      </div>
    </div>
  );
};

export default CategoryGrid;