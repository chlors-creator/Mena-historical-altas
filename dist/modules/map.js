/* Historical boundary selection, SVG map construction, labels, and interactions. */
function historicalStyles(y){
  const dependentIds=y<1919?["algeria","tunisia","libya","egypt","sudan","syria","lebanon","palestine","jordan","iraq","kuwait","qatar","uae","morocco-spanish","yemen-south"]:y<1962?["algeria","tunisia","morocco","morocco-spanish","western-sahara","sudan","syria","lebanon","palestine","jordan","iraq","kuwait","qatar","uae","oman","yemen-north","yemen-south"]:["western-sahara","morocco-spanish","yemen-south"];
  const countries=activeCountries(),polities=countries.map(path=>polityAt(path.dataset.id,y));
  if(y>=1949)dependentIds.push("gaza-strip","west-bank");
  // Do not derive colours from the order of paths in a yearly snapshot: that
  // made every transition reshuffle the palette.  A stable polity key keeps
  // shared regimes (for example Ottoman provinces) visually unified across
  // years while preserving separate Ottoman and Turkish republican colours.
  countries.forEach((path,index)=>{const polity=polities[index],baseColor=stablePolityColor(polity);path.dataset.polity=polity;path.dataset.basePolityColor=baseColor;path.style.setProperty("--polity-color",sharedColorFor(polity)||baseColor);path.classList.toggle("dependent",dependentIds.includes(path.dataset.id));path.classList.toggle("context",["shammar","najd"].includes(path.dataset.id))});
  const israelPath=countries.find(path=>path.dataset.id==="israel"),configuredIsraelColor=typeof flagDebugSettings==="function"?String(flagDebugSettings("israel",y).color||"").trim():"";
  if(dom.frontierOverlays)dom.frontierOverlays.style.setProperty("--israel-background-color",configuredIsraelColor||israelPath?.style.getPropertyValue("--polity-color").trim()||stablePolityColor("israel"));
}
function createLabels(){
  dom.labels.innerHTML="";
  if(dom.historyConnectors)dom.historyConnectors.innerHTML="";
  const seenLabels=new Set();
  activeCountries().forEach(p=>{
    if(seenLabels.has(p.dataset.id))return;
    seenLabels.add(p.dataset.id);
    const b=p.getBBox();
    if(b.width<32||b.height<24)return;
    const labelShift=p.dataset.id==="morocco-spanish"?-50:0;
    // The imperial path includes Syria, Iraq and the Hejaz; its bounding-box
    // centre therefore lands far south of Anatolia.  Anchor the Ottoman name
    // over the Anatolian core while leaving republican Turkey automatic.
    const anchor=p.dataset.id==="ottoman"?{x:665,y:112}:{x:b.x+b.width/2+labelShift,y:b.y+b.height/2+4};
    const x=anchor.x,y=anchor.y;
    const t=document.createElementNS("http://www.w3.org/2000/svg","text");
    t.classList.add("country-label");t.setAttribute("x",x);t.setAttribute("y",y);t.dataset.for=p.dataset.id;
    t.textContent=(meta[p.dataset.id]?.[0]||p.dataset.id).replace("／","·");
    // Spanish Morocco is represented by two separated historical enclaves.
    // Keep one label but draw two thin leader lines to the actual polygon
    // centres so the relationship is explicit after the 50px westward shift.
    if(p.dataset.id==="morocco-spanish"&&dom.historyConnectors){
      const parts=flagPathParts(p.getAttribute("d"))
        .map(pathDataBox)
        .filter(part=>part&&part.width>=8&&part.height>=8)
        .sort((a,b)=>(b.width*b.height)-(a.width*a.height))
        .slice(0,2);
      parts.forEach(part=>{
        const line=document.createElementNS("http://www.w3.org/2000/svg","line");
        line.setAttribute("x1",x);line.setAttribute("y1",y-4);line.setAttribute("x2",part.x+part.width/2);line.setAttribute("y2",part.y+part.height/2);
        dom.historyConnectors.append(line);
      });
    }
    dom.labels.append(t);
  });
}
function regions(path){dom.regionLines.innerHTML="";const b=path.getBBox(),names=meta[path.dataset.id][1],lines=[[b.x+b.width*.36,b.y+5,b.x+b.width*.48,b.y+b.height-5],[b.x+4,b.y+b.height*.54,b.x+b.width-4,b.y+b.height*.42],[b.x+b.width*.68,b.y+5,b.x+b.width*.73,b.y+b.height-5]];lines.slice(0,Math.min(3,names.length-1)).forEach(v=>{const l=document.createElementNS("http://www.w3.org/2000/svg","line");["x1","y1","x2","y2"].forEach((k,i)=>l.setAttribute(k,v[i]));dom.regionLines.append(l)});names.slice(0,4).forEach((n,i)=>{const t=document.createElementNS("http://www.w3.org/2000/svg","text"),c=i%2,r=Math.floor(i/2);t.setAttribute("x",b.x+b.width*(c?.7:.3));t.setAttribute("y",b.y+b.height*(r?.7:.3));t.textContent=n;dom.regionLines.append(t)});dom.regionLines.classList.add("visible")}
function choose(id){activeFlagId=null;clearHoverVisuals();const p=activeCountries().find(x=>x.dataset.id===id),selectedPaths=activeCountries().filter(x=>x.dataset.id===id),disputePath=dom.frontierOverlays?.querySelector(`.dispute-hit[data-dispute-id="${id}"]`);if(!p&&!disputePath)return;selected=id;const target=p||disputePath,b=target.getBBox(),px=Math.max(45,b.width*.45),py=Math.max(38,b.height*.4);dom.map.setAttribute("viewBox",`${b.x-px} ${b.y-py} ${b.width+2*px} ${b.height+2*py}`);activeCountries().forEach(x=>{const belongs=selectedPaths.includes(x);x.classList.toggle("selected",belongs);x.classList.toggle("dimmed",!belongs);x.classList.toggle("detail-static",belongs)});document.querySelectorAll(".dispute-hit").forEach(x=>{x.classList.toggle("selected",x===disputePath);x.classList.toggle("dimmed",x!==disputePath)});if(p)setHoverState(id,false);[...dom.labels.children].forEach(l=>l.style.display=l.dataset.for===id?"none":"");if(!realMode&&p)regions(p);if(typeof requestRender==="function")requestRender();else render();if(innerWidth<781)$("#storyPanel").scrollIntoView({behavior:"smooth",block:"start"})}
function overview(){selected=null;clearMapState();[...dom.labels.children].forEach(l=>l.style.display="");if(typeof requestRender==="function")requestRender();else render()}
function stop(){if(timer)clearInterval(timer);timer=null;dom.play.classList.remove("playing");dom.play.setAttribute("aria-label","播放时间线")}
function toggle(){if(timer)return stop();if(+dom.year.value>=2026)return;clearHoverVisuals();dom.play.classList.add("playing");dom.play.setAttribute("aria-label","暂停时间线");timer=setInterval(()=>{const current=+dom.year.value;if(current>=2026){stop();return}dom.year.value=current+1;if(typeof requestRender==="function")requestRender();else if(typeof renderYear==="function")renderYear(Number(dom.year.value));else render()},120)}
function isIsraelFlagTriggerNode(target){const node=target?.closest?.("[data-id],[data-dispute-id]"),id=node?.dataset.disputeId||node?.dataset.id;return id==="israel"||id==="golan-heights"||id==="sinai-peninsula"}
function bindCountry(p){const label=meta[p.dataset.id]?.[0]||p.dataset.id;p.setAttribute("tabindex","0");p.setAttribute("role","button");p.setAttribute("aria-label",`查看${label}`);p.addEventListener("click",()=>choose(p.dataset.id));p.addEventListener("keydown",e=>{if(e.key==="Enter"||e.key===" "){e.preventDefault();choose(p.dataset.id)}});p.addEventListener("mouseenter",()=>setHoverState(p.dataset.id,true));p.addEventListener("mouseleave",event=>{if(!isIsraelFlagTriggerNode(event.relatedTarget))setHoverState(p.dataset.id,false)});p.addEventListener("focus",()=>{p.classList.add("keyboard-focus");setHoverState(p.dataset.id,true)});p.addEventListener("blur",()=>{p.classList.remove("keyboard-focus");setHoverState(p.dataset.id,false)})}
// CShapes models states and dependencies, not every emirate or protectorate inside
// the Arabian Peninsula. These contextual polygons are digitized against the
// OpenGulf Harita 93677 QGIS shapefiles (c.1910), cross-checked with the 1914
// political map and the Library of Congress 1920 *Arabia* handbook. They keep
// the 1886—1931 snapshots explicit instead of silently painting a modern Saudi
// Arabia silhouette.
const MENA_ARABIAN_CONTEXT_LEGACY=[
  {id:"hejaz",from:1886,to:1916,path:"M709.3,248.1L718.2,249.3L718.9,249.6L719.4,249.8L720,250L720.6,250.2L721.3,250.4L722.1,250.6L722.7,250.8L723.2,251L723.6,251.2L724,251.4L724.4,251.7L724.7,251.9L725.1,252.1L726.6,253.1L743.5,267.1L744.7,268.4L745.1,268.9L745.5,269.3L745.9,269.9L746.3,270.5L746.6,271L746.9,271.5L747.3,272.5L747.5,273.2L747.7,274L747.9,274.7L748.1,275.5L748.3,276.1L752.8,290.4L753.4,291.9L753.6,292.3L753.7,292.8L753.9,293.2L754.3,294.2L756.5,302.8L757.8,304.4L758.3,304.8L758.8,305.1L759.3,305.5L759.7,305.8L760.1,306.1L760.7,306.4L761,306.6L761.4,307L761.7,307.4L762.1,307.9L762.5,308.5L762.6,309.1L762.7,309.7L762.9,310.4L763,310.8L763.2,311.3L763.3,311.8L763.4,312.3L763.5,312.8L763.7,315.4L763.7,317.2L763.9,319.2L764.6,321L765.4,322.7L765.9,324.1L766.6,325.8L767.1,327.2L767.3,328.8L767.4,330.8L767.4,332.1L767.4,333.5L767.4,334.9L767.4,336.4L767.4,337.8L767.4,339.1L767.6,340.3L767.8,341.5L767.9,342.5L768.1,343.3L768.3,343.8L768.6,344.6L768.9,345.6L769.3,346.5L769.6,347.6L770,348.7L770.5,350L771.1,351.2L771.7,352.1L772.2,352.8L772.6,353.5L772.7,354.1L772.8,354.7L772.8,357.6L772.7,358.3L772.4,359.7L772.3,360.5L772.2,361.2L772.1,361.9L772.1,362.4L772,363L771.9,363.5L771.8,364L771.7,364.6L772.3,365.1L773.1,365.9L772.9,376.5L780.8,376L777.8,383L768.5,373.8L748.2,352.7L743,323.8L725.8,300.7L711.8,278.9L694.9,260.1L709.3,248.1Z",source:"ArcGIS Kingdom of Hejaz FeatureServer 22 · OpenGulf/Harita 93677 交叉校核 · historical GIS context",name:"Hejaz Vilayet"},
  {id:"hejaz",from:1917,to:1925,path:"M709.3,248.1L718.2,249.3L718.9,249.6L719.4,249.8L720,250L720.6,250.2L721.3,250.4L722.1,250.6L722.7,250.8L723.2,251L723.6,251.2L724,251.4L724.4,251.7L724.7,251.9L725.1,252.1L726.6,253.1L743.5,267.1L744.7,268.4L745.1,268.9L745.5,269.3L745.9,269.9L746.3,270.5L746.6,271L746.9,271.5L747.3,272.5L747.5,273.2L747.7,274L747.9,274.7L748.1,275.5L748.3,276.1L752.8,290.4L753.4,291.9L753.6,292.3L753.7,292.8L753.9,293.2L754.3,294.2L756.5,302.8L757.8,304.4L758.3,304.8L758.8,305.1L759.3,305.5L759.7,305.8L760.1,306.1L760.7,306.4L761,306.6L761.4,307L761.7,307.4L762.1,307.9L762.5,308.5L762.6,309.1L762.7,309.7L762.9,310.4L763,310.8L763.2,311.3L763.3,311.8L763.4,312.3L763.5,312.8L763.7,315.4L763.7,317.2L763.9,319.2L764.6,321L765.4,322.7L765.9,324.1L766.6,325.8L767.1,327.2L767.3,328.8L767.4,330.8L767.4,332.1L767.4,333.5L767.4,334.9L767.4,336.4L767.4,337.8L767.4,339.1L767.6,340.3L767.8,341.5L767.9,342.5L768.1,343.3L768.3,343.8L768.6,344.6L768.9,345.6L769.3,346.5L769.6,347.6L770,348.7L770.5,350L771.1,351.2L771.7,352.1L772.2,352.8L772.6,353.5L772.7,354.1L772.8,354.7L772.8,357.6L772.7,358.3L772.4,359.7L772.3,360.5L772.2,361.2L772.1,361.9L772.1,362.4L772,363L771.9,363.5L771.8,364L771.7,364.6L772.3,365.1L773.1,365.9L772.9,376.5L780.8,376L777.8,383L768.5,373.8L748.2,352.7L743,323.8L725.8,300.7L711.8,278.9L694.9,260.1L709.3,248.1Z",source:"Arabia 1914 政治边界图 · Library of Congress《Arabia》(1920) · historical GIS context",name:"Kingdom of Hejaz"},
  {id:"shammar",from:1886,to:1921,path:"M738,252L744,232L770,216L802,208L833,214L855,233L864,253L858,275L846,291L829,302L806,307L782,304L759,292L745,275Z",source:"OpenGulf ottoman-map · Harita 93677 QGIS Najd shapefile (c.1910) · Arabia 1914 political map cross-check",name:"Jabal Shammar"},
  {id:"najd",from:1886,to:1901,path:"M758,292L782,304L806,307L829,302L850,288L872,282L894,297L906,319L908,342L897,363L879,379L854,392L827,397L801,389L778,375L759,356L744,332L742,313Z",source:"OpenGulf ottoman-map · Harita 93677 / Haydari Najd place-name layer · Arabia 1914 political map cross-check",name:"Najd"},
  {id:"najd",from:1902,to:1931,path:"M744,282L770,279L798,282L826,279L850,275L873,284L894,300L907,321L910,343L900,365L880,383L853,397L825,399L799,390L775,374L754,352L739,326L737,302Z",source:"OpenGulf ottoman-map · Harita 93677 QGIS Najd shapefile (c.1910) · Arabia 1914 political map / LOC Arabia (1920) cross-check",name:"Najd"}
];
// Clean, non-overlapping historical partition of western and central Arabia.
// The shared vertices are intentional: Hejaz, Shammar and Najd touch at their
// surveyed frontier rather than being drawn on top of one another. Kuwait is
// left outside the Shammar polygon (the 1913 Anglo-Ottoman line).
const MENA_ARABIAN_CONTEXT=[
  {id:"hejaz",from:1886,to:1916,path:"M699,244L716,247L731,262L742,282L748,306L752,330L757,352L767,373L776,393L786,410L776,414L764,398L754,379L746,360L739,338L733,316L726,294L717,273L707,255Z",source:"Arabia 1914 political map · OpenGulf Harita 93677 · Hejaz Vilayet historical GIS context",name:"Hejaz Vilayet"},
  {id:"hejaz",from:1917,to:1925,path:"M699,244L716,247L731,262L742,282L748,306L752,330L757,352L767,373L776,393L786,410L776,414L764,398L754,379L746,360L739,338L733,316L726,294L717,273L707,255Z",source:"Arabia 1914 political map · LOC Arabia (1920) · Hejaz historical GIS context",name:"Kingdom of Hejaz"},
  {id:"shammar",from:1886,to:1921,path:"M738,252L744,232L770,216L802,208L829,214L832,232L828,247L816,258L800,266L780,269L758,266L745,260Z",source:"OpenGulf Harita 93677 QGIS · Arabia 1914 political map cross-check",name:"Jabal Shammar"},
  {id:"najd",from:1886,to:1901,path:"M780,269L800,266L816,258L828,247L840,270L848,288L861,301L869,325L858,355L838,380L810,397L780,385L775,365L770,340L770,305Z",source:"Arabia 1914 political map · OpenGulf Harita 93677 · Najd historical GIS context",name:"Najd"},
  {id:"najd",from:1902,to:1931,path:"M780,269L800,266L816,258L828,247L840,270L848,288L861,301L869,325L858,355L838,380L810,397L780,385L775,365L770,340L770,305Z",source:"Arabia 1914 political map · OpenGulf Harita 93677 · LOC Arabia (1920) · Najd historical GIS context",name:"Najd"}
];
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
function splitPalestineFeature(feature){
  const parts=flagPathParts(feature.path).map(path=>({path,box:pathDataBox(path)})).filter(item=>item.box).sort((a,b)=>a.box.x-b.box.x);
  if(parts.length<2)return[{...feature,id:"west-bank",name:"West Bank"}];
  const shared={...feature,source:`${feature.source||"Palestine reference"} · split into Gaza Strip and West Bank`};
  return[
    {...shared,id:"gaza-strip",name:"Gaza Strip",path:parts[0].path},
    {...shared,id:"west-bank",name:"West Bank",path:parts[parts.length-1].path}
  ];
}
function boundaryFeaturesForYear(y){
  if(!historicalBoundaryYear(y))return (window.MENA_2026||[]).flatMap(feature=>feature.id==="palestine"?splitPalestineFeature(feature):[feature]);
  const grouped=new Map();
  const sourceFeatures=y<1924?(window.MENA_HISTORICAL_1886_1923||[]):(window.MENA_HISTORICAL_INTERVALS||[]);
  // Work on shallow feature copies. The Ottoman cleanup below annotates the
  // selected feature with a body path and cutout paths; mutating the shared
  // CShapes source object would make later yearly comparisons inherit an
  // earlier year's geometry and could incorrectly merge two SVG periods.
  const selectedFeatures=annualCohortFeatures(sourceFeatures,y)
    .filter(feature=>!(feature.id==="saudi"&&y<1932))
    .map(feature=>({...feature}));
  // Pre-1912 Spanish Morocco and pre-1918 northern Yemen are contextual
  // extensions of the nearest valid GIS cohort, never the modern unified shapes.
  if(y<1912){const spanish=[...(window.MENA_HISTORICAL_1886_1923||[]),...(window.MENA_HISTORICAL_INTERVALS||[])].find(feature=>feature.id==="morocco-spanish");if(spanish)selectedFeatures.push({...spanish,from:y,to:y,source:"CShapes 2.0 contextual extension · Spanish Morocco (pre-1912)"})}
  if(y<1918){const north=[...(window.MENA_HISTORICAL_1886_1923||[]),...(window.MENA_HISTORICAL_INTERVALS||[])].find(feature=>feature.id==="yemen-north");if(north)selectedFeatures.push({...north,from:y,to:y,source:"CShapes 2.0 contextual extension · northern Yemen (pre-1918)"})}
  // Add named Arabian polities for the period before the Kingdom of Saudi Arabia.
  if(y<1932)selectedFeatures.push(...MENA_ARABIAN_CONTEXT.filter(feature=>feature.from<=y&&feature.to>=y));
  const present=new Set(selectedFeatures.map(feature=>(["yemen-north","yemen-south"].includes(feature.id)&&y>=1990)?"yemen":feature.id));
  const fallbackIds=["kuwait","bahrain","western-sahara"];
  if(y<1912)fallbackIds.push("libya");
  fallbackIds.forEach(id=>{
    if(present.has(id))return;
    // Before the Italian invasion, use the CShapes Tripolitania/Cyrenaica
    // outline as the Ottoman provincial boundary instead of a modern Libya
    // silhouette. The source geometry is reused only as a dated contextual
    // extension for the years in which CShapes has no Libya record.
    const ottomanLibya=id==="libya"&&y<1912
      ? [...(window.MENA_HISTORICAL_1886_1923||[]),...(window.MENA_HISTORICAL_INTERVALS||[])].find(feature=>feature.id==="libya")
      : null;
    const fallback=ottomanLibya||(window.MENA_2026||[]).find(feature=>feature.id===id||(id==="yemen-north"&&feature.id==="yemen"));
    if(fallback){selectedFeatures.push({id,from:y,to:y,path:fallback.path,source:ottomanLibya?"CShapes 2.0 contextual extension · Ottoman Tripolitania and Cyrenaica (pre-1911) · Ottoman provinces reference":"Natural Earth fallback",name:fallback.name});present.add(id)}
  });
  // The complete 1959 outline is the stable Western Sahara geometry for the
  // whole 1886—1975 historical range; do not carry incomplete records across
  // the period boundary or append the modern fallback to it.
  const westernSaharaReference=window.MENA_WESTERN_SAHARA_REFERENCE;
  if(y<=1958&&westernSaharaReference?.path){
    const full={...westernSaharaReference,from:y,to:y,source:`${westernSaharaReference.source} · historical continuity reference`};
    const index=selectedFeatures.findIndex(feature=>feature.id==="western-sahara");
    if(index>=0)selectedFeatures[index]=full;else selectedFeatures.push(full)
  }
  // Apply the same complete outline used for 1958 to every year through
  // 1975. This keeps 1959—1975 identical to the corrected 1958 SVG instead
  // of reintroducing the incomplete CShapes outline or a modern appendage.
  if(y>=1959&&y<=1975&&westernSaharaReference?.path){
    const full={...westernSaharaReference,from:y,to:y,source:`${westernSaharaReference.source} · 1958 SVG carried forward through 1975`};
    const index=selectedFeatures.findIndex(feature=>feature.id==="western-sahara");
    if(index>=0)selectedFeatures[index]=full;else selectedFeatures.push(full)
  }
  // Use the user-updated Hejaz SVG for both Ottoman Hejaz and the short-lived
  // Kingdom of Hejaz period. The source SVG has a root translation, so keep
  // that transform with the feature instead of flattening its coordinates.
  const hejazReference=window.MENA_HEJAZ_REFERENCE;
  if(y>=1886&&y<=1925&&hejazReference?.path){
    const full={...hejazReference,from:y,to:y,source:`${hejazReference.source} · historical Hejaz binding`};
    for(let index=selectedFeatures.length-1;index>=0;index--)if(selectedFeatures[index].id==="hejaz")selectedFeatures.splice(index,1);
    selectedFeatures.push(full)
  }
  // CShapes stops carrying a separate Palestine record after 1967 because
  // the area was under Israeli military occupation. Keep the two geographic
  // pieces selectable by reusing the modern reference outline as a dated
  // context overlay; the Israeli control polygon remains underneath it.
  if(y>=1968&&!selectedFeatures.some(feature=>feature.id==="palestine")){
    const modernPalestine=(window.MENA_2026||[]).find(feature=>feature.id==="palestine");
    if(modernPalestine)selectedFeatures.push({...modernPalestine,from:y,to:y,source:"Natural Earth reference · Palestinian geographic pieces during occupation"});
  }
  if(y>=1886&&window.MENA_HISTORICAL_ADEN)selectedFeatures.push(...window.MENA_HISTORICAL_ADEN.filter(feature=>feature.from<=y&&feature.to>=y));
  // Until the post-war settlements, the Ottoman imperial polygon contains
  // Tripolitania/Cyrenaica and the Hejaz record as internal regions. Keep
  // those paths as explicit cutouts; buildBoundaryMap applies an SVG mask so
  // the Ottoman body (and its flag) can never paint over the separate region.
  if(y<=1919){
    const ottoman=selectedFeatures.find(feature=>feature.id==="turkey");
    const cuts=selectedFeatures.filter(feature=>feature.id==="libya"||feature.id==="hejaz");
    if(ottoman&&cuts.length){
      const cutParts=new Set(cuts.flatMap(feature=>flagPathParts(feature.path))),cleaned=flagPathParts(ottoman.path).filter(part=>!cutParts.has(part)).join("");
      // CShapes stores Tripolitania/Cyrenaica as an exact Ottoman subpath in
      // the early cohort. Remove that subpath from the body itself when it is
      // available; the mask below remains the fallback for partial overlaps.
      ottoman.basePath=cleaned;ottoman.path=cleaned;ottoman.cutoutPaths=cuts.map(feature=>feature.path);ottoman.cutoutTransforms=cuts.map(feature=>feature.transform||"");ottoman.cutoutCount=cuts.length;ottoman.source=`${ottoman.source||"CShapes 2.0"} + Ottoman historical cutout mask for ${cuts.map(feature=>feature.id).join("/")}`
    }
  }
  const splitFeatures=selectedFeatures.flatMap(feature=>feature.id==="palestine"&&y>=1949?splitPalestineFeature(feature):[feature]);
  splitFeatures.forEach(feature=>{
    const id=["yemen-north","yemen-south"].includes(feature.id)&&y>=1990?"yemen":feature.id;
    const current=grouped.get(id)||{id,name:feature.name,path:"",source:feature.source,transform:feature.transform||"",cutoutCount:0,basePath:feature.basePath||"",cutoutPaths:[],cutoutTransforms:[]};
    current.path+=feature.path;
    current.cutoutCount+=(feature.cutoutCount||0);
    if(feature.cutoutPaths?.length)current.cutoutPaths.push(...feature.cutoutPaths);
    if(feature.cutoutTransforms?.length)current.cutoutTransforms.push(...feature.cutoutTransforms);
    current.source=current.source===feature.source?current.source:[...new Set([current.source,feature.source].filter(Boolean).flatMap(source=>source.split(" + ")))].join(" + ");
    grouped.set(id,current);
  });
  const features=[...grouped.values()];
  const overlays=features.filter(feature=>["gaza-strip","west-bank"].includes(feature.id));
  return [...features.filter(feature=>!["gaza-strip","west-bank"].includes(feature.id)),...overlays];
}
const DISPUTE_REGION_DEFINITIONS={
  "saudi-yemen-dispute":{from:1932,to:1932,path:"M793,403L800,406L795,414L791,420L792,426L787,427L786,420L789,412Z",title:"1932年沙特—也门未定界争议带"},
  "golan-heights":{from:1967,to:2026,path:"M699,182L701,182L701,188L700,193L697,193L697,187Z",title:"戈兰高地：以色列实际控制、叙利亚声索"},
  "sinai-peninsula":{from:1968,to:1979,path:"M666,232L682,232L685,238L684,246L682,252L682,256L678,254L672,248L670,240Z",title:"西奈半岛：以色列占领、埃及声索"}
};
function disputeRegionForYear(id,y){const definition=DISPUTE_REGION_DEFINITIONS[id],year=Number(y);return definition&&year>=definition.from&&year<=definition.to?{id,...definition}:null}
function disputeRegionIdsForYear(y){return Object.keys(DISPUTE_REGION_DEFINITIONS).filter(id=>disputeRegionForYear(id,y))}
function disputePathDataForYear(id,y){const definition=disputeRegionForYear(id,y);if(!definition)return null;const replacement=typeof boundaryDebugReplacementEntriesForYear==="function"?boundaryDebugReplacementEntriesForYear(y).find(entry=>entry.id===id):null,item=replacement?.item,paths=item?.paths?.filter(record=>record?.d)||[],reference=id==="sinai-peninsula"?window.MENA_SINAI_REFERENCE:id==="golan-heights"?window.MENA_GOLAN_REFERENCE:null;if(!paths.length&&reference?.path)return{...definition,d:reference.path,transform:reference.transform||""};if(!paths.length)return{...definition,d:definition.path,transform:""};const d=paths.map(record=>record.d).join(""),transform=typeof boundaryDebugTransform==="function"&&typeof boundaryDebugPathRecordsBounds==="function"?boundaryDebugTransform(boundaryDebugPathRecordsBounds(paths),boundaryDebugSettings({type:"current",id,value:`current:${id}`},y)):"";return{...definition,d,transform}}
function renderFrontierOverlays(y){
  if(!dom.frontierOverlays)return;
  dom.frontierOverlays.innerHTML="";
  const ns="http://www.w3.org/2000/svg";
  const configureOverlay=(path,id,info)=>{if(!id)return;path.dataset.id=id;path.dataset.disputeId=id;path.setAttribute("role","button");path.setAttribute("aria-label",info.title);if(info.transform)path.setAttribute("transform",info.transform)};
  const appendOverlay=(d,titleText,kind="frontier-gap")=>{const p=document.createElementNS(ns,"path");p.classList.add(kind,"disputed");p.setAttribute("d",d);p.setAttribute("fill","url(#hatch)");p.setAttribute("fill-rule","evenodd");const title=document.createElementNS(ns,"title");title.textContent=titleText;p.append(title);dom.frontierOverlays.append(p)};
  const appendClaimOverlay=(d,titleText,color,id,info)=>{
    const defs=dom.map.querySelector("defs");let pattern=defs?.querySelector(`#${id}`);
    if(!pattern&&defs){pattern=document.createElementNS(ns,"pattern");pattern.id=id;pattern.setAttribute("width","8");pattern.setAttribute("height","8");pattern.setAttribute("patternUnits","userSpaceOnUse");pattern.setAttribute("patternTransform","rotate(45)");const line=document.createElementNS(ns,"line");line.setAttribute("x1","0");line.setAttribute("y1","0");line.setAttribute("x2","0");line.setAttribute("y2","8");line.setAttribute("stroke",color);line.setAttribute("stroke-width","2.2");line.setAttribute("opacity",".88");pattern.append(line);defs.append(pattern)}
    const p=document.createElementNS(ns,"path");p.classList.add("claim-overlay");p.setAttribute("d",d);p.setAttribute("fill",`url(#${id})`);p.setAttribute("fill-rule","evenodd");p.setAttribute("data-claim-color",color);configureOverlay(p,info?.id,info||{});const title=document.createElementNS(ns,"title");title.textContent=titleText;p.append(title);dom.frontierOverlays.append(p)
  };
  const appendActualControlOverlay=(d,titleText,info)=>{const p=document.createElementNS(ns,"path");p.classList.add("actual-control");p.setAttribute("d",d);p.setAttribute("fill","var(--israel-background-color,#a44e3b)");p.setAttribute("fill-rule","evenodd");configureOverlay(p,info?.id,info||{});const title=document.createElementNS(ns,"title");title.textContent=titleText;p.append(title);dom.frontierOverlays.append(p)};
  const appendDisputeHit=info=>{const p=document.createElementNS(ns,"path");p.classList.add("dispute-hit");p.dataset.id=info.id;p.dataset.disputeId=info.id;p.setAttribute("d",info.d);p.setAttribute("fill","transparent");p.setAttribute("fill-rule","evenodd");p.setAttribute("tabindex","0");p.setAttribute("role","button");p.setAttribute("aria-label",`查看${info.title}`);if(info.transform)p.setAttribute("transform",info.transform);const title=document.createElementNS(ns,"title");title.textContent=`点击查看${info.title}`;p.append(title);p.addEventListener("click",()=>choose(info.id));p.addEventListener("keydown",event=>{if(event.key==="Enter"||event.key===" "){event.preventDefault();choose(info.id)}});dom.frontierOverlays.append(p)};
  // The Treaty of Taif was signed in 1934. In 1932 the Asir–Jizan–Najran
  // frontier was still unsettled, so the gap is shown as a hatched disputed
  // belt rather than silently assigning it to Saudi Arabia or Yemen.
  if(y===1932){const info=disputePathDataForYear("saudi-yemen-dispute",y);appendOverlay(info.d,info.title);appendDisputeHit(info)}
  // Keep the controlled area inside the Israeli boundary fill and use the
  // claimant's polity colour only for the diagonal claim hatch.
  if(y>=1967){const info=disputePathDataForYear("golan-heights",y);appendActualControlOverlay(info.d,info.title,info);appendClaimOverlay(info.d,info.title+"；叙利亚声索","#9b713e","claim-hatch-syria",info);appendDisputeHit(info)}
  if(y>=1968&&y<=1979){const info=disputePathDataForYear("sinai-peninsula",y);appendActualControlOverlay(info.d,info.title,info);appendClaimOverlay(info.d,info.title+"；埃及声索","#a65d37","claim-hatch-egypt",info);appendDisputeHit(info)}
  dom.frontierOverlays.querySelectorAll('.dispute-hit[data-dispute-id="golan-heights"],.dispute-hit[data-dispute-id="sinai-peninsula"]').forEach(hit=>{
    const showIsraelFlag=()=>{if(!selected)setHoverState("israel",true)};
    const hideIsraelFlag=event=>{if(!selected&&!isIsraelFlagTriggerNode(event.relatedTarget))setHoverState("israel",false)};
    hit.addEventListener("mouseenter",showIsraelFlag);
    hit.addEventListener("mouseleave",hideIsraelFlag);
    hit.addEventListener("focus",showIsraelFlag);
    hit.addEventListener("blur",hideIsraelFlag);
  });
}
function buildBoundaryMap(y){
  const ns="http://www.w3.org/2000/svg",defs=dom.map.querySelector("defs");dom.realRoot.innerHTML="";
  // Rebuild the cutout mask with each annual boundary snapshot. A mask is
  // used instead of relying on path winding/evenodd, because CShapes' Ottoman
  // record is a multi-polygon and its Libya overlap is not a guaranteed hole.
  defs?.querySelector("#ottomanCutoutMask")?.remove();
  const replacements=boundaryDebugReplacementEntriesForYear(y),replacementIds=new Set(replacements.map(entry=>entry.id));
  const appendBoundaryPath=(path,transform="")=>{
    if(!transform){dom.realRoot.append(path);return}
    const wrapper=document.createElementNS(ns,"g");
    wrapper.setAttribute("transform",transform);
    wrapper.append(path);
    dom.realRoot.append(wrapper)
  };
  boundaryFeaturesForYear(y).forEach(feature=>{
    const pathData=feature.path;
    // CShapes calls the pre-1923 imperial polygon `turkey`; expose it as its
    // own Ottoman tag so it can never be confused with the Turkish republic.
    const logicalId=feature.id==="turkey"&&y<=1922?"ottoman":feature.id;
    if(replacementIds.has(logicalId))return;
    // CShapes and the contextual Western Sahara outline can overlap while
    // using opposite winding directions. Keep each subpath as its own opaque
    // SVG element so one source cannot turn the other into a transparent hole.
    const pathParts=logicalId==="western-sahara"?flagPathParts(pathData):[pathData];
    pathParts.forEach((part,partIndex)=>{
      const p=document.createElementNS(ns,"path");
      p.dataset.id=logicalId;p.dataset.part=String(partIndex);p.dataset.source=feature.source||"";p.dataset.sourceId=feature.id;p.dataset.cutoutCount=String(feature.cutoutCount||0);p.dataset.flagPath=feature.basePath||part;p.dataset.transform=feature.transform||"";p.style.setProperty("--source-transform","none");if(feature.cutoutPaths?.length)p.dataset.cutoutPaths=JSON.stringify(feature.cutoutPaths);p.setAttribute("d",part);p.setAttribute("fill-rule",logicalId==="ottoman"?"evenodd":logicalId==="western-sahara"?"nonzero":feature.source?.includes("extension")?"nonzero":"evenodd");
      if(logicalId==="western-sahara"&&y>=1886&&y<=1958){
        // The Spanish colonial area must be an ordinary opaque country fill.
        // Set the colour on each split source path itself; an overlay would
        // sit above the flag layer and hide the Spanish flag.
        const spanishColor=stablePolityColor("spanish-empire");
        p.style.setProperty("--polity-color",spanishColor);
        p.setAttribute("fill",spanishColor)
      }
      if(logicalId==="ottoman"&&feature.cutoutPaths?.length){
        let mask=defs?.querySelector("#ottomanCutoutMask");
        if(!mask&&defs){
          mask=document.createElementNS(ns,"mask");mask.id="ottomanCutoutMask";mask.setAttribute("mask-type","luminance");mask.setAttribute("maskUnits","userSpaceOnUse");mask.setAttribute("maskContentUnits","userSpaceOnUse");mask.setAttribute("x","0");mask.setAttribute("y","0");mask.setAttribute("width","1080");mask.setAttribute("height","650");
          const white=document.createElementNS(ns,"rect");white.setAttribute("x","0");white.setAttribute("y","0");white.setAttribute("width","1080");white.setAttribute("height","650");white.setAttribute("fill","white");mask.append(white);defs.append(mask)
        }
        if(mask){feature.cutoutPaths.forEach((cutPath,index)=>{const cut=document.createElementNS(ns,"path");cut.setAttribute("d",cutPath);if(feature.cutoutTransforms?.[index])cut.setAttribute("transform",feature.cutoutTransforms[index]);cut.setAttribute("fill","black");cut.setAttribute("fill-rule","nonzero");mask.append(cut)});p.setAttribute("mask","url(#ottomanCutoutMask)")}
      }
      // Western Sahara and the post-1948 Palestinian pieces are disputed in
      // status, but still receive ordinary opaque polity fills. Claim hatching
      // is reserved for the explicit control/claim overlays below.
      if(feature.source?.includes("Natural Earth fallback"))p.classList.add("fallback");
      if(logicalId!=="hejaz"&&feature.source?.includes("context"))p.classList.add("context");
      // Compound historical records for Aden and the Ottoman/Turkish core are
      // one polity even when the source geometry contains touching subpaths.
      if((feature.id==="yemen-south"&&y<=1967)||(feature.id==="turkey"&&y<=1922))p.classList.add("merged-feature");
      const title=document.createElementNS(ns,"title");
      const label=logicalId==="ottoman"?"奥斯曼帝国":logicalId==="yemen-south"?(y<1967?"亚丁保护国":"南也门"):(meta[logicalId]?.[0]||feature.name||logicalId);
      title.textContent=`${label} · ${feature.source||"地图数据"}`;p.append(title);appendBoundaryPath(p,feature.transform||"")
    })
  });
  replacements.forEach(({id,item})=>{
    const paths=item.paths.filter(record=>record?.d),pathData=paths.map(record=>record.d).join("");
    if(!pathData)return;
    const p=document.createElementNS(ns,"path"),fillRule=paths.some(record=>record.fillRule==="evenodd")?"evenodd":"nonzero";
    p.dataset.id=id;p.dataset.source=`导入 SVG 替换 · ${item.name||item.id||id}`;p.dataset.sourceId=id;p.dataset.cutoutCount=String(paths.reduce((count,record)=>count+(record.cutoutPaths?.length||0),0));p.dataset.flagPath=pathData;
    const cutoutPaths=paths.flatMap(record=>record.cutoutPaths||[]);if(cutoutPaths.length)p.dataset.cutoutPaths=JSON.stringify(cutoutPaths);
    p.setAttribute("d",pathData);p.setAttribute("fill-rule",fillRule);const replacementTarget={type:"current",id,value:`current:${id}`},replacementSettings=boundaryDebugSettings(replacementTarget,y),replacementTransform=boundaryDebugTransform(boundaryDebugPathRecordsBounds(paths),replacementSettings);p.dataset.transform=replacementTransform||"";p.style.setProperty("--source-transform","none");p.classList.add("boundary-debug-replacement");
    if(cutoutPaths.length&&defs){const mask=document.createElementNS(ns,"mask"),maskId=`boundaryDebugReplacementMask-${y}-${id}`.replace(/[^A-Za-z0-9_-]/g,"-");mask.id=maskId;mask.setAttribute("mask-type","luminance");mask.setAttribute("maskUnits","userSpaceOnUse");mask.setAttribute("maskContentUnits","userSpaceOnUse");mask.setAttribute("x","0");mask.setAttribute("y","0");mask.setAttribute("width","1080");mask.setAttribute("height","650");const white=document.createElementNS(ns,"rect");white.setAttribute("x","0");white.setAttribute("y","0");white.setAttribute("width","1080");white.setAttribute("height","650");white.setAttribute("fill","white");mask.append(white);cutoutPaths.forEach(cutoutPath=>{const cut=document.createElementNS(ns,"path");cut.setAttribute("d",cutoutPath);cut.setAttribute("fill","black");cut.setAttribute("fill-rule","nonzero");mask.append(cut)});defs.append(mask);p.setAttribute("mask",`url(#${maskId})`)}
    const title=document.createElementNS(ns,"title"),label=id==="ottoman"?"奥斯曼帝国":id==="yemen-south"?(y<1967?"亚丁保护国":"南也门"):(meta[id]?.[0]||id);title.textContent=`${label} · ${p.dataset.source}`;p.append(title);appendBoundaryPath(p,replacementTransform||"")
  });
  dom.realCountries=[...dom.realRoot.querySelectorAll("path")];dom.realCountries.forEach(bindCountry);renderFrontierOverlays(y)
}
