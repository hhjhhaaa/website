# 郭羽棋 · 建筑学生作品集

一个面向应届建筑学毕业生的个人作品集展示网站。项目按 2019、2020、2023、2024、2025、2026 排列，重点展示总图、平面、剖面、轴测、实体模型、作品集排版和软件工作流。

## 本地运行

```bash
npm install
npm run dev
```

## 发布

项目已配置 GitHub Pages。推送到 `main` 分支后，GitHub Actions 会自动构建并发布。

## 定制位置

- 首页与个人背景：`app/page.tsx`
- 项目资料：`app/projects/data.ts`
- 项目详情模板：`app/projects/[slug]/page.tsx`
- 线稿视觉系统：`app/components/DrawingPlate.tsx` 与 `app/globals.css`
- 个人工作照：`public/projects/architect-at-work.webp`
- 模型照片：`public/projects/model-study.webp`
- 分享封面：`public/og-guo-yuqi.webp`

姓名、教育背景、技能、录取院校和联系信息已按个人简历更新；六个项目的名称与内容仍为版式演示，正式使用前请替换为真实课程成果。照片素材来自 [Unsplash](https://unsplash.com)。
