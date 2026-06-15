import React from 'react';
import Image from 'next/image';
import Link from 'next/link';


const MOCK_POSTS = {
  featured: {
    id: 1,
    category: "Fighter",
    title: "Exciting New Browned Chocolate Gaming Cookies Daily Breakfast",
    author: "Admin",
    date: "27 August, 2024",
    imageUrl: "https://api.builder.io/api/v1/image/assets/TEMP/54b49efeb17c2f0700d779bb0aa0346eb2fd71cb?width=1260",
    videoUrl: "#",
  },
  trending: [
    {
      id: 2,
      category: "Animation",
      title: "A Guide To Getting Data Visualization Right",
      author: "Admin",
      date: "27 August, 2024",
      imageUrl: "https://api.builder.io/api/v1/image/assets/TEMP/09fd51dba36f7f5fd590e394c05c2053db584b96?width=380",
    },
    {
      id: 3,
      category: "Action",
      title: "Fluid Typography: Predicting A Problem With Your User’s Zoom-In",
      author: "Admin",
      date: "27 August, 2024",
      imageUrl: "https://api.builder.io/api/v1/image/assets/TEMP/57e4e0d40b4ee4a2cb0653d85af27d974f0c8013?width=380",
    },
    {
      id: 4,
      category: "Racing",
      title: "Deploying CSS Logical Properties On Web Apps",
      author: "Admin",
      date: "27 August, 2024",
      imageUrl: "https://api.builder.io/api/v1/image/assets/TEMP/61214c8086708ddc3ebca6a64575017808572d3a?width=380",
    },
  ],
};

const TrendingGridPosts: React.FC = () => {
  return (
    <section className="relative w-full py-16 lg:py-24 bg-trending-bg overflow-hidden"> 
      <div
        className="absolute inset-0 opacity-10 pointer-events-none" style={{
          backgroundImage: `url('https://api.builder.io/api/v1/image/assets/TEMP/150df08b9fafe5b51f0580395732409c77b659d5?width=3840')`,
          backgroundRepeat: 'repeat',
          backgroundSize: '100px 100px'
        }}
      />

      <div className="container mx-auto px-4 max-w-[1320px] relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between mb-12 border-b border-divider relative"> 
          <div className="relative mb-8 flex items-center h-10">
            <div className="relative h-full flex items-center pl-7 pr-12 z-10 shrink-0">
              <svg className="absolute inset-0 w-full h-full" preserveAspectRatio="none" viewBox="0 0 230 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9.4701 2.85061C9.94394 1.15867 11.3977 0 13.0466 0H225.555C228.056 0 229.85 2.58294 229.131 5.14939L220.17 37.1494C219.696 38.8413 218.242 40 216.593 40H4.08506C1.58381 40 -0.210173 37.4171 0.508557 34.8506L9.4701 2.85061Z" className="fill-accent" />
              </svg>
              <h2 className="relative text-white font-extrabold text-[20px] capitalize font-manrope whitespace-nowrap pt-1">
                Trending Game News
              </h2>
            </div>
          </div>

          <Link
            href="/all-posts"
            className="flex items-center gap-2 px-5 py-2 rounded bg-white/10 hover:bg-white/20 transition-colors text-white font-medium text-sm uppercase font-inter mb-[-1px]"
          >
            View All
            <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M1.07692 10L0 8.92308L7.38462 1.53846H0.769231V0H10V9.23077H8.46154V2.61538L1.07692 10Z" fill="#F4796C" />
            </svg>
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1px_1fr] gap-12 lg:gap-16 items-start"> 

          <div className="flex flex-col">
            <div className="relative w-full aspect-[630/380] rounded-md overflow-hidden group">
              <Image
                src={MOCK_POSTS.featured.imageUrl}
                alt={MOCK_POSTS.featured.title}
                fill
                unoptimized
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-colors" />

              <div className="absolute inset-0 flex items-center justify-center"> 
                <div className="w-[60px] h-[60px] rounded-full bg-white/50 flex items-center justify-center cursor-pointer hover:bg-white/70 transition-all transform group-hover:scale-110">
                  <span className="text-white text-lg ml-1">▶</span>
                </div>
              </div>
            </div>

            <div className="mt-6 space-y-4">
              <span className="inline-block px-3 py-1 rounded-sm bg-white/20 text-white text-[13px] font-semibold uppercase tracking-wider font-manrope">
                {MOCK_POSTS.featured.category}
              </span>
              <h2 className="text-2xl md:text-3xl font-bold text-white font-manrope leading-tight hover:text-accent transition-colors cursor-pointer">
                {MOCK_POSTS.featured.title}
              </h2>

              <div className="flex items-center gap-6 text-meta-blue font-semibold text-[13px] uppercase tracking-wider font-inter"> 
                <div className="flex items-center gap-2">
                  <UserIcon />
                  <span>BY {MOCK_POSTS.featured.author}</span>
                </div>
                <div className="flex items-center gap-2">
                  <CalendarIcon />
                  <span>{MOCK_POSTS.featured.date}</span>
                </div>
              </div>
            </div>
          </div>

          <div className="hidden lg:block w-[1px] h-full bg-divider" /> 

          <div className="flex flex-col gap-8 lg:gap-10">
            {MOCK_POSTS.trending.map((post) => (
              <div key={post.id} className="grid grid-cols-[190px_1fr] gap-6 group">
                <div className="relative h-[160px] rounded-md overflow-hidden">
                  <Image
                    src={post.imageUrl}
                    alt={post.title}
                    fill
                    unoptimized
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/30" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-[50px] h-[50px] rounded-full bg-white/50 flex items-center justify-center transform group-hover:scale-110 transition-transform">
                      <span className="text-white text-base ml-1">▶</span>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col justify-center space-y-3"> 
                  <span className="inline-block w-fit px-3 py-1 rounded-sm bg-white/20 text-white text-[13px] font-semibold uppercase tracking-wider font-manrope">
                    {post.category}
                  </span>
                  <h3 className="text-lg md:text-xl font-bold text-white font-manrope leading-snug hover:text-accent transition-colors cursor-pointer line-clamp-2">
                    {post.title}
                  </h3>

                  <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-meta-blue font-semibold text-[13px] uppercase tracking-wider font-inter"> 
                    <div className="flex items-center gap-2">
                      <UserIcon />
                      <span>BY {post.author}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CalendarIcon />
                      <span>{post.date}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};


const UserIcon = () => (
  <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M13.9185 2.34667C13.1718 1.6 12.3096 1.02222 11.3318 0.613333C10.354 0.204444 9.3318 0 8.26514 0C7.19847 0 6.17625 0.204444 5.19847 0.613333C4.22069 1.02222 3.35847 1.6 2.6118 2.34667C1.86514 3.09333 1.28736 3.95555 0.87847 4.93333C0.469581 5.91111 0.265137 6.93333 0.265137 8C0.265137 9.06667 0.469581 10.0889 0.87847 11.0667C1.28736 12.0444 1.86514 12.9067 2.6118 13.6533C3.35847 14.4 4.22069 14.9778 5.19847 15.3867C6.17625 15.7956 7.19847 16 8.26514 16C9.3318 16 10.354 15.7956 11.3318 15.3867C12.3096 14.9778 13.1718 14.4 13.9185 13.6533C14.6651 12.9067 15.2429 12.0444 15.6518 11.0667C16.0607 10.0889 16.2651 9.06667 16.2651 8C16.2651 6.93333 16.0607 5.91111 15.6518 4.93333C15.2429 3.95555 14.6651 3.09333 13.9185 2.34667ZM3.7318 13.44C3.83847 12.6933 4.10514 12.0089 4.5318 11.3867C4.95847 10.7644 5.50069 10.2756 6.15847 9.92C6.81625 9.56444 7.51847 9.38667 8.26514 9.38667C8.86958 9.38667 9.44736 9.50222 9.99847 9.73333C10.5496 9.96444 11.0385 10.2933 11.4651 10.72C12.2118 11.4667 12.6562 12.3733 12.7985 13.44C12.1585 13.9378 11.4562 14.3289 10.6918 14.6133C9.92736 14.8978 9.11847 15.04 8.26514 15.04C7.4118 15.04 6.60291 14.8978 5.83847 14.6133C5.07403 14.3289 4.3718 13.9378 3.7318 13.44ZM8.26514 8.42667C7.58958 8.42667 7.0118 8.18667 6.5318 7.70667C6.0518 7.22667 5.8118 6.65778 5.8118 6C5.8118 5.34222 6.0518 4.77333 6.5318 4.29333C7.0118 3.81333 7.58958 3.57333 8.26514 3.57333C8.94069 3.57333 9.51847 3.81333 9.99847 4.29333C10.4785 4.77333 10.7185 5.34222 10.7185 6C10.7185 6.65778 10.4785 7.22667 9.99847 7.70667C9.51847 8.18667 8.94069 8.42667 8.26514 8.42667ZM13.5985 12.64C13.3496 11.6444 12.8696 10.7911 12.1585 10.08C11.5896 9.47556 10.914 9.04889 10.1318 8.8C10.594 8.48 10.9585 8.07111 11.2251 7.57333C11.4918 7.07556 11.6251 6.53333 11.6251 5.94667C11.6251 5.36 11.474 4.80889 11.1718 4.29333C10.8696 3.77778 10.4607 3.36889 9.94514 3.06667C9.42958 2.76444 8.86958 2.61333 8.26514 2.61333C7.66069 2.61333 7.10069 2.76444 6.58514 3.06667C6.06958 3.36889 5.66069 3.77778 5.35847 4.29333C5.05625 4.80889 4.90514 5.36 4.90514 5.94667C4.90514 6.53333 5.03847 7.07556 5.30514 7.57333C5.5718 8.07111 5.93625 8.48 6.39847 8.8C5.68736 9.04889 5.06514 9.42222 4.5318 9.92C3.71403 10.6667 3.18069 11.5733 2.9318 12.64C2.39847 12 1.98069 11.28 1.67847 10.48C1.37625 9.68 1.22514 8.85333 1.22514 8C1.22514 6.72 1.53625 5.53778 2.15847 4.45333C2.78069 3.36889 3.63403 2.51556 4.71847 1.89333C5.80291 1.27111 6.98514 0.96 8.26514 0.96C9.54514 0.96 10.7274 1.27111 11.8118 1.89333C12.8962 2.51556 13.7496 3.36889 14.3718 4.45333C14.994 5.53778 15.3051 6.72 15.3051 8C15.3051 8.85333 15.154 9.68 14.8518 10.48C14.5496 11.28 14.1318 12 13.5985 12.64Z"
      fill="#BACCE1"
    />
  </svg>
);

const CalendarIcon = () => (
  <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M14.1851 1.22667H12.7451V0.48C12.7451 0.337777 12.7007 0.222221 12.6118 0.133333C12.5229 0.0444441 12.4074 0 12.2651 0C12.1229 0 12.0074 0.0444441 11.9185 0.133333C11.8296 0.222221 11.7851 0.337777 11.7851 0.48V1.22667H4.74514V0.48C4.74514 0.337777 4.70069 0.222221 4.6118 0.133333C4.52291 0.0444441 4.40736 0 4.26514 0C4.12291 0 4.00736 0.0444441 3.91847 0.133333C3.82958 0.222221 3.78514 0.337777 3.78514 0.48V1.22667H2.34514C1.77625 1.22667 1.28736 1.43111 0.87847 1.84C0.469581 2.24889 0.265137 2.73778 0.265137 3.30667V13.92C0.265137 14.4889 0.469581 14.9778 0.87847 15.3867C1.28736 15.7956 1.77625 16 2.34514 16H14.1851C14.754 16 15.2429 15.7956 15.6518 15.3867C16.0607 14.9778 16.2651 14.4889 16.2651 13.92V3.30667C16.2651 2.73778 16.0607 2.24889 15.6518 1.84C15.2429 1.43111 14.754 1.22667 14.1851 1.22667ZM2.34514 2.24H3.78514V2.77333C3.78514 2.88 3.82958 2.98667 3.91847 3.09333C4.00736 3.2 4.12291 3.25333 4.26514 3.25333C4.40736 3.25333 4.52291 3.2 4.6118 3.09333C4.70069 2.98667 4.74514 2.88 4.74514 2.77333V2.24H11.7851V2.77333C11.7851 2.88 11.8296 2.98667 11.9185 3.09333C12.0074 3.2 12.1229 3.25333 12.2651 3.25333C12.4074 3.25333 12.5229 3.2 12.6118 3.09333C12.7007 2.98667 12.7451 2.88 12.7451 2.77333V2.24H14.1851C14.5051 2.24 14.7629 2.34667 14.9585 2.56C15.154 2.77333 15.2518 3.02222 15.2518 3.30667V4.48H1.27847V3.30667C1.27847 3.02222 1.37625 2.77333 1.5718 2.56C1.76736 2.34667 2.02514 2.24 2.34514 2.24ZM14.1851 14.9867H2.34514C2.02514 14.9867 1.76736 14.8889 1.5718 14.6933C1.37625 14.4978 1.27847 14.24 1.27847 13.92V5.49333H15.2518V13.92C15.2518 14.24 15.154 14.4978 14.9585 14.6933C14.7629 14.8889 14.5051 14.9867 14.1851 14.9867Z"
      fill="#BACCE1"
    />
  </svg>
);

export default TrendingGridPosts;