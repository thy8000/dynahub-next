'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

import hamburguerIcon from '../assets/icons/hamburguer.svg'; 
import closeIcon from '../assets/icons/close.svg'; 
import mainMenuLogo from '../assets/images/main-menu-logo.png'; 
import searchIcon from '../assets/icons/search.svg'; 

interface MenuItem { 
  id: string;
  label: string;
  url: string;
  childItems?: {
    nodes: MenuItem[];
  };
}
export default function MobileMenu({ menuItems }: { menuItems: MenuItem[] }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <div className="md:hidden">
      <button onClick={toggleMenu} className="p-2 outline-none" aria-label="Abrir menu">
        <Image src={hamburguerIcon} alt="Menu" width={32} height={32} className="brightness-0 invert" /> 
      </button>

      <div 
        className={`fixed inset-0 bg-black/60 z-[100] transition-opacity duration-300 ${isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}
        onClick={toggleMenu}
      />

      <aside className={`fixed top-0 right-0 h-full w-[85%] max-w-[320px] bg-header-bg z-[101] shadow-xl transform transition-transform duration-300 ease-in-out flex flex-col ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        
        <div className="flex justify-between items-center p-6 border-b border-white/10">
          <Image
            src={mainMenuLogo} 
            alt="DynaHub Logo"
            height={40}
            className="h-[40px] w-auto object-contain"
          />
          <button onClick={toggleMenu} className="p-1" aria-label="Fechar menu">
            <Image src={closeIcon} alt="Fechar" width={24} height={24} className="brightness-0 invert" />
          </button>
        </div>

        <div className="p-6">
          <form className="flex items-center bg-nav-bg border border-search-border rounded-[30px] px-4 py-2">
            <input
              type="text"
              placeholder="Search here . . ."
              className="bg-transparent border-none text-search-text w-full outline-none placeholder:text-search-text text-sm font-medium"
            />
            <button type="submit"> 
              <Image src={searchIcon} alt="Search" width={18} height={18} className="brightness-0 invert opacity-60" />
            </button>
          </form>
        </div>

        <nav className="flex-1 overflow-y-auto px-6 py-2">
          <ul className="flex flex-col gap-1 list-none font-manrope font-bold text-white text-base">
            {menuItems.map((item) => (
              <li key={item.id} className="py-2 border-b border-white/5 last:border-0">
                <Link 
                  href={item.url} 
                  className="hover:text-accent transition-colors block py-2"
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </Link>
                
                {item.childItems && item.childItems.nodes.length > 0 && (
                  <ul className="pl-4 mt-2 flex flex-col gap-2">
                    {item.childItems.nodes.map((subItem) => (
                      <li key={subItem.id}>
                        <Link
                          href={subItem.url}
                          className="text-white/60 hover:text-accent text-sm font-semibold transition-colors block py-1"
                          onClick={() => setIsOpen(false)}
                        >
                          {subItem.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </nav>

        <div className="p-6 mt-auto">
            <p className="text-white/30 text-[10px] uppercase tracking-widest text-center">
                © 2024 DynaHub. All rights reserved.
            </p>
        </div>
      </aside>
    </div>
  );
}