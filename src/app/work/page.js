export const metadata = {
  title: 'Our Work — Portfolio & Case Studies',
  description: 'Browse our portfolio of cinematic video productions, custom websites, and successful social media campaigns crafted for brands across Siliguri, Darjeeling, North Bengal & Sikkim.',
  alternates: { canonical: 'https://kreonex.com/work' },
  openGraph: {
    title: 'Our Work — Kreonex Media Portfolio',
    description: 'Case studies and portfolio showcasing our video production, web development & social media marketing work.',
    url: 'https://kreonex.com/work',
  },
};

export default function Page() {
  return (
    <>


<nav className="fixed top-0 w-full z-50 bg-surface/90 backdrop-blur-md border-b border-border-subtle shadow-sm">
<div className="flex justify-between items-center px-8 py-4 max-w-container-max mx-auto">
<div className="font-display-xl text-headline-sm tracking-tighter text-on-surface">KREONEX MEDIA</div>
<div className="hidden md:flex items-center space-x-8">
<a className="font-button text-button text-on-surface hover:text-primary transition-all duration-300" href="#">Home</a>
<a className="font-button text-button text-on-surface hover:text-primary transition-all duration-300" href="#">Services</a>
<a className="font-button text-button text-on-surface hover:text-primary transition-all duration-300" href="#">How We Work</a>
<a className="font-button text-button text-primary font-bold border-b-2 border-primary transition-all duration-300" href="#">Work</a>
<a className="font-button text-button text-on-surface hover:text-primary transition-all duration-300" href="#">About</a>
</div>
<button className="font-button text-button bg-primary-container text-on-primary-container px-6 py-3 rounded-full active:scale-95 transition-transform">
                Let's Talk →
            </button>
</div>
</nav>
<main className="pt-32">

<section className="max-w-container-max mx-auto px-8 mb-stack-lg">
<div className="flex flex-col items-start gap-4">
<span className="bg-red-tint text-primary font-label-caps text-label-caps px-4 py-1 rounded-full uppercase tracking-widest">Selected Case Studies</span>
<h1 className="font-display-xl text-display-xl max-w-3xl">Done Projects That Drove Real Revenue</h1>
<p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mt-4">
                    Precision engineering meets creative explosive growth. We don't just build pretty assets; we construct conversion machines that scale businesses.
                </p>
</div>
</section>

<section className="max-w-container-max mx-auto px-8 mb-gutter">
<div className="flex flex-wrap items-center gap-3 border-b border-border-subtle pb-8">
<button className="filter-tab active px-6 py-2 rounded-full border border-border-subtle font-button text-button transition-all duration-300" onClick="filterProjects('all')">All</button>
<button className="filter-tab px-6 py-2 rounded-full border border-border-subtle font-button text-button transition-all duration-300" onClick="filterProjects('web')">Web Dev</button>
<button className="filter-tab px-6 py-2 rounded-full border border-border-subtle font-button text-button transition-all duration-300" onClick="filterProjects('smm')">Reels & SMM</button>
<button className="filter-tab px-6 py-2 rounded-full border border-border-subtle font-button text-button transition-all duration-300" onClick="filterProjects('ads')">Ads & Funnels</button>
<button className="filter-tab px-6 py-2 rounded-full border border-border-subtle font-button text-button transition-all duration-300" onClick="filterProjects('ai')">AI Bots</button>
</div>
</section>

<section className="max-w-container-max mx-auto px-8 pb-section-padding">
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-gutter" id="project-grid">

<div className="project-card group" data-category="web">
<div className="card-inner bg-surface-card border border-border-subtle rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500">
<div className="aspect-[16/10] overflow-hidden">
<img className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" data-alt="A clean, clinical, yet ultra-modern website design for a high-end dental clinic named Odontale. The UI features soft blues, medical whites, and sharp red accents for call-to-actions. The lighting is bright and professional, showcasing high-resolution medical equipment in the background. Minimalist layout with plenty of white space." src="https://lh3.googleusercontent.com/aida-public/AB6AXuBv87iQY7QgB4GCg_K27SxLCNfs47fEyPhp6H6_qIzBdtAmRUdBbUztMpSz5IH99JAtMBJ_dPeO9rkqes5AsgzfxY-m4aikl17Gw_O5sm_01N_AwoJz0hj6zcoor2YYDvHmOB1oySf6DKbJGcNpryvA8ZpyxBXuOOku1-ahxz8aTsgPeJsSjlk-8N0ESuViva5dYP3jUu2qBAv0Rz1M8DVxLK9hzn6sXcCsmZL7GW9ooWrBYP0-09o_"/>
</div>
<div className="p-8">
<span className="text-primary font-label-caps text-label-caps uppercase tracking-widest">Web Development</span>
<h3 className="font-headline-sm text-headline-sm mt-2 mb-4">Odontale Clinic</h3>
<p className="text-on-surface-variant font-body-md mb-6">Redefining medical luxury through high-performance web architecture and conversion-optimized booking flows.</p>
<div className="flex items-center gap-2 text-primary font-button group-hover:gap-4 transition-all">
<span>View Case Study</span>
<span className="material-symbols-outlined">arrow_forward</span>
</div>
</div>
</div>
</div>

<div className="project-card group" data-category="smm">
<div className="card-inner bg-surface-card border border-border-subtle rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500">
<div className="aspect-[16/10] overflow-hidden">
<img className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" data-alt="A dynamic, lifestyle-focused social media feed for Urban Saajh, a contemporary fashion brand. The imagery is vibrant, featuring models in urban settings with motion-blurred street backgrounds. Deep blacks and electric red accents define the high-contrast aesthetic. The mood is energetic, youthful, and high-fashion." src="https://lh3.googleusercontent.com/aida-public/AB6AXuA-QhCSk-dLKaQFnw0EYsJtCS7WUPSa0-nqFjah9eqd-a8hdJ5dkmVNARkCNREUI0qG67gw_tAOU_lSYB_gWp4n0siWkb_gCEBZC_PbnLCcUrzPukrTuoYKdwq_x532QjdH63tBd0TLCu_r8W0QeDmrxiJtyCw-FY1fZlHQ4rrpn7mqgsqD-3ZBD1EXdZ50AOjG-ECiA1i3tpD2ibyj9QFAPaLmqBThmbVb4fAZ8dU14v_si-5pUCls"/>
</div>
<div className="p-8">
<span className="text-primary font-label-caps text-label-caps uppercase tracking-widest">Reels & SMM</span>
<h3 className="font-headline-sm text-headline-sm mt-2 mb-4">Urban Saajh</h3>
<p className="text-on-surface-variant font-body-md mb-6">Viral content engineering that transformed a local fashion house into an urban streetwear powerhouse.</p>
<div className="flex items-center gap-2 text-primary font-button group-hover:gap-4 transition-all">
<span>View Case Study</span>
<span className="material-symbols-outlined">arrow_forward</span>
</div>
</div>
</div>
</div>

<div className="project-card group" data-category="ads">
<div className="card-inner bg-surface-card border border-border-subtle rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500">
<div className="aspect-[16/10] overflow-hidden">
<img className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" data-alt="Close-up, appetizing food photography of a steaming ramen bowl in a dark, moody restaurant setting. Neon red lighting accents highlight the steam and texture of the ingredients. The style is cinematic and high-end, focusing on the quality and craftsmanship of the dish. Professional lighting emphasizes rich colors and steam." src="https://lh3.googleusercontent.com/aida-public/AB6AXuCOVwDRhMjvyDTracL2hUXxitDDw9HRohPeE4i_KBSgVOCfvEG09ZvQAMXisTgwaKczkA0J_C0YABEXDaS7l08_IEkN9IRkIxyySMOfqzgO09M8RD3mpkKZmXOlmbwXqFKHSmMafwn2KI2CLz5Dmp9bY-k2CFy25m4p-ZK1F5_Gj_LOwru6tU_I1HZzhbL_XxWJdwz8RUJ6rdj5daSP53P_lGpPAfLVVLXIK7uIp0EC-XjKUO7zyS3o"/>
</div>
<div className="p-8">
<span className="text-primary font-label-caps text-label-caps uppercase tracking-widest">Ads & Funnels</span>
<h3 className="font-headline-sm text-headline-sm mt-2 mb-4">Ramen Bowl</h3>
<p className="text-on-surface-variant font-body-md mb-6">Engineered paid-ad funnels that delivered a 4.5x ROAS by targeting culinary enthusiasts with cinematic creative.</p>
<div className="flex items-center gap-2 text-primary font-button group-hover:gap-4 transition-all">
<span>View Case Study</span>
<span className="material-symbols-outlined">arrow_forward</span>
</div>
</div>
</div>
</div>

<div className="project-card group" data-category="web">
<div className="card-inner bg-surface-card border border-border-subtle rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500">
<div className="aspect-[16/10] overflow-hidden">
<img className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" data-alt="A sophisticated E-commerce dashboard and storefront for WearUp India. The interface uses a clean, grid-based layout with high-quality product shots of athletic wear. Monochrome color palette with electric red highlights on sales tags and buttons. The look is sleek, athletic, and high-performance." src="https://lh3.googleusercontent.com/aida-public/AB6AXuB-KuNXwh_EArCdlM5TsZ_hulh0JTjT22VCiqJoVGAjHyMDJ8gSPNcDANvAAbzs-Wp0Hg9M6SzLPZHSkmP3WlTIS_OZNwD3hgTJAz9L9wcznyUdVY22959_HZ9l4AoyX_C9aiThGfPyNQi0EtOalxyHsN1pKfcyCjnZiSYgRVB47QgjtJPD2ODI3nHwYALDdK-gQQmGXlaXhHWqkc-nFXWvEUjMn0hkF6zBpU2i7u3Jmb3wu0WLNwWP"/>
</div>
<div className="p-8">
<span className="text-primary font-label-caps text-label-caps uppercase tracking-widest">Web Development</span>
<h3 className="font-headline-sm text-headline-sm mt-2 mb-4">WearUp India</h3>
<p className="text-on-surface-variant font-body-md mb-6">Scale-ready Shopify custom architecture designed for high-traffic drop events and seamless checkout.</p>
<div className="flex items-center gap-2 text-primary font-button group-hover:gap-4 transition-all">
<span>View Case Study</span>
<span className="material-symbols-outlined">arrow_forward</span>
</div>
</div>
</div>
</div>

<div className="project-card group" data-category="ai">
<div className="card-inner bg-surface-card border border-border-subtle rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500">
<div className="aspect-[16/10] overflow-hidden relative">
<div className="absolute inset-0 bg-inverse-surface/10 backdrop-blur-[2px] z-10"></div>
<img className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" data-alt="A futuristic AI interface featuring flowing data nodes and a friendly, minimalist chatbot avatar for a career guidance platform. The background is a soft pearl white with translucent glassmorphic windows showing metrics and advice snippets. Soft red glowing edges indicate system activity. High-tech and human-centric." src="https://lh3.googleusercontent.com/aida-public/AB6AXuCY4blkwDJbR6H-QzKpDb965QeSPFhCNJ1DqAPjd8bPFS6QvqoDP33nnvXoxyx6ZPRqcC5ma9URaySnDRVdPQPfRheuqhNLleK4AcRWbNkrbBeLAYyGgBiTRrABDZUfBkYYF_PM8aWeB_w16Ex-rys-S7ADBDkv6mFhiAbzlxJQmBpqGPh5GqWgYWzGfIDudnKmu-zFrfuacODvDKGkKfEaY_J5ysRVPMgi8VyV9b7tOu9stuYbPK-c"/>
</div>
<div className="p-8">
<span className="text-primary font-label-caps text-label-caps uppercase tracking-widest">AI Bots</span>
<h3 className="font-headline-sm text-headline-sm mt-2 mb-4">Start Early</h3>
<p className="text-on-surface-variant font-body-md mb-6">Custom LLM-powered advisory bot that automated 70% of student queries while maintaining a 98% satisfaction rate.</p>
<div className="flex items-center gap-2 text-primary font-button group-hover:gap-4 transition-all">
<span>View Case Study</span>
<span className="material-symbols-outlined">arrow_forward</span>
</div>
</div>
</div>
</div>

<div className="project-card group" data-category="ads">
<div className="card-inner bg-surface-card border border-border-subtle rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500">
<div className="aspect-[16/10] overflow-hidden">
<img className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" data-alt="A grand, luxury wedding catering setup with elegant floral arrangements and tiered food displays. The lighting is warm and golden, creating a sense of premium celebration. The composition highlights the scale and detail of the event design. Corporate yet festive, with a focus on high-end service aesthetics." src="https://lh3.googleusercontent.com/aida-public/AB6AXuADFxlUWWTWRAOGQ8UApnNE4UQ34TEj4vTk2VLVVPnRgrNzxg-3WBtHptDr0RlQbBCJfZroNwF4KrKriuRtHSf3Da__4eTSUBv12zs6O4eQnjJUFbnQNYhJMYLi2pQUL99Ltme46S1DaJsd0UHOUQIQ8cGPwokJ-OXZTazCdg32cT3SbfXHI5AeZzOF3HzTBs9WmVwR36m95HXJKMqmCAz7v6dmPw-4Vf8gewpsws-yY6hp6RlQ-C26"/>
</div>
<div className="p-8">
<span className="text-primary font-label-caps text-label-caps uppercase tracking-widest">Ads & Funnels</span>
<h3 className="font-headline-sm text-headline-sm mt-2 mb-4">Upahar Caterer</h3>
<p className="text-on-surface-variant font-body-md mb-6">Strategic B2B lead generation campaign that secured exclusive venue partnerships and high-ticket corporate contracts.</p>
<div className="flex items-center gap-2 text-primary font-button group-hover:gap-4 transition-all">
<span>View Case Study</span>
<span className="material-symbols-outlined">arrow_forward</span>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="max-w-container-max mx-auto px-8 mb-section-padding">
<div className="bg-inverse-surface rounded-3xl p-16 text-center relative overflow-hidden">

<div className="absolute -top-24 -right-24 w-96 h-96 bg-primary opacity-10 blur-[100px] rounded-full"></div>
<div className="absolute -bottom-24 -left-24 w-96 h-96 bg-primary opacity-10 blur-[100px] rounded-full"></div>
<h2 className="font-headline-lg text-headline-lg text-inverse-on-surface relative z-10">Your Project Could Be Next</h2>
<p className="font-body-lg text-body-lg text-surface-variant max-w-2xl mx-auto mt-6 relative z-10">
                    Ready to stop guessing and start growing? Let's build a data-driven strategy tailored to your brand's unique DNA.
                </p>
<div className="mt-10 relative z-10 flex flex-col sm:flex-row justify-center gap-4">
<button className="bg-primary hover:bg-primary-container text-white px-10 py-4 rounded-full font-button text-button transition-all">Book Strategy Call</button>
<button className="border border-outline-variant text-inverse-on-surface px-10 py-4 rounded-full font-button text-button hover:bg-white/5 transition-all">Download Media Kit</button>
</div>
</div>
</section>
</main>

<footer className="w-full py-section-padding px-8 bg-surface-container-lowest border-t border-border-subtle">
<div className="grid grid-cols-1 md:grid-cols-4 gap-gutter max-w-container-max mx-auto">
<div className="col-span-1 md:col-span-1">
<div className="font-display-xl text-headline-md text-on-surface mb-6">KREONEX MEDIA</div>
<p className="text-on-surface-variant font-body-md">Engineered Creativity. We build the future of digital presence through technical precision and creative audacity.</p>
</div>
<div>
<h4 className="font-label-caps text-label-caps mb-6 uppercase tracking-widest text-primary">Company</h4>
<ul className="space-y-4">
<li><a className="font-body-md text-on-surface-variant hover:text-primary transition-colors" href="#">Services</a></li>
<li><a className="font-body-md text-on-surface-variant hover:text-primary transition-colors" href="#">How We Work</a></li>
<li><a className="font-body-md text-primary font-bold" href="#">Work</a></li>
<li><a className="font-body-md text-on-surface-variant hover:text-primary transition-colors" href="#">About</a></li>
</ul>
</div>
<div>
<h4 className="font-label-caps text-label-caps mb-6 uppercase tracking-widest text-primary">Contact</h4>
<ul className="space-y-4">
<li><a className="font-body-md text-on-surface-variant hover:text-primary transition-colors" href="#">Instagram</a></li>
<li><a className="font-body-md text-on-surface-variant hover:text-primary transition-colors" href="#">Facebook</a></li>
<li><a className="font-body-md text-on-surface-variant hover:text-primary transition-colors" href="#">LinkedIn</a></li>
<li><a className="font-body-md text-on-surface-variant hover:text-primary transition-colors" href="#">YouTube</a></li>
</ul>
</div>
<div>
<h4 className="font-label-caps text-label-caps mb-6 uppercase tracking-widest text-primary">Newsletter</h4>
<p className="font-body-md text-on-surface-variant mb-4">Get the latest insights on digital growth.</p>
<div className="flex">
<input className="w-full bg-surface-pearl border border-border-subtle px-4 py-2 rounded-l-lg focus:outline-none focus:border-primary" placeholder="email@example.com" type="email"/>
<button className="bg-primary text-white px-4 py-2 rounded-r-lg hover:bg-primary-container transition-all">Join</button>
</div>
</div>
</div>
<div className="max-w-container-max mx-auto mt-20 pt-8 border-t border-border-subtle text-center">
<p className="font-body-md text-on-surface-variant">© 2024 KREONEX MEDIA. Engineered Creativity.</p>
</div>
</footer>


    </>
  );
}
