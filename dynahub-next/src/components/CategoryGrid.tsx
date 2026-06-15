import React from 'react';
import CategoryCard from './CategoryCard';
import Badge from './Badge';
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
        <Badge text="Exciting Categories" />
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