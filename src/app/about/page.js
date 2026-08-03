export const metadata = {
  title: 'About Us — The Studio Behind the Growth',
  description: 'Meet Kreonex Media — a boutique digital media studio from Siliguri, West Bengal, built by developers, designers & strategists who engineer premium brand experiences across North Bengal & Sikkim.',
  alternates: { canonical: 'https://kreonex.com/about' },
  openGraph: {
    title: 'About Kreonex Media',
    description: 'A boutique digital studio from Siliguri engineering premium brand experiences across North Bengal & Sikkim.',
    url: 'https://kreonex.com/about',
  },
};

export default function Page() {
  return (
    <>
      <main className="bg-surface text-on-surface min-h-screen selection:bg-primary selection:text-white pb-32">
        {/* Massive Hero Section */}
        <header className="relative pt-8 pb-16 md:pt-12 md:pb-20 overflow-hidden">
          <div className="max-w-container-max mx-auto px-8">
            <div className="max-w-4xl">
              <span className="inline-block px-4 py-2 mb-6 border border-black/10 text-primary font-label-caps text-xs tracking-[0.3em] uppercase rounded-full bg-primary/5 backdrop-blur-sm">
                Welcome to The Studio
              </span>
              <h1 className="font-display-xl text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter leading-[1.1] mb-6 text-on-surface">
                WE ENGINEER<br />
                <span className="text-primary italic font-serif">DESIRE.</span>
              </h1>
              <p className="font-body-lg text-lg md:text-xl text-on-surface-variant leading-relaxed max-w-2xl border-l-2 border-primary pl-6">
                We are a boutique studio of developers, designers, and strategists. We don't just build websites and run ads; we architect premium digital experiences that command attention and drive relentless growth.
              </p>
            </div>
          </div>
          {/* Noise / Grid Overlay */}
          <div className="absolute inset-0 -z-10 opacity-[0.03]" style={{"backgroundImage":"radial-gradient(#000000 1px, transparent 1px)","backgroundSize":"40px 40px"}}></div>
        </header>

        {/* Narrative Section & Pillars */}
        <section className="py-24 relative z-10 bg-surface-container-lowest">
          <div className="max-w-container-max mx-auto px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
              
              {/* Left: Sticky Narrative Text */}
              <div className="lg:col-span-5 lg:sticky lg:top-32">
                <h2 className="font-headline-lg text-5xl md:text-6xl font-black mb-8 text-on-surface tracking-tight">The Kreonex<br/>Standard</h2>
                <p className="font-body-md text-xl text-on-surface-variant mb-8 leading-relaxed">
                  In a digital landscape cluttered with templates and average content, the only way to win is through exceptional quality. We blend high-performance engineering with cinematic creative direction to build brands that dominate their space.
                </p>
                <div className="h-1 w-24 bg-primary"></div>
              </div>

              {/* Right: Bento Pillars (Light Mode) */}
              <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Pillar 1 */}
                <div className="md:col-span-2 p-10 bg-white border border-black/5 rounded-2xl group hover:shadow-xl hover:border-primary/20 transition-all duration-500">
                  <div className="mb-8 text-primary">
                    <span className="material-symbols-outlined !text-5xl" style={{"fontVariationSettings":"'FILL' 1"}}>architecture</span>
                  </div>
                  <h3 className="font-headline-sm text-3xl font-black text-on-surface mb-4">Precision Engineering</h3>
                  <p className="text-on-surface-variant text-lg leading-relaxed">
                    Fast is a feature. We build on modern stacks like Next.js to ensure lightning-fast load times, flawless SEO, and conversion-optimized user journeys. We code for scale.
                  </p>
                </div>

                {/* Pillar 2 */}
                <div className="p-10 bg-white border border-black/5 rounded-2xl group hover:shadow-xl hover:border-primary/20 transition-all duration-500">
                  <div className="mb-8 text-primary">
                    <span className="material-symbols-outlined !text-5xl" style={{"fontVariationSettings":"'FILL' 1"}}>movie</span>
                  </div>
                  <h3 className="font-headline-sm text-2xl font-black text-on-surface mb-4">Cinematic Creative</h3>
                  <p className="text-on-surface-variant text-lg leading-relaxed">
                    From professional photography to scroll-stopping reels, our visual assets are engineered to build trust instantly and make your brand look untouchable.
                  </p>
                </div>

                {/* Pillar 3 */}
                <div className="p-10 bg-white border border-black/5 rounded-2xl group hover:shadow-xl hover:border-primary/20 transition-all duration-500">
                  <div className="mb-8 text-primary">
                    <span className="material-symbols-outlined !text-5xl" style={{"fontVariationSettings":"'FILL' 1"}}>trending_up</span>
                  </div>
                  <h3 className="font-headline-sm text-2xl font-black text-on-surface mb-4">Relentless Growth</h3>
                  <p className="text-on-surface-variant text-lg leading-relaxed">
                    We don't do vanity metrics. We construct aggressive paid funnels and local SEO strategies designed solely to drive high-quality leads and maximize ROAS.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Team Showcase */}
        <section className="py-32 relative bg-surface">
          <div className="max-w-container-max mx-auto px-8">
            <div className="mb-20 text-center">
              <span className="font-label-caps text-xs tracking-[0.3em] text-primary mb-4 block uppercase font-bold">THE CREATIVE DIRECTORS</span>
              <h2 className="font-display-lg text-6xl md:text-8xl font-black tracking-tighter text-on-surface">Brains Behind<br/>The Operation.</h2>
            </div>
            
            {/* Same Level Images */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Amit */}
              <div className="group transition-all duration-500 hover:-translate-y-2">
                <div className="relative aspect-[3/4] mb-8 overflow-hidden rounded-2xl border border-black/5 shadow-md group-hover:shadow-2xl transition-all duration-500">
                  <img src="https://pub-6c6783ed8ce64932a9644e8cfd52a4bf.r2.dev/images/team/amit.jpeg" alt="Amit - Founder" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="absolute bottom-0 left-0 w-full p-8 transition-transform duration-500 group-hover:-translate-y-2">
                    <h4 className="font-headline-sm text-4xl font-black text-white mb-1">Amit</h4>
                    <p className="font-label-caps text-sm tracking-widest text-primary font-bold uppercase">Founder</p>
                  </div>
                </div>
                <p className="text-on-surface-variant text-lg leading-relaxed border-l-2 border-primary/30 pl-4 transition-colors duration-500 group-hover:border-primary">
                  The visionary behind Kreonex. Amit oversees operations and technology, ensuring every project is backed by flawless execution and scalable architecture.
                </p>
              </div>

              {/* Rahul */}
              <div className="group transition-all duration-500 hover:-translate-y-2">
                <div className="relative aspect-[3/4] mb-8 overflow-hidden rounded-2xl border border-black/5 shadow-md group-hover:shadow-2xl transition-all duration-500">
                  <img src="https://pub-6c6783ed8ce64932a9644e8cfd52a4bf.r2.dev/images/team/rahul.jpeg" alt="Rahul - Photographer" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="absolute bottom-0 left-0 w-full p-8 transition-transform duration-500 group-hover:-translate-y-2">
                    <h4 className="font-headline-sm text-4xl font-black text-white mb-1">Rahul</h4>
                    <p className="font-label-caps text-sm tracking-widest text-primary font-bold uppercase">Photographer</p>
                  </div>
                </div>
                <p className="text-on-surface-variant text-lg leading-relaxed border-l-2 border-primary/30 pl-4 transition-colors duration-500 group-hover:border-primary">
                  The visual mastermind. Rahul captures the essence of brands through striking, high-end photography that communicates trust and authority instantly.
                </p>
              </div>

              {/* Manan */}
              <div className="group transition-all duration-500 hover:-translate-y-2">
                <div className="relative aspect-[3/4] mb-8 overflow-hidden rounded-2xl border border-black/5 shadow-md group-hover:shadow-2xl transition-all duration-500">
                  <img src="https://pub-6c6783ed8ce64932a9644e8cfd52a4bf.r2.dev/images/team/manan.jpeg" alt="Manan - Videographer & Cinematographer" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="absolute bottom-0 left-0 w-full p-8 transition-transform duration-500 group-hover:-translate-y-2">
                    <h4 className="font-headline-sm text-4xl font-black text-white mb-1">Manan</h4>
                    <p className="font-label-caps text-sm tracking-widest text-primary font-bold uppercase">Videographer & Cinematographer</p>
                  </div>
                </div>
                <p className="text-on-surface-variant text-lg leading-relaxed border-l-2 border-primary/30 pl-4 transition-colors duration-500 group-hover:border-primary">
                  The cinematic storyteller. Manan engineers moving visuals, directing and editing high-retention video content that hooks audiences and drives action.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
