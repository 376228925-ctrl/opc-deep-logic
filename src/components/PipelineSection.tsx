import React, { useState } from 'react';
import {
  MessageSquare,
  Cpu,
  Layers,
  Send,
  Lock,
  GitBranch,
  Sparkles,
  ExternalLink,
  BookOpen,
  Maximize2,
  ChevronRight,
  TrendingDown,
  CheckCircle2,
  ShieldCheck
} from 'lucide-react';

interface PipelineSectionProps {
  onOpenImage: (id: string) => void;
}

export const PipelineSection: React.FC<PipelineSectionProps> = ({ onOpenImage }) => {
  const [activeNode, setActiveNode] = useState<number>(0);

  const pipelineNodes = [
    {
      id: 0,
      title: '意图',
      sub: '业务需求门禁',
      desc: '意图识别 ➔ 拦截模糊问题',
      icon: MessageSquare,
      color: '#38BDF8',
      imageSrc: '/images/image21.jpg',
      imageId: 'img-21',
      imageLabel: '申报原件 21 · 业务问题识别与异常初筛',
      literaryAxiom: '“无规矩不成方圆。业务分析始于清晰的问题边界，而非漫无目的的随机提问。”',
      details: {
        title: '意图收敛门禁：自然语言对齐与前置澄清',
        badge: 'STAGE 01 · INTENT GATEWAY',
        content:
          '用户输入模糊提问时（如“收入掉了怎么回事”），门禁拦截机制自动补齐分析要素（时间范围、产品线分类、目标地区），判定问题具备分析条件后方才放行进入下一步。',
        metric: '意图对齐率: 100%',
        tags: ['前置门禁', '反模糊反猜疑', '确定性约束'],
      },
    },
    {
      id: 1,
      title: '数据',
      sub: '0容差双向校验',
      desc: '数仓认证表 ➔ 物理隔离',
      icon: Lock,
      color: '#06B6D4',
      imageSrc: '/images/image28.jpg',
      imageId: 'img-28',
      imageLabel: '申报原件 28 · 复杂多口径自动统一实录',
      literaryAxiom: '“数据不可信，则决策皆无根基。以数仓正式表为底座，以 0.00% 容差为准绳，实现财务级口径一致。”',
      details: {
        title: '数据语义层：数仓正式表授权与 0.00% 容差勾稽',
        badge: 'STAGE 02 · DATA SEMANTICS',
        content:
          '严格将取数范围限定在经过数仓认证的正式主题表，杜绝非法调用历史废表与临时表。下钻月结卡明细汇总值强制与宏观大盘总额执行 0.00% 容差双向比对校验，彻底解决传统 ChatBI 查错表、算错数的硬伤风险。',
        metric: '勾稽容差: 0.00% 绝对一致',
        tags: ['数仓白名单', '指标公式严密对齐', '明细总量二次勾稽'],
      },
    },
    {
      id: 2,
      title: '业务',
      sub: '母子卡网络拓扑',
      desc: '实体归并 ➔ 排除假流失',
      icon: GitBranch,
      color: '#10B981',
      imageSrc: '/images/image23.jpg',
      imageId: 'img-23',
      imageLabel: '申报原件 23 · 客户主体穿透与实体网络归并',
      literaryAxiom: '“透视集团母子卡网络拓扑，方能准确区分开票划转与实质留存，还原真实经营面貌。”',
      details: {
        title: '业务语义层：母子卡拓扑网络与大促跨期窗口',
        badge: 'STAGE 03 · BUSINESS SEMANTICS',
        content:
          '深度理解顺丰客户签约与开票实体网络，自动归并集团母公司旗下多张月结卡。识别出客户 B 仅为开票主体跨区划转（非实质退网流失）；锁定真正流失客户 A 并结合 618 大促错位窗口对齐真实同比基线。',
        metric: '业务口径准确度: 100%',
        tags: ['母子卡拓扑归并', '过滤开票假流失', '大促跨期对齐'],
      },
    },
    {
      id: 3,
      title: '分析',
      sub: '因果推导与边界收口',
      desc: '五步闭环 ➔ 严密复核',
      icon: Cpu,
      color: '#6366F1',
      imageSrc: '/images/image18.jpg',
      imageId: 'img-18',
      imageLabel: '申报原件 18 · 分析可复核机制与证据边界',
      literaryAxiom: '“量化贡献与因果证据严密解耦，无据不言，确保分析结论具备可复核性。”',
      details: {
        title: '分析语义层：标准化五步推导链与因果隔离',
        badge: 'STAGE 04 · ANALYSIS SEMANTICS',
        content:
          '严格遵循五步标准化推导链（异常确认 ➔ 贡献拆解 ➔ 对象定位 ➔ 拐点追溯 ➔ 交叉核验）。将“贡献度”与“因果假设”解耦交付，交叉核验转运修路时效延误证据；在证据不足时主动收口标注待核实盲区，绝不把相关性冒充因果。',
        metric: '推论白盒化: 100% 可追溯',
        tags: ['标准化五步分析链', '贡献度因果分离', '证据边界收口'],
      },
    },
    {
      id: 4,
      title: '交付',
      sub: '30分钟报告与资产复用',
      desc: '高质交付 ➔ 全网复制',
      icon: Send,
      color: '#F59E0B',
      imageSrc: '/images/image24.jpg',
      imageId: 'img-24',
      imageLabel: '申报原件 24 · 自动化生成 HTML 交互式诊断报告',
      literaryAxiom: '“终局成于闭环。以结构化报告交付可落地的策略建议，经验沉淀为系统能力，实现全网复用。”',
      details: {
        title: '端到端输出 HTML 交互式战报与资产沉淀',
        badge: 'STAGE 05 · CLOSED-LOOP DELIVERY',
        content:
          '30 分钟内自动化产出包含事实分解、转运延误证据、待核实盲区与客群挽留建议的 HTML 报告，彻底解放分析师。分析经验沉淀为解耦的原子 Skill，丰景台与领慧双平台稳定投产，新场景 0.5 天极速装载。',
        metric: '交付提效: 95% (从1-2天至30分钟)',
        tags: ['HTML标准战报', '闭环治理建议', '0.5天跨业务复制'],
      },
    },
  ];

  const current = pipelineNodes[activeNode];

  return (
    <section id="pipeline" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header with Roadshow Big Font & Professional Stance */}
        <div className="text-center mb-16">
          <div className="text-xs font-mono text-cyan-400 tracking-[0.3em] mb-3 uppercase font-semibold">
            集团内部首创 · 企业级数据分析闭环流水线
          </div>
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight mb-4">
            共生智能语义生产全景链路
          </h2>
          <p className="text-base sm:text-xl text-slate-300 max-w-3xl mx-auto font-normal leading-relaxed">
            从自然语言业务提问，到自动化交付包含完整证据链的 HTML 诊断报告。
            <br className="hidden sm:inline" />
            每一步皆由严密语义规则提供保障，化繁冗的人工沟通为高效可信的白盒流程。
          </p>
        </div>

        {/* Master Window Frame with Stepper & Dual-Pane Interactive Stage */}
        <div className="rounded-3xl bg-[#070D1D]/95 border border-cyan-500/30 shadow-[0_0_80px_rgba(6,182,212,0.16)] overflow-hidden backdrop-blur-2xl mb-16">
          {/* Mac-style Window Top Bar */}
          <div className="px-6 py-4 bg-[#0A1226] border-b border-white/10 flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-rose-500/80" />
              <span className="w-3 h-3 rounded-full bg-amber-500/80" />
              <span className="w-3 h-3 rounded-full bg-emerald-500/80" />
              <span className="ml-3 font-mono text-xs sm:text-sm font-bold text-slate-200">
                SF Express · Symbiotic Semantic Analytics Closed-Loop Engine
              </span>
            </div>

            <div className="flex items-center gap-2 text-xs font-mono text-cyan-400">
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
              <span>STAGE {activeNode + 1} / 5 · 生产流水线实时映射</span>
            </div>
          </div>

          <div className="p-6 sm:p-10">
            {/* Step Selector Horizontal Bar (大字体 + 大按钮交互) */}
            <div className="mb-10">
              <div className="grid grid-cols-2 sm:grid-cols-5 gap-3">
                {pipelineNodes.map((node, index) => {
                  const Icon = node.icon;
                  const isActive = activeNode === index;
                  return (
                    <button
                      key={node.id}
                      onClick={() => setActiveNode(index)}
                      className={`p-4 rounded-2xl text-left transition-all border cursor-pointer relative ${
                        isActive
                          ? 'bg-gradient-to-b from-cyan-950/80 to-[#0A1329] border-cyan-400 shadow-[0_0_30px_rgba(6,182,212,0.3)] scale-[1.02]'
                          : 'bg-[#091124]/60 border-white/5 hover:border-white/15 text-slate-400'
                      }`}
                    >
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-[11px] font-mono text-cyan-400 font-bold">
                          0{index + 1}
                        </span>
                        <Icon
                          className={`w-4 h-4 ${
                            isActive ? 'text-cyan-300' : 'text-slate-500'
                          }`}
                        />
                      </div>
                      <div
                        className={`text-base sm:text-lg font-black tracking-tight ${
                          isActive ? 'text-white' : 'text-slate-300'
                        }`}
                      >
                        {node.title}
                      </div>
                      <div className="text-[11px] text-cyan-400 font-mono hidden sm:block mt-0.5 font-semibold">
                        {node.sub}
                      </div>
                      <div className="text-[10px] text-slate-500 hidden md:block">
                        {node.desc}
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* DUAL-PANE ROADSHOW CONSOLE (左侧三层语义深度解读 + 右侧生产环境申报原件) */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch rounded-2xl bg-[#091126] border border-cyan-500/25 p-6 sm:p-8 shadow-2xl">
              {/* Left Pane (7 cols): Deep Axiom Details & Professional Stance */}
              <div className="lg:col-span-7 flex flex-col justify-between space-y-6">
                <div>
                  <div className="flex flex-wrap items-center justify-between gap-3 mb-4 pb-4 border-b border-white/10">
                    <span className="px-3 py-1 rounded text-xs font-mono font-bold bg-cyan-950 text-cyan-300 border border-cyan-800">
                      {current.details.badge}
                    </span>
                    <span className="font-mono text-xs sm:text-sm text-cyan-400 font-bold px-3 py-1 bg-cyan-500/10 rounded-full border border-cyan-500/30">
                      {current.details.metric}
                    </span>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-black text-white mb-4 tracking-tight">
                    {current.details.title}
                  </h3>

                  <p className="text-sm sm:text-base text-slate-200 leading-relaxed font-normal mb-6">
                    {current.details.content}
                  </p>

                  {/* Core Logic Quote Box */}
                  <div className="p-4 rounded-xl bg-cyan-950/20 border-l-2 border-cyan-400 text-xs sm:text-sm text-slate-300 font-sans leading-relaxed mb-6">
                    {current.literaryAxiom}
                  </div>
                </div>

                <div className="pt-4 border-t border-white/10 flex flex-wrap items-center justify-between gap-3 text-xs">
                  <div className="flex flex-wrap items-center gap-2">
                    {current.details.tags.map((t, idx) => (
                      <span
                        key={idx}
                        className="px-2.5 py-1 rounded-md bg-white/5 border border-white/10 text-slate-300 font-mono text-[11px]"
                      >
                        #{t}
                      </span>
                    ))}
                  </div>

                  <button
                    onClick={() => onOpenImage(current.imageId)}
                    className="text-cyan-400 hover:text-cyan-300 font-bold flex items-center gap-1.5 cursor-pointer transition-colors"
                  >
                    <span>查看顺丰申报原件 ({current.imageId})</span>
                    <ExternalLink className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Right Pane (5 cols): Cinematic Official Artifact Viewport */}
              <div className="lg:col-span-5 relative flex flex-col justify-center bg-slate-950/70 rounded-2xl p-4 border border-white/10 group overflow-hidden">
                <div
                  onClick={() => onOpenImage(current.imageId)}
                  className="relative rounded-xl overflow-hidden cursor-pointer shadow-xl border border-white/10 group-hover:border-cyan-400/50 transition-all"
                >
                  <img
                    src={current.imageSrc}
                    alt={current.imageLabel}
                    className="w-full max-h-[300px] object-contain bg-slate-950 transition-transform duration-500 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-transparent to-transparent pointer-events-none" />
                  <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-[11px] font-mono text-cyan-300 bg-slate-900/90 backdrop-blur-md px-3 py-1.5 rounded-lg border border-white/10">
                    <span className="truncate">{current.imageLabel}</span>
                    <span className="flex items-center gap-1 shrink-0 text-white ml-2">
                      <Maximize2 className="w-3 h-3" /> 放大查验
                    </span>
                  </div>
                </div>
                <div className="mt-3 text-center text-[11px] font-mono text-slate-400">
                  真实生产环境申报截图 · 支持原图全分辨率查阅
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 4 Feature Bento Cards directly beneath pipeline */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          {/* Card 1: 自研三层语义体系 (Wide 7 cols) */}
          <div className="md:col-span-7 rounded-3xl bg-[#080E20]/90 border border-cyan-500/25 p-8 sm:p-10 relative overflow-hidden group hover:border-cyan-400/50 transition-all shadow-xl">
            <div className="flex items-center justify-between mb-5">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-2xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400">
                  <Cpu className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-xs font-mono text-cyan-400">核心 · 原创方法论</div>
                  <h3 className="text-xl sm:text-2xl font-black text-white">自研三层语义规范体系</h3>
                </div>
              </div>
              <div className="flex gap-1.5 font-mono text-[10px] text-slate-400">
                <span className="px-2.5 py-1 rounded bg-white/5 border border-white/10">DATA</span>
                <span className="px-2.5 py-1 rounded bg-white/5 border border-white/10">BUSINESS</span>
                <span className="px-2.5 py-1 rounded bg-white/5 border border-white/10">ANALYSIS</span>
              </div>
            </div>

            <p className="text-sm sm:text-base text-slate-300 leading-relaxed mb-6 font-normal">
              以数据语义规约数据边界，以业务语义映射真实网络，以分析语义收口因果推导。将业务专家脑中沉淀的隐性常识转化为机器可精确执行的标准化规则。
            </p>

            <div className="flex items-center gap-6 text-xs font-mono text-slate-400 border-t border-white/5 pt-5">
              <div>
                勾稽容差: <span className="text-emerald-400 font-bold">0.00% 绝对一致</span>
              </div>
              <div>
                模型底座: <span className="text-cyan-400 font-bold">解耦热插拔</span>
              </div>
              <button
                onClick={() => onOpenImage('img-4')}
                className="ml-auto text-cyan-400 hover:text-cyan-300 font-bold cursor-pointer"
              >
                查看架构总图原件 ↗
              </button>
            </div>
          </div>

          {/* Card 2: 丰景台 + 钉钉领慧双平台投产 (5 cols) */}
          <div className="md:col-span-5 rounded-3xl bg-[#080E20]/90 border border-cyan-500/25 p-8 sm:p-10 relative overflow-hidden group hover:border-cyan-400/50 transition-all shadow-xl">
            <div className="flex items-center justify-between mb-5">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-2xl bg-purple-500/10 border border-purple-500/30 flex items-center justify-center text-purple-400">
                  <Sparkles className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-xs font-mono text-purple-400">双轨投产 · 生产载体</div>
                  <h3 className="text-xl sm:text-2xl font-black text-white">丰景台 + 领慧AI小可</h3>
                </div>
              </div>
              <span className="px-2.5 py-1 rounded bg-cyan-950 border border-cyan-800 text-xs font-mono text-cyan-300 font-bold">
                2000+ MAU
              </span>
            </div>

            <p className="text-sm sm:text-base text-slate-300 leading-relaxed mb-6 font-normal">
              重度多维分析走丰景台独立 Agent，轻量协同走钉钉小可机器人。三层语义写入持久规则库，在顺丰日常办公协同中开箱即用。
            </p>

            <div className="flex items-center justify-between text-xs text-slate-400 border-t border-white/5 pt-5 font-mono">
              <span>覆盖核心产品业务处</span>
              <button
                onClick={() => onOpenImage('img-14')}
                className="text-cyan-400 hover:text-cyan-300 font-bold cursor-pointer"
              >
                查看生产首页 ↗
              </button>
            </div>
          </div>

          {/* Card 3: 自动化输出 HTML 诊断战报 (5 cols) */}
          <div className="md:col-span-5 rounded-3xl bg-[#080E20]/90 border border-cyan-500/25 p-8 sm:p-10 relative overflow-hidden group hover:border-cyan-400/50 transition-all shadow-xl">
            <div className="flex items-center justify-between mb-5">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
                  <Send className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-xs font-mono text-emerald-400">确定性交付</div>
                  <h3 className="text-xl sm:text-2xl font-black text-white">30分钟 HTML 诊断包</h3>
                </div>
              </div>
              <span className="px-2.5 py-1 rounded bg-emerald-950 border border-emerald-800 text-xs font-mono text-emerald-300 font-bold">
                提效 95%
              </span>
            </div>

            <p className="text-sm sm:text-base text-slate-300 leading-relaxed mb-6 font-normal">
              从原先 1-2 天的多人拉扯，缩短至 30 分钟自动化输出包含波动幅度、归因对象、时效证据链与落地挽留动作的标准化交互式报告。
            </p>

            <div className="flex items-center justify-between text-xs text-slate-400 border-t border-white/5 pt-5 font-mono">
              <span>直接推送钉钉产品群</span>
              <button
                onClick={() => onOpenImage('img-24')}
                className="text-cyan-400 hover:text-cyan-300 font-bold cursor-pointer"
              >
                查阅报告实录 ↗
              </button>
            </div>
          </div>

          {/* Card 4: 人机共生探讨与反例错题本 (Wide 7 cols) */}
          <div className="md:col-span-7 rounded-3xl bg-[#080E20]/90 border border-cyan-500/25 p-8 sm:p-10 relative overflow-hidden group hover:border-cyan-400/50 transition-all shadow-xl">
            <div className="flex items-center justify-between mb-5">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-2xl bg-blue-500/10 border border-blue-500/30 flex items-center justify-center text-blue-400">
                  <BookOpen className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-xs font-mono text-blue-400">知识闭环 · 演进机制</div>
                  <h3 className="text-xl sm:text-2xl font-black text-white">与 GPT 深度推演手稿与错题本机制</h3>
                </div>
              </div>
              <span className="px-2.5 py-1 rounded bg-white/5 border border-white/10 text-xs font-mono text-slate-300 font-bold">
                持续积累
              </span>
            </div>

            <p className="text-sm sm:text-base text-slate-300 leading-relaxed mb-6 font-normal">
              方法论源于与 ChatGPT 的深度对话启发；引入反例错题本回归机制，将每一次错误调用修正为显性规则写回版本库，经验永久沉淀。
            </p>

            <div className="flex items-center gap-6 text-xs font-mono text-slate-400 border-t border-white/5 pt-5">
              <div>
                共生记录: <span className="text-emerald-400 font-bold">全程可追溯支撑</span>
              </div>
              <div>
                新场景装载: <span className="text-cyan-400 font-bold">仅需 0.5 天极速复用</span>
              </div>
              <button
                onClick={() => onOpenImage('img-5')}
                className="ml-auto text-cyan-400 hover:text-cyan-300 font-bold cursor-pointer"
              >
                查看反例收口原件 ↗
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
