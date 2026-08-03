import Link from 'next/link';
import { notFound } from 'next/navigation';
import { projects } from '../../../data/projects';

export async function generateMetadata({ params }) {
  const resolvedParams = await params;
  const project = projects.find(p => p.slug === resolvedParams.slug);
  if (!project) return { title: 'Project Not Found' };
  return {
    title: `${project.title} — Case Study`,
    description: `${project.description || project.categoryLabel + ' project by Kreonex Media'}. See how we delivered results for ${project.title} through ${project.categoryLabel}.`,
    alternates: { canonical: `https://kreonex.com/work/${project.slug}` },
    openGraph: {
      title: `${project.title} — Kreonex Media Case Study`,
      description: `${project.categoryLabel} project by Kreonex Media, Siliguri.`,
      url: `https://kreonex.com/work/${project.slug}`,
    },
  };
}

export default async function CaseStudyPage({ params }) {
  const resolvedParams = await params;
  const project = projects.find(p => p.slug === resolvedParams.slug);

  if (!project) {
    notFound();
  }

  return (
    <>
      <main className="min-h-screen bg-surface">
        {/* Hero Section */}
        <section className="px-8 pb-16 pt-8">
          <div className="max-w-container-max mx-auto text-center">
            <span className="text-primary font-label-caps text-sm font-bold tracking-widest mb-6 block bg-primary/5 px-4 py-1.5 rounded-md w-max mx-auto">{project.categoryLabel}</span>
            <h1 className="font-display-xl text-[64px] md:text-[96px] font-black tracking-tighter text-on-surface mb-12 leading-none">
              {project.title}
            </h1>
          </div>
        </section>

        {/* Big Image */}
        <section className="px-8 mb-24">
          <div className="max-w-container-max mx-auto">
            <div className="w-full h-[60vh] md:h-[80vh] rounded-[40px] overflow-hidden shadow-2xl relative">
              <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
            </div>
          </div>
        </section>

        {/* Content Section */}
        <section className="px-8 pb-32">
          <div className="max-w-container-max mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16">
            
            {/* Overview */}
            <div className="lg:col-span-8">
              <h2 className="font-headline-sm text-3xl font-black mb-6 text-on-surface">The Challenge & Overview</h2>
              <p className="text-on-surface-variant text-xl leading-relaxed mb-12 font-medium">
                {project.description}
              </p>
              
              <h2 className="font-headline-sm text-3xl font-black mb-6 text-on-surface">Tech Stack & Details</h2>
              <ul className="flex flex-wrap gap-4">
                {project.stack.map((item, idx) => (
                  <li key={idx} className="bg-white border border-black/5 px-6 py-3 rounded-full text-sm font-bold text-on-surface shadow-sm hover:border-primary/30 transition-colors">
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Sidebar Details */}
            <div className="lg:col-span-4 bg-white p-10 rounded-[32px] border border-black/5 shadow-sm h-max">
              <h3 className="font-label-caps text-xs text-primary tracking-widest font-bold mb-8">RESULTS</h3>
              
              <div className="flex flex-col gap-6 mb-10">
                {project.results.map((res, i) => (
                  <div key={i} className="flex flex-col border-b border-black/5 pb-4 last:border-0 last:pb-0">
                    <span className="text-on-surface-variant text-sm font-bold mb-1 uppercase tracking-wider">{res.label}</span>
                    <span className="text-on-surface text-2xl font-black">{res.value}</span>
                  </div>
                ))}
              </div>

              {project.liveUrl !== '#' && (
                <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="w-full bg-primary text-white font-button py-5 px-6 rounded-2xl flex items-center justify-center gap-3 hover:bg-red-800 transition-colors shadow-xl shadow-primary/20">
                  <span>Visit Live Site</span>
                  <span className="material-symbols-outlined">open_in_new</span>
                </a>
              )}
            </div>
          </div>
        </section>

        {/* Back Button */}
        <section className="px-8 pb-32">
          <div className="max-w-container-max mx-auto border-t border-black/5 pt-12 text-center">
             <Link href="/portfolio" className="inline-flex items-center gap-3 text-on-surface font-button hover:text-primary transition-colors border border-black/10 px-8 py-4 rounded-full hover:border-primary/30">
               <span className="material-symbols-outlined">arrow_back</span>
               <span>Back to Portfolio</span>
             </Link>
          </div>
        </section>
      </main>
    </>
  );
}

export function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}
