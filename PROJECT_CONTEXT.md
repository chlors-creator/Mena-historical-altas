# 《沙海纪年》项目上下文

这是一个 1797—2026 年中东与北非历史互动地图，技术形态为无构建步骤的原生 HTML/CSS/JavaScript/SVG 静态网站。

## 工作约定

- 正式目录：`mena-historical-altas/`；可发布副本：`dist/`。
- 修改根目录后，用 `powershell -File scripts/sync-dist.ps1` 同步 `dist/`；不执行 `git push`。
- 不提交 `.sites-package-stage*/`、`*.tar.gz`、截图和原始 GeoJSON。
- 先读相关模块，不要默认读取大型疆域数据文件。

## 代码结构

- `app.js`：事件绑定、单一 `render` 入口、侧边栏名称与维基链接。
- `modules/core.js`：状态、国家历史资料、颜色、基础渲染。
- `modules/map.js`：时间线、边界构建、历史 GIS 与争议地区图层。
- `modules/flags.js`：国旗、旗帜调试预览及政治实体映射。
- `modules/boundary-debug.js`：疆域导入、共享 SVG 绑定和调试导出；按需加载。
- `modules/lazy-loader.js`：历史 GIS 与调试器的动态脚本加载。
- `formal-names.js`：正式国名与时期名称。

## 当前规则

- 1949 年后加沙与约旦河西岸独立绘制；1988—2006 年共用巴勒斯坦国家详情，2007 年后分别使用哈马斯控制与巴勒斯坦民族权力机构详情。
- 西撒哈拉、巴勒斯坦使用普通不透明填色；戈兰高地以色列实际控制区叠加叙利亚色斜线，1968—1979 年西奈半岛以同样方式叠加埃及色斜线。
- 侧边栏国家名、正式国名和执政党/统治者可跳转中文维基百科。
- 相同 SVG 在同一时期通过调试器复用一个绑定文件，文件名形如“伊朗伊斯兰共和国1979-2026”。
- 戈兰高地、西奈半岛及历史争议带是独立可点击详情；调试器将其列入当前年份 SVG 目标。西撒哈拉作为独立地图实体处理。

## 验证

```powershell
node scripts/verify.mjs
```

验证脚本检查 JavaScript 语法、HTML 脚本引用以及根目录与 `dist/` 的 SHA-256 一致性。
详情侧栏事件使用 `modules/events.js` 的国家／地区目录；只有区域总览使用 `core.js` 的区域事件，事件卡片通过中文维基百科链接到具体条目。
