import type { Metadata } from "next";
import { notFound } from "next/navigation";
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
    title: `${project.title}｜林序建筑作品`,
    description: project.summary,
    openGraph: {
      title: `${project.title} · ${project.titleEn}`,
      description: project.summary,
      images: [{ url: `${basePath}${project.cover}`, alt: project.alt }],
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
    <main className="project-page">
      <header className="project-header">
        <a className="brand project-brand" href={`${basePath}/`} aria-label="返回林序个人主页">
          <span className="brand-mark">LX</span>
          <span className="brand-name">林序 · 建筑师<br />LIN XU · ARCHITECT</span>
        </a>
        <a className="back-link" href={`${basePath}/#projects`}>全部作品 <span>×</span></a>
      </header>

      <section className="project-detail-hero">
        <img src={`${basePath}${project.cover}`} alt={project.alt} />
        <span className="project-hero-number">{project.number} / 06</span>
      </section>

      <section className="project-title-block section-pad">
        <div>
          <p className="eyebrow">{project.type} · {project.year}</p>
          <h1>{project.title}</h1>
          <p className="project-en-title">{project.titleEn}</p>
        </div>
        <p className="project-summary">{project.summary}</p>
      </section>

      <section className="project-specs">
        <dl>
          <div><dt>地点</dt><dd>{project.location}</dd></div>
          <div><dt>年份</dt><dd>{project.year}</dd></div>
          <div><dt>类型</dt><dd>{project.type}</dd></div>
          <div><dt>面积</dt><dd>{project.area}</dd></div>
          <div><dt>角色</dt><dd>{project.role}</dd></div>
          <div><dt>状态</dt><dd>{project.status}</dd></div>
        </dl>
      </section>

      <section className="project-story section-pad">
        <p className="section-label"><span>01</span> 项目背景</p>
        <div>
          <h2>从场所中找到<br />设计的第一条线索。</h2>
          <p>{project.description}</p>
        </div>
      </section>

      <figure className="project-full-image">
        <img src={`${basePath}${project.gallery[1]}`} alt={`${project.title}空间细节`} />
        <figcaption>{project.title} · 空间与光线研究</figcaption>
      </figure>

      <section className="project-story project-story--concept section-pad">
        <p className="section-label"><span>02</span> 设计策略</p>
        <div>
          <h2>材料、光线<br />与时间共同完成。</h2>
          <p>{project.concept}</p>
        </div>
      </section>

      <div className="project-gallery">
        <figure><img src={`${basePath}${project.gallery[0]}`} alt={`${project.title}外部空间`} /></figure>
        <figure><img src={`${basePath}${project.gallery[2]}`} alt={`${project.title}内部空间`} /></figure>
      </div>

      <section className="next-project">
        <p>下一个项目 · {nextProject.number}</p>
        <a href={`${basePath}/projects/${nextProject.slug}/`}>
          <span>{nextProject.title}</span>
          <small>{nextProject.titleEn}</small>
          <b>→</b>
        </a>
      </section>
    </main>
  );
}
