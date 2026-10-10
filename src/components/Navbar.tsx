import React from 'react';
import { Presentation, LayoutGrid, Cpu, ArrowRight } from 'lucide-react';

interface NavbarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  isPresentationMode: boolean;
  setIsPresentationMode: (val: boolean) => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  activeTab,
  setActiveTab,
  isPresentationMode,
  setIsPresentationMode,
}) => {
  const navLinks = [
    { id: 'overview', label: '核心概览' },
    { id: 'evolution', label: '演进史' },
    { id: 'pipeline', label: '语义生产线' },
    { id: 'advantages', label: '核心优势与矩阵' },
    { id: 'genesis', label: '共生溯源' },
    { id: 'semantics', label: '三层语义' },
    { id: 'case-study', label: '实战闭环' },
    { id: 'simulator', label: '推理沙盘' },
    { id: 'metrics', label: '量化成效' },
    { id: 'gallery', label: '申报原件' },
  ];

  return (
    <header className="sticky top-0 z-40 w-full bg-[#030712]/80 backdrop-blur-xl border-b border-white/5 transition-colors">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between gap-6">
        {/* Zone 1: Brand Wordmark identical to Haojie Era */}
        <div className="flex items-center gap-3 shrink-0">
          <div className="w-9 h-9 rounded-xl bg-cyan-500/10 border border-cyan-400/40 flex items-center justify-center text-cyan-400 shadow-[0_0_15px_rgba(6,182,212,0.35)]">
            <Cpu className="w-5 h-5 text-cyan-400" />
          </div>
          <div className="flex items-center gap-2">
            <span className="text-base sm:text-lg font-bold tracking-tight text-white">
              SF Express
            </span>
            <span className="text-slate-500 font-light">|</span>
            <span className="text-sm sm:text-base font-medium text-cyan-400 tracking-wide">
              共生智能
            </span>
          </div>
        </div>

        {/* Zone 2: Navigation Links */}
        <nav className="hidden xl:flex items-center gap-6 text-sm font-medium text-slate-400">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => {
                if (isPresentationMode) setIsPresentationMode(false);
                setActiveTab(link.id);
                const el = document.getElementById(link.id);
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }}
              className={`whitespace-nowrap transition-colors py-1 cursor-pointer hover:text-white ${
                activeTab === link.id && !isPresentationMode
                  ? 'text-cyan-400 font-semibold'
                  : ''
              }`}
            >
              {link.label}
            </button>
          ))}
        </nav>

        {/* Zone 3: Pill action buttons */}
        <div className="flex items-center gap-3 shrink-0">
          <div className="hidden sm:flex items-center px-3.5 py-1.5 rounded-full border border-white/10 text-xs font-mono text-slate-300 bg-white/5">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 mr-2 animate-pulse" />
            <span>OPC TOP 10 决赛路演</span>
          </div>

          <button
            onClick={() => setIsPresentationMode(!isPresentationMode)}
            className={`px-5 py-2 text-xs sm:text-sm font-semibold rounded-full flex items-center gap-2 transition-all whitespace-nowrap cursor-pointer shadow-lg ${
              isPresentationMode
                ? 'bg-slate-800 hover:bg-slate-700 text-white border border-white/10'
                : 'bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white shadow-cyan-500/25 border border-cyan-400/30'
            }`}
          >
            {isPresentationMode ? (
              <>
                <LayoutGrid className="w-4 h-4" />
                <span>返回全景控制台</span>
              </>
            ) : (
              <>
                <Presentation className="w-4 h-4" />
                <span>启动路演模式 (14幕)</span>
              </>
            )}
          </button>
        </div>
      </div>
    </header>
  );
};
