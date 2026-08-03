
export const metadata = {
  title: 'How We Work — Our Growth Process',
  description: 'Discover our tailored approach to digital growth. From strategy and design to development and marketing — see how Kreonex Media delivers results for brands in Siliguri, North Bengal & Sikkim.',
  alternates: { canonical: 'https://kreonex.com/methodology' },
  openGraph: {
    title: 'How We Work — Kreonex Media',
    description: 'Our precision-engineered process for website development, video production & social media growth.',
    url: 'https://kreonex.com/methodology',
  },
};

export default function Page() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative px-8 pt-12 pb-16 md:pt-16 md:pb-24 max-w-container-max mx-auto overflow-hidden">
        <div className="absolute inset-0 bg-primary/5 blur-[120px] rounded-full -z-10 mix-blend-multiply"></div>
        <div className="max-w-4xl mx-auto text-center">
          <span className="inline-block font-label-caps text-sm font-bold tracking-widest text-primary bg-primary/10 px-4 py-2 rounded-full mb-6 uppercase">HOW WE WORK</span>
          <h1 className="font-display-xl text-[48px] md:text-[64px] lg:text-[80px] font-black mb-6 leading-[1] tracking-tight text-on-surface">
            No One-Size-Fits-All <br/> <span className="italic text-primary">Package.</span>
          </h1>
          <p className="text-lg md:text-xl text-on-surface-variant/80 font-medium max-w-3xl mx-auto leading-relaxed">
            We don't force a pre-made template on your business. Growth looks different for everyone—some need a fast Next.js website, others need viral Reels, high-ROAS Meta Ads, or 24/7 WhatsApp AI automation. We build exactly what <strong className="text-on-surface">YOU</strong> actually need.
          </p>
        </div>
      </section>

      {/* Process Section - Light Theme */}
      <section className="px-8 py-24 md:py-32 bg-surface-container-low border-y border-black/[0.03]">
        <div className="max-w-container-max mx-auto">
          <div className="mb-16 md:mb-24 text-center md:text-left flex flex-col md:flex-row justify-between items-end gap-8">
             <div>
                <h2 className="font-display-xl text-[40px] md:text-[56px] font-black leading-tight tracking-tight text-on-surface">The <span className="text-primary italic">Blueprint.</span></h2>
             </div>
             <p className="text-on-surface-variant/80 text-base max-w-md font-medium">A precision-engineered process designed to eliminate guesswork and maximize ROI from day one.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* STEP 01 */}
            <div className="group bg-surface-card border border-border-subtle p-8 md:p-10 rounded-xl hover:shadow-xl hover:border-primary/20 transition-all duration-500 relative overflow-hidden flex flex-col h-full">
              <span className="absolute -top-4 -right-4 font-display-xl text-[120px] font-black opacity-[0.03] text-on-surface group-hover:text-primary pointer-events-none transition-colors duration-500">01</span>
              <div className="mb-8">
                <span className="material-symbols-outlined text-primary text-4xl group-hover:scale-110 transition-transform">search</span>
              </div>
              <h3 className="text-2xl font-black mb-4 tracking-tight text-on-surface">Deep Dive & Discovery</h3>
              <p className="text-base text-on-surface-variant/80 font-medium leading-relaxed flex-grow">
                We sit down with you, listen, and dissect your actual business bottlenecks—not just your social media stats. We find where the money is leaking.
              </p>
              <div className="mt-8 pt-6 border-t border-black/5">
                <span className="font-label-caps text-xs font-bold tracking-widest text-primary uppercase">PHASE: ANALYSIS</span>
              </div>
            </div>

            {/* STEP 02 */}
            <div className="group bg-surface-card border border-border-subtle p-8 md:p-10 rounded-xl hover:shadow-xl hover:border-primary/20 transition-all duration-500 relative overflow-hidden flex flex-col h-full">
              <span className="absolute -top-4 -right-4 font-display-xl text-[120px] font-black opacity-[0.03] text-on-surface group-hover:text-primary pointer-events-none transition-colors duration-500">02</span>
              <div className="mb-8">
                <span className="material-symbols-outlined text-primary text-4xl group-hover:scale-110 transition-transform">architecture</span>
              </div>
              <h3 className="text-2xl font-black mb-4 tracking-tight text-on-surface">Custom Blueprinting</h3>
              <p className="text-base text-on-surface-variant/80 font-medium leading-relaxed flex-grow">
                No bloated retainers for things you don't use. We assemble a tailored growth plan specific to your revenue goal and budget.
              </p>
              <div className="mt-8 pt-6 border-t border-black/5">
                <span className="font-label-caps text-xs font-bold tracking-widest text-primary uppercase">PHASE: STRATEGY</span>
              </div>
            </div>

            {/* STEP 03 */}
            <div className="group bg-surface-card border border-border-subtle p-8 md:p-10 rounded-xl hover:shadow-xl hover:border-primary/20 transition-all duration-500 relative overflow-hidden flex flex-col h-full">
              <span className="absolute -top-4 -right-4 font-display-xl text-[120px] font-black opacity-[0.03] text-on-surface group-hover:text-primary pointer-events-none transition-colors duration-500">03</span>
              <div className="mb-8">
                <span className="material-symbols-outlined text-primary text-4xl group-hover:scale-110 transition-transform">precision_manufacturing</span>
              </div>
              <h3 className="text-2xl font-black mb-4 tracking-tight text-on-surface">Precision Execution</h3>
              <p className="text-base text-on-surface-variant/80 font-medium leading-relaxed flex-grow">
                Our core team builds, shoots, codes, and launches your campaigns with zero outsourced middle-men. Pure, undiluted quality.
              </p>
              <div className="mt-8 pt-6 border-t border-black/5">
                <span className="font-label-caps text-xs font-bold tracking-widest text-primary uppercase">PHASE: BUILD</span>
              </div>
            </div>

            {/* STEP 04 */}
            <div className="group bg-surface-card border border-border-subtle p-8 md:p-10 rounded-xl hover:shadow-xl hover:border-primary/20 transition-all duration-500 relative overflow-hidden flex flex-col h-full">
              <span className="absolute -top-4 -right-4 font-display-xl text-[120px] font-black opacity-[0.03] text-on-surface group-hover:text-primary pointer-events-none transition-colors duration-500">04</span>
              <div className="mb-8">
                <span className="material-symbols-outlined text-primary text-4xl group-hover:scale-110 transition-transform">monitoring</span>
              </div>
              <h3 className="text-2xl font-black mb-4 tracking-tight text-on-surface">Measure & Scale</h3>
              <p className="text-base text-on-surface-variant/80 font-medium leading-relaxed flex-grow">
                We track real business outcomes—cost per lead, conversions, and direct sales—and refine the system continuously to scale your profits.
              </p>
              <div className="mt-8 pt-6 border-t border-black/5">
                <span className="font-label-caps text-xs font-bold tracking-widest text-primary uppercase">PHASE: GROWTH</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Visual Proof Section */}
      <section className="px-8 py-32 max-w-container-max mx-auto overflow-hidden">
        <div className="flex flex-col lg:flex-row gap-20 items-center">
          <div className="w-full lg:w-1/2">
            <div className="relative">
              <div className="absolute -top-10 -left-10 w-64 h-64 bg-primary/20 rounded-full filter blur-[100px] opacity-50"></div>
              <img className="w-full aspect-[4/3] object-cover rounded-[40px] border border-black/5 shadow-2xl relative z-10" alt="Workspace" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCN9MLEdEa2CaANYFEsIizY5YePcxDUsdeIZaAmkNfMZjDFLcWTVgQowOE2_q988-cVhITYnrE0BWvIE6Z3AwfXLLkdQtRHA9ZAei2xutOyrOySFnXc9BbKFlGXu_uAVhEFpCB6r_E-j5_c8c2fOfJM9oBGJbvKVBgB-QJayUMY9UeNMhcZECT-pP0doKNioAUe4tNSNsT7Adx686vmAgPX8KrYXp1S-XzTnB_CC86jN0vIU0jtnq1i"/>
            </div>
          </div>
          <div className="w-full lg:w-1/2 space-y-8">
            <span className="font-label-caps text-sm font-bold tracking-widest text-primary bg-primary/5 px-4 py-1.5 rounded-md inline-block uppercase">THE KREONEX EDGE</span>
            <h2 className="font-display-xl text-[40px] md:text-[56px] font-black leading-tight tracking-tight">Engineered for absolute impact.</h2>
            <p className="text-on-surface-variant/80 text-lg font-medium leading-relaxed">
              We bridge the gap between "creative" and "technical." Every reel we shoot is optimized for retention; every line of code we write is built for conversion. We are not just an agency; we are your external growth engineering department.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 pt-6">
              <div className="p-8 bg-surface-pearl border border-black/5 rounded-[32px] flex-1 hover:border-primary/30 transition-colors">
                <div className="text-primary text-5xl font-black mb-4">0%</div>
                <div className="font-label-caps text-xs font-bold tracking-widest uppercase">OUTSOURCING</div>
              </div>
              <div className="p-8 bg-surface-pearl border border-black/5 rounded-[32px] flex-1 hover:border-primary/30 transition-colors">
                <div className="text-primary text-5xl font-black mb-4">24/7</div>
                <div className="font-label-caps text-xs font-bold tracking-widest uppercase">AI MONITORING</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="px-8 py-32 bg-primary text-white relative overflow-hidden rounded-[3rem] mx-4 md:mx-8 mb-8">
        <div className="absolute inset-0 bg-black/10 mix-blend-overlay"></div>
        <div className="relative z-10 max-w-4xl mx-auto text-center space-y-8">
          <h2 className="font-display-xl text-[40px] md:text-[64px] font-black tracking-tight leading-tight text-white">Ready to engineer your growth?</h2>
          <p className="text-lg md:text-xl text-white/80 font-medium max-w-2xl mx-auto">
            Stop guessing. Start building a system that actually works. Let’s talk about your custom blueprint today.
          </p>
          <div className="pt-8">
            <button className="bg-white text-on-surface px-12 py-6 rounded-full font-bold text-lg hover:scale-105 transition-all duration-500 shadow-2xl">
              Book Strategy Call
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
