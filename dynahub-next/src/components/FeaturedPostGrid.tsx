import React from 'react';

const UserIcon = ({ className, color = "#6D757F" }: { className?: string; color?: string }) => (
  <svg className={className} width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g clipPath="url(#clip0_4_1084)">
      <path d="M13.9185 2.34667C13.1718 1.6 12.3096 1.02222 11.3318 0.613333C10.354 0.204444 9.3318 0 8.26514 0C7.19847 0 6.17625 0.204444 5.19847 0.613333C4.22069 1.02222 3.35847 1.6 2.6118 2.34667C1.86514 3.09333 1.28736 3.95555 0.87847 4.93333C0.469581 5.91111 0.265137 6.93333 0.265137 8C0.265137 9.06667 0.469581 10.0889 0.87847 11.0667C1.28736 12.0444 1.86514 12.9067 2.6118 13.6533C3.35847 14.4 4.22069 14.9778 5.19847 15.3867C6.17625 15.7956 7.19847 16 8.26514 16C9.3318 16 10.354 15.7956 11.3318 15.3867C12.3096 14.9778 13.1718 14.4 13.9185 13.6533C14.6651 12.9067 15.2429 12.0444 15.6518 11.0667C16.0607 10.0889 16.2651 9.06667 16.2651 8C16.2651 6.93333 16.0607 5.91111 15.6518 4.93333C15.2429 3.95555 14.6651 3.09333 13.9185 2.34667ZM3.7318 13.44C3.83847 12.6933 4.10514 12.0089 4.5318 11.3867C4.95847 10.7644 5.50069 10.2756 6.15847 9.92C6.81625 9.56444 7.51847 9.38667 8.26514 9.38667C8.86958 9.38667 9.44736 9.50222 9.99847 9.73333C10.5496 9.96444 11.0385 10.2933 11.4651 10.72C12.2118 11.4667 12.6562 12.3733 12.7985 13.44C12.1585 13.9378 11.4562 14.3289 10.6918 14.6133C9.92736 14.8978 9.11847 15.04 8.26514 15.04C7.4118 15.04 6.60291 14.8978 5.83847 14.6133C5.07403 14.3289 4.3718 13.9378 3.7318 13.44ZM8.26514 8.42667C7.58958 8.42667 7.0118 8.18667 6.5318 7.70667C6.0518 7.22667 5.8118 6.65778 5.8118 6C5.8118 5.34222 6.0518 4.77333 6.5318 4.29333C7.0118 3.81333 7.58958 3.57333 8.26514 3.57333C8.94069 3.57333 9.51847 3.81333 9.99847 4.29333C10.4785 4.77333 10.7185 5.34222 10.7185 6C10.7185 6.65778 10.4785 7.22667 9.99847 7.70667C9.51847 8.18667 8.94069 8.42667 8.26514 8.42667ZM13.5985 12.64C13.3496 11.6444 12.8696 10.7911 12.1585 10.08C11.5896 9.47556 10.914 9.04889 10.1318 8.8C10.594 8.48 10.9585 8.07111 11.2251 7.57333C11.4918 7.07556 11.6251 6.53333 11.6251 5.94667C11.6251 5.36 11.474 4.80889 11.1718 4.29333C10.8696 3.77778 10.4607 3.36889 9.94514 3.06667C9.42958 2.76444 8.86958 2.61333 8.26514 2.61333C7.66069 2.61333 7.10069 2.76444 6.58514 3.06667C6.06958 3.36889 5.66069 3.77778 5.35847 4.29333C5.05625 4.80889 4.90514 5.36 4.90514 5.94667C4.90514 6.53333 5.03847 7.07556 5.30514 7.57333C5.5718 8.07111 5.93625 8.48 6.39847 8.8C5.68736 9.04889 5.06514 9.42222 4.5318 9.92C3.71403 10.6667 3.18069 11.5733 2.9318 12.64C2.39847 12 1.98069 11.28 1.67847 10.48C1.37625 9.68 1.22514 8.85333 1.22514 8C1.22514 6.72 1.53625 5.53778 2.15847 4.45333C2.78069 3.36889 3.63403 2.51556 4.71847 1.89333C5.80291 1.27111 6.98514 0.96 8.26514 0.96C9.54514 0.96 10.7274 1.27111 11.8118 1.89333C12.8962 2.51556 13.7496 3.36889 14.3718 4.45333C14.994 5.53778 15.3051 6.72 15.3051 8C15.3051 8.85333 15.154 9.68 14.8518 10.48C14.5496 11.28 14.1318 12 13.5985 12.64Z" fill={color}/>
    </g>
    <defs>
      <clipPath id="clip0_4_1084">
        <rect width="16.53" height="16" fill="white" transform="matrix(1 0 0 -1 0 16)"/>
      </clipPath>
    </defs>
  </svg>
);

const CalendarIcon = ({ className, color = "#6D757F" }: { className?: string; color?: string }) => (
  <svg className={className} width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g clipPath="url(#clip0_4_1107)">
      <path d="M14.1936 1.22667H12.7527V0.48C12.7527 0.337777 12.7082 0.222221 12.6193 0.133333C12.5303 0.0444441 12.4147 0 12.2724 0C12.1301 0 12.0145 0.0444441 11.9255 0.133333C11.8366 0.222221 11.7921 0.337777 11.7921 0.48V1.22667H4.74785V0.48C4.74785 0.337777 4.70338 0.222221 4.61443 0.133333C4.52549 0.0444441 4.40986 0 4.26756 0C4.12525 0 4.00962 0.0444441 3.92068 0.133333C3.83174 0.222221 3.78727 0.337777 3.78727 0.48V1.22667H2.3464C1.77716 1.22667 1.28798 1.43111 0.878841 1.84C0.469705 2.24889 0.265137 2.73778 0.265137 3.30667V13.92C0.265137 14.4889 0.469705 14.9778 0.878841 15.3867C1.28798 15.7956 1.77716 16 2.3464 16H14.1936C14.7628 16 15.252 15.7956 15.6611 15.3867C16.0702 14.9778 16.2748 14.4889 16.2748 13.92V3.30667C16.2748 2.73778 16.0702 2.24889 15.6611 1.84C15.252 1.43111 14.7628 1.22667 14.1936 1.22667ZM2.3464 2.24H3.78727V2.77333C3.78727 2.88 3.83174 2.98667 3.92068 3.09333C4.00962 3.2 4.12525 3.25333 4.26756 3.25333C4.40986 3.25333 4.52549 3.2 4.61443 3.09333C4.70338 2.98667 4.74785 2.88 4.74785 2.77333V2.24H11.7921V2.77333C11.7921 2.88 11.8366 2.98667 11.9255 3.09333C12.0145 3.2 12.1301 3.25333 12.2724 3.25333C12.4147 3.25333 12.5303 3.2 12.6193 3.09333C12.7082 2.98667 12.7527 2.88 12.7527 2.77333V2.24H14.1936C14.5138 2.24 14.7717 2.34667 14.9674 2.56C15.163 2.77333 15.2609 3.02222 15.2609 3.30667V4.48H1.27908V3.30667C1.27908 3.02222 1.37692 2.77333 1.57259 2.56C1.76827 2.34667 2.0262 2.24 2.3464 2.24ZM14.1936 14.9867H2.3464C2.0262 14.9867 1.76827 14.8889 1.57259 14.6933C1.37625 14.4978 1.27908 14.24 1.27908 13.92V5.49333H15.2609V13.92C15.2609 14.24 15.163 14.4978 14.9674 14.6933C14.7629 14.8889 14.5138 14.9867 14.1936 14.9867Z" fill={color}/>
    </g>
    <defs>
      <clipPath id="clip0_4_1107">
        <rect width="16.54" height="16" fill="white" transform="matrix(1 0 0 -1 0 16)"/>
      </clipPath>
    </defs>
  </svg>
);

const ClockIcon = ({ className, color = "#6D757F" }: { className?: string; color?: string }) => (
  <svg className={className} width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g clipPath="url(#clip0_4_1159)">
      <path d="M8.21146 8.64002L11.1981 10.88C11.3048 10.9867 11.4292 11.0311 11.5715 11.0134C11.7137 10.9956 11.8204 10.9245 11.8915 10.8C11.9626 10.6756 11.9892 10.5511 11.9715 10.4267C11.9537 10.3022 11.8915 10.1867 11.7848 10.08L9.01147 8.00002V3.73335C9.01147 3.59113 8.96702 3.47557 8.87813 3.38669C8.78924 3.2978 8.67369 3.25335 8.53146 3.25335C8.38924 3.25335 8.2648 3.2978 8.15813 3.38669C8.05147 3.47557 7.99813 3.59113 7.99813 3.73335V8.26669C7.99813 8.44446 8.06924 8.56891 8.21146 8.64002ZM8.7448 0.48002C7.57147 0.48002 6.45147 0.755575 5.3848 1.30669C4.31813 1.8578 3.42924 2.60446 2.71813 3.54669C2.00702 4.48891 1.56258 5.56446 1.3848 6.77335L1.17146 6.45335C1.10035 6.34669 0.993687 6.28446 0.851465 6.26669C0.709243 6.24891 0.584798 6.27557 0.478132 6.34669C0.371465 6.4178 0.300354 6.52446 0.264798 6.66669C0.229243 6.80891 0.264798 6.93335 0.371465 7.04002L1.33146 8.53335C1.43813 8.67557 1.56258 8.74669 1.7048 8.74669H1.75813C1.90035 8.74669 2.0248 8.69335 2.13146 8.58669L3.35813 7.36002C3.4648 7.25335 3.51813 7.12891 3.51813 6.98669C3.51813 6.84446 3.4648 6.72891 3.35813 6.64002C3.25146 6.55113 3.13591 6.50669 3.01146 6.50669C2.88702 6.50669 2.77146 6.56002 2.6648 6.66669L2.3448 6.93335C2.52258 5.79558 2.9848 4.78224 3.73146 3.89335C4.47813 3.00446 5.3848 2.34669 6.45147 1.92002C7.51813 1.49335 8.63813 1.3778 9.81147 1.57335C10.9848 1.76891 12.0159 2.23113 12.9048 2.96002C13.7937 3.68891 14.4426 4.59557 14.8515 5.68002C15.2604 6.76446 15.3759 7.89335 15.1981 9.06669C15.0204 10.0978 14.6292 11.0222 14.0248 11.84C13.4204 12.6578 12.6559 13.3067 11.7315 13.7867C10.807 14.2667 9.82924 14.5067 8.79813 14.5067C7.76702 14.5067 6.79813 14.2845 5.89147 13.84C4.9848 13.3956 4.24702 12.7645 3.67813 11.9467C3.60702 11.84 3.50035 11.7778 3.35813 11.76C3.21591 11.7422 3.09146 11.7689 2.9848 11.84C2.87813 11.9111 2.80702 12.0178 2.77146 12.16C2.73591 12.3022 2.77146 12.4267 2.87813 12.5334C3.55369 13.4934 4.41591 14.2311 5.4648 14.7467C6.51369 15.2622 7.60702 15.52 8.7448 15.52C10.1315 15.52 11.3937 15.1822 12.5315 14.5067C13.6692 13.8311 14.5759 12.9156 15.2515 11.76C15.927 10.6045 16.2648 9.35113 16.2648 8.00002C16.2648 6.64891 15.927 5.39557 15.2515 4.24002C14.5759 3.08446 13.6692 2.16891 12.5315 1.49335C11.3937 0.817797 10.1315 0.48002 8.7448 0.48002Z" fill={color}/>
    </g>
    <defs>
      <clipPath id="clip0_4_1159">
        <rect width="16.53" height="16" fill="white" transform="matrix(1 0 0 -1 0 16)"/>
      </clipPath>
    </defs>
  </svg>
);

const SectionHeader = ({ title }: { title: string }) => (
  <div className="relative mb-8 flex items-center h-10">
    <div className="relative h-full flex items-center pl-7 pr-12 z-10 shrink-0">
      <svg className="absolute inset-0 w-full h-full" preserveAspectRatio="none" viewBox="0 0 230 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M9.4701 2.85061C9.94394 1.15867 11.3977 0 13.0466 0H225.555C228.056 0 229.85 2.58294 229.131 5.14939L220.17 37.1494C219.696 38.8413 218.242 40 216.593 40H4.08506C1.58381 40 -0.210173 37.4171 0.508557 34.8506L9.4701 2.85061Z" className="fill-accent"/>
      </svg>
      <h2 className="relative text-white font-extrabold text-[20px] capitalize font-manrope whitespace-nowrap pt-1">
        {title}
      </h2>
    </div>
    <div className="flex-grow border-y border-category-border h-[5px] -ml-4"></div>
  </div>
);

const CategoryLabel = ({ label, ghost = false }: { label: string; ghost?: boolean }) => (
  <div className={`inline-block px-3 py-1 rounded-sm text-[13px] font-semibold uppercase tracking-[0.78px] mb-3 transition-colors ${
    ghost 
      ? 'bg-white/30 text-white' 
      : 'border border-meta-border text-meta-text hover:bg-accent hover:text-white hover:border-accent cursor-pointer'
  }`}>
    {label}
  </div>
);

const FeaturedPostGrid: React.FC = () => {
  return (
    <div className="max-w-[1320px] mx-auto px-4 py-16 bg-white font-inter">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">

        <div className="lg:col-span-8">

          <section className="mb-20">
            <SectionHeader title="Today’s Spotlight" />
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8">

              <div className="md:col-span-7">
                <div className="relative group overflow-hidden rounded-md mb-6">
                  <img 
                    src="https://api.builder.io/api/v1/image/assets/TEMP/bb309c73698d5b86318b6aa126562003d892f6fa?width=996" 
                    alt="Spotlight Main" 
                    className="w-full h-[300px] object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <CategoryLabel label="Racing" />
                <h3 className="text-[28px] font-bold text-nav-bg leading-[35.84px] font-manrope capitalize mb-4 hover:text-accent cursor-pointer transition-colors">
                  How To Build A Magazine Layout With CSS Grid Areas
                </h3>
                <div className="flex flex-wrap items-center gap-6 mt-4">
                  <div className="flex items-center gap-2">
                    <UserIcon />
                    <span className="text-[13px] font-semibold text-meta-text uppercase tracking-wider">by admin</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CalendarIcon />
                    <span className="text-[13px] font-semibold text-meta-text uppercase tracking-wider">27 August, 2024</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <ClockIcon />
                    <span className="text-[13px] font-semibold text-meta-text uppercase tracking-wider">20 Mins</span>
                  </div>
                </div>
              </div>

              <div className="md:col-span-5 space-y-6">
                {[
                  {
                    image: "https://api.builder.io/api/v1/image/assets/TEMP/868ba9e6c9afc156886554490afee6503b442083?width=280",
                    category: "Action",
                    title: "Fortnite Ratings are Skyrocketing",
                    date: "27 August, 2024"
                  },
                  {
                    image: "https://api.builder.io/api/v1/image/assets/TEMP/ecab008726cbe50774bb263dbd339ec2abf4f454?width=280",
                    category: "Fighter",
                    title: "Everything You Need To Know About",
                    date: "27 August, 2024"
                  },
                  {
                    image: "https://api.builder.io/api/v1/image/assets/TEMP/b96110012a28ba12ef08288cdbad1f140c3aa428?width=280",
                    category: "Gaming",
                    title: "We Can’t Wait to Try This Gaming Area",
                    date: "27 August, 2024"
                  }
                ].map((post, idx) => (
                  <div key={idx} className="flex gap-4 items-start border-b border-category-border pb-6 last:border-0">
                    <div className="flex-1">
                      <CategoryLabel label={post.category} />
                      <h4 className="text-[20px] font-bold text-nav-bg leading-[26px] font-manrope capitalize hover:text-accent cursor-pointer transition-colors line-clamp-2">
                        {post.title}
                      </h4>
                      <div className="flex items-center gap-2 mt-4">
                        <CalendarIcon />
                        <span className="text-[13px] font-semibold text-meta-text uppercase tracking-wider">{post.date}</span>
                      </div>
                    </div>
                    <div className="shrink-0 rounded-md overflow-hidden group w-[140px] h-[140px]">
                      <img src={post.image} alt="" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section>
            <SectionHeader title="Our Popular News" />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              {[
                {
                  image: "https://api.builder.io/api/v1/image/assets/TEMP/15fac15dc9db003306b5ab1ca93a357733f84c47?width=880",
                  category: "Racing",
                  title: "Racing Games Browned Butte roadert Cookies Daily Breakfast",
                  date: "27 August, 2024",
                  time: "20 Mins"
                },
                {
                  image: "https://api.builder.io/api/v1/image/assets/TEMP/fae681382bbd3636ca3fd9db31157c5569955af6?width=880",
                  category: "Action",
                  title: "How To Host A WordPress Site On Amazon Lightsail",
                  date: "27 August, 2024",
                  time: "20 Mins"
                }
              ].map((post, idx) => (
                <div key={idx} className="relative h-[300px] rounded-md overflow-hidden group cursor-pointer shadow-lg">
                  <img src={post.image} alt="" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
                  <div className="absolute bottom-6 left-8 right-8 z-10">
                    <CategoryLabel label={post.category} ghost />
                    <h4 className="text-[20px] font-bold text-white leading-[26px] font-manrope capitalize mb-4 line-clamp-2">
                      {post.title}
                    </h4>
                    <div className="flex items-center gap-6">
                      <div className="flex items-center gap-2">
                        <CalendarIcon color="#BACCE1" />
                        <span className="text-[13px] font-semibold text-meta-blue uppercase tracking-wider">{post.date}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <ClockIcon color="#BACCE1" />
                        <span className="text-[13px] font-semibold text-meta-blue uppercase tracking-wider">{post.time}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  image: "https://api.builder.io/api/v1/image/assets/TEMP/909c637d92d0836fb002ace5dfc0c592fb8a87ed?width=580",
                  category: "Fighter",
                  title: "The Magic Of February 2024 Wallpapers",
                  date: "27 August, 2024"
                },
                {
                  image: "https://api.builder.io/api/v1/image/assets/TEMP/0c6746d09b4d9c6e3ca757b31f230a8a1a713e6f?width=580",
                  category: "Animation",
                  title: "Customization And Animation",
                  date: "27 August, 2024"
                },
                {
                  image: "https://api.builder.io/api/v1/image/assets/TEMP/1ee20fea334a67fe82130377288f8dc6170a6b14?width=580",
                  category: "Story",
                  title: "Better ROI For Your Digital Products",
                  date: "27 August, 2024"
                }
              ].map((post, idx) => (
                <div key={idx} className="relative h-[300px] rounded-md overflow-hidden group cursor-pointer shadow-md">
                  <img src={post.image} alt="" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
                  <div className="absolute bottom-6 left-8 right-8 z-10">
                    <CategoryLabel label={post.category} ghost />
                    <h4 className="text-[20px] font-bold text-white leading-[26px] font-manrope capitalize mb-4 line-clamp-2">
                      {post.title}
                    </h4>
                    <div className="flex items-center gap-2">
                      <CalendarIcon color="#BACCE1" />
                      <span className="text-[13px] font-semibold text-meta-blue uppercase tracking-wider">{post.date}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>

        <aside className="lg:col-span-4">

          <section className="mb-12">
            <SectionHeader title="Follow Us" />
            <div className="grid grid-cols-2 gap-4">
              {[
                { name: 'facebook', icon: '' },
                { name: 'twitter', icon: '' },
                { name: 'instagram', icon: '' },
                { name: 'youtube', icon: '' },
                { name: 'LinkedIn', icon: '' },
                { name: 'Pinterest', icon: '' }
              ].map((soc, idx) => (
                <a key={idx} href="#" className="flex items-center justify-center gap-3 h-[45px] bg-social-bg rounded-sm hover:bg-nav-bg hover:text-white transition-all group">
                  <span className="font-serif text-lg text-nav-bg group-hover:text-white">{soc.icon}</span>
                  <span className="text-sm font-semibold text-nav-bg group-hover:text-white capitalize">{soc.name}</span>
                </a>
              ))}
            </div>
          </section>

          <section className="mb-12">
            <div className="bg-nav-bg rounded-md p-10 text-center relative overflow-hidden shadow-xl">
              <div className="absolute top-8 left-1/2 -translate-x-1/2 opacity-10">
                <svg width="75" height="75" viewBox="0 0 75 75" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M68.75 9.25H6.25C4.58333 9.41667 3.125 10.0833 1.875 11.25C0.625 12.4167 0 13.9167 0 15.75V59.5C0 61.1667 0.625 62.5833 1.875 63.75C3.125 64.9167 4.58333 65.5 6.25 65.5H68.75C70.4167 65.5 71.875 64.9167 73.125 63.75C74.375 62.5833 75 61.0833 75 59.25V15.75C75 13.9167 74.375 12.4167 73.125 11.25C71.875 10.0833 70.4167 9.5 68.75 9.5V9.25ZM6.25 12.5H68.75L69.5 12.75L39.75 39.75C39.0833 40.25 38.3333 40.5 37.5 40.5C36.6667 40.5 35.9167 40.25 35.25 39.75L5.5 12.75L6.25 12.5ZM3 59.25V15.75L3.25 14.75L28 37.5C22.1667 42.5 13.9167 50.0833 3.25 60.25L3 59.25ZM68.75 62.5H6.25L5.5 62.25C16.3333 52.0833 24.6667 44.5 30.5 39.5L33.25 42C34.4167 43.1667 35.8333 43.75 37.5 43.75C39.1667 43.75 40.5833 43.1667 41.75 42L44.5 39.5C50.3333 44.5 58.6667 52.0833 69.5 62.25L68.75 62.5ZM72 59.25C72 59.4167 71.9167 59.6667 71.75 60V60.25C61.0833 50.0833 52.8333 42.5 47 37.5L71.75 14.75L72 15.5V59.25Z" className="fill-newsletter-icon"/>
                </svg>
              </div>
              <h3 className="text-[24px] font-extrabold text-white font-manrope mb-4 relative z-10">Daily Newsletter</h3>
              <p className="text-white font-medium mb-8 relative z-10 text-[16px] leading-[28px]">
                Get all the top stories from Blogs to keep track.
              </p>
              <div className="relative flex items-center h-[50px] bg-accent rounded-sm pr-4 shadow-inner">
                <input 
                  type="email" 
                  placeholder="Enter your e-mail" 
                  className="w-full h-full bg-transparent pl-5 text-white placeholder-white/80 focus:outline-none text-sm font-medium"
                />
                <button className="text-white hover:scale-110 transition-transform">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1.72308 16L0 14.2769L11.8154 2.46154H1.23077V0H16V14.7692H13.5385V4.18462L1.72308 16Z" fill="white"/>
                  </svg>
                </button>
              </div>
            </div>
          </section>

          <section>
            <SectionHeader title="Recent Posts" />
            <div className="space-y-6">
              {[
                {
                  image: "https://api.builder.io/api/v1/image/assets/TEMP/530a37d3440cc76d81ae48a0958b42d22ba14838?width=220",
                  category: "Racing",
                  title: "The Butter Chocolate Cookies Daily",
                  date: "27 August, 2024"
                },
                {
                  image: "https://api.builder.io/api/v1/image/assets/TEMP/98e0aa872438266f52aa763c4541042a058dcc9f?width=220",
                  category: "Story",
                  title: "Copying Designs Doesn’t Work",
                  date: "27 August, 2024"
                },
                {
                  image: "https://api.builder.io/api/v1/image/assets/TEMP/f51ae9649fcbf7c40052e7bebb8726ab5d6852c2?width=220",
                  category: "Animation",
                  title: "ollaboration Problems Go Away By Sharing",
                  date: "27 August, 2024"
                },
                {
                  image: "https://api.builder.io/api/v1/image/assets/TEMP/55f6060913d78e349fb6ceee370275a7be3a2195?width=220",
                  category: "Fighter",
                  title: "Level Up Your CSS Skills With The",
                  date: "27 August, 2024"
                },
                {
                  image: "https://api.builder.io/api/v1/image/assets/TEMP/ce0c82dfa0239b9ff0496d92a39e121e8fadd811?width=220",
                  category: "Racing",
                  title: "The Key To Good Component Design",
                  date: "27 August, 2024"
                }
              ].map((post, idx) => (
                <div key={idx} className="flex gap-4 group cursor-pointer pb-6 border-b border-[#DFDFDF] last:border-0 last:pb-0">
                  <div className="shrink-0 w-[110px] h-[110px] rounded-md overflow-hidden bg-gray-100">
                    <img src={post.image} alt="" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                  </div>
                  <div className="flex-1">
                    <CategoryLabel label={post.category} />
                    <h4 className="text-[18px] font-bold text-[#183354] leading-[25.2px] font-manrope capitalize hover:text-[#F4796C] transition-colors mb-2 line-clamp-2">
                      {post.title}
                    </h4>
                    <div className="flex items-center gap-2">
                      <CalendarIcon />
                      <span className="text-[13px] font-semibold text-[#6D757F] uppercase tracking-wider">{post.date}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

        </aside>
      </div>
    </div>
  );
};

export default FeaturedPostGrid;