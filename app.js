/* Application entry: bind controls after all feature files have loaded. */
// Event binding and the first render are deferred until the single render pipeline below exists.
const displayNameAt=(id,y)=>{
  if(id==="yemen-south")return y<1967?"亚丁保护国":"南也门";
  if(id==="ottoman")return"奥斯曼帝国";
  if(id==="gaza-strip")return y<=1966?"加沙地带（埃及占领）":y<=1987?"加沙地带（以色列占领）":y<=2006?"加沙地带（巴勒斯坦国）":"加沙地带（哈马斯控制）";
  if(id==="west-bank")return y<=1966?"约旦河西岸（约旦占领）":y<=1987?"约旦河西岸（以色列占领）":y<=2006?"约旦河西岸（巴勒斯坦国）":"约旦河西岸（巴勒斯坦民族权力机构）";
  if(id==="golan-heights")return y<1967?"戈兰高地（叙利亚）":"戈兰高地（以色列实际控制、叙利亚声索）";
  if(id==="sinai-peninsula")return y>=1968&&y<=1979?"西奈半岛（以色列占领、埃及声索）":"西奈半岛";
  if(id==="arabian-dispute")return"汉志—内志争议区";
  if(id==="saudi-yemen-dispute")return"沙特—也门未定界争议带";
  return meta[id]?.[0]||id;
};
const formalNameAt=(id,y)=>((window.MENA_FORMAL_NAMES?.[id]||[]).find(([from,to])=>y>=from&&y<=to)||[])[2]||countryEra(id,y)?.[2]||displayNameAt(id,y);
const renderBase=render;
const WIKI_COUNTRY_PAGES={ottoman:"奥斯曼帝国",morocco:"摩洛哥", "morocco-spanish":"摩洛哥", "western-sahara":"西撒哈拉","golan-heights":"戈兰高地","sinai-peninsula":"西奈半岛","arabian-dispute":"汉志","saudi-yemen-dispute":"沙特阿拉伯统一",algeria:"阿尔及利亚",tunisia:"突尼斯",libya:"利比亚",egypt:"埃及",sudan:"苏丹",turkey:"土耳其",syria:"叙利亚",lebanon:"黎巴嫩",israel:"以色列",palestine:"巴勒斯坦国","gaza-strip":"加沙地带","west-bank":"约旦河西岸",jordan:"约旦",iraq:"伊拉克",iran:"伊朗",kuwait:"科威特",saudi:"沙特阿拉伯",hejaz:"汉志王国",shammar:"贾巴尔·舍迈尔酋长国",najd:"内志",qatar:"卡塔尔",uae:"阿拉伯联合酋长国",oman:"阿曼", "yemen-north":"也门阿拉伯共和国","yemen-south":"南也门",yemen:"也门",bahrain:"巴林"};
const ROYAL_RULERS={
  ottoman:[[1797,1807,"塞利姆三世"],[1808,1839,"马哈茂德二世"],[1839,1861,"阿卜杜勒-迈吉德一世"],[1861,1876,"阿卜杜勒-阿齐兹"],[1876,1876,"穆拉德五世"],[1876,1909,"阿卜杜勒-哈米德二世"],[1909,1918,"穆罕默德五世"],[1918,1922,"穆罕默德六世"]],
  morocco:[[1797,1894,"哈桑一世"],[1894,1908,"阿卜杜勒-阿齐兹"],[1908,1912,"阿卜杜勒-哈菲兹"],[1912,1927,"优素福"],[1927,1961,"穆罕默德五世"],[1961,1999,"哈桑二世"],[1999,2026,"穆罕默德六世"]],
  jordan:[[1918,1951,"阿卜杜拉一世"],[1951,1952,"塔拉勒"],[1953,1999,"侯赛因·本·塔拉勒"],[1999,2026,"阿卜杜拉二世"]],
  iraq:[[1921,1933,"费萨尔一世"],[1933,1939,"加齐"],[1939,1958,"费萨尔二世"]],
  iran:[[1797,1834,"法特赫-阿里沙"],[1834,1848,"穆罕默德沙"],[1848,1896,"纳赛尔丁沙"],[1896,1907,"穆扎法尔丁沙"],[1907,1909,"穆罕默德-阿里沙"],[1909,1925,"艾哈迈德沙"],[1925,1941,"礼萨汗"],[1941,1979,"穆罕默德-礼萨·巴列维"]],
  egypt:[[1805,1848,"穆罕默德·阿里帕夏"],[1848,1848,"易卜拉欣帕夏"],[1849,1854,"阿拔斯一世"],[1854,1863,"赛义德帕夏"],[1863,1879,"伊斯梅尔帕夏"],[1879,1892,"陶菲克帕夏"],[1892,1914,"阿拔斯二世"],[1914,1917,"侯赛因·卡迈勒"],[1917,1936,"福阿德一世"],[1936,1952,"法鲁克一世"]],
  saudi:[[1932,1953,"伊本·沙特"],[1953,1964,"沙特·本·阿卜杜勒-阿齐兹"],[1964,1975,"费萨尔·本·阿卜杜勒-阿齐兹"],[1975,1982,"哈立德·本·阿卜杜勒-阿齐兹"],[1982,2005,"法赫德·本·阿卜杜勒-阿齐兹"],[2005,2015,"阿卜杜拉·本·阿卜杜勒-阿齐兹"],[2015,2026,"萨勒曼·本·阿卜杜勒-阿齐兹"]],
  libya:[[1951,1969,"伊德里斯一世"]],hejaz:[[1917,1925,"侯赛因·本·阿里"]],shammar:[[1886,1897,"阿卜杜拉·本·拉希德"],[1897,1906,"阿卜杜勒-阿齐兹·本·穆塔卜"],[1906,1908,"米特阿卜·本·阿卜杜勒-阿齐兹"],[1908,1914,"萨乌德·本·阿卜杜勒-阿齐兹"],[1914,1921,"阿卜杜拉·本·米特阿卜"]],najd:[[1902,1932,"伊本·沙特"]],
  kuwait:[[1797,1892,"阿卜杜拉一世·萨巴赫"],[1892,1915,"穆巴拉克·萨巴赫"],[1915,1921,"贾比尔二世·萨巴赫"],[1921,1950,"艾哈迈德·贾比尔·萨巴赫"],[1950,1965,"阿卜杜拉三世·萨利姆·萨巴赫"],[1965,1977,"萨巴赫三世·萨利姆·萨巴赫"],[1977,1986,"贾比尔三世·艾哈迈德·萨巴赫"],[1986,2006,"萨阿德·阿卜杜拉·萨利姆·萨巴赫"],[2006,2020,"萨巴赫四世·艾哈迈德·萨巴赫"],[2020,2023,"纳瓦夫·艾哈迈德·萨巴赫"],[2023,2026,"米沙勒·艾哈迈德·萨巴赫"]],
  qatar:[[1797,1913,"阿卜杜拉·本·贾西姆"],[1913,1949,"阿卜杜拉·本·贾西姆"],[1949,1960,"阿里·本·阿卜杜拉"],[1960,1972,"艾哈迈德·本·阿里"],[1972,1995,"哈利法·本·哈马德"],[1995,2013,"哈马德·本·哈利法"],[2013,2026,"塔米姆·本·哈马德"]],
  oman:[[1797,1804,"苏丹·本·艾哈迈德"],[1804,1856,"赛义德·本·苏丹"],[1856,1866,"图瓦伊尼·本·赛义德"],[1866,1871,"阿赞·本·盖斯"],[1871,1888,"图尔基·本·赛义德"],[1888,1913,"费萨尔·本·图尔基"],[1913,1932,"泰穆尔·本·费萨尔"],[1932,1970,"赛义德·本·泰穆尔"],[1970,2020,"卡布斯·本·赛义德"],[2020,2026,"海赛姆·本·塔里克"]],
  bahrain:[[1797,1825,"萨勒曼·本·艾哈迈德"],[1825,1843,"阿卜杜拉·本·艾哈迈德"],[1843,1868,"穆罕默德·本·哈利法"],[1869,1923,"伊萨·本·阿里"],[1923,1942,"哈马德·本·伊萨"],[1942,1961,"萨勒曼二世"],[1961,1999,"伊萨二世"],[1999,2026,"哈马德二世"]],
  uae:[[1971,2004,"扎耶德·本·苏丹·阿勒纳哈扬"],[2004,2022,"哈利法·本·扎耶德·阿勒纳哈扬"],[2022,2026,"穆罕默德·本·扎耶德·阿勒纳哈扬"]]
};
const PARTY_WIKI_PAGES=[["民族解放阵线","民族解放阵线（阿尔及利亚）"],["民族独立联盟","民族独立联盟（摩洛哥）"],["正义与发展党","正义与发展党（摩洛哥）"],["人民力量社会主义联盟","人民力量社会主义联盟"],["独立党","独立党（摩洛哥）"],["民族民主联盟","全国民主联盟（阿尔及利亚）"],["阿拉伯复兴社会党","阿拉伯复兴社会党"],["法塔赫","法塔赫"],["哈马斯","哈马斯"],["巴勒斯坦民族权力机构","巴勒斯坦民族权力机构"],["巴解组织","巴勒斯坦解放组织"],["华夫脱党","华夫脱党"],["国家民主党","国家民主党（埃及）"],["自由与正义党","自由与正义党（埃及）"],["共和人民党","共和人民党（土耳其）"],["民主党","民主党（土耳其）"],["正义党","正义党（土耳其）"],["利库德集团","利库德集团"],["以色列工党","以色列工党"],["全国人民大会","全国人民大会（也门）"],["伊斯兰改革集团","也门改革集团"],["伊斯兰共和党","伊斯兰共和党（伊朗）"],["穆斯林兄弟会","穆斯林兄弟会"],["波利萨里奥阵线","波利萨里奥阵线"],["叙利亚声索","戈兰高地"],["埃及声索","西奈半岛"],["摩洛哥当局","西撒哈拉冲突"],["西班牙殖民当局","西属撒哈拉"]];
function wikiCountryPageAt(id){return WIKI_COUNTRY_PAGES[id]||meta[id]?.[0]||id}
function royalRulerPageAt(id,y){const detailId=sidebarEntityAt(id,y),key=detailId==="morocco-spanish"?"morocco":detailId==="west-bank"?"jordan":detailId,hit=(ROYAL_RULERS[key]||[]).find(([from,to])=>y>=from&&y<=to);return hit?.[2]||null}
function rulingWikiPageAt(id,y,text){
  const ruler=royalRulerPageAt(id,y);
  if(ruler&&/王室|王朝|君主|苏丹|国王|帕夏|家族|酋长|谢里夫|伊玛目/.test(text))return ruler;
  const hit=PARTY_WIKI_PAGES.find(([label])=>text.includes(label));
  if(hit)return hit[1];
  if(text.includes("军事占领"))return"以色列军事政府";
  if(text.includes("军事管理"))return id==="gaza-strip"?(y<=1952?"法鲁克一世":"埃及"):"约旦";
  if(text.includes("殖民当局"))return id==="morocco-spanish"?"西班牙殖民帝国":"殖民主义";
  return text;
}
function setWikiLink(element,text,page){if(!element)return;element.textContent="";const link=document.createElement("a");link.className="wiki-link";link.href=wiki(page);link.target="_blank";link.rel="noopener noreferrer";link.textContent=text;element.append(link)}
render=()=>{renderBase();const y=+dom.year.value;dom.title.textContent=eraFor(y).map;const status=dom.facts.querySelectorAll("div strong")[2];if(status&&historicalBoundaryYear(y))status.textContent="历史 GIS 年度边界";updateFlagDebugPreview(selected,y);if(dom.flagDebugButton)dom.flagDebugButton.hidden=!selected||!!(typeof disputeRegionForYear==="function"&&disputeRegionForYear(selected,y));activeCountries().forEach(path=>{const label=displayNameAt(path.dataset.id,y);path.setAttribute("aria-label",`查看${label}`)});document.querySelectorAll(".map-labels text[data-for]").forEach(label=>{label.textContent=displayNameAt(label.dataset.for,y)});if(!selected)return;const display=displayNameAt(selected,y),detailId=sidebarEntityAt(selected,y),detail=countryEra(detailId,y),detailMeta=meta[detailId]||meta[selected];if(detailId!==selected&&detail){dom.summary.textContent=detail[3];const facts=dom.facts.querySelectorAll("div");if(facts[1])facts[1].querySelector("strong").textContent=detail[4]||"见该年史料";if(facts[2])facts[2].querySelector("strong").textContent=detail[5]||"主权国家／政治实体"}setWikiLink(dom.selectedLabel,display,wikiCountryPageAt(selected));setWikiLink(dom.polityName,formalNameAt(selected,y),wikiCountryPageAt(selected));setWikiLink(dom.polityNative,detailMeta?.[0]||display,wikiCountryPageAt(selected));const firstFact=dom.facts.querySelector("div strong");if(firstFact){const ruling=rulingGroupAt(selected,y);setWikiLink(firstFact,ruling,rulingWikiPageAt(selected,y,ruling))}};
// Normalize the selected-country facts after the base renderer and any
// period-specific sidebar substitution have run. This prevents the first
// fact from being mislabeled as “地区” and prevents the map-status text from
// overwriting the polity classification.
const renderWithSidebarFacts=render;
render=()=>{
  renderWithSidebarFacts();
  if(!selected)return;
  const y=Number(dom.year.value),facts=dom.facts.querySelectorAll("div");
  if(facts[0]){
    const label=facts[0].querySelector("span");
    if(label)label.textContent="执政党／统治集团";
  }
  if(facts[2]){
    const label=facts[2].querySelector("span"),value=facts[2].querySelector("strong");
    if(label)label.textContent="政权性质";
    if(value)value.textContent=polityTypeAt(selected,y);
  }
  const firstFact=facts[0]?.querySelector("strong");
  if(firstFact){const ruling=rulingGroupAt(selected,y);setWikiLink(firstFact,ruling,rulingWikiPageAt(selected,y,ruling))}
};
 let flagDebugControlBases={};
 function flagDebugControlBase(id,y){return flagDebugControlBases[flagDebugKey(id,y)]||null}
 function flagDebugEffectiveFormValues(id,y,values){const base=flagDebugControlBase(id,y);if(!base)return values;return{...values,scaleX:(Number(base.scaleX)||1)*(Number(values.scaleX)||1),scaleY:(Number(base.scaleY)||1)*(Number(values.scaleY)||1),offsetX:(Number(base.offsetX)||0)+(Number(values.offsetX)||0),offsetY:(Number(base.offsetY)||0)+(Number(values.offsetY)||0),rotation:(Number(base.rotation)||0)+(Number(values.rotation)||0)}}
 function flagDebugDisplayValues(id,y,settings){const base=flagDebugControlBase(id,y);if(!base)return settings;return{...settings,scaleX:(Number(base.scaleX)||1)?(Number(settings.scaleX)||1)/(Number(base.scaleX)||1):settings.scaleX,scaleY:(Number(base.scaleY)||1)?(Number(settings.scaleY)||1)/(Number(base.scaleY)||1):settings.scaleY,offsetX:(Number(settings.offsetX)||0)-(Number(base.offsetX)||0),offsetY:(Number(settings.offsetY)||0)-(Number(base.offsetY)||0),rotation:(Number(settings.rotation)||0)-(Number(base.rotation)||0)}}
 function debugFormValues(){return{scaleX:Number(dom.flagDebugScaleX.value),scaleY:Number(dom.flagDebugScaleY.value),offsetX:Number(dom.flagDebugOffsetX.value),offsetY:Number(dom.flagDebugOffsetY.value),rotation:Number(dom.flagDebugRotation.value),color:dom.flagDebugColor.value,flagFill:dom.flagDebugFill.value}}
 function updateDebugOutputs(){const pairs=[[dom.flagDebugScaleX,document.querySelector("#flagDebugScaleXValue"),v=>`${Number(v).toFixed(2)}×`],[dom.flagDebugScaleY,document.querySelector("#flagDebugScaleYValue"),v=>`${Number(v).toFixed(2)}×`],[dom.flagDebugOffsetX,document.querySelector("#flagDebugOffsetXValue"),v=>`${v}`],[dom.flagDebugOffsetY,document.querySelector("#flagDebugOffsetYValue"),v=>`${v}`],[dom.flagDebugRotation,document.querySelector("#flagDebugRotationValue"),v=>`${Number(v).toFixed(1)}°`],[dom.flagDebugColor,document.querySelector("#flagDebugColorValue"),v=>String(v).toUpperCase()],[dom.flagDebugFill,document.querySelector("#flagDebugFillValue"),v=>String(v).toUpperCase()]];pairs.forEach(([input,out,format])=>{if(out)out.textContent=format(input.value)})}
  function updateFlagDebugPreview(id,y){const preview=dom.flagDebugPreview;if(!preview)return;if(!id){preview.removeAttribute("src");preview.alt="当前国家国旗预览";preview.removeAttribute("title");preview.style.transform="";return}const asset=flagAssetFor(id,y),settings={...flagDebugSettings(id,y),...(flagDebugDrafts[flagDebugKey(id,y)]||{})};preview.src=asset.path;preview.alt=`${displayNameAt(id,y)}国旗预览`;preview.title=asset.period;preview.style.transform=`rotate(${Number(settings.rotation)||0}deg)`}
 function loadDebugForm(id){if(!id)return;const y=Number(dom.year.value),key=flagDebugKey(id,y),asset=flagAssetFor(id,y),s=flagDebugDisplayValues(id,y,{...flagDebugSettings(id,y),...(flagDebugDrafts[key]||{})}),path=activeCountries().find(candidate=>candidate.dataset.id===id),defaultColor=path?.style.getPropertyValue("--polity-color").trim()||stablePolityColor(path?.dataset.polity||id);dom.flagDebugScaleX.value=s.scaleX;dom.flagDebugScaleY.value=s.scaleY;dom.flagDebugOffsetX.value=s.offsetX;dom.flagDebugOffsetY.value=s.offsetY;dom.flagDebugRotation.value=s.rotation??0;dom.flagDebugColor.value=s.color||defaultColor;dom.flagDebugFill.value=s.flagFill||defaultColor;if(dom.flagDebugCurrent)dom.flagDebugCurrent.textContent=`当前国家：${displayNameAt(id,y)} · ${y} · ${asset.period}`;updateFlagDebugPreview(id,y);updateDebugOutputs();applyFlagDebugSettings(id,y)}
 function refreshDebugDraft(){const id=selected;if(!id)return;const y=Number(dom.year.value),key=flagDebugKey(id,y),values=flagDebugEffectiveFormValues(id,y,debugFormValues()),path=activeCountries().find(candidate=>candidate.dataset.id===id),polity=path?.dataset.polity||polityAt(id,y);flagDebugDrafts[key]=values;if(SHARED_POLITIES.has(polity))flagDebugSharedDrafts[polity]=values.color;updateDebugOutputs();updateFlagDebugPreview(id,y);applyFlagDebugSettings(id,y);dom.flagDebugStatus.textContent="实时预览中；点击“保存到浏览器”后将在本机保留。"}
 function saveDebugSettings(){const id=selected;if(!id)return;const y=Number(dom.year.value),key=flagDebugKey(id,y),values=flagDebugEffectiveFormValues(id,y,debugFormValues()),path=activeCountries().find(candidate=>candidate.dataset.id===id),polity=path?.dataset.polity||polityAt(id,y),saved=readFlagDebug();saved[key]={...flagDebugSettings(id,y),...values};delete saved[id];if(SHARED_POLITIES.has(polity)){saved.__sharedColors={...(saved.__sharedColors||{}),[polity]:values.color};flagDebugSharedDrafts[polity]=values.color}try{localStorage.setItem(FLAG_DEBUG_STORAGE,JSON.stringify(saved,null,2));flagDebugDrafts[key]={...saved[key]};dom.flagDebugStatus.textContent="已保存到本浏览器。"}catch{dom.flagDebugStatus.textContent="浏览器存储不可用，请使用导出 JSON。"}applyFlagDebugSettings(id,y)}
 function resetFlagDebugControlsAfterDefault(){dom.flagDebugScaleX.value=1;dom.flagDebugScaleY.value=1;dom.flagDebugOffsetX.value=0;dom.flagDebugOffsetY.value=0;dom.flagDebugRotation.value=0;updateDebugOutputs()}
 async function saveFlagDebugAsDefault(){const id=selected;if(!id)return;const y=Number(dom.year.value),key=flagDebugKey(id,y),current={...flagDebugSettings(id,y),...(flagDebugDrafts[key]||{})},payload=flagDebugExportPayload(),content=JSON.stringify(payload,null,2);dom.flagDebugStatus.textContent="正在保存默认配置……";const result=await saveConfigFileAsDefault("mena-flag-debug.json",content);if(result==="cancelled"){dom.flagDebugStatus.textContent="已取消保存默认配置。";return}flagDebugControlBases[key]={...current};if(typeof flagDebugSetFileDefaults==="function")flagDebugSetFileDefaults(payload);resetFlagDebugControlsAfterDefault();dom.flagDebugStatus.textContent=result==="file"?"已保存为项目默认配置；滑块已归零，实际参数与颜色保持不变；后续滑块调整将基于新默认值。":"已下载默认配置；请将文件放回项目目录后生效。滑块已归零，实际参数与颜色保持不变；后续滑块调整将基于新默认值。"}
 function resetDebugSettings(){const id=selected;if(!id)return;const y=Number(dom.year.value),key=flagDebugKey(id,y),path=activeCountries().find(candidate=>candidate.dataset.id===id),polity=path?.dataset.polity||polityAt(id,y);delete flagDebugControlBases[key];delete flagDebugDrafts[key];delete flagDebugSharedDrafts[polity];const saved=readFlagDebug();delete saved[key];delete saved[id];if(SHARED_POLITIES.has(polity)&&saved.__sharedColors){delete saved.__sharedColors[polity];if(!Object.keys(saved.__sharedColors).length)delete saved.__sharedColors}try{localStorage.setItem(FLAG_DEBUG_STORAGE,JSON.stringify(saved))}catch{}historicalStyles(y);syncFlags(y);loadDebugForm(id);dom.flagDebugStatus.textContent="已恢复默认设置。"}
function flagDebugExportPayload(){const payload={...readFlagDebug()};Object.entries(flagDebugDrafts).forEach(([key,values])=>{payload[key]={...(payload[key]||{}),...values}});if(Object.keys(flagDebugSharedDrafts).length)payload.__sharedColors={...(payload.__sharedColors||{}),...flagDebugSharedDrafts};if(payload.__sharedColors?.["british-empire"])payload.__sharedColors["british-empire"]=normalizeSharedColor("british-empire",payload.__sharedColors["british-empire"]);return payload}
function downloadFlagDebugBlob(blob){const url=URL.createObjectURL(blob),a=document.createElement("a");a.href=url;a.download="mena-flag-debug.json";a.style.display="none";document.body.append(a);a.click();a.remove();setTimeout(()=>URL.revokeObjectURL(url),0)}
const defaultConfigFileHandles=new Map();
async function saveConfigFileAsDefault(fileName,content,mime="application/json"){
  let handle=defaultConfigFileHandles.get(fileName);
  if(typeof window.showSaveFilePicker==="function"){
    try{
      if(!handle){handle=await window.showSaveFilePicker({suggestedName:fileName,types:[{description:"项目配置文件",accept:{[mime]:[fileName.toLowerCase().endsWith(".json")?".json":".txt"]}}]});defaultConfigFileHandles.set(fileName,handle)}
      if(handle.queryPermission){const permission=await handle.queryPermission({mode:"readwrite"});if(permission!=="granted"&&await handle.requestPermission({mode:"readwrite"})!=="granted")throw new Error("没有获得文件写入权限")}
      const writable=await handle.createWritable();await writable.write(content);await writable.close();return"file"
    }catch(error){if(error?.name==="AbortError")return"cancelled";defaultConfigFileHandles.delete(fileName)}
  }
  const url=URL.createObjectURL(new Blob([content],{type:mime})),anchor=document.createElement("a");anchor.href=url;anchor.download=fileName;anchor.style.display="none";document.body.append(anchor);anchor.click();anchor.remove();setTimeout(()=>URL.revokeObjectURL(url),0);return"download"
}
window.saveConfigFileAsDefault=saveConfigFileAsDefault;
async function exportDebugSettings(){const payload=JSON.stringify(flagDebugExportPayload(),null,2),blob=new Blob([payload],{type:"application/json"});try{if(typeof window.showSaveFilePicker==="function"){try{const handle=await window.showSaveFilePicker({suggestedName:"mena-flag-debug.json",types:[{description:"JSON 配置",accept:{"application/json":[".json"]}}]});const writable=await handle.createWritable();await writable.write(payload);await writable.close();dom.flagDebugStatus.textContent="已保存 JSON 到你选择的本地文件。";return}catch(error){if(error?.name==="AbortError"){dom.flagDebugStatus.textContent="已取消导出。";return}}}downloadFlagDebugBlob(blob);dom.flagDebugStatus.textContent="已下载 mena-flag-debug.json（浏览器默认下载目录）。"}catch(error){dom.flagDebugStatus.textContent="导出失败：浏览器阻止了本地文件写入；请允许下载或改用桌面浏览器。"}}
let boundaryDebugStatePromise=null;
function ensureBoundaryDebugState(){if(boundaryDebugStatePromise)return boundaryDebugStatePromise;if(typeof ensureBoundaryDebugLoaded!=="function")return Promise.resolve(false);boundaryDebugStatePromise=ensureBoundaryDebugLoaded().then(async()=>{await boundaryDebugLoadDefaultFile();boundaryDebugLoadStore();return true}).catch(()=>{boundaryDebugStatePromise=null;return false});return boundaryDebugStatePromise}
function requestRender(){const task=ensureBoundaryDebugState().then(()=>typeof renderYear==="function"?renderYear(Number(dom.year.value)):render());return task.then(()=>{if(boundaryDebugReady)updateBoundaryDebugTargets(true)}).catch(error=>{if(dom.source)dom.source.textContent=`地图数据加载失败：${error.message||error}`})}
function updateBoundaryDebugTargets(rebuild){if(typeof boundaryDebugPopulateTargets==="function")boundaryDebugPopulateTargets(rebuild)}
let boundaryDebugReady=false;
function openBoundaryDebug(){if(dom.boundaryDebugDialog?.open)return;ensureBoundaryDebugState().then(()=>{if(typeof boundaryDebugBind!=="function")throw new Error("疆域调试器脚本未加载");if(!boundaryDebugReady){boundaryDebugBind();boundaryDebugReady=true}if(dom.boundaryDebugDialog?.open)return;boundaryDebugPopulateTargets(false);dom.boundaryDebugDialog.showModal();boundaryDebugLoadForm()}).catch(error=>{if(dom.source)dom.source.textContent=`疆域调试器加载失败：${error.message||error}`})}
if(dom.flagDebugButton){dom.flagDebugButton.addEventListener("click",()=>{if(!selected)return;loadDebugForm(selected);dom.flagDebugDialog.showModal()});dom.flagDebugClose.addEventListener("click",()=>dom.flagDebugDialog.close());dom.flagDebugDialog.addEventListener("click",e=>{if(e.target===dom.flagDebugDialog)dom.flagDebugDialog.close()});[dom.flagDebugScaleX,dom.flagDebugScaleY,dom.flagDebugOffsetX,dom.flagDebugOffsetY,dom.flagDebugRotation,dom.flagDebugColor,dom.flagDebugFill].forEach(input=>input.addEventListener("input",refreshDebugDraft));dom.flagDebugSave.addEventListener("click",saveDebugSettings);dom.flagDebugSaveDefault?.addEventListener("click",saveFlagDebugAsDefault);dom.flagDebugReset.addEventListener("click",resetDebugSettings);dom.flagDebugExport.addEventListener("click",exportDebugSettings)}
dom.boundaryDebugButton?.addEventListener("click",openBoundaryDebug);
dom.schematicCountries.forEach(bindCountry);dom.year.addEventListener("input",()=>{stop();requestRender();updateBoundaryDebugTargets(true)});dom.play.addEventListener("click",toggle);dom.overview.addEventListener("click",overview);dom.brand.addEventListener("click",overview);dom.about.addEventListener("click",()=>dom.dialog.showModal());dom.close.addEventListener("click",()=>dom.dialog.close());dom.confirm.addEventListener("click",()=>dom.dialog.close());dom.dialog.addEventListener("click",e=>{if(e.target===dom.dialog)dom.dialog.close()});dom.jump.addEventListener("click",()=>{const raw=prompt("输入1797—2026之间的年份：",dom.year.value);if(raw===null)return;dom.year.value=Math.max(1797,Math.min(2026,parseInt(raw,10)||+dom.year.value));stop();requestRender();updateBoundaryDebugTargets(true)});requestRender();
