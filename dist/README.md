# 沙海纪年｜1797—2026 中东与北非历史地图

这是一个纯静态 GitHub Pages 项目，不依赖 Sites、后端或构建工具。

## 边界数据口径

- 1886—1999：使用 CShapes 2.0 的国家／属地几何及有效期区间，按所选年份的 1 月 1 日生成年度快照；每个国家每年只取一个有效时间 cohort，同一 cohort 的多块领土（岛屿、加沙／约旦河西岸、保护地组成部分）合并，避免过渡记录相互叠加。1886—1923 年单独保存在 `mena-historical-1886-1923.js`。CShapes 未覆盖的保护国或海湾属地，以标明来源的 Natural Earth 轮廓回退，避免把现代边界误称为历史边界。
- 2000—2026：使用 Natural Earth 5.1.1 的 1:50m Cultural Vectors 现代国界参考图层。
- 1797—1885：保留界面验证用的概略示意图，不作为领土主张或学术地图引用。
- 1886—1938：单独恢复亚丁与东亚丁保护地；1886—1937 为 CShapes 几何的历史回补，1938 年起使用 CShapes 有效期区间。
- 1918—1933：为北也门补入未并入沙特的历史领土上下文延伸（其中 1924—1933 覆盖用户指出的空白区域），图层标题会明确标注其 contextual 来源。
- 悬浮或键盘聚焦国家时，国家名称同步上浮，国旗以本地 Wikimedia Commons 历史 SVG/PNG 资源在国境内居中裁切填充（`slice`，不拉伸），并叠加明显的静态 SVG 布料位移、光泽褶皱效果。
- 点击国家后，右侧标题显示该年份的正式国名；南也门独立前统一标为“亚丁保护国”，独立后地图标签为“南也门”，详情按时期显示正式国名。

数据来源：ETH Zurich International Conflict Research 的 [CShapes 2.0](https://icr.ethz.ch/data/cshapes/)（CC BY-NC-SA 4.0）与 [Natural Earth 50m Cultural Vectors](https://www.naturalearthdata.com/downloads/50m-cultural-vectors/)。

国旗资源来自 Wikimedia Commons 各文件页，索引、时期映射和许可提示见 [`assets/flags/SOURCES.md`](assets/flags/SOURCES.md)。部分保护国／委任统治时期没有统一陆上国旗，项目会使用明确注明的宗主国或委任国旗帜作为历史语境回退；巴勒斯坦托管地使用海事旗（ensign），不表示主权判断。

## 本地预览

直接打开 `index.html` 即可使用。也可以在项目根目录启动任意静态文件服务器。

## GitHub Pages

在仓库设置中将 Pages 的发布来源设为 `main` 分支的根目录（`/(root)`）。项目已包含 `.nojekyll`，地图数据和脚本均为本地文件。
