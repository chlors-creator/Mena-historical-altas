const meta={
morocco:["摩洛哥",["北部","菲斯","马拉喀什","苏斯"]],"morocco-spanish":["西属摩洛哥",["里夫","北部保护地"]],"western-sahara":["西撒哈拉",["萨基亚-哈姆拉","达赫拉"]],algeria:["阿尔及利亚",["奥兰","阿尔及尔","君士坦丁","撒哈拉"]],tunisia:["突尼斯",["突尼斯","萨赫勒","南部"]],libya:["利比亚",["的黎波里塔尼亚","昔兰尼加","费赞"]],egypt:["埃及",["下埃及","上埃及","西奈","努比亚"]],sudan:["苏丹",["喀土穆","达尔富尔","科尔多凡","东部"]],turkey:["土耳其",["安纳托利亚西部","安纳托利亚中部","黑海","东部"]],syria:["叙利亚",["阿勒颇","大马士革","沿海","幼发拉底河谷"]],lebanon:["黎巴嫩",["贝鲁特","黎巴嫩山","贝卡"]],israel:["以色列",["北部区","中央区","南部区"]],palestine:["巴勒斯坦",["约旦河西岸","加沙"]],jordan:["约旦",["北部","安曼","南部"]],iraq:["伊拉克",["摩苏尔","巴格达","巴士拉","库尔德地区"]],iran:["伊朗",["阿塞拜疆","里海地区","中央高原","胡齐斯坦","呼罗珊"]],kuwait:["科威特",["科威特城","外围地区"]],saudi:["沙特阿拉伯",["汉志","内志","东部省","阿西尔"]],hejaz:["汉志",["麦加","麦地那","红海沿岸"]],shammar:["舍迈尔",["海勒","北内志","沙马尔沙漠"]],najd:["内志",["利雅得","卡西姆","东部绿洲"]],qatar:["卡塔尔",["多哈","北部"]],uae:["阿联酋",["阿布扎比","迪拜","北部酋长国"]],oman:["阿曼",["马斯喀特","内地","佐法尔"]],"yemen-north":["北也门",["萨那","蒂哈马"]],"yemen-south":["南也门",["亚丁","哈德拉毛"]],yemen:["也门",["萨那","蒂哈马","亚丁","哈德拉毛"]],bahrain:["巴林",["麦纳麦","穆哈拉格"]]};
// Ottoman is deliberately a separate map tag from the post-1923 Turkish republic.
meta.ottoman=["奥斯曼帝国",["安纳托利亚","叙利亚","美索不达米亚","阿拉伯行省"]];
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
palestine:[[1797,1917,"奥斯曼巴勒斯坦地区","该地区分属奥斯曼帝国多个行政单位，耶路撒冷后成为直接隶属中央的特殊区域。","耶路撒冷","奥斯曼属地"],[1918,1947,"英属巴勒斯坦托管地","英国依据国际联盟委任统治该地，阿拉伯与犹太民族运动矛盾加深。","耶路撒冷","委任统治"],[1948,2026,"以色列、巴勒斯坦领土与争议地区","1948年后形成多层次的国家、占领、自治与国际承认问题；展示需区分法理边界与实际控制。","耶路撒冷／拉姆安拉","多重政治地位"]]
};

// Reuse the historical regime prose/capital under the distinct Ottoman tag.
// The map tag is separate even though the source CShapes polygon is named
// `turkey` for the imperial period.
overrides.ottoman=overrides.turkey;

// The first fact in a country detail is political control, not a duplicate
// geographic label.  These time-bounded names intentionally use a party when
// one existed and otherwise the ruling house, military council or colonial
// authority that exercised power in the selected year.
const rulingGroups={
  // Party labels follow the party that formed the government or the elected
  // governing coalition; where elections were suspended or colonial rule
  // applied, the actual ruling house, military body or authority is shown.
  morocco:[[1797,1911,"阿拉维王室"],[1912,1955,"法国／西班牙保护国当局"],[1956,1963,"独立党（伊斯蒂克拉尔）／阿拉维王室"],[1964,1997,"阿拉维王室与王室支持联盟"],[1998,2002,"人民力量社会主义联盟（USFP）／王室联盟"],[2003,2011,"独立党（伊斯蒂克拉尔）／王室联盟"],[2011,2021,"正义与发展党（PJD）／王室联盟"],[2021,2026,"民族独立联盟（RNI）／王室联盟"]],
  "morocco-spanish":[[1886,1955,"西班牙殖民当局"],[1956,2026,"阿拉维王室"]],"western-sahara":[[1797,1883,"萨赫拉威部落联盟"],[1884,1975,"西班牙殖民当局"],[1976,2026,"波利萨里奥阵线／摩洛哥当局（分区控制）"]],
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
  palestine:[[1797,1917,"奥斯曼总督"],[1918,1947,"英国委任统治当局"],[1948,1993,"巴解组织／法塔赫"],[1994,2005,"法塔赫／巴勒斯坦民族权力机构"],[2006,2026,"法塔赫（西岸）／哈马斯（加沙）分治"]],jordan:[[1797,1917,"奥斯曼总督"],[1918,2026,"哈希姆王室"]],
  iraq:[[1797,1917,"奥斯曼总督与地方贵族"],[1918,1958,"哈希姆王室"],[1958,1963,"自由军官组织／共和国政府"],[1963,1968,"阿拉伯复兴社会党（伊拉克）／军政委员会"],[1968,2003,"阿拉伯复兴社会党（伊拉克）"],[2003,2026,"议会联盟与总理内阁"]],
  iran:[[1797,1905,"卡扎尔王室"],[1906,1925,"立宪派／卡扎尔王室"],[1925,1979,"巴列维王室"],[1979,1989,"伊斯兰共和党／教士集团"],[1989,2026,"保守派与改革派总统联盟／最高领袖办公室"]],
  kuwait:[[1797,2026,"萨巴赫王室"]],saudi:[[1797,1817,"沙特家族"],[1818,1931,"内志部落联盟与地方酋长"],[1932,2026,"沙特王室"]],hejaz:[[1886,1916,"麦加谢里夫与奥斯曼宗主权"],[1917,1925,"哈希姆王室"]],shammar:[[1886,1921,"拉希德王室（贾巴尔·舍迈尔）"]],najd:[[1886,1901,"内志部落与绿洲酋长"],[1902,1931,"沙特家族／伊本·沙特王室"]],qatar:[[1797,2026,"阿勒萨尼王室"]],uae:[[1797,1970,"特鲁西尔酋长家族"],[1971,2026,"阿布扎比与迪拜等酋长家族"]],oman:[[1797,2026,"阿勒赛义德王室与伊玛目集团"]],
  "yemen-north":[[1797,1918,"扎伊迪伊玛目／卡西姆王朝"],[1918,1962,"穆塔瓦基利特王室"],[1962,1978,"共和指挥委员会"],[1978,1990,"全国人民大会（GPC）／总统联盟"]],"yemen-south":[[1886,1967,"英国殖民当局"],[1967,1978,"民族解放阵线（NLF）"],[1978,1990,"也门社会党"]],yemen:[[1990,1993,"全国人民大会（GPC）／伊斯兰改革集团（JMP）联合"],[1994,2011,"全国人民大会（GPC）"],[2012,2014,"过渡政府与全国对话联盟"],[2015,2026,"总统领导委员会／国际承认政府与胡塞当局分治"]],bahrain:[[1797,2026,"阿勒哈利法王室"]]
};
const rulingGroupAt=(id,y)=>{const hit=(rulingGroups[id]||[]).find(([from,to])=>y>=from&&y<=to);return hit?.[2]||"地方统治集团"};
const $=s=>document.querySelector(s),dom={year:$("#yearRange"),yearText:$("#yearText"),play:$("#playButton"),title:$("#mapTitle"),selectedLabel:$("#selectedLabel"),map:$("#menaMap"),schematicRoot:$("#countries"),realRoot:$("#realCountries"),schematicCountries:[...document.querySelectorAll("#countries path")],realCountries:[],labels:$("#labels"),regionLines:$("#regionLines"),frontierOverlays:$("#frontierOverlays"),historyConnectors:$("#historyConnectors"),panelKicker:$("#panelKicker"),polityName:$("#polityName"),polityNative:$("#polityNative"),badge:$("#eraBadge"),facts:$("#facts"),summaryHeading:$("#summaryHeading"),summary:$("#summary"),eventList:$("#eventList"),eventCount:$("#eventCount"),source:$("#boundarySource"),overview:$("#overviewButton"),brand:$("#brandButton"),about:$("#aboutButton"),dialog:$("#aboutDialog"),close:$("#dialogClose"),confirm:$("#dialogConfirm"),jump:$("#jumpButton"),flagDebugButton:$("#flagDebugButton"),flagDebugDialog:$("#flagDebugDialog"),flagDebugClose:$("#flagDebugClose"),flagDebugScaleX:$("#flagDebugScaleX"),flagDebugScaleY:$("#flagDebugScaleY"),flagDebugOffsetX:$("#flagDebugOffsetX"),flagDebugOffsetY:$("#flagDebugOffsetY"),flagDebugColor:$("#flagDebugColor"),flagDebugSave:$("#flagDebugSave"),flagDebugReset:$("#flagDebugReset"),flagDebugExport:$("#flagDebugExport"),flagDebugStatus:$("#flagDebugStatus"),flagDebugCurrent:$("#flagDebugCurrent")};
Object.assign(dom,{mapStage:$("#mapStage"),flagDebugFill:$("#flagDebugFill")});
let selected=null,timer=null,realMode=false,boundaryKey="";
const eraFor=y=>eras.find(e=>y>=e.from&&y<=e.to)||eras.at(-1);const countryEra=(id,y)=>(overrides[id]||[]).find(([a,b])=>y>=a&&y<=b);
const historicalBoundaryYear=y=>y>=1886&&y<=1999;
const realBoundaryYear=y=>y>=1886;
// Keep each historical period's viewport lifecycle independent.  The old
// `schematic` key reused one DOM/viewBox for 1797—1885, so a preceding zoom or
// a long title could make the next period appear wider than its peers.
const boundaryKeyFor=y=>historicalBoundaryYear(y)?`historical-${y}`:y>=2000?"modern":`schematic-${eraFor(y).from}`;
function eventCards(events){return events.map(([y,n,d,p])=>`<a class="event-card" href="${wiki(p)}" target="_blank" rel="noopener noreferrer"><span class="event-year">${y}</span><span><h4>${n}</h4><p>${d}</p></span><span class="event-arrow" aria-hidden="true">↗</span></a>`).join("")}
function activeCountries(){return realMode?dom.realCountries:dom.schematicCountries}
function clearMapState(){dom.map.setAttribute("viewBox","0 0 1080 650");[...dom.schematicCountries,...dom.realCountries].forEach(p=>p.classList.remove("selected","dimmed","detail-static"));document.querySelectorAll(".map-labels text.hovered,.country-flag.hovered").forEach(node=>{node.classList.remove("hovered");node.style.transform=""});dom.regionLines.classList.remove("visible");dom.regionLines.innerHTML="";if(dom.frontierOverlays)dom.frontierOverlays.innerHTML="";if(dom.historyConnectors)dom.historyConnectors.innerHTML=""}
 function setMapMode(y){const next=realBoundaryYear(y),key=boundaryKeyFor(y),changed=next!==realMode,boundaryChanged=key!==boundaryKey;if(changed||boundaryChanged){selected=null;clearMapState();if(next&&boundaryChanged)dom.realRoot.classList.add("updating");else dom.realRoot.classList.remove("updating")}realMode=next;if(next&&boundaryChanged)buildBoundaryMap(y);boundaryKey=key;dom.map.classList.toggle("real-mode",next);dom.schematicRoot.style.display=next?"none":"";dom.realRoot.style.display=next?"":"none";dom.source.innerHTML=historicalBoundaryYear(y)?'1886—1999年边界采用 <a href="https://icr.ethz.ch/data/cshapes/" target="_blank" rel="noopener noreferrer">CShapes 2.0</a> 的历史有效期区间，并按每年1月1日生成年度快照；同一年份的过渡记录已裁决为唯一 cohort，同一 cohort 的多块合法领土合并；西属摩洛哥、北也门与西撒哈拉缺口采用明确标注的历史上下文补全；1886—1931年阿拉伯半岛改用 <a href="https://github.com/opengulf/ottoman-map" target="_blank" rel="noopener noreferrer">OpenGulf Harita 93677 QGIS 图层</a>，并以 <a href="https://commons.wikimedia.org/wiki/File:Arabia_1914.png" target="_blank" rel="noopener noreferrer">1914 年阿拉伯半岛政治地图</a> 与 <a href="https://www.loc.gov/item/a22000920/" target="_blank" rel="noopener noreferrer">《Arabia》（1920）</a> 交叉校核汉志、舍迈尔和内志，替代现代沙特轮廓。':y>=2000?'2000—2026年地图采用 <a href="https://www.naturalearthdata.com/downloads/50m-cultural-vectors/" target="_blank" rel="noopener noreferrer">Natural Earth 5.1.1</a> 的1:50m现代国界参考图层；西撒哈拉与巴勒斯坦单独标示。':'1797—1885年为历史时期概略示意，不作为领土主张或学术地图引用。';if(y===1932&&historicalBoundaryYear(y))dom.source.insertAdjacentHTML("beforeend",' <span class="frontier-note">1932年沙特—也门边界在塔伊夫条约前尚未完成法理划定，阴影带表示阿西尔、吉赞与纳季兰相关争议区。</span>');if(changed||boundaryChanged||!dom.labels.children.length)createLabels()}
const _setMapModeWithFrontierOverlay=setMapMode;
setMapMode=function(y){_setMapModeWithFrontierOverlay(y);renderFrontierOverlays(y)};
function render(){const y=+dom.year.value,e=eraFor(y);setMapMode(y);dom.title.textContent=realMode?`${y}年中东与北非国家边界`:e.map;dom.yearText.textContent=y;dom.year.style.setProperty("--progress",`${(y-1797)/229*100}%`);if(!selected){dom.summaryHeading.textContent="历史概述";dom.selectedLabel.textContent="区域总览";dom.panelKicker.textContent=`${y} · REGIONAL OVERVIEW`;dom.polityName.textContent=e.title;dom.polityNative.textContent=e.native;dom.badge.textContent=e.badge;dom.summary.textContent=e.summary;dom.facts.innerHTML=`<div><span>区域格局</span><strong>${e.title}</strong></div><div><span>观察年份</span><strong>${y}</strong></div><div><span>地图状态</span><strong>${historicalBoundaryYear(y)?"CShapes 年度边界":realMode?"GIS 国界快照":"年度示意快照"}</strong></div>`}else{const m=meta[selected],o=countryEra(selected,y);dom.summaryHeading.innerHTML="政权概述 <span>REGIME</span>";dom.selectedLabel.textContent=m[0];dom.panelKicker.textContent=`${y} · ${selected.toUpperCase()}`;dom.polityName.textContent=o?.[2]||`${m[0]} · ${e.badge}`;dom.polityNative.textContent=m[0];dom.badge.textContent=e.badge;dom.summary.textContent=o?.[3]||`在${y}年的区域格局中，${m[0]}处于“${e.title}”这一历史阶段。地图使用该年度边界图层展示其空间位置。`;dom.facts.innerHTML=`<div><span>地区</span><strong>${m[0]}</strong></div><div><span>首府／政治中心</span><strong>${o?.[4]||"见该年史料"}</strong></div><div><span>政权性质</span><strong>${o?.[5]||"主权国家／政治实体"}</strong></div>`}dom.eventList.innerHTML=eventCards(e.events);dom.eventCount.textContent=`${e.events.length} 项`;historicalStyles(y)}
 function render(){const y=+dom.year.value,e=eraFor(y);setMapMode(y);dom.title.textContent=realMode?`${y}年中东与北非国家边界`:e.map;dom.yearText.textContent=y;dom.year.style.setProperty("--progress",`${(y-1797)/229*100}%`);if(!selected){dom.summaryHeading.textContent="历史概述";dom.selectedLabel.textContent="区域总览";dom.panelKicker.textContent=`${y} · REGIONAL OVERVIEW`;dom.polityName.textContent=e.title;dom.polityNative.textContent=e.native;dom.badge.textContent=e.badge;dom.summary.textContent=e.summary;dom.facts.innerHTML=`<div><span>区域格局</span><strong>${e.title}</strong></div><div><span>观察年份</span><strong>${y}</strong></div><div><span>地图状态</span><strong>${historicalBoundaryYear(y)?"CShapes 年度边界":realMode?"GIS 国界快照":"年度示意快照"}</strong></div>`}else{const m=meta[selected],o=countryEra(selected,y);dom.summaryHeading.innerHTML="政权概述 <span>REGIME</span>";dom.selectedLabel.textContent=m[0];dom.panelKicker.textContent=`${y} · ${selected.toUpperCase()}`;dom.polityName.textContent=o?.[2]||`${m[0]} · ${e.badge}`;dom.polityNative.textContent=m[0];dom.badge.textContent=e.badge;dom.summary.textContent=o?.[3]||`在${y}年的区域格局中，${m[0]}处于“${e.title}”这一历史阶段。地图使用该年度边界图层展示其空间位置。`;dom.facts.innerHTML=`<div><span>地区</span><strong>${m[0]}</strong></div><div><span>首府／政治中心</span><strong>${o?.[4]||"见该年史料"}</strong></div><div><span>政权性质</span><strong>${o?.[5]||"主权国家／政治实体"}</strong></div>`}dom.eventList.innerHTML=eventCards(e.events);dom.eventCount.textContent=`${e.events.length} 项`;historicalStyles(y);syncFlags(y);if(realMode){if(dom.realRoot.classList.contains("updating"))requestAnimationFrame(()=>{if(realMode&&boundaryKey===boundaryKeyFor(+dom.year.value))dom.realRoot.classList.remove("updating")})}else dom.realRoot.classList.remove("updating")}
const mapColors=["#9d4035","#486f78","#b0792f","#655782","#4f755e","#a05262","#516987","#8d653d","#35706b","#7b4d58","#74763c","#35678a","#a65d37","#5d7050","#8a4f76","#54637b","#9b713e","#3f786f","#765c42","#6d5680","#99604a","#60754c"];
// Keep each historical polity on one stable colour across every yearly
// snapshot.  Ottoman and Turkish republican colours are intentionally
// different keys even though the modern map uses the same geographic area.
const POLITY_COLORS={
  ottoman:"#6b4a3a",turkey:"#315f66", "spanish-empire":"#b0792f",morocco:"#9d4035",
  "french-empire":"#486f78", "british-empire":"#655782",iraq:"#a05262",algeria:"#4f755e",
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
const flagDebugDefaults={scaleX:1,scaleY:1,offsetX:0,offsetY:0,color:"",flagFill:""};
let flagDebugDrafts={};
function readFlagDebug(){try{return JSON.parse(localStorage.getItem(FLAG_DEBUG_STORAGE)||"{}")}catch{return{}}}
function flagDebugSettings(id){return {...flagDebugDefaults,...(readFlagDebug()[id]||{})}}
function flagPathParts(d){return (d.match(/M[^M]*/g)||[d]).map(part=>part.trim()).filter(Boolean)}
function pathDataBox(d){const nums=[...d.matchAll(/-?\d+(?:\.\d+)?/g)].map(match=>Number(match[0]));if(nums.length<2)return null;const xs=nums.filter((_,i)=>i%2===0),ys=nums.filter((_,i)=>i%2===1);return{x:Math.min(...xs),y:Math.min(...ys),width:Math.max(...xs)-Math.min(...xs),height:Math.max(...ys)-Math.min(...ys)}}
 function applyFlagDebugSettings(id){const settings={...flagDebugSettings(id),...(flagDebugDrafts[id]||{})};activeCountries().filter(path=>path.dataset.id===id).forEach(path=>{if(settings.color)path.style.setProperty("--polity-color",settings.color)});document.querySelectorAll(`.country-flag[data-for="${id}"] image`).forEach(image=>{const b={x:Number(image.dataset.baseX),y:Number(image.dataset.baseY),width:Number(image.dataset.baseWidth),height:Number(image.dataset.baseHeight)};const cx=b.x+b.width/2,cy=b.y+b.height/2,sx=Number(settings.scaleX)||1,sy=Number(settings.scaleY)||1,ox=Number(settings.offsetX)||0,oy=Number(settings.offsetY)||0;image.setAttribute("transform",`translate(${cx+ox} ${cy+oy}) scale(${sx} ${sy}) translate(${-cx} ${-cy})`)});document.querySelectorAll(`.country-flag[data-for="${id}"] .flag-fill`).forEach(fill=>{const color=settings.flagFill||"transparent";fill.setAttribute("fill",color);fill.style.setProperty("fill",color,"important")})}
function syncFlags(y){
  const ns="http://www.w3.org/2000/svg",root=realMode?dom.realRoot:dom.schematicRoot,defs=dom.map.querySelector("defs");
  root.querySelectorAll(".country-flag").forEach(flag=>flag.remove());
  const oldPatterns=defs.querySelector("#flagPatterns");if(oldPatterns)oldPatterns.remove();
  const patterns=document.createElementNS(ns,"g");patterns.setAttribute("id","flagPatterns");defs.append(patterns);
  activeCountries().forEach((path,index)=>{const asset=flagAssetFor(path.dataset.id,y),parts=flagPathParts(path.getAttribute("d"));parts.forEach((part,partIndex)=>{const b=pathDataBox(part);if(!b||!Number.isFinite(b.x)||!Number.isFinite(b.y))return;const clipId=`flagClip-${index}-${partIndex}`;const clip=document.createElementNS(ns,"clipPath");clip.setAttribute("id",clipId);clip.setAttribute("clipPathUnits","userSpaceOnUse");const clipPath=document.createElementNS(ns,"path");clipPath.setAttribute("d",part);clip.append(clipPath);patterns.append(clip);const flag=document.createElementNS(ns,"g");flag.classList.add("country-flag");flag.dataset.for=path.dataset.id;flag.dataset.part=String(partIndex);flag.dataset.flagFile=asset.file;flag.dataset.flagPeriod=asset.period;flag.dataset.flagSource=asset.source;flag.setAttribute("clip-path",`url(#${clipId})`);flag.setAttribute("aria-hidden","true");const fill=document.createElementNS(ns,"path");fill.classList.add("flag-fill");fill.setAttribute("d",part);fill.setAttribute("fill","transparent");fill.style.setProperty("fill","transparent","important");fill.setAttribute("pointer-events","none");flag.append(fill);const image=document.createElementNS(ns,"image");image.setAttribute("x",b.x);image.setAttribute("y",b.y);image.setAttribute("width",Math.max(2,b.width));image.setAttribute("height",Math.max(2,b.height));image.dataset.baseX=String(b.x);image.dataset.baseY=String(b.y);image.dataset.baseWidth=String(Math.max(2,b.width));image.dataset.baseHeight=String(Math.max(2,b.height));image.setAttribute("preserveAspectRatio","xMidYMid slice");image.setAttribute("href",asset.path);image.setAttributeNS("http://www.w3.org/1999/xlink","href",asset.path);image.setAttribute("role","presentation");flag.append(image);root.append(flag)});applyFlagDebugSettings(path.dataset.id);if(document.activeElement===path)setHoverState(path.dataset.id,true)})
}
 // The Ottoman path carries explicit Hejaz/Libya cutout subpaths for its fill.
 // Those subpaths must not receive an Ottoman flag image; otherwise hovering
 // the imperial core paints a flag over the very regions we just removed.
 const _syncFlagsWithCutoutGuard=syncFlags;
 syncFlags=(y)=>{_syncFlagsWithCutoutGuard(y);const ottoman=activeCountries().find(path=>path.dataset.id==="ottoman");const count=Number(ottoman?.dataset.cutoutCount)||0;if(!count)return;const flags=[...document.querySelectorAll('.country-flag[data-for="ottoman"]')];flags.filter(flag=>Number(flag.dataset.part)>=flags.length-count).forEach(flag=>flag.remove())};
 function setHoverState(id,on){const locked=selected===id;document.querySelectorAll(`.map-labels text[data-for="${id}"],.country-flag[data-for="${id}"]`).forEach(node=>{const active=on&&!locked;node.classList.toggle("hovered",active);node.style.transform=""});const path=activeCountries().find(candidate=>candidate.dataset.id===id);if(path&&locked)path.classList.add("detail-static")}
function polityAt(id,y){
  if(id==="ottoman")return "ottoman";
  if(id==="turkey")return "turkey";
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
  if(id==="saudi")return y>=1932?"saudi":"arabian-polities";
  if(id==="hejaz")return y<=1916?"ottoman":y<=1925?"hejaz":"arabian-polities";
  if(id==="shammar")return"shammar";
  if(id==="najd")return y<1902?"najd-tribal":"najd";
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
  // Do not derive colours from the order of paths in a yearly snapshot: that
  // made every transition reshuffle the palette.  A stable polity key keeps
  // shared regimes (for example Ottoman provinces) visually unified across
  // years while preserving separate Ottoman and Turkish republican colours.
  countries.forEach((path,index)=>{const polity=polities[index];path.dataset.polity=polity;path.style.setProperty("--polity-color",stablePolityColor(polity));path.classList.toggle("dependent",dependentIds.includes(path.dataset.id));path.classList.toggle("context",["hejaz","shammar","najd"].includes(path.dataset.id))});
}
function createLabels(){
  dom.labels.innerHTML="";
  if(dom.historyConnectors)dom.historyConnectors.innerHTML="";
  activeCountries().forEach(p=>{
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
function choose(id){selected=id;const p=activeCountries().find(x=>x.dataset.id===id);if(!p)return;const b=p.getBBox(),px=Math.max(45,b.width*.45),py=Math.max(38,b.height*.4);dom.map.setAttribute("viewBox",`${b.x-px} ${b.y-py} ${b.width+2*px} ${b.height+2*py}`);activeCountries().forEach(x=>{x.classList.toggle("selected",x===p);x.classList.toggle("dimmed",x!==p);x.classList.toggle("detail-static",x===p)});setHoverState(id,false);[...dom.labels.children].forEach(l=>l.style.display=l.dataset.for===id?"none":"");if(!realMode)regions(p);render();if(innerWidth<781)$("#storyPanel").scrollIntoView({behavior:"smooth",block:"start"})}
// A polity colour is shared across provinces, but selection is always a
// single clicked geographic feature (for example Turkey must not select the
// separate Hejaz or Libya overlays that are also Ottoman-coloured).
const _chooseSingleFeature=choose;
choose=function(id){_chooseSingleFeature(id);activeCountries().forEach(path=>path.classList.toggle("selected",path.dataset.id===id));document.querySelectorAll(".country-flag.hovered,.map-labels text.hovered").forEach(node=>{node.classList.remove("hovered");node.style.transform=""});const selectedPath=activeCountries().find(path=>path.dataset.id===id);if(selectedPath)selectedPath.classList.add("detail-static")};
function overview(){selected=null;clearMapState();[...dom.labels.children].forEach(l=>l.style.display="");render()}
function stop(){if(timer)clearInterval(timer);timer=null;dom.play.classList.remove("playing");dom.play.setAttribute("aria-label","播放时间线")}
function toggle(){if(timer)return stop();dom.play.classList.add("playing");dom.play.setAttribute("aria-label","暂停时间线");timer=setInterval(()=>{dom.year.value=+dom.year.value>=2026?1797:+dom.year.value+1;render()},120)}
function bindCountry(p){const label=meta[p.dataset.id]?.[0]||p.dataset.id;p.setAttribute("tabindex","0");p.setAttribute("role","button");p.setAttribute("aria-label",`查看${label}`);p.addEventListener("click",()=>choose(p.dataset.id));p.addEventListener("keydown",e=>{if(e.key==="Enter"||e.key===" "){e.preventDefault();choose(p.dataset.id)}});p.addEventListener("mouseenter",()=>setHoverState(p.dataset.id,true));p.addEventListener("mouseleave",()=>setHoverState(p.dataset.id,false));p.addEventListener("focus",()=>{p.classList.add("keyboard-focus");setHoverState(p.dataset.id,true)});p.addEventListener("blur",()=>{p.classList.remove("keyboard-focus");setHoverState(p.dataset.id,false)})}
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
function boundaryFeaturesForYear(y){
  if(!historicalBoundaryYear(y))return window.MENA_2026||[];
  const grouped=new Map();
  const sourceFeatures=y<1924?(window.MENA_HISTORICAL_1886_1923||[]):(window.MENA_HISTORICAL_INTERVALS||[]);
  const selectedFeatures=annualCohortFeatures(sourceFeatures,y).filter(feature=>!(feature.id==="saudi"&&y<1932));
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
  // The CShapes record for 1959—1975 omits the northern claim area. Union the
  // complete Western Sahara reference outline so no portion disappears between years.
  if(y<=1975){const ws=selectedFeatures.find(feature=>feature.id==="western-sahara"),modern=(window.MENA_2026||[]).find(feature=>feature.id==="western-sahara");if(modern&&(!ws||ws.path!==modern.path))selectedFeatures.push({id:"western-sahara",from:y,to:y,path:modern.path,source:"Natural Earth contextual extension · Western Sahara full historical claim area",name:"Western Sahara"})}
  if(y>=1886&&window.MENA_HISTORICAL_ADEN)selectedFeatures.push(...window.MENA_HISTORICAL_ADEN.filter(feature=>feature.from<=y&&feature.to>=y));
  // Until the post-war settlements, the Ottoman imperial polygon contains
  // Tripolitania/Cyrenaica and the Hejaz record as internal regions. Carve
  // those historical overlays out of the Ottoman feature so the visible
  // borders do not double-paint the same territory.
  if(y<=1919){
    const ottoman=selectedFeatures.find(feature=>feature.id==="turkey");
    const cuts=selectedFeatures.filter(feature=>feature.id==="libya"||feature.id==="hejaz");
    if(ottoman&&cuts.length){ottoman.basePath=ottoman.path;ottoman.path+=cuts.map(feature=>feature.path).join("");ottoman.cutoutCount=cuts.length;ottoman.source=`${ottoman.source||"CShapes 2.0"} + Ottoman historical cutouts for ${cuts.map(feature=>feature.id).join("/")}`}
  }
  selectedFeatures.forEach(feature=>{
    const id=["yemen-north","yemen-south"].includes(feature.id)&&y>=1990?"yemen":feature.id;
    const current=grouped.get(id)||{id,name:feature.name,path:"",source:feature.source,cutoutCount:0,basePath:feature.basePath||""};
    current.path+=feature.path;
    current.cutoutCount+=(feature.cutoutCount||0);
    current.source=current.source===feature.source?current.source:[...new Set([current.source,feature.source].filter(Boolean).flatMap(source=>source.split(" + ")))].join(" + ");
    grouped.set(id,current);
  });
  return [...grouped.values()];
}
function renderFrontierOverlays(y){
  if(!dom.frontierOverlays)return;
  dom.frontierOverlays.innerHTML="";
  const ns="http://www.w3.org/2000/svg";
  const appendOverlay=(d,titleText,kind="frontier-gap")=>{const p=document.createElementNS(ns,"path");p.classList.add(kind,"disputed");p.setAttribute("d",d);p.setAttribute("fill","url(#hatch)");p.setAttribute("fill-rule","evenodd");const title=document.createElementNS(ns,"title");title.textContent=titleText;p.append(title);dom.frontierOverlays.append(p)};
  // The 1914 reference labels the unclaimed belt between Hejaz and the
  // Wahhabi/Najd polity as an “area of dispute”; retain it rather than invent
  // a shared sovereign frontier. This also prevents a visual overlap.
  if(y>=1886&&y<=1925)appendOverlay("M755,305L770,305L770,340L775,365L760,365L755,340Z","1886—1925 汉志与内志之间的争议区","arabian-dispute");
  // The Treaty of Taif was signed in 1934. In 1932 the Asir–Jizan–Najran
  // frontier was still unsettled, so the gap is shown as a hatched disputed
  // belt rather than silently assigning it to Saudi Arabia or Yemen.
  if(y===1932)appendOverlay("M793,403L800,406L795,414L791,420L792,426L787,427L786,420L789,412Z","1932年沙特—也门未定界争议带（塔伊夫条约前）");
}
function buildBoundaryMap(y){
  const ns="http://www.w3.org/2000/svg";dom.realRoot.innerHTML="";
  boundaryFeaturesForYear(y).forEach(feature=>{
    const p=document.createElementNS(ns,"path"),pathData=feature.path;
    // CShapes calls the pre-1923 imperial polygon `turkey`; expose it as its
    // own Ottoman tag so it can never be confused with the Turkish republic.
    const logicalId=feature.id==="turkey"&&y<=1922?"ottoman":feature.id;
    p.dataset.id=logicalId;p.dataset.source=feature.source||"";p.dataset.sourceId=feature.id;p.dataset.cutoutCount=String(feature.cutoutCount||0);p.dataset.flagPath=feature.basePath||pathData;p.setAttribute("d",pathData);p.setAttribute("fill-rule",logicalId==="ottoman"?"evenodd":feature.source?.includes("extension")?"nonzero":"evenodd");
    if(["western-sahara","palestine"].includes(logicalId))p.classList.add("disputed");
    if(feature.source?.includes("Natural Earth fallback"))p.classList.add("fallback");
    if(feature.source?.includes("context"))p.classList.add("context");
    // Compound historical records for Aden and the Ottoman/Turkish core are
    // one polity even when the source geometry contains touching subpaths.
    if((feature.id==="yemen-south"&&y<=1967)||(feature.id==="turkey"&&y<=1922))p.classList.add("merged-feature");
    const title=document.createElementNS(ns,"title");
    const label=logicalId==="ottoman"?"奥斯曼帝国":logicalId==="yemen-south"?(y<1967?"亚丁保护国":"南也门"):(meta[logicalId]?.[0]||feature.name||logicalId);
    title.textContent=`${label} · ${feature.source||"地图数据"}`;p.append(title);dom.realRoot.append(p)
  });
  dom.realCountries=[...dom.realRoot.querySelectorAll("path")];dom.realCountries.forEach(bindCountry);renderFrontierOverlays(y)
}
dom.schematicCountries.forEach(bindCountry);dom.year.addEventListener("input",()=>{stop();render()});dom.play.addEventListener("click",toggle);dom.overview.addEventListener("click",overview);dom.brand.addEventListener("click",overview);dom.about.addEventListener("click",()=>dom.dialog.showModal());dom.close.addEventListener("click",()=>dom.dialog.close());dom.confirm.addEventListener("click",()=>dom.dialog.close());dom.dialog.addEventListener("click",e=>{if(e.target===dom.dialog)dom.dialog.close()});dom.jump.addEventListener("click",()=>{const raw=prompt("输入1797—2026之间的年份：",dom.year.value);if(raw===null)return;dom.year.value=Math.max(1797,Math.min(2026,parseInt(raw,10)||+dom.year.value));stop();render()});render();
// Keep the public map heading tied to the historical period title, including on real-boundary years.
const _renderWithHistoricalTitle=render;render=()=>{_renderWithHistoricalTitle();dom.title.textContent=eraFor(+dom.year.value).map;const status=dom.facts.querySelectorAll("div strong")[2];if(status&&historicalBoundaryYear(+dom.year.value))status.textContent="历史 GIS 年度边界"};
const displayNameAt=(id,y)=>id==="yemen-south"?(y<1967?"亚丁保护国":"南也门"):id==="ottoman"?"奥斯曼帝国":(meta[id]?.[0]||id);
const formalNameAt=(id,y)=>((window.MENA_FORMAL_NAMES?.[id]||[]).find(([from,to])=>y>=from&&y<=to)||[])[2]||countryEra(id,y)?.[2]||displayNameAt(id,y);
const _renderWithFormalNames=render;render=()=>{_renderWithFormalNames();const y=+dom.year.value;if(dom.flagDebugButton)dom.flagDebugButton.hidden=!selected;activeCountries().forEach(path=>{const label=displayNameAt(path.dataset.id,y);path.setAttribute("aria-label",`查看${label}`)});document.querySelectorAll(".map-labels text[data-for]").forEach(label=>{label.textContent=displayNameAt(label.dataset.for,y)});if(!selected)return;const display=displayNameAt(selected,y);dom.selectedLabel.textContent=display;dom.polityName.textContent=formalNameAt(selected,y);dom.polityNative.textContent=display;const firstFact=dom.facts.querySelector("div strong");if(firstFact){firstFact.textContent=rulingGroupAt(selected,y);const firstLabel=firstFact.previousElementSibling;if(firstLabel)firstLabel.textContent="执政党／统治集团"}};
 function debugFormValues(){return{scaleX:Number(dom.flagDebugScaleX.value),scaleY:Number(dom.flagDebugScaleY.value),offsetX:Number(dom.flagDebugOffsetX.value),offsetY:Number(dom.flagDebugOffsetY.value),color:dom.flagDebugColor.value,flagFill:dom.flagDebugFill.value}}
 function updateDebugOutputs(){const pairs=[[dom.flagDebugScaleX,document.querySelector("#flagDebugScaleXValue"),v=>`${Number(v).toFixed(2)}×`],[dom.flagDebugScaleY,document.querySelector("#flagDebugScaleYValue"),v=>`${Number(v).toFixed(2)}×`],[dom.flagDebugOffsetX,document.querySelector("#flagDebugOffsetXValue"),v=>`${v}`],[dom.flagDebugOffsetY,document.querySelector("#flagDebugOffsetYValue"),v=>`${v}`],[dom.flagDebugColor,document.querySelector("#flagDebugColorValue"),v=>String(v).toUpperCase()],[dom.flagDebugFill,document.querySelector("#flagDebugFillValue"),v=>String(v).toUpperCase()]];pairs.forEach(([input,out,format])=>{if(out)out.textContent=format(input.value)})}
 function loadDebugForm(id){if(!id)return;const s={...flagDebugSettings(id),...(flagDebugDrafts[id]||{})},path=activeCountries().find(candidate=>candidate.dataset.id===id),defaultColor=path?.style.getPropertyValue("--polity-color").trim()||stablePolityColor(path?.dataset.polity||id);dom.flagDebugScaleX.value=s.scaleX;dom.flagDebugScaleY.value=s.scaleY;dom.flagDebugOffsetX.value=s.offsetX;dom.flagDebugOffsetY.value=s.offsetY;dom.flagDebugColor.value=s.color||defaultColor;dom.flagDebugFill.value=s.flagFill||defaultColor;if(dom.flagDebugCurrent)dom.flagDebugCurrent.textContent=`当前国家：${displayNameAt(id,Number(dom.year.value))} · ${Number(dom.year.value)}`;updateDebugOutputs();applyFlagDebugSettings(id)}
 function refreshDebugDraft(){const id=selected;if(!id)return;flagDebugDrafts[id]=debugFormValues();updateDebugOutputs();applyFlagDebugSettings(id);dom.flagDebugStatus.textContent="实时预览中；点击“保存到浏览器”后将在本机保留。"}
 function saveDebugSettings(){const id=selected;if(!id)return;const saved=readFlagDebug();saved[id]={...flagDebugSettings(id),...debugFormValues()};try{localStorage.setItem(FLAG_DEBUG_STORAGE,JSON.stringify(saved,null,2));flagDebugDrafts[id]={...saved[id]};dom.flagDebugStatus.textContent="已保存到本浏览器。"}catch{dom.flagDebugStatus.textContent="浏览器存储不可用，请使用导出 JSON。"}applyFlagDebugSettings(id)}
 function resetDebugSettings(){const id=selected;if(!id)return;delete flagDebugDrafts[id];const saved=readFlagDebug();delete saved[id];try{localStorage.setItem(FLAG_DEBUG_STORAGE,JSON.stringify(saved))}catch{}historicalStyles(Number(dom.year.value));syncFlags(Number(dom.year.value));loadDebugForm(id);dom.flagDebugStatus.textContent="已恢复默认设置。"}
function exportDebugSettings(){const payload=JSON.stringify(readFlagDebug(),null,2),blob=new Blob([payload],{type:"application/json"}),url=URL.createObjectURL(blob),a=document.createElement("a");a.href=url;a.download="mena-flag-debug.json";a.click();setTimeout(()=>URL.revokeObjectURL(url),0);dom.flagDebugStatus.textContent="已导出 mena-flag-debug.json。"}
 if(dom.flagDebugButton){dom.flagDebugButton.addEventListener("click",()=>{if(!selected)return;loadDebugForm(selected);dom.flagDebugDialog.showModal()});dom.flagDebugClose.addEventListener("click",()=>dom.flagDebugDialog.close());dom.flagDebugDialog.addEventListener("click",e=>{if(e.target===dom.flagDebugDialog)dom.flagDebugDialog.close()});[dom.flagDebugScaleX,dom.flagDebugScaleY,dom.flagDebugOffsetX,dom.flagDebugOffsetY,dom.flagDebugColor,dom.flagDebugFill].forEach(input=>input.addEventListener("input",refreshDebugDraft));dom.flagDebugSave.addEventListener("click",saveDebugSettings);dom.flagDebugReset.addEventListener("click",resetDebugSettings);dom.flagDebugExport.addEventListener("click",exportDebugSettings)}
