/* =====================================================================
   早稲田法学部・日本史対策アプリ  初期データ定数
   ---------------------------------------------------------------------
   ここを編集すればアプリの中身を差し替えられます（index.html は触らない）。
   ※著作権方針：過去問の問題文・選択肢・解説は一切複製しないこと。
     問題は必ずゼロから独立に創作し、史実誤りが無いか確認してから登録する。
     ここに入っているのはすべてオリジナルのダミー数件です。
   ===================================================================== */

/* --- 分野マスタ（ヒートマップ縦軸・棒グラフ・演習フィルタで共通利用）--- */
const FIELDS = ["古代", "中世", "近世", "近代", "現代", "外交史", "文化史", "社会経済"];

/* --- 時代マスタ（ヒートマップ縦軸＝時代×年度で共通利用）--- */
const ERAS = ["古代", "中世", "近世", "近代", "現代"];

/* --- 出題形式マスタ --- */
const FORMATS = ["正誤", "空欄補充", "記述", "論述", "史料", "一問一答"];

/* --- ヒートマップに並べる年度の枠（直近10年）--- */
const YEARS = [2006,2007,2008,2009,2010,2011,2012,2013,2014,2015,2016,2017,2018,2019,2020,2021,2022,2023,2024,2025,2026];

/* =====================================================================
   ①-A 傾向サマリー（公開情報ベース・裏取り済み）
   複数の予備校・受験分析が一致する「全体傾向」。事実の整理であり
   問題本体の複製ではない。年度別の正確なテーマは赤本等で確認のこと。
   level: 3=◎(最重要) / 2=◯(重要) / 1=△(比較的少なめ)
   ===================================================================== */
const TREND_SUMMARY = {
  updated: "2026-07-19",
  note: "東進『大学入試問題 過去問データベース』等で公開の早稲田法・日本史（2000〜2026年度・全27年）を大問単位で分析した実データに基づく。過去問本体は複製せず、時代・分野・形式のメタデータのみを集計。詳細は同フォルダの傾向データCSVを参照。",
  structure: [
    "現行(2006年〜)：大問4題 ／ 各10問＝40問 ／ 70点 ／ 60分",
    "記述とマークがほぼ半々（記述17〜22問）",
    "※2000〜2005年は大問5題・45〜56問だった（形式変更）"
  ],
  // 時代別の重要度（27年のべ出題回数に基づく）
  eraLevels: [
    { name: "古代", level: 2, note: "のべ28回。大問Iで頻出（律令・都城・文化）" },
    { name: "中世", level: 2, note: "のべ30回で最多級。大問I・IIの軸" },
    { name: "近世", level: 2, note: "のべ24回。大問IIの定番（江戸の対外・文化・改革）" },
    { name: "近代", level: 3, note: "のべ44回で最頻。大問IIIの史料も近代" },
    { name: "現代", level: 3, note: "のべ27回。大問IVで毎年必出（戦後経済・外交）" }
  ],
  // テーマ（分野）別の重要度（27年のべ出題回数に基づく）
  themeLevels: [
    { name: "政治・法制史", level: 3, note: "のべ84回で断然トップ。法学部の核" },
    { name: "外交・対外関係", level: 3, note: "のべ44回。実質2番手" },
    { name: "社会経済史",   level: 2, note: "のべ36回。荘園・貨幣・出版を漢字記述で" },
    { name: "文化・思想史", level: 2, note: "のべ31回。侮れない" },
    { name: "財政・宗教",   level: 1, note: "財政11・宗教6。単独では少なめ" }
  ],
  // 出題形式の目安（記述と選択がほぼ1:1）
  formats: [
    { name: "記述",        weight: 45, note: "大半が漢字○字指定。書けないと失点" },
    { name: "選択・正誤",  weight: 45, note: "「2つ選ぶ」「誤りを選ぶ」等ひねり多い" },
    { name: "年代整序",    weight: 5,  note: "並べ替え・組合せが毎年複数" },
    { name: "史料問題",    weight: 5,  note: "大問III＝近代の一次史料。27年中26年で出題" }
  ],
  points: [
    "大問の型が固定：I＝古代・中世 ／ II＝近世 ／ III＝近代の一次史料 ／ IV＝現代の経済・外交。",
    "大問IV（戦後の経済・外交）は毎年必出。近年は時事（2026＝トランプ関税）にも踏み込む。",
    "大問III＝近代の史料問題は27年中26年で出題。日記・自伝・新聞・書簡を『何の史料か』読み取る力が要る。",
    "近代が最頻だが古代〜近世も大問I・IIで手厚い。文化史・社会経済史を漢字記述で問う。",
    "早稲田関係者（大隈重信・斎藤隆夫・石橋湛山）は頻出。"
  ]
};

/* =====================================================================
   ①-B 年度×テーマの記録（ヒートマップ用）
   1行 = その年に「この分野がこの形式で出た」という事実の記録。
   ★ここには「公開情報で確認できた実際の出題例」だけを入れる。
     記憶による“それっぽい捏造”は入れない。
     赤本を解くたびに { year, era, field, format, memo } を追記して育てる。
   ===================================================================== */
const TRENDS = [
  { year: 2000, era: "古代", field: "政治", format: "史料", verified: true, memo: "延久の荘園整理令と堀越公方の争乱" },
  { year: 2000, era: "中世", field: "政治", format: "史料", verified: true, memo: "延久の荘園整理令と堀越公方の争乱" },
  { year: 2000, era: "近世", field: "思想", format: "史料", verified: true, memo: "頼山陽・本居宣長・藤田幽谷の徳川正統論" },
  { year: 2000, era: "近代", field: "政治", format: "正誤", verified: true, memo: "大日本帝国憲法制定と国体論争の展開" },
  { year: 2000, era: "近代", field: "政治", format: "史料", verified: true, memo: "関東大震災と金解禁をめぐる経済政策" },
  { year: 2000, era: "現代", field: "社会経済", format: "正誤", verified: true, memo: "占領期から高度成長・バブル崩壊の経済史" },
  { year: 2001, era: "古代", field: "政治", format: "史料", verified: true, memo: "応天門の変と長宗我部氏の分国法" },
  { year: 2001, era: "中世", field: "政治", format: "史料", verified: true, memo: "応天門の変と長宗我部氏の分国法" },
  { year: 2001, era: "近世", field: "社会経済", format: "史料", verified: true, memo: "江戸時代の新田開発と肥料・特産物流通" },
  { year: 2001, era: "近代", field: "政治", format: "正誤", verified: true, memo: "後藤新平らの台湾・朝鮮植民地統治政策" },
  { year: 2001, era: "近代", field: "政治", format: "史料", verified: true, memo: "満州事変から二・二六事件と国策基準" },
  { year: 2001, era: "現代", field: "政治", format: "正誤", verified: true, memo: "55年体制の成立から細川政権まで" },
  { year: 2002, era: "古代", field: "政治", format: "正誤", verified: true, memo: "藤原氏摂関政治の成立と鎌倉幕府滅亡" },
  { year: 2002, era: "中世", field: "政治", format: "正誤", verified: true, memo: "藤原氏摂関政治の成立と鎌倉幕府滅亡" },
  { year: 2002, era: "近世", field: "外交史", format: "史料", verified: true, memo: "鎖国政策の実態と新井白石の貿易統制" },
  { year: 2002, era: "近代", field: "外交史", format: "史料", verified: true, memo: "岩倉使節団と明治外交・条約改正史" },
  { year: 2002, era: "近代", field: "文化史", format: "史料", verified: true, memo: "大衆文学・国防思想と国体明徴問題" },
  { year: 2002, era: "現代", field: "政治", format: "史料", verified: true, memo: "池田内閣の所得倍増と高度成長政策" },
  { year: 2003, era: "古代", field: "文化史", format: "正誤", verified: true, memo: "飛鳥文化と戦国期の鉱山・築城技術" },
  { year: 2003, era: "近世", field: "文化史", format: "正誤", verified: true, memo: "飛鳥文化と戦国期の鉱山・築城技術" },
  { year: 2003, era: "近世", field: "外交史", format: "史料", verified: true, memo: "幕末の対外政策と異国船打払令" },
  { year: 2003, era: "近代", field: "思想", format: "史料", verified: true, memo: "日露開戦論争と社会主義者の退社" },
  { year: 2003, era: "近代", field: "政治", format: "史料", verified: true, memo: "大正デモクラシーから新体制運動まで" },
  { year: 2003, era: "現代", field: "外交史", format: "史料", verified: true, memo: "鳩山一郎内閣の外交成果と内政" },
  { year: 2004, era: "古代", field: "文化史", format: "正誤", verified: true, memo: "古事記編纂と中世後期の連歌文化" },
  { year: 2004, era: "中世", field: "文化史", format: "正誤", verified: true, memo: "古事記編纂と中世後期の連歌文化" },
  { year: 2004, era: "近世", field: "法制", format: "正誤", verified: true, memo: "江戸幕府の統治機構と思想統制" },
  { year: 2004, era: "近代", field: "文化史", format: "史料", verified: true, memo: "長谷川如是閑と明治期新聞の個性" },
  { year: 2004, era: "近代", field: "政治", format: "史料", verified: true, memo: "大正デモクラシーと普選運動・婦人参政権" },
  { year: 2004, era: "現代", field: "社会経済", format: "史料", verified: true, memo: "田中角栄内閣の外交成果と経済動向" },
  { year: 2005, era: "古代", field: "政治", format: "史料", verified: true, memo: "平将門の乱と豊臣秀吉の伴天連追放令" },
  { year: 2005, era: "近世", field: "政治", format: "史料", verified: true, memo: "平将門の乱と豊臣秀吉の伴天連追放令" },
  { year: 2005, era: "近世", field: "社会経済", format: "史料", verified: true, memo: "江戸期の商業発展と米市場・廻船問屋" },
  { year: 2005, era: "近代", field: "政治", format: "正誤", verified: true, memo: "隈板内閣と足尾鉱毒事件・田中正造" },
  { year: 2005, era: "近代", field: "外交史", format: "史料", verified: true, memo: "太平洋戦争期の外交宣言と戦局展開" },
  { year: 2005, era: "現代", field: "政治", format: "史料", verified: true, memo: "GHQの五大改革指令と講和問題" },
  { year: 2006, era: "古代", field: "政治", format: "史料", verified: true, memo: "仏教興隆と守護・建武政権の展開" },
  { year: 2006, era: "中世", field: "政治", format: "史料", verified: true, memo: "仏教興隆と守護・建武政権の展開" },
  { year: 2006, era: "中世", field: "社会経済", format: "正誤", verified: true, memo: "徳政令と世直し一揆の展開" },
  { year: 2006, era: "近世", field: "社会経済", format: "正誤", verified: true, memo: "徳政令と世直し一揆の展開" },
  { year: 2006, era: "近代", field: "政治", format: "史料", verified: true, memo: "徳富蘇峰の自伝にみる明治政治史" },
  { year: 2006, era: "現代", field: "外交史", format: "正誤", verified: true, memo: "戦後賠償問題とアジア外交の展開" },
  { year: 2007, era: "古代", field: "宗教", format: "正誤", verified: true, memo: "神祇信仰と神仏習合の展開" },
  { year: 2007, era: "中世", field: "宗教", format: "正誤", verified: true, memo: "神祇信仰と神仏習合の展開" },
  { year: 2007, era: "近世", field: "政治", format: "正誤", verified: true, memo: "幕藩体制の確立と鎖国政策の展開" },
  { year: 2007, era: "近代", field: "外交史", format: "正誤", verified: true, memo: "明治期の対朝鮮・対清外交と韓国併合" },
  { year: 2007, era: "近代", field: "外交史", format: "記述", verified: true, memo: "日米関係の協調から対立・摩擦への変遷" },
  { year: 2007, era: "現代", field: "外交史", format: "記述", verified: true, memo: "日米関係の協調から対立・摩擦への変遷" },
  { year: 2008, era: "古代", field: "社会経済", format: "正誤", verified: true, memo: "鉱山開発と貨幣・金属生産の歴史" },
  { year: 2008, era: "中世", field: "社会経済", format: "正誤", verified: true, memo: "鉱山開発と貨幣・金属生産の歴史" },
  { year: 2008, era: "近世", field: "政治", format: "史料", verified: true, memo: "天保期の廻船・問屋と流通統制" },
  { year: 2008, era: "近代", field: "文化史", format: "正誤", verified: true, memo: "明治期の教育制度と学校令の展開" },
  { year: 2008, era: "近代", field: "政治", format: "史料", verified: true, memo: "石橋湛山の社説にみる昭和政治史" },
  { year: 2008, era: "現代", field: "政治", format: "史料", verified: true, memo: "石橋湛山の社説にみる昭和政治史" },
  { year: 2009, era: "古代", field: "社会経済", format: "正誤", verified: true, memo: "中世の銭貨流通と経済構造の転換" },
  { year: 2009, era: "中世", field: "社会経済", format: "正誤", verified: true, memo: "中世の銭貨流通と経済構造の転換" },
  { year: 2009, era: "近世", field: "外交史", format: "史料", verified: true, memo: "異国船来航をめぐる幕府の外交姿勢" },
  { year: 2009, era: "近代", field: "政治", format: "史料", verified: true, memo: "大正〜昭和戦前期の政変と外交(日記史料)" },
  { year: 2009, era: "近代", field: "社会経済", format: "史料", verified: true, memo: "産業統制から財閥解体・石油危機まで" },
  { year: 2009, era: "現代", field: "社会経済", format: "史料", verified: true, memo: "産業統制から財閥解体・石油危機まで" },
  { year: 2010, era: "古代", field: "宗教", format: "正誤", verified: true, memo: "東大寺盧舎那大仏の造立と復興史" },
  { year: 2010, era: "中世", field: "宗教", format: "正誤", verified: true, memo: "東大寺盧舎那大仏の造立と復興史" },
  { year: 2010, era: "近世", field: "外交史", format: "正誤", verified: true, memo: "江戸時代の四つの窓口と対外関係" },
  { year: 2010, era: "近代", field: "外交史", format: "史料", verified: true, memo: "外国人の日記に見る条約改正と外交" },
  { year: 2010, era: "近代", field: "政治", format: "記述", verified: true, memo: "近現代日本における政官財の汚職事件" },
  { year: 2010, era: "現代", field: "政治", format: "記述", verified: true, memo: "近現代日本における政官財の汚職事件" },
  { year: 2011, era: "古代", field: "政治", format: "記述", verified: true, memo: "東国と西国からみる日本通史の地域差" },
  { year: 2011, era: "中世", field: "政治", format: "記述", verified: true, memo: "東国と西国からみる日本通史の地域差" },
  { year: 2011, era: "中世", field: "思想", format: "史料", verified: true, memo: "戦国大名の家訓にみる合理的思考" },
  { year: 2011, era: "近代", field: "政治", format: "史料", verified: true, memo: "大正政変から米騒動期の政党政治(日記史料)" },
  { year: 2011, era: "近代", field: "外交史", format: "記述", verified: true, memo: "幕末開国から沖縄返還までの対外関係" },
  { year: 2011, era: "現代", field: "外交史", format: "記述", verified: true, memo: "幕末開国から沖縄返還までの対外関係" },
  { year: 2012, era: "古代", field: "文化史", format: "正誤", verified: true, memo: "陶磁器の歴史と時代ごとの文化的変遷" },
  { year: 2012, era: "中世", field: "文化史", format: "正誤", verified: true, memo: "陶磁器の歴史と時代ごとの文化的変遷" },
  { year: 2012, era: "古代", field: "政治", format: "史料", verified: true, memo: "方丈記に見る福原遷都と社会変化" },
  { year: 2012, era: "中世", field: "政治", format: "史料", verified: true, memo: "方丈記に見る福原遷都と社会変化" },
  { year: 2012, era: "近代", field: "社会経済", format: "史料", verified: true, memo: "田中正造の書簡に見る足尾鉱毒事件" },
  { year: 2012, era: "近代", field: "政治", format: "正誤", verified: true, memo: "治安維持法下の政治対立と戦後改革との連続性" },
  { year: 2012, era: "現代", field: "政治", format: "正誤", verified: true, memo: "治安維持法下の政治対立と戦後改革との連続性" },
  { year: 2013, era: "古代", field: "政治", format: "正誤", verified: true, memo: "古代日本における地震災害と朝廷の対応" },
  { year: 2013, era: "中世", field: "外交史", format: "正誤", verified: true, memo: "フビライの日本征服の試みと蒙古襲来" },
  { year: 2013, era: "近代", field: "文化史", format: "史料", verified: true, memo: "秋田雨雀日記に見る大正〜昭和戦前の社会" },
  { year: 2013, era: "現代", field: "外交史", format: "史料", verified: true, memo: "大浜信泉の沖縄返還構想と日米交渉" },
  { year: 2014, era: "古代", field: "外交史", format: "正誤", verified: true, memo: "東アジア国際関係と古代国家形成" },
  { year: 2014, era: "中世", field: "外交史", format: "史料", verified: true, memo: "欧米人の記録に見る中世〜近世の対外交易" },
  { year: 2014, era: "近世", field: "外交史", format: "史料", verified: true, memo: "欧米人の記録に見る中世〜近世の対外交易" },
  { year: 2014, era: "近代", field: "政治", format: "史料", verified: true, memo: "福田英子の自伝に見る自由民権運動と大阪事件" },
  { year: 2014, era: "近代", field: "政治", format: "史料", verified: true, memo: "電力国家管理から原子力発電への歴史" },
  { year: 2014, era: "現代", field: "政治", format: "史料", verified: true, memo: "電力国家管理から原子力発電への歴史" },
  { year: 2015, era: "古代", field: "政治", format: "正誤", verified: true, memo: "平城京の都市構造と奈良時代の政治史" },
  { year: 2015, era: "近世", field: "社会経済", format: "正誤", verified: true, memo: "近世の身分社会と村落・都市の変容" },
  { year: 2015, era: "近代", field: "政治", format: "史料", verified: true, memo: "日露戦争前後の政局(法学者妻日記)" },
  { year: 2015, era: "近代", field: "政治", format: "正誤", verified: true, memo: "近代警察制度の展開と戦後改革" },
  { year: 2015, era: "現代", field: "政治", format: "正誤", verified: true, memo: "近代警察制度の展開と戦後改革" },
  { year: 2016, era: "古代", field: "政治", format: "正誤", verified: true, memo: "奈良時代後期〜平安初期の政治と仏教" },
  { year: 2016, era: "中世", field: "社会経済", format: "正誤", verified: true, memo: "中世〜近世における徳政令の展開" },
  { year: 2016, era: "近世", field: "社会経済", format: "正誤", verified: true, memo: "中世〜近世における徳政令の展開" },
  { year: 2016, era: "近代", field: "政治", format: "史料", verified: true, memo: "大正期の政党内閣交代(吉野作造日記)" },
  { year: 2016, era: "近代", field: "社会経済", format: "記述", verified: true, memo: "近代〜現代のエネルギー・電力政策史" },
  { year: 2016, era: "現代", field: "社会経済", format: "記述", verified: true, memo: "近代〜現代のエネルギー・電力政策史" },
  { year: 2017, era: "古代", field: "外交史", format: "正誤", verified: true, memo: "古墳時代の政治体制と東アジア交流" },
  { year: 2017, era: "中世", field: "法制", format: "正誤", verified: true, memo: "中世武家社会における所領支配の変遷" },
  { year: 2017, era: "近代", field: "政治", format: "史料", verified: true, memo: "大正期の政変と米騒動(日記史料)" },
  { year: 2017, era: "現代", field: "社会経済", format: "史料", verified: true, memo: "シャウプ税制勧告書にみる戦後税制改革" },
  { year: 2018, era: "古代", field: "政治", format: "正誤", verified: true, memo: "大化改新から大宝律令への律令国家形成" },
  { year: 2018, era: "中世", field: "外交史", format: "正誤", verified: true, memo: "琉球中継貿易と南蛮貿易・日本海交易の展開" },
  { year: 2018, era: "近世", field: "外交史", format: "正誤", verified: true, memo: "琉球中継貿易と南蛮貿易・日本海交易の展開" },
  { year: 2018, era: "近代", field: "政治", format: "史料", verified: true, memo: "植木枝盛日記にみる自由民権運動" },
  { year: 2018, era: "現代", field: "社会経済", format: "正誤", verified: true, memo: "高度経済成長の基盤と公害・ニクソンショック" },
  { year: 2019, era: "古代", field: "政治", format: "正誤", verified: true, memo: "藤原京・平城京の都城制と都市生活" },
  { year: 2019, era: "中世", field: "法制", format: "正誤", verified: true, memo: "鎌倉から江戸期にかけての徳政令の変遷" },
  { year: 2019, era: "近世", field: "法制", format: "正誤", verified: true, memo: "鎌倉から江戸期にかけての徳政令の変遷" },
  { year: 2019, era: "近代", field: "政治", format: "史料", verified: true, memo: "妹尾義郎日記にみる戦間期の政党政治" },
  { year: 2019, era: "近代", field: "政治", format: "正誤", verified: true, memo: "要人暗殺にみる近代日本のテロリズム" },
  { year: 2019, era: "現代", field: "政治", format: "正誤", verified: true, memo: "要人暗殺にみる近代日本のテロリズム" },
  { year: 2020, era: "古代", field: "政治", format: "記述", verified: true, memo: "摂関政治から院政・鎌倉幕府成立まで" },
  { year: 2020, era: "中世", field: "政治", format: "記述", verified: true, memo: "摂関政治から院政・鎌倉幕府成立まで" },
  { year: 2020, era: "近世", field: "政治", format: "正誤", verified: true, memo: "享保・寛政・天保の三大改革の比較" },
  { year: 2020, era: "近代", field: "外交史", format: "史料", verified: true, memo: "石橋湛山の大正期対外論説(小日本主義)" },
  { year: 2020, era: "現代", field: "政治", format: "記述", verified: true, memo: "占領期の教育改革と教育基本法の制定" },
  { year: 2021, era: "古代", field: "政治", format: "正誤", verified: true, memo: "五畿七道と東海道(交通路と地方支配)" },
  { year: 2021, era: "中世", field: "政治", format: "正誤", verified: true, memo: "五畿七道と東海道(交通路と地方支配)" },
  { year: 2021, era: "中世", field: "社会経済", format: "正誤", verified: true, memo: "一揆の歴史(国人〜土一揆〜百姓一揆〜明治)" },
  { year: 2021, era: "近世", field: "社会経済", format: "正誤", verified: true, memo: "一揆の歴史(国人〜土一揆〜百姓一揆〜明治)" },
  { year: 2021, era: "近代", field: "外交史", format: "史料", verified: true, memo: "通信の歴史(電報・情報戦の史料)" },
  { year: 2021, era: "現代", field: "社会経済", format: "正誤", verified: true, memo: "円ドル為替と戦後経済(ニクソン〜プラザ〜バブル)" },
  { year: 2022, era: "古代", field: "政治", format: "正誤", verified: true, memo: "改元(年号)の歴史" },
  { year: 2022, era: "中世", field: "政治", format: "正誤", verified: true, memo: "改元(年号)の歴史" },
  { year: 2022, era: "近世", field: "外交史", format: "正誤", verified: true, memo: "琉球王国と対外関係(琉球処分まで)" },
  { year: 2022, era: "近代", field: "政治", format: "史料", verified: true, memo: "大津事件・司法権独立(日記史料1891)" },
  { year: 2022, era: "現代", field: "外交史", format: "正誤", verified: true, memo: "日米・日中関係(1970年代〜ODA・貿易摩擦)" },
  { year: 2023, era: "古代", field: "社会経済", format: "正誤", verified: true, memo: "食料確保の歴史(気候と農業・飢饉)" },
  { year: 2023, era: "中世", field: "社会経済", format: "正誤", verified: true, memo: "食料確保の歴史(気候と農業・飢饉)" },
  { year: 2023, era: "中世", field: "外交史", format: "正誤", verified: true, memo: "モンゴル襲来と日明・日朝貿易" },
  { year: 2023, era: "近代", field: "政治", format: "史料", verified: true, memo: "日記A群B群(1908-17史料)" },
  { year: 2023, era: "近代", field: "政治", format: "正誤", verified: true, memo: "地方自治制度史(山県〜GHQ〜革新自治体)" },
  { year: 2023, era: "現代", field: "政治", format: "正誤", verified: true, memo: "地方自治制度史(山県〜GHQ〜革新自治体)" },
  { year: 2024, era: "古代", field: "文化史", format: "正誤", verified: true, memo: "文字・文書の受容(漢字〜仮名)" },
  { year: 2024, era: "中世", field: "文化史", format: "正誤", verified: true, memo: "文字・文書の受容(漢字〜仮名)" },
  { year: 2024, era: "近世", field: "外交史", format: "正誤", verified: true, memo: "キリスト教と禁教・切支丹屋敷" },
  { year: 2024, era: "近代", field: "社会経済", format: "史料", verified: true, memo: "高橋是清の自伝(金本位制史料)" },
  { year: 2024, era: "現代", field: "社会経済", format: "正誤", verified: true, memo: "戦後経済(特需〜高度成長〜中曽根)" },
  { year: 2025, era: "古代", field: "社会経済", format: "記述", verified: true, memo: "山と信仰・生活" },
  { year: 2025, era: "中世", field: "社会経済", format: "記述", verified: true, memo: "山と信仰・生活" },
  { year: 2025, era: "近世", field: "文化史", format: "正誤", verified: true, memo: "江戸の出版文化" },
  { year: 2025, era: "近代", field: "政治", format: "史料", verified: true, memo: "牧野伸顕の日記(1922-29史料)" },
  { year: 2025, era: "現代", field: "政治", format: "記述", verified: true, memo: "占領期〜サンフランシスコ講和〜国交回復" },
  { year: 2026, era: "古代", field: "外交史", format: "正誤", verified: true, memo: "海を越えた対外交流(渡来人〜禅宗)" },
  { year: 2026, era: "中世", field: "外交史", format: "正誤", verified: true, memo: "海を越えた対外交流(渡来人〜禅宗)" },
  { year: 2026, era: "中世", field: "政治", format: "正誤", verified: true, memo: "「幕府」の語源と三武家政権" },
  { year: 2026, era: "近世", field: "政治", format: "正誤", verified: true, memo: "「幕府」の語源と三武家政権" },
  { year: 2026, era: "近代", field: "政治", format: "史料", verified: true, memo: "井上馨訃報記事(1915新聞史料)" },
  { year: 2026, era: "現代", field: "社会経済", format: "記述", verified: true, memo: "自由貿易体制 世界恐慌〜GATT〜WTO" },
];

/* =====================================================================
   ② 問題プール（すべてオリジナル・史実確認済みのダミー）
   type: "truefalse"（正誤） | "short"（一問一答） | "essay"（論述・自己採点）
     truefalse … choices を出し、answer は正解の index
     short     … answer に正解文字列（表記ゆれは自己判定）
     essay     … modelAnswer に模範解答。採点はせず本人が○×自己判定
   difficulty: 1（易）〜 5（難）
   ===================================================================== */
const QUESTIONS = [
  {
    id: "q001",
    field: "近代",
    difficulty: 2,
    type: "truefalse",
    question: "大日本帝国憲法は、君主権の強いプロイセン（ドイツ）の憲法を主な手本として制定された。",
    choices: ["正しい", "誤っている"],
    answer: 0,
    modelAnswer: "",
    explanation: "大日本帝国憲法（1889年発布）は、伊藤博文らが渡欧して調査し、君主権の強いプロイセン型憲法を範として起草された。よって正しい。"
  },
  {
    id: "q002",
    field: "外交史",
    difficulty: 3,
    type: "truefalse",
    question: "日英同盟は、ロシアの南下に対抗する目的で1902年に結ばれた。",
    choices: ["正しい", "誤っている"],
    answer: 0,
    modelAnswer: "",
    explanation: "日英同盟は1902年、東アジアにおけるロシアの南下を共通の脅威として日本とイギリスの間で締結された。よって正しい。"
  },
  {
    id: "q003",
    field: "近代",
    difficulty: 3,
    type: "truefalse",
    question: "地租改正では、課税の基準を収穫高から地価へと改め、税は米で物納された。",
    choices: ["正しい", "誤っている"],
    answer: 1,
    modelAnswer: "",
    explanation: "地租改正（1873年〜）は課税基準を地価に改めた点は正しいが、税は米ではなく地価の3%を金納とした。物納としている点が誤り。"
  },
  {
    id: "q004",
    field: "中世",
    difficulty: 2,
    type: "short",
    question: "鎌倉幕府の第3代執権で、1232年に御成敗式目（貞永式目）を制定した人物は誰か。",
    choices: [],
    answer: "北条泰時",
    modelAnswer: "北条泰時",
    explanation: "御成敗式目は1232年、第3代執権・北条泰時が制定した武家最初の体系的な法令。武家社会の慣習（道理）を成文化した。"
  },
  {
    id: "q005",
    field: "古代",
    difficulty: 2,
    type: "short",
    question: "894年に遣唐使の派遣停止を朝廷に提案した人物は誰か。",
    choices: [],
    answer: "菅原道真",
    modelAnswer: "菅原道真",
    explanation: "894年、菅原道真は唐の衰退や航路の危険を理由に遣唐使の派遣停止を提案し、これが受け入れられた。"
  },
  {
    id: "q006",
    field: "文化史",
    difficulty: 3,
    type: "short",
    question: "『古今和歌集』の編纂を中心的に担い、仮名序を記したとされる歌人は誰か。",
    choices: [],
    answer: "紀貫之",
    modelAnswer: "紀貫之",
    explanation: "『古今和歌集』（905年）は醍醐天皇の命による最初の勅撰和歌集で、紀貫之らが編纂し、仮名序も紀貫之によるとされる。"
  },
  {
    id: "q007",
    field: "近世",
    difficulty: 4,
    type: "truefalse",
    question: "享保の改革を行った8代将軍徳川吉宗は、上げ米の制を定めて大名に米を上納させ、代償として参勤交代の在府期間を短縮した。",
    choices: ["正しい", "誤っている"],
    answer: 0,
    modelAnswer: "",
    explanation: "上げ米の制（1722年）では大名に石高1万石につき100石を上納させ、代わりに江戸在府期間を半年に短縮した。よって正しい。"
  },
  {
    id: "q008",
    field: "社会経済",
    difficulty: 4,
    type: "essay",
    question: "幕末の開港（1859年〜）が、当時の日本国内の物価や経済に与えた影響を、80字程度で説明せよ。",
    choices: [],
    answer: "",
    modelAnswer: "生糸や茶などが大量に輸出され国内で品不足となり物価が高騰した。また金銀比価の違いから金貨が海外へ流出し、幕府の貨幣改鋳もあって経済は混乱した。（約75字）",
    explanation: "採点の観点：①輸出増（生糸中心）による品不足と物価高騰、②内外の金銀比価差による金の海外流出、の2点に触れられていれば十分。字数は目安。"
  },
  {
    id: "q009",
    field: "現代",
    difficulty: 3,
    type: "short",
    question: "1951年に調印され、翌1952年に発効して日本が主権を回復した講和条約を何というか。",
    choices: [],
    answer: "サンフランシスコ平和条約",
    modelAnswer: "サンフランシスコ平和条約",
    explanation: "サンフランシスコ平和条約は1951年に調印、1952年発効。これにより連合国による占領が終わり日本は主権を回復した（同時に日米安全保障条約も締結）。"
  },
  {
    id: "q010",
    field: "外交史",
    difficulty: 5,
    type: "essay",
    question: "1911年に日本が関税自主権の完全回復を達成するまでの、幕末以来の不平等条約改正の流れを120字程度で説明せよ。",
    choices: [],
    answer: "",
    modelAnswer: "幕末の安政の五カ国条約で領事裁判権を認め関税自主権を失った。明治政府は改正交渉を続け、1894年に陸奥宗光が領事裁判権の撤廃に成功し、1911年に小村寿太郎が関税自主権の完全回復を達成した。（約110字）",
    explanation: "採点の観点：①不平等の中身（領事裁判権・関税自主権の欠如）、②1894年陸奥宗光＝領事裁判権撤廃、③1911年小村寿太郎＝関税自主権回復、の3点。"
  }
];

/* =====================================================================
   ③ 学習ログの種（初回起動時だけ localStorage に流し込むダミー）
   以降は localStorage 側が正。空配列にすれば種なしで始まる。
   ===================================================================== */
const LOGS_SEED = [
  { date: "2026-07-17", field: "外交史", correct: 7, total: 10 },
  { date: "2026-07-18", field: "近代",   correct: 8, total: 10 },
  { date: "2026-07-19", field: "文化史", correct: 6, total: 8  }
];

