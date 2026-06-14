import React from 'react';
import HeroPost from './HeroPost';

const DoubleHeroGrid: React.FC = () => {
  const posts = [
    {
      category: 'Fighter',
      title: 'Mobile Apple Planning Big Mac Redesign ander Nigh HalfMacShare',
      author: 'Admin',
      date: '27 August, 2024',
      readTime: '20 Mins',
      imageUrl: 'https://api.builder.io/api/v1/image/assets/TEMP/8c95864277ddc9ec7ac19f4eec07c3ba8d7b8896?width=1920',
    },
    {
      category: 'Action',
      title: 'How To Build A Magazine Layout With CSS Grid Areas',
      author: 'Admin',
      date: '27 August, 2024',
      readTime: '20 Mins',
      imageUrl: 'https://api.builder.io/api/v1/image/assets/TEMP/49e50c5d903567ba80590fb475df3495cd8a932f?width=1920',
    },
  ];

  return (
    <section className="grid grid-cols-1 md:grid-cols-2 w-full">
      {posts.map((post, index) => (
        <HeroPost key={index} {...post} />
      ))}
    </section>
  );
};

export default DoubleHeroGrid;