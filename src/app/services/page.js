
export const metadata = {
  title: 'Services — Website Development, Video Production & SMM',
  description: 'Explore our full suite of digital services: custom website development, professional video shoots, social media marketing, content creation & performance-driven Meta and Google Ads in Siliguri & North Bengal.',
  alternates: { canonical: 'https://kreonex.com/services' },
  openGraph: {
    title: 'Our Services — Kreonex Media',
    description: 'Website development, cinematic video production, SMM, content creation & paid ads for brands in North Bengal & Sikkim.',
    url: 'https://kreonex.com/services',
  },
};

export default function Page() {
  return (
    <>
      
{/* Hero Section */}
<section className="max-w-container-max mx-auto px-8 pb-20">
<div className="max-w-5xl">
<div className="flex items-center gap-3 mb-8">
<div className="h-px w-8 bg-primary"></div>
<span className="font-label-caps text-[12px] tracking-[0.2em] text-primary uppercase">Our Expertise</span>
</div>
<h1 className="font-display-xl text-headline-lg-mobile md:text-[84px] leading-[1.05] mb-10 text-balance">
                High-Performance <span className="italic font-serif text-primary">Capabilities</span> for Digital Dominance.
            </h1>
<p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl leading-relaxed opacity-80">
                We bridge the gap between creative vision and engineering precision. No filler, no buzzwords—just technical excellence that scales brands.
            </p>
</div>
</section>
{/* Services Grid */}
<section className="max-w-container-max mx-auto px-8 pb-section-padding">
<div className="grid grid-cols-1 md:grid-cols-12 gap-8">
{/* Web Development: Core Engineering */}
<div className="md:col-span-8 group service-card bg-surface-container-lowest border border-border-subtle p-10 rounded-2xl overflow-hidden relative">
<div className="flex flex-col lg:flex-row gap-12 relative z-10">
<div className="flex-1">
<div className="w-12 h-12 rounded-xl bg-red-tint flex items-center justify-center mb-8">
<span className="material-symbols-outlined text-primary text-2xl">code_blocks</span>
</div>
<h3 className="font-headline-md text-3xl mb-4">Web Engineering</h3>
<p className="text-on-surface-variant mb-10 text-body-md leading-relaxed opacity-90">Developing mission-critical web infrastructure using Next.js and React. We focus on sub-second load times and complex architectural scalability.</p>
<div className="grid grid-cols-2 gap-4 mb-10">
<div className="flex items-center gap-3">
<span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
<span className="font-label-caps text-[11px] tracking-widest opacity-70 uppercase">Headless CMS</span>
</div>
<div className="flex items-center gap-3">
<span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
<span className="font-label-caps text-[11px] tracking-widest opacity-70 uppercase">SEO Infrastructure</span>
</div>
<div className="flex items-center gap-3">
<span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
<span className="font-label-caps text-[11px] tracking-widest opacity-70 uppercase">Custom APIs</span>
</div>
<div className="flex items-center gap-3">
<span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
<span className="font-label-caps text-[11px] tracking-widest opacity-70 uppercase">Core Web Vitals</span>
</div>
</div>
<a className="inline-flex items-center gap-3 text-primary font-button text-[13px] tracking-widest uppercase group/link" href="#">
                            The Stack <span className="group-hover/link:translate-x-2 transition-transform">→</span>
</a>
</div>
<div className="flex-1 h-[300px] lg:h-auto rounded-xl overflow-hidden border border-border-subtle group-hover:border-primary/20 transition-colors">
<img alt="Modern laptop coding setup" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB0Dobxy3hGEVmcTzF4_6uvXABF91Qnb9sUCdNhYnbJF74tXOROw57-bptqcYYD7qm4P1UinVQ5F__WdLVnrkQBD9rEx9_Iz9ejNnmhQSfcL9uKKtzJuAt59WTSJ6OctrEapYwZ319JIVeDpU__S7T4tMB24CuIaXPcy7lXZzZwXGeFGp2owmdvHHXlJLVhS-HhZd9k2jF0hG-0EJ2IM8MXXA40wZ2worL7aXJz3wx1HVD0qiVtJK9X"/>
</div>
</div>
</div>
{/* Social Strategy */}
<div className="md:col-span-4 group service-card bg-surface-container-low border border-border-subtle p-10 rounded-2xl flex flex-col justify-between">
<div>
<div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center mb-8 border border-border-subtle">
<span className="material-symbols-outlined text-primary text-2xl">captive_portal</span>
</div>
<h3 className="font-headline-md text-2xl mb-4">Social Ecosystems</h3>
<p className="text-on-surface-variant text-body-md opacity-80 leading-relaxed">We don't "post"—we architect digital authority. Strategic presence that turns followers into a moat for your brand.</p>
</div>
<div className="mt-12 flex justify-between items-end">
<div className="flex -space-x-3">
<div className="w-9 h-9 rounded-full border-2 border-white bg-on-background text-white flex items-center justify-center font-label-caps text-[9px] uppercase">IG</div>
<div className="w-9 h-9 rounded-full border-2 border-white bg-on-background text-white flex items-center justify-center font-label-caps text-[9px] uppercase">LI</div>
<div className="w-9 h-9 rounded-full border-2 border-white bg-on-background text-white flex items-center justify-center font-label-caps text-[9px] uppercase">YT</div>
</div>
<span className="text-[11px] font-label-caps tracking-widest uppercase opacity-40">Narrative Ops</span>
</div>
</div>
{/* Performance Marketing */}
<div className="md:col-span-4 group service-card bg-surface-container-lowest border border-border-subtle p-10 rounded-2xl">
<div className="w-12 h-12 rounded-xl bg-red-tint flex items-center justify-center mb-8">
<span className="material-symbols-outlined text-primary text-2xl">insights</span>
</div>
<h3 className="font-headline-md text-2xl mb-4">Performance</h3>
<p className="text-on-surface-variant text-body-md mb-12 opacity-80 leading-relaxed">Precision-targeted growth through Meta and Google Ads, optimized for enterprise-level ROI.</p>
<div className="glass-panel p-6 rounded-xl border border-white shadow-sm">
<div className="flex flex-col gap-2">
<span className="text-[11px] font-label-caps tracking-widest uppercase text-primary font-bold">Our Commitment</span>
<span className="text-sm font-medium text-on-surface opacity-80 leading-relaxed">We don't guarantee overnight success, but we assure you absolute dedication to delivering the best possible output for your brand.</span>
</div>
</div>
</div>
{/* Creative Production */}
<div className="md:col-span-8 group service-card bg-on-background text-white p-10 rounded-2xl overflow-hidden relative">
<div className="absolute top-0 right-0 w-full h-full opacity-20 group-hover:opacity-30 transition-opacity">
<img alt="Cinema Camera" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDpkwByU7POIk26Mfg3HH_mbT9qZxpfU8zE7cwnpTtbBx5rQqDbrsif9dvbOFm5yV_sz91Z1a8eNS3n98vid0E0nys7nvxMKB2SoU6KOkfAeQXwWVKPhsuf8MCJZMWYqG_cfX500dndU1vttREZ7XjVVbP330oymITmGv7vbgCvvuVe6jehxWz401mBqcpHWMD07uL7P-iBTkMtiOLgSeiH8ZuZ1n4V9y8Lqrk6w3HHrx6Kk_7JIMwM"/>
</div>
<div className="relative z-10 h-full flex flex-col justify-between max-w-lg">
<div>
<div className="w-12 h-12 rounded-xl bg-white/10 backdrop-blur-md flex items-center justify-center mb-8 border border-white/20">
<span className="material-symbols-outlined text-white text-2xl">movie_edit</span>
</div>
<h3 className="font-headline-md text-3xl mb-4">Content Production</h3>
<p className="text-white/70 text-body-md leading-relaxed">Elite cinematic storytelling. From high-retention Reels to commercial brand films, we engineer visuals that command attention.</p>
</div>
<div className="mt-12 flex items-center gap-6">
<div className="flex flex-col">
<span className="font-label-caps text-[11px] tracking-widest uppercase text-white/50">Our Promise</span>
<span className="font-button text-[14px] uppercase tracking-wider">Cinematic Quality, Every Time</span>
</div>
</div>
</div>
</div>
{/* AI Automation */}
<div className="md:col-span-12 group service-card bg-surface-container-low border border-border-subtle p-12 rounded-3xl overflow-hidden">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
<div>
<div className="w-12 h-12 rounded-xl bg-primary flex items-center justify-center mb-8 shadow-lg shadow-primary/20">
<span className="material-symbols-outlined text-white text-2xl">psychology</span>
</div>
<h3 className="font-headline-md text-4xl mb-6">AI &amp; System Automation</h3>
<p className="text-on-surface-variant text-body-lg mb-12 opacity-80 leading-relaxed">Integrating custom LLM pipelines and autonomous WhatsApp funnels into your business operations. We build systems that work while you don't.</p>
<div className="flex flex-wrap gap-8">
<div className="flex flex-col gap-1">
<span className="text-3xl font-display-xl text-primary">85%</span>
<span className="font-label-caps text-[10px] tracking-[0.2em] opacity-60 uppercase">Operational Efficiency</span>
</div>
<div className="w-px h-12 bg-border-subtle"></div>
<div className="flex flex-col gap-1">
<span className="text-3xl font-display-xl text-primary">24/7</span>
<span className="font-label-caps text-[10px] tracking-[0.2em] opacity-60 uppercase">Lead Qualification</span>
</div>
</div>
</div>
<div className="relative bg-white border border-border-subtle rounded-2xl shadow-2xl overflow-hidden aspect-video group-hover:border-primary/30 transition-colors">
<div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent"></div>
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-sm">
<div className="glass-panel p-6 rounded-2xl border border-white shadow-xl">
<div className="flex items-center gap-4 mb-6">
<div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white text-xs font-bold">AI</div>
<div className="space-y-1.5">
<div className="h-2.5 w-32 bg-on-background/10 rounded-full"></div>
<div className="h-2.5 w-20 bg-on-background/5 rounded-full"></div>
</div>
</div>
<div className="p-4 bg-red-tint rounded-xl border border-primary/10">
<p className="font-label-caps text-[12px] text-primary italic">"Analyzing lead data. Quality score: 98/100. Automating follow-up..."</p>
</div>
</div>
</div>
</div>
</div>
</div>
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

{/* Technical Dominance Section */}
<section className="bg-on-background text-white py-32 overflow-hidden">
<div className="max-w-container-max mx-auto px-8">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
<div className="relative">
<div className="flex items-center gap-3 mb-8">
<div className="h-px w-8 bg-primary"></div>
<span className="font-label-caps text-[12px] tracking-[0.2em] text-primary uppercase">The Engine Room</span>
</div>
<h2 className="font-display-xl text-5xl md:text-6xl mb-10">Technical Dominance.</h2>
<p className="text-white/60 font-body-lg mb-16 max-w-xl leading-relaxed">
                        We don't settle for "good enough." Our engineering culture is built on deep domain expertise and a relentless pursuit of the 1%.
                    </p>
<div className="space-y-10">
{/* Skill 1 */}
<div className="group/skill">
<div className="flex justify-between items-end mb-4">
<span className="font-label-caps text-[12px] tracking-widest uppercase text-white/80">Full-Stack Engineering (Next.js)</span>
<span className="text-primary font-display-xl text-2xl">98%</span>
</div>
<div className="h-[2px] w-full bg-white/10 rounded-full overflow-hidden">
<div className="h-full bg-primary progress-bar-fill shadow-[0_0_15px_rgba(187,0,16,0.6)]" style={{"width":"98%"}}></div>
</div>
</div>
{/* Skill 2 */}
<div className="group/skill">
<div className="flex justify-between items-end mb-4">
<span className="font-label-caps text-[12px] tracking-widest uppercase text-white/80">Visual Arts &amp; Cinema</span>
<span className="text-primary font-display-xl text-2xl">95%</span>
</div>
<div className="h-[2px] w-full bg-white/10 rounded-full overflow-hidden">
<div className="h-full bg-primary progress-bar-fill shadow-[0_0_15px_rgba(187,0,16,0.6)]" style={{"width":"95%"}}></div>
</div>
</div>
{/* Skill 3 */}
<div className="group/skill">
<div className="flex justify-between items-end mb-4">
<span className="font-label-caps text-[12px] tracking-widest uppercase text-white/80">Growth Engineering &amp; Ads</span>
<span className="text-primary font-display-xl text-2xl">92%</span>
</div>
<div className="h-[2px] w-full bg-white/10 rounded-full overflow-hidden">
<div className="h-full bg-primary progress-bar-fill shadow-[0_0_15px_rgba(187,0,16,0.6)]" style={{"width":"92%"}}></div>
</div>
</div>
{/* Skill 4 */}
<div className="group/skill">
<div className="flex justify-between items-end mb-4">
<span className="font-label-caps text-[12px] tracking-widest uppercase text-white/80">AI Integration (Python)</span>
<span className="text-primary font-display-xl text-2xl">89%</span>
</div>
<div className="h-[2px] w-full bg-white/10 rounded-full overflow-hidden">
<div className="h-full bg-primary progress-bar-fill shadow-[0_0_15px_rgba(187,0,16,0.6)]" style={{"width":"89%"}}></div>
</div>
</div>
</div>
</div>
<div className="relative">
<div className="absolute -top-12 -left-12 w-64 h-64 bg-primary/20 blur-[100px] rounded-full"></div>
<div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
<img alt="Modern office environment" className="w-full h-[600px] object-cover grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition-all duration-1000 scale-105 hover:scale-100" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAGXOPvLAjfwrdSW5yf1x36RZr3ZUd92W0UkxAg_VP81jOFd3Kj1exXdIivDNbwQJ8IwYPXa4sTp5J-K5A4ZNkgy5X0tyynvds5O5aaygNMyKGmfP2t12YYG0lEZY3gunOUtPQ7McmhFN9qjVi90FoU9vtsGgV4m3PDiclaibmM6iJAU-PFjDEhPA8pgyf6cM17lGKj0t4RvKO9Pryq0D9IO0v3ea3ZYlByuCtjEREsYw4znysmsxaY"/>
</div>
<div className="absolute -bottom-8 -right-8 glass-panel p-8 rounded-xl border border-white/10 max-w-[240px]">
<p className="font-serif italic text-2xl mb-2 text-primary">Precision</p>
<p className="text-[11px] font-label-caps tracking-widest uppercase text-on-surface opacity-70">Over mere aesthetics. Always.</p>
</div>
</div>
</div>
</div>
</section>
{/* CTA Section */}
<section className="max-w-container-max mx-auto px-8 py-32">
<div className="bg-surface-container-high rounded-[2rem] p-16 md:p-24 relative overflow-hidden text-center border border-border-subtle">
<div className="relative z-10 max-w-3xl mx-auto">
<h2 className="font-display-xl text-5xl md:text-6xl mb-8 leading-tight">Stop Guessing. <br/><span className="text-primary italic font-serif">Start Engineering</span> Growth.</h2>
<p className="text-on-surface-variant font-body-lg mb-12 opacity-80">Join the elite brands that treat digital presence as an asset, not an expense.</p>
<div className="flex flex-col sm:flex-row gap-6 justify-center">
<button className="bg-primary text-white px-10 py-5 rounded-full font-button text-[14px] tracking-widest uppercase hover:scale-105 transition-all shadow-xl shadow-primary/20">Book Strategy Audit</button>
<button className="border border-on-background/20 text-on-background px-10 py-5 rounded-full font-button text-[14px] tracking-widest uppercase hover:bg-on-background hover:text-white transition-all">Case Studies</button>
</div>
</div>
</div>
</section>

    </>
  );
}
