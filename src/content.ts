export const profile = {
  nameZh: "汤举嘉",
  nameEn: "Tang Jujia",
  title: "水声通信与智能系统方向研究生",
  domain: "tangjujia.me",
  location: "China",
  summary:
    "围绕水声通信中的复杂传播环境、噪声预测、信道预测与 OTSM/OFDM 系统验证开展研究；工程侧关注 Agent 后端、RAG、文档自动化和可部署的 AI 工作流。",
  contactNote:
    "联系方式、GitHub、论文链接和教育经历可继续补充；当前版本先把科研成果、项目经历和部署链路整理成可发布的首版主页。"
};

export const highlights = [
  { value: "3", label: "重点科研成果" },
  { value: "DB-WIN", label: "期刊论文投稿中" },
  { value: "SDT-ResNet", label: "期刊论文撰写中" },
  { value: "Agent", label: "实习与个人项目" }
];

export const papers = [
  {
    title: "Neural Network Based Underwater Acoustic OTSM-IM Detector",
    status: "会议论文",
    period: "2025",
    source: "25.7.2 论文修改",
    summary:
      "围绕水声 OTSM-IM 检测任务，构建神经网络检测器并对不同调制方式、信道参数和误码性能进行实验分析。",
    tags: ["OTSM-IM", "Detector", "BER", "Underwater Acoustic"],
    points: [
      "整理数据预处理、复数特征输入与多层网络检测流程。",
      "通过 BER 曲线展示不同调制阶数与系统参数下的检测表现。",
      "形成会议论文版本与展示材料。"
    ],
    images: [
      {
        src: "/assets/conference-detector-architecture.png",
        caption: "神经网络检测器结构"
      },
      {
        src: "/assets/conference-ber-modulation.png",
        caption: "不同调制方式 BER 对比"
      }
    ]
  },
  {
    title:
      "DB-WIN: A Dual-Branch Wavelet Interaction Network for Underwater Impulsive Noise Prediction",
    status: "期刊论文投稿中",
    period: "2026",
    source: "26.2.12 论文文件",
    summary:
      "针对水声环境噪声中的非平稳背景与高幅值冲击干扰，提出趋势/冲击双分支建模与跨频交互机制，用于短上下文水声冲击噪声预测。",
    tags: ["DB-WIN", "Wavelet", "TCN", "Attention", "PyTorch"],
    points: [
      "使用小波分解重构将原始信号解耦为趋势分量和冲击分量。",
      "趋势分支采用 LSTM，冲击分支采用因果扩张 TCN，并通过 cross-frequency attention 融合。",
      "在仿真与实测噪声数据上对比 LSTM、GRU、Transformer、DLinear、Informer 等基线。"
    ],
    images: [
      {
        src: "/assets/dbwin-architecture.png",
        caption: "DB-WIN 整体框架"
      },
      {
        src: "/assets/dbwin-scatter.png",
        caption: "预测值与观测值散点对比"
      }
    ]
  },
  {
    title: "Sparse Delay-Temporal Residual Prediction for Underwater Acoustic Channels",
    status: "期刊论文撰写中",
    period: "2026",
    source: "26.3.17 信道预测仿真",
    summary:
      "面向 outdated CSI 问题，构建 Watermark 原生时延-时间信道预测协议，并设计 SDT-ResNet 进行稀疏 active delay taps 的短时预测。",
    tags: ["SDT-ResNet", "Watermark", "Channel Prediction", "CSI", "PyTorch"],
    points: [
      "保留 Watermark 原生 TVIR/CIR 网格，使用实部/虚部表示复信道。",
      "采用 history_frames、temporal_stride 与 causal active-tap selection 避免相邻帧泄漏。",
      "与 Outdated CSI、Ridge AR、TCN、CNN-GRU、PatchTST、iTransformer、DLinear 等模型对比。"
    ],
    images: [
      {
        src: "/assets/sdt-tvir.png",
        caption: "实测探测 TVIR 热图"
      },
      {
        src: "/assets/sdt-ber-snr.png",
        caption: "预测 CSI 与 outdated CSI 系统表现"
      }
    ]
  }
];

export const projects = [
  {
    name: "CustomerSupport-Agent",
    type: "实习前个人项目",
    period: "2026 Spring",
    category: "LangGraph / FastAPI / RAG / HITL",
    description:
      "中文优先客服 Agent Demo，重点展示 LangGraph 条件路由、多 Agent 协作、轻量增强 RAG、长期/短期记忆和高风险工具人工审批。",
    stack: ["Python 3.11", "FastAPI", "LangGraph", "LangChain", "ChromaDB", "BM25", "PostgreSQL", "pgvector", "Docker"],
    details: [
      "主链路包含 analyze、knowledge、action、escalation、validate、respond 节点。",
      "支持 REST、SSE、WebSocket、Swagger、线程恢复与 LangSmith tracing。",
      "围绕 FAQ、订阅、账单、工单和人工升级构建可演示业务工具。"
    ]
  },
  {
    name: "标书智能体",
    type: "实习中主要项目",
    period: "2026 Internship",
    category: "FastAPI / DOCX Automation / Docker",
    description:
      "面向招投标材料处理的智能体服务，围绕招标文件解析、大纲组织、标书生成和格式化回填构建后端 API 与容器化部署链路。",
    stack: ["FastAPI", "Uvicorn", "httpx", "python-docx", "OpenAI API", "Docker Compose", "Pydantic"],
    details: [
      "接口覆盖文件下载保存、招标文件组织、标书生成、扩写信息格式化和产物下载。",
      "以 chatid 隔离文件目录，支持招标文件、默认大纲、图像信息和扩写信息等中间产物。",
      "提供 Dockerfile 与 docker-compose，便于服务在服务器环境复现。"
    ]
  },
  {
    name: "文档智能体 MVP",
    type: "实习中继续开发",
    period: "2026 Internship",
    category: "React / FastAPI / DOCX / PDF",
    description:
      "围绕需求澄清、工作流确认、分阶段生成和格式化导出的文档生产工作台，当前已跑通前端、后端和本地产物生成链路。",
    stack: ["React 19", "Vite", "FastAPI", "Pydantic", "python-docx", "reportlab", "Pillow", "pytest"],
    details: [
      "前端包含多轮对话、结构化需求表单、工作流状态、文档预览和产物下载。",
      "后端生成 Markdown、PNG 占位图、Word、PDF，并保留 Graphiti/OpenViking/opencode fallback 接口。",
      "后端端到端测试、Python 编译检查和前端生产构建已通过。"
    ]
  }
];

export const techStacks = [
  {
    title: "AI Agent & LLM",
    items: ["LangGraph", "LangChain", "RAG", "Memory", "HITL", "LangSmith", "OpenAI-compatible APIs"]
  },
  {
    title: "Backend & Deployment",
    items: ["FastAPI", "Pydantic", "Uvicorn", "httpx", "Docker", "Docker Compose", "Nginx"]
  },
  {
    title: "Research & ML",
    items: ["PyTorch", "NumPy", "SciPy", "Matplotlib", "Watermark", "OFDM/OTSM", "Time-series Forecasting"]
  },
  {
    title: "Document Automation",
    items: ["python-docx", "reportlab", "Pillow", "DOCX/PDF Export", "Office Workflow"]
  },
  {
    title: "Frontend",
    items: ["React", "Vite", "TypeScript", "CSS", "lucide-react", "Responsive UI"]
  }
];

export const timeline = [
  {
    time: "2025",
    title: "会议论文与 OTSM-IM 检测",
    detail:
      "围绕水声 OTSM-IM 检测器完成神经网络结构、训练曲线与 BER 实验图，并整理会议论文版本。"
  },
  {
    time: "2026",
    title: "DB-WIN 噪声预测期刊稿",
    detail:
      "推进 Dual-Branch Wavelet Interaction Network，覆盖仿真数据、实测数据、消融和高幅值区域误差分析。"
  },
  {
    time: "2026",
    title: "SDT-ResNet 信道预测论文",
    detail:
      "构建 Watermark 稀疏信道预测协议和 SDT-ResNet 模型，持续补充消融、敏感性和独立实测验证。"
  },
  {
    time: "Internship",
    title: "标书与文档智能体工程",
    detail:
      "围绕企业文档场景开发招投标材料处理、文档生成工作台、DOCX/PDF 导出和可部署 API。"
  }
];

export const deploymentSteps = [
  "本地开发：npm install 后运行 npm run dev，在 http://127.0.0.1:5173 查看。",
  "发布构建：运行 npm run build，生成 dist 静态目录。",
  "GitHub 管理：把本目录初始化为仓库或放入已有仓库，提交 package.json、src、public、deploy 等文件。",
  "服务器部署：把 dist 上传到服务器目录，例如 /var/www/tangjujia.me/html。",
  "Nginx 配置：参考 deploy/nginx-personal-website.conf，server_name 使用 tangjujia.me www.tangjujia.me。"
];
