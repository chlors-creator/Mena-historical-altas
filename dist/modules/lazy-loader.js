/* Optional resources stay outside the initial page path so the static site remains file:// compatible. */
const lazyScriptPromises=new Map();
function loadLazyScript(src){
  if(lazyScriptPromises.has(src))return lazyScriptPromises.get(src);
  const promise=new Promise((resolve,reject)=>{
    const script=document.createElement("script");
    script.src=src;
    script.async=true;
    script.onload=()=>resolve();
    script.onerror=()=>reject(new Error(`无法加载 ${src}`));
    document.head.append(script);
  });
  lazyScriptPromises.set(src,promise);
  return promise;
}
function ensureHistoricalData(year){
  const y=Number(year),sources=[];
  if(y>=1886&&y<=1923)sources.push("mena-historical-1886-1923.js");
  if(y>=1924&&y<=1999)sources.push("mena-historical-1924-1999.js");
  if(y>=1886&&y<=1938)sources.push("mena-historical-aden.js");
  return Promise.all(sources.map(loadLazyScript)).then(()=>{if(typeof boundaryDebugFeatureCache!=="undefined")boundaryDebugFeatureCache={}});
}
function ensureBoundaryDebugLoaded(){return loadLazyScript("modules/boundary-debug.js")}
let renderRequestToken=0;
function renderYear(year){
  const y=Number(year),token=++renderRequestToken;
  const flagDefaults=typeof flagDebugFileDefaultsReady==="undefined"?Promise.resolve():flagDebugFileDefaultsReady;
  return Promise.all([ensureHistoricalData(y),flagDefaults]).then(()=>{
    if(token===renderRequestToken&&Number(dom.year.value)===y)render();
  });
}

// The map can render before the optional debugger is opened. These no-op hooks are
// replaced by the real debugger script when it is requested.
function boundaryDebugRenderLayer(){}
function boundaryDebugHasReplacementForYear(){return false}
function boundaryDebugReplacementEntriesForYear(){return[]}
function boundaryDebugSettings(){return{}}
