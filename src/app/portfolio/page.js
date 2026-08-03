import Link from 'next/link';
import { projects } from '../../data/projects';
import VaultGrid from '../../components/VaultGrid';

export const metadata = {
  title: 'Portfolio | Kreonex Media',
  description: 'An archive of our cinematic production, AI media generation, and behind-the-scenes engineering.',
};

export default function PortfolioPage() {
  return (
    <main className="min-h-screen bg-surface text-on-surface selection:bg-primary selection:text-white pt-32 pb-24 px-8">
      <div className="max-w-[1400px] mx-auto">
        
        {/* Header Section */}
        <div className="mb-20 text-center md:text-left">
          <Link href="/" className="inline-flex items-center gap-2 text-on-surface/60 hover:text-primary transition-colors text-sm font-bold uppercase tracking-widest mb-12">
            <span className="material-symbols-outlined !text-base">arrow_back</span> Return to Base
          </Link>
          <h1 className="font-display-xl text-[64px] md:text-[96px] font-black tracking-tighter leading-none mb-6 text-on-surface">
            Our <span className="italic text-primary">Portfolio.</span>
          </h1>
          <p className="text-on-surface-variant text-xl max-w-2xl font-medium leading-relaxed mx-auto md:mx-0">
            A curated archive of our engineered case studies, cinematic production, AI media generation, and raw behind-the-scenes engineering.
          </p>
        </div>

        {/* 6 Containers - Light Theme */}
        <div className="mb-32">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <Link key={project.id} href={`/work/${project.slug}`} className="group block bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 border border-black/5">
                {/* Image Section */}
                <div className="relative aspect-[4/3] overflow-hidden bg-surface-variant">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
                  />
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-4 py-1.5 rounded-full shadow-sm">
                    <span className="text-xs font-bold text-on-surface uppercase tracking-wider">{project.categoryLabel}</span>
                  </div>
                </div>
                
                {/* Information Section */}
                <div className="p-8">
                  <h3 className="text-2xl font-black text-on-surface mb-3 group-hover:text-primary transition-colors">{project.title}</h3>
                  <p className="text-on-surface-variant font-medium leading-relaxed text-sm mb-6">
                    {project.shortDescription}
                  </p>
                  
                  <div className="pt-6 border-t border-black/5 flex items-center justify-between">
                    <span className="text-xs font-bold text-on-surface-variant uppercase tracking-widest">{project.timeline}</span>
                    <span className="material-symbols-outlined text-primary group-hover:translate-x-1 transition-transform">
                      arrow_forward
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Vault Section Below */}
        <div className="mt-32 border-t border-surface/10 pt-16">
          <h2 className="font-display-xl text-[32px] md:text-[48px] font-black tracking-tighter mb-12">
            The <span className="text-primary italic">Vault.</span>
          </h2>
          <VaultGrid />
        </div>

      </div>
    </main>
  );
}
