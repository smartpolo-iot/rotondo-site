
import React, { useState, useRef } from 'react';
import { Language } from './types';
import { TRANSLATIONS } from './constants';

const LOGO_URL = "https://ugc.production.linktr.ee/58bb7b2e-b642-4a14-ba30-c6433f4e149a_linktree.png?io=true&size=avatar-v3_0";

const BRANCHES_DATA = [
  {
    name: 'CAFÉ ROTONDO | Family blend',
    address: 'Boulevard Cerviño 3907, Palermo.',
    imageUrl: 'https://www.foodinspace.net/wp-content/uploads/2025/08/rotondo-buenos-aires-argentina-03.jpeg',
    mapsUrl: 'https://www.google.com/maps/search/?api=1&query=Boulevard+Cerviño+3907+Palermo'
  }
];

const App: React.FC = () => {
  const [lang, setLang] = useState<Language>('es');

  const homeRef = useRef<HTMLElement>(null);
  const aboutRef = useRef<HTMLElement>(null);
  const branchesRef = useRef<HTMLElement>(null);
  const contactRef = useRef<HTMLElement>(null);

  const scrollToSection = (section: 'home' | 'about' | 'branches' | 'contact') => {
    const refs: any = { home: homeRef, about: aboutRef, branches: branchesRef, contact: contactRef };
    const element = refs[section]?.current;
    if (element) {
      const headerOffset = 100;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  const t = TRANSLATIONS[lang];

  return (
    <div className="min-h-screen w-full flex flex-col font-lexend bg-white">
      {/* Navigation Header */}
      <div className="fixed top-0 left-0 right-0 z-[100] w-full bg-white/95 backdrop-blur-md shadow-sm">
        <header className="px-6 py-4 flex items-center justify-between max-w-7xl mx-auto w-full h-16 md:h-20">
          <button onClick={() => scrollToSection('home')} className="flex items-center gap-4 active:opacity-70 transition-opacity">
            <img src={LOGO_URL} className="h-10 w-10 rounded-full" alt="Logo" />
            <h1 className="text-xl md:text-3xl font-jost font-light uppercase tracking-tighter text-[#1a1a1a]">ROTONDO</h1>
          </button>

          <nav className="hidden lg:flex items-center gap-10 flex-grow justify-center">
            <button onClick={() => scrollToSection('home')} className="text-[10px] font-category font-bold tracking-[0.25em] uppercase opacity-50 hover:opacity-100 transition-opacity">{t.navHome}</button>
            <button onClick={() => scrollToSection('about')} className="text-[10px] font-category font-bold tracking-[0.25em] uppercase text-[#1a1a1a] opacity-50 hover:opacity-100 transition-opacity">{t.navAbout}</button>
            <button onClick={() => scrollToSection('branches')} className="text-[10px] font-category font-bold tracking-[0.25em] uppercase text-[#1a1a1a] opacity-50 hover:opacity-100 transition-opacity">{t.navBranches}</button>
            <a href="/menu" className="text-[10px] font-category font-bold tracking-[0.25em] uppercase text-[#1a1a1a] opacity-50 hover:opacity-100 transition-opacity">{t.navMenu}</a>
          </nav>

          <div className="flex items-center gap-4">
            <button onClick={() => setLang(lang === 'en' ? 'es' : 'en')} className="text-[10px] font-category font-bold tracking-widest border border-black px-3 py-1.5 hover:bg-black hover:text-white transition-all">
              {lang === 'en' ? 'ES' : 'EN'}
            </button>
          </div>
        </header>

        {/* Mobile Sub-nav */}
        <nav className="lg:hidden flex overflow-x-auto no-scrollbar border-t border-gray-100 px-6 py-3 gap-8 bg-white items-center">
          <button onClick={() => scrollToSection('home')} className="text-[9px] font-category font-bold tracking-widest uppercase whitespace-nowrap">{t.navHome}</button>
          <button onClick={() => scrollToSection('about')} className="text-[9px] font-category font-bold tracking-widest uppercase whitespace-nowrap opacity-40">{t.navAbout}</button>
          <button onClick={() => scrollToSection('branches')} className="text-[9px] font-category font-bold tracking-widest uppercase whitespace-nowrap opacity-40">{t.navBranches}</button>
          <a href="/menu" className="text-[9px] font-category font-bold tracking-widest uppercase whitespace-nowrap opacity-40">{t.navMenu}</a>
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-grow w-full pt-[104px] lg:pt-[80px]">
        <div className="animate-in fade-in duration-700">
          <section
            ref={homeRef}
            className="relative h-[85vh] md:h-screen flex flex-col items-center justify-center text-center p-6 bg-cover bg-center overflow-hidden"
            style={{ backgroundImage: 'url("https://www.foodinspace.net/wp-content/uploads/2025/08/rotondo-buenos-aires-argentina-15.jpeg")' }}
          >
            <div className="absolute inset-0 bg-black/50 z-0 hero-gradient"></div>
            <div className="relative z-10 max-w-full px-4 flex flex-col items-center">
              <img src={LOGO_URL} alt="Rotondo Logo" className="w-32 md:w-48 h-32 md:h-48 rounded-full border-4 border-white mb-8 shadow-2xl" />
              <h2 className="text-6xl sm:text-8xl md:text-[10rem] font-jost font-light leading-none text-white mb-4 tracking-tight drop-shadow-2xl">
                {t.heroTitle}
              </h2>
              <p className="text-[10px] md:text-sm font-category tracking-[0.5em] uppercase text-white/90 mb-10 font-bold drop-shadow-md">
                {t.heroSubtitle}
              </p>
              <a
                href="/menu"
                className="px-10 py-4 bg-white text-black font-category text-xs tracking-[0.3em] hover:bg-transparent hover:text-white border-2 border-white transition-all duration-300 shadow-xl uppercase"
              >
                {t.seeMenu}
              </a>
            </div>
          </section>

          <section ref={aboutRef} className="py-24 md:py-40 px-6 max-w-5xl mx-auto text-center">
            <h3 className="text-[10px] font-category font-bold tracking-[0.6em] uppercase opacity-40 mb-10">{t.aboutTitle}</h3>
            <p className="text-2xl md:text-3xl font-lexend font-light leading-relaxed text-[#1a1a1a]">
              {t.aboutText}
            </p>
          </section>

          <section ref={branchesRef} className="py-24 md:py-40 px-6 max-w-7xl mx-auto border-t border-gray-100">
            <h3 className="text-[10px] font-category font-bold tracking-[0.6em] uppercase opacity-40 text-center mb-20">{t.branchesTitle}</h3>
            <div className="flex justify-center">
              {BRANCHES_DATA.map((branch, i) => (
                <div key={i} className="bg-white max-w-4xl w-full border border-gray-200 overflow-hidden group hover:shadow-2xl transition-all duration-700 flex flex-col md:flex-row">
                  <div className="md:w-1/2 aspect-[16/10] md:aspect-auto overflow-hidden">
                    <img src={branch.imageUrl} alt={branch.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000" />
                  </div>
                  <div className="p-10 md:p-16 md:w-1/2 flex flex-col justify-center">
                    <h4 className="text-2xl font-jost font-light uppercase mb-4 text-[#1a1a1a]">{branch.name}</h4>
                    <a
                      href={branch.mapsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="opacity-60 mb-8 font-lexend text-lg leading-relaxed hover:opacity-100 transition-opacity flex items-start gap-2 group/link"
                    >
                      <span className="border-b border-transparent group-hover/link:border-black/20">{branch.address}</span>
                      <svg className="w-4 h-4 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path></svg>
                    </a>
                    <div className="pt-8 border-t border-gray-100">
                      <p className="text-[10px] font-category font-bold opacity-40 uppercase mb-2">{t.hoursTitle}</p>
                      <p className="text-sm font-category whitespace-nowrap opacity-80">🕣 {t.hoursValue}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section ref={contactRef} className="py-24 md:py-40 px-6 bg-[#1a1a1a] text-white text-center">
            <h3 className="text-[10px] font-category font-bold tracking-[0.6em] uppercase opacity-40 mb-10">{t.contactTitle}</h3>
            <p className="text-2xl md:text-3xl font-lexend max-w-3xl mx-auto mb-20 opacity-80 font-light leading-relaxed">{t.contactText}</p>
            <a href="https://www.instagram.com/rotondocafe" target="_blank" rel="noopener noreferrer" className="group inline-flex flex-col items-center gap-4">
              <span className="font-category font-bold text-2xl tracking-[0.4em]">INSTAGRAM</span>
              <div className="h-0.5 w-0 group-hover:w-full bg-white transition-all duration-500"></div>
            </a>
          </section>
        </div>
      </div>

      <footer className="py-20 text-center border-t border-gray-100 bg-gray-50 mt-auto">
        <img src={LOGO_URL} className="h-16 w-16 mx-auto mb-6 rounded-full opacity-50 grayscale" alt="Footer Logo" />
        <p className="text-[10px] font-category font-bold tracking-[0.5em] opacity-30 mb-2">Rotondo Café | Family Blend</p>
        <p className="text-[9px] font-category tracking-[0.2em] opacity-20">Palermo, Buenos Aires</p>
      </footer>
    </div>
  );
};

export default App;
