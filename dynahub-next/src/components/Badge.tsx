import React from 'react';

interface BadgeProps {
  text: string;
}

const Badge: React.FC<BadgeProps> = ({ text }) => {
  return (
    <div className="relative shrink-0 z-10">
      <svg width="250" height="40" viewBox="0 0 250 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M10.2788 2.85061C10.7931 1.15867 12.371 0 14.1607 0H244.816C247.531 0 249.478 2.58294 248.698 5.14939L238.971 37.1494C238.457 38.8413 236.879 40 235.089 40H4.43392C1.71907 40 -0.228107 37.4171 0.551999 34.8506L10.2788 2.85061Z"
          className="fill-accent"
        />
      </svg>
      <div className="absolute inset-0 flex items-center justify-center">
        <h2 className="text-white font-extrabold text-[20px] font-['Manrope'] capitalize leading-6">
          {text}
        </h2>
      </div>
    </div>
  );
};

export default Badge;