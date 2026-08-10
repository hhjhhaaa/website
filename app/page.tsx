import { projects, type Project } from "./projects/data";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? (process.env.NODE_ENV === "production" ? "/website" : "");
const experience = [
  {
    period: "2021—至今",
    title: "独立建筑师",
    place: "个人实践 · 上海",
    detail: "主持住宅、文化空间与小型公共建筑项目，从概念设计持续参与至现场完成。",
  },
  {
    period: "2018—2021",
    title: "项目建筑师",
    place: "Atelier Horizon · 上海",
    detail: "负责公共文化与城市更新项目，协调设计团队、顾问与施工现场。",
  },
  {
    period: "2016—2018",
    title: "助理建筑师",
    place: "STUDIO NORTH · 东京",
    detail: "参与集合住宅与室内改造，专注模型研究、节点设计与材料样板。",
  },
];

const education = [
  ["2013—2016", "建筑学硕士", "同济大学 · 建筑与城市规划学院"],
  ["2008—2013", "建筑学学士", "东南大学 · 建筑学院"],
];

const recognition = [
  ["2025", "中国建筑新人奖 · 入围", "折院"],
  ["2024", "ArchDaily Building of the Year · 提名", "光隙美术馆"],
  ["2022", "上海城市空间艺术季 · 参展", "巷陌研究"],
];

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const cardClasses = ["project-card--tall", "project-card--wide", "project-card--portrait", "project-card--landscape"];
  return (
    <article className={`project-card ${cardClasses[index % cardClasses.length]}`}>
      <a className="project-link" href={`${basePath}/projects/${project.slug}/`} aria-label={`查看${project.title}项目`}>
        <div className="project-image-wrap">
          <img className="project-image" src={`${basePath}${project.cover}`} alt={project.alt} />
          <span className="project-open" aria-hidden="true">↗</span>
        </div>
        <div className="project-meta">
          <div>
            <span className="project-number">{project.number}</span>
            <h3>{project.title}</h3>
            <p>{project.titleEn}</p>
          </div>
          <div className="project-detail">
            <span>{project.role}</span>
            <span>{project.location}</span>
            <span>{project.year}</span>
          </div>
        </div>
      </a>
    </article>
  );
}

export default function Home() {
  return (
    <main>
      <a className="skip-link" href="#content">跳至主要内容</a>

      <header className="site-header">
        <a className="brand" href="#top" aria-label="林序个人主页">
          <span className="brand-mark">LX</span>
          <span className="brand-name">林序 · 建筑师<br />LIN XU · ARCHITECT</span>
        </a>

        <nav className="desktop-nav" aria-label="主要导航">
          <a href="#about">简介</a>
          <a href="#experience">经历</a>
          <a href="#projects">作品</a>
          <a href="#contact">联系</a>
        </nav>

        <details className="mobile-nav">
          <summary aria-label="打开导航菜单"><span>菜单</span><span>＋</span></summary>
          <nav aria-label="移动端导航">
            <a href="#about">简介</a>
            <a href="#experience">经历</a>
            <a href="#projects">作品</a>
            <a href="#contact">联系</a>
          </nav>
        </details>
      </header>

      <section className="hero" id="top" aria-labelledby="hero-title">
        <img className="hero-image" src={`${basePath}/projects/light-gallery.webp`} alt="暖阳进入极简混凝土室内空间" />
        <div className="hero-shade" />
        <div className="hero-copy">
          <p className="eyebrow light">Independent Architect · Shanghai</p>
          <h1 id="hero-title"><span className="hero-name-cn">林序</span><br />LIN XU</h1>
          <div className="hero-bottom">
            <p>建筑师 / 空间研究者<br />专注住宅、文化空间与城市更新。</p>
            <a className="text-link light" href="#about">个人简介 <span>↓</span></a>
          </div>
        </div>
        <div className="hero-index" aria-hidden="true">
          <span>Curriculum Vitae</span>
          <span>Updated · 08 / 2026</span>
        </div>
      </section>

      <section className="manifesto section-pad" id="content">
        <div id="about" className="anchor-target" />
        <p className="section-label"><span>01</span> 个人简介</p>
        <div className="manifesto-grid">
          <h2>用空间回应场所，<br />也安放具体的生活。</h2>
          <figure className="portrait-photo">
            <img src={`${basePath}/projects/architect-at-work.webp`} alt="建筑师在工作台前绘制建筑草图" />
            <figcaption>In studio · Shanghai, 2025</figcaption>
          </figure>
          <div className="manifesto-copy">
            <p>我是林序，一名工作于上海的独立建筑师。过去十年，我在中国与日本参与住宅、文化空间和城市更新项目。我的工作从对现场的观察开始，在结构、光线和材料之间寻找克制而准确的答案。</p>
            <a className="text-link" href="#experience">阅读完整履历 <span>↘</span></a>
          </div>
        </div>
        <dl className="profile-facts">
          <div><dt>现居</dt><dd>上海 · 中国</dd></div>
          <div><dt>执业方向</dt><dd>建筑 / 室内 / 更新</dd></div>
          <div><dt>工作语言</dt><dd>中文 / English / 日本語</dd></div>
          <div><dt>开放合作</dt><dd>2026 秋季</dd></div>
        </dl>
      </section>

      <section className="resume section-pad" id="experience" aria-labelledby="experience-title">
        <div className="resume-heading">
          <p className="section-label"><span>02</span> 个人经历</p>
          <h2 id="experience-title">Experience<br />&amp; Education</h2>
          <p>一份关于学习、实践与持续探索的简要记录。</p>
        </div>

        <div className="resume-content">
          <section className="resume-group" aria-labelledby="work-title">
            <h3 id="work-title"><span>A</span> 工作经历</h3>
            <ol className="resume-rows">
              {experience.map((item) => (
                <li key={item.period}>
                  <time>{item.period}</time>
                  <div><strong>{item.title}</strong><span>{item.place}</span></div>
                  <p>{item.detail}</p>
                </li>
              ))}
            </ol>
          </section>

          <div className="resume-columns">
            <section className="resume-group" aria-labelledby="education-title">
              <h3 id="education-title"><span>B</span> 教育背景</h3>
              <ol className="compact-rows">
                {education.map(([period, title, place]) => (
                  <li key={period}><time>{period}</time><div><strong>{title}</strong><span>{place}</span></div></li>
                ))}
              </ol>
            </section>
            <section className="resume-group" aria-labelledby="recognition-title">
              <h3 id="recognition-title"><span>C</span> 奖项与展览</h3>
              <ol className="compact-rows">
                {recognition.map(([year, title, project]) => (
                  <li key={`${year}-${title}`}><time>{year}</time><div><strong>{title}</strong><span>{project}</span></div></li>
                ))}
              </ol>
            </section>
          </div>

          <a className="cv-link" href="#contact">索取完整 CV <span>↗</span></a>
        </div>
      </section>

      <section className="projects section-pad" id="projects" aria-labelledby="projects-title">
        <div className="section-heading">
          <p className="section-label"><span>03</span> 代表作品</p>
          <h2 id="projects-title">Selected Works</h2>
          <p>六项代表性实践，记录我从<br />概念、深化到现场的角色。</p>
        </div>
        <div className="project-grid">
          {projects.map((project, index) => <ProjectCard key={project.number} project={project} index={index} />)}
        </div>
      </section>

      <section className="practice" id="practice" aria-labelledby="practice-title">
        <div className="practice-intro section-pad">
          <p className="section-label"><span>04</span> 设计关注</p>
          <h2 id="practice-title">少一点姿态，<br />多一点感受。</h2>
        </div>
        <div className="principles">
          <article><span>01</span><h3>阅读场所</h3><p>从气候、地形和人的路径开始，让方案长在它所在的地方。</p></article>
          <article><span>02</span><h3>触摸材料</h3><p>尊重材料的触感与老化过程，也尊重每一道真实的建造痕迹。</p></article>
          <article><span>03</span><h3>留给时间</h3><p>把使用、变化与自然生长纳入设计，让空间在生活中继续完成。</p></article>
        </div>
      </section>

      <section className="contact" id="contact" aria-labelledby="contact-title">
        <p className="section-label"><span>05</span> 联系我</p>
        <h2 id="contact-title">聊聊空间，<br />也聊聊你的想法。</h2>
        <a className="contact-mail" href="mailto:hello@linxu.archi">hello@linxu.archi <span>↗</span></a>
        <footer>
          <div><p>林序 · 独立建筑师</p><p>Shanghai · China</p></div>
          <div className="footer-links">
            <a href="#top">回到顶部 ↑</a>
            <a href="https://unsplash.com" target="_blank" rel="noreferrer">影像 / Unsplash</a>
          </div>
          <p className="copyright">© 2026 LIN XU · ARCHITECT</p>
        </footer>
      </section>
    </main>
  );
}
