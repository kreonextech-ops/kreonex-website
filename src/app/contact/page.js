"use client";

import { useState } from 'react';

export default function Page() {
  const [status, setStatus] = useState('idle');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');

    const formData = new FormData(e.target);
    const data = {
      name: formData.get('name'),
      contact: formData.get('contact'),
      brief: formData.get('brief'),
    };

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (res.ok) {
        setStatus('success');
        e.target.reset();
      } else {
        setStatus('error');
      }
    } catch (err) {
      setStatus('error');
    }
  };

  return (
    <>
      
<div className="max-w-container-max mx-auto px-8">
{/* Hero Header */}
<header className="mb-20 text-center lg:text-left">
<div className="inline-block px-4 py-1 bg-red-tint text-primary font-label-caps text-label-caps mb-6">PRO EDITION CONTACT</div>
<h1 className="font-display-xl text-display-xl max-w-4xl">Ready for takeoff?</h1>
<p className="font-body-lg text-body-lg text-on-surface-variant mt-6 max-w-2xl mx-auto lg:mx-0">
                    High-impact results start with a simple conversation. Share your vision, and we'll engineer the growth strategy to match.
                </p>
</header>
<div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter items-start">
{/* Left Column: Contact Info & Studio */}
<div className="lg:col-span-5 space-y-stack-md">
{/* Our Studio: Pro Edition */}
<div className="bg-white border border-border-subtle overflow-hidden pro-card-shadow group relative p-8">
<div className="mb-6 flex items-center gap-3 inline-flex bg-surface-pearl px-4 py-2 border border-border-subtle">
<span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
<span className="font-label-caps text-[10px] uppercase tracking-widest text-on-surface">Live in West Bengal</span>
</div>
<h3 className="font-headline-sm text-headline-sm mb-4">The Engine Room</h3>
<div className="flex items-center gap-4 text-on-surface-variant">
<span className="material-symbols-outlined text-primary" data-icon="pin_drop">pin_drop</span>
<p className="font-body-md">Bagdogra, Siliguri, West Bengal</p>
</div>
</div>
{/* Communication Cards */}
<div className="grid grid-cols-1 md:grid-cols-2 gap-stack-md">
<a className="block bg-surface-pearl border border-border-subtle p-6 hover:border-primary transition-all duration-300 group" href="mailto:info@kreonex.com">
<div className="flex items-center justify-between mb-8">
<span className="material-symbols-outlined text-primary text-3xl" data-icon="alternate_email">alternate_email</span>
<span className="material-symbols-outlined text-on-surface-variant opacity-0 group-hover:opacity-100 transition-all -translate-x-4 group-hover:translate-x-0" data-icon="arrow_outward">arrow_outward</span>
</div>
<h4 className="font-label-caps text-label-caps text-on-surface-variant mb-2 uppercase">Official Inquiries</h4>
<p className="font-headline-sm text-lg font-bold">info@kreonex.com</p>
</a>
<a className="block bg-surface-pearl border border-border-subtle p-6 hover:border-[#25D366] hover:bg-[#25D366]/5 transition-all duration-300 group" href="https://wa.me/916296103605" target="_blank" rel="noreferrer">
<div className="flex items-center justify-between mb-8">
<span className="material-symbols-outlined text-primary text-3xl group-hover:text-[#25D366] transition-colors" data-icon="chat_bubble">chat_bubble</span>
<span className="material-symbols-outlined text-on-surface-variant opacity-0 group-hover:opacity-100 transition-all -translate-x-4 group-hover:translate-x-0" data-icon="arrow_outward">arrow_outward</span>
</div>
<h4 className="font-label-caps text-label-caps text-on-surface-variant mb-2 uppercase group-hover:text-[#25D366]">WhatsApp Support</h4>
<p className="font-headline-sm text-lg font-bold">+91 6296103605</p>
</a>
</div>
{/* Social Presence */}
<div className="pt-8 flex items-center gap-8">
<span className="font-label-caps text-label-caps text-on-surface-variant uppercase whitespace-nowrap">Follow Journey</span>
<div className="h-px bg-border-subtle w-full"></div>
<div className="flex gap-4">
<a className="w-10 h-10 border border-border-subtle flex items-center justify-center hover:bg-primary hover:text-white transition-all" href="https://instagram.com/kreonex_media" target="_blank" rel="noreferrer"><span className="font-label-caps text-[12px]">IG</span></a>
<a className="w-10 h-10 border border-border-subtle flex items-center justify-center hover:bg-primary hover:text-white transition-all" href="https://share.google/0TL1TMeZHkNte5VPz" target="_blank" rel="noreferrer"><span className="font-label-caps text-[12px]">G</span></a>
<a className="w-10 h-10 border border-border-subtle flex items-center justify-center hover:bg-primary hover:text-white transition-all" href="#"><span className="font-label-caps text-[12px]">LN</span></a>
</div>
</div>
</div>
{/* Right Column: Lead Capture Form */}
<div className="lg:col-span-7">
<div className="bg-white border border-border-subtle p-8 md:p-14 pro-card-shadow relative overflow-hidden">
<div className="absolute top-0 left-0 w-1 h-full bg-primary"></div>
<div className="mb-10">
<h2 className="font-headline-md text-headline-md mb-2">Kickstart Engagement</h2>
<p className="text-on-surface-variant font-body-md">Tell us about your project. We usually respond in &lt; 12 hours.</p>
</div>
{status === 'success' ? (
<div className="bg-green-50 text-green-700 p-6 rounded border border-green-200">
<h3 className="font-bold text-lg mb-2">Message Sent Successfully!</h3>
<p>Thank you for reaching out. We will get back to you shortly.</p>
<button onClick={() => setStatus('idle')} className="mt-4 text-sm underline font-bold">Send another message</button>
</div>
) : (
<form className="space-y-10" id="contactForm" onSubmit={handleSubmit}>
<div className="grid grid-cols-1 md:grid-cols-2 gap-stack-lg">
<div className="relative group">
<input name="name" className="peer w-full bg-transparent border-0 border-b border-border-subtle py-3 px-0 font-body-md focus:ring-0 focus:border-primary transition-all placeholder-transparent" id="name" placeholder="Name" required="" type="text"/>
<label className="absolute left-0 -top-3.5 text-on-surface-variant text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:top-3 peer-focus:-top-3.5 peer-focus:text-primary peer-focus:text-sm font-label-caps uppercase" htmlFor="name">Your Name</label>
</div>
<div className="relative group">
<input name="contact" className="peer w-full bg-transparent border-0 border-b border-border-subtle py-3 px-0 font-body-md focus:ring-0 focus:border-primary transition-all placeholder-transparent" id="contact" placeholder="Email/WhatsApp" required="" type="text"/>
<label className="absolute left-0 -top-3.5 text-on-surface-variant text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:top-3 peer-focus:-top-3.5 peer-focus:text-primary peer-focus:text-sm font-label-caps uppercase" htmlFor="contact">WhatsApp / Email</label>
</div>
</div>
<div className="relative group">
<textarea name="brief" className="peer w-full bg-transparent border-0 border-b border-border-subtle py-3 px-0 font-body-md focus:ring-0 focus:border-primary transition-all placeholder-transparent resize-none h-32 custom-scrollbar" id="brief" placeholder="Brief" required=""></textarea>
<label className="absolute left-0 -top-3.5 text-on-surface-variant text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:top-3 peer-focus:-top-3.5 peer-focus:text-primary peer-focus:text-sm font-label-caps uppercase" htmlFor="brief">Project Vision &amp; Challenges</label>
</div>

{status === 'error' && (
<div className="text-red-500 text-sm font-medium">Failed to send message. Please try again.</div>
)}

<button disabled={status === 'loading'} className="w-full bg-primary text-on-primary py-6 px-8 font-button text-button text-lg flex justify-center items-center gap-4 hover:bg-black active:scale-[0.99] transition-all group overflow-hidden relative disabled:opacity-70 disabled:cursor-not-allowed" type="submit">
<span className="relative z-10">{status === 'loading' ? 'Deploying...' : 'Deploy Message'}</span>
<span className="material-symbols-outlined transition-transform group-hover:translate-x-2 relative z-10" data-icon="send">send</span>
<div className="absolute inset-0 bg-white/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
</button>
<div className="flex items-center justify-center gap-2 text-on-surface-variant/40 text-[10px] font-label-caps uppercase tracking-[0.2em]">
<span className="material-symbols-outlined text-[14px]" data-icon="verified_user">verified_user</span>
                                Secure 256-bit Encrypted Submission
                            </div>
</form>
)}
</div>
</div>
</div>
</div>

    </>
  );
}
