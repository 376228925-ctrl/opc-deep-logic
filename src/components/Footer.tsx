import React from 'react';
import { Cpu } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="relative z-10 border-t border-white/10 bg-[#030712] py-12">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between px-6 md:flex-row gap-6">
        <div className="flex items-center space-x-3">
          <div className="w-8 h-8 rounded-lg bg-cyan-500/10 border border-cyan-400/30 flex items-center justify-center text-cyan-400">
            <Cpu className="h-4 w-4" />
          </div>
          <div>
            <span className="text-sm font-bold tracking-wider text-slate-200">
              SF EXPRESS // COGNITIVE SHIFT
            </span>
            <span className="block text-[11px] text-slate-500 font-mono">
              顺丰集团内部 AI 大赛决赛 · OPC 赛道 10 强方案
            </span>
          </div>
        </div>

        <div className="flex flex-col md:items-end text-xs text-slate-500 font-mono gap-1">
          <div>主创：M线本部 · 产品业务处 / 孙豪杰 (01368438)</div>
          <div>© 2026 SF EXPRESS COGNITIVE SHIFT. ALL RIGHTS RESERVED.</div>
        </div>
      </div>
    </footer>
  );
};
