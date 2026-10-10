import React from 'react';
import { TrendingUp, Clock, Users, ArrowUpRight, ChevronRight, BarChart3, Database, Sparkles, ShieldCheck } from 'lucide-react';
import { METRICS } from '../data/projectData';

interface MetricsAndRoiSectionProps {
  onOpenImage?: (id: string) => void;
}

export const MetricsAndRoiSection: React.FC<MetricsAndRoiSectionProps> = ({ onOpenImage }) => {
  const showcaseCases = [
    {
      id: 'case-1',
      title: '华南特快收入异常归因',
      subtitle: '排除卡号调账假流失，追溯转运修路延误真因，直接指导一线客群挽留。',
      category: '精选案例',
      badge: '闭环诊断',
      savings: '节省工时 96%',
      image: '/images/image21.jpg',
      imageId: 'img-21',
      stats: '30 分钟交付',
    },
    {
      id: 'case-2',
      title: '丰景台独立 Agent 装载',
      subtitle: '挂接三层语义原子 Skill，服务产品处与试点区部 2000+ 业务月活。',
      category: '生产投产',
      badge: '资产中枢',
      savings: '2,000+ MAU',
      image: '/images/image14.jpg',
      imageId: 'img-14',
      stats: '零门槛即用',
    },
    {
      id: 'case-3',
      title: '618 大促跨期可比性校准',
      subtitle: '动态对齐电商爆发节奏日历，剥离自然日错位造成的虚假波动噪音。',
      category: '算法新锐',
      badge: '业务日历',
      savings: '校准准确率 100%',
      image: '/images/image23.jpg',
      imageId: 'img-23',
      stats: '自动平移',
    },
  ];

  return (
    <section id="metrics" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header with Roadshow Mega Typography & Literary Elevation */}
        <div className="text-center mb-16">
          <div className="text-xs font-mono text-cyan-400 tracking-[0.3em] mb-3 uppercase font-semibold">
            量 化 业 务 成 效 · 真 实 可 核 验 的 生 产 提 效
          </div>
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight mb-4">
            量化成效与业务价值验证
          </h2>
          <p className="text-base sm:text-xl text-slate-300 max-w-3xl mx-auto font-normal leading-relaxed">
            不谈浮夸概念，只看生产线的真实提效。
            <br className="hidden sm:inline" />
            当分析师的隐性经验转化为确定性的语义规则，时间便成为驱动顺丰业务增长的有效杠杆。
          </p>
        </div>

        {/* 5 Big Number Metric Cards with Monumental Roadshow Stats */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 sm:gap-6 mb-16">
          <div className="p-6 sm:p-8 rounded-3xl bg-[#080E20]/95 border border-cyan-500/30 flex flex-col justify-between shadow-[0_0_30px_rgba(6,182,212,0.1)] group hover:border-cyan-400/60 transition-all">
            <div>
              <div className="text-3xl sm:text-5xl font-black text-cyan-400 font-mono tracking-tight mb-2">
                95<span className="text-xl sm:text-2xl font-bold">%</span>
              </div>
              <div className="text-sm font-bold text-white mb-1">报告生成提效</div>
              <div className="text-xs text-slate-400 font-mono">从1~2天 ➔ 30分钟</div>
            </div>
          </div>

          <div className="p-6 sm:p-8 rounded-3xl bg-[#080E20]/95 border border-cyan-500/30 flex flex-col justify-between shadow-[0_0_30px_rgba(6,182,212,0.1)] group hover:border-cyan-400/60 transition-all">
            <div>
              <div className="text-3xl sm:text-5xl font-black text-emerald-400 font-mono tracking-tight mb-2">
                2,000<span className="text-xl sm:text-2xl font-bold">+</span>
              </div>
              <div className="text-sm font-bold text-white mb-1">业务月活用户</div>
              <div className="text-xs text-slate-400 font-mono">丰景台与钉钉小可</div>
            </div>
          </div>

          <div className="p-6 sm:p-8 rounded-3xl bg-[#080E20]/95 border border-cyan-500/30 flex flex-col justify-between shadow-[0_0_30px_rgba(6,182,212,0.1)] group hover:border-cyan-400/60 transition-all">
            <div>
              <div className="text-3xl sm:text-5xl font-black text-amber-400 font-mono tracking-tight mb-2">
                0.00<span className="text-xl sm:text-2xl font-bold">%</span>
              </div>
              <div className="text-sm font-bold text-white mb-1">双向勾稽容差</div>
              <div className="text-xs text-slate-400 font-mono">明细与大盘财务级对齐</div>
            </div>
          </div>

          <div className="p-6 sm:p-8 rounded-3xl bg-[#080E20]/95 border border-cyan-500/30 flex flex-col justify-between shadow-[0_0_30px_rgba(6,182,212,0.1)] group hover:border-cyan-400/60 transition-all">
            <div>
              <div className="text-3xl sm:text-5xl font-black text-purple-400 font-mono tracking-tight mb-2">
                &lt; 5<span className="text-xl sm:text-2xl font-bold">分</span>
              </div>
              <div className="text-sm font-bold text-white mb-1">日常多维查数</div>
              <div className="text-xs text-slate-400 font-mono">以往跨系统需1~2小时</div>
            </div>
          </div>

          <div className="p-6 sm:p-8 rounded-3xl bg-[#080E20]/95 border border-cyan-500/30 flex flex-col justify-between shadow-[0_0_30px_rgba(6,182,212,0.1)] group hover:border-cyan-400/60 transition-all col-span-2 md:col-span-1">
            <div>
              <div className="text-3xl sm:text-5xl font-black text-rose-400 font-mono tracking-tight mb-2">
                0.5<span className="text-xl sm:text-2xl font-bold">天</span>
              </div>
              <div className="text-sm font-bold text-white mb-1">跨场景迁移时效</div>
              <div className="text-xs text-slate-400 font-mono">新业务极速装载 Skill</div>
            </div>
          </div>
        </div>

        {/* Subtitle Footnote */}
        <div className="text-center text-xs text-slate-400 font-mono mb-20 bg-white/5 py-3 px-6 rounded-full max-w-2xl mx-auto border border-white/10">
          数据来源于产品业务处与试点区部生产对照组（同模型、同数据、同题，加载三层语义前后比对实测）。
        </div>

        {/* Official Showcase / Real Cases */}
        <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
          <div>
            <div className="text-xs font-mono text-cyan-400 tracking-widest uppercase mb-1.5 font-bold">
              REAL CASE SHOWCASE · 实 战 原 档
            </div>
            <h3 className="text-2xl sm:text-4xl font-black text-white">
              官方样板应用 / 生产实战切片
            </h3>
          </div>
          <div className="text-xs text-slate-400 font-mono">
            真实工单 · 真实数据 · 真实好评反馈
          </div>
        </div>

        {/* 3 Large Image Cards with Hover Zoom & Floating Badges */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {showcaseCases.map((c) => (
            <div
              key={c.id}
              onClick={() => onOpenImage && onOpenImage(c.imageId)}
              className="group relative h-[380px] overflow-hidden rounded-3xl border border-white/10 hover:border-cyan-400/60 transition-all cursor-pointer shadow-2xl bg-slate-950"
            >
              <img
                src={c.image}
                alt={c.title}
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#030712] via-[#030712]/50 to-transparent" />

              <div className="absolute inset-0 flex flex-col justify-end p-6 sm:p-8">
                <span className="mb-3 w-fit rounded-full border border-cyan-500/40 bg-cyan-500/20 px-3.5 py-1 text-xs font-bold text-cyan-300 backdrop-blur-md">
                  {c.category} · {c.badge}
                </span>

                <h4 className="mb-2 text-xl sm:text-2xl font-black text-white group-hover:text-cyan-300 transition-colors">
                  {c.title}
                </h4>

                <p className="text-xs sm:text-sm text-slate-300 mb-4 line-clamp-2 leading-relaxed font-normal">
                  {c.subtitle}
                </p>

                <div className="flex items-center justify-between pt-4 border-t border-white/10 text-xs">
                  <span className="text-cyan-400 font-mono font-bold text-sm">{c.savings}</span>
                  <div className="flex items-center gap-1.5 text-slate-300 group-hover:text-white transition-colors font-bold">
                    <span>查验原档</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
