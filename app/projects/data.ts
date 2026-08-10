export type Project = {
  slug: string;
  number: string;
  title: string;
  titleEn: string;
  location: string;
  role: string;
  year: string;
  type: string;
  area: string;
  status: string;
  cover: string;
  alt: string;
  summary: string;
  description: string;
  concept: string;
  gallery: string[];
};

export const projects: Project[] = [
  {
    slug: "folding-courtyard",
    number: "01",
    title: "折院",
    titleEn: "Folding Courtyard",
    location: "杭州 · 中国",
    role: "主创建筑师",
    year: "2019",
    type: "私人住宅",
    area: "680 m²",
    status: "已建成",
    cover: "/projects/courtyard-house.webp",
    alt: "混凝土建筑的层叠阳台与结构框架",
    summary: "一座围绕三处庭院展开的住宅，让光线、风与家庭生活在不同标高相遇。",
    description: "项目位于杭州西郊一块狭长基地。设计没有把住宅理解成完整体量，而是将它折叠为三段彼此咬合的生活界面。庭院成为房间之间的距离，也成为一家人视线相遇的地方。",
    concept: "外部以清水混凝土回应安静的街道，内部则通过木、石与漫射自然光建立亲密尺度。连续屋檐控制夏季日照，雨水沿庭院边缘汇入浅池，成为可被感知的季节变化。",
    gallery: ["/projects/courtyard-house.webp", "/projects/stair-house.webp", "/projects/light-gallery.webp"],
  },
  {
    slug: "gallery-of-light",
    number: "02",
    title: "光隙美术馆",
    titleEn: "Gallery of Light",
    location: "苏州 · 中国",
    role: "概念与建筑设计",
    year: "2020",
    type: "文化建筑",
    area: "3,200 m²",
    status: "已建成",
    cover: "/projects/light-gallery.webp",
    alt: "阳光穿过落地玻璃照入混凝土展厅",
    summary: "以一条贯穿建筑的光缝组织展览、停留与行走，创造随时间变化的参观体验。",
    description: "美术馆坐落在旧工业园区的边缘。方案保留原厂房的结构网格，并将一条由东向西的线性空隙植入其中。它既是采光装置，也是访客辨认方向的空间坐标。",
    concept: "展厅保持中性和连续，公共区域则允许阳光直接进入。粗糙混凝土、旧砖和再生木材并置，让新旧时间在同一表面上被阅读。",
    gallery: ["/projects/light-gallery.webp", "/projects/river-archive.webp", "/projects/terrace-habitat.webp"],
  },
  {
    slug: "house-on-the-slope",
    number: "03",
    title: "坡地之家",
    titleEn: "House on the Slope",
    location: "重庆 · 中国",
    role: "全程设计",
    year: "2023",
    type: "私人住宅",
    area: "420 m²",
    status: "已建成",
    cover: "/projects/stair-house.webp",
    alt: "日光在极简楼梯与墙面上投下几何阴影",
    summary: "顺应八米高差组织垂直生活，让楼梯成为连接家庭成员、花园与城市远景的房间。",
    description: "基地朝向山谷，入口与花园之间存在显著高差。建筑沿等高线展开，三个错层平台分别承载会客、家庭生活和休息空间，并共享一座被天光照亮的核心楼梯。",
    concept: "设计减少对坡体的开挖，以架空体量回应地形。深窗、平台与长墙反复框取山景，使日常移动成为观看风景的连续过程。",
    gallery: ["/projects/stair-house.webp", "/projects/garden-wall-house.webp", "/projects/courtyard-house.webp"],
  },
  {
    slug: "vertical-habitat",
    number: "04",
    title: "垂直聚落",
    titleEn: "Vertical Habitat",
    location: "上海 · 中国",
    role: "建筑改造",
    year: "2024",
    type: "城市更新",
    area: "8,600 m²",
    status: "一期建成",
    cover: "/projects/terrace-habitat.webp",
    alt: "粗野主义住宅立面的重复阳台与圆形纹理",
    summary: "通过共享阳台、空中院落和可变单元，重新想象高密度居住中的邻里关系。",
    description: "项目更新一栋上世纪八十年代的集合住宅。原有混凝土框架被保留，新的轻型阳台系统附着在外立面，为每层提供共享花园、晾晒和短暂停留的空间。",
    concept: "改造不追求统一的新表皮，而是为住户提供能够继续改变的基础设施。不同家庭的植物、家具与使用痕迹，最终共同完成建筑的立面。",
    gallery: ["/projects/terrace-habitat.webp", "/projects/courtyard-house.webp", "/projects/river-archive.webp"],
  },
  {
    slug: "garden-wall-house",
    number: "05",
    title: "墙园之家",
    titleEn: "Garden Wall House",
    location: "南京 · 中国",
    role: "建筑与室内",
    year: "2025",
    type: "私人住宅",
    area: "510 m²",
    status: "已建成",
    cover: "/projects/garden-wall-house.webp",
    alt: "绿植环绕的极简混凝土住宅",
    summary: "一面连续的墙划分开放与私密，也让花园渗入住宅的每个日常空间。",
    description: "住宅位于密集街区转角，周边视线复杂。设计以一道折转的混凝土墙建立边界，并在墙的内外植入不同尺度的花园。所有主要房间都面向庭院，而非街道。",
    concept: "墙不是封闭的终点，而是一条被不断穿越的路径。窄缝、天井和深窗控制视线，让光线以不同速度进入室内。",
    gallery: ["/projects/garden-wall-house.webp", "/projects/light-gallery.webp", "/projects/stair-house.webp"],
  },
  {
    slug: "river-archive",
    number: "06",
    title: "河岸档案馆",
    titleEn: "River Archive",
    location: "宁波 · 中国",
    role: "主创与项目建筑师",
    year: "2026",
    type: "公共文化",
    area: "4,750 m²",
    status: "竞赛一等奖",
    cover: "/projects/river-archive.webp",
    alt: "木扶手与混凝土构成的明亮公共楼梯",
    summary: "把城市档案馆变成沿河的公共客厅，让收藏、阅读与市民生活彼此可见。",
    description: "档案馆位于老城与河岸公园之间。首层完全向城市开放，一条缓坡穿过展览、咖啡与阅览空间，将人们从街道带向屋顶花园。恒温库房被组织为建筑中心稳定的实体。",
    concept: "外圈公共空间围绕档案核心旋转上升，形成清晰而连续的参观路线。木扶手与细密金属构件为大尺度混凝土空间带来可触摸的细节。",
    gallery: ["/projects/river-archive.webp", "/projects/light-gallery.webp", "/projects/terrace-habitat.webp"],
  },
];

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}
