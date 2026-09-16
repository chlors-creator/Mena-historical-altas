const meta={
morocco:["摩洛哥",["北部","菲斯","马拉喀什","苏斯"]],"morocco-spanish":["西属摩洛哥",["里夫","北部保护地"]],"western-sahara":["西撒哈拉",["萨基亚-哈姆拉","达赫拉"]],algeria:["阿尔及利亚",["奥兰","阿尔及尔","君士坦丁","撒哈拉"]],tunisia:["突尼斯",["突尼斯","萨赫勒","南部"]],libya:["利比亚",["的黎波里塔尼亚","昔兰尼加","费赞"]],egypt:["埃及",["下埃及","上埃及","西奈","努比亚"]],sudan:["苏丹",["喀土穆","达尔富尔","科尔多凡","东部"]],turkey:["土耳其",["安纳托利亚西部","安纳托利亚中部","黑海","东部"]],syria:["叙利亚",["阿勒颇","大马士革","沿海","幼发拉底河谷"]],lebanon:["黎巴嫩",["贝鲁特","黎巴嫩山","贝卡"]],israel:["以色列",["北部区","中央区","南部区"]],palestine:["巴勒斯坦",["约旦河西岸","加沙"]],jordan:["约旦",["北部","安曼","南部"]],iraq:["伊拉克",["摩苏尔","巴格达","巴士拉","库尔德地区"]],iran:["伊朗",["阿塞拜疆","里海地区","中央高原","胡齐斯坦","呼罗珊"]],kuwait:["科威特",["科威特城","外围地区"]],saudi:["沙特阿拉伯",["汉志","内志","东部省","阿西尔"]],qatar:["卡塔尔",["多哈","北部"]],uae:["阿联酋",["阿布扎比","迪拜","北部诸酋长国"]],oman:["阿曼",["马斯喀特","内地","佐法尔"]],"yemen-north":["北也门",["萨那","蒂哈马"]],"yemen-south":["南也门",["亚丁","哈德拉毛"]],yemen:["也门",["萨那","蒂哈马","亚丁","哈德拉毛"]],bahrain:["巴林",["麦纳麦","穆哈拉格"]]};
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
const historicalBoundaryYear=y=>y>=1886&&y<=1999;
const realBoundaryYear=y=>y>=1886;
const boundaryKeyFor=y=>historicalBoundaryYear(y)?`historical-${y}`:y>=2000?"modern":"schematic";
function eventCards(events){return events.map(([y,n,d,p])=>`<a class="event-card" href="${wiki(p)}" target="_blank" rel="noopener noreferrer"><span class="event-year">${y}</span><span><h4>${n}</h4><p>${d}</p></span><span class="event-arrow" aria-hidden="true">↗</span></a>`).join("")}
function activeCountries(){return realMode?dom.realCountries:dom.schematicCountries}
function clearMapState(){dom.map.setAttribute("viewBox","0 0 1080 650");[...dom.schematicCountries,...dom.realCountries].forEach(p=>p.classList.remove("selected","dimmed"));document.querySelectorAll(".map-labels text.hovered,.country-flag.hovered").forEach(node=>{node.classList.remove("hovered");node.style.transform=""});dom.regionLines.classList.remove("visible");dom.regionLines.innerHTML=""}
 function setMapMode(y){const next=realBoundaryYear(y),key=boundaryKeyFor(y),changed=next!==realMode,boundaryChanged=key!==boundaryKey;if(changed||boundaryChanged){selected=null;clearMapState();if(next&&boundaryChanged)dom.realRoot.classList.add("updating");else dom.realRoot.classList.remove("updating")}realMode=next;if(next&&boundaryChanged)buildBoundaryMap(y);boundaryKey=key;dom.map.classList.toggle("real-mode",next);dom.schematicRoot.style.display=next?"none":"";dom.realRoot.style.display=next?"":"none";dom.source.innerHTML=historicalBoundaryYear(y)?'1886—1999年边界采用 <a href="https://icr.ethz.ch/data/cshapes/" target="_blank" rel="noopener noreferrer">CShapes 2.0</a> 的历史有效期区间，并按每年1月1日生成年度快照；同一年份的过渡记录已裁决为唯一 cohort，同一 cohort 的多块合法领土合并；资料库未编码的保护国、海湾属地与早期边界以 Natural Earth 轮廓作明确回退，并在图层标题中标注。':y>=2000?'2000—2026年地图采用 <a href="https://www.naturalearthdata.com/downloads/50m-cultural-vectors/" target="_blank" rel="noopener noreferrer">Natural Earth 5.1.1</a> 的1:50m现代国界参考图层；政权颜色按所选年份更新，西撒哈拉与巴勒斯坦单独标示。':'1797—1885年为历史时期概略示意，不作为领土主张或学术地图引用。';if(changed||boundaryChanged||!dom.labels.children.length)createLabels()}
function render(){const y=+dom.year.value,e=eraFor(y);setMapMode(y);dom.title.textContent=realMode?`${y}年中东与北非国家边界`:e.map;dom.yearText.textContent=y;dom.year.style.setProperty("--progress",`${(y-1797)/229*100}%`);if(!selected){dom.summaryHeading.textContent="历史概述";dom.selectedLabel.textContent="区域总览";dom.panelKicker.textContent=`${y} · REGIONAL OVERVIEW`;dom.polityName.textContent=e.title;dom.polityNative.textContent=e.native;dom.badge.textContent=e.badge;dom.summary.textContent=e.summary;dom.facts.innerHTML=`<div><span>区域格局</span><strong>${e.title}</strong></div><div><span>观察年份</span><strong>${y}</strong></div><div><span>地图状态</span><strong>${historicalBoundaryYear(y)?"CShapes 年度边界":realMode?"GIS 国界快照":"年度示意快照"}</strong></div>`}else{const m=meta[selected],o=countryEra(selected,y);dom.summaryHeading.innerHTML="政权概述 <span>REGIME</span>";dom.selectedLabel.textContent=m[0];dom.panelKicker.textContent=`${y} · ${selected.toUpperCase()}`;dom.polityName.textContent=o?.[2]||`${m[0]} · ${e.badge}`;dom.polityNative.textContent=m[0];dom.badge.textContent=e.badge;dom.summary.textContent=o?.[3]||`在${y}年的区域格局中，${m[0]}处于“${e.title}”这一历史阶段。地图使用该年度边界图层展示其空间位置。`;dom.facts.innerHTML=`<div><span>地区</span><strong>${m[0]}</strong></div><div><span>首府／政治中心</span><strong>${o?.[4]||"见该年史料"}</strong></div><div><span>政权性质</span><strong>${o?.[5]||"主权国家／政治实体"}</strong></div>`}dom.eventList.innerHTML=eventCards(e.events);dom.eventCount.textContent=`${e.events.length} 项`;historicalStyles(y)}
 function render(){const y=+dom.year.value,e=eraFor(y);setMapMode(y);dom.title.textContent=realMode?`${y}年中东与北非国家边界`:e.map;dom.yearText.textContent=y;dom.year.style.setProperty("--progress",`${(y-1797)/229*100}%`);if(!selected){dom.summaryHeading.textContent="历史概述";dom.selectedLabel.textContent="区域总览";dom.panelKicker.textContent=`${y} · REGIONAL OVERVIEW`;dom.polityName.textContent=e.title;dom.polityNative.textContent=e.native;dom.badge.textContent=e.badge;dom.summary.textContent=e.summary;dom.facts.innerHTML=`<div><span>区域格局</span><strong>${e.title}</strong></div><div><span>观察年份</span><strong>${y}</strong></div><div><span>地图状态</span><strong>${historicalBoundaryYear(y)?"CShapes 年度边界":realMode?"GIS 国界快照":"年度示意快照"}</strong></div>`}else{const m=meta[selected],o=countryEra(selected,y);dom.summaryHeading.innerHTML="政权概述 <span>REGIME</span>";dom.selectedLabel.textContent=m[0];dom.panelKicker.textContent=`${y} · ${selected.toUpperCase()}`;dom.polityName.textContent=o?.[2]||`${m[0]} · ${e.badge}`;dom.polityNative.textContent=m[0];dom.badge.textContent=e.badge;dom.summary.textContent=o?.[3]||`在${y}年的区域格局中，${m[0]}处于“${e.title}”这一历史阶段。地图使用该年度边界图层展示其空间位置。`;dom.facts.innerHTML=`<div><span>地区</span><strong>${m[0]}</strong></div><div><span>首府／政治中心</span><strong>${o?.[4]||"见该年史料"}</strong></div><div><span>政权性质</span><strong>${o?.[5]||"主权国家／政治实体"}</strong></div>`}dom.eventList.innerHTML=eventCards(e.events);dom.eventCount.textContent=`${e.events.length} 项`;historicalStyles(y);syncFlags(y);if(realMode){if(dom.realRoot.classList.contains("updating"))requestAnimationFrame(()=>{if(realMode&&boundaryKey===boundaryKeyFor(+dom.year.value))dom.realRoot.classList.remove("updating")})}else dom.realRoot.classList.remove("updating")}
const mapColors=["#9d4035","#486f78","#b0792f","#655782","#4f755e","#a05262","#516987","#8d653d","#35706b","#7b4d58","#74763c","#35678a","#a65d37","#5d7050","#8a4f76","#54637b","#9b713e","#3f786f","#765c42","#6d5680","#99604a","#60754c"];
const FLAG_DIR="assets/flags/";
const flagSources={
  "ottoman-empire.svg":"https://commons.wikimedia.org/wiki/File:Flag_of_the_Ottoman_Empire.svg",
  "algeria.svg":"https://commons.wikimedia.org/wiki/File:Flag_of_Algeria.svg",
  "bahrain.svg":"https://commons.wikimedia.org/wiki/File:Flag_of_Bahrain.svg",
  "egypt-1882.svg":"https://commons.wikimedia.org/wiki/File:Flag_of_Egypt_(1882%E2%80%931922).svg",
  "egypt-1826-1867.png":"https://commons.wikimedia.org/wiki/File:Flag_of_Egypt_(1826%E2%80%931867_and_1881%E2%80%931914).png",
  "egypt-muhammad-ali.svg":"https://commons.wikimedia.org/wiki/File:Flag_of_Muhammad_Ali.svg",
  "egypt-1922.svg":"https://commons.wikimedia.org/wiki/File:Flag_of_Egypt_(1922%E2%80%931958).svg",
  "egypt-1958.png":"https://commons.wikimedia.org/wiki/File:Flag_of_Egypt_(1958%E2%80%931972).png",
  "egypt-1972.svg":"https://commons.wikimedia.org/wiki/File:Flag_of_Egypt_(1972%E2%80%931984).svg",
  "egypt.svg":"https://commons.wikimedia.org/wiki/File:Flag_of_Egypt.svg",
  "france.svg":"https://commons.wikimedia.org/wiki/File:Flag_of_France.svg",
  "hejaz-1917.svg":"https://commons.wikimedia.org/wiki/File:Flag_of_Hejaz_(1917).svg",
  "iran-1933.svg":"https://commons.wikimedia.org/wiki/File:Flag_of_Iran_(1933%E2%80%931964).svg",
  "iran-1964.svg":"https://commons.wikimedia.org/wiki/File:Flag_of_Iran_(1964%E2%80%931979).svg",
  "iran.svg":"https://commons.wikimedia.org/wiki/File:Flag_of_Iran.svg",
  "iraq-1921.svg":"https://commons.wikimedia.org/wiki/File:Flag_of_Iraq_(1921%E2%80%931924).svg",
  "iraq-1924.svg":"https://commons.wikimedia.org/wiki/File:Flag_of_Iraq_(1924%E2%80%931959).svg",
  "iraq-1959.svg":"https://commons.wikimedia.org/wiki/File:Flag_of_Iraq_(1959%E2%80%931963).svg",
  "iraq-1963.svg":"https://commons.wikimedia.org/wiki/File:Flag_of_Iraq_(1963%E2%80%931991).svg",
  "iraq-1991.svg":"https://commons.wikimedia.org/wiki/File:Flag_of_Iraq_(1991%E2%80%932004).svg",
  "iraq.svg":"https://commons.wikimedia.org/wiki/File:Flag_of_Iraq.svg",
  "israel.svg":"https://commons.wikimedia.org/wiki/File:Flag_of_Israel.svg",
  "italy.svg":"https://commons.wikimedia.org/wiki/File:Flag_of_Italy.svg",
  "jordan.png":"https://commons.wikimedia.org/wiki/File:Flag_of_Jordan_(official).svg",
  "kuwait.svg":"https://commons.wikimedia.org/wiki/File:Flag_of_Kuwait.svg",
  "lebanon-1920.svg":"https://commons.wikimedia.org/wiki/File:Flag_of_Lebanon_during_French_Mandate_(1920-1943).svg",
  "lebanon.svg":"https://commons.wikimedia.org/wiki/File:Flag_of_Lebanon.svg",
  "libya-1951.svg":"https://commons.wikimedia.org/wiki/File:Flag_of_Libya_(1951%E2%80%931969).svg",
  "libya-1969.svg":"https://commons.wikimedia.org/wiki/File:Flag_of_Libya_(1969%E2%80%931972,_2-3).svg",
  "libya-1977.svg":"https://commons.wikimedia.org/wiki/File:Flag_of_Libya_(1977%E2%80%932011).svg",
  "morocco-alaouite.svg":"https://commons.wikimedia.org/wiki/File:Flag_of_Morocco_(Alaouite).svg",
  "morocco.svg":"https://commons.wikimedia.org/wiki/File:Flag_of_Morocco.svg",
  "oman-1954.png":"https://commons.wikimedia.org/wiki/File:Imamate_Of_Oman_1954-1959.png",
  "oman.svg":"https://commons.wikimedia.org/wiki/File:Flag_of_Oman.svg",
  "palestine-mandate.svg":"https://commons.wikimedia.org/wiki/File:Ensign_of_the_Palestine_Mandate_(1927%E2%80%931948).svg",
  "palestine.svg":"https://commons.wikimedia.org/wiki/File:Flag_of_Palestine.svg",
  "qajar-iran.svg":"https://commons.wikimedia.org/wiki/File:State_flag_of_Persia_(1907%E2%80%931933).svg",
  "qatar.svg":"https://commons.wikimedia.org/wiki/File:Flag_of_Qatar.svg",
  "saudi-1932.svg":"https://commons.wikimedia.org/wiki/File:Flag_of_Saudi_Arabia_(1932%E2%80%931934).svg",
  "saudi-1934.svg":"https://commons.wikimedia.org/wiki/File:Flag_of_Saudi_Arabia_(1934%E2%80%931938).svg",
  "saudi-1938.svg":"https://commons.wikimedia.org/wiki/File:Flag_of_Saudi_Arabia_(1938%E2%80%931973).svg",
  "saudi-first-second.svg":"https://commons.wikimedia.org/wiki/File:Flag_of_the_First_and_Second_Saudi_State_(1744-1891).svg",
  "saudi.svg":"https://commons.wikimedia.org/wiki/File:Flag_of_Saudi_Arabia.svg",
  "sudan-1956.svg":"https://commons.wikimedia.org/wiki/File:Flag_of_Sudan_(1956%E2%80%931970).svg",
  "sudan.svg":"https://commons.wikimedia.org/wiki/File:Flag_of_Sudan.svg",
  "syria-1930.svg":"https://commons.wikimedia.org/wiki/File:Syria-flag_1930-58_1961-63.svg",
  "syria-1932.svg":"https://commons.wikimedia.org/wiki/File:Syria-flag_1932-58_1961-63.svg",
  "syria-1963.svg":"https://commons.wikimedia.org/wiki/File:Flag_of_Syria_(1963%E2%80%931972).svg",
  "syria-1972.svg":"https://commons.wikimedia.org/wiki/File:Flag_of_Syria_(1972%E2%80%931980).svg",
  "syria.svg":"https://commons.wikimedia.org/wiki/File:Flag_of_Syria.svg",
  "tunisia.svg":"https://commons.wikimedia.org/wiki/File:Flag_of_Tunisia.svg",
  "turkey.svg":"https://commons.wikimedia.org/wiki/File:Flag_of_Turkey.svg",
  "uae.svg":"https://commons.wikimedia.org/wiki/File:Flag_of_the_United_Arab_Emirates.svg",
  "uk.svg":"https://commons.wikimedia.org/wiki/File:Flag_of_the_United_Kingdom.svg",
  "united-arab-republic.svg":"https://commons.wikimedia.org/wiki/File:Flag_of_the_United_Arab_Republic_(1958%E2%80%931971).svg",
  "yemen-kingdom.svg":"https://commons.wikimedia.org/wiki/File:Flag_of_the_Mutawakkilite_Kingdom_of_Yemen.svg",
  "yemen-north.svg":"https://commons.wikimedia.org/wiki/File:Flag_of_the_Yemen_Arab_Republic.svg",
  "yemen-south.svg":"https://commons.wikimedia.org/wiki/File:Flag_of_South_Yemen.svg",
  "yemen.svg":"https://commons.wikimedia.org/wiki/File:Flag_of_Yemen.svg"
};
const flagAsset=(file,period)=>({path:`${FLAG_DIR}${file}`,file,period,source:flagSources[file]||"Wikimedia Commons"});
function flagAssetFor(id,y){
  if(id==="turkey")return y<=1922?flagAsset("ottoman-empire.svg","奥斯曼帝国（至1922）"):flagAsset("turkey.svg","土耳其共和国（1923—）");
  if(id==="morocco-spanish")return y<1956?flagAsset("spain.svg","西班牙保护地（至1956）"):flagAsset("morocco.svg","摩洛哥王国（1956—）");
  if(id==="morocco")return y<1912?flagAsset("morocco-alaouite.svg","摩洛哥阿拉维苏丹国（至1912）"):y<1956?flagAsset("france.svg","法属摩洛哥保护国（1912—1956）"):flagAsset("morocco.svg","摩洛哥王国（1956—）");
  if(id==="western-sahara")return y<1976?flagAsset("spain.svg","西属撒哈拉（至1975）"):flagAsset("morocco.svg","摩洛哥实际控制区（1976—）");
  if(id==="algeria")return y<1830?flagAsset("ottoman-empire.svg","奥斯曼帝国（至1830）"):y<1962?flagAsset("france.svg","法属阿尔及利亚（1830—1962）"):flagAsset("algeria.svg","阿尔及利亚共和国（1962—）");
  if(id==="tunisia")return y<1881?flagAsset("ottoman-empire.svg","奥斯曼帝国（至1881）"):y<1956?flagAsset("france.svg","法属突尼斯（1881—1956）"):flagAsset("tunisia.svg","突尼斯共和国（1956—）");
  if(id==="libya")return y<1912?flagAsset("ottoman-empire.svg","奥斯曼帝国（至1912）"):y<1943?flagAsset("italy.svg","意属利比亚（1912—1943）"):y<1951?flagAsset("uk.svg","英法军事管理（1943—1951）"):y<1969?flagAsset("libya-1951.svg","利比亚王国（1951—1969）"):y<1972?flagAsset("libya-1969.svg","利比亚共和国（1969—1972）"):y<1977?flagAsset("egypt-1972.svg","阿拉伯共和国联邦时期（1972—1977）"):y<2011?flagAsset("libya-1977.svg","大阿拉伯利比亚人民社会主义民众国（1977—2011）"):flagAsset("libya-1951.svg","利比亚国（2011—）");
  if(id==="egypt")return y<1805?flagAsset("ottoman-empire.svg","奥斯曼帝国（至1805）"):y<1826?flagAsset("ottoman-empire.svg","穆罕默德·阿里统治早期（1805—1826，奥斯曼旗制语境）"):y<1867?flagAsset("egypt-1826-1867.png","埃及赫迪夫领（1826—1867）"):y<1881?flagAsset("egypt-muhammad-ali.svg","埃及赫迪夫领（1867—1881）"):y<1922?flagAsset("egypt-1882.svg","埃及苏丹国（1881—1922）"):y<1958?flagAsset("egypt-1922.svg","埃及王国／共和国（1922—1958）"):y<1972?flagAsset("egypt-1958.png","阿拉伯联合共和国（1958—1971）"):y<1984?flagAsset("egypt-1972.svg","埃及（1972—1984）"):flagAsset("egypt.svg","埃及共和国（1984—）");
  if(id==="sudan")return y<1821?flagAsset("ottoman-empire.svg","地方苏丹国（奥斯曼边疆）"):y<1826?flagAsset("ottoman-empire.svg","埃及征服初期（1821—1826，奥斯曼旗制语境）"):y<1867?flagAsset("egypt-1826-1867.png","埃及统治时期（1826—1867）"):y<1881?flagAsset("egypt-muhammad-ali.svg","埃及统治时期（1867—1881）"):y<1885?flagAsset("egypt-1826-1867.png","英埃统治早期（1881—1885）"):y<1956?flagAsset("uk.svg","英埃共管苏丹（历史旗帜未统一）"):y<1970?flagAsset("sudan-1956.svg","苏丹共和国（1956—1970）"):flagAsset("sudan.svg","苏丹共和国（1970—）");
  if(id==="syria")return y<=1918?flagAsset("ottoman-empire.svg","奥斯曼帝国（至1918）"):y<=1931?flagAsset("syria-1930.svg","叙利亚委任统治（1920—1931）"):y<=1957?flagAsset("syria-1932.svg","叙利亚共和国（1932—1957）"):y<=1960?flagAsset("united-arab-republic.svg","阿拉伯联合共和国（1958—1961）"):y<=1962?flagAsset("syria-1932.svg","叙利亚共和国（1961—1963）"):y<=1971?flagAsset("syria-1963.svg","叙利亚（1963—1972）"):y<=1979?flagAsset("syria-1972.svg","阿拉伯共和国联邦时期（1972—1980）"):y<=2024?flagAsset("united-arab-republic.svg","叙利亚（1980—2024）"):flagAsset("syria.svg","叙利亚（2025—）");
  if(id==="lebanon")return y<1920?flagAsset("ottoman-empire.svg","奥斯曼帝国（至1920）"):y<1943?flagAsset("lebanon-1920.svg","法属黎巴嫩委任统治（1920—1943）"):flagAsset("lebanon.svg","黎巴嫩共和国（1943—）");
  if(id==="israel")return y<1948?flagAsset("palestine-mandate.svg","英属巴勒斯坦托管地（1927—1948海事旗）"):flagAsset("israel.svg","以色列（1948—）");
  if(id==="palestine")return y<1917?flagAsset("ottoman-empire.svg","奥斯曼巴勒斯坦（至1917）"):y<1948?flagAsset("palestine-mandate.svg","英属巴勒斯坦托管地（1927—1948海事旗）"):flagAsset("palestine.svg","巴勒斯坦（1948—）");
  if(id==="jordan")return y<1918?flagAsset("ottoman-empire.svg","奥斯曼帝国（至1918）"):y<1928?flagAsset("uk.svg","英国委任／保护时期"):flagAsset("jordan.png","约旦（1928—）");
  if(id==="iraq")return y<=1920?flagAsset("ottoman-empire.svg","奥斯曼帝国（至1920）"):y<=1923?flagAsset("iraq-1921.svg","伊拉克王国（1921—1924）"):y<=1958?flagAsset("iraq-1924.svg","伊拉克王国（1924—1959）"):y<=1962?flagAsset("iraq-1959.svg","伊拉克共和国（1959—1963）"):y<=1990?flagAsset("iraq-1963.svg","伊拉克（1963—1991）"):y<=2003?flagAsset("iraq-1991.svg","伊拉克（1991—2004）"):flagAsset("iraq.svg","伊拉克共和国（2004—）");
  if(id==="iran")return y<=1925?flagAsset("qajar-iran.svg","卡扎尔王朝（至1925）"):y<=1963?flagAsset("iran-1933.svg","巴列维王朝早期（1925—1964）"):y<=1978?flagAsset("iran-1964.svg","巴列维王朝（1964—1979）"):flagAsset("iran.svg","伊朗伊斯兰共和国（1979—）");
  if(id==="kuwait")return y<1961?flagAsset("uk.svg","英国保护时期（历史旗帜未统一）"):flagAsset("kuwait.svg","科威特（1961—）");
  if(id==="saudi")return y<1902?flagAsset("saudi-first-second.svg","第一／第二沙特国家（1744—1891）"):y<1932?flagAsset("saudi-1932.svg","内志与汉志王国前身（1902—1932）"):y<1934?flagAsset("saudi-1932.svg","沙特阿拉伯（1932—1934）"):y<1938?flagAsset("saudi-1934.svg","沙特阿拉伯（1934—1938）"):y<1973?flagAsset("saudi-1938.svg","沙特阿拉伯（1938—1973）"):flagAsset("saudi.svg","沙特阿拉伯（1973—）");
  if(id==="qatar")return y<1971?flagAsset("uk.svg","英国保护时期（地方旗帜多样）"):flagAsset("qatar.svg","卡塔尔（1971—）");
  if(id==="uae")return y<1971?flagAsset("uk.svg","特鲁西尔诸国保护时期"):flagAsset("uae.svg","阿拉伯联合酋长国（1971—）");
  if(id==="oman")return y<1954?flagAsset("ottoman-empire.svg","阿曼内地／马斯喀特（历史旗帜版本多样）"):y<1970?flagAsset("oman-1954.png","阿曼伊玛目国（1954—1959旗帜）"):flagAsset("oman.svg","阿曼苏丹国（1970—）");
  if(id==="yemen-north")return y<1918?flagAsset("ottoman-empire.svg","奥斯曼也门（至1918）"):y<1962?flagAsset("yemen-kingdom.svg","穆塔瓦基利特王国（1918—1962）"):y<1990?flagAsset("yemen-north.svg","也门阿拉伯共和国（1962—1990）"):flagAsset("yemen.svg","也门共和国（1990—）");
  if(id==="yemen-south")return y<1967?flagAsset("uk.svg","亚丁殖民地／保护地（英国）"):y<1990?flagAsset("yemen-south.svg","南也门（1967—1990）"):flagAsset("yemen.svg","也门共和国（1990—）");
  if(id==="yemen")return y<1990?flagAsset("yemen-north.svg","也门分裂时期示意"):flagAsset("yemen.svg","也门共和国（1990—）");
  if(id==="bahrain")return flagAsset("bahrain.svg","巴林（1820年代确立红白旗制）");
  return flagAsset("ottoman-empire.svg","奥斯曼帝国历史回退旗帜");
}
function syncFlags(y){
  const ns="http://www.w3.org/2000/svg",root=realMode?dom.realRoot:dom.schematicRoot,defs=dom.map.querySelector("defs");
  root.querySelectorAll(".country-flag").forEach(flag=>flag.remove());
  const oldPatterns=defs.querySelector("#flagPatterns");if(oldPatterns)oldPatterns.remove();
  const patterns=document.createElementNS(ns,"g");patterns.setAttribute("id","flagPatterns");defs.append(patterns);
  activeCountries().forEach((path,index)=>{const b=path.getBBox();if(!Number.isFinite(b.x)||!Number.isFinite(b.y))return;const asset=flagAssetFor(path.dataset.id,y),clipId=`flagClip-${index}`;const clip=document.createElementNS(ns,"clipPath");clip.setAttribute("id",clipId);clip.setAttribute("clipPathUnits","userSpaceOnUse");const clipPath=document.createElementNS(ns,"path");clipPath.setAttribute("d",path.getAttribute("d"));clip.append(clipPath);patterns.append(clip);const flag=document.createElementNS(ns,"g");flag.classList.add("country-flag");flag.dataset.for=path.dataset.id;flag.dataset.flagFile=asset.file;flag.dataset.flagPeriod=asset.period;flag.dataset.flagSource=asset.source;flag.setAttribute("clip-path",`url(#${clipId})`);flag.setAttribute("aria-hidden","true");const image=document.createElementNS(ns,"image");image.setAttribute("x",b.x);image.setAttribute("y",b.y);image.setAttribute("width",Math.max(2,b.width));image.setAttribute("height",Math.max(2,b.height));image.setAttribute("preserveAspectRatio","xMidYMid slice");image.setAttribute("filter","url(#flagWave)");image.setAttribute("href",asset.path);image.setAttributeNS("http://www.w3.org/1999/xlink","href",asset.path);image.setAttribute("role","presentation");flag.append(image);const sheen=document.createElementNS(ns,"path");sheen.setAttribute("d",path.getAttribute("d"));sheen.setAttribute("fill","url(#flagSheen)");sheen.setAttribute("opacity",".42");sheen.setAttribute("pointer-events","none");flag.append(sheen);root.append(flag);if(document.activeElement===path)setHoverState(path.dataset.id,true)})
}
function setHoverState(id,on){document.querySelectorAll(`.map-labels text[data-for="${id}"],.country-flag[data-for="${id}"]`).forEach(node=>{node.classList.toggle("hovered",on);node.style.transform=on?"translateY(-9px)":""})}
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
function annualCohortFeatures(features,y){
  const byId=new Map();
  features.filter(feature=>feature.from<=y&&feature.to>=y).forEach(feature=>{
    const list=byId.get(feature.id)||[];list.push(feature);byId.set(feature.id,list);
  });
  const result=[];
  byId.forEach((list,id)=>{
    const bestFrom=Math.max(...list.map(feature=>feature.from));
    const fromCohort=list.filter(feature=>feature.from===bestFrom);
    const bestTo=Math.max(...fromCohort.map(feature=>feature.to));
    const cohort=fromCohort.filter(feature=>feature.to===bestTo);
    const seen=new Set();
    cohort.forEach(feature=>{if(seen.has(feature.path))return;seen.add(feature.path);result.push(feature)});
  });
  return result;
}
function boundaryFeaturesForYear(y){
  if(!historicalBoundaryYear(y))return window.MENA_2026||[];
  const grouped=new Map();
  const sourceFeatures=y<1924?(window.MENA_HISTORICAL_1886_1923||[]):(window.MENA_HISTORICAL_INTERVALS||[]);
  const selectedFeatures=annualCohortFeatures(sourceFeatures,y);
  if(y>=1918&&y<=1933&&window.MENA_YEMEN_EXTENSION)selectedFeatures.push(...window.MENA_YEMEN_EXTENSION.filter(feature=>feature.from<=y&&feature.to>=y));
  const present=new Set(selectedFeatures.map(feature=>(["yemen-north","yemen-south"].includes(feature.id)&&y>=1990)?"yemen":feature.id));
  const fallbackIds=["saudi","kuwait","bahrain","western-sahara"];
  if(y<1912)fallbackIds.push("libya");
  if(y<1918)fallbackIds.push("yemen-north");
  fallbackIds.forEach(id=>{if(present.has(id))return;const fallback=(window.MENA_2026||[]).find(feature=>feature.id===id||(id==="yemen-north"&&feature.id==="yemen"));if(fallback){selectedFeatures.push({id,from:y,to:y,path:fallback.path,source:"Natural Earth fallback",name:fallback.name});present.add(id)}});
  if(y>=1886&&window.MENA_HISTORICAL_ADEN)selectedFeatures.push(...window.MENA_HISTORICAL_ADEN.filter(feature=>feature.from<=y&&feature.to>=y));
  selectedFeatures.forEach(feature=>{
    const id=["yemen-north","yemen-south"].includes(feature.id)&&y>=1990?"yemen":feature.id;
    const current=grouped.get(id)||{id,name:feature.name,path:"",source:feature.source};
    current.path+=feature.path;
    current.source=current.source===feature.source?current.source:[...new Set([current.source,feature.source].filter(Boolean).flatMap(source=>source.split(" + ")))].join(" + ");
    grouped.set(id,current);
  });
  return [...grouped.values()];
}
function buildBoundaryMap(y){const ns="http://www.w3.org/2000/svg";dom.realRoot.innerHTML="";boundaryFeaturesForYear(y).forEach(feature=>{const p=document.createElementNS(ns,"path");p.dataset.id=feature.id;p.dataset.source=feature.source||"";p.setAttribute("d",feature.path);p.setAttribute("fill-rule",feature.source?.includes("extension")?"nonzero":"evenodd");if(["western-sahara","palestine"].includes(feature.id))p.classList.add("disputed");if(feature.source?.includes("Natural Earth fallback"))p.classList.add("fallback");const title=document.createElementNS(ns,"title");const label=feature.id==="yemen-south"?(y<1967?"亚丁保护国":"南也门"):(meta[feature.id]?.[0]||feature.name||feature.id);title.textContent=`${label} · ${feature.source||"地图数据"}`;p.append(title);dom.realRoot.append(p)});dom.realCountries=[...dom.realRoot.querySelectorAll("path")];dom.realCountries.forEach(bindCountry)}
dom.schematicCountries.forEach(bindCountry);dom.year.addEventListener("input",()=>{stop();render()});dom.play.addEventListener("click",toggle);dom.overview.addEventListener("click",overview);dom.brand.addEventListener("click",overview);dom.about.addEventListener("click",()=>dom.dialog.showModal());dom.close.addEventListener("click",()=>dom.dialog.close());dom.confirm.addEventListener("click",()=>dom.dialog.close());dom.dialog.addEventListener("click",e=>{if(e.target===dom.dialog)dom.dialog.close()});dom.jump.addEventListener("click",()=>{const raw=prompt("输入1797—2026之间的年份：",dom.year.value);if(raw===null)return;dom.year.value=Math.max(1797,Math.min(2026,parseInt(raw,10)||+dom.year.value));stop();render()});render();
// Keep the public map heading tied to the historical period title, including on real-boundary years.
const _renderWithHistoricalTitle=render;render=()=>{_renderWithHistoricalTitle();dom.title.textContent=eraFor(+dom.year.value).map};
const displayNameAt=(id,y)=>id==="yemen-south"?(y<1967?"亚丁保护国":"南也门"):(meta[id]?.[0]||id);
const formalNameAt=(id,y)=>((window.MENA_FORMAL_NAMES?.[id]||[]).find(([from,to])=>y>=from&&y<=to)||[])[2]||countryEra(id,y)?.[2]||displayNameAt(id,y);
const _renderWithFormalNames=render;render=()=>{_renderWithFormalNames();const y=+dom.year.value;activeCountries().forEach(path=>{const label=displayNameAt(path.dataset.id,y);path.setAttribute("aria-label",`查看${label}`)});document.querySelectorAll(".map-labels text[data-for]").forEach(label=>{label.textContent=displayNameAt(label.dataset.for,y)});if(!selected)return;const display=displayNameAt(selected,y);dom.selectedLabel.textContent=display;dom.polityName.textContent=formalNameAt(selected,y);dom.polityNative.textContent=display;const firstFact=dom.facts.querySelector("div strong");if(firstFact)firstFact.textContent=display};
