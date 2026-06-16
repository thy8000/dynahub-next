import Image from 'next/image';
import Link from 'next/link';
import mainMenuLogo from '../assets/images/main-menu-logo.png';

const footerLinks = [
  {
    title: 'Company',
    links: [
      { label: 'About Us', href: '#' },
      { label: 'The Test Kitchen', href: '#' },
      { label: 'Podcast', href: '#' },
      { label: 'Events', href: '#' },
      { label: 'Jobs', href: '#' },
    ],
  },
  {
    title: 'Get Help',
    links: [
      { label: 'Contact & Faq', href: '#' },
      { label: 'Orders & Returns', href: '#' },
      { label: 'Gift Cards', href: '#' },
      { label: 'Register', href: '#' },
      { label: 'Catalog', href: '#' },
    ],
  },
  {
    title: 'Explore',
    links: [
      { label: 'The Shop', href: '#' },
      { label: 'Recipes', href: '#' },
      { label: 'Food', href: '#' },
      { label: 'Travel', href: '#' },
      { label: 'Hotline', href: '#' },
    ],
  },
  {
    title: 'Follow us On',
    links: [
      { label: 'facebook', href: '#' },
      { label: 'Twitter', href: '#' },
      { label: 'Instagram', href: '#' },
      { label: 'Youtube', href: '#' },
      { label: 'Pinterest', href: '#' },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="w-full bg-footer-bg font-inter">
      <div className="container mx-auto px-4 md:px-[5%] py-12 md:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8">
          <div className="sm:col-span-2 lg:col-span-1">
            <Link href="/" className="inline-block mb-6">
              <Image
                src={mainMenuLogo}
                alt="DynaHub Logo"
                height={50}
                className="h-[50px] w-auto object-contain brightness-0 invert"
              />
            </Link>
            <p className="text-meta-blue text-base font-normal leading-7 capitalize max-w-[265px]">
              Browned butter and brown sugar
              <br />
              caramelly goodness, crispy edges
              <br />
              thick and soft centers and melty
              <br />
              little puddles of chocolate.
            </p>
          </div>

          {footerLinks.map((section) => (
            <div key={section.title}>
              <div className="mb-4">
                <div className="w-8 h-[5px] bg-accent mb-[11px]" />
                <h4 className="font-manrope text-white text-xl font-extrabold capitalize leading-6">
                  {section.title}
                </h4>
              </div>
              <ul className="space-y-[10px]">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-meta-blue text-base font-medium leading-[26px] capitalize hover:text-white transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="border-t border-footer-border">
        <div className="container mx-auto px-4 md:px-[5%] flex flex-col md:flex-row justify-between items-center py-8 gap-4">
          <div className="flex items-center gap-6">
            <Link
              href="#"
              className="text-footer-muted text-base font-normal leading-7 hover:text-white transition-colors"
            >
              Privacy Policy & Terms
            </Link>
            <span className="w-1 h-1 rounded-full bg-footer-muted" />
            <Link
              href="#"
              className="text-footer-muted text-base font-normal leading-7 hover:text-white transition-colors"
            >
              Site Credits
            </Link>
          </div>
          <p className="text-footer-muted text-base font-normal leading-7 capitalize text-right">
            &copy; 2023 All Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  );
}
