import React, { useState } from 'react';
import {
  TrendingDown,
  ShieldCheck,
  GitBranch,
  Sparkles,
  CheckCircle2,
  XCircle,
  AlertTriangle,
  ArrowRight,
  Database,
  Cpu,
  Maximize2,
  ExternalLink
} from 'lucide-react';

interface CoreAdvantagesSectionProps {
  onOpenImage?: (id: string) => void;
}

export const CoreAdvantagesSection: React.FC<CoreAdvantagesSectionProps> = ({ onOpenImage }) => {
  const advantages = [
    {
      id: 'adv-1',
      icon: Cpu,
      color: '#38BDF8',
      tag: '认 知 之 升',
      title: '高维共生：从黑盒盲猜到白盒逻辑推演',
      desc: '通用大模型不具备顺丰特定的业务网络与分析标准。我们通过与 ChatGPT 的深度思辨碰撞，原创「数据·业务·分析」三层语义，将专家不可言说的隐性直觉显性化，赋予 Agent 真正理解顺丰业务的因果推导基石。',
      quote: '“不再把 AI 当作单向黑盒算力，而是在人机共生中创造属于顺丰的确定性分析方法论。”',
    },
    {
      id: 'adv-2',
      icon: ShieldCheck,
      color: '#06B6D4',
      tag: '数 据 之 真',
      title: '精度公理：0.00% 容差双向勾稽杜绝假数字',
      desc: '数仓权威正式表物理白名单严格准入，杜绝调用废弃临时表；下钻明细汇总值与宏观大盘总额执行 0.00% 容差二次勾稽校验，彻底斩断传统 ChatBI“算错数、用错表、看得到不敢用”的致命死穴。',
      quote: '“对数仓 0 容差双向勾稽，让输出的每一个数字都有据可查、经得起财务级审核。”',
    },
    {
      id: 'adv-3',
      icon: GitBranch,
      color: '#10B981',
      tag: '业 务 之 神',
      title: '实体洞穿：母子卡网络拓扑排除假性流失',
      desc: '深度理解顺丰客户签约与开票实体网络，自动归并集团母公司与各区部月结卡网络。精准识别开票主体内部划转，绝不将调账误判为退网流失，避免一线团队盲目登门降价，保护核心客群收益。',
      quote: '“看懂母子卡与大促错位窗口，Agent 才能具备真正懂顺丰产品与客户的商业穿透力。”',
    },
    {
      id: 'adv-4',
      icon: Sparkles,
      color: '#818CF8',
      tag: '组 织 之 器',
      title: '资产长青：原子 Skill 解耦与组织经验永续',
      desc: '将标准化五步推导与反例错题本沉淀为与大模型底座解耦的原子 Skill。经验不再随单次对话结束而归零，新区域、新产品场景仅需 0.5 天极速装载，一人创新推动全网复制，赋能 OPC 超级个体。',
      quote: '“从个人专家经验到工程化组织资产，经验只增不减，实现持续迭代进化。”',
    },
  ];

  const showcaseArtifacts = [
    {
      id: 'img-20',
      title: '智能小景落地 2000+ MAU',
      sub: '生产环境高频刚需验证',
      src: '/images/image20.jpg',
    },
    {
      id: 'img-24',
      title: '自动化生成 HTML 战报',
      sub: '耗时从 1~2 天压缩至 30 分钟',
      src: '/images/image24.jpg',
    },
    {
      id: 'img-28',
      title: '领慧助手复杂口径统一',
      sub: '跨系统指标统一收敛抹平',
      src: '/images/image28.jpg',
    },
  ];

  const matrixRows = [
    {
      dimension: '业务口径理解力',
      traditional: '仅存在于资深分析师脑中，口径定义模糊，跨部门对齐耗时数天',
      chatbi: '仅依赖 Text-to-SQL 机械转译，不懂顺丰母子卡与大促业务日历，频现常识性笑话',
      symbiotic: '【三层语义显性化】将业务常识沉淀为机器公理，100% 准确映射业务实质',
      win: true,
    },
    {
      dimension: '取数准确度与容差',
      traditional: '跨系统找表对数，同一指标多口径，人工拼接容易遗漏筛选条件',
      chatbi: '极易命中历史废表与中间临时表，口径不统一，数据“看得到但不敢用”',
      symbiotic: '【0.00% 容差双向勾稽】金牌数仓白名单强制准入，明细与总量二次校验一致',
      win: true,
    },
    {
      dimension: '客户实体网络穿透',
      traditional: '人工逐笔核查开票信息与签约主体，排查极慢且容易遗漏关联卡号',
      chatbi: '无法识别母子月结卡关系，将客户内部调账误判为“退网流失”，引发虚警',
      symbiotic: '【实体拓扑网络归并】自动映射主附卡关系网，精准剥离伪流失，直击核心流失主体',
      win: true,
    },
    {
      dimension: '因果归因与推理深度',
      traditional: '依赖分析师个人经验制作 PPT，撰写耗时长，结论受主观情绪影响',
      chatbi: '只能返回单一数值（“7月降了4%”），无法解释为何发生，无法形成有效结论',
      symbiotic: '【白盒化五步推导链】量化贡献度、转运延误证据链、待核实盲区与落地行动建议全闭环',
      win: true,
    },
    {
      dimension: '端到端交付时效',
      traditional: '从提问、找数、对数到成文需要 1 ~ 2 天反复拉扯',
      chatbi: '返回静态对话气泡，仍需人工二次处理，耗费数小时',
      symbiotic: '【30 分钟自动化交付】自动输出标准化交互式 HTML 诊断战报，提效 95%',
      win: true,
    },
    {
      dimension: '经验沉淀与跨区复用',
      traditional: '人员流动或转岗后经验断档，新员工需要重新踩坑',
      chatbi: '单次会话结束后记忆归零，无法沉淀为组织级可持续资产',
      symbiotic: '【原子 Skill 资产库】与模型解耦热插拔，新场景 0.5 天极速装载，全网资产持续升值',
      win: true,
    },
  ];

  return (
    <section id="advantages" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header with Roadshow Mega Typography */}
        <div className="text-center mb-16">
          <div className="text-xs font-mono text-cyan-400 tracking-[0.3em] mb-3 uppercase">
            原 创 方 法 论 优 势 · 让 AGENT 真 正 读 懂 顺 丰
          </div>
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight mb-4">
            核心优势与全维矩阵 <span className="text-cyan-400 font-normal">/ Superiority Matrix</span>
          </h2>
          <p className="text-base sm:text-xl text-slate-300 max-w-3xl mx-auto font-normal leading-relaxed">
            不滞于单点算力的虚假繁荣，归真于复杂业务的确定交付。
            <br className="hidden sm:inline" />
            通过共生智能语义层，为顺丰构建真正经得起实战考验的确定性生产力引擎。
          </p>
        </div>

        {/* 4 Large Clean Cards matching Haojie Era Bento Quality */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          {advantages.map((adv) => {
            const Icon = adv.icon;
            return (
              <div
                key={adv.id}
                className="p-8 sm:p-12 rounded-3xl bg-[#080E20]/95 border border-cyan-500/25 hover:border-cyan-400/50 transition-all shadow-[0_0_40px_rgba(6,182,212,0.1)] group flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div
                      className="w-14 h-14 rounded-2xl flex items-center justify-center transition-transform group-hover:scale-110 shadow-lg"
                      style={{
                        backgroundColor: `${adv.color}15`,
                        border: `1px solid ${adv.color}40`,
                        color: adv.color,
                      }}
                    >
                      <Icon className="w-7 h-7" />
                    </div>
                    <span className="text-xs font-mono tracking-widest px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-cyan-300 font-bold">
                      {adv.tag}
                    </span>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-black text-white mb-4 tracking-tight">
                    {adv.title}
                  </h3>

                  <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-normal mb-6">
                    {adv.desc}
                  </p>
                </div>

                <div className="pt-5 border-t border-white/5 text-xs sm:text-sm text-slate-400 italic font-sans">
                  {adv.quote}
                </div>
              </div>
            );
          })}
        </div>

        {/* MONUMENTAL SHOWCASE PREVIEW CARDS (大 UI 组件 + 配图) */}
        <div className="mb-20">
          <div className="text-center mb-10">
            <div className="text-xs font-mono text-cyan-400 uppercase tracking-widest mb-2">
              [ 生产环境实战样板 · 证据链 ]
            </div>
            <h3 className="text-2xl sm:text-4xl font-black text-white">
              落地实战成果样板卡 (Official Showcase)
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {showcaseArtifacts.map((art) => (
              <div
                key={art.id}
                onClick={() => onOpenImage && onOpenImage(art.id)}
                className="rounded-3xl bg-[#080E20]/90 border border-cyan-500/20 hover:border-cyan-400/60 p-5 flex flex-col justify-between transition-all hover:scale-[1.02] shadow-xl group cursor-pointer"
              >
                <div className="relative rounded-2xl overflow-hidden mb-4 border border-white/10 bg-slate-950">
                  <img
                    src={art.src}
                    alt={art.title}
                    className="w-full h-48 object-cover object-top transition-transform duration-500 group-hover:scale-110"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent pointer-events-none" />
                  <span className="absolute bottom-2 left-2 px-2.5 py-0.5 rounded text-[10px] font-mono font-bold bg-cyan-950/90 text-cyan-300 border border-cyan-800">
                    {art.id.toUpperCase()}
                  </span>
                </div>

                <div>
                  <h4 className="text-lg font-black text-white mb-1 group-hover:text-cyan-300 transition-colors">
                    {art.title}
                  </h4>
                  <p className="text-xs text-slate-400 font-mono mb-4">
                    {art.sub}
                  </p>
                </div>

                <div className="pt-3 border-t border-white/5 flex items-center justify-between text-xs font-mono text-cyan-400 font-bold">
                  <span>检视申报高精度截图</span>
                  <ExternalLink className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* The Full Comparison Matrix (权威全维对比矩阵) */}
        <div className="rounded-3xl bg-[#070D1D]/95 border border-cyan-500/30 p-8 sm:p-12 shadow-[0_0_60px_rgba(6,182,212,0.15)]">
          <div className="flex flex-wrap items-center justify-between gap-4 mb-8 pb-6 border-b border-white/10">
            <div>
              <div className="text-xs font-mono text-cyan-400 uppercase tracking-widest mb-1.5 font-bold">
                三 代 分 析 范 式 纵 向 对 标
              </div>
              <h3 className="text-2xl sm:text-3xl font-black text-white">
                全维对标矩阵：为什么共生智能语义层是唯一解？
              </h3>
            </div>
            <div className="flex items-center gap-4 text-xs font-mono">
              <span className="flex items-center gap-1.5 text-rose-400">
                <XCircle className="w-4 h-4" /> 传统人工
              </span>
              <span className="flex items-center gap-1.5 text-amber-400">
                <AlertTriangle className="w-4 h-4" /> 传统 ChatBI
              </span>
              <span className="flex items-center gap-1.5 text-cyan-300 font-black">
                <CheckCircle2 className="w-4 h-4 text-cyan-400" /> 顺丰共生智能语义层
              </span>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-white/10 text-xs font-mono uppercase text-slate-400">
                  <th className="py-4 px-4 w-1/5">评估维度</th>
                  <th className="py-4 px-4 w-1/4 text-rose-300/80">传统人工排查链路</th>
                  <th className="py-4 px-4 w-1/4 text-amber-300/80">传统 ChatBI / 盲目调用</th>
                  <th className="py-4 px-4 w-3/10 text-cyan-300 bg-cyan-950/30 rounded-t-xl font-black">
                    顺丰共生智能语义层 Agent
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5 text-xs sm:text-sm">
                {matrixRows.map((row, idx) => (
                  <tr key={idx} className="hover:bg-white/[0.02] transition-colors">
                    <td className="py-4 px-4 font-black text-white font-mono">
                      {row.dimension}
                    </td>
                    <td className="py-4 px-4 text-slate-400 leading-relaxed">
                      {row.traditional}
                    </td>
                    <td className="py-4 px-4 text-slate-400 leading-relaxed">
                      {row.chatbi}
                    </td>
                    <td className="py-4 px-4 text-cyan-100 bg-cyan-950/30 leading-relaxed font-semibold">
                      {row.symbiotic}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-8 pt-6 border-t border-white/10 flex flex-wrap items-center justify-between text-xs sm:text-sm text-slate-400 gap-4">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-cyan-400 animate-pulse" />
              <span className="text-slate-300">经顺丰 M 线本部产品业务处实测验证 · 覆盖业务月活 2000+ MAU</span>
            </div>
            <div className="font-mono text-cyan-300 font-bold">
              金牌数仓认证 · 容差 0.00% · 端到端闭环 30 分钟
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
