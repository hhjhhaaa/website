import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { DrawingPlate } from "../../components/DrawingPlate";
import { getProject, projects } from "../data";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? (process.env.NODE_ENV === "production" ? "/website" : "");

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return {};
  return {
    title: `${project.year} · ${project.title}｜郭羽棋建筑学生作品集`,
    description: project.summary,
    openGraph: {
      title: `${project.title} · ${project.titleEn}`,
      description: project.summary,
      images: [{ url: `${basePath}/og-guo-yuqi.webp`, alt: "GUO YUQI ARCHITECTURE STUDENT PORTFOLIO" }],
    },
  };
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  const currentIndex = projects.findIndex((item) => item.slug === slug);
  const nextProject = projects[(currentIndex + 1) % projects.length];

  return (
    <main className="student-detail-page">
      <header className="student-detail-header">
        <a className="student-brand" href={`${basePath}/`} aria-label="返回建筑学生作品集首页">
          <strong>GYQ</strong>
          <span>GUO YUQI<br />M.ARCH · 2026</span>
        </a>
        <a className="student-back" href={`${basePath}/#projects`}>PROJECT INDEX <span>×</span></a>
      </header>

      <section className="student-detail-hero">
        <div className="detail-title">
          <div><span>{project.number} / 06</span><time>{project.year}</time></div>
          <p>{project.studio}</p>
          <h1>{project.title}</h1>
          <h2>{project.titleEn}</h2>
        </div>
        <DrawingPlate variant={project.variant} index={`${project.year.slice(2)}-${project.number}`} caption={`${project.type} / Main drawing`} />
      </section>

      <section className="student-detail-specs">
        <dl>
          <div><dt>课程</dt><dd>{project.studio}</dd></div>
          <div><dt>学习阶段</dt><dd>{project.school}</dd></div>
          <div><dt>场地</dt><dd>{project.location}</dd></div>
          <div><dt>周期</dt><dd>{project.duration}</dd></div>
          <div><dt>类型</dt><dd>{project.type}</dd></div>
        </dl>
      </section>

      <section className="student-detail-intro section-pad">
        <p className="student-section-label"><span>01</span> Design question</p>
        <div>
          <h2>设计从一个<br />具体问题开始。</h2>
          <p>{project.question}</p>
        </div>
      </section>

      <section className="drawing-spread section-pad" aria-label="项目图纸展示">
        <div className="spread-heading">
          <p className="student-section-label"><span>02</span> Drawing set</p>
          <p>图纸系统 / DRAWINGS</p>
        </div>
        <div className="spread-grid">
          {project.drawingSet.map((variant, index) => (
            <DrawingPlate
              key={`${variant}-${index}`}
              variant={variant}
              index={`${project.number}-${String(index + 1).padStart(2, "0")}`}
              caption={`${variant.toUpperCase()} / ${project.titleEn}`}
              className={index === 0 ? "spread-main" : ""}
            />
          ))}
        </div>
      </section>

      <section className="student-detail-strategy section-pad">
        <p className="student-section-label"><span>03</span> Design strategy</p>
        <div>
          <h2>让分析、模型与图纸<br />指向同一条叙事。</h2>
          <p>{project.strategy}</p>
        </div>
      </section>

      <section className="student-process section-pad">
        <figure>
          <img src={`${basePath}/projects/model-study.webp`} alt="白色建筑实体模型" />
          <figcaption><span>Physical model / 1:200</span><span>Process record</span></figcaption>
        </figure>
        <div className="process-tools">
          <p className="student-section-label"><span>04</span> Workflow</p>
          <h2>过程与工具</h2>
          <div>
            <section><h3>本项目重点</h3><ul>{project.skills.map((skill) => <li key={skill}>{skill}</li>)}</ul></section>
            <section><h3>软件运用</h3><ul>{project.software.map((tool) => <li key={tool}>{tool}</li>)}</ul></section>
          </div>
        </div>
      </section>

      <section className="student-next-project">
        <p>Next project · {nextProject.year}</p>
        <a href={`${basePath}/projects/${nextProject.slug}/`}>
          <span>{nextProject.title}</span>
          <small>{nextProject.titleEn}</small>
          <b>→</b>
        </a>
      </section>
    </main>
  );
}
