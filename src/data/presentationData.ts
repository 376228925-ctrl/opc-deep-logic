export interface SlideContent {
  id: number;
  chapter: string;
  tag: string;
  title: string;
  subtitle: string;
  thesis: string;
  keyPoints: {
    title: string;
    description: string;
    metric?: string;
  }[];
  visualType: 'hero' | 'paradigm_split' | 'layer_cards' | 'tool_blueprint' | 'case_study' | 'metrics_grid' | 'qa_matrix' | 'flywheel';
  imageId?: string;
  speakerStrategy: {
    opening: string;
    coreArgument: string;
    defenseFocus: string;
  };
}

export const SLIDES_DATA: SlideContent[] = [
  {
    id: 1,
    chapter: '01 / 课题背景',
    tag: 'PROJECT OVERVIEW',
    title: '共生智能认知下的语义层数据分析实践',
    subtitle: '顺丰 AI 大赛决赛 · OPC 全链路 10 强方案',
    thesis: '将业务专家的隐性分析经验，转化为机器可执行的三层语义规则，实现从“盲目查数”到“可复核证据链”的确定性闭环。',
    keyPoints: [
      { title: '参赛赛道', description: '个人赛道 · OPC 全链路 (决赛 10 强)' },
      { title: '主创人员', description: 'M线本部 · 产品业务处 / 孙豪杰 (01368438)' },
      { title: '战队代号', description: 'cognitive shift' },
      { title: '落地成效', description: '丰景台与领慧已投产，服务 2000+ 业务月活', metric: '2000+ MAU' },
    ],
    visualType: 'hero',
    imageId: 'img-4',
    speakerStrategy: {
      opening: '各位评委好！我是来自产品业务处的孙豪杰。今天我路演的课题是《共生智能认知下的语义层数据分析实践》。',
      coreArgument: '本课题解决的核心问题是：为什么业务人员查了数，在关键复盘会上还是不敢直接使用 AI 给出的结论？',
      defenseFocus: '开门见山树立方案站位：用三层语义公理，把专家经验外化为生产级资产。',
    },
  },
  {
    id: 2,
    chapter: '02 / 业务痛点',
    tag: 'BUSINESS PAIN POINTS',
    title: '传统问数在顺丰业务中的三大断层',
    subtitle: '数据看得到，但“算不准、不敢用、无法闭环”',
    thesis: '顺丰每天处理亿级快件与数十万月结卡号。传统通用智能体由于缺乏业务上下文，在面对多表歧义时必然出现三大瓶颈。',
    keyPoints: [
      {
        title: '经验无法复用',
        description: '单次对话结束知识归零，换人、换区域后必须从头解释口径。',
      },
      {
        title: '结果不敢直接使用',
        description: '缺乏数据白名单，容易查错表；将开票主体划转误判为退网流失。',
      },
      {
        title: '任务无法闭环',
        description: '仅返回单一数字，无法定位原因，后续排查仍依赖多人跨周接力。',
      },
    ],
    visualType: 'paradigm_split',
    imageId: 'img-1',
    speakerStrategy: {
      opening: '传统 ChatBI 看似降低了取数门槛，实则把沉重负担转移到了后端的核数与解释环节。',
      coreArgument: '业务投入大量精力后，仍面临“数字对不上、结论不敢信”的窘境。',
      defenseFocus: '展示对顺丰实际业务痛点的深刻理解。',
    },
  },
  {
    id: 3,
    chapter: '03 / 症结剖析',
    tag: 'ROOT CAUSE ANALYSIS',
    title: '为什么通用大模型解决不了业务问题？',
    subtitle: '统计相关性无法跨越业务因果性的鸿沟',
    thesis: '大模型基于通用语料概率预测，但严谨的物流经营决策依靠数学双向勾稽与因果证据链。没有语义层约束，模型必然产生幻觉。',
    keyPoints: [
      {
        title: '实体层面的歧义',
        description: '大模型不知道重点战略客户在华南有数十张月结卡，开票与签约主体随时可能内部划转。',
      },
      {
        title: '时间维度的错位',
        description: '大模型不知道 618 大促每年在农历与电商爆发节奏上存在 3-5 天的跨期错位。',
      },
      {
        title: '因果推论的伪相关',
        description: '大模型倾向于把巧合走势强行归因，把单纯的“贡献大小”偷换为“本质原因”。',
      },
    ],
    visualType: 'paradigm_split',
    imageId: 'img-2',
    speakerStrategy: {
      opening: '单靠升级底层大模型，无法解决顺丰特定的业务规则问题。',
      coreArgument: '顺丰的规则是隐性、动态且深植于业务网络的，必须显式建模。',
      defenseFocus: '证明三层语义层是大模型走向严谨物流业务的必经之路。',
    },
  },
  {
    id: 4,
    chapter: '04 / 破局立论',
    tag: 'CORE INNOVATION',
    title: '破局关键：从对话纠偏到规则沉淀',
    subtitle: '人机深度思辨，提炼出可复用的“共生智能”',
    thesis: '本方案不是人类向 AI 下达单向指令，而是人提供业务先验与反例约束、AI 提供多源推理与证据组织，最终沉淀出标准化的三层语义 Skill。',
    keyPoints: [
      {
        title: '人负责：公理边界与反例检验',
        description: '定义数据权威源、实体映射规则、排除伪流失反例，设定停机收口红线。',
      },
      {
        title: 'AI 负责：海量证据检索与推理',
        description: '秒级穿透数仓正式明细、拆解量价贡献、交叉比对运力时效指标。',
      },
      {
        title: '沉淀物：标准化的原子 Skill',
        description: '不依赖个人临时提问，凝结为结构化配置，跨平台、跨业务即插即用。',
      },
    ],
    visualType: 'flywheel',
    imageId: 'img-15',
    speakerStrategy: {
      opening: '这项方案是我们在实际业务中，与大模型反复辩论、反例纠偏中沉淀出的思维方法。',
      coreArgument: '它把分析专家的脑内常识变成了代码级公理，让人与 AI 形成真正的共生。',
      defenseFocus: '凸显创新性与人机协同的方法论深度。',
    },
  },
  {
    id: 5,
    chapter: '05 / 数据语义',
    tag: 'LAYER 1 · DATA SEMANTICS',
    title: '数据语义：规范「查什么」与「怎么算」',
    subtitle: '数仓权威限定、指标公式对齐与双向勾稽',
    thesis: '数据语义是地基。它彻底剥夺了 AI 自由臆测表结构和计算公式的权力，将其牢牢锁定在经过数仓认证的金牌标准中。',
    keyPoints: [
      {
        title: '授权数据源物理隔离',
        description: '白名单准入，严格限制在 dws 正式表内，物理屏蔽临时表与开发表。',
      },
      {
        title: '核心指标公式对齐',
        description: '严格拆解实收收入、票数、票均单价，消除跨系统统计口径分歧。',
      },
      {
        title: '明细与总量二次勾稽',
        description: '下钻明细汇总值必须与宏观指标求和做 0.00% 容差比对，防重复聚合。',
      },
      {
        title: '权限安全与缺数防呆',
        description: '敏感字段自动脱敏；数仓缺少必要字段时主动中止，严禁无中生有。',
      },
    ],
    visualType: 'layer_cards',
    imageId: 'img-4',
    speakerStrategy: {
      opening: '数据语义解决的是“算得对不对、表对不对”的底线问题。',
      coreArgument: '通过 0 容差双向勾稽算子，确保每次输出的数字都具备财务级严肃的精确度。',
      defenseFocus: '回应技术委员会对数据准确性与防呆机制的关切。',
    },
  },
  {
    id: 6,
    chapter: '06 / 业务语义',
    tag: 'LAYER 2 · BUSINESS SEMANTICS',
    title: '业务语义：规范「对象是谁」与「波动背景」',
    subtitle: '母子卡网络拓扑、内部划转识别与大促可比日历',
    thesis: '业务语义赋予机器真正的行业常识。它让 AI 理解数字背后的物流现实世界，避免将表象波动当成经营实质。',
    keyPoints: [
      {
        title: '客户实体网络拓扑',
        description: '关联集团母公司、分公司与多张月结卡，在做流失预警前必须先完成主体归并。',
      },
      {
        title: '内部开票划转识别',
        description: '某卡号收入骤降但关联卡激增时，判定为客户内部开票调整，坚决不报虚假流失。',
      },
      {
        title: '电商大促动态日历对齐',
        description: '自动对齐 618、双 11 周期，按爆发节奏错位平移时间轴，剔除自然公历造成的假波动。',
      },
      {
        title: '运力时效上下文挂载',
        description: '挂载转运中心修路、时效排班等物流先验信息，使分析具备深厚现场感。',
      },
    ],
    visualType: 'layer_cards',
    imageId: 'img-5',
    speakerStrategy: {
      opening: '某大客户换了个新月结卡号，传统 AI 就会大喊客户流失。',
      coreArgument: '我们的业务语义层把顺丰客户关系网与大促日历配置化，看一眼就知道是内部划转，绝不惊慌。',
      defenseFocus: '展示对顺丰商业逻辑与客户网络的深度理解。',
    },
  },
  {
    id: 7,
    chapter: '07 / 分析语义',
    tag: 'LAYER 3 · ANALYSIS SEMANTICS',
    title: '分析语义：规范「推理顺序」与「闭环收口」',
    subtitle: '五步分析链、贡献与因果解耦、证据不足主动终止',
    thesis: '分析语义模仿资深分析专家的思维框架，将“贡献量化”与“原因探寻”严格剥离，只交付经得起推敲的证据链。',
    keyPoints: [
      {
        title: '严格五步推导链',
        description: '【1. 异常确认】➔【2. 量价拆解】➔【3. 对象定位】➔【4. 拐点追溯】➔【5. 闭环交付】。',
      },
      {
        title: '贡献多少与为何发生严格分离',
        description: '数字下降是数学分解事实，为什么下降是因果推论，严禁混为一谈。',
      },
      {
        title: '证据不足强制停止',
        description: '线索不是定论；若外部支撑证据不足，模型主动输出「待线下走访核实清单」。',
      },
      {
        title: '输出可执行的管理建议',
        description: '结合业务场景输出属地化挽留与排班优化建议，形成闭环管理。',
      },
    ],
    visualType: 'layer_cards',
    imageId: 'img-18',
    speakerStrategy: {
      opening: '传统分析最容易犯的错误是把相关性当因果性。',
      coreArgument: '分析语义立了规矩：证据不足老老实实写待核实项，杜绝拍脑袋下定论。',
      defenseFocus: '树立极致严谨的业务分析标准。',
    },
  },
  {
    id: 8,
    chapter: '08 / 工程落地',
    tag: 'DUAL-TRACK ENGINEERING',
    title: '双轨驱动：丰景台智能小景 + 领慧小可',
    subtitle: '深度分析专家与日常协同终端结合，覆盖顺丰核心办公生态',
    thesis: '方案以极简、高可用的工程载体无缝融入顺丰日常工作流，在丰景台与领慧双平台完整投产。',
    keyPoints: [
      {
        title: '丰景台智能小景 · 深度分析中枢',
        description: '作为数据资产平台的独立专家 Agent，挂接原子 Skill，支持多维下钻，月活超 2000+。',
        metric: '2,000+ MAU',
      },
      {
        title: '领慧 AI 助理小可 · 钉钉办公末梢',
        description: '打通钉钉，三层语义写入永久上下文记忆库，在群内随时@机器人即时查数。',
        metric: '0 门槛即用',
      },
      {
        title: '原子 Skill 模块化热插拔',
        description: '规则与大模型底座完全解耦，未来接入新基座模型，语义资产永续沉淀。',
        metric: '热插拔解耦',
      },
      {
        title: '集团安全鉴权完全继承',
        description: '所有取数完全走顺丰安全通道，全量数据严格脱敏，合规零风险。',
        metric: '100% 合规',
      },
    ],
    visualType: 'tool_blueprint',
    imageId: 'img-20',
    speakerStrategy: {
      opening: '我们不造没人用的独立系统，而是直接融入顺丰人每天都在用的两个核心工具。',
      coreArgument: '重度分析在丰景台，轻量问数在钉钉领慧。月活突破 2000+，证明了高频实用价值。',
      defenseFocus: '强调工程成熟度，已在生产环境大面积落地。',
    },
  },
  {
    id: 9,
    chapter: '09 / 实战复盘(上)',
    tag: 'CASE STUDY · PART 1',
    title: '实战复盘：XX 地区收入回落 30 分钟破案',
    subtitle: '阶段一与阶段二：机器异常初筛与量价数学解耦',
    thesis: '以今年 7 月某重点地区特快收入下滑真实案例为试金石，验证三层语义如何快速锁定问题本质。',
    keyPoints: [
      {
        title: '阶段一：真实异动确认',
        description: '剔除公历自然日错位，确认该地区 7 月真实收入同比下滑 6.8%，环比下滑 4.2%，锁定真异动。',
      },
      {
        title: '阶段二：量价分离运算',
        description: '调用金牌收入表进行明细与大盘勾稽，发现票均单价平稳，票数下滑贡献了 82% 的降幅。',
      },
      {
        title: '快速定调排雷',
        description: '不到 3 分钟，排除了价格战导致单票被动降价的猜测，明确主战场在于货量流失。',
      },
    ],
    visualType: 'case_study',
    imageId: 'img-21',
    speakerStrategy: {
      opening: '在真实业务中，收入回落传统做法是各业务线互相猜疑。',
      coreArgument: '我们的系统第一步就明确：单价没跌，是票数掉了！一句话定调，避免了一线盲目打折。',
      defenseFocus: '用实战切片证明算法如何直接指导管理决策。',
    },
  },
  {
    id: 10,
    chapter: '10 / 实战复盘(下)',
    tag: 'CASE STUDY · PART 2',
    title: '穿透本质：排除假流失，追溯转运时效真因',
    subtitle: '阶段三至五：主体网络拓扑、时效归因与标准战报交付',
    thesis: '精准锁定真正流失客户，追溯至转运时效延误，在 30 分钟内自动生成闭环建议，挽回潜在业务损失。',
    keyPoints: [
      {
        title: '阶段三：客户实体穿透',
        description: '发现客户 B 仅为开票主体划转，非实质流失；精准锁定真正流失源自电子制造大客户 A。',
      },
      {
        title: '阶段四：物流时效交叉核验',
        description: '比对客户 A 发货流向，发现属地转运中心修路绕行导致次日达妥投拉长 1.2 小时。',
      },
      {
        title: '阶段五：全流程闭环交付',
        description: '30 分钟内输出 HTML 诊断包，直接推送钉钉产品群，协同属地产品经理登门挽留。',
      },
    ],
    visualType: 'case_study',
    imageId: 'img-24',
    speakerStrategy: {
      opening: '传统 AI 会把客户 B 的调账当流失来报，结果销售跑去拜访被客户批评。',
      coreArgument: '我们不仅排除了假流失，还查明客户 A 切流是因为转运修路慢了 1.2 小时！当天就制定出时效优化挽留方案。',
      defenseFocus: '展现端到端闭环（OPC全链路），紧扣赛道核心。',
    },
  },
  {
    id: 11,
    chapter: '11 / 实证成效',
    tag: 'EMPIRICAL METRICS',
    title: '95% 效率飞跃：真实可验证的双盲对照数据',
    subtitle: '同题、同模型、同数据，加载语义层前后的对照组检验',
    thesis: '数据来自产品业务处与试点区部的严格对照实验，经得起后续现场核验。',
    keyPoints: [
      {
        title: '日常多维复杂查数',
        description: '耗时从 1 ~ 2 小时缩短至 5 分钟以内，提效率达 92% ~ 96%。',
        metric: '提效 94%',
      },
      {
        title: 'HTML 深度诊断报告撰写',
        description: '从原本跨部门收集材料耗时 1 ~ 2 天，降至 30 分钟自动化交付。',
        metric: '提效 96%',
      },
      {
        title: '综合经营分析材料整理',
        description: '耗时从 2 ~ 3 小时缩减至 30 分钟以内，提效 75% ~ 83%。',
        metric: '提效 80%',
      },
      {
        title: '年化人力有效释放',
        description: '年化释放大额高价值分析工时，转向高价值客户策略制定与管理干预。',
        metric: '释放多个 FTE',
      },
    ],
    visualType: 'metrics_grid',
    imageId: 'img-34',
    speakerStrategy: {
      opening: '数据是检验方案的唯一标准。我们在产品业务处进行了同模型同题目的双盲对照。',
      coreArgument: '报告撰写从 2 天缩到 30 分钟，意味着经营复盘从“事后被动追溯”变成了“事中快速拦截”。',
      defenseFocus: '强调数据的真实性与可核验性。',
    },
  },
  {
    id: 12,
    chapter: '12 / 组织沉淀',
    tag: 'ORGANIZATIONAL ASSET',
    title: '错题本机制与 0.5 天极速跨业务复制',
    subtitle: '让超级个体的成果，变成顺丰集团的共同资产',
    thesis: '方案的高价值不仅在于单点提效，更在于极低边际成本的可复制性。标准化原子 Skill 结构，使新场景仅需半天即可装载。',
    keyPoints: [
      {
        title: '反例错题本回归机制',
        description: '遇到失败用例由专家补充一条反例规则写回版本库；发布前自动化回归测试，经验只增不减。',
      },
      {
        title: '极低边际复制成本',
        description: '首个 Skill 梳理需 3-4 小时，后续复制到相近业务线，半天内即可完成配置上线。',
        metric: '0.5 天上线',
      },
      {
        title: '一线自发扩散的口碑',
        description: '区部一线同事自发点赞推荐，业务团队主动申请接入，形成良性扩散。',
        metric: '自发裂变',
      },
    ],
    visualType: 'flywheel',
    imageId: 'img-37',
    speakerStrategy: {
      opening: '这个方案在产品处好用，换个部门、换个区部还能灵吗？',
      coreArgument: '我们从第一天就做好了业务规则解耦设计。复制新场景只需配置规则文件，半天即可投产。',
      defenseFocus: '强力回应跨业务可复用性与推广潜力。',
    },
  },
  {
    id: 13,
    chapter: '13 / 远景蓝图',
    tag: 'FUTURE VISION',
    title: '从超级个体走向顺丰全链路数智运营中枢',
    subtitle: '人机共生驱动下，顺丰智慧运营的新质生产力跃迁',
    thesis: '在 OPC 全链路赛道中，我们展示了个人在 AI 时代的无限可能。当全网一线人员都武装上语义层，顺丰将拥有强大的数智分析网。',
    keyPoints: [
      {
        title: '短期规划 · 覆盖产品策略全域',
        description: '年内实现本部产品策略处全业务线覆盖，沉淀超过 50 个高频原子 Skill。',
      },
      {
        title: '中期扩展 · 赋能全国核心大区',
        description: '向核心业务大区推广语义层模板，让一线管理者在钉钉端随时洞察经营波动。',
      },
      {
        title: '远期愿景 · 构筑数智运营大脑',
        description: '将三层语义上升为集团级数据分析本体标准，成为顺丰物流新质生产力核心底座。',
      },
    ],
    visualType: 'hero',
    imageId: 'img-17',
    speakerStrategy: {
      opening: '今天展示的是个人如何凭借共生智能成为全链路超级个体。',
      coreArgument: '明天当这套语义公理推广到各区部，将为顺丰构建起极具敏锐度的数智运营中枢。',
      defenseFocus: '升华演讲主题，对齐集团数字化战略主线。',
    },
  },
  {
    id: 14,
    chapter: '14 / 答辩攻防',
    tag: 'HARD Q&A DEFENSE',
    title: '现场答辩攻防：硬核质询实证预案',
    subtitle: '针对技术委员会、业务专家与高管评委关切问题的回应',
    thesis: '底气来自生产环境实测。我们梳理了评委最关心的四大核心质询，并给出了实证回应。',
    keyPoints: [
      {
        title: 'Q1: 数仓底层若有脏数据，语义层如何防范？',
        description: '【回应】数据语义设有双向勾稽算子，明细求和与大盘总额超过 0 容差立即告警熔断，绝不带病推导。',
      },
      {
        title: 'Q2: 与传统规则引擎相比，AI 的必要性何在？',
        description: '【回应】规则引擎只能报死数；AI 负责跨系统复杂假设推演与上下文关联，语义层负责推理边界与收口。',
      },
      {
        title: 'Q3: 跨部门推广时，专家不配合梳理怎么办？',
        description: '【回应】采用“反例逆向提炼法”，只需专家指出 3-5 个错误样例，配置员即可半天内逆向萃取规则。',
      },
      {
        title: 'Q4: 数据安全与商业机密如何保障？',
        description: '【回应】完全依托顺丰内部授权环境（丰景台与领慧），不向外网泄露数据；月结卡号与商号执行动态脱敏。',
      },
    ],
    visualType: 'qa_matrix',
    imageId: 'img-13',
    speakerStrategy: {
      opening: '对于评委老师可能关心的深层疑问，我们早已做好了全方位的准备。',
      coreArgument: '我们不怕被挑战，因为每一个回答背后都有生产代码与真实日志作为佐证。',
      defenseFocus: '展现从容自信的专业素养。',
    },
  },
];
