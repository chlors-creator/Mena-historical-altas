# 沙海纪年｜1797—2026 中东与北非历史地图

这是一个纯静态 GitHub Pages 项目，不依赖 Sites、后端或构建工具。

## 边界数据口径

- 1886—1999：使用 CShapes 2.0 的国家／属地几何及有效期区间，按所选年份的 1 月 1 日生成年度快照；每个国家每年只取一个有效时间 cohort，同一 cohort 的多块领土（岛屿、加沙／约旦河西岸、保护地组成部分）合并，避免过渡记录相互叠加。1886—1923 年单独保存在 `mena-historical-1886-1923.js`。CShapes 未覆盖的保护国或海湾属地，以标明来源的 Natural Earth 轮廓回退，避免把现代边界误称为历史边界。
- 2000—2026：使用 Natural Earth 5.1.1 的 1:50m Cultural Vectors 现代国界参考图层。
- 1797—1885：保留界面验证用的概略示意图，不作为领土主张或学术地图引用。
- 1886—1938：单独恢复亚丁与东亚丁保护地；1886—1937 为 CShapes 几何的历史回补，1938 年起使用 CShapes 有效期区间。
- 1918—1933：为北也门补入未并入沙特的历史领土上下文延伸（其中 1924—1933 覆盖用户指出的空白区域），图层标题会明确标注其 contextual 来源。
- 悬浮或键盘聚焦国家时，国家地块保持原位，仅显示本地 Wikimedia Commons 高清历史 SVG/PNG 国旗；旗帜在国境内居中裁切填充（`slice`，不拉伸），不叠加褶皱或颜色滤镜。西属摩洛哥两个独立地块分别生成一面国旗。
- 点击国家后，右侧标题显示该年份的正式国名；南也门独立前统一标为“亚丁保护国”，独立后地图标签为“南也门”，详情按时期显示正式国名。
- 进入国家详情后，所选地块和国旗保持静止，其他地块仍可悬浮。右侧标题栏右上角的“国旗调试”仅调整当前国家，可实时调整国旗缩放、平移、地图背景色和国旗透明区域的填充色；设置保存在浏览器 localStorage，并可导出 `mena-flag-debug.json`。地图颜色由稳定的政权键控制，跨年份保持一致，奥斯曼帝国与土耳其共和国使用不同颜色；红海／地中海标注位于 SVG 国家图层内。地图右上角的“海域调试”为临时校对工具，不写入数据。
- 1886—1931 年阿拉伯半岛补充汉志、舍迈尔和内志历史上下文图层；这些内部政权在 CShapes 中没有独立国家记录，改以 OpenGulf 的 Harita 93677 QGIS 地理配准图层为主，并用 1914 年阿拉伯半岛政治地图及美国国会图书馆 1920 年《Arabia》手册交叉校核，避免把现代沙特轮廓倒填到早期年份。
- 1886—1925 年重新划分汉志—舍迈尔—内志分区，使用共享边界顶点避免几何重叠，并将科威特置于 1913 年英奥边界线之外；1886—1911 年利比亚采用 CShapes 的黎波里塔尼亚／昔兰尼加历史轮廓作为奥斯曼属地上下文，1886—1919 年从奥斯曼复合几何中裁出利比亚与汉志，避免同一土地被双重填色。亚丁保护国与奥斯曼／土耳其复合记录取消相接子路径的内部描边。
- 1932 年沙特—也门边界在 1934 年《塔伊夫条约》前尚未完成法理划定，地图以阴影争议带表示阿西尔、吉赞和纳季兰相关未定界区域，不将其误画为已确定的沙特或也门领土。
- 西属摩洛哥地块保持原始 GIS 位置，仅将国名向左偏移 50px，并以两条细黑线连接至两个子地块中心。

数据来源：ETH Zurich International Conflict Research 的 [CShapes 2.0](https://icr.ethz.ch/data/cshapes/)（CC BY-NC-SA 4.0）、[Natural Earth 50m Cultural Vectors](https://www.naturalearthdata.com/downloads/50m-cultural-vectors/)，以及 [ArcGIS Kingdom of Hejaz FeatureServer 22](https://services6.arcgis.com/AZvnIky2AKQNH37M/ArcGIS/rest/services/KingdomofHejaz/FeatureServer/22) 的汉志历史几何。1932 年未定界说明参照 [联合国《塔伊夫条约》登记记录](https://treaties.un.org/Pages/showDetails.aspx?objid=08000002800667a7) 与 [卡塔尔数字图书馆的 1934 年边界档案](https://www.qdl.qa/en/archive/81055/vdc_100040077896.0x000010)；1913—1914 年科威特与奥斯曼／英国边界参照 [QDL 海湾条约地图档案](https://qdl.qa/en/archive/81055/vdc_100022752333.0x00003d)。

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
