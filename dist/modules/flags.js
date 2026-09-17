/* Historical flag assets, flag overlays, and polity styling. */
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
  "shammar.svg":"https://commons.wikimedia.org/wiki/File:Hail_flag.svg",
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
  if(id==="ottoman")return flagAsset("ottoman-empire.svg","奥斯曼帝国（至1922）");
  if(id==="turkey")return flagAsset("turkey.svg","土耳其共和国（1923—）");
  if(id==="morocco-spanish")return y<1956?flagAsset("spain.svg","西班牙保护地（至1956）"):flagAsset("morocco.svg","摩洛哥王国（1956—）");
  if(id==="morocco")return y<1912?flagAsset("morocco-alaouite.svg","摩洛哥阿拉维苏丹国（至1912）"):y<1956?flagAsset("france.svg","法属摩洛哥保护国（1912—1956）"):flagAsset("morocco.svg","摩洛哥王国（1956—）");
  if(id==="golan-heights")return y<1967?flagAsset(y<1946?"syria-1932.svg":"syria.svg","叙利亚戈兰高地（至1966）"):flagAsset("israel.svg","以色列实际控制戈兰高地（1967—）");
  if(id==="sinai-peninsula")return y>=1968&&y<=1979?flagAsset("israel.svg","以色列占领西奈半岛（1968—1979）"):flagAsset("egypt.svg","埃及西奈半岛");
  if(id==="arabian-dispute"||id==="saudi-yemen-dispute")return flagAsset("saudi-1932.svg","阿拉伯半岛争议区（历史旗帜语境）");
  if(id==="western-sahara")return y<1976?flagAsset("spain.svg","西属撒哈拉（至1975）"):flagAsset("morocco.svg","摩洛哥实际控制区（1976—）");
  if(id==="algeria")return y<1830?flagAsset("ottoman-empire.svg","奥斯曼帝国（至1830）"):y<1962?flagAsset("france.svg","法属阿尔及利亚（1830—1962）"):flagAsset("algeria.svg","阿尔及利亚共和国（1962—）");
  if(id==="tunisia")return y<1881?flagAsset("ottoman-empire.svg","奥斯曼帝国（至1881）"):y<1956?flagAsset("france.svg","法属突尼斯（1881—1956）"):flagAsset("tunisia.svg","突尼斯共和国（1956—）");
  if(id==="libya")return y<1912?flagAsset("ottoman-empire.svg","奥斯曼帝国（至1912）"):y<1943?flagAsset("italy.svg","意属利比亚（1912—1943）"):y<1951?flagAsset("uk.svg","英法军事管理（1943—1951）"):y<1969?flagAsset("libya-1951.svg","利比亚王国（1951—1969）"):y<1972?flagAsset("libya-1969.svg","利比亚共和国（1969—1972）"):y<1977?flagAsset("egypt-1972.svg","阿拉伯共和国联邦时期（1972—1977）"):y<2011?flagAsset("libya-1977.svg","大阿拉伯利比亚人民社会主义民众国（1977—2011）"):flagAsset("libya-1951.svg","利比亚国（2011—）");
  if(id==="egypt")return y<1805?flagAsset("ottoman-empire.svg","奥斯曼帝国（至1805）"):y<1826?flagAsset("ottoman-empire.svg","穆罕默德·阿里统治早期（1805—1826，奥斯曼旗制语境）"):y<1867?flagAsset("egypt-1826-1867.png","埃及赫迪夫领（1826—1867）"):y<1881?flagAsset("egypt-muhammad-ali.svg","埃及赫迪夫领（1867—1881）"):y<1922?flagAsset("egypt-1882.svg","埃及苏丹国（1881—1922）"):y<1958?flagAsset("egypt-1922.svg","埃及王国／共和国（1922—1958）"):y<1972?flagAsset("egypt-1958.png","阿拉伯联合共和国（1958—1971）"):y<1984?flagAsset("egypt-1972.svg","埃及（1972—1984）"):flagAsset("egypt.svg","埃及共和国（1984—）");
  if(id==="sudan")return y<1821?flagAsset("ottoman-empire.svg","地方苏丹国（奥斯曼边疆）"):y<1826?flagAsset("ottoman-empire.svg","埃及征服初期（1821—1826，奥斯曼旗制语境）"):y<1867?flagAsset("egypt-1826-1867.png","埃及统治时期（1826—1867）"):y<1881?flagAsset("egypt-muhammad-ali.svg","埃及统治时期（1867—1881）"):y<1885?flagAsset("egypt-1826-1867.png","英埃统治早期（1881—1885）"):y<1956?flagAsset("uk.svg","英埃共管苏丹（历史旗帜未统一）"):y<1970?flagAsset("sudan-1956.svg","苏丹共和国（1956—1970）"):flagAsset("sudan.svg","苏丹共和国（1970—）");
  if(id==="syria")return y<=1918?flagAsset("ottoman-empire.svg","奥斯曼帝国（至1918）"):y<=1931?flagAsset("syria-1930.svg","叙利亚委任统治（1920—1931）"):y<=1957?flagAsset("syria-1932.svg","叙利亚共和国（1932—1957）"):y<=1960?flagAsset("united-arab-republic.svg","阿拉伯联合共和国（1958—1961）"):y<=1962?flagAsset("syria-1932.svg","叙利亚共和国（1961—1963）"):y<=1971?flagAsset("syria-1963.svg","叙利亚（1963—1972）"):y<=1979?flagAsset("syria-1972.svg","阿拉伯共和国联邦时期（1972—1980）"):y<=2024?flagAsset("united-arab-republic.svg","叙利亚（1980—2024）"):flagAsset("syria.svg","叙利亚（2025—）");
  if(id==="lebanon")return y<1920?flagAsset("ottoman-empire.svg","奥斯曼帝国（至1920）"):y<1943?flagAsset("lebanon-1920.svg","法属黎巴嫩委任统治（1920—1943）"):flagAsset("lebanon.svg","黎巴嫩共和国（1943—）");
  if(id==="israel")return y<1948?flagAsset("palestine-mandate.svg","英属巴勒斯坦托管地（1927—1948海事旗）"):flagAsset("israel.svg","以色列（1948—）");
  if(id==="gaza-strip"||id==="west-bank")return y<1917?flagAsset("ottoman-empire.svg","奥斯曼巴勒斯坦（至1917）"):y<=1948?flagAsset("palestine-mandate.svg","英属巴勒斯坦托管地（1920—1948海事旗）"):flagAsset("palestine.svg","巴勒斯坦（1949—）");
  if(id==="palestine")return y<1917?flagAsset("ottoman-empire.svg","奥斯曼巴勒斯坦（至1917）"):y<=1948?flagAsset("palestine-mandate.svg","英属巴勒斯坦托管地（1920—1948海事旗）"):flagAsset("palestine.svg","巴勒斯坦（1949—）");
  if(id==="jordan")return y<1918?flagAsset("ottoman-empire.svg","奥斯曼帝国（至1918）"):y<1928?flagAsset("uk.svg","英国委任／保护时期"):flagAsset("jordan.png","约旦（1928—）");
  if(id==="iraq")return y<=1920?flagAsset("ottoman-empire.svg","奥斯曼帝国（至1920）"):y<=1923?flagAsset("iraq-1921.svg","伊拉克王国（1921—1924）"):y<=1958?flagAsset("iraq-1924.svg","伊拉克王国（1924—1959）"):y<=1962?flagAsset("iraq-1959.svg","伊拉克共和国（1959—1963）"):y<=1990?flagAsset("iraq-1963.svg","伊拉克（1963—1991）"):y<=2003?flagAsset("iraq-1991.svg","伊拉克（1991—2004）"):flagAsset("iraq.svg","伊拉克共和国（2004—）");
  if(id==="iran")return y<=1925?flagAsset("qajar-iran.svg","卡扎尔王朝（至1925）"):y<=1963?flagAsset("iran-1933.svg","巴列维王朝早期（1925—1964）"):y<=1978?flagAsset("iran-1964.svg","巴列维王朝（1964—1979）"):flagAsset("iran.svg","伊朗伊斯兰共和国（1979—）");
  if(id==="kuwait")return y<1899?flagAsset("ottoman-empire.svg","科威特酋长国（奥斯曼宗主权下，至1899）"):y<1961?flagAsset("uk.svg","科威特保护国（英科协定，1899—1961）"):flagAsset("kuwait.svg","科威特国（1961—）");
  if(id==="saudi")return y<1932?flagAsset("saudi-1932.svg","内志与汉志王国前身（1902—1932）"):y<1934?flagAsset("saudi-1932.svg","沙特阿拉伯（1932—1934）"):y<1938?flagAsset("saudi-1934.svg","沙特阿拉伯（1934—1938）"):y<1973?flagAsset("saudi-1938.svg","沙特阿拉伯（1938—1973）"):flagAsset("saudi.svg","沙特阿拉伯（1973—）");
  if(id==="hejaz")return y<=1916?flagAsset("ottoman-empire.svg","奥斯曼汉志（至1916）"):flagAsset("hejaz-1917.svg","汉志王国（1917—1925）");
  if(id==="shammar")return flagAsset("shammar.svg","舍迈尔酋长国（1836—1921）");
  if(id==="najd")return y<1902?flagAsset("saudi-first-second.svg","内志部落政权（历史旗帜未统一）"):flagAsset("saudi-1932.svg","内志苏丹国（1902—1931）");
  if(id==="qatar")return y<1971?flagAsset("uk.svg","英国保护时期（地方旗帜多样）"):flagAsset("qatar.svg","卡塔尔（1971—）");
  if(id==="uae")return y<1971?flagAsset("uk.svg","特鲁西尔诸国保护时期"):flagAsset("uae.svg","阿拉伯联合酋长国（1971—）");
  if(id==="oman")return y<1954?flagAsset("ottoman-empire.svg","阿曼内地／马斯喀特（历史旗帜版本多样）"):y<1970?flagAsset("oman-1954.png","阿曼伊玛目国（1954—1959旗帜）"):flagAsset("oman.svg","阿曼苏丹国（1970—）");
  if(id==="yemen-north")return y<1918?flagAsset("ottoman-empire.svg","奥斯曼也门（至1918）"):y<1962?flagAsset("yemen-kingdom.svg","穆塔瓦基利特王国（1918—1962）"):y<1990?flagAsset("yemen-north.svg","也门阿拉伯共和国（1962—1990）"):flagAsset("yemen.svg","也门共和国（1990—）");
  if(id==="yemen-south")return y<1967?flagAsset("uk.svg","亚丁殖民地／保护地（英国）"):y<1990?flagAsset("yemen-south.svg","南也门（1967—1990）"):flagAsset("yemen.svg","也门共和国（1990—）");
  if(id==="yemen")return y<1990?flagAsset("yemen-north.svg","也门分裂时期示意"):flagAsset("yemen.svg","也门共和国（1990—）");
  if(id==="bahrain")return flagAsset("bahrain.svg","巴林（1820年代确立红白旗制）");
  return flagAsset("ottoman-empire.svg","奥斯曼帝国历史回退旗帜");
}
const FLAG_DEBUG_STORAGE="menaFlagDebugV1";
const flagDebugDefaults={scaleX:1,scaleY:1,offsetX:0,offsetY:0,rotation:0,color:"",flagFill:""};
// Debug values are keyed by country + the exact historical flag asset. This
// lets one country's flag periods diverge without leaking a later palette into
// an earlier flag. The initial values mirror the previously supplied tuning.
const flagDebugCountryDefaults={
  saudi:{scaleX:1,scaleY:1.42,offsetX:-18,offsetY:0,color:"#9b713e",flagFill:"#9b713e"},
  turkey:{scaleX:1,scaleY:1,offsetX:0,offsetY:0,color:"#fe8b4d",flagFill:"#f05a19"},
  bahrain:{scaleX:1,scaleY:1,offsetX:0,offsetY:0,color:"#9d4035",flagFill:"#cc3e2e"},
  algeria:{scaleX:1.42,scaleY:1,offsetX:0,offsetY:0,color:"#8d653d",flagFill:"#8d653d"},
  libya:{scaleX:1.6,scaleY:1,offsetX:0,offsetY:0,color:"#35678a",flagFill:"#35678a"},
  iran:{scaleX:1.96,scaleY:1,offsetX:0,offsetY:0,color:"#54637b",flagFill:"#54637b"}
};
const flagDebugAssetVariants={
  saudi:["saudi-1932.svg","saudi-1934.svg","saudi-1938.svg","saudi.svg"],
  turkey:["turkey.svg"],
  bahrain:["bahrain.svg"],
  algeria:["ottoman-empire.svg","france.svg","algeria.svg"],
  libya:["ottoman-empire.svg","italy.svg","uk.svg","libya-1951.svg","libya-1969.svg","egypt-1972.svg","libya-1977.svg"],
  iran:["qajar-iran.svg","iran-1933.svg","iran-1964.svg","iran.svg"],
  egypt:["egypt-1882.svg"],ottoman:["ottoman-empire.svg"],iraq:["iraq-1963.svg"],
  morocco:["morocco.svg"],tunisia:["tunisia.svg"],israel:["israel.svg"]
};
const flagDebugBuiltIn={};Object.entries(flagDebugAssetVariants).forEach(([id,files])=>files.forEach(file=>{flagDebugBuiltIn[`${id}::${file}`]={...flagDebugCountryDefaults[id]}}));
// Exact values from the latest exported debugger file. These override the
// older country-wide fallback only for the flag asset that was tuned.
Object.assign(flagDebugBuiltIn,{
  "egypt::egypt-1882.svg":{scaleX:.93,scaleY:1.09,offsetX:20,offsetY:0,color:"#bf7d87",flagFill:"#ce1127"},
  "ottoman::ottoman-empire.svg":{scaleX:1,scaleY:1,offsetX:0,offsetY:0,color:"#8eb785",flagFill:"#6b4a3a"},
  "turkey::turkey.svg":{scaleX:1,scaleY:1,offsetX:0,offsetY:0,color:"#d07a01",flagFill:"#e30a17"},
  "algeria::france.svg":{scaleX:1.11,scaleY:1,offsetX:0,offsetY:0,color:"#5b69b9",flagFill:"#ffffff"},
  "libya::italy.svg":{scaleX:1.19,scaleY:1.2,offsetX:0,offsetY:0,color:"#7b4d58",flagFill:"#35678a"},
  "iran::qajar-iran.svg":{scaleX:1.96,scaleY:1,offsetX:0,offsetY:0,color:"#3c96e6",flagFill:"#54637b"},
  "iraq::iraq-1963.svg":{scaleX:1,scaleY:1,offsetX:0,offsetY:0,color:"#9b713e",flagFill:"#ffffff"},
  "libya::libya-1951.svg":{scaleX:1.76,scaleY:.97,offsetX:0,offsetY:0,color:"#35678a",flagFill:"#35678a"},
  "morocco::morocco.svg":{scaleX:1.03,scaleY:1,offsetX:5,offsetY:0,color:"#9d4035",flagFill:"#c1272d"},
  "tunisia::tunisia.svg":{scaleX:1,scaleY:1,offsetX:0,offsetY:0,color:"#8d653d",flagFill:"#e70013"},
  "saudi::saudi-1938.svg":{scaleX:.5,scaleY:.5,offsetX:-7,offsetY:0,color:"#9b713e",flagFill:"#006c35"},
  "israel::israel.svg":{scaleX:1.28,scaleY:.57,offsetX:0,offsetY:-5,color:"#9eb5b7",flagFill:"#ffffff"},
  "hejaz::hejaz-1917.svg":{scaleX:1.99,scaleY:1,offsetX:-4,offsetY:-39,color:"#9a5a35",flagFill:"#ffffff"}
});
const SHARED_POLITIES=new Set(["ottoman","british-empire","french-empire","spanish-empire","italian-empire"]);
const SHARED_DEFAULT_COLORS={ottoman:"#8eb785","british-empire":"#bf7d87","french-empire":"#5b69b9","spanish-empire":"#b0792f","italian-empire":"#7b4d58"};
let flagDebugDrafts={},flagDebugSharedDrafts={};
function readFlagDebug(){try{return JSON.parse(localStorage.getItem(FLAG_DEBUG_STORAGE)||"{}")}catch{return{}}}
function flagDebugKey(id,y){return `${id}::${flagAssetFor(id,y).file}`}
function normalizeSharedColor(polity,color){if(polity==="british-empire"&&String(color||"").toLowerCase()==="#b76277")return SHARED_DEFAULT_COLORS[polity];return color||""}
function sharedColorFor(polity){if(!SHARED_POLITIES.has(polity))return"";const draft=flagDebugSharedDrafts[polity],saved=readFlagDebug();return draft||normalizeSharedColor(polity,saved.__sharedColors?.[polity])||SHARED_DEFAULT_COLORS[polity]||""}
function flagDebugSettings(id,y){const key=flagDebugKey(id,y),polity=polityAt(id,y),saved=readFlagDebug();let exact=saved[key];if(!exact&&saved[id]){exact=saved[id];const migrated={...saved,[key]:saved[id]};if(SHARED_POLITIES.has(polity)&&saved[id].color){migrated.__sharedColors={...(saved.__sharedColors||{}),[polity]:saved[id].color}}delete migrated[id];try{localStorage.setItem(FLAG_DEBUG_STORAGE,JSON.stringify(migrated))}catch{}}const builtIn={...(flagDebugBuiltIn[key]||{})};if(SHARED_POLITIES.has(polity))delete builtIn.color;const settings={...flagDebugDefaults,...builtIn,...(exact||{})};if(SHARED_POLITIES.has(polity))settings.color=sharedColorFor(polity)||"";return settings}
function flagPathParts(d){return (d.match(/M[^M]*/g)||[d]).map(part=>part.trim()).filter(Boolean)}
function pathDataBox(d){const nums=[...d.matchAll(/-?\d+(?:\.\d+)?/g)].map(match=>Number(match[0]));if(nums.length<2)return null;const xs=nums.filter((_,i)=>i%2===0),ys=nums.filter((_,i)=>i%2===1);return{x:Math.min(...xs),y:Math.min(...ys),width:Math.max(...xs)-Math.min(...xs),height:Math.max(...ys)-Math.min(...ys)}}
 function applyFlagDebugSettings(id,y=Number(dom.year.value)){const key=flagDebugKey(id,y),polity=polityAt(id,y),settings={...flagDebugSettings(id,y),...(flagDebugDrafts[key]||{})},targets=SHARED_POLITIES.has(polity)?activeCountries().filter(path=>path.dataset.polity===polity):activeCountries().filter(path=>path.dataset.id===id);targets.forEach(path=>{const pathPolity=path.dataset.polity||path.dataset.id,base=path.dataset.basePolityColor||stablePolityColor(pathPolity),color=SHARED_POLITIES.has(pathPolity)?(sharedColorFor(pathPolity)||base):(settings.color||base);path.style.setProperty("--polity-color",color)});document.querySelectorAll(`.country-flag[data-for="${id}"] image`).forEach(image=>{const b={x:Number(image.dataset.baseX),y:Number(image.dataset.baseY),width:Number(image.dataset.baseWidth),height:Number(image.dataset.baseHeight)};const cx=b.x+b.width/2,cy=b.y+b.height/2,sx=Number(settings.scaleX)||1,sy=Number(settings.scaleY)||1,ox=Number(settings.offsetX)||0,oy=Number(settings.offsetY)||0,rotation=Number(settings.rotation)||0;image.setAttribute("transform",`translate(${cx+ox} ${cy+oy}) rotate(${rotation}) scale(${sx} ${sy}) translate(${-cx} ${-cy})`)});document.querySelectorAll(`.country-flag[data-for="${id}"] .flag-fill`).forEach(fill=>{const color=settings.flagFill||"transparent";fill.setAttribute("fill",color);fill.style.setProperty("fill",color,"important")})}
function clearFlagLayer(){document.querySelectorAll(".flag-layer").forEach(layer=>layer.remove());const defs=dom.map.querySelector("defs"),oldPatterns=defs?.querySelector("#flagPatterns");if(oldPatterns)oldPatterns.remove()}
function flagGeometryFor(path){const d=path.getAttribute("d")||"",cutoutCount=Number(path.dataset.cutoutCount)||0;if(cutoutCount||path.dataset.transform||path.dataset.sourceId==="hejaz"){const b=path.getBBox();return b.width&&b.height?[{d,box:b,fillRule:path.getAttribute("fill-rule")||"evenodd"}]:[]}return flagPathParts(d).map(part=>({d:part,box:pathDataBox(part),fillRule:"nonzero"})).filter(item=>item.box&&item.box.width>0&&item.box.height>0)}
function createFlagLayer(id,y){const paths=activeCountries().filter(candidate=>candidate.dataset.id===id);if(!paths.length)return;const ns="http://www.w3.org/2000/svg",root=realMode?dom.realRoot:dom.schematicRoot,defs=dom.map.querySelector("defs"),patterns=document.createElementNS(ns,"g");patterns.setAttribute("id","flagPatterns");defs.append(patterns);const layer=document.createElementNS(ns,"g"),asset=flagAssetFor(id,y);layer.classList.add("flag-layer");layer.dataset.for=id;layer.dataset.flagKey=flagDebugKey(id,y);layer.setAttribute("aria-hidden","true");if(id==="ottoman"&&paths.some(path=>path.dataset.cutoutPaths))layer.setAttribute("mask","url(#ottomanCutoutMask)");let geometryIndex=0;paths.forEach(path=>{flagGeometryFor(path).forEach(geometry=>{const index=geometryIndex++,clipId=`activeFlagClip-${id}-${index}`;const clip=document.createElementNS(ns,"clipPath");clip.setAttribute("id",clipId);clip.setAttribute("clipPathUnits","userSpaceOnUse");const clipPath=document.createElementNS(ns,"path");clipPath.setAttribute("d",geometry.d);clipPath.setAttribute("fill-rule",geometry.fillRule);clip.append(clipPath);patterns.append(clip);const flag=document.createElementNS(ns,"g");flag.classList.add("country-flag");flag.dataset.for=id;flag.dataset.part=String(index);flag.dataset.flagKey=flagDebugKey(id,y);flag.dataset.flagFile=asset.file;flag.dataset.flagPeriod=asset.period;flag.dataset.flagSource=asset.source;if(path.dataset.transform)flag.setAttribute("transform",path.dataset.transform);flag.setAttribute("clip-path",`url(#${clipId})`);const fill=document.createElementNS(ns,"path");fill.classList.add("flag-fill");fill.setAttribute("d",geometry.d);fill.setAttribute("fill-rule",geometry.fillRule);fill.setAttribute("fill","transparent");fill.style.setProperty("fill","transparent","important");fill.setAttribute("pointer-events","none");flag.append(fill);const image=document.createElementNS(ns,"image"),b=geometry.box;image.setAttribute("x",b.x);image.setAttribute("y",b.y);image.setAttribute("width",Math.max(2,b.width));image.setAttribute("height",Math.max(2,b.height));image.dataset.baseX=String(b.x);image.dataset.baseY=String(b.y);image.dataset.baseWidth=String(Math.max(2,b.width));image.dataset.baseHeight=String(Math.max(2,b.height));image.setAttribute("preserveAspectRatio","xMidYMid slice");image.setAttribute("href",asset.path);image.setAttributeNS("http://www.w3.org/1999/xlink","href",asset.path);image.setAttribute("role","presentation");flag.append(image);layer.append(flag)})});root.append(layer);applyFlagDebugSettings(id,y);requestAnimationFrame(()=>{if(!layer.isConnected||activeFlagId!==id)return;void layer.getBoundingClientRect();layer.querySelectorAll(".country-flag").forEach(flag=>flag.classList.add("active-flag"))})}
const _createFlagLayerWithCountryRoot=createFlagLayer;
createFlagLayer=function(id,y){_createFlagLayerWithCountryRoot(id,y);const layer=[...document.querySelectorAll(".flag-layer")].find(candidate=>candidate.dataset.for===id);if(layer&&dom.flagLayer){layer.setAttribute("pointer-events","none");dom.flagLayer.append(layer)}}
function syncFlags(y){clearFlagLayer();if(activeFlagId&&selected!==activeFlagId&&activeCountries().some(path=>path.dataset.id===activeFlagId))createFlagLayer(activeFlagId,y)}
function clearHoverVisuals(){activeFlagId=null;clearFlagLayer();document.querySelectorAll(".map-labels text.hovered").forEach(node=>{node.classList.remove("hovered");node.style.transform=""})}
function setHoverState(id,on){if(timer)return;const locked=selected===id,path=activeCountries().find(candidate=>candidate.dataset.id===id);if(on&&!locked){if(activeFlagId===id)return;activeFlagId=id;clearFlagLayer();createFlagLayer(id,Number(dom.year.value));}else if(!on&&activeFlagId===id){activeFlagId=null;clearFlagLayer()}if(path&&locked)path.classList.add("detail-static")}
function polityAt(id,y){
  if(id==="ottoman")return "ottoman";
  if(id==="turkey")return "turkey";
  if(id==="morocco-spanish")return y<1956?"spanish-empire":"morocco";
  if(["syria","lebanon","palestine","jordan","iraq"].includes(id)&&y<=1917)return"ottoman";
  if(id==="syria"||id==="lebanon")return y<=1945?"french-empire":id;
  if(id==="gaza-strip")return y<1967?"egypt":y<1988?"israel":y<2007?"palestine":"gaza-hamas";
  if(id==="west-bank")return y<1967?"jordan":y<1988?"israel":y<2007?"palestine":"west-bank-pa";
  if(id==="palestine"||id==="jordan")return y<=1948?"british-empire":id;
  if(id==="iraq")return y<=1931?"british-empire":"iraq";
  if(id==="algeria")return y<1830?"ottoman":y<1962?"french-empire":"algeria";
  if(id==="tunisia")return y<1881?"ottoman":y<1956?"french-empire":"tunisia";
  if(id==="libya")return y<1912?"ottoman":y<1943?"italian-empire":y<1951?"british-empire":"libya";
  if(id==="egypt")return y<1805?"ottoman":y<1882?"muhammad-ali":y<1922?"british-empire":"egypt";
  if(id==="sudan")return y<1821?"sudan-sultanates":y<1885?"muhammad-ali":y<1899?"mahdi":y<1956?"british-empire":"sudan";
  if(id==="morocco")return y<1912?"morocco":y<1956?"french-empire":"morocco";
  if(id==="golan-heights")return y<1918?"ottoman":y<1946?"french-empire":y<1967?"syria":"israel";
  if(id==="sinai-peninsula")return y<1882?"ottoman":y<1956?"egypt":y<=1957?"israel":y<1967?"egypt":y<=1979?"israel":"egypt";
  if(id==="arabian-dispute"||id==="saudi-yemen-dispute")return"arabian-polities";
  if(id==="western-sahara")return y<1884?"sahrawi-polities":y<1976?"spanish-empire":"western-sahara";
  if(id==="iran")return y<=1924?"qajar":y<=1978?"pahlavi":"iran";
  if(id==="saudi")return y>=1932?"saudi":"arabian-polities";
  if(id==="hejaz")return y<=1916?"ottoman":y<=1925?"hejaz":"arabian-polities";
  if(id==="shammar")return"shammar";
  if(id==="najd")return y<1902?"najd-tribal":"najd";
  if(id==="kuwait")return y<1899?"ottoman":y<1961?"british-empire":"kuwait";
  if(id==="qatar")return y>=1916&&y<1971?"british-empire":"qatar";
  if(id==="uae")return y>=1892&&y<1971?"british-empire":"uae";
  if(id==="yemen-north")return y<1918?"ottoman":y<1990?"yemen-north":"yemen";
  if(id==="yemen-south")return y<1967?"british-empire":y<1990?"yemen-south":"yemen";
  if(id==="yemen")return y<1990?"yemen-divided":"yemen";
  return id;
}
