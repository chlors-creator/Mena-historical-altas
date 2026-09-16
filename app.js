const meta={
morocco:["摩洛哥",["北部","菲斯","马拉喀什","苏斯"]],"morocco-spanish":["西属摩洛哥",["里夫","北部保护地"]],"western-sahara":["西撒哈拉",["萨基亚-哈姆拉","达赫拉"]],algeria:["阿尔及利亚",["奥兰","阿尔及尔","君士坦丁","撒哈拉"]],tunisia:["突尼斯",["突尼斯","萨赫勒","南部"]],libya:["利比亚",["的黎波里塔尼亚","昔兰尼加","费赞"]],egypt:["埃及",["下埃及","上埃及","西奈","努比亚"]],sudan:["苏丹",["喀土穆","达尔富尔","科尔多凡","东部"]],turkey:["土耳其",["安纳托利亚西部","安纳托利亚中部","黑海","东部"]],syria:["叙利亚",["阿勒颇","大马士革","沿海","幼发拉底河谷"]],lebanon:["黎巴嫩",["贝鲁特","黎巴嫩山","贝卡"]],israel:["以色列",["北部区","中央区","南部区"]],palestine:["巴勒斯坦",["约旦河西岸","加沙"]],jordan:["约旦",["北部","安曼","南部"]],iraq:["伊拉克",["摩苏尔","巴格达","巴士拉","库尔德地区"]],iran:["伊朗",["阿塞拜疆","里海地区","中央高原","胡齐斯坦","呼罗珊"]],kuwait:["科威特",["科威特城","外围地区"]],saudi:["沙特阿拉伯",["汉志","内志","东部省","阿西尔"]],qatar:["卡塔尔",["多哈","北部"]],uae:["阿联酋",["阿布扎比","迪拜","北部诸酋长国"]],oman:["阿曼",["马斯喀特","内地","佐法尔"]],"yemen-north":["北也门",["萨那","蒂哈马"]],"yemen-south":["南也门／亚丁保护地",["亚丁","哈德拉毛"]],yemen:["也门",["萨那","蒂哈马","亚丁","哈德拉毛"]],bahrain:["巴林",["麦纳麦","穆哈拉格"]]};
const wiki=t=>`https://zh.wikipedia.org/wiki/${encodeURIComponent(t)}`;
const eras=[
{from:1797,to:1829,title:"帝国、行省与地方王朝",native:"الدولة العثمانية · دولت قاجار",badge:"近代早期",map:"奥斯曼时代的中东与北非",summary:"十八世纪末，中东与北非由奥斯曼帝国、伊朗卡扎尔王朝、摩洛哥阿拉维王朝及众多地方政权共同构成。名义宗主权、地方自治和部族势力经常相互重叠。",events:[[1798,"法国入侵埃及","远征改变了地中海东部的力量关系。","法国入侵埃及和叙利亚"],[1805,"穆罕默德·阿里掌权","埃及进入改革与扩张时期。","穆罕默德·阿里王朝"],[1821,"希腊独立战争","战争动摇奥斯曼帝国在东地中海的统治。","希腊独立战争"]]},
{from:1830,to:1877,title:"改革、扩张与殖民开端",native:"التنظيمات · عصر الإصلاح",badge:"改革时代",map:"改革时代与欧洲势力进入",summary:"奥斯曼帝国推行坦齐马特改革，埃及建立事实上的世袭统治；法国占领阿尔及利亚，欧洲列强对北非和东地中海的介入逐步加深。",events:[[1830,"法国征服阿尔及利亚","法国攻占阿尔及尔，殖民统治由此展开。","法属阿尔及利亚"],[1839,"坦齐马特改革","奥斯曼帝国开始行政和法律改革。","坦齐马特"],[1869,"苏伊士运河通航","红海与地中海之间建立现代航运通道。","苏伊士运河"]]},
{from:1878,to:1913,title:"列强竞争下的帝国边疆",native:"المسألة الشرقية",badge:"帝国主义时代",map:"帝国边疆与殖民扩张",summary:"英国控制埃及，法国巩固马格里布殖民地，意大利进入利比亚。奥斯曼帝国仍统治大片中东领土，但地方民族主义和列强竞争日益加剧。",events:[[1882,"英国占领埃及","英国控制埃及财政与军事。","英占埃及"],[1908,"青年土耳其党革命","宪政恢复，奥斯曼政治进入新阶段。","青年土耳其党革命"],[1911,"意土战争","意大利夺取的黎波里塔尼亚和昔兰尼加。","意土战争"]]},
{from:1914,to:1947,title:"世界大战与委任统治",native:"الانتداب · سقوط الدولة العثمانية",badge:"两次大战之间",map:"帝国解体与现代国家形成",summary:"第一次世界大战导致奥斯曼帝国解体。英法委任统治、共和国与新王国共同塑造现代边界；土耳其共和国成立，阿拉伯民族主义不断发展。",events:[[1916,"阿拉伯大起义","哈希姆家族领导反奥斯曼起义。","阿拉伯大起义"],[1920,"圣雷莫会议","协约国安排前奥斯曼阿拉伯领地的委任统治。","圣雷莫会议"],[1923,"土耳其共和国成立","洛桑体系确立共和国的国际地位。","土耳其共和国历史"]]},
{from:1948,to:1978,title:"独立浪潮与阿以冲突",native:"القومية العربية · الاستقلال",badge:"冷战前期",map:"独立国家与革命共和国",summary:"殖民体系迅速瓦解，多国实现独立。阿拉伯民族主义、军事政变和石油政治兴起，阿以冲突成为区域秩序的重要轴线。",events:[[1948,"第一次中东战争","战争与大规模人口迁移改变地区格局。","第一次中东战争"],[1956,"苏伊士运河危机","埃及国有化运河后遭英法以军事干预。","第二次中东战争"],[1967,"六日战争","以色列占领西奈、戈兰高地、约旦河西岸及加沙。","第三次中东战争"]]},
{from:1979,to:2010,title:"革命、战争与新区域秩序",native:"الثورة · الحرب · السلام",badge:"冷战后期",map:"革命与海湾战争时代",summary:"伊朗革命、两伊战争、黎巴嫩内战与海湾战争重塑地区联盟。埃以实现和平，巴勒斯坦自治进程启动，海湾国家影响力上升。",events:[[1979,"伊朗伊斯兰革命","巴列维王朝终结，伊朗伊斯兰共和国建立。","伊朗伊斯兰革命"],[1990,"伊拉克入侵科威特","入侵引发海湾战争和长期制裁。","伊拉克入侵科威特"],[2003,"伊拉克战争","美国主导的联军推翻萨达姆政权。","伊拉克战争"]]},
{from:2011,to:2026,title:"起义、内战与多极竞争",native:"الربيع العربي · تحولات إقليمية",badge:"当代",map:"阿拉伯之春后的中东与北非",summary:"2011年以来，抗议运动、内战、国家重建和区域强国竞争同时展开。国际边界大体稳定，但部分地区的实际控制线和政治地位持续变化。",events:[[2011,"阿拉伯之春","跨国抗议运动引发政治转型与长期冲突。","阿拉伯之春"],[2015,"也门内战升级","地区力量介入使战争进一步国际化。","也门内战_(2014年至今)"],[2020,"亚伯拉罕协议","以色列与多个阿拉伯国家推进关系正常化。","亚伯拉罕协议"]]}
];
const overrides={
egypt:[[1797,1804,"奥斯曼埃及与马穆鲁克诸贝伊","奥斯曼名义主权之下，马穆鲁克集团与地方精英掌握大量实际权力。","开罗","奥斯曼帝国"],[1805,1881,"穆罕默德·阿里王朝","穆罕默德·阿里及其后裔推行军事、农业和行政改革，使埃及成为高度自主的世袭统治。","开罗","埃及赫迪夫领"],[1882,1921,"英占埃及","英国占领后控制财政与军事；埃及先后保留奥斯曼名义关系并成为英国保护国。","开罗","英国控制"],[1922,1952,"埃及王国","王室、议会、民族主义运动与英国影响长期并存。","开罗","君主立宪"],[1953,2026,"埃及共和国","共和国经历纳赛尔主义、经济开放和长期总统制，并持续扮演阿拉伯世界的重要角色。","开罗","共和国"]],
turkey:[[1797,1922,"奥斯曼帝国","以伊斯坦布尔为中心的跨洲帝国，在改革、民族主义和列强竞争中逐步收缩，并于第一次世界大战后解体。","伊斯坦布尔","苏丹制帝国"],[1923,2026,"土耳其共和国","共和国以安卡拉为首都，经历凯末尔改革、多党政治、军事干预与持续的国家现代化。","安卡拉","共和国"]],
iran:[[1797,1924,"卡扎尔王朝","卡扎尔王朝在俄英竞争、立宪革命与中央集权挑战中维系统治。","德黑兰","王朝君主制"],[1925,1978,"巴列维王朝","巴列维王朝推动中央集权和现代化，同时面对石油政治、外国干预与国内反对运动。","德黑兰","君主制"],[1979,2026,"伊朗伊斯兰共和国","革命后建立以最高领袖和选举机构并存为特征的政治体制。","德黑兰","伊斯兰共和国"]],
algeria:[[1797,1829,"奥斯曼阿尔及尔摄政","阿尔及尔名义上隶属奥斯曼帝国，由地方军事精英治理。","阿尔及尔","摄政领"],[1830,1961,"法属阿尔及利亚","法国殖民征服经历长期抵抗，阿尔及利亚随后被纳入法国行政体系。","阿尔及尔","法国殖民地"],[1962,2026,"阿尔及利亚民主人民共和国","独立战争后建立共和国，民族解放阵线和军政体系长期具有核心影响。","阿尔及尔","共和国"]],
morocco:[[1797,1911,"摩洛哥阿拉维王朝","阿拉维苏丹维持独立统治，同时面对欧洲列强不断扩大的压力。","非斯／马拉喀什","苏丹国"],[1912,1955,"法西保护下的摩洛哥","法国保护国覆盖大部分领土，西班牙控制北部和南部若干地区。","拉巴特","保护国"],[1956,2026,"摩洛哥王国","恢复独立后的君主国，由阿拉维王朝延续统治。","拉巴特","君主制"]],
iraq:[[1797,1917,"奥斯曼伊拉克诸省","摩苏尔、巴格达与巴士拉等省构成奥斯曼帝国东南边疆。","巴格达","奥斯曼行省"],[1918,1957,"伊拉克王国与英国委任统治","英国委任体系下建立的哈希姆君主国于1932年加入国际联盟。","巴格达","君主制"],[1958,2026,"伊拉克共和国","共和国经历军事政变、复兴党统治、战争、国际占领及新的议会政治。","巴格达","共和国"]],
saudi:[[1797,1817,"第一沙特王国","德拉伊耶酋长国扩张至阿拉伯半岛大片地区，随后遭奥斯曼—埃及军队击败。","德拉伊耶","酋长国"],[1818,1931,"阿拉伯半岛诸政权","内志、汉志、也门、阿曼与海湾诸酋长国形成多中心政治格局。","多地","诸酋长国"],[1932,2026,"沙特阿拉伯王国","伊本·沙特统一内志与汉志后建立王国，石油开发使其成为重要区域力量。","利雅得","君主制"]],
libya:[[1797,1911,"奥斯曼的黎波里塔尼亚","卡拉曼里王朝和其后的奥斯曼直接统治覆盖沿海，内陆控制程度不一。","的黎波里","奥斯曼属地"],[1912,1950,"意属利比亚及战后托管","意大利殖民统治遭长期抵抗，第二次世界大战后由英法分别管理。","的黎波里","殖民地／托管地"],[1951,1968,"利比亚联合王国","昔兰尼加、的黎波里塔尼亚和费赞联合组成独立王国。","的黎波里／班加西","君主制"],[1969,2026,"利比亚共和国及其后继政权","卡扎菲政权于1969年建立；2011年后国家进入政治分裂和重建进程。","的黎波里","共和国"]],
sudan:[[1797,1820,"丰吉苏丹国及地方政权","青尼罗河流域的森纳苏丹国与西部达尔富尔苏丹国等并存。","森纳","苏丹国"],[1821,1955,"埃及—英国统治时期","埃及征服后经历马赫迪国家和英埃共管苏丹。","喀土穆","共管／殖民统治"],[1956,2026,"苏丹共和国","独立后多次经历军政更替和内战；2011年南苏丹独立。","喀土穆","共和国"]],
palestine:[[1797,1917,"奥斯曼巴勒斯坦地区","该地区分属奥斯曼帝国多个行政单位，耶路撒冷后成为直接隶属中央的特殊区域。","耶路撒冷","奥斯曼属地"],[1918,1947,"英属巴勒斯坦托管地","英国依据国际联盟委任统治该地，阿拉伯与犹太民族运动矛盾加深。","耶路撒冷","委任统治"],[1948,2026,"以色列、巴勒斯坦领土与争议地区","1948年后形成多层次的国家、占领、自治与国际承认问题；展示需区分法理边界与实际控制。","耶路撒冷／拉姆安拉","多重政治地位"]]
};
const $=s=>document.querySelector(s),dom={year:$("#yearRange"),yearText:$("#yearText"),play:$("#playButton"),title:$("#mapTitle"),selectedLabel:$("#selectedLabel"),map:$("#menaMap"),schematicRoot:$("#countries"),realRoot:$("#realCountries"),schematicCountries:[...document.querySelectorAll("#countries path")],realCountries:[],labels:$("#labels"),regionLines:$("#regionLines"),panelKicker:$("#panelKicker"),polityName:$("#polityName"),polityNative:$("#polityNative"),badge:$("#eraBadge"),facts:$("#facts"),summaryHeading:$("#summaryHeading"),summary:$("#summary"),eventList:$("#eventList"),eventCount:$("#eventCount"),source:$("#boundarySource"),overview:$("#overviewButton"),brand:$("#brandButton"),about:$("#aboutButton"),dialog:$("#aboutDialog"),close:$("#dialogClose"),confirm:$("#dialogConfirm"),jump:$("#jumpButton")};
let selected=null,timer=null,realMode=false,boundaryKey="";
const eraFor=y=>eras.find(e=>y>=e.from&&y<=e.to)||eras.at(-1);const countryEra=(id,y)=>(overrides[id]||[]).find(([a,b])=>y>=a&&y<=b);
const historicalBoundaryYear=y=>y>=1924&&y<=1999;
const realBoundaryYear=y=>y>=1924;
const boundaryKeyFor=y=>historicalBoundaryYear(y)?`historical-${y}`:y>=2000?"modern":"schematic";
function eventCards(events){return events.map(([y,n,d,p])=>`<a class="event-card" href="${wiki(p)}" target="_blank" rel="noopener noreferrer"><span class="event-year">${y}</span><span><h4>${n}</h4><p>${d}</p></span><span class="event-arrow" aria-hidden="true">↗</span></a>`).join("")}
function activeCountries(){return realMode?dom.realCountries:dom.schematicCountries}
function clearMapState(){dom.map.setAttribute("viewBox","0 0 1080 650");[...dom.schematicCountries,...dom.realCountries].forEach(p=>p.classList.remove("selected","dimmed"));document.querySelectorAll(".map-labels text.hovered,.country-flag.hovered").forEach(node=>{node.classList.remove("hovered");if(node.classList.contains("country-flag"))node.setAttribute("transform",node.dataset.baseTransform||node.getAttribute("transform")||"");else node.style.transform=""});dom.regionLines.classList.remove("visible");dom.regionLines.innerHTML=""}
function setMapMode(y){const next=realBoundaryYear(y),key=boundaryKeyFor(y),changed=next!==realMode,boundaryChanged=key!==boundaryKey;if(changed||boundaryChanged){selected=null;clearMapState()}realMode=next;if(next&&boundaryChanged)buildBoundaryMap(y);boundaryKey=key;dom.map.classList.toggle("real-mode",next);dom.schematicRoot.style.display=next?"none":"";dom.realRoot.style.display=next?"":"none";dom.source.innerHTML=historicalBoundaryYear(y)?'1924—1999年边界采用 <a href="https://icr.ethz.ch/data/cshapes/" target="_blank" rel="noopener noreferrer">CShapes 2.0</a> 的历史有效期区间，并按每年1月1日生成快照；未编码的保护国／海湾属地以 Natural Earth 轮廓作明确回退。':y>=2000?'2000—2026年地图采用 <a href="https://www.naturalearthdata.com/downloads/50m-cultural-vectors/" target="_blank" rel="noopener noreferrer">Natural Earth 5.1.1</a> 的1:50m现代国界参考图层；政权颜色按所选年份更新，西撒哈拉与巴勒斯坦单独标示。':'1797—1923年为历史时期概略示意，不作为领土主张或学术地图引用。';if(changed||boundaryChanged||!dom.labels.children.length)createLabels()}
function render(){const y=+dom.year.value,e=eraFor(y);setMapMode(y);dom.title.textContent=realMode?`${y}年中东与北非国家边界`:e.map;dom.yearText.textContent=y;dom.year.style.setProperty("--progress",`${(y-1797)/229*100}%`);if(!selected){dom.summaryHeading.textContent="历史概述";dom.selectedLabel.textContent="区域总览";dom.panelKicker.textContent=`${y} · REGIONAL OVERVIEW`;dom.polityName.textContent=e.title;dom.polityNative.textContent=e.native;dom.badge.textContent=e.badge;dom.summary.textContent=e.summary;dom.facts.innerHTML=`<div><span>区域格局</span><strong>${e.title}</strong></div><div><span>观察年份</span><strong>${y}</strong></div><div><span>地图状态</span><strong>${historicalBoundaryYear(y)?"CShapes 年度边界":realMode?"GIS 国界快照":"年度示意快照"}</strong></div>`}else{const m=meta[selected],o=countryEra(selected,y);dom.summaryHeading.innerHTML="政权概述 <span>REGIME</span>";dom.selectedLabel.textContent=m[0];dom.panelKicker.textContent=`${y} · ${selected.toUpperCase()}`;dom.polityName.textContent=o?.[2]||`${m[0]} · ${e.badge}`;dom.polityNative.textContent=m[0];dom.badge.textContent=e.badge;dom.summary.textContent=o?.[3]||`在${y}年的区域格局中，${m[0]}处于“${e.title}”这一历史阶段。地图使用该年度边界图层展示其空间位置。`;dom.facts.innerHTML=`<div><span>地区</span><strong>${m[0]}</strong></div><div><span>首府／政治中心</span><strong>${o?.[4]||"见该年史料"}</strong></div><div><span>政权性质</span><strong>${o?.[5]||"主权国家／政治实体"}</strong></div>`}dom.eventList.innerHTML=eventCards(e.events);dom.eventCount.textContent=`${e.events.length} 项`;historicalStyles(y)}
function render(){const y=+dom.year.value,e=eraFor(y);setMapMode(y);dom.title.textContent=realMode?`${y}年中东与北非国家边界`:e.map;dom.yearText.textContent=y;dom.year.style.setProperty("--progress",`${(y-1797)/229*100}%`);if(!selected){dom.summaryHeading.textContent="历史概述";dom.selectedLabel.textContent="区域总览";dom.panelKicker.textContent=`${y} · REGIONAL OVERVIEW`;dom.polityName.textContent=e.title;dom.polityNative.textContent=e.native;dom.badge.textContent=e.badge;dom.summary.textContent=e.summary;dom.facts.innerHTML=`<div><span>区域格局</span><strong>${e.title}</strong></div><div><span>观察年份</span><strong>${y}</strong></div><div><span>地图状态</span><strong>${historicalBoundaryYear(y)?"CShapes 年度边界":realMode?"GIS 国界快照":"年度示意快照"}</strong></div>`}else{const m=meta[selected],o=countryEra(selected,y);dom.summaryHeading.innerHTML="政权概述 <span>REGIME</span>";dom.selectedLabel.textContent=m[0];dom.panelKicker.textContent=`${y} · ${selected.toUpperCase()}`;dom.polityName.textContent=o?.[2]||`${m[0]} · ${e.badge}`;dom.polityNative.textContent=m[0];dom.badge.textContent=e.badge;dom.summary.textContent=o?.[3]||`在${y}年的区域格局中，${m[0]}处于“${e.title}”这一历史阶段。地图使用该年度边界图层展示其空间位置。`;dom.facts.innerHTML=`<div><span>地区</span><strong>${m[0]}</strong></div><div><span>首府／政治中心</span><strong>${o?.[4]||"见该年史料"}</strong></div><div><span>政权性质</span><strong>${o?.[5]||"主权国家／政治实体"}</strong></div>`}dom.eventList.innerHTML=eventCards(e.events);dom.eventCount.textContent=`${e.events.length} 项`;historicalStyles(y);syncFlags(y)}
const mapColors=["#9d4035","#486f78","#b0792f","#655782","#4f755e","#a05262","#516987","#8d653d","#35706b","#7b4d58","#74763c","#35678a","#a65d37","#5d7050","#8a4f76","#54637b","#9b713e","#3f786f","#765c42","#6d5680","#99604a","#60754c"];
function flagSpec(id,y){
  if(id==="morocco")return{colors:["#c1272d"],emblem:"star"};
  if(id==="morocco-spanish")return{colors:y>=1931&&y<1939?["#aa151b","#f1bf00","#7b1e48"]:["#aa151b","#f1bf00","#aa151b"]};
  if(id==="western-sahara")return y<1976?{colors:["#aa151b","#f1bf00","#aa151b"]}:{colors:["#111","#fff","#178b55"],hoist:"#d71920",emblem:"star"};
  if(id==="algeria")return y<1962?{colors:["#174a9a","#fff","#d53d3d"],vertical:true}:{colors:["#16824a","#fff"],emblem:"crescent"};
  if(id==="tunisia")return{colors:["#d21f2b"],emblem:"crescent"};
  if(id==="libya")return y<1912?{colors:["#17813b","#fff","#d71920"],vertical:true}:y<1951?{colors:["#d71920","#111","#178b55"]}:y<1969?{colors:["#d71920","#111","#178b55"],emblem:"crescent"}:y<1977?{colors:["#d71920","#fff","#111"]}:y<2011?{colors:["#168b43"]}:{colors:["#d71920","#111","#178b55"],emblem:"crescent"};
  if(id==="egypt")return{colors:["#ce1126","#fff","#111"],emblem:"eagle"};
  if(id==="sudan")return y<1970?{colors:["#1e5aa8","#f2c230","#24923b"]}:{colors:["#d71920","#fff","#111"],hoist:"#178b55"};
  if(id==="turkey")return{colors:["#e30a17"],emblem:"crescent"};
  if(id==="syria")return y<1932?{colors:["#178b55","#fff","#d71920"],vertical:true}:y<1958?{colors:["#178b55","#fff","#111"],emblem:"stars"}:{colors:["#d71920","#fff","#111"],emblem:"stars"};
  if(id==="lebanon")return y<1943?{colors:["#d71920","#fff","#174a9a"],vertical:true}:{colors:["#d71920","#fff","#d71920"],emblem:"cedar"};
  if(id==="israel")return{colors:["#fff","#fff","#fff"],emblem:"star-of-david"};
  if(id==="palestine")return{colors:["#111","#fff","#178b55"],hoist:"#ce1126"};
  if(id==="jordan")return{colors:["#111","#fff","#178b55"],hoist:"#ce1126",emblem:"star"};
  if(id==="iraq")return{colors:["#ce1126","#fff","#111"],emblem:y>=1963?"stars":null};
  if(id==="iran")return y<1979?{colors:["#178b55","#fff","#d71920"],emblem:"lion"}:{colors:["#178b55","#fff","#d71920"],emblem:"seal"};
  if(id==="kuwait")return y<1961?{colors:["#173f5f"],emblem:"union"}:{colors:["#178b55","#fff","#ce1126"],hoist:"#111"};
  if(id==="saudi")return{colors:["#178b55"],emblem:"sword"};
  if(id==="qatar")return{colors:["#7d1f3d","#fff"],vertical:true};
  if(id==="uae")return y<1971?{colors:["#ce1126"]}:{colors:["#178b55","#fff","#111"],hoist:"#ce1126"};
  if(id==="oman")return y<1970?{colors:["#ce1126"]}:{colors:["#fff","#d71920","#178b55"],hoist:"#ce1126"};
  if(["yemen-north","yemen-south","yemen"].includes(id))return{colors:["#ce1126","#fff","#111"]};
  if(id==="bahrain")return{colors:["#ce1126"],hoist:"#fff"};
  return{colors:["#9d4035","#f0dfb8","#486f78"]};
}
function flagSvg(id,y,w,h){
  const s=flagSpec(id,y),x=-w/2,top=-h/2,parts=[];
  if(s.vertical){const step=w/s.colors.length;s.colors.forEach((color,i)=>parts.push(`<rect x="${nflag(x+i*step)}" y="${nflag(top)}" width="${nflag(step+.2)}" height="${nflag(h)}" fill="${color}"/>`))}
  else{const step=h/s.colors.length;s.colors.forEach((color,i)=>parts.push(`<rect x="${nflag(x)}" y="${nflag(top+i*step)}" width="${nflag(w)}" height="${nflag(step+.2)}" fill="${color}"/>`))}
  if(s.hoist)parts.push(`<rect x="${nflag(x)}" y="${nflag(top)}" width="${nflag(w*.28)}" height="${nflag(h)}" fill="${s.hoist}"/>`);
  const cx=0,cy=0,r=Math.max(1.8,Math.min(w,h)*.2);
  if(s.emblem==="crescent")parts.push(`<circle cx="${cx}" cy="${cy}" r="${nflag(r)}" fill="#fff"/><circle cx="${nflag(r*.38)}" cy="${nflag(-r*.18)}" r="${nflag(r*.82)}" fill="${s.colors[0]}"/>`);
  if(s.emblem==="star"||s.emblem==="star-of-david")parts.push(`<path d="${starPath(cx,cy,r)}" fill="${s.emblem==="star"?"#178b55":"#174a9a"}"/>`);
  if(s.emblem==="stars")parts.push(`<circle cx="${nflag(-r)}" cy="0" r="${nflag(r*.22)}" fill="#fff"/><circle cx="${nflag(r)}" cy="0" r="${nflag(r*.22)}" fill="#fff"/>`);
  if(s.emblem==="cedar")parts.push(`<path d="M0 ${nflag(-r*1.2)}l${nflag(-r*.7)} ${nflag(r*1.9)}h${nflag(r*1.4)}z" fill="#178b55"/>`);
  if(["eagle","lion","seal","sword","union"].includes(s.emblem))parts.push(`<circle cx="0" cy="0" r="${nflag(r*.7)}" fill="#e7c35b" opacity=".9"/>`);
  return `<rect x="${nflag(x-.8)}" y="${nflag(top-.8)}" width="${nflag(w+1.6)}" height="${nflag(h+1.6)}" rx="1.5" fill="#f0dfb8" opacity=".9"/><g>${parts.join("")}</g>`;
}
const nflag=v=>Math.round(v*10)/10;
function starPath(cx,cy,r){const points=[];for(let i=0;i<10;i+=1){const a=-Math.PI/2+i*Math.PI/5,rr=i%2?r:r*.42;points.push(`${nflag(cx+Math.cos(a)*rr)},${nflag(cy+Math.sin(a)*rr)}`)}return`M${points.join("L")}Z`}
function syncFlags(y){
  const ns="http://www.w3.org/2000/svg",root=realMode?dom.realRoot:dom.schematicRoot;
  root.querySelectorAll(".country-flag").forEach(flag=>flag.remove());
  activeCountries().forEach(path=>{const b=path.getBBox();if(!Number.isFinite(b.x)||!Number.isFinite(b.y))return;const w=Math.max(18,Math.min(38,b.width*.58||18)),h=Math.max(9,Math.min(18,b.height*.28||9));const flag=document.createElementNS(ns,"g");flag.classList.add("country-flag");flag.dataset.for=path.dataset.id;const baseTransform=`translate(${nflag(b.x+b.width/2)} ${nflag(b.y+b.height/2)})`;flag.dataset.baseTransform=baseTransform;flag.setAttribute("transform",baseTransform);flag.setAttribute("aria-hidden","true");flag.innerHTML=flagSvg(path.dataset.id,y,w,h);root.append(flag);if(document.activeElement===path)setHoverState(path.dataset.id,true)})
}
function setHoverState(id,on){document.querySelectorAll(`.map-labels text[data-for="${id}"],.country-flag[data-for="${id}"]`).forEach(node=>{node.classList.toggle("hovered",on);if(node.classList.contains("country-flag")){const base=node.dataset.baseTransform||node.getAttribute("transform")||"";node.dataset.baseTransform=base;node.setAttribute("transform",on?`${base} translate(0 -9)`:base)}else node.style.transform=on?"translateY(-9px)":""})}
function polityAt(id,y){
  if(id==="turkey")return y<=1922?"ottoman":"turkey";
  if(id==="morocco-spanish")return y<1956?"spanish-empire":"morocco";
  if(["syria","lebanon","palestine","jordan","iraq"].includes(id)&&y<=1917)return"ottoman";
  if(id==="syria"||id==="lebanon")return y<=1945?"french-empire":id;
  if(id==="palestine"||id==="jordan")return y<=1947?"british-empire":id;
  if(id==="iraq")return y<=1931?"british-empire":"iraq";
  if(id==="algeria")return y<1830?"ottoman":y<1962?"french-empire":"algeria";
  if(id==="tunisia")return y<1881?"ottoman":y<1956?"french-empire":"tunisia";
  if(id==="libya")return y<1912?"ottoman":y<1943?"italian-empire":y<1951?"british-empire":"libya";
  if(id==="egypt")return y<1805?"ottoman":y<1882?"muhammad-ali":y<1922?"british-empire":"egypt";
  if(id==="sudan")return y<1821?"sudan-sultanates":y<1885?"muhammad-ali":y<1899?"mahdi":y<1956?"british-empire":"sudan";
  if(id==="morocco")return y<1912?"morocco":y<1956?"french-empire":"morocco";
  if(id==="western-sahara")return y<1884?"sahrawi-polities":y<1976?"spanish-empire":"western-sahara";
  if(id==="iran")return y<=1924?"qajar":y<=1978?"pahlavi":"iran";
  if(id==="saudi")return y<1818?"first-saudi":y>=1824&&y<=1891?"second-saudi":y>=1902&&y<=1931?"third-saudi":y>=1932?"saudi":"arabian-polities";
  if(id==="kuwait")return y>=1899&&y<1961?"british-empire":"kuwait";
  if(id==="qatar")return y>=1916&&y<1971?"british-empire":"qatar";
  if(id==="uae")return y>=1892&&y<1971?"british-empire":"uae";
  if(id==="yemen-north")return y<1990?"yemen-north":"yemen";
  if(id==="yemen-south")return y<1990?"yemen-south":"yemen";
  if(id==="yemen")return y<1990?"yemen-divided":"yemen";
  return id;
}
function historicalStyles(y){
  const dependentIds=y<1919?["algeria","tunisia","libya","egypt","sudan","syria","lebanon","palestine","jordan","iraq","kuwait","qatar","uae","morocco-spanish","yemen-south"]:y<1962?["algeria","tunisia","morocco","morocco-spanish","western-sahara","sudan","syria","lebanon","palestine","jordan","iraq","kuwait","qatar","uae","oman","yemen-north","yemen-south"]:["western-sahara","morocco-spanish","yemen-south"];
  const countries=activeCountries(),polities=countries.map(path=>polityAt(path.dataset.id,y));
  const colors=new Map([...new Set(polities)].map((polity,index)=>[polity,mapColors[index%mapColors.length]]));
  countries.forEach((path,index)=>{const polity=polities[index];path.dataset.polity=polity;path.style.setProperty("--polity-color",colors.get(polity));path.classList.toggle("dependent",dependentIds.includes(path.dataset.id))});
}
function createLabels(){dom.labels.innerHTML="";activeCountries().forEach(p=>{const b=p.getBBox();if(b.width<32||b.height<24)return;const t=document.createElementNS("http://www.w3.org/2000/svg","text");t.classList.add("country-label");t.setAttribute("x",b.x+b.width/2);t.setAttribute("y",b.y+b.height/2+4);t.dataset.for=p.dataset.id;t.textContent=(meta[p.dataset.id]?.[0]||p.dataset.id).replace("／","·");dom.labels.append(t)})}
function regions(path){dom.regionLines.innerHTML="";const b=path.getBBox(),names=meta[path.dataset.id][1],lines=[[b.x+b.width*.36,b.y+5,b.x+b.width*.48,b.y+b.height-5],[b.x+4,b.y+b.height*.54,b.x+b.width-4,b.y+b.height*.42],[b.x+b.width*.68,b.y+5,b.x+b.width*.73,b.y+b.height-5]];lines.slice(0,Math.min(3,names.length-1)).forEach(v=>{const l=document.createElementNS("http://www.w3.org/2000/svg","line");["x1","y1","x2","y2"].forEach((k,i)=>l.setAttribute(k,v[i]));dom.regionLines.append(l)});names.slice(0,4).forEach((n,i)=>{const t=document.createElementNS("http://www.w3.org/2000/svg","text"),c=i%2,r=Math.floor(i/2);t.setAttribute("x",b.x+b.width*(c?.7:.3));t.setAttribute("y",b.y+b.height*(r?.7:.3));t.textContent=n;dom.regionLines.append(t)});dom.regionLines.classList.add("visible")}
function choose(id){selected=id;const p=activeCountries().find(x=>x.dataset.id===id);if(!p)return;const b=p.getBBox(),px=Math.max(45,b.width*.45),py=Math.max(38,b.height*.4);dom.map.setAttribute("viewBox",`${b.x-px} ${b.y-py} ${b.width+2*px} ${b.height+2*py}`);activeCountries().forEach(x=>{x.classList.toggle("selected",x===p);x.classList.toggle("dimmed",x!==p)});[...dom.labels.children].forEach(l=>l.style.display=l.dataset.for===id?"none":"");if(!realMode)regions(p);render();if(innerWidth<781)$("#storyPanel").scrollIntoView({behavior:"smooth",block:"start"})}
function overview(){selected=null;clearMapState();[...dom.labels.children].forEach(l=>l.style.display="");render()}
function stop(){if(timer)clearInterval(timer);timer=null;dom.play.classList.remove("playing");dom.play.setAttribute("aria-label","播放时间线")}
function toggle(){if(timer)return stop();dom.play.classList.add("playing");dom.play.setAttribute("aria-label","暂停时间线");timer=setInterval(()=>{dom.year.value=+dom.year.value>=2026?1797:+dom.year.value+1;render()},120)}
function bindCountry(p){const label=meta[p.dataset.id]?.[0]||p.dataset.id;p.setAttribute("tabindex","0");p.setAttribute("role","button");p.setAttribute("aria-label",`查看${label}`);p.addEventListener("click",()=>choose(p.dataset.id));p.addEventListener("keydown",e=>{if(e.key==="Enter"||e.key===" "){e.preventDefault();choose(p.dataset.id)}});p.addEventListener("mouseenter",()=>setHoverState(p.dataset.id,true));p.addEventListener("mouseleave",()=>setHoverState(p.dataset.id,false));p.addEventListener("focus",()=>{p.classList.add("keyboard-focus");setHoverState(p.dataset.id,true)});p.addEventListener("blur",()=>{p.classList.remove("keyboard-focus");setHoverState(p.dataset.id,false)})}
function boundaryFeaturesForYear(y){
  if(!historicalBoundaryYear(y))return window.MENA_2026||[];
  const grouped=new Map();
  (window.MENA_HISTORICAL_INTERVALS||[]).filter(feature=>feature.from<=y&&feature.to>=y).forEach(feature=>{
    const id=feature.id==="yemen-north"&&y>=1990?"yemen":feature.id;
    const current=grouped.get(id)||{id,name:feature.name,path:"",source:feature.source};
    current.path+=feature.path;
    current.source=current.source===feature.source?current.source:"CShapes 2.0 + Natural Earth fallback";
    grouped.set(id,current);
  });
  return [...grouped.values()];
}
function buildBoundaryMap(y){const ns="http://www.w3.org/2000/svg";dom.realRoot.innerHTML="";boundaryFeaturesForYear(y).forEach(feature=>{const p=document.createElementNS(ns,"path");p.dataset.id=feature.id;p.dataset.source=feature.source||"";p.setAttribute("d",feature.path);p.setAttribute("fill-rule","evenodd");if(["western-sahara","palestine"].includes(feature.id))p.classList.add("disputed");if(feature.source==="Natural Earth fallback")p.classList.add("fallback");const title=document.createElementNS(ns,"title");const label=meta[feature.id]?.[0]||feature.name||feature.id;title.textContent=`${label} · ${feature.source||"地图数据"}`;p.append(title);dom.realRoot.append(p)});dom.realCountries=[...dom.realRoot.querySelectorAll("path")];dom.realCountries.forEach(bindCountry)}
dom.schematicCountries.forEach(bindCountry);dom.year.addEventListener("input",()=>{stop();render()});dom.play.addEventListener("click",toggle);dom.overview.addEventListener("click",overview);dom.brand.addEventListener("click",overview);dom.about.addEventListener("click",()=>dom.dialog.showModal());dom.close.addEventListener("click",()=>dom.dialog.close());dom.confirm.addEventListener("click",()=>dom.dialog.close());dom.dialog.addEventListener("click",e=>{if(e.target===dom.dialog)dom.dialog.close()});dom.jump.addEventListener("click",()=>{const raw=prompt("输入1797—2026之间的年份：",dom.year.value);if(raw===null)return;dom.year.value=Math.max(1797,Math.min(2026,parseInt(raw,10)||+dom.year.value));stop();render()});render();
