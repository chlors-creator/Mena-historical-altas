# 沙海纪年｜1797—2026 中东与北非历史地图

这是一个纯静态 GitHub Pages 项目，不依赖 Sites、后端或构建工具。

## 边界数据口径

- 1886—1999：使用 CShapes 2.0 的国家／属地几何及有效期区间，按所选年份的 1 月 1 日生成年度快照；每个国家每年只取一个有效时间 cohort，同一 cohort 的多块领土（岛屿、加沙／约旦河西岸、保护地组成部分）合并，避免过渡记录相互叠加。1886—1923 年单独保存在 `mena-historical-1886-1923.js`。CShapes 未覆盖的保护国或海湾属地，以标明来源的 Natural Earth 轮廓回退，避免把现代边界误称为历史边界。
- 2000—2026：使用 Natural Earth 5.1.1 的 1:50m Cultural Vectors 现代国界参考图层。
- 1797—1885：保留界面验证用的概略示意图，不作为领土主张或学术地图引用。
- 1886—1938：单独恢复亚丁与东亚丁保护地；1886—1937 为 CShapes 几何的历史回补，1938 年起使用 CShapes 有效期区间。
- 1918—1933：为北也门补入未并入沙特的历史领土上下文延伸（其中 1924—1933 覆盖用户指出的空白区域），图层标题会明确标注其 contextual 来源。
- 悬浮或键盘聚焦国家时，国家名称同步上浮，国旗直接使用本地 Wikimedia Commons 高清历史 SVG/PNG 资源，在国境内居中裁切填充（`slice`，不拉伸）；西属摩洛哥两个独立地块分别生成一面国旗，不再叠加褶皱或颜色滤镜。
- 点击国家后，右侧标题显示该年份的正式国名；南也门独立前统一标为“亚丁保护国”，独立后地图标签为“南也门”，详情按时期显示正式国名。
- 进入国家详情后，所选地块和国旗保持静止，其他地块仍可悬浮。顶部“国旗调试”面板可实时调整国旗缩放、平移、地图背景色和国旗透明区域的填充色，设置保存在浏览器 localStorage，并可导出 `mena-flag-debug.json`；红海／地中海标注位置已按调试结果固化在样式表中。
- 1886—1931 年阿拉伯半岛补充汉志、舍迈尔和内志历史上下文图层；这些内部政权在 CShapes 中没有独立国家记录，改以 OpenGulf 的 Harita 93677 QGIS 地理配准图层为主，并用 1914 年阿拉伯半岛政治地图及美国国会图书馆 1920 年《Arabia》手册交叉校核，避免把现代沙特轮廓倒填到早期年份。

数据来源：ETH Zurich International Conflict Research 的 [CShapes 2.0](https://icr.ethz.ch/data/cshapes/)（CC BY-NC-SA 4.0）、[Natural Earth 50m Cultural Vectors](https://www.naturalearthdata.com/downloads/50m-cultural-vectors/)，以及 [ArcGIS Kingdom of Hejaz FeatureServer 22](https://services6.arcgis.com/AZvnIky2AKQNH37M/ArcGIS/rest/services/KingdomofHejaz/FeatureServer/22) 的汉志历史几何。

阿拉伯半岛早期政权的新增参考来源：

- [OpenGulf / ottoman-map](https://github.com/opengulf/ottoman-map)：将伊斯坦布尔大学馆藏 Harita 93677（约 1910 年）地理配准为 QGIS Shapefile，并提供 Najd 图层与 Haydari 的内志地名资料；本项目用其作为舍迈尔／内志几何的主参考。
- [Arabia 1914（Wikimedia Commons）](https://commons.wikimedia.org/wiki/File:Arabia_1914.png)：标出 1914 年汉志、舍迈尔（Rashids）、Wahhabis（Sauds）和奥斯曼控制范围，用于边界形状交叉校核；原图 CC BY-SA 3.0。
- [Library of Congress《Arabia》（1920）](https://www.loc.gov/item/a22000920/)：同时讨论 Hejaz、Nejd 与 Jebel Shammar 的政治沿革，用于时期和名称校核。
- [Princeton/NYU 1880 Jebel Shammar 地图](https://geo.nyu.edu/catalog/princeton-rf55zb21)：公开馆藏的舍迈尔与中阿拉伯边界早期参照。

国旗资源来自 Wikimedia Commons 各文件页，索引、时期映射和许可提示见 [`assets/flags/SOURCES.md`](assets/flags/SOURCES.md)。部分保护国／委任统治时期没有统一陆上国旗，项目会使用明确注明的宗主国或委任国旗帜作为历史语境回退；巴勒斯坦托管地使用海事旗（ensign），不表示主权判断。

## 本地预览

直接打开 `index.html` 即可使用。也可以在项目根目录启动任意静态文件服务器。

## GitHub Pages

在仓库设置中将 Pages 的发布来源设为 `main` 分支的根目录（`/(root)`）。项目已包含 `.nojekyll`，地图数据和脚本均为本地文件。
