import Image from 'next/image';
import Link from 'next/link';
import { getMenuItems } from '../services/wp-api'
import MobileMenu from './MobileMenu';

import mainMenuLogo from '../assets/images/main-menu-logo.png';
import searchIcon from '../assets/icons/search.svg';
import facebookIcon from '../assets/icons/facebook.svg';
import instagramIcon from '../assets/icons/instagram.svg';
import linkedinIcon from '../assets/icons/linkedin.svg';
import twitterIcon from '../assets/icons/twitter.svg';

interface MenuItem {
  id: string;
  label: string;
  url: string;
  childItems?: {
    nodes: MenuItem[];
  };
}

export default async function Header() {
  let menuItems: MenuItem[] = [];
  try {
    menuItems = await getMenuItems();
  } catch (error) {
    console.error('Erro ao carregar menu:', error);
  }

  return (
    <header className="w-full flex flex-col font-inter">
      <div className="bg-header-bg w-full">
        <div className="container mx-auto px-4 md:px-[5%] h-[100px] flex justify-between items-center gap-8">
          <div className="flex-shrink-0">
            <Link href="/" className="block">
              <Image
                src={mainMenuLogo}
                alt="DynaHub Logo"
                height={50}
                className="h-[50px] w-auto object-contain"
                priority
              />
            </Link>
          </div>

          <div className="flex gap-5 items-center">
            <form className="hidden md:flex flex-1 w-[250px] md:w-[425px] items-center bg-transparent border border-search-border rounded-[30px] px-5 py-2 focus-within:border-white transition-colors group">
                <input
                type="text"
                placeholder="Search here . . ."
                className="bg-transparent border-none text-search-text w-full outline-none placeholder:text-search-text text-xs md:text-sm font-medium"
                />
                <button type="submit" className="ml-2 hover:opacity-70 transition-opacity">
                <Image src={searchIcon} alt="Search" width={18} height={18} className="brightness-0 invert opacity-60 group-focus-within:opacity-100" />
                </button>
            </form>

            <div className="hidden md:flex gap-4 items-center">
                {[
                { icon: facebookIcon, alt: 'Facebook', href: '#' },
                { icon: instagramIcon, alt: 'Instagram', href: '#' },
                { icon: linkedinIcon, alt: 'LinkedIn', href: '#' },
                { icon: twitterIcon, alt: 'Twitter', href: '#' },
                ].map((social, idx) => (
                <Link 
                    key={idx} 
                    href={social.href} 
                    target="_blank" 
                    className="hover:scale-110 transition-transform opacity-80 hover:opacity-100"
                >
                    <Image src={social.icon} alt={social.alt} width={20} height={20} className="w-[20px] h-[20px]" />
                </Link>
                ))}
            </div>

            <MobileMenu menuItems={menuItems} />
          </div>
        </div>
      </div>

      <nav className="hidden md:block bg-nav-bg w-full h-[60px] shadow-[0_4px_6px_rgba(0,0,0,0.1)] relative z-50">
        <div className="container mx-auto px-4 md:px-[5%] h-full flex items-center">
          <ul className="flex gap-8 lg:gap-12 list-none font-manrope font-bold text-white text-sm uppercase tracking-wider h-full items-center">
            {menuItems.map((item) => (
              <li key={item.id} className="relative group h-full flex items-center">
                <Link
                  href={item.url}
                  className="hover:text-accent transition-colors flex items-center gap-1.5 h-full border-b-2 border-transparent hover:border-accent group-hover:text-accent"
                >
                  {item.label}
                  {item.childItems && item.childItems.nodes.length > 0 && (
                    <span className="text-[9px] translate-y-[1px] group-hover:rotate-180 transition-transform duration-200">▼</span>
                  )}
                </Link>

                {item.childItems && item.childItems.nodes.length > 0 && (
                  <div className="absolute left-0 top-[60px] w-56 bg-nav-bg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 shadow-2xl z-[60]">
                    <ul className="py-2 border-t-2 border-accent">
                      {item.childItems.nodes.map((subItem) => (
                        <li key={subItem.id}>
                          <Link
                            href={subItem.url}
                            className="block px-6 py-3 text-white hover:bg-header-bg hover:text-accent transition-colors font-semibold text-xs border-b border-white/5 last:border-0"
                          >
                            {subItem.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </header>
  );
}