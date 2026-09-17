/* Core data, DOM bindings, state, shared helpers, and map-mode setup. */
const meta={
morocco:["摩洛哥",["北部","菲斯","马拉喀什","苏斯"]],"morocco-spanish":["西属摩洛哥",["里夫","北部保护地"]],"western-sahara":["西撒哈拉",["萨基亚-哈姆拉","达赫拉"]],algeria:["阿尔及利亚",["奥兰","阿尔及尔","君士坦丁","撒哈拉"]],tunisia:["突尼斯",["突尼斯","萨赫勒","南部"]],libya:["利比亚",["的黎波里塔尼亚","昔兰尼加","费赞"]],egypt:["埃及",["下埃及","上埃及","西奈","努比亚"]],sudan:["苏丹",["喀土穆","达尔富尔","科尔多凡","东部"]],turkey:["土耳其",["安纳托利亚西部","安纳托利亚中部","黑海","东部"]],syria:["叙利亚",["阿勒颇","大马士革","沿海","幼发拉底河谷"]],lebanon:["黎巴嫩",["贝鲁特","黎巴嫩山","贝卡"]],israel:["以色列",["北部区","中央区","南部区"]],palestine:["巴勒斯坦",["约旦河西岸","加沙"]],jordan:["约旦",["北部","安曼","南部"]],iraq:["伊拉克",["摩苏尔","巴格达","巴士拉","库尔德地区"]],iran:["伊朗",["阿塞拜疆","里海地区","中央高原","胡齐斯坦","呼罗珊"]],kuwait:["科威特",["科威特城","外围地区"]],saudi:["沙特阿拉伯",["汉志","内志","东部省","阿西尔"]],hejaz:["汉志",["麦加","麦地那","红海沿岸"]],shammar:["舍迈尔",["海勒","北内志","沙马尔沙漠"]],najd:["内志",["利雅得","卡西姆","东部绿洲"]],qatar:["卡塔尔",["多哈","北部"]],uae:["阿联酋",["阿布扎比","迪拜","北部酋长国"]],oman:["阿曼",["马斯喀特","内地","佐法尔"]],"yemen-north":["北也门",["萨那","蒂哈马"]],"yemen-south":["南也门",["亚丁","哈德拉毛"]],yemen:["也门",["萨那","蒂哈马","亚丁","哈德拉毛"]],bahrain:["巴林",["麦纳麦","穆哈拉格"]]};
// Ottoman is deliberately a separate map tag from the post-1923 Turkish republic.
meta.ottoman=["奥斯曼帝国",["安纳托利亚","叙利亚","美索不达米亚","阿拉伯行省"]];
// Gaza and the West Bank become independently selectable map entities from
// the 1949 armistice period onward. Their shared Palestinian detail is
// resolved by sidebarEntityAt() for the 1988—2006 period.
Object.assign(meta,{"gaza-strip":["加沙地带",["加沙市","汗尤尼斯","拉法"]],"west-bank":["约旦河西岸",["东耶路撒冷","拉姆安拉","纳布卢斯","希伯伦"]]});
Object.assign(meta,{"golan-heights":["戈兰高地",["库奈特拉省","北戈兰","赫尔蒙山"]],"sinai-peninsula":["西奈半岛",["北西奈","南西奈","苏伊士湾"]],"arabian-dispute":["汉志—内志争议区",["汉志东缘","北内志"]],"saudi-yemen-dispute":["沙特—也门争议带",["阿西尔","吉赞","纳季兰"]]});
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
hejaz:[[1886,1916,"汉志奥斯曼保护体制","麦加谢里夫在奥斯曼宗主权下治理汉志，朝觐城市与红海港口保持高度地方自治。","麦加","奥斯曼保护体制"],[1917,1925,"汉志王国","阿拉伯起义后，侯赛因·本·阿里在汉志建立王国，1925年被内志力量征服。","麦加","哈希姆王国"]],
shammar:[[1886,1921,"舍迈尔酋长国","以海勒为中心的贾巴尔·舍迈尔酋长国是北内志的主要地方政权，1921年并入内志。","海勒","酋长国"]],
najd:[[1886,1901,"内志部落与绿洲酋长国","利雅得、卡西姆与东部绿洲由多个部落和城镇政权控制，尚不存在沙特阿拉伯王国。","利雅得","部落／酋长国"],[1902,1931,"内志苏丹国与汉志—内志王国","伊本·沙特自1902年重建利雅得政权，随后扩张并在1927年改称汉志与内志王国。","利雅得","苏丹国／王国"]],
libya:[[1797,1911,"奥斯曼的黎波里塔尼亚","卡拉曼里王朝和其后的奥斯曼直接统治覆盖沿海，内陆控制程度不一。","的黎波里","奥斯曼属地"],[1912,1950,"意属利比亚及战后托管","意大利殖民统治遭长期抵抗，第二次世界大战后由英法分别管理。","的黎波里","殖民地／托管地"],[1951,1968,"利比亚联合王国","昔兰尼加、的黎波里塔尼亚和费赞联合组成独立王国。","的黎波里／班加西","君主制"],[1969,2026,"利比亚共和国及其后继政权","卡扎菲政权于1969年建立；2011年后国家进入政治分裂和重建进程。","的黎波里","共和国"]],
sudan:[[1797,1820,"丰吉苏丹国及地方政权","青尼罗河流域的森纳苏丹国与西部达尔富尔苏丹国等并存。","森纳","苏丹国"],[1821,1955,"埃及—英国统治时期","埃及征服后经历马赫迪国家和英埃共管苏丹。","喀土穆","共管／殖民统治"],[1956,2026,"苏丹共和国","独立后多次经历军政更替和内战；2011年南苏丹独立。","喀土穆","共和国"]],
  palestine:[[1797,1917,"奥斯曼巴勒斯坦地区","该地区分属奥斯曼帝国多个行政单位，耶路撒冷后成为直接隶属中央的特殊区域。","耶路撒冷","奥斯曼属地"],[1918,1948,"英属巴勒斯坦托管地","英国依据国际联盟委任统治该地；年度快照中的 1920—1948 年仍按英国殖民／委任统治标注，不使用巴勒斯坦国或争议地区标签。","耶路撒冷","英国委任统治地"],[1949,2026,"以色列、巴勒斯坦领土与争议地区","1949年后形成多层次的国家、占领、自治与国际承认问题；展示需区分法理边界与实际控制。","耶路撒冷／拉姆安拉","多重政治地位"]]
};

// Reuse the historical regime prose/capital under the distinct Ottoman tag.
// The map tag is separate even though the source CShapes polygon is named
// `turkey` for the imperial period.
overrides.ottoman=overrides.turkey;

Object.assign(overrides,{"western-sahara":[[1797,1883,"萨赫拉威部落领地","西撒哈拉的部落与绿洲政权保持地方自治，后来的殖民边界尚未形成。","多地","萨赫拉威部落联盟"],[1884,1958,"西属撒哈拉","西班牙逐步建立对沿海据点和内陆名义领土的殖民控制。","维拉·西斯内罗斯／阿尤恩","西班牙殖民当局"],[1959,1975,"西属撒哈拉省","西班牙将该地区作为海外省管理，撒哈拉居民的民族自决问题持续存在。","阿尤恩","西班牙殖民当局"],[1976,2026,"西撒哈拉（争议地区）","西班牙撤出后，摩洛哥与波利萨里奥阵线分别控制部分区域；地位仍待最终解决。","阿尤恩／廷杜夫","摩洛哥当局／波利萨里奥阵线"]],"golan-heights":[[1797,1917,"奥斯曼叙利亚的戈兰地区","戈兰高地属于奥斯曼帝国叙利亚行省体系。","库奈特拉","奥斯曼总督"],[1918,1945,"法国委任统治下的戈兰地区","第一次世界大战后，戈兰高地纳入法国对叙利亚的委任统治范围。","库奈特拉","法国委任统治当局"],[1946,1966,"叙利亚戈兰高地","叙利亚独立后，戈兰高地是叙利亚共和国的一部分。","库奈特拉","叙利亚政府"],[1967,2026,"戈兰高地（以色列实际控制、叙利亚声索）","1967年后以色列控制戈兰高地；叙利亚仍主张该地区，联合国不承认以色列对其兼并。","库奈特拉／北戈兰","以色列实际控制当局／叙利亚声索"]],"sinai-peninsula":[[1797,1881,"奥斯曼埃及的西奈半岛","西奈半岛处于奥斯曼帝国埃及行省的边缘地带。","阿里什／苏伊士","奥斯曼埃及当局"],[1882,1955,"埃及的西奈半岛","英国控制埃及期间，西奈半岛仍作为埃及领土管理。","阿里什／苏伊士","埃及政府／英国控制"],[1956,1957,"西奈半岛（英法以占领）","苏伊士危机期间，以色列、英国和法国短暂进攻并占领西奈部分地区。","阿里什","以色列、英国与法国军事当局"],[1958,1967,"阿拉伯联合共和国的西奈半岛","埃及重新控制西奈半岛，1958—1961年名义上属于阿拉伯联合共和国。","阿里什／苏伊士","埃及政府"],[1968,1979,"西奈半岛（以色列占领、埃及声索）","1967年战争后以色列控制西奈半岛；1979年埃以和平条约后分阶段撤出，埃及恢复主权。","阿里什／苏伊士","以色列实际控制当局／埃及声索"],[1980,2026,"埃及西奈半岛","埃及恢复对西奈半岛的主权与行政管理。","阿里什／苏伊士","埃及政府"]],"arabian-dispute":[[1886,1925,"汉志—内志争议区","汉志谢里夫政权、舍迈尔和内志力量之间的边界在这一时期不断变化，阴影带仅表示未定界区域。","汉志东缘","地方政权与部落联盟"]],"saudi-yemen-dispute":[[1932,1932,"沙特—也门未定界争议带","塔伊夫条约前，阿西尔、吉赞和纳季兰相关边界尚未完成法理划定。","阿西尔／吉赞／纳季兰","沙特与也门地方当局"]]});

// The two post-mandate Palestinian map pieces share one national detail
// during the State of Palestine phase, then diverge after the June 2007
// Hamas takeover of Gaza. The 1967—1987 entries make the interim Israeli
// occupation explicit instead of silently retaining the 1949 labels.
overrides["gaza-strip"]=[
  [1949,1966,"加沙地带（埃及占领）","1949年停战线形成后，加沙地带由埃及管理；当地保留巴勒斯坦身份与独立行政安排。","加沙市","埃及军事管理下的巴勒斯坦地区"],
  [1967,1987,"加沙地带（以色列占领）","1967年战争后加沙地带转入以色列军事占领，原有埃及行政安排终止。","加沙市","以色列军事占领当局"],
  [2007,2026,"加沙地带（哈马斯控制）","2007年6月哈马斯在与法塔赫武装冲突后取得加沙地带事实控制，巴勒斯坦民族权力机构的治理中心转至约旦河西岸。","加沙市","哈马斯事实当局"]
];
overrides["west-bank"]=[
  [1949,1966,"约旦河西岸（约旦占领）","1949年停战线形成后，约旦管理并于1950年宣布将约旦河西岸并入王国；该并入未获广泛国际承认。","安曼／耶路撒冷","约旦哈希姆王室与政府"],
  [1967,1987,"约旦河西岸（以色列占领）","1967年战争后约旦河西岸转入以色列军事占领，约旦的行政统治终止。","耶路撒冷／拉姆安拉","以色列军事占领当局"],
  [2007,2026,"约旦河西岸（巴勒斯坦民族权力机构）","2007年后，巴勒斯坦民族权力机构以约旦河西岸为治理中心，法塔赫主导的行政体系与加沙的哈马斯事实当局分立。","拉姆安拉","法塔赫／巴勒斯坦民族权力机构"]
];

// The first fact in a country detail is political control, not a duplicate
// geographic label.  These time-bounded names intentionally use a party when
// one existed and otherwise the ruling house, military council or colonial
// authority that exercised power in the selected year.
const rulingGroups={
  // Party labels follow the party that formed the government or the elected
  // governing coalition; where elections were suspended or colonial rule
  // applied, the actual ruling house, military body or authority is shown.
  morocco:[[1797,1911,"阿拉维王室"],[1912,1955,"法国／西班牙保护国当局"],[1956,1963,"独立党（伊斯蒂克拉尔）／阿拉维王室"],[1964,1997,"阿拉维王室与王室支持联盟"],[1998,2002,"人民力量社会主义联盟（USFP）／王室联盟"],[2003,2011,"独立党（伊斯蒂克拉尔）／王室联盟"],[2011,2021,"正义与发展党（PJD）／王室联盟"],[2021,2026,"民族独立联盟（RNI）／王室联盟"]],
  "morocco-spanish":[[1886,1955,"西班牙殖民当局"],[1956,2026,"阿拉维王室"]],"western-sahara":[[1797,1883,"萨赫拉威部落联盟"],[1884,1975,"西班牙殖民当局"],[1976,2026,"波利萨里奥阵线／摩洛哥当局（分区控制）"]],"golan-heights":[[1797,1917,"奥斯曼总督"],[1918,1945,"法国委任统治当局"],[1946,1966,"叙利亚政府"],[1967,2026,"以色列实际控制当局／叙利亚声索"]],"sinai-peninsula":[[1797,1955,"埃及政府／英国控制"],[1956,1957,"以色列、英国与法国军事当局"],[1958,1967,"埃及政府"],[1968,1979,"以色列实际控制当局／埃及声索"],[1980,2026,"埃及政府"]],"arabian-dispute":[[1886,1925,"地方政权与部落联盟"]],"saudi-yemen-dispute":[[1932,1932,"沙特与也门地方当局"]],
  algeria:[[1797,1829,"奥斯曼摄政精英"],[1830,1961,"法国殖民当局"],[1962,1989,"民族解放阵线（FLN）"],[1990,1999,"民族解放阵线（FLN）／军方支持联盟"],[2000,2019,"民族解放阵线（FLN）／全国民主联盟（RND）"],[2020,2026,"民族解放阵线（FLN）／总统多数联盟"]],
  tunisia:[[1797,1880,"侯赛因王朝"],[1881,1955,"法国殖民当局"],[1956,1962,"新宪政党（Neo-Destour）"],[1963,1987,"社会主义宪政党（PSD）"],[1987,2011,"民主宪政联盟（RCD）"],[2011,2014,"临时民族团结政府"],[2014,2019,"突尼斯呼声党／伊斯兰复兴运动（联合执政）"],[2019,2026,"总统府与无党派内阁"]],
  libya:[[1797,1911,"卡拉曼里家族与奥斯曼总督"],[1912,1943,"意大利殖民当局"],[1943,1950,"英法军事管理当局"],[1951,1968,"塞努西王室"],[1969,1977,"革命指挥委员会"],[1977,2011,"阿拉伯社会主义联盟／革命领导层（无竞争性党争）"],[2011,2012,"全国过渡委员会（NTC）"],[2012,2014,"全国大会与地方政治联盟"],[2014,2021,"东西两地政府与地方武装联盟"],[2021,2026,"民族统一政府（GNU）／东部国民军联盟"]],
  egypt:[[1797,1804,"奥斯曼总督与马穆鲁克贝伊"],[1805,1881,"穆罕默德·阿里王室"],[1882,1921,"英国殖民当局"],[1922,1952,"华夫脱党／王室联盟"],[1953,1976,"自由军官组织／阿拉伯社会主义联盟"],[1977,2011,"国家民主党（NDP）"],[2011,2012,"武装部队最高委员会（SCAF）"],[2012,2013,"自由与正义党／穆斯林兄弟会"],[2013,2014,"军方临时政府"],[2014,2026,"总统府与军方支持联盟"]],
  sudan:[[1797,1820,"丰吉与达尔富尔苏丹王室"],[1821,1884,"穆罕默德·阿里王室"],[1885,1898,"安萨尔马赫迪国家"],[1899,1955,"英埃共管当局"],[1956,1958,"乌玛党／人民民主党联合政府"],[1958,1964,"最高委员会军事政权"],[1964,1969,"乌玛党／民主统一党联合政府"],[1969,1985,"苏丹社会主义联盟／尼迈里政权"],[1986,1989,"乌玛党联合政府"],[1989,2018,"民族伊斯兰阵线／全国大会党"],[2019,2026,"主权委员会与文官联盟"]],
  ottoman:[[1797,1922,"奥斯曼王室（奥斯曼家族）"]],
  turkey:[[1923,1945,"共和人民党（CHP）"],[1946,1960,"民主党（DP）"],[1961,1965,"共和人民党／联合政府"],[1965,1971,"正义党（AP）"],[1971,1973,"军方支持的超党派政府"],[1973,1979,"共和人民党（CHP）／联合政府"],[1979,1980,"正义党／民族主义联盟"],[1980,1983,"国家安全委员会军政当局"],[1983,1991,"祖国党（ANAP）"],[1991,1996,"正道党（DYP）／联合政府"],[1996,1997,"福利党（RP）／正道党联合政府"],[1997,1999,"祖国党／民主左翼党联合政府"],[1999,2002,"民主左翼党（DSP）／民族主义行动党（MHP）／祖国党"],[2002,2026,"正义与发展党（AKP）"]],
  syria:[[1797,1917,"奥斯曼总督与地方精英"],[1918,1945,"法国委任统治当局"],[1946,1957,"民族党／人民党议会联盟"],[1958,1961,"阿拉伯社会主义联盟（阿联）"],[1961,1963,"无党派过渡政府／复兴党崛起"],[1963,2024,"阿拉伯复兴社会党（叙利亚）"],[2025,2026,"叙利亚过渡政府"]],
  lebanon:[[1797,1917,"奥斯曼地方精英"],[1920,1943,"法国委任统治当局"],[1943,1975,"黎巴嫩民族集团／教派政治联盟"],[1975,1990,"内战时期的教派武装联盟"],[1990,2005,"叙利亚支持的议会联盟"],[2005,2026,"3·14／8·14联盟与真主党—阿迈勒联盟"]],
  israel:[[1948,1968,"以色列地工人党（马派，Mapai）"],[1969,1977,"工党联盟（Alignment）"],[1977,1984,"利库德集团（Likud）"],[1984,1988,"利库德集团／以色列工党（民族团结轮换政府）"],[1988,1992,"利库德集团（Likud）"],[1992,1996,"以色列工党／一以色列联盟（One Israel）"],[1996,1999,"利库德集团（Likud）"],[1999,2001,"以色列工党／一以色列联盟（One Israel）"],[2001,2005,"利库德集团（Likud）"],[2005,2006,"前进党（Kadima）／过渡政府"],[2006,2009,"前进党（Kadima）"],[2009,2021,"利库德集团（Likud）"],[2021,2022,"有未来党／亚米娜党（轮换联合政府）"],[2022,2026,"利库德集团（Likud）"]],
  palestine:[[1797,1917,"奥斯曼总督"],[1918,1948,"英国委任统治当局"],[1949,1993,"巴解组织／法塔赫"],[1994,2005,"法塔赫／巴勒斯坦民族权力机构"],[2006,2026,"法塔赫（西岸）／哈马斯（加沙）分治"]],jordan:[[1797,1917,"奥斯曼总督"],[1918,2026,"哈希姆王室"]],
  iraq:[[1797,1917,"奥斯曼总督与地方贵族"],[1918,1958,"哈希姆王室"],[1958,1963,"自由军官组织／共和国政府"],[1963,1968,"阿拉伯复兴社会党（伊拉克）／军政委员会"],[1968,2003,"阿拉伯复兴社会党（伊拉克）"],[2003,2026,"议会联盟与总理内阁"]],
  iran:[[1797,1905,"卡扎尔王室"],[1906,1925,"立宪派／卡扎尔王室"],[1925,1979,"巴列维王室"],[1979,1989,"伊斯兰共和党／教士集团"],[1989,2026,"保守派与改革派总统联盟／最高领袖办公室"]],
  kuwait:[[1797,1898,"萨巴赫酋长家族（奥斯曼宗主权下）"],[1899,1960,"萨巴赫酋长家族／英国保护关系"],[1961,2026,"萨巴赫王室"]],saudi:[[1797,1817,"沙特家族"],[1818,1931,"内志部落联盟与地方酋长"],[1932,2026,"沙特王室"]],hejaz:[[1886,1916,"麦加谢里夫与奥斯曼宗主权"],[1917,1925,"哈希姆王室"]],shammar:[[1886,1921,"拉希德王室（贾巴尔·舍迈尔）"]],najd:[[1886,1901,"内志部落与绿洲酋长"],[1902,1931,"沙特家族／伊本·沙特王室"]],qatar:[[1797,2026,"阿勒萨尼王室"]],uae:[[1797,1970,"特鲁西尔酋长家族"],[1971,2026,"阿布扎比与迪拜等酋长家族"]],oman:[[1797,2026,"阿勒赛义德王室与伊玛目集团"]],
  "yemen-north":[[1797,1918,"扎伊迪伊玛目／卡西姆王朝"],[1918,1962,"穆塔瓦基利特王室"],[1962,1978,"共和指挥委员会"],[1978,1990,"全国人民大会（GPC）／总统联盟"]],"yemen-south":[[1886,1967,"英国殖民当局"],[1967,1978,"民族解放阵线（NLF）"],[1978,1990,"也门社会党"]],yemen:[[1990,1993,"全国人民大会（GPC）／伊斯兰改革集团（JMP）联合"],[1994,2011,"全国人民大会（GPC）"],[2012,2014,"过渡政府与全国对话联盟"],[2015,2026,"总统领导委员会／国际承认政府与胡塞当局分治"]],bahrain:[[1797,2026,"阿勒哈利法王室"]]
};
Object.assign(rulingGroups,{palestine:[[1797,1917,"奥斯曼总督"],[1918,1948,"英国委任统治当局"],[1949,1993,"巴解组织／法塔赫"],[1994,2005,"法塔赫／巴勒斯坦民族权力机构"],[2006,2006,"哈马斯胜选后的联合政府／法塔赫总统体系"],[2007,2026,"法塔赫（西岸）／哈马斯（加沙）分治"]],"gaza-strip":[[1949,1966,"埃及军事管理当局"],[1967,1987,"以色列军事占领当局"],[2007,2026,"哈马斯（加沙事实当局）"]],"west-bank":[[1949,1966,"约旦哈希姆王室／约旦政府"],[1967,1987,"以色列军事占领当局"],[2007,2026,"法塔赫／巴勒斯坦民族权力机构"]]});
const sidebarEntityAt=(id,y)=>(["gaza-strip","west-bank"].includes(id)&&y>=1988&&y<=2006)?"palestine":id;
const rulingGroupAt=(id,y)=>{const detailId=sidebarEntityAt(id,y),hit=(rulingGroups[detailId]||[]).find(([from,to])=>y>=from&&y<=to);return hit?.[2]||"地方统治集团"};
const $=s=>document.querySelector(s),dom={year:$("#yearRange"),yearText:$("#yearText"),play:$("#playButton"),title:$("#mapTitle"),selectedLabel:$("#selectedLabel"),map:$("#menaMap"),schematicRoot:$("#countries"),realRoot:$("#realCountries"),schematicCountries:[...document.querySelectorAll("#countries path")],realCountries:[],labels:$("#labels"),regionLines:$("#regionLines"),frontierOverlays:$("#frontierOverlays"),historyConnectors:$("#historyConnectors"),panelKicker:$("#panelKicker"),polityName:$("#polityName"),polityNative:$("#polityNative"),badge:$("#eraBadge"),facts:$("#facts"),summaryHeading:$("#summaryHeading"),summary:$("#summary"),eventList:$("#eventList"),eventCount:$("#eventCount"),source:$("#boundarySource"),overview:$("#overviewButton"),brand:$("#brandButton"),about:$("#aboutButton"),dialog:$("#aboutDialog"),close:$("#dialogClose"),confirm:$("#dialogConfirm"),jump:$("#jumpButton"),flagDebugButton:$("#flagDebugButton"),flagDebugDialog:$("#flagDebugDialog"),flagDebugClose:$("#flagDebugClose"),flagDebugScaleX:$("#flagDebugScaleX"),flagDebugScaleY:$("#flagDebugScaleY"),flagDebugOffsetX:$("#flagDebugOffsetX"),flagDebugOffsetY:$("#flagDebugOffsetY"),flagDebugRotation:$("#flagDebugRotation"),flagDebugColor:$("#flagDebugColor"),flagDebugSave:$("#flagDebugSave"),flagDebugReset:$("#flagDebugReset"),flagDebugExport:$("#flagDebugExport"),flagDebugStatus:$("#flagDebugStatus"),flagDebugCurrent:$("#flagDebugCurrent"),flagDebugPreview:$("#flagDebugPreview"),boundaryDebugLayer:$("#boundaryDebugLayer"),boundaryDebugButton:$("#boundaryDebugButton"),boundaryDebugDialog:$("#boundaryDebugDialog"),boundaryDebugClose:$("#boundaryDebugClose"),boundaryDebugFile:$("#boundaryDebugFile"),boundaryDebugImport:$("#boundaryDebugImport"),boundaryDebugConfigImportButton:$("#boundaryDebugConfigImportButton"),boundaryDebugConfigFile:$("#boundaryDebugConfigFile"),boundaryDebugTarget:$("#boundaryDebugTarget"),boundaryDebugCurrent:$("#boundaryDebugCurrent"),boundaryDebugScaleX:$("#boundaryDebugScaleX"),boundaryDebugScaleXNumber:$("#boundaryDebugScaleXNumber"),boundaryDebugScaleY:$("#boundaryDebugScaleY"),boundaryDebugScaleYNumber:$("#boundaryDebugScaleYNumber"),boundaryDebugOffsetX:$("#boundaryDebugOffsetX"),boundaryDebugOffsetXNumber:$("#boundaryDebugOffsetXNumber"),boundaryDebugOffsetY:$("#boundaryDebugOffsetY"),boundaryDebugOffsetYNumber:$("#boundaryDebugOffsetYNumber"),boundaryDebugRotation:$("#boundaryDebugRotation"),boundaryDebugRotationNumber:$("#boundaryDebugRotationNumber"),boundaryDebugOpacity:$("#boundaryDebugOpacity"),boundaryDebugOpacityNumber:$("#boundaryDebugOpacityNumber"),boundaryDebugSave:$("#boundaryDebugSave"),boundaryDebugReset:$("#boundaryDebugReset"),boundaryDebugDelete:$("#boundaryDebugDelete"),boundaryDebugExportSvg:$("#boundaryDebugExportSvg"),boundaryDebugExportPaths:$("#boundaryDebugExportPaths"),boundaryDebugExportAllSvg:$("#boundaryDebugExportAllSvg"),boundaryDebugExport:$("#boundaryDebugExport"),boundaryDebugStatus:$("#boundaryDebugStatus")};
Object.assign(dom,{mapStage:$("#mapStage"),flagDebugFill:$("#flagDebugFill")});
let selected=null,activeFlagId=null,timer=null,realMode=false,boundaryKey="";
const BOUNDARY_DEBUG_STORAGE="menaBoundaryDebugV2";
const boundaryDebugDefaults={scaleX:1,scaleY:1,offsetX:0,offsetY:0,rotation:0,opacity:.72};
let boundaryDebugTransforms={},boundaryDebugImported=[],boundaryDebugReplacements={},boundaryDebugDrafts={},boundaryDebugTarget="",boundaryDebugGeometryCache={},boundaryDebugFeatureCache={};
const eraFor=y=>eras.find(e=>y>=e.from&&y<=e.to)||eras.at(-1);const countryEra=(id,y)=>(overrides[id]||[]).find(([a,b])=>y>=a&&y<=b);
const historicalBoundaryYear=y=>y>=1886&&y<=1999;
const realBoundaryYear=y=>y>=1886;
// Keep each historical period's viewport lifecycle independent.  The old
// `schematic` key reused one DOM/viewBox for 1797—1885, so a preceding zoom or
// a long title could make the next period appear wider than its peers.
const boundaryKeyFor=y=>{const replacement=typeof boundaryDebugHasReplacementForYear==="function"&&boundaryDebugHasReplacementForYear(y);return historicalBoundaryYear(y)?`historical-${y}`:y>=2000?`modern${replacement?`-replacement-${y}`:""}`:`schematic-${eraFor(y).from}`};
function eventCards(events){return events.map(([y,n,d,p])=>`<a class="event-card" href="${wiki(p||n)}" target="_blank" rel="noopener noreferrer" aria-label="${n} · 维基百科"><span class="event-year">${y}</span><span><h4>${n}</h4><p>${d}</p></span><span class="event-arrow" title="打开维基百科" aria-hidden="true">↗</span></a>`).join("")}
function activeCountries(){return realMode?dom.realCountries:dom.schematicCountries}
function clearMapState(){activeFlagId=null;dom.map.setAttribute("viewBox","0 0 1080 650");[...dom.schematicCountries,...dom.realCountries].forEach(p=>p.classList.remove("selected","dimmed","detail-static"));clearHoverVisuals();dom.regionLines.classList.remove("visible");dom.regionLines.innerHTML="";if(dom.frontierOverlays)dom.frontierOverlays.innerHTML="";if(dom.historyConnectors)dom.historyConnectors.innerHTML=""}
 function setMapMode(y){const next=realBoundaryYear(y),key=boundaryKeyFor(y),changed=next!==realMode,boundaryChanged=key!==boundaryKey;if(changed||boundaryChanged){selected=null;clearMapState();if(next&&boundaryChanged)dom.realRoot.classList.add("updating");else dom.realRoot.classList.remove("updating")}realMode=next;if(next&&boundaryChanged)buildBoundaryMap(y);boundaryKey=key;dom.map.classList.toggle("real-mode",next);dom.schematicRoot.style.display=next?"none":"";dom.realRoot.style.display=next?"":"none";dom.source.innerHTML=historicalBoundaryYear(y)?'1886—1999年边界采用 <a href="https://icr.ethz.ch/data/cshapes/" target="_blank" rel="noopener noreferrer">CShapes 2.0</a> 的历史有效期区间，并按每年1月1日生成年度快照；同一年份的过渡记录已裁决为唯一 cohort，同一 cohort 的多块合法领土合并；西属摩洛哥、北也门与西撒哈拉缺口采用明确标注的历史上下文补全；1886—1931年阿拉伯半岛改用 <a href="https://github.com/opengulf/ottoman-map" target="_blank" rel="noopener noreferrer">OpenGulf Harita 93677 QGIS 图层</a>，并以 <a href="https://commons.wikimedia.org/wiki/File:Arabia_1914.png" target="_blank" rel="noopener noreferrer">1914 年阿拉伯半岛政治地图</a> 与 <a href="https://www.loc.gov/item/a22000920/" target="_blank" rel="noopener noreferrer">《Arabia》（1920）</a> 交叉校核汉志、舍迈尔和内志，替代现代沙特轮廓。':y>=2000?'2000—2026年地图采用 <a href="https://www.naturalearthdata.com/downloads/50m-cultural-vectors/" target="_blank" rel="noopener noreferrer">Natural Earth 5.1.1</a> 的1:50m现代国界参考图层；西撒哈拉与巴勒斯坦单独标示。':'1797—1885年为历史时期概略示意，不作为领土主张或学术地图引用。';if(y===1932&&historicalBoundaryYear(y))dom.source.insertAdjacentHTML("beforeend",' <span class="frontier-note">1932年沙特—也门边界在塔伊夫条约前尚未完成法理划定，阴影带表示阿西尔、吉赞与纳季兰相关争议区。</span>');if(changed||boundaryChanged||!dom.labels.children.length)createLabels()}
const _setMapModeWithFrontierOverlay=setMapMode;
setMapMode=function(y){_setMapModeWithFrontierOverlay(y);renderFrontierOverlays(y)};
 function render(){const y=+dom.year.value,e=eraFor(y),visibleEvents=selected?eventsFor(selected,y):e.events;setMapMode(y);dom.title.textContent=realMode?`${y}年中东与北非国家边界`:e.map;dom.yearText.textContent=y;dom.year.style.setProperty("--progress",`${(y-1797)/229*100}%`);if(!selected){dom.summaryHeading.textContent="历史概述";dom.selectedLabel.textContent="区域总览";dom.panelKicker.textContent=`${y} · REGIONAL OVERVIEW`;dom.polityName.textContent=e.title;dom.polityNative.textContent=e.native;dom.badge.textContent=e.badge;dom.summary.textContent=e.summary;dom.facts.innerHTML=`<div><span>区域格局</span><strong>${e.title}</strong></div><div><span>观察年份</span><strong>${y}</strong></div><div><span>地图状态</span><strong>${historicalBoundaryYear(y)?"CShapes 年度边界":realMode?"GIS 国界快照":"年度示意快照"}</strong></div>`}else{const m=meta[selected],o=countryEra(selected,y);dom.summaryHeading.innerHTML="政权概述 <span>REGIME</span>";dom.selectedLabel.textContent=m[0];dom.panelKicker.textContent=`${y} · ${selected.toUpperCase()}`;dom.polityName.textContent=o?.[2]||`${m[0]} · ${e.badge}`;dom.polityNative.textContent=m[0];dom.badge.textContent=e.badge;dom.summary.textContent=o?.[3]||`在${y}年的区域格局中，${m[0]}处于“${e.title}”这一历史阶段。地图使用该年度边界图层展示其空间位置。`;dom.facts.innerHTML=`<div><span>地区</span><strong>${m[0]}</strong></div><div><span>首府／政治中心</span><strong>${o?.[4]||"见该年史料"}</strong></div><div><span>政权性质</span><strong>${o?.[5]||"主权国家／政治实体"}</strong></div>`}dom.eventList.innerHTML=eventCards(visibleEvents);dom.eventCount.textContent=`${visibleEvents.length} 项`;historicalStyles(y);syncFlags(y);if(realMode){if(dom.realRoot.classList.contains("updating"))requestAnimationFrame(()=>{if(realMode&&boundaryKey===boundaryKeyFor(+dom.year.value))dom.realRoot.classList.remove("updating")})}else dom.realRoot.classList.remove("updating")}
const mapColors=["#9d4035","#486f78","#b0792f","#655782","#4f755e","#a05262","#516987","#8d653d","#35706b","#7b4d58","#74763c","#35678a","#a65d37","#5d7050","#8a4f76","#54637b","#9b713e","#3f786f","#765c42","#6d5680","#99604a","#60754c"];
// Keep each historical polity on one stable colour across every yearly
// snapshot.  Ottoman and Turkish republican colours are intentionally
// different keys even though the modern map uses the same geographic area.
const POLITY_COLORS={
  ottoman:"#8eb785",turkey:"#315f66", "spanish-empire":"#b0792f",morocco:"#9d4035",
  "french-empire":"#5b69b9", "british-empire":"#bf7d87",iraq:"#a05262",algeria:"#4f755e",
  tunisia:"#8d653d", "italian-empire":"#7b4d58",libya:"#74763c", "muhammad-ali":"#35678a",
  egypt:"#a65d37", "sudan-sultanates":"#60754c",mahdi:"#6d5680",sudan:"#3f786f",
  "sahrawi-polities":"#99604a", "western-sahara":"#8a4f76",qajar:"#54637b",pahlavi:"#9b713e",
  iran:"#765c42",saudi:"#4d7c69", "arabian-polities":"#b06f3e",hejaz:"#9a5a35",
  shammar:"#99604a", "najd-tribal":"#8d653d",najd:"#3f786f",kuwait:"#516987",
  qatar:"#35706b",uae:"#5d7050", "yemen-north":"#6d5680", "yemen-south":"#7f4f58",
  yemen:"#a04d3f", "yemen-divided":"#a65d37"
};
function stablePolityColor(polity){
  if(POLITY_COLORS[polity])return POLITY_COLORS[polity];
  let hash=0;for(const char of String(polity||""))hash=(hash*31+char.charCodeAt(0))>>>0;
  return mapColors[hash%mapColors.length];
}
Object.assign(POLITY_COLORS,{palestine:"#7b4d58","gaza-hamas":"#6d5680","west-bank-pa":"#4f755e"});
const FLAG_DIR="assets/flags/";
