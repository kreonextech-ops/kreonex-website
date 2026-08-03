import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-on-background text-white pt-24 pb-12 px-8 relative overflow-hidden">
      {/* Subtle Background Elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent opacity-30"></div>
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-container-max mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-16 mb-24">
          <div className="md:col-span-8">
            <div className="mb-8">
              <img src="https://pub-6c6783ed8ce64932a9644e8cfd52a4bf.r2.dev/images/logo.png" alt="Kreonex Media" className="h-16 w-auto brightness-0 invert" />
            </div>
            <p className="text-white/60 max-w-sm mb-10 leading-relaxed text-sm">
              Engineering creativity for high-growth brands that refuse to blend in.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-12">
              <div>
                <h4 className="font-label-caps text-[10px] tracking-widest text-primary uppercase mb-3 opacity-80">Headquarters</h4>
                <p className="text-white/70 text-sm leading-relaxed">Siliguri, West Bengal<br/>Bagdogra</p>
              </div>
              <div>
                <h4 className="font-label-caps text-[10px] tracking-widest text-primary uppercase mb-3 opacity-80">Service Areas</h4>
                <p className="text-white/70 text-sm leading-relaxed">North Bengal (Darjeeling,<br/>Siliguri & surrounding), Sikkim</p>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-8">
              <a className="group flex items-center gap-3 text-sm font-bold font-label-caps tracking-widest text-white/60 hover:text-white transition-colors" href="https://instagram.com/kreonex_media" target="_blank" rel="noreferrer">
                <span className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center group-hover:border-primary group-hover:text-primary transition-colors">IG</span>
                <span>INSTAGRAM</span>
              </a>
              <a className="group flex items-center gap-3 text-sm font-bold font-label-caps tracking-widest text-white/60 hover:text-white transition-colors" href="https://share.google/0TL1TMeZHkNte5VPz" target="_blank" rel="noreferrer">
                <span className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center group-hover:border-primary group-hover:text-primary transition-colors">G</span>
                <span>GOOGLE</span>
              </a>
              <a className="group flex items-center gap-3 text-sm font-bold font-label-caps tracking-widest text-white/60 hover:text-white transition-colors" href="mailto:info@kreonex.com">
                <span className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center group-hover:border-primary group-hover:text-primary transition-colors">
                  <span className="material-symbols-outlined text-[14px]">mail</span>
                </span>
                <span>EMAIL US</span>
              </a>
            </div>
          </div>
          
          <div className="md:col-span-4">
            <h4 className="font-label-caps text-[11px] text-white/40 mb-8 tracking-[0.3em]">DIRECTORY</h4>
            <ul className="space-y-6">
              <li><Link className="text-sm font-medium text-white/70 hover:text-primary hover:translate-x-1 inline-block transition-all" href="/services">Our Services</Link></li>
              <li><Link className="text-sm font-medium text-white/70 hover:text-primary hover:translate-x-1 inline-block transition-all" href="/methodology">How we work</Link></li>
              <li><Link className="text-sm font-medium text-white/70 hover:text-primary hover:translate-x-1 inline-block transition-all" href="/portfolio">Selected Works</Link></li>
              <li><Link className="text-sm font-medium text-white/70 hover:text-primary hover:translate-x-1 inline-block transition-all" href="/contact">Contact</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-xs text-white/40">© 2026 KREONEX MEDIA. ALL RIGHTS RESERVED.</p>
          <div className="flex items-center gap-3 bg-white/5 px-4 py-2 rounded-full border border-white/5">
            <div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse shadow-[0_0_10px_rgba(34,197,94,0.5)]"></div>
            <p className="font-label-caps text-[9px] text-white/60 tracking-widest">STUDIO STATUS: ACCEPTING NEW PROJECTS</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
