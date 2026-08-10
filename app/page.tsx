import { DrawingPlate } from "./components/DrawingPlate";
import { projects, type Project } from "./projects/data";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? (process.env.NODE_ENV === "production" ? "/website" : "");

const skillGroups = [
  { index: "01", title: "绘图表达", en: "Drawing", detail: "总图 · 平面 · 剖面 · 轴测 · 节点" },
  { index: "02", title: "数字建模", en: "Modeling", detail: "Rhino · SketchUp · AutoCAD" },
  { index: "03", title: "视觉排版", en: "Layout", detail: "InDesign · Illustrator · Photoshop" },
  { index: "04", title: "实体制作", en: "Making", detail: "纸板 · 木材 · 激光切割 · 模型摄影" },
];

function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="student-project-card">
      <a href={`${basePath}/projects/${project.slug}/`} aria-label={`查看${project.title}项目详情`}>
        <div className="student-project-head">
          <time>{project.year}</time>
          <span>{project.number} / 06</span>
        </div>
        <DrawingPlate
          variant={project.variant}
          index={`${project.year.slice(2)}-${project.number}`}
          caption={`${project.type} / ${project.titleEn}`}
        />
        <div className="student-project-copy">
          <div>
            <h3>{project.title}</h3>
            <p>{project.titleEn}</p>
          </div>
          <p>{project.summary}</p>
          <span className="project-arrow" aria-hidden="true">↗</span>
        </div>
      </a>
    </article>
  );
}

export default function Home() {
  return (
    <main className="student-site">
      <a className="skip-link" href="#content">跳至主要内容</a>

      <header className="student-header">
        <a className="student-brand" href="#top" aria-label="郭羽棋建筑学生作品集首页">
          <strong>GYQ</strong>
          <span>GUO YUQI<br />M.ARCH · 2026</span>
        </a>
        <nav aria-label="主要导航">
          <a href="#about">关于</a>
          <a href="#skills">能力</a>
          <a href="#projects">作品</a>
          <a href="#contact">联系</a>
        </nav>
      </header>

      <section className="student-hero" id="top" aria-labelledby="hero-title">
        <div className="hero-blueprint" aria-hidden="true" />
        <div className="student-hero-copy">
          <p className="micro-label"><span>Portfolio</span> 2019—2026</p>
          <h1 id="hero-title">ARCHITECTURE<br /><em>STUDENT</em><br />PORTFOLIO</h1>
          <div className="hero-intro">
            <p>郭羽棋 / 应届建筑学硕士</p>
            <p>以绘图、模型与排版记录<br />学生时代的空间实验。</p>
          </div>
        </div>
        <DrawingPlate variant="axon" index="G-06" caption="Graduation project / Urban Stitch" className="hero-drawing" />
        <div className="hero-note" aria-hidden="true">
          <span>Selected academic works</span>
          <span>Singapore · Shenzhen</span>
        </div>
      </section>

      <section className="student-about section-pad" id="content">
        <div id="about" className="anchor-target" />
        <p className="student-section-label"><span>01</span> About / 个人背景</p>
        <div className="about-layout">
          <div className="about-statement">
            <h2>刚刚离开校园，<br />仍然保持提问。</h2>
            <p>我是郭羽棋，2026 年毕业于新加坡国立大学建筑学硕士，建筑学本科就读于哈尔滨工业大学（深圳）。这个网站记录学生时代从空间分析、方案设计到图纸、模型与排版的学习过程，也希望为正在准备建筑作品集的同学提供可参考的表达路径。</p>
          </div>
          <figure className="student-portrait">
            <img src={`${basePath}/projects/architect-at-work.webp`} alt="建筑学生在工作台前绘制建筑图纸" />
            <figcaption><span>Studio diary</span><span>05 / 2026</span></figcaption>
          </figure>
          <dl className="student-profile">
            <div><dt>教育</dt><dd>NUS · M.Arch 2026</dd></div>
            <div><dt>关注</dt><dd>建筑方案 / 空间分析 / 建筑表达</dd></div>
            <div><dt>学习经历</dt><dd>新加坡 / 深圳</dd></div>
            <div><dt>状态</dt><dd>开放建筑设计机会与作品集交流</dd></div>
          </dl>
        </div>
      </section>

      <section className="student-skills" id="skills" aria-labelledby="skills-title">
        <div className="skills-heading section-pad">
          <p className="student-section-label"><span>02</span> Toolkit / 能力图谱</p>
          <h2 id="skills-title">从想法到图纸，<br />再到一本完整作品集。</h2>
          <p>我把设计过程理解为持续转换：观察变成概念，概念变成模型，模型变成图纸，最后由排版建立清晰叙事。</p>
        </div>
        <div className="skill-list">
          {skillGroups.map((skill) => (
            <article key={skill.index}>
              <span>{skill.index}</span>
              <div><h3>{skill.title}</h3><p>{skill.en}</p></div>
              <p>{skill.detail}</p>
              <i aria-hidden="true" />
            </article>
          ))}
        </div>
      </section>

      <section className="student-projects section-pad" id="projects" aria-labelledby="projects-title">
        <div className="projects-intro">
          <p className="student-section-label"><span>03</span> Academic works / 学生作品</p>
          <h2 id="projects-title">六年，六次<br />空间练习。</h2>
          <p>项目按年份排列。点击任一项目，可查看设计问题、推演过程、图纸系统、模型表达与软件工作流；当前项目文字为版式演示，后续可替换为真实课程成果。</p>
        </div>
        <div className="student-project-grid">
          {projects.map((project) => <ProjectCard key={project.slug} project={project} />)}
        </div>
      </section>

      <section className="portfolio-process section-pad" aria-labelledby="process-title">
        <p className="student-section-label"><span>04</span> Portfolio notes / 排版方法</p>
        <div className="process-layout">
          <div>
            <h2 id="process-title">不只展示结果，<br />也展示如何抵达。</h2>
            <p>每个项目页都把成果拆成“问题—策略—图纸—工具”四层。希望这种透明的组织方式能帮助更多建筑学生理解：作品集不是图片堆叠，而是设计思考的再次编辑。</p>
          </div>
          <DrawingPlate variant="layout" index="P-01" caption="Portfolio grid / A3 spread" />
        </div>
      </section>

      <section className="student-journey section-pad" aria-labelledby="journey-title">
        <p className="student-section-label"><span>05</span> Education / 学习经历</p>
        <div className="journey-layout">
          <h2 id="journey-title">Learning<br />in progress.</h2>
          <ol>
            <li><time>2024.08—2026.06</time><strong>建筑学硕士 M.Arch</strong><span>新加坡国立大学（NUS）</span><p>延续建筑方案设计、空间分析与建筑表达训练</p></li>
            <li><time>2018.09—2023.06</time><strong>建筑学本科</strong><span>哈尔滨工业大学（深圳）</span><p>完成建筑设计、制图、建模与设计文本等系统学习</p></li>
            <li><time>研究生申请</time><strong>建筑设计 / 建筑保护</strong><span>多所院校录取</span><p>NUS、HKU、米兰理工、AA、爱丁堡、曼大、悉尼大学、墨尔本大学</p></li>
            <li><time>2019—2026</time><strong>学生作品集</strong><span>本科 / 硕士阶段</span><p>以图纸、模型、软件工作流和版式系统记录设计成长</p></li>
          </ol>
        </div>
      </section>

      <section className="student-contact section-pad" id="contact" aria-labelledby="contact-title">
        <p className="student-section-label"><span>06</span> Contact / 联系</p>
        <h2 id="contact-title">一起聊设计，<br />也聊作品集。</h2>
        <a href="mailto:guoyuqi0623@163.com">guoyuqi0623@163.com <span>↗</span></a>
        <footer className="student-footer">
          <p>GUO YUQI · M.ARCH 2026</p>
          <p>PORTFOLIO 2019—2026</p>
          <a href="#top">BACK TO TOP ↑</a>
        </footer>
      </section>
    </main>
  );
}
