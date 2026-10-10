import { MetricItem, SemanticLayerDef, CaseStep, ScorecardCriterion } from '../types';

export const PROJECT_INFO = {
  title: '共生智能认知下的语义层数据分析实践',
  subtitle: '构建企业级数据语义·业务语义·分析语义体系',
  englishTitle: 'Semantic Layer Data Analytics Under Symbiotic Intelligence',
  teamName: 'cognitive shift',
  track: '个人赛道 · OPC 全链路 10 强',
  organization: 'M线本部 · 产品业务处',
  author: '孙豪杰',
  jobTitle: '产品策略支持高级专员',
  thesis: '通用大语言模型缺乏顺丰特定的业务网络上下文与分析口径标准。我们通过构建独创的「数据语义 · 业务语义 · 分析语义」三层体系，将资深业务专家的隐性分析经验沉淀为可执行的原子 Skill，消除传统问数工具查错表、合错对象、推论缺乏证据链的核心瓶颈，实现从盲目取数到端到端可复核证据链的确定性交付。',
  targetAudience: '集团及各区部涉及经营分析、业务复盘、客户跟进的数据分析人员与管理者',
};

export const METRICS: MetricItem[] = [
  {
    name: '日常多维数据查询',
    before: '1 ~ 2 小时',
    after: '< 5 分钟',
    improvement: '提效 92% ~ 96%',
    improvementRate: 94,
    desc: '跨系统找表、核验字段与关联口径的时间大幅缩减为自然语言即问即答，指标口径完全对齐。',
  },
  {
    name: '分析诊断报告 (HTML)',
    before: '1 ~ 2 天',
    after: '30 分钟',
    improvement: '提效 94% ~ 97%',
    improvementRate: 95.5,
    desc: '端到端自动完成异常识别、波动分解、实体归并、拐点归因与证据链组织，直接输出标准化报告。',
  },
  {
    name: '数据综合材料撰写',
    before: '2 ~ 3 小时',
    after: '30 分钟',
    improvement: '提效 75% ~ 83%',
    improvementRate: 79,
    desc: '从繁重的人工制图、贴数、文字整理中解放，转向聚焦核心业务洞察与管理干预决策。',
  },
];

export const PAIN_POINTS = [
  {
    id: 'p1',
    title: '经验无法复用',
    tag: '知识碎片化',
    problem: '同类问题每次都要重新向 AI 解释口径、实体和推理顺序。',
    impact: '人与 AI 的关键纠偏停留在单次对话气泡中，换人、换地区后又要从头反复提示，无法作为组织资产沉淀。',
    traditionalFlow: '人工反复 Prompt 提示 -> AI 偶尔答对 -> 会话结束知识归零 -> 下一位同事重新踩坑',
    solvedBy: '沉淀为标准化 Skill 配置与持久化语义层，跨区域即装即用',
  },
  {
    id: 'p2',
    title: '结果不敢直接使用',
    tag: '数据可信危机',
    problem: '缺少数据来源约束、客户主体归并与分析路径规范，AI 容易查错表、合错对象、混淆月结卡。',
    impact: '给出浅层同环比甚至数字相近但口径不符，业务人员仍需回溯底层系统逐笔人工核查，数据“看得到但不敢用”。',
    traditionalFlow: 'AI 输出一个数字 -> 业务心存疑虑 -> 人工登入底层系统对数 1 小时 -> 发现取错中间表',
    solvedBy: '三层语义强约束：授权表范围、明细与总量必须对齐、主附卡归并、可比周期对齐',
  },
  {
    id: 'p3',
    title: '任务无法闭环',
    tag: '断层与推诿',
    problem: '传统 ChatBI 仅停留在“返回一个静态数值”，无法深入回答“为何发生”、“谁是主因”、“证据何在”。',
    impact: '后续原因定位、证据交叉验证与业务建议仍依赖多人跨部门多轮接力，耗时长、证据分散、归因缺乏严谨性。',
    traditionalFlow: '提出波动疑问 -> 问数返回降了5% -> 呼叫客户经理补充背景 -> 会议反复辩论缺乏证据链',
    solvedBy: '分析语义强制分层交付：将“贡献度”、“原因假设”与“证据边界”严格分离，证据不足主动停止',
  },
];

export const SEMANTIC_LAYERS: SemanticLayerDef[] = [
  {
    id: 'data',
    title: '数据语义 (Data Semantics)',
    subtitle: '规范「查什么」与「怎么算」',
    coreQuestion: '底层授权是哪张表？字段口径是哪一条？统计粒度是否严谨？',
    definition: '明确授权数据源范围、字段定义、指标公式、时间边界与组织归属粒度。统一票数与票均收入，严禁相近表混淆替代。',
    rules: [
      '授权数据源限定：严格限制查询只在指定的经过数仓认证的数据集内执行',
      '计算口径强制对齐：严格区分实收收入、计费收入、票均单价等计算逻辑',
      '明细与总量双向勾稽：要求下钻明细汇总值与宏观总量做二次比对，防重复聚合',
      '安全与权限围栏：越权字段自动阻断，缺数时限定结论范围，绝不胡编乱造',
    ],
    antiPattern: '传统模式：AI 盲目调用 Text-to-SQL，把已作废的历史临时表当正式表聚合，产出假数字。',
    bestPractice: '语义层约束：原子 Skill 预置权威表字典与校验算子，确保每次查询底座绝对可信。',
    color: '#3B82F6', // Blue
  },
  {
    id: 'business',
    title: '业务语义 (Business Semantics)',
    subtitle: '规范「对象是谁」与「波动背景如何理解」',
    coreQuestion: '客户实体到底指哪个集团主体？大促周期如何选取可比窗口？',
    definition: '定义顺丰核心业务实体关系（如集团主客户与各区部月结卡、账号迁移关系及生效时间），在时间维度上引入业务日历（如618、双11跨期同口径对比）。',
    rules: [
      '客户实体智能归并：必须先识别主母账户及多张月结卡，先归并主体再计算流失风险',
      '账户迁移识别：区分真正的“客户流失”还是“因客户内部调账导致的账号主体迁移”',
      '周期可比性窗口：对大促、节假日等波动自动选择可比窗口，剥离季节性与突发影响',
      '业务背景知识挂载：挂载运力排班、产品线调整等上下文，防止出现脱离实际的误判',
    ],
    antiPattern: '传统模式：将某大客户旗下卡号变更误判为“客户退网流失”，引发虚惊与误导。',
    bestPractice: '语义层约束：自动映射母子公司关系网，精准捕获业务实质。',
    color: '#8B5CF6', // Purple
  },
  {
    id: 'analysis',
    title: '分析语义 (Analysis Semantics)',
    subtitle: '规范「先查什么后查什么」与「如何收口闭环」',
    coreQuestion: '推理链路是否符合分析逻辑？是相关性还是因果性？证据不足时能否承认？',
    definition: '规定标准化分析推理顺序：先核验异常是否存在，再按维度拆解贡献权重，接着定位核心责任对象并追溯拐点，最终多源交叉核验因果。',
    rules: [
      '标准化五步分析链：异常确认 -> 贡献拆解 -> 对象定位 -> 拐点追溯 -> 交叉核验',
      '贡献度与因果性分离交付：“波动是由谁引起的(贡献多少)”与“为何发生”绝不混为一谈',
      '证据边界收口机制：线索不可直接写成定论，缺乏支撑证据时主动标注「待线下核实项」',
      '可执行建议生成：结合业务场景输出落地干预动作，形成闭环管理',
    ],
    antiPattern: '传统模式：把两个巧合的趋势图拼在一起直接宣称“因为A导致了B”，结论经不起推敲。',
    bestPractice: '语义层约束：像资深产品策略分析师一样遵循证据链逻辑，敢于指出数据盲区。',
    color: '#EF4444', // Red (SF signature accent)
  },
];

export const CASE_STUDY: CaseStep[] = [
  {
    step: 1,
    phase: '业务提问与异常确认',
    semanticRole: '分析语义 · 步骤1',
    userPrompt: '“XX 地区 7 月份产品收入出现明显回落，具体是因为什么？主要受哪些客户影响？”',
    aiAction: '触发原子 Skill，首先核验 7 月收入基线，识别同比与环比回落的真实幅度（剔除统计周期差异）。',
    evidenceProduced: '确认该地区 7 月实际收入同比下滑 6.8%，环比下滑 4.2%，存在真实异动。',
    businessOutcome: '排除统计口径误报，锁定确有异动，避免无效排查。',
    image: '/images/image21.jpg',
  },
  {
    step: 2,
    phase: '数据语义核准与明细核对',
    semanticRole: '数据语义',
    userPrompt: '自动执行下钻子查询',
    aiAction: '调用授权数仓正式表，调取该地区月结卡明细、产品线票数与票均收入，核对明细和总额勾稽一致。',
    evidenceProduced: '排除由于票均降价引起的被动下滑，核心在于件量票数下滑（贡献了 82% 的降幅）。',
    businessOutcome: '明确定位问题主要出在“货量规模”而非“单票价格侵蚀”。',
    image: '/images/image28.jpg',
  },
  {
    step: 3,
    phase: '业务语义穿透与主体归并',
    semanticRole: '业务语义',
    userPrompt: '自动聚类波动客户',
    aiAction: '关联客户主卡与附卡网络，过滤常规季节性波动，识别出 Top 3 异动客户集团主体。',
    evidenceProduced: '发现客户 A 旗下 4 张月结卡流失贡献达 45%；但穿透发现客户 B 仅为开票主体迁移至邻区。',
    businessOutcome: '避免误判客户 B，将精力精准收敛至真正流失的客户 A 及关联行业。',
    image: '/images/image29.jpg',
  },
  {
    step: 4,
    phase: '拐点追溯与交叉核验',
    semanticRole: '分析语义 · 步骤3 & 4',
    userPrompt: '自动调取外部时序与业务日历',
    aiAction: '拉取该客户近 12 周发货拐点，与竞品政策、大促前置及运力时效指标做相关性交叉比对。',
    evidenceProduced: '拐点精准发生在 7 月第 2 周，伴随该地区转运中心临时修路绕行导致妥投时效略微拉长 1.2 小时。',
    businessOutcome: '形成具备高度置信度的“因果证据链”，而非主观臆测。',
    image: '/images/image23.jpg',
  },
  {
    step: 5,
    phase: '标准化诊断报告交付与闭环',
    semanticRole: '三层语义合力交付',
    userPrompt: '生成结构化分析交付物',
    aiAction: '自动生成 HTML 交互式诊断报告，拆分「贡献量化」、「核心因果证据」、「待线下拜访核实项」与「跟进建议」。',
    evidenceProduced: '输出完整证据链长图与建议包，直接推送钉钉业务群，抄送属地产品经理。',
    businessOutcome: '从原先需要 1-2 天的多人往复沟通，压缩至 30 分钟端到端闭环交付。',
    image: '/images/image24.jpg',
  },
];

export const SCORECARD: ScorecardCriterion[] = [
  {
    category: '业务价值',
    weight: 35,
    subitems: [
      {
        title: '战略契合度 (10%)',
        weight: '10%',
        claim: '深度对齐集团 AI 战略核心主线：降本、增效、客体关怀与经营风控。',
        evidence: '直击本部与区部经营分析中高频的收入回落与异动客户挽留场景，赋能全链路运营与业务决策。',
      },
      {
        title: '量化业务价值 (15%)',
        weight: '15%',
        claim: '数据查询提效 92%~96%，诊断报告撰写从 1-2天 压缩至 30分钟 (提效 94%~97%)。',
        evidence: '基于真实产品业务处与区部实测数据，前后对比清晰无虚假，直接为每位分析师每周节约 15+ 工时。',
      },
      {
        title: '影响人群规模 (10%)',
        weight: '10%',
        claim: '已集成至产品智能体，月活用户超过 2000+。',
        evidence: '覆盖 M 线本部及全国多区部，理论上可复制覆盖顺丰集团所有与数据分析相关的团队与数智化岗位。',
      },
    ],
  },
  {
    category: '技术深度',
    weight: 30,
    subitems: [
      {
        title: '方案完整度 (15%)',
        weight: '15%',
        claim: '具备端到端全链路工程闭环：业务痛点 -> 三层语义建模 -> 平台工程装载 -> 自动化报告验收 -> 规则写回版本。',
        evidence: '不只是写 Prompt，而是构建了完整原子 Skill、反例构造、回归评测与版本库迭代闭环。',
      },
      {
        title: '可行性与工程搭建 (10%)',
        weight: '10%',
        claim: '双平台落地运行：丰景台智能小景 Agent + 领慧 AI 工作台小可机器人 (钉钉原生)。',
        evidence: '完成角色配置、大模型与 Skill 挂载、数仓工具权限纳管与上线试用，运行稳定丝滑。',
      },
      {
        title: 'AI 必要性及实质有效 (5%)',
        weight: '5%',
        claim: '破除传统 ChatBI“看得到不敢用、返回一个数无法闭环”的核心顽疾。',
        evidence: '证明大模型通用推理必须与顺丰业务语义与分析语义深度锚定，AI 真正具备业务因果解析能力。',
      },
    ],
  },
  {
    category: '通用复用',
    weight: 25,
    subitems: [
      {
        title: '跨业务可复用性 (10%)',
        weight: '10%',
        claim: '首个 Skill 梳理 3-4 小时，后续相近区域或任务半天内即可完成快速迁移。',
        evidence: '语义架构与底层平台解耦，保留业务判断方法，重新挂接本地数据与权限即可极速生效。',
      },
      {
        title: '核心创新性 (10%)',
        weight: '10%',
        claim: '“共生智能 (Cognitive Shift)”认知跃迁：人机对话反思中提炼组织沉淀，首次提出三层语义隔离交付。',
        evidence: '将贡献度、原因与证据边界解耦交付，打破把相关性当因果性的业内顽疾。',
      },
      {
        title: '持续迭代潜力 (5%)',
        weight: '5%',
        claim: '建立错题本与反例库回归测试机制，持续反哺知识资产。',
        evidence: '遇到失败用例直接修订语义配置文件，通过标准化明确题、模糊题、边界题自动化验收。',
      },
    ],
  },
  {
    category: '现场演绎',
    weight: 10,
    subitems: [
      {
        title: '故事性与答辩流畅度 (10%)',
        weight: '10%',
        claim: '超级个体真实心路、直击业务痛点、交互式数据沙盘与现场可互动 Demo。',
        evidence: '提供 PPT 大屏演讲模式与全景控制台模式无缝切换，为决赛答辩提供震撼视听体验。',
      },
    ],
  },
];
