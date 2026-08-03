import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 bg-white/70 backdrop-blur-xl border-b border-black/[0.03]">
      <div className="flex justify-between items-center px-8 py-5 max-w-container-max mx-auto">
        <Link href="/" className="flex items-center group">
          <img src="https://pub-6c6783ed8ce64932a9644e8cfd52a4bf.r2.dev/images/logo.png" alt="Kreonex Media" className="h-10 w-auto" />
        </Link>
        <div className="hidden md:flex items-center space-x-10">
          <Link href="/" className="text-on-surface/70 hover:text-on-surface text-sm font-medium transition-all duration-300">Home</Link>
          <Link href="/services" className="text-on-surface/70 hover:text-on-surface text-sm font-medium transition-all duration-300">Services</Link>
          <Link href="/methodology" className="text-on-surface/70 hover:text-on-surface text-sm font-medium transition-all duration-300">How we work</Link>
          <Link href="/portfolio" className="text-on-surface/70 hover:text-on-surface text-sm font-medium transition-all duration-300">Portfolio</Link>
          <Link href="/about" className="text-on-surface/70 hover:text-on-surface text-sm font-medium transition-all duration-300">Studio</Link>
        </div>
        <Link href="/contact" className="bg-primary text-on-primary px-7 py-3 rounded-full hover:shadow-lg hover:shadow-primary/20 active:scale-95 transition-all font-button text-sm tracking-tight inline-block">
          Get in Touch →
        </Link>
      </div>
    </nav>
  );
}
