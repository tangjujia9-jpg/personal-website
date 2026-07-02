import {
  ArrowUpRight,
  BookOpen,
  Boxes,
  BrainCircuit,
  Code2,
  Cpu,
  FileText,
  Github,
  Mail,
  MapPin,
  RadioTower,
  Server,
  ShipWheel,
  Sparkles,
  Workflow
} from "lucide-react";
import {
  deploymentSteps,
  highlights,
  papers,
  profile,
  projects,
  techStacks,
  timeline
} from "./content";

const navItems = [
  ["成果", "#papers"],
  ["项目", "#projects"],
  ["技术", "#skills"],
  ["经历", "#timeline"],
  ["部署", "#deploy"]
];

const projectIcons = [BrainCircuit, FileText, Workflow];

function App() {
  return (
    <main className="site-shell">
      <header className="topbar" aria-label="主导航">
        <a className="brand" href="#top" aria-label="返回首页">
          <span className="brand-mark">TJ</span>
          <span>{profile.domain}</span>
        </a>
        <nav>
          {navItems.map(([label, href]) => (
            <a key={href} href={href}>
              {label}
            </a>
          ))}
        </nav>
      </header>

      <section className="hero" id="top">
        <div className="hero-copy">
          <p className="eyebrow">
            <RadioTower size={16} />
            Underwater acoustics / AI systems
          </p>
          <h1>
            {profile.nameZh}
            <span>{profile.nameEn}</span>
          </h1>
          <p className="role-line">{profile.title}</p>
          <p className="lead">{profile.summary}</p>
          <div className="hero-actions">
            <a className="primary-action" href="#papers">
              查看科研成果
              <ArrowUpRight size={18} />
            </a>
            <a className="ghost-action" href="#projects">
              工程项目
              <Sparkles size={18} />
            </a>
          </div>
        </div>

        <div className="signal-panel" aria-label="研究概览图形">
          <div className="signal-header">
            <span>Research Map</span>
            <span>2025-2026</span>
          </div>
          <div className="signal-visual">
            <span className="wave wave-a" />
            <span className="wave wave-b" />
            <span className="wave wave-c" />
            <div className="node node-one">
              <Cpu size={18} />
              DB-WIN
            </div>
            <div className="node node-two">
              <ShipWheel size={18} />
              OTSM-IM
            </div>
            <div className="node node-three">
              <Boxes size={18} />
              SDT-ResNet
            </div>
          </div>
        </div>
      </section>

      <section className="quick-facts" aria-label="关键词">
        {highlights.map((item) => (
          <div key={item.value} className="fact">
            <strong>{item.value}</strong>
            <span>{item.label}</span>
          </div>
        ))}
      </section>

      <section className="section split-section" id="papers">
        <div className="section-kicker">
          <BookOpen size={18} />
          Publications
        </div>
        <div className="section-heading">
          <h2>科研成果</h2>
          <p>
            重点展示三项当前最能代表研究主线的工作：会议论文、投稿中的 DB-WIN 期刊稿，以及撰写中的 SDT-ResNet 信道预测论文。
          </p>
        </div>
        <div className="paper-grid">
          {papers.map((paper, index) => (
            <article className="paper-card" key={paper.title}>
              <div className="paper-meta">
                <span>{paper.status}</span>
                <span>{paper.period}</span>
                <span>{paper.source}</span>
              </div>
              <div className="paper-body">
                <div>
                  <p className="paper-index">0{index + 1}</p>
                  <h3>{paper.title}</h3>
                  <p>{paper.summary}</p>
                  <div className="tag-list">
                    {paper.tags.map((tag) => (
                      <span key={tag}>{tag}</span>
                    ))}
                  </div>
                </div>
                <ul>
                  {paper.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              </div>
              <div className="paper-images">
                {paper.images.map((image) => (
                  <figure key={image.src}>
                    <img src={image.src} alt={image.caption} />
                    <figcaption>{image.caption}</figcaption>
                  </figure>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section" id="projects">
        <div className="section-kicker">
          <Sparkles size={18} />
          Projects
        </div>
        <div className="section-heading compact">
          <h2>工程项目</h2>
          <p>
            项目部分按时间和场景拆开：实习前个人 Agent 项目，以及实习中围绕标书和文档生成继续推进的两个主项目。
          </p>
        </div>
        <div className="project-grid">
          {projects.map((project, index) => {
            const Icon = projectIcons[index] ?? Code2;
            return (
              <article className="project-card" key={project.name}>
                <div className="project-card-head">
                  <div className="project-icon">
                    <Icon size={22} />
                  </div>
                  <div>
                    <span>{project.type}</span>
                    <strong>{project.period}</strong>
                  </div>
                </div>
                <p className="project-category">{project.category}</p>
                <h3>{project.name}</h3>
                <p>{project.description}</p>
                <ul>
                  {project.details.map((detail) => (
                    <li key={detail}>{detail}</li>
                  ))}
                </ul>
                <div className="stack-list">
                  {project.stack.map((item) => (
                    <span key={item}>{item}</span>
                  ))}
                </div>
              </article>
            );
          })}
        </div>
      </section>

      <section className="section skills-section" id="skills">
        <div className="section-kicker">
          <Code2 size={18} />
          Stack
        </div>
        <div className="section-heading compact">
          <h2>技术栈</h2>
          <p>覆盖科研实验、Agent 后端、文档自动化、前端展示和服务器部署。</p>
        </div>
        <div className="skills-grid">
          {techStacks.map((group) => (
            <article className="skill-card" key={group.title}>
              <h3>{group.title}</h3>
              <div>
                {group.items.map((item) => (
                  <span key={item}>{item}</span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section timeline-section" id="timeline">
        <div className="section-kicker">
          <MapPin size={18} />
          Timeline
        </div>
        <div className="section-heading compact">
          <h2>阶段经历</h2>
          <p>从会议论文、期刊论文到实习项目，形成“科研算法 + 工程系统”的组合路径。</p>
        </div>
        <div className="timeline">
          {timeline.map((item) => (
            <article className="timeline-item" key={item.title}>
              <time>{item.time}</time>
              <h3>{item.title}</h3>
              <p>{item.detail}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section deploy-section" id="deploy">
        <div className="deploy-copy">
          <div className="section-kicker">
            <Server size={18} />
            Deployment
          </div>
          <h2>从本地到 tangjujia.me</h2>
          <p>
            这个项目按静态站点设计，Nginx 只需要托管构建后的 dist 目录。后续如果加博客、后台或接口，再单独规划反向代理。
          </p>
        </div>
        <ol className="deploy-steps">
          {deploymentSteps.map((step) => (
            <li key={step}>{step}</li>
          ))}
        </ol>
      </section>

      <footer className="footer">
        <div>
          <strong>{profile.nameZh}</strong>
          <p>{profile.contactNote}</p>
        </div>
        <div className="footer-links">
          <a href="mailto:hello@tangjujia.me" aria-label="发送邮件">
            <Mail size={18} />
            Email
          </a>
          <a href="https://github.com/" target="_blank" rel="noreferrer">
            <Github size={18} />
            GitHub
          </a>
        </div>
      </footer>
    </main>
  );
}

export default App;
