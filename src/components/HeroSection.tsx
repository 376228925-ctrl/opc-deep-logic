import React, { useState } from 'react';
import { Play, Zap, ChevronRight, Cpu, Sparkles, BookOpen, Eye, ShieldCheck, Layers, Maximize2, History } from 'lucide-react';
import { PROJECT_INFO } from '../data/projectData';

interface HeroSectionProps {
  onStartPresentation: () => void;
  onExploreSemantics: () => void;
  onViewCaseStudy: () => void;
  onOpenImage: (id: string) => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onStartPresentation,
  onExploreSemantics,
  onViewCaseStudy,
  onOpenImage,
}) => {
  const [activeHeroTab, setActiveHeroTab] = useState<'arch' | 'genesis'>('arch');

  return (
    <section id="overview" className="relative pt-20 pb-28 overflow-hidden text-center">
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        {/* Top Minimalist Contest Identity Kicker */}
        <div className="inline-flex items-center gap-2 mb-6">
          <span className="px-4 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs sm:text-sm font-mono tracking-wider font-semibold">
            {PROJECT_INFO.contestName} · {PROJECT_INFO.track} · {PROJECT_INFO.organization} 孙豪杰
          </span>
        </div>

        {/* Massive Radiant Gradient Title: 参赛题目 */}
        <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tight mb-6 leading-[1.12]">
          <span className="bg-gradient-to-r from-cyan-300 via-sky-300 to-indigo-300 bg-clip-text text-transparent drop-shadow-[0_0_50px_rgba(56,189,248,0.4)]">
            基于共生智能下的语义层数据分析实践
          </span>
        </h1>

        {/* High-Cognition Subtitle with Professional Grounded Stance */}
        <div className="text-lg sm:text-2xl md:text-3xl font-extrabold text-white mb-5 tracking-tight">
          集团内部首创：构建「数据语义 · 业务语义 · 分析语义」三层确定性规则体系
        </div>
        <p className="text-sm sm:text-lg text-slate-300 font-normal tracking-wide mb-12 max-w-4xl mx-auto leading-relaxed">
          通用大模型无法自主理解顺丰特有的业务网络与经营口径。
          <br className="hidden sm:inline" />
          我们把资深分析师的专业经验转化为系统可精确执行的标准化原子能力，
          从根本上解决传统 ChatBI 查错底表、串错客户、归因断层等行业痛点，实现复杂分析任务的端到端可信交付。
        </p>

        {/* Monumental Vision Glass Card */}
        <div className="relative max-w-4xl mx-auto mb-12 rounded-3xl bg-[#091124]/90 border border-cyan-500/30 p-8 sm:p-12 shadow-[0_0_70px_rgba(6,182,212,0.16)] backdrop-blur-2xl text-left">
          <div className="flex flex-wrap items-center justify-between gap-4 mb-6 pb-6 border-b border-white/10">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs font-mono font-semibold tracking-wider uppercase">
              <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
              <span>高 阶 人 机 协 同 方 法 论 · 生 产 级 验 证</span>
            </div>
            <div className="text-xs font-mono text-slate-400 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>生产环境稳定运行 · 2000+ MAU</span>
            </div>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-white mb-4 tracking-tight leading-snug">
            超越单向提问式工具，让业务专家与 AI 在深度交互中形成双向增强
          </h2>

          <p className="text-sm sm:text-base text-slate-300 leading-relaxed mb-6 font-normal">
            语义层在业界虽有零星概念讨论，但在顺丰复杂的物流与供应链业务场景中，我们是
            <strong className="text-cyan-300 font-semibold"> 顺丰集团内部首个真正构建起三层语义规范体系并在生产环境闭环落地的团队</strong>。
            这套方法并非简单的单向指令调用，而是业务专家与大模型经历反复推演、质疑与反例修正后沉淀出的协同结晶。
            原始思辨手稿与提示词演化记录，为本方案提供了最坚实的实证基石。
          </p>

          {/* Literary Core Logic Box */}
          <div className="p-4 sm:p-5 rounded-2xl bg-cyan-950/20 border border-cyan-500/30 mb-6 space-y-2">
            <div className="text-xs font-mono text-cyan-400 font-semibold tracking-wider uppercase">
              [ 核心立论逻辑 ]
            </div>
            <div className="text-sm sm:text-base text-slate-200 font-medium leading-relaxed">
              数据不是孤立的表格与数值，而是顺丰千万级物流快件流动的数字映射；
              通用 AI 无法仅靠概率推断出准确的业务结论——必须由人类专家立规成章：
              以数据语义锚定底座真实，以业务语义还原组织实体，以分析语义收口因果边界。
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-2.5 text-xs font-mono text-slate-400">
            <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-cyan-300">
              #真实人机思辨手稿支撑
            </span>
            <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-emerald-300">
              #集团内部首创语义层落地
            </span>
            <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-sky-300">
              #38项申报原件佐证
            </span>
            <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-indigo-300">
              #一人闭环复杂经营诊断
            </span>
          </div>
        </div>

        {/* Contrast Prose Block with Clean Left Border */}
        <div className="max-w-2xl mx-auto text-left mb-12 pl-6 border-l-2 border-cyan-400 space-y-2 py-1">
          <div className="text-sm sm:text-base text-slate-400">
            过去，通用模型缺乏业务上下文约束，数据问答常因找错表、对错卡而沦为不可信的演示；
          </div>
          <div className="text-base sm:text-xl font-bold text-white">
            今天，三层语义体系让智能体真正理解顺丰业务口径，分析师一个人即可高质量闭环专家级诊断。
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-5 mb-16">
          <button
            onClick={onStartPresentation}
            className="px-9 py-4 rounded-full bg-white hover:bg-slate-100 text-slate-950 font-black text-sm sm:text-base shadow-[0_0_40px_rgba(255,255,255,0.45)] flex items-center gap-2.5 cursor-pointer transition-all hover:scale-105"
          >
            <Zap className="w-5 h-5 fill-slate-950" />
            <span>进入路演答辩模式 (14幕)</span>
          </button>

          <a
            href="#evolution"
            className="px-8 py-4 rounded-full bg-slate-900/90 hover:bg-slate-800 text-white font-bold text-sm sm:text-base border border-cyan-500/40 hover:border-cyan-400 flex items-center gap-2.5 cursor-pointer transition-all shadow-[0_0_25px_rgba(6,182,212,0.15)]"
          >
            <History className="w-4 h-4 text-cyan-400" />
            <span>查阅共生智能演进史</span>
          </a>

          <button
            onClick={onViewCaseStudy}
            className="px-8 py-4 rounded-full bg-slate-900/90 hover:bg-slate-800 text-white font-bold text-sm sm:text-base border border-cyan-500/40 hover:border-cyan-400 flex items-center gap-2.5 cursor-pointer transition-all shadow-[0_0_25px_rgba(6,182,212,0.15)]"
          >
            <Play className="w-4 h-4 text-cyan-400" />
            <span>观看实战诊断全景演练</span>
          </button>

          <button
            onClick={() => onOpenImage('img-4')}
            className="px-6 py-4 rounded-full bg-white/5 hover:bg-white/10 text-cyan-300 font-semibold text-sm border border-white/10 flex items-center gap-2 cursor-pointer transition-colors"
          >
            <BookOpen className="w-4 h-4 text-cyan-400" />
            <span>查阅申报蓝图原件 ↗</span>
          </button>
        </div>

        {/* MONUMENTAL BLUEPRINT EXHIBITION VIEWPORT (大 UI + 权威申报蓝图原件大配图) */}
        <div className="rounded-3xl bg-[#070D1D]/95 border border-cyan-500/30 overflow-hidden shadow-[0_0_80px_rgba(6,182,212,0.18)] backdrop-blur-2xl mb-12 text-left">
          {/* Top Bar with Switcher */}
          <div className="px-6 py-4 bg-[#0A1226] border-b border-white/10 flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <span className="w-3 h-3 rounded-full bg-rose-500/80" />
              <span className="w-3 h-3 rounded-full bg-amber-500/80" />
              <span className="w-3 h-3 rounded-full bg-emerald-500/80" />
              <span className="ml-2 font-mono text-xs sm:text-sm font-bold text-white tracking-wide">
                顺丰集团申报原件核心图谱 · 密级：内部公开
              </span>
            </div>

            {/* View Switcher Tabs */}
            <div className="flex items-center gap-2 bg-slate-900/80 p-1 rounded-xl border border-white/10 text-xs font-mono">
              <button
                onClick={() => setActiveHeroTab('arch')}
                className={`px-3 py-1.5 rounded-lg transition-all cursor-pointer font-bold ${
                  activeHeroTab === 'arch'
                    ? 'bg-cyan-500 text-slate-950 shadow-md'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                架构蓝图 (img-4)
              </button>
              <button
                onClick={() => setActiveHeroTab('genesis')}
                className={`px-3 py-1.5 rounded-lg transition-all cursor-pointer font-bold ${
                  activeHeroTab === 'genesis'
                    ? 'bg-cyan-500 text-slate-950 shadow-md'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                共生智能模型 (img-15)
              </button>
            </div>
          </div>

          {/* Exhibition Image & Telemetry Split Canvas */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
            {/* Left 8 cols: Large Crisp Image */}
            <div className="lg:col-span-8 relative bg-slate-950/60 p-4 sm:p-6 flex items-center justify-center border-b lg:border-b-0 lg:border-r border-white/10 group">
              <div
                onClick={() => onOpenImage(activeHeroTab === 'arch' ? 'img-4' : 'img-15')}
                className="relative rounded-2xl overflow-hidden cursor-pointer w-full border border-white/10 shadow-2xl group-hover:border-cyan-400/60 transition-all"
              >
                <img
                  src={activeHeroTab === 'arch' ? '/images/image4.jpg' : '/images/image15.jpg'}
                  alt={activeHeroTab === 'arch' ? '三层语义架构总体设计' : '人机协同演进：共生智能'}
                  className="w-full max-h-[440px] object-contain bg-slate-950 transition-transform duration-500 group-hover:scale-[1.02]"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs font-mono text-cyan-300 bg-slate-900/80 backdrop-blur-md px-3.5 py-2 rounded-xl border border-white/10">
                  <span>{activeHeroTab === 'arch' ? '原件 04 · 三层语义架构总体设计' : '原件 15 · 人机协同演进：共生智能'}</span>
                  <span className="flex items-center gap-1 text-white">
                    <Maximize2 className="w-3.5 h-3.5" /> 点击放大全分辨率查验
                  </span>
                </div>
              </div>
            </div>

            {/* Right 4 cols: High-Cognitive Telemetry & Insights */}
            <div className="lg:col-span-4 p-6 sm:p-8 flex flex-col justify-between space-y-6 bg-[#080E20]/90">
              <div>
                <div className="text-xs font-mono text-cyan-400 uppercase tracking-widest mb-2">
                  [ 申报蓝图与实证解读 ]
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-white mb-3 tracking-tight">
                  {activeHeroTab === 'arch'
                    ? '独创「数据·业务·分析」三层解耦体系'
                    : '从单点 Prompt 到系统级组织认知资产'}
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal mb-4">
                  {activeHeroTab === 'arch'
                    ? '规范数仓授权表准入与 0 容差双向勾稽校验；建立顺丰母子月结卡拓扑映射；规范标准化五步推导链，杜绝传统问数工具盲目取数引发的幻觉与误导。'
                    : '超越单次会话的提示词修补，建立以“反例错题本”驱动的持续回归优化机制。在人与模型的深度对话中，把业务专家的隐性常识沉淀为可跨平台部署的标准化原子 Skill。'}
                </p>
              </div>

              {/* Three Axiom Checkpoints */}
              <div className="space-y-2.5 text-xs font-mono">
                <div className="p-2.5 rounded-xl bg-white/5 border border-white/10 flex items-center justify-between">
                  <span className="text-slate-400">数据语义准入容差</span>
                  <span className="text-emerald-400 font-bold">0.00% 绝对一致</span>
                </div>
                <div className="p-2.5 rounded-xl bg-white/5 border border-white/10 flex items-center justify-between">
                  <span className="text-slate-400">客户主体穿透逻辑</span>
                  <span className="text-cyan-400 font-bold">母子卡拓扑归并</span>
                </div>
                <div className="p-2.5 rounded-xl bg-white/5 border border-white/10 flex items-center justify-between">
                  <span className="text-slate-400">跨场景迁移时效</span>
                  <span className="text-sky-300 font-bold">0.5 天极速装载</span>
                </div>
              </div>

              <button
                onClick={() => onOpenImage(activeHeroTab === 'arch' ? 'img-4' : 'img-15')}
                className="w-full py-3 rounded-xl bg-cyan-500/10 hover:bg-cyan-500/20 text-cyan-300 border border-cyan-500/30 font-semibold text-xs transition-colors flex items-center justify-center gap-2 cursor-pointer"
              >
                <Eye className="w-4 h-4" />
                <span>检视申报原稿高精度细节</span>
              </button>
            </div>
          </div>
        </div>

        {/* Author / Department Info */}
        <div className="text-xs sm:text-sm text-slate-400 font-mono flex items-center justify-center gap-3">
          <span className="text-slate-300 font-medium">{PROJECT_INFO.organization}</span>
          <span className="text-slate-600">/</span>
          <span className="text-cyan-300 font-bold">{PROJECT_INFO.author}</span>
          <span className="text-slate-600">/</span>
          <span className="text-slate-300">参赛题目: {PROJECT_INFO.title}</span>
        </div>
      </div>
    </section>
  );
};
