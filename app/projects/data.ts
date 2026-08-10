import type { DrawingVariant } from "../components/DrawingPlate";

export type Project = {
  slug: string;
  number: string;
  year: string;
  title: string;
  titleEn: string;
  studio: string;
  school: string;
  type: string;
  location: string;
  duration: string;
  cover: string;
  coverAlt: string;
  variant: DrawingVariant;
  drawingSet: DrawingVariant[];
  summary: string;
  question: string;
  strategy: string;
  skills: string[];
  software: string[];
};

export const projects: Project[] = [
  {
    slug: "micro-library",
    number: "01",
    year: "2019",
    title: "街角微型图书馆",
    titleEn: "A Library Between Walls",
    studio: "建筑设计基础 III",
    school: "哈尔滨工业大学（深圳）阶段",
    type: "公共建筑",
    location: "南京 · 老城南",
    duration: "8 周",
    cover: "/projects/courtyard-house.webp",
    coverAlt: "混凝土建筑立面与连续阳台的参考摄影",
    variant: "section",
    drawingSet: ["site", "plan", "section"],
    summary: "从一条 2.4 米宽的城市缝隙出发，以墙、楼梯和天光组织一座可穿行的社区图书馆。",
    question: "如何在极小尺度里同时容纳阅读、停留与街巷通行，并让建筑继续保持老城的日常节奏？",
    strategy: "以两道承重墙建立主要空间秩序，书架、座椅与楼梯被嵌入墙体。三处天井将自然光引入狭长剖面，也成为读者辨认层次的线索。",
    skills: ["手绘推演", "平剖面表达", "纸板模型", "A1 排版"],
    software: ["AutoCAD", "SketchUp", "Photoshop", "InDesign"],
  },
  {
    slug: "under-bridge-commons",
    number: "02",
    year: "2020",
    title: "桥下共生场",
    titleEn: "Under-Bridge Commons",
    studio: "城市空间设计",
    school: "哈尔滨工业大学（深圳）阶段",
    type: "公共空间更新",
    location: "上海 · 苏州河",
    duration: "10 周",
    cover: "/projects/stair-house.webp",
    coverAlt: "楼梯扶手与光影关系的参考摄影",
    variant: "site",
    drawingSet: ["site", "axon", "layout"],
    summary: "通过城市观察、行为记录与可拆卸构件，把被忽略的桥下空间转化为弹性公共客厅。",
    question: "高架桥下的噪音、阴影和碎片化边界，能否成为新的公共生活资源？",
    strategy: "项目先以时间地图记录一周内的使用变化，再将运动、集市和休息所需的构件组织成可移动系统。轴测图呈现不同时间的组合方式。",
    skills: ["场地调研", "数据绘图", "爆炸轴测", "信息排版"],
    software: ["Rhino", "Illustrator", "Photoshop", "InDesign"],
  },
  {
    slug: "hillside-cluster",
    number: "03",
    year: "2023",
    title: "山地聚居单元",
    titleEn: "Hillside Living Units",
    studio: "居住建筑设计",
    school: "哈尔滨工业大学（深圳）阶段",
    type: "集合住宅",
    location: "重庆 · 南山",
    duration: "12 周",
    cover: "/projects/light-gallery.webp",
    coverAlt: "室内柱列、石材与斜射光的参考摄影",
    variant: "axon",
    drawingSet: ["site", "plan", "axon"],
    summary: "以坡度、视线与公共路径为参数，生成适应山地的可组合居住单元与共享平台。",
    question: "在不大规模改变地形的前提下，如何让高密度居住仍然拥有邻里交流和独立风景？",
    strategy: "参数模型将坡度分段转译为结构平台，四类单元围绕公共楼梯组合。最终方案通过剖切轴测同步呈现结构、交通与户型关系。",
    skills: ["参数推演", "单元生成", "剖切轴测", "激光切割模型"],
    software: ["Rhino", "SketchUp", "AutoCAD", "Illustrator"],
  },
  {
    slug: "factory-reframe",
    number: "04",
    year: "2024",
    title: "旧厂房再生",
    titleEn: "Factory Reframed",
    studio: "建筑改造设计",
    school: "新加坡国立大学（NUS）阶段",
    type: "工业遗产更新",
    location: "无锡 · 运河沿岸",
    duration: "14 周",
    cover: "/projects/garden-wall-house.webp",
    coverAlt: "清水混凝土建筑与庭院植物的参考摄影",
    variant: "plan",
    drawingSet: ["plan", "section", "model"],
    summary: "保留旧厂房的结构节奏，以轻型木构植入学习、展览和社区制作空间。",
    question: "新的公共功能如何进入工业遗产，同时让原结构、材料和时间痕迹保持可读？",
    strategy: "改造以‘不触碰旧墙’为原则，新木构模块独立承重并与原柱网错位。新旧系统通过材料、节点和光线差异被清晰区分。",
    skills: ["测绘建模", "改造策略", "节点详图", "实体模型摄影"],
    software: ["SketchUp", "Rhino", "AutoCAD", "Photoshop"],
  },
  {
    slug: "tidal-school",
    number: "05",
    year: "2025",
    title: "潮汐学校",
    titleEn: "School of Tides",
    studio: "综合设计工作室",
    school: "新加坡国立大学（NUS）阶段",
    type: "教育建筑",
    location: "宁波 · 象山港",
    duration: "16 周",
    cover: "/projects/terrace-habitat.webp",
    coverAlt: "层叠住宅建筑的黑白参考摄影",
    variant: "model",
    drawingSet: ["site", "section", "model"],
    summary: "把潮位、湿地与渔村生产纳入课程空间，构建一座随自然周期变化的滨海学校。",
    question: "学校能否不再是一组封闭教室，而成为儿童理解海岸生态与社区生产的真实媒介？",
    strategy: "三个抬高平台对应不同潮位，教室围绕可淹没庭院布置。模型以透明、半透明和纤维材料表达水、结构与植被层次。",
    skills: ["环境分析", "剖面叙事", "材料模型", "作品集系统"],
    software: ["Rhino", "SketchUp", "AutoCAD", "InDesign"],
  },
  {
    slug: "urban-stitch",
    number: "06",
    year: "2026",
    title: "城市缝合器",
    titleEn: "Urban Stitch",
    studio: "硕士阶段综合设计",
    school: "新加坡国立大学（NUS）阶段",
    type: "城市设计与公共建筑",
    location: "上海 · 杨浦滨江",
    duration: "20 周",
    cover: "/projects/river-archive.webp",
    coverAlt: "木质楼梯与自然光的参考摄影",
    variant: "layout",
    drawingSet: ["site", "axon", "layout"],
    summary: "综合设计以六公里滨江断点为对象，通过小尺度建筑系统连接社区、工业遗存与公共岸线。",
    question: "面对尺度巨大、权属复杂的滨水更新，建筑学生如何提出可被分期实施的空间策略？",
    strategy: "研究从 GIS 图层、步行采样与口述访谈开始，最终形成十二个介入原型。总图、系统轴测与分期图共同说明从城市策略到建筑节点的转换。",
    skills: ["城市研究", "系统设计", "数字建模", "全册统筹"],
    software: ["AutoCAD", "Rhino", "SketchUp", "Illustrator", "InDesign"],
  },
];

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}
