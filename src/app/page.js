import Link from 'next/link';
import DynamicEngineRoom from '../components/DynamicEngineRoom';
import HeroSlideshow from '../components/HeroSlideshow';

export const metadata = {
  title: 'Kreonex Media — Digital Growth Studio | Siliguri, North Bengal',
  description: 'We build stunning websites, produce cinematic videos, and run high-ROI social media campaigns for brands in Siliguri, Darjeeling, North Bengal & Sikkim. Start your digital growth journey today.',
  alternates: { canonical: 'https://kreonex.com' },
  openGraph: {
    title: 'Kreonex Media — Digital Growth Studio | Siliguri',
    description: 'Premium website development, video production & social media marketing for North Bengal & Sikkim.',
    url: 'https://kreonex.com',
  },
};

export default function Page() {
  return (
    <>

<section className="pt-4 pb-16 md:pt-8 md:pb-24 px-8 relative overflow-hidden">
<div className="max-w-container-max mx-auto relative z-10">
<div className="flex flex-col md:flex-row items-center gap-20">
<div className="w-full md:w-3/5">
<div className="flex items-center gap-3 mb-8">
<div className="h-px w-8 bg-primary"></div>
<span className="font-label-caps text-xs text-primary uppercase tracking-[0.2em]">Based in North Bengal • Serving Worldwide</span>
</div>
<h1 className="font-display-xl text-[42px] md:text-[64px] leading-[1.05] mb-8 tracking-tightest">
                            We create content so good, your competitors will think you're a 
                            <span className="relative inline-block">
<span className="relative z-10 text-primary italic font-black">global powerhouse.</span>
<span className="absolute bottom-4 left-0 w-full h-4 bg-primary/5 -z-10"></span>
</span>
</h1>
<p className="font-body-lg text-body-lg text-on-surface-variant max-w-xl mb-12 leading-relaxed opacity-90">
                            High-fidelity digital experiences and cinematic content for brands ready to claim the spotlight. Technical precision meets raw artistic output.
                        </p>
<div className="flex flex-wrap gap-6">
<button className="bg-on-surface text-surface px-10 py-5 rounded-full font-button text-sm hover:bg-primary transition-all duration-500 shadow-xl shadow-black/5">
                                View Selected Works
                            </button>
<button className="group border border-on-surface/10 bg-white/50 backdrop-blur-sm text-on-surface px-10 py-5 rounded-full font-button text-sm hover:bg-on-surface hover:text-white transition-all flex items-center gap-2">
                                Our Capabilities <span className="material-symbols-outlined transition-transform group-hover:translate-x-1">arrow_forward</span>
</button>
</div>
</div>
<div className="w-full md:w-2/5 relative">

<div className="relative p-3 bg-white/20 backdrop-blur-2xl rounded-3xl border border-white/40 shadow-2xl overflow-hidden animate-pulse-slow">
<div className="bg-black rounded-2xl overflow-hidden shadow-inner border border-black/5 aspect-[4/5] relative">
<HeroSlideshow />
</div>


</div>

<div className="absolute -top-10 -right-10 w-40 h-40 bg-primary/5 rounded-full blur-3xl -z-10"></div>
</div>
</div>
</div>
</section>

<section className="border-y border-black/[0.03] bg-white py-8 px-8">
<div className="max-w-container-max mx-auto">
<div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center md:text-left">
<div className="relative md:after:content-[''] md:after:absolute md:after:right-0 md:after:top-1/4 md:after:h-1/2 md:after:w-px md:after:bg-black/[0.05]">
<p className="font-display-xl text-6xl md:text-7xl text-on-surface font-black tracking-tighter">10<span className="text-primary">+</span></p>
<p className="font-label-caps text-on-surface-variant font-bold text-[14px] mt-2 opacity-80">ONGOING PROJECTS</p>
</div>
<div className="relative md:after:content-[''] md:after:absolute md:after:right-0 md:after:top-1/4 md:after:h-1/2 md:after:w-px md:after:bg-black/[0.05]">
<p className="font-display-xl text-6xl md:text-7xl text-on-surface font-black tracking-tighter">100<span className="text-primary">%</span></p>
<p className="font-label-caps text-on-surface-variant font-bold text-[14px] mt-2 opacity-80">CUSTOM SOLUTIONS</p>
</div>
<div className="relative md:after:content-[''] md:after:absolute md:after:right-0 md:after:top-1/4 md:after:h-1/2 md:after:w-px md:after:bg-black/[0.05]">
<p className="font-display-xl text-6xl md:text-7xl text-on-surface font-black tracking-tighter">24<span className="text-primary">/7</span></p>
<p className="font-label-caps text-on-surface-variant font-bold text-[14px] mt-2 opacity-80">DEDICATED SUPPORT</p>
</div>
<div className="flex flex-col justify-center items-center md:items-start">
<p className="font-display-xl text-6xl md:text-7xl text-on-surface font-black tracking-tighter">0<span className="text-primary"></span></p>
<p className="font-label-caps text-on-surface-variant font-bold text-[14px] mt-2 opacity-80">COMPROMISE</p>
</div>
</div>
</div>
</section>

<section className="py-24 px-8 bg-surface-pearl" id="about">
  <div className="max-w-container-max mx-auto">
    <div className="flex flex-col lg:flex-row gap-16">
      <div className="w-full lg:w-1/2">
        <span className="text-primary font-label-caps text-xs tracking-widest bg-primary/5 px-3 py-1 rounded">OUR STORY</span>
        <h2 className="font-display-xl text-headline-lg mt-6 tracking-tight mb-8">
          From Code to <span className="italic text-primary/80">Conversion.</span>
        </h2>
        <div className="space-y-6 text-on-surface-variant text-lg opacity-90 leading-relaxed">
          <p>
            We started focused purely on custom code, technical execution, and software logic. But as the digital landscape evolved, we realized something critical: businesses don't just need functional software or a basic website—they need attention, authority, and high-converting media.
          </p>
          <p>
            A fast website means nothing if nobody visits it. An ad budget is wasted if the video content is boring. So, we rebranded to <strong>Kreonex Media</strong>. We combined our heavy-duty technical engineering roots with scroll-stopping visual production, performance marketing, and AI automation.
          </p>
          <p>
            Today, operating out of Bagdogra, North Bengal, we build tier-1 digital infrastructure and media campaigns for healthcare clinics, real estate developers, restaurants, interior designers, and retail brands across North Bengal, Sikkim, and beyond.
          </p>
        </div>
      </div>
      <div className="w-full lg:w-1/2 bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-black/5 flex flex-col justify-center relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -z-10 -translate-y-1/2 translate-x-1/2"></div>
        <span className="text-primary font-label-caps text-xs tracking-widest mb-8 block">3. Our 4 Core Operating Philosophies</span>
        
        <div className="space-y-8">
          <div className="relative pl-6 md:pl-8">
            <div className="absolute left-0 top-1 w-[3px] h-full bg-primary/20 rounded-full"><div className="w-full h-1/3 bg-primary rounded-full"></div></div>
            <h3 className="font-headline-sm text-xl mb-2 font-bold tracking-tight">01. Customized Plans Over Fixed Packages</h3>
            <p className="text-on-surface-variant text-sm leading-relaxed opacity-80">
              Every business is at a different stage. Pushing a generic, one-size-fits-all retainer is a lazy agency tactic. Some clients need a fast Next.js website to establish trust, others need high-volume Reels, and some just need a 24/7 WhatsApp AI sales bot. We audit your exact bottleneck and build only what you actually need to grow.
            </p>
          </div>
          
          <div className="relative pl-6 md:pl-8">
            <div className="absolute left-0 top-1 w-[3px] h-full bg-primary/20 rounded-full"><div className="w-full h-1/3 bg-primary rounded-full"></div></div>
            <h3 className="font-headline-sm text-xl mb-2 font-bold tracking-tight">02. Content First, Ads Second</h3>
            <p className="text-on-surface-variant text-sm leading-relaxed opacity-80">
              The best media budget in the world won't save bad creative. We obsess over high-end visual storytelling—scripting, lighting, camera work, and copywriting—before scaling your brand through paid Meta & Google Ad funnels.
            </p>
          </div>
          
          <div className="relative pl-6 md:pl-8">
            <div className="absolute left-0 top-1 w-[3px] h-full bg-primary/20 rounded-full"><div className="w-full h-1/3 bg-primary rounded-full"></div></div>
            <h3 className="font-headline-sm text-xl mb-2 font-bold tracking-tight">03. Technology As a Force Multiplier</h3>
            <p className="text-on-surface-variant text-sm leading-relaxed opacity-80">
              AI and automation aren't gimmicks to us—they are practical tools. By integrating custom Next.js web applications and 24/7 WhatsApp AI bots, we give local and regional businesses corporate-level systems that capture, qualify, and convert leads while you sleep.
            </p>
          </div>
          
          <div className="relative pl-6 md:pl-8">
            <div className="absolute left-0 top-1 w-[3px] h-full bg-primary/20 rounded-full"><div className="w-full h-1/3 bg-primary rounded-full"></div></div>
            <h3 className="font-headline-sm text-xl mb-2 font-bold tracking-tight">04. Revenue Over Vanity Metrics</h3>
            <p className="text-on-surface-variant text-sm leading-relaxed opacity-80">
              Likes, views, and impressions look great on a report, but they don't pay the bills. Every asset we deploy—from a 15-second Reel to a performance ad funnel—is measured by one main metric: actual inquiries, qualified leads, and sales growth.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

{/* Separator line between About and Methodology */}
<div className="w-full bg-surface"><hr className="border-t border-black/[0.05] mx-8 md:mx-auto max-w-container-max" /></div>

<section className="py-32 px-8 bg-surface relative" id="how-we-work">
  <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none opacity-50"></div>
  <div className="max-w-container-max mx-auto relative z-10">
    <div className="flex flex-col lg:flex-row justify-between items-end mb-20 gap-10">
      <div className="max-w-3xl">
        <span className="text-primary font-label-caps text-xs tracking-widest bg-primary/5 px-3 py-1 rounded inline-block mb-4 font-bold">HOW WE WORK</span>
        <h2 className="font-display-xl text-[48px] md:text-[64px] font-black tracking-tighter leading-tight text-on-surface">
          An engineering approach to <br className="hidden md:block"/>
          <span className="italic text-primary">creative chaos.</span>
        </h2>
      </div>
      <p className="text-on-surface-variant max-w-md text-lg leading-relaxed font-bold opacity-80">
        We don't just 'make content'. We build digital systems that capture attention and convert it into revenue.
      </p>
    </div>
    
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      
      {/* Step 1 */}
      <div className="group bg-white p-8 rounded-3xl border border-black/5 hover:border-primary/30 hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 relative overflow-hidden flex flex-col h-full">
        <div className="absolute -right-6 -top-6 text-9xl font-black text-black/[0.02] group-hover:text-primary/[0.05] transition-colors duration-500">01</div>
        <div className="w-14 h-14 rounded-2xl bg-surface-pearl border border-black/5 flex items-center justify-center text-primary mb-8 group-hover:bg-primary group-hover:text-white group-hover:scale-110 transition-all duration-500 shadow-sm relative z-10">
          <span className="material-symbols-outlined text-[28px]">search</span>
        </div>
        <h3 className="font-headline-sm text-2xl mb-4 font-bold tracking-tight text-on-surface relative z-10">Discovery &amp; Audit</h3>
        <p className="text-on-surface-variant text-base leading-relaxed opacity-90 mb-8 flex-grow relative z-10 font-semibold">
          Deep architectural analysis of your current brand positioning, market whitespace, and technical bottlenecks.
        </p>
        <div className="flex flex-wrap gap-2 relative z-10 mt-auto">
          <span className="text-[10px] font-black bg-surface-pearl text-on-surface px-3 py-1.5 rounded-md uppercase tracking-widest group-hover:bg-primary/5 group-hover:text-primary transition-colors">COMPETITOR ANALYSIS</span>
          <span className="text-[10px] font-black bg-surface-pearl text-on-surface px-3 py-1.5 rounded-md uppercase tracking-widest group-hover:bg-primary/5 group-hover:text-primary transition-colors">AUDIENCE MAPPING</span>
        </div>
      </div>
      
      {/* Step 2 */}
      <div className="group bg-white p-8 rounded-3xl border border-black/5 hover:border-primary/30 hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 relative overflow-hidden flex flex-col h-full mt-0 lg:mt-8">
        <div className="absolute -right-6 -top-6 text-9xl font-black text-black/[0.02] group-hover:text-primary/[0.05] transition-colors duration-500">02</div>
        <div className="w-14 h-14 rounded-2xl bg-surface-pearl border border-black/5 flex items-center justify-center text-primary mb-8 group-hover:bg-primary group-hover:text-white group-hover:scale-110 transition-all duration-500 shadow-sm relative z-10">
          <span className="material-symbols-outlined text-[28px]">architecture</span>
        </div>
        <h3 className="font-headline-sm text-2xl mb-4 font-bold tracking-tight text-on-surface relative z-10">Strategy Blueprint</h3>
        <p className="text-on-surface-variant text-base leading-relaxed opacity-90 mb-8 flex-grow relative z-10 font-semibold">
          We design a technical roadmap tailored to your specific growth objectives and KPI targets.
        </p>
        <div className="flex flex-wrap gap-2 relative z-10 mt-auto">
          <span className="text-[10px] font-black bg-surface-pearl text-on-surface px-3 py-1.5 rounded-md uppercase tracking-widest group-hover:bg-primary/5 group-hover:text-primary transition-colors">CAMPAIGN ARCH</span>
          <span className="text-[10px] font-black bg-surface-pearl text-on-surface px-3 py-1.5 rounded-md uppercase tracking-widest group-hover:bg-primary/5 group-hover:text-primary transition-colors">CONTENT CALENDAR</span>
        </div>
      </div>
      
      {/* Step 3 */}
      <div className="group bg-white p-8 rounded-3xl border border-black/5 hover:border-primary/30 hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 relative overflow-hidden flex flex-col h-full mt-0 lg:mt-16">
        <div className="absolute -right-6 -top-6 text-9xl font-black text-black/[0.02] group-hover:text-primary/[0.05] transition-colors duration-500">03</div>
        <div className="w-14 h-14 rounded-2xl bg-surface-pearl border border-black/5 flex items-center justify-center text-primary mb-8 group-hover:bg-primary group-hover:text-white group-hover:scale-110 transition-all duration-500 shadow-sm relative z-10">
          <span className="material-symbols-outlined text-[28px]">movie</span>
        </div>
        <h3 className="font-headline-sm text-2xl mb-4 font-bold tracking-tight text-on-surface relative z-10">Hyper-Production</h3>
        <p className="text-on-surface-variant text-base leading-relaxed opacity-90 mb-8 flex-grow relative z-10 font-semibold">
          High-grade output delivered through rapid 72-hour development and production sprints.
        </p>
        <div className="flex flex-wrap gap-2 relative z-10 mt-auto">
          <span className="text-[10px] font-black bg-surface-pearl text-on-surface px-3 py-1.5 rounded-md uppercase tracking-widest group-hover:bg-primary/5 group-hover:text-primary transition-colors">ASSET CREATION</span>
          <span className="text-[10px] font-black bg-surface-pearl text-on-surface px-3 py-1.5 rounded-md uppercase tracking-widest group-hover:bg-primary/5 group-hover:text-primary transition-colors">MOTION DESIGN</span>
        </div>
      </div>
      
      {/* Step 4 */}
      <div className="group bg-white p-8 rounded-3xl border border-black/5 hover:border-primary/30 hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 relative overflow-hidden flex flex-col h-full mt-0 lg:mt-24">
        <div className="absolute -right-6 -top-6 text-9xl font-black text-black/[0.02] group-hover:text-primary/[0.05] transition-colors duration-500">04</div>
        <div className="w-14 h-14 rounded-2xl bg-surface-pearl border border-black/5 flex items-center justify-center text-primary mb-8 group-hover:bg-primary group-hover:text-white group-hover:scale-110 transition-all duration-500 shadow-sm relative z-10">
          <span className="material-symbols-outlined text-[28px]">monitoring</span>
        </div>
        <h3 className="font-headline-sm text-2xl mb-4 font-bold tracking-tight text-on-surface relative z-10">Feedback &amp; Scale</h3>
        <p className="text-on-surface-variant text-base leading-relaxed opacity-90 mb-8 flex-grow relative z-10 font-semibold">
          Continuous optimization based on hard data. We scale what works and kill what doesn't.
        </p>
        <div className="flex flex-wrap gap-2 relative z-10 mt-auto">
          <span className="text-[10px] font-black bg-surface-pearl text-on-surface px-3 py-1.5 rounded-md uppercase tracking-widest group-hover:bg-primary/5 group-hover:text-primary transition-colors">PERFORMANCE AUDITS</span>
          <span className="text-[10px] font-black bg-surface-pearl text-on-surface px-3 py-1.5 rounded-md uppercase tracking-widest group-hover:bg-primary/5 group-hover:text-primary transition-colors">ROI REPORTING</span>
        </div>
      </div>
      
    </div>
  </div>
</section>

<section className="py-32 px-8 bg-white" id="services">
<div className="max-w-container-max mx-auto">
<div className="text-center mb-24">
<span className="font-label-caps text-xs text-primary tracking-[0.3em] font-bold">CORE CAPABILITIES</span>
<h2 className="font-display-xl text-[48px] md:text-[56px] font-black tracking-tight mt-6">Modern Solutions. <span className="opacity-30">Elite Standards.</span></h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-10">

<div className="group bg-surface-pearl border border-black/[0.03] p-12 rounded-3xl hover:bg-white hover:shadow-2xl transition-all duration-700 relative overflow-hidden">
<div className="absolute -right-10 -top-10 w-32 h-32 bg-primary/5 rounded-full group-hover:scale-150 transition-transform duration-1000"></div>
<span className="material-symbols-outlined text-5xl text-primary/60 mb-10 block group-hover:text-primary transition-colors">videocam</span>
<h3 className="font-headline-sm text-2xl mb-4 font-black tracking-tight">Cinematic Media</h3>
<p className="text-on-surface-variant/90 text-base font-medium leading-relaxed mb-8">From commercial films to high-conversion social assets. We build visuals that define categories.</p>
<Link className="text-[11px] font-bold font-label-caps text-on-surface tracking-widest flex items-center gap-2 group-hover:text-primary transition-colors" href="/portfolio">
                            VIEW CASE STUDIES <span className="material-symbols-outlined !text-base">north_east</span>
</Link>
</div>

<div className="group bg-surface-pearl border border-black/[0.03] p-12 rounded-3xl hover:bg-white hover:shadow-2xl transition-all duration-700 relative overflow-hidden">
<div className="absolute -right-10 -top-10 w-32 h-32 bg-primary/5 rounded-full group-hover:scale-150 transition-transform duration-1000"></div>
<span className="material-symbols-outlined text-5xl text-primary/60 mb-10 block group-hover:text-primary transition-colors">auto_awesome</span>
<h3 className="font-headline-sm text-2xl mb-4 font-black tracking-tight">AI Media Generation</h3>
<p className="text-on-surface-variant/90 text-base font-medium leading-relaxed mb-8">Cutting-edge AI-generated photos and videos that stretch imagination beyond the limits of physical shoots.</p>
<Link className="text-[11px] font-bold font-label-caps text-on-surface tracking-widest flex items-center gap-2 group-hover:text-primary transition-colors" href="/portfolio">
                            SEE AI CAPABILITIES <span className="material-symbols-outlined !text-base">north_east</span>
</Link>
</div>

<div className="group bg-surface-pearl border border-black/[0.03] p-12 rounded-3xl hover:bg-white hover:shadow-2xl transition-all duration-700 relative overflow-hidden">
<div className="absolute -right-10 -top-10 w-32 h-32 bg-primary/5 rounded-full group-hover:scale-150 transition-transform duration-1000"></div>
<span className="material-symbols-outlined text-5xl text-primary/60 mb-10 block group-hover:text-primary transition-colors">data_object</span>
<h3 className="font-headline-sm text-2xl mb-4 font-black tracking-tight">Growth & Web Engineering</h3>
<p className="text-on-surface-variant/90 text-base font-medium leading-relaxed mb-8">Conversion-focused content frameworks and blazing-fast, high-converting Next.js websites designed to dominate modern algorithms.</p>
<Link className="text-[11px] font-bold font-label-caps text-on-surface tracking-widest flex items-center gap-2 group-hover:text-primary transition-colors" href="/contact">
                            REQUEST A CALL <span className="material-symbols-outlined !text-base">north_east</span>
</Link>
</div>

<div className="group bg-surface-pearl border border-black/[0.03] p-12 rounded-3xl hover:bg-white hover:shadow-2xl transition-all duration-700 relative overflow-hidden">
<div className="absolute -right-10 -top-10 w-32 h-32 bg-primary/5 rounded-full group-hover:scale-150 transition-transform duration-1000"></div>
<span className="material-symbols-outlined text-5xl text-primary/60 mb-10 block group-hover:text-primary transition-colors">ads_click</span>
<h3 className="font-headline-sm text-2xl mb-4 font-black tracking-tight">Performance Ads</h3>
<p className="text-on-surface-variant/90 text-base font-medium leading-relaxed mb-8">Technical ad management across Meta, Google, and LinkedIn with a focus on sustainable CAC and high LTV.</p>
<Link className="text-[11px] font-bold font-label-caps text-on-surface tracking-widest flex items-center gap-2 group-hover:text-primary transition-colors" href="/contact">
                            SEE OUR RESULTS <span className="material-symbols-outlined !text-base">north_east</span>
</Link>
</div>
</div>
</div>
</section>

<section className="py-32 px-8 bg-on-surface text-white" id="work">
<div className="max-w-container-max mx-auto">
<div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-8">
<div>
<span className="font-label-caps text-xs text-primary tracking-widest font-bold bg-primary/10 px-3 py-1 rounded w-max">SELECTED WORKS</span>
<h2 className="font-display-xl text-[48px] md:text-[64px] font-black mt-6 leading-none tracking-tight">Curated <br className="hidden md:block"/><span className="italic text-primary">Impact.</span></h2>
</div>
<div className="hidden md:block">
<button className="border border-white/20 px-8 py-4 rounded-full text-sm font-bold hover:bg-white hover:text-on-surface transition-all tracking-wide">Explore Full Archive</button>
</div>
</div>
<div className="space-y-32">

{/* Project 1: WearUp India */}
<div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center group">
<div className="md:col-span-8 overflow-hidden rounded-[40px] relative">
<Link href="/work/wearupindia" className="block w-full h-full">
<img className="w-full h-full object-cover aspect-[16/9] group-hover:scale-105 transition-transform duration-1000" src="https://pub-6c6783ed8ce64932a9644e8cfd52a4bf.r2.dev/images/work/wearupindia.png" alt="WearUp India Project"/>
<div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-700"></div>
</Link>
</div>
<div className="md:col-span-4">
<span className="text-primary font-label-caps text-xs font-bold tracking-widest mb-4 block">E-COMMERCE • NEXT.JS</span>
<h3 className="text-4xl md:text-5xl font-black mb-6 tracking-tight group-hover:text-primary transition-colors duration-300">
<Link href="/work/wearupindia">WearUp India</Link>
</h3>
<p className="text-white/70 text-lg mb-10 leading-relaxed font-medium">Headless commerce engineered for North Bengal's premier bike graphic & accessories brand. Insanely fast, conversion-optimized architecture.</p>
<Link className="inline-flex items-center gap-3 text-white border-b-2 border-primary/40 pb-2 hover:border-primary transition-colors text-sm font-bold uppercase tracking-wider" href="/work/wearupindia">View Project Case <span className="material-symbols-outlined !text-base transition-transform group-hover:translate-x-2">arrow_forward</span></Link>
</div>
</div>

{/* Project 2: Urban Saajh */}
<div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center group">
<div className="md:col-span-4 md:order-1 order-2">
<span className="text-primary font-label-caps text-xs font-bold tracking-widest mb-4 block">INTERIOR DESIGN • PORTFOLIO</span>
<h3 className="text-4xl md:text-5xl font-black mb-6 tracking-tight group-hover:text-primary transition-colors duration-300">
<Link href="/work/urbansaajh">Urban Saajh</Link>
</h3>
<p className="text-white/70 text-lg mb-10 leading-relaxed font-medium">A high-performance portfolio and visual overhaul for a Bagdogra interior firm. Featuring custom photoshoots and testimonial video production.</p>
<Link className="inline-flex items-center gap-3 text-white border-b-2 border-primary/40 pb-2 hover:border-primary transition-colors text-sm font-bold uppercase tracking-wider" href="/work/urbansaajh">View Project Case <span className="material-symbols-outlined !text-base transition-transform group-hover:translate-x-2">arrow_forward</span></Link>
</div>
<div className="md:col-span-8 md:order-2 order-1 overflow-hidden rounded-[40px] relative">
<Link href="/work/urbansaajh" className="block w-full h-full">
<img className="w-full h-full object-cover aspect-[16/9] group-hover:scale-105 transition-transform duration-1000" src="https://pub-6c6783ed8ce64932a9644e8cfd52a4bf.r2.dev/images/work/urbansaajh.png" alt="Urban Saajh Project"/>
<div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-700"></div>
</Link>
</div>
</div>

{/* Project 3: Ramen Bowl Cafe */}
<div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center group">
<div className="md:col-span-8 overflow-hidden rounded-[40px] relative">
<Link href="/work/ramenbowl" className="block w-full h-full">
<img className="w-full h-full object-cover aspect-[16/9] group-hover:scale-105 transition-transform duration-1000" src="https://pub-6c6783ed8ce64932a9644e8cfd52a4bf.r2.dev/images/work/ramenbowl.png" alt="Ramen Bowl Cafe Project"/>
<div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-700"></div>
</Link>
</div>
<div className="md:col-span-4">
<span className="text-primary font-label-caps text-xs font-bold tracking-widest mb-4 block">PERFORMANCE MARKETING • CONTENT</span>
<h3 className="text-4xl md:text-5xl font-black mb-6 tracking-tight group-hover:text-primary transition-colors duration-300">
<Link href="/work/ramenbowl">Ramen Bowl Cafe</Link>
</h3>
<p className="text-white/70 text-lg mb-10 leading-relaxed font-medium">Driving hyper-local footfall in Sukna through viral reels, premium photoshoots, and aggressive performance marketing campaigns.</p>
<Link className="inline-flex items-center gap-3 text-white border-b-2 border-primary/40 pb-2 hover:border-primary transition-colors text-sm font-bold uppercase tracking-wider" href="/work/ramenbowl">View Project Case <span className="material-symbols-outlined !text-base transition-transform group-hover:translate-x-2">arrow_forward</span></Link>
</div>
</div>

</div>
</div>
</section>

<section className="py-32 px-8 bg-surface">
<div className="max-w-container-max mx-auto">
<div className="text-center mb-24">
<span className="font-label-caps text-[11px] text-primary tracking-[0.4em]">BEHIND THE CURTAIN</span>
<h2 className="font-display-xl text-headline-lg mt-6">The Engine Room.</h2>
</div>
<DynamicEngineRoom />
</div>
</section>

<section className="py-16 px-8 bg-surface-pearl relative overflow-hidden">
  <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/3 pointer-events-none"></div>
  <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-black/5 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/3 pointer-events-none"></div>

  <div className="max-w-container-max mx-auto relative z-10">
    <div className="text-center mb-12">
      <span className="font-label-caps text-[12px] font-bold text-primary tracking-[0.4em] bg-primary/10 px-4 py-2 rounded-full inline-block mb-6">THE KREONEX DIFFERENCE</span>
      <h2 className="font-display-xl text-[48px] md:text-[64px] font-black tracking-tight leading-tight">Built for scale. <br/><span className="text-on-surface-variant opacity-40">Not for templates.</span></h2>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
      
      {/* Pillar 1 */}
      <div className="group bg-white p-8 rounded-[2rem] border border-black/5 shadow-sm hover:shadow-xl hover:border-primary/20 transition-all duration-500 hover:-translate-y-1 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-2xl group-hover:bg-primary/10 transition-colors duration-500 -translate-y-1/2 translate-x-1/2"></div>
        <div className="w-12 h-12 rounded-xl bg-surface-pearl border border-black/5 flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-white transition-colors duration-300 relative z-10">
          <span className="material-symbols-outlined text-[24px]">architecture</span>
        </div>
        <h3 className="text-xl font-bold text-on-surface tracking-tight mb-4 relative z-10">Custom Strategy First</h3>
        <p className="text-on-surface-variant text-sm leading-relaxed opacity-90 relative z-10 font-medium">
          We listen and analyze your exact needs. We don't lazily push fixed packages or stick products to you carelessly. Every strategy is custom-engineered for your specific bottlenecks.
        </p>
      </div>

      {/* Pillar 2 */}
      <div className="group bg-white p-8 rounded-[2rem] border border-black/5 shadow-sm hover:shadow-xl hover:border-primary/20 transition-all duration-500 hover:-translate-y-1 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-2xl group-hover:bg-primary/10 transition-colors duration-500 -translate-y-1/2 translate-x-1/2"></div>
        <div className="w-12 h-12 rounded-xl bg-surface-pearl border border-black/5 flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-white transition-colors duration-300 relative z-10">
          <span className="material-symbols-outlined text-[24px]">hub</span>
        </div>
        <h3 className="text-xl font-bold text-on-surface tracking-tight mb-4 relative z-10">The Ecosystem Approach</h3>
        <p className="text-on-surface-variant text-sm leading-relaxed opacity-90 relative z-10 font-medium">
          Even the fastest website won't give you leads on its own. We combine Next.js cloud architecture with high-impact content and aggressive ads to build a true lead-generating ecosystem.
        </p>
      </div>

      {/* Pillar 3 */}
      <div className="group bg-white p-8 rounded-[2rem] border border-black/5 shadow-sm hover:shadow-xl hover:border-primary/20 transition-all duration-500 hover:-translate-y-1 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-2xl group-hover:bg-primary/10 transition-colors duration-500 -translate-y-1/2 translate-x-1/2"></div>
        <div className="w-12 h-12 rounded-xl bg-surface-pearl border border-black/5 flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-white transition-colors duration-300 relative z-10">
          <span className="material-symbols-outlined text-[24px]">bolt</span>
        </div>
        <h3 className="text-xl font-bold text-on-surface tracking-tight mb-4 relative z-10">Lightning Fast Execution</h3>
        <p className="text-on-surface-variant text-sm leading-relaxed opacity-90 relative z-10 font-medium">
          While traditional agencies take weeks, our hyper-optimized workflow means we shoot, edit, and deliver high-impact content in just 2-3 days without sacrificing cinematic quality.
        </p>
      </div>

      {/* Pillar 4 */}
      <div className="group bg-white p-8 rounded-[2rem] border border-black/5 shadow-sm hover:shadow-xl hover:border-primary/20 transition-all duration-500 hover:-translate-y-1 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-2xl group-hover:bg-primary/10 transition-colors duration-500 -translate-y-1/2 translate-x-1/2"></div>
        <div className="w-12 h-12 rounded-xl bg-surface-pearl border border-black/5 flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-white transition-colors duration-300 relative z-10">
          <span className="material-symbols-outlined text-[24px]">movie</span>
        </div>
        <h3 className="text-xl font-bold text-on-surface tracking-tight mb-4 relative z-10">Storytelling &amp; Personal Branding</h3>
        <p className="text-on-surface-variant text-sm leading-relaxed opacity-90 relative z-10 font-medium">
          We do what others can't. We craft authentic, cinematic content that tells your story, builds your personal brand, and connects deeply with your audience to scale your authority.
        </p>
      </div>

      {/* Pillar 5 */}
      <div className="group bg-white p-8 rounded-[2rem] border border-black/5 shadow-sm hover:shadow-xl hover:border-primary/20 transition-all duration-500 hover:-translate-y-1 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-2xl group-hover:bg-primary/10 transition-colors duration-500 -translate-y-1/2 translate-x-1/2"></div>
        <div className="w-12 h-12 rounded-xl bg-surface-pearl border border-black/5 flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-white transition-colors duration-300 relative z-10">
          <span className="material-symbols-outlined text-[24px]">trending_up</span>
        </div>
        <h3 className="text-xl font-bold text-on-surface tracking-tight mb-4 relative z-10">Performance Marketing ROI</h3>
        <p className="text-on-surface-variant text-sm leading-relaxed opacity-90 relative z-10 font-medium">
          Beautiful content is useless if nobody sees it. We deploy data-driven performance marketing campaigns across Meta and Google to drive hyper-targeted traffic straight into your ecosystem.
        </p>
      </div>

      {/* Pillar 6 */}
      <div className="group bg-white p-8 rounded-[2rem] border border-black/5 shadow-sm hover:shadow-xl hover:border-primary/20 transition-all duration-500 hover:-translate-y-1 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-2xl group-hover:bg-primary/10 transition-colors duration-500 -translate-y-1/2 translate-x-1/2"></div>
        <div className="w-12 h-12 rounded-xl bg-surface-pearl border border-black/5 flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-white transition-colors duration-300 relative z-10">
          <span className="material-symbols-outlined text-[24px]">smart_toy</span>
        </div>
        <h3 className="text-xl font-bold text-on-surface tracking-tight mb-4 relative z-10">AI &amp; System Automation</h3>
        <p className="text-on-surface-variant text-sm leading-relaxed opacity-90 relative z-10 font-medium">
          We build systems that work while you don't. By integrating custom LLM pipelines and autonomous WhatsApp funnels, we turn your digital presence into a 24/7 sales machine.
        </p>
      </div>

    </div>
  </div>
</section>

<section className="py-32 px-8">
<div className="max-w-container-max mx-auto">
<div className="bg-on-surface rounded-[3rem] p-16 md:p-32 text-center relative overflow-hidden group">

<div className="absolute -top-1/2 -left-1/4 w-full h-full bg-primary/20 blur-[120px] rounded-full group-hover:scale-110 transition-transform duration-1000"></div>
<div className="relative z-10">
<h2 className="font-display-xl text-[42px] md:text-7xl text-white mb-12 tracking-tightest">
                            Ready to <span className="italic text-primary">outperform</span> <br className="hidden md:block"/> your competition?
                        </h2>
<p className="text-white/60 font-body-lg text-lg max-w-2xl mx-auto mb-16 leading-relaxed">
                            Stop settling for generic content that blends into the background noise. Partner with North Bengal's sharpest studio and claim your dominance.
                        </p>
<div className="flex flex-col md:flex-row justify-center gap-6">
<button className="bg-primary text-white px-12 py-6 rounded-full font-button text-sm hover:scale-105 hover:shadow-[0_0_40px_rgba(187,0,16,0.3)] transition-all duration-500">
                                Book Strategy Audit
                            </button>
<button className="border border-white/20 text-white px-12 py-6 rounded-full font-button text-sm hover:bg-white hover:text-on-surface transition-all duration-500">
                                View Packages
                            </button>
</div>
</div>
</div>
</div>
</section>
    </>
  );
}
