/* 他学部の出題傾向データ（大問単位・直近5年サンプル／第一文学部は全4年）
   実際の過去問PDFを大問単位で読み、時代・分野・形式・小問数のメタデータのみを抽出。
   問題文・選択肢・史料の文言は一切複製していない。テーマ名は独自の要約。*/
const FACULTY_TRENDS = [
  {"faculty": "法学部", "year": "2022", "daimon": "I", "theme": "改元(年号)の歴史", "eras": ["古代", "中世"], "field": "政治・法制", "formats": ["記述"], "subQ": 10, "mark": 6, "write": 4, "shiryo": false},
  {"faculty": "法学部", "year": "2022", "daimon": "II", "theme": "琉球王国と対外関係(琉球処分まで)", "eras": ["近世"], "field": "外交史", "formats": ["記述"], "subQ": 10, "mark": 6, "write": 4, "shiryo": false},
  {"faculty": "法学部", "year": "2022", "daimon": "III", "theme": "大津事件・司法権独立(日記史料1891)", "eras": ["近代"], "field": "政治・法制", "formats": ["史料", "記述"], "subQ": 10, "mark": 6, "write": 4, "shiryo": true},
  {"faculty": "法学部", "year": "2022", "daimon": "IV", "theme": "日米・日中関係(1970年代〜ODA・貿易摩擦)", "eras": ["現代"], "field": "外交史", "formats": ["記述"], "subQ": 10, "mark": 5, "write": 5, "shiryo": false},
  {"faculty": "法学部", "year": "2023", "daimon": "I", "theme": "食料確保の歴史(気候と農業・飢饉)", "eras": ["古代", "中世"], "field": "社会経済", "formats": ["記述"], "subQ": 10, "mark": 6, "write": 4, "shiryo": false},
  {"faculty": "法学部", "year": "2023", "daimon": "II", "theme": "モンゴル襲来と日明・日朝貿易", "eras": ["中世"], "field": "外交史", "formats": ["記述"], "subQ": 10, "mark": 6, "write": 4, "shiryo": false},
  {"faculty": "法学部", "year": "2023", "daimon": "III", "theme": "日記A群B群(1908-17史料)", "eras": ["近代"], "field": "政治・法制", "formats": ["史料", "記述"], "subQ": 10, "mark": 5, "write": 5, "shiryo": true},
  {"faculty": "法学部", "year": "2023", "daimon": "IV", "theme": "地方自治制度史(山県〜GHQ〜革新自治体)", "eras": ["近代", "現代"], "field": "政治・法制", "formats": ["記述"], "subQ": 10, "mark": 6, "write": 4, "shiryo": false},
  {"faculty": "法学部", "year": "2024", "daimon": "I", "theme": "文字・文書の受容(漢字〜仮名)", "eras": ["古代", "中世"], "field": "文化史", "formats": ["記述"], "subQ": 10, "mark": 5, "write": 5, "shiryo": false},
  {"faculty": "法学部", "year": "2024", "daimon": "II", "theme": "キリスト教と禁教・切支丹屋敷", "eras": ["近世"], "field": "外交史", "formats": ["記述"], "subQ": 10, "mark": 5, "write": 5, "shiryo": false},
  {"faculty": "法学部", "year": "2024", "daimon": "III", "theme": "高橋是清の自伝(金本位制史料)", "eras": ["近代"], "field": "社会経済", "formats": ["史料", "記述"], "subQ": 10, "mark": 5, "write": 5, "shiryo": true},
  {"faculty": "法学部", "year": "2024", "daimon": "IV", "theme": "戦後経済(特需〜高度成長〜中曽根)", "eras": ["現代"], "field": "社会経済", "formats": ["記述"], "subQ": 10, "mark": 6, "write": 4, "shiryo": false},
  {"faculty": "法学部", "year": "2025", "daimon": "I", "theme": "山と信仰・生活", "eras": ["古代", "中世"], "field": "社会経済", "formats": ["記述"], "subQ": 10, "mark": 4, "write": 6, "shiryo": false},
  {"faculty": "法学部", "year": "2025", "daimon": "II", "theme": "江戸の出版文化", "eras": ["近世"], "field": "文化史", "formats": ["記述"], "subQ": 10, "mark": 5, "write": 5, "shiryo": false},
  {"faculty": "法学部", "year": "2025", "daimon": "III", "theme": "牧野伸顕の日記(1922-29史料)", "eras": ["近代"], "field": "政治・法制", "formats": ["史料", "記述"], "subQ": 10, "mark": 5, "write": 5, "shiryo": true},
  {"faculty": "法学部", "year": "2025", "daimon": "IV", "theme": "占領期〜サンフランシスコ講和〜国交回復", "eras": ["現代"], "field": "政治・法制", "formats": ["記述"], "subQ": 10, "mark": 4, "write": 6, "shiryo": false},
  {"faculty": "法学部", "year": "2026", "daimon": "I", "theme": "海を越えた対外交流(渡来人〜禅宗)", "eras": ["古代", "中世"], "field": "外交史", "formats": ["記述"], "subQ": 10, "mark": 5, "write": 5, "shiryo": false},
  {"faculty": "法学部", "year": "2026", "daimon": "II", "theme": "「幕府」の語源と三武家政権", "eras": ["中世", "近世"], "field": "政治・法制", "formats": ["記述"], "subQ": 10, "mark": 5, "write": 5, "shiryo": false},
  {"faculty": "法学部", "year": "2026", "daimon": "III", "theme": "井上馨訃報記事(1915新聞史料)", "eras": ["近代"], "field": "政治・法制", "formats": ["史料", "記述"], "subQ": 10, "mark": 6, "write": 4, "shiryo": true},
  {"faculty": "法学部", "year": "2026", "daimon": "IV", "theme": "自由貿易体制 世界恐慌〜GATT〜WTO", "eras": ["現代"], "field": "社会経済", "formats": ["記述"], "subQ": 10, "mark": 4, "write": 6, "shiryo": false},
  {"faculty": "社会科学部", "year": "2017", "daimon": "I", "theme": "法制度と司法の歴史的変遷", "eras": ["古代", "中世", "近世", "近代", "現代"], "field": "政治・法制", "formats": ["正誤"], "subQ": 10, "mark": 10, "write": 0, "shiryo": false},
  {"faculty": "社会科学部", "year": "2017", "daimon": "II", "theme": "都・東京の変遷と生活文化", "eras": ["古代", "中世", "近世", "近代", "現代"], "field": "社会経済", "formats": ["正誤"], "subQ": 10, "mark": 10, "write": 0, "shiryo": false},
  {"faculty": "社会科学部", "year": "2017", "daimon": "III", "theme": "教育と政治思想の歴史", "eras": ["古代", "中世", "近世", "近代", "現代"], "field": "文化史", "formats": ["正誤", "一問一答", "整序組合せ"], "subQ": 10, "mark": 10, "write": 0, "shiryo": false},
  {"faculty": "社会科学部", "year": "2017", "daimon": "IV", "theme": "近現代の農村と地主制の変容", "eras": ["近世", "近代", "現代"], "field": "社会経済", "formats": ["正誤", "整序組合せ", "史料"], "subQ": 10, "mark": 10, "write": 0, "shiryo": true},
  {"faculty": "社会科学部", "year": "2018", "daimon": "I", "theme": "印刷・出版と言論統制の歴史", "eras": ["古代", "中世", "近世", "近代", "現代"], "field": "文化史", "formats": ["正誤", "一問一答", "史料"], "subQ": 10, "mark": 10, "write": 0, "shiryo": true},
  {"faculty": "社会科学部", "year": "2018", "daimon": "II", "theme": "貨幣制度と経済史の変遷", "eras": ["古代", "中世", "近世", "近代", "現代"], "field": "社会経済", "formats": ["正誤"], "subQ": 10, "mark": 10, "write": 0, "shiryo": false},
  {"faculty": "社会科学部", "year": "2018", "daimon": "III", "theme": "京都の都市発展と文化財保護", "eras": ["古代", "中世", "近世", "近代", "現代"], "field": "社会経済", "formats": ["正誤", "一問一答", "整序組合せ"], "subQ": 10, "mark": 10, "write": 0, "shiryo": false},
  {"faculty": "社会科学部", "year": "2018", "daimon": "IV", "theme": "技術革新と産業発展の歴史", "eras": ["古代", "中世", "近世", "近代", "現代"], "field": "社会経済", "formats": ["正誤", "一問一答"], "subQ": 10, "mark": 10, "write": 0, "shiryo": false},
  {"faculty": "社会科学部", "year": "2019", "daimon": "I", "theme": "農業の発展と徴税制度の変遷", "eras": ["古代", "中世", "近世", "近代"], "field": "社会経済", "formats": ["正誤", "一問一答"], "subQ": 10, "mark": 10, "write": 0, "shiryo": false},
  {"faculty": "社会科学部", "year": "2019", "daimon": "II", "theme": "日本の対外認識と外交史の変遷", "eras": ["古代", "中世", "近世", "近代", "現代"], "field": "外交史", "formats": ["正誤", "一問一答", "史料"], "subQ": 10, "mark": 10, "write": 0, "shiryo": true},
  {"faculty": "社会科学部", "year": "2019", "daimon": "III", "theme": "明治期の民法典編纂と法制近代化", "eras": ["古代", "中世", "近世", "近代"], "field": "政治・法制", "formats": ["正誤", "一問一答", "史料"], "subQ": 10, "mark": 10, "write": 0, "shiryo": true},
  {"faculty": "社会科学部", "year": "2019", "daimon": "IV", "theme": "太平洋戦争末期の政治と言論統制", "eras": ["近代"], "field": "政治・法制", "formats": ["正誤", "空欄補充", "一問一答", "史料"], "subQ": 10, "mark": 10, "write": 0, "shiryo": true},
  {"faculty": "社会科学部", "year": "2020", "daimon": "I", "theme": "地方支配制度と村落自治の変遷", "eras": ["古代", "中世", "近世", "近代", "現代"], "field": "政治・法制", "formats": ["正誤", "整序組合せ"], "subQ": 10, "mark": 10, "write": 0, "shiryo": false},
  {"faculty": "社会科学部", "year": "2020", "daimon": "II", "theme": "交通・通信網の発達史", "eras": ["古代", "中世", "近世", "近代", "現代"], "field": "社会経済", "formats": ["正誤", "整序組合せ", "一問一答"], "subQ": 10, "mark": 10, "write": 0, "shiryo": false},
  {"faculty": "社会科学部", "year": "2020", "daimon": "III", "theme": "疫病・飢饉と災害対応の歴史", "eras": ["古代", "中世", "近世", "近代"], "field": "社会経済", "formats": ["正誤", "一問一答", "整序組合せ", "史料"], "subQ": 10, "mark": 10, "write": 0, "shiryo": true},
  {"faculty": "社会科学部", "year": "2020", "daimon": "IV", "theme": "資源獲得をめぐる対外政策の歴史", "eras": ["近世", "近代", "現代"], "field": "外交史", "formats": ["正誤", "一問一答", "整序組合せ", "空欄補充", "史料"], "subQ": 10, "mark": 10, "write": 0, "shiryo": true},
  {"faculty": "社会科学部", "year": "2024", "daimon": "I", "theme": "宝物・文庫と博物館の変遷史", "eras": ["古代", "中世", "近世", "近代", "現代"], "field": "文化史", "formats": ["正誤", "整序組合せ", "空欄補充", "史料"], "subQ": 10, "mark": 10, "write": 0, "shiryo": true},
  {"faculty": "社会科学部", "year": "2024", "daimon": "II", "theme": "徳政令の歴史的展開", "eras": ["中世", "近世"], "field": "政治・法制", "formats": ["正誤", "一問一答", "空欄補充", "史料", "論述"], "subQ": 8, "mark": 7, "write": 1, "shiryo": true},
  {"faculty": "社会科学部", "year": "2024", "daimon": "III", "theme": "日本外交史の通時的展開", "eras": ["古代", "中世", "近世", "近代"], "field": "外交史", "formats": ["正誤", "一問一答", "史料"], "subQ": 10, "mark": 10, "write": 0, "shiryo": true},
  {"faculty": "社会科学部", "year": "2024", "daimon": "IV", "theme": "海外留学・使節派遣の歴史", "eras": ["古代", "中世", "近世", "近代", "現代"], "field": "文化史", "formats": ["正誤", "一問一答", "整序組合せ", "史料"], "subQ": 10, "mark": 10, "write": 0, "shiryo": true},
  {"faculty": "商学部", "year": "2019", "daimon": "I", "theme": "摂関政治と皇位継承", "eras": ["古代"], "field": "政治・法制", "formats": ["空欄補充", "正誤"], "subQ": 10, "mark": 10, "write": 0, "shiryo": false},
  {"faculty": "商学部", "year": "2019", "daimon": "II", "theme": "鎌倉幕府の成立と支配体制", "eras": ["中世"], "field": "政治・法制", "formats": ["史料", "空欄補充", "正誤"], "subQ": 10, "mark": 10, "write": 0, "shiryo": true},
  {"faculty": "商学部", "year": "2019", "daimon": "III", "theme": "江戸の都市政策と経済改革", "eras": ["近世"], "field": "社会経済", "formats": ["史料", "空欄補充", "正誤"], "subQ": 10, "mark": 10, "write": 0, "shiryo": true},
  {"faculty": "商学部", "year": "2019", "daimon": "IV", "theme": "明治の私学設立と政党・外交", "eras": ["近代"], "field": "政治・法制", "formats": ["史料", "正誤", "空欄補充"], "subQ": 10, "mark": 10, "write": 0, "shiryo": true},
  {"faculty": "商学部", "year": "2019", "daimon": "V", "theme": "大正昭和初期の経済変動", "eras": ["近代"], "field": "社会経済", "formats": ["正誤", "空欄補充", "記述"], "subQ": 10, "mark": 6, "write": 4, "shiryo": false},
  {"faculty": "商学部", "year": "2019", "daimon": "VI", "theme": "占領期の三大改革", "eras": ["現代"], "field": "社会経済", "formats": ["記述", "正誤"], "subQ": 9, "mark": 4, "write": 5, "shiryo": false},
  {"faculty": "商学部", "year": "2020", "daimon": "I", "theme": "古代の駅路と地方支配", "eras": ["古代"], "field": "政治・法制", "formats": ["空欄補充", "正誤", "整序組合せ", "一問一答"], "subQ": 10, "mark": 10, "write": 0, "shiryo": false},
  {"faculty": "商学部", "year": "2020", "daimon": "II", "theme": "応仁の乱前後の争乱と文化", "eras": ["中世"], "field": "政治・法制", "formats": ["史料", "正誤", "空欄補充", "一問一答"], "subQ": 10, "mark": 10, "write": 0, "shiryo": true},
  {"faculty": "商学部", "year": "2020", "daimon": "III", "theme": "江戸幕府支配の正当性論", "eras": ["近世"], "field": "政治・法制", "formats": ["史料", "空欄補充", "正誤", "一問一答"], "subQ": 10, "mark": 10, "write": 0, "shiryo": true},
  {"faculty": "商学部", "year": "2020", "daimon": "IV", "theme": "明治立憲政治と政党の展開", "eras": ["近代"], "field": "政治・法制", "formats": ["史料", "空欄補充", "正誤"], "subQ": 10, "mark": 10, "write": 0, "shiryo": true},
  {"faculty": "商学部", "year": "2020", "daimon": "V", "theme": "近代日本の産業と経済政策", "eras": ["近代"], "field": "社会経済", "formats": ["正誤", "記述", "空欄補充"], "subQ": 10, "mark": 7, "write": 3, "shiryo": false},
  {"faculty": "商学部", "year": "2020", "daimon": "VI", "theme": "占領期の思想と経済復興", "eras": ["現代"], "field": "文化史", "formats": ["記述", "正誤"], "subQ": 9, "mark": 4, "write": 5, "shiryo": false},
  {"faculty": "商学部", "year": "2024", "daimon": "I", "theme": "古代の反乱と王権伸長", "eras": ["古代"], "field": "政治・法制", "formats": ["史料", "空欄補充", "正誤", "一問一答"], "subQ": 10, "mark": 10, "write": 0, "shiryo": true},
  {"faculty": "商学部", "year": "2024", "daimon": "II", "theme": "鎌倉末期の争乱と建武政権", "eras": ["中世"], "field": "政治・法制", "formats": ["史料", "空欄補充", "正誤", "一問一答"], "subQ": 10, "mark": 10, "write": 0, "shiryo": true},
  {"faculty": "商学部", "year": "2024", "daimon": "III", "theme": "近世出版文化と一揆物語", "eras": ["近世"], "field": "文化史", "formats": ["史料", "整序組合せ", "正誤", "一問一答"], "subQ": 10, "mark": 10, "write": 0, "shiryo": true},
  {"faculty": "商学部", "year": "2024", "daimon": "IV", "theme": "明治藩閥政治家の鼎談", "eras": ["近代"], "field": "政治・法制", "formats": ["史料", "正誤", "一問一答"], "subQ": 10, "mark": 10, "write": 0, "shiryo": true},
  {"faculty": "商学部", "year": "2024", "daimon": "V", "theme": "近代日本の経済と芸術文化", "eras": ["近代"], "field": "社会経済", "formats": ["正誤", "記述"], "subQ": 10, "mark": 5, "write": 5, "shiryo": false},
  {"faculty": "商学部", "year": "2024", "daimon": "VI", "theme": "高度成長期の消費社会", "eras": ["現代"], "field": "社会経済", "formats": ["記述", "正誤", "一問一答", "論述"], "subQ": 9, "mark": 4, "write": 5, "shiryo": false},
  {"faculty": "商学部", "year": "2025", "daimon": "I", "theme": "古代刀剣にみる大王権力", "eras": ["古代"], "field": "政治・法制", "formats": ["史料", "空欄補充", "正誤", "一問一答"], "subQ": 10, "mark": 10, "write": 0, "shiryo": true},
  {"faculty": "商学部", "year": "2025", "daimon": "II", "theme": "室町期の争乱と国人一揆", "eras": ["中世"], "field": "政治・法制", "formats": ["史料", "整序組合せ", "空欄補充", "正誤", "一問一答"], "subQ": 10, "mark": 10, "write": 0, "shiryo": true},
  {"faculty": "商学部", "year": "2025", "daimon": "III", "theme": "蝦夷地・琉球の対外関係", "eras": ["近世", "近代"], "field": "外交史", "formats": ["史料", "整序組合せ", "正誤", "一問一答"], "subQ": 10, "mark": 10, "write": 0, "shiryo": true},
  {"faculty": "商学部", "year": "2025", "daimon": "IV", "theme": "近代政治家の追悼にみる評伝", "eras": ["近代"], "field": "政治・法制", "formats": ["史料", "空欄補充", "正誤", "一問一答"], "subQ": 10, "mark": 10, "write": 0, "shiryo": true},
  {"faculty": "商学部", "year": "2025", "daimon": "V", "theme": "近代の産業と労働問題", "eras": ["近代"], "field": "社会経済", "formats": ["正誤", "空欄補充", "記述"], "subQ": 10, "mark": 5, "write": 5, "shiryo": false},
  {"faculty": "商学部", "year": "2025", "daimon": "VI", "theme": "占領期の経済・労働改革", "eras": ["現代"], "field": "社会経済", "formats": ["記述", "正誤", "論述"], "subQ": 9, "mark": 4, "write": 5, "shiryo": false},
  {"faculty": "商学部", "year": "2026", "daimon": "I", "theme": "古代東北の蝦夷政策", "eras": ["古代"], "field": "政治・法制", "formats": ["空欄補充", "正誤", "一問一答"], "subQ": 10, "mark": 10, "write": 0, "shiryo": false},
  {"faculty": "商学部", "year": "2026", "daimon": "II", "theme": "御成敗式目の内容と意義", "eras": ["中世"], "field": "政治・法制", "formats": ["史料", "空欄補充", "正誤", "一問一答", "整序組合せ"], "subQ": 10, "mark": 10, "write": 0, "shiryo": true},
  {"faculty": "商学部", "year": "2026", "daimon": "III", "theme": "大奥にみる女性の政治関与", "eras": ["近世"], "field": "政治・法制", "formats": ["史料", "正誤", "一問一答", "整序組合せ"], "subQ": 10, "mark": 10, "write": 0, "shiryo": true},
  {"faculty": "商学部", "year": "2026", "daimon": "IV", "theme": "自由民権運動の展開", "eras": ["近代"], "field": "政治・法制", "formats": ["史料", "空欄補充", "正誤", "一問一答"], "subQ": 10, "mark": 10, "write": 0, "shiryo": true},
  {"faculty": "商学部", "year": "2026", "daimon": "V", "theme": "近代日本の金融制度史", "eras": ["近代"], "field": "社会経済", "formats": ["正誤", "整序組合せ", "記述", "一問一答"], "subQ": 10, "mark": 6, "write": 4, "shiryo": false},
  {"faculty": "商学部", "year": "2026", "daimon": "VI", "theme": "占領期の政党と戦後混乱", "eras": ["現代"], "field": "政治・法制", "formats": ["記述", "正誤", "論述"], "subQ": 9, "mark": 4, "write": 5, "shiryo": false},
  {"faculty": "教育学部", "year": "2019", "daimon": "I", "theme": "郡司・国司の任用制度と地方支配", "eras": ["古代"], "field": "政治・法制", "formats": ["正誤", "空欄補充", "記述", "史料"], "subQ": 8, "mark": 6, "write": 2, "shiryo": true},
  {"faculty": "教育学部", "year": "2019", "daimon": "II", "theme": "鎌倉幕府滅亡期の悪党と得宗専制", "eras": ["中世"], "field": "政治・法制", "formats": ["史料", "正誤", "空欄補充", "記述"], "subQ": 8, "mark": 5, "write": 3, "shiryo": true},
  {"faculty": "教育学部", "year": "2019", "daimon": "III", "theme": "鎖国祖法観の動揺と対外的危機", "eras": ["近世"], "field": "外交史", "formats": ["記述", "正誤", "史料"], "subQ": 9, "mark": 7, "write": 2, "shiryo": true},
  {"faculty": "教育学部", "year": "2019", "daimon": "IV", "theme": "国体論と超国家主義・戦争思想", "eras": ["近代", "現代"], "field": "宗教・思想", "formats": ["記述", "正誤", "史料"], "subQ": 7, "mark": 5, "write": 2, "shiryo": true},
  {"faculty": "教育学部", "year": "2019", "daimon": "V", "theme": "安保闘争と戦後社会運動の展開", "eras": ["現代"], "field": "政治・法制", "formats": ["空欄補充", "記述", "正誤", "整序組合せ"], "subQ": 4, "mark": 3, "write": 1, "shiryo": false},
  {"faculty": "教育学部", "year": "2020", "daimon": "I", "theme": "史料の性格からみる古代・中世の文書史", "eras": ["古代", "中世"], "field": "文化史", "formats": ["正誤", "史料", "記述"], "subQ": 9, "mark": 7, "write": 2, "shiryo": true},
  {"faculty": "教育学部", "year": "2020", "daimon": "II", "theme": "嘉吉の変と嘉吉の徳政一揆", "eras": ["中世"], "field": "政治・法制", "formats": ["記述", "正誤", "空欄補充", "史料"], "subQ": 9, "mark": 7, "write": 2, "shiryo": true},
  {"faculty": "教育学部", "year": "2020", "daimon": "III", "theme": "江戸幕府の宗教統制と近世社会", "eras": ["近世"], "field": "宗教・思想", "formats": ["記述", "空欄補充", "史料", "正誤"], "subQ": 10, "mark": 7, "write": 3, "shiryo": true},
  {"faculty": "教育学部", "year": "2020", "daimon": "IV", "theme": "日清戦争から朝鮮戦争までの日朝関係", "eras": ["近代", "現代"], "field": "外交史", "formats": ["記述", "空欄補充", "正誤", "整序組合せ"], "subQ": 8, "mark": 6, "write": 2, "shiryo": false},
  {"faculty": "教育学部", "year": "2020", "daimon": "V", "theme": "青鞜社の女性解放運動と米騒動", "eras": ["近代"], "field": "社会経済", "formats": ["記述", "空欄補充", "史料", "正誤"], "subQ": 7, "mark": 5, "write": 2, "shiryo": true},
  {"faculty": "教育学部", "year": "2024", "daimon": "I", "theme": "氏姓制度から律令国家形成への地方支配", "eras": ["古代"], "field": "政治・法制", "formats": ["記述", "空欄補充", "正誤"], "subQ": 9, "mark": 6, "write": 3, "shiryo": false},
  {"faculty": "教育学部", "year": "2024", "daimon": "II", "theme": "成尋の入宋日記にみる日宋交流", "eras": ["古代"], "field": "外交史", "formats": ["正誤", "史料", "記述", "空欄補充"], "subQ": 7, "mark": 5, "write": 2, "shiryo": true},
  {"faculty": "教育学部", "year": "2024", "daimon": "III", "theme": "近世蝦夷地・アイヌ交易と異文化認識", "eras": ["近世"], "field": "外交史", "formats": ["記述", "正誤", "空欄補充", "史料", "整序組合せ"], "subQ": 11, "mark": 9, "write": 2, "shiryo": true},
  {"faculty": "教育学部", "year": "2024", "daimon": "IV", "theme": "維新期の民衆運動と自由民権の思想", "eras": ["近代"], "field": "社会経済", "formats": ["記述", "正誤", "史料", "整序組合せ"], "subQ": 4, "mark": 2, "write": 2, "shiryo": true},
  {"faculty": "教育学部", "year": "2024", "daimon": "V", "theme": "「階級」「女」の語からみる近現代社会運動史", "eras": ["近代", "現代"], "field": "社会経済", "formats": ["記述", "正誤", "史料", "整序組合せ", "空欄補充"], "subQ": 11, "mark": 8, "write": 3, "shiryo": true},
  {"faculty": "教育学部", "year": "2025", "daimon": "I", "theme": "古代における権力の可視化と王権の伸長", "eras": ["古代"], "field": "政治・法制", "formats": ["記述", "空欄補充", "正誤", "史料", "整序組合せ"], "subQ": 6, "mark": 5, "write": 1, "shiryo": true},
  {"faculty": "教育学部", "year": "2025", "daimon": "II", "theme": "院政期における僧兵の強訴と武士の台頭", "eras": ["古代"], "field": "政治・法制", "formats": ["正誤", "史料", "論述"], "subQ": 10, "mark": 9, "write": 1, "shiryo": true},
  {"faculty": "教育学部", "year": "2025", "daimon": "III", "theme": "五人組帳前書にみる近世の村と百姓", "eras": ["近世"], "field": "社会経済", "formats": ["記述", "空欄補充", "正誤", "史料", "整序組合せ"], "subQ": 10, "mark": 8, "write": 2, "shiryo": true},
  {"faculty": "教育学部", "year": "2025", "daimon": "IV", "theme": "幕末維新期の宗教政策と民衆信仰", "eras": ["近世", "近代"], "field": "宗教・思想", "formats": ["正誤", "史料", "記述", "整序組合せ"], "subQ": 4, "mark": 2, "write": 2, "shiryo": true},
  {"faculty": "教育学部", "year": "2025", "daimon": "V", "theme": "スペイン風邪流行と大正期の社会", "eras": ["近代"], "field": "社会経済", "formats": ["正誤", "史料"], "subQ": 5, "mark": 5, "write": 0, "shiryo": true},
  {"faculty": "教育学部", "year": "2025", "daimon": "VI", "theme": "高度経済成長と日本列島改造論", "eras": ["現代"], "field": "社会経済", "formats": ["記述", "空欄補充", "正誤", "史料", "整序組合せ"], "subQ": 7, "mark": 5, "write": 2, "shiryo": true},
  {"faculty": "教育学部", "year": "2026", "daimon": "I", "theme": "大伴氏の興亡にみる古代の氏族政治", "eras": ["古代"], "field": "政治・法制", "formats": ["記述", "正誤", "空欄補充", "史料", "整序組合せ"], "subQ": 9, "mark": 7, "write": 2, "shiryo": true},
  {"faculty": "教育学部", "year": "2026", "daimon": "II", "theme": "鎌倉・室町期の徳政論と土倉・徳政一揆", "eras": ["中世"], "field": "政治・法制", "formats": ["正誤", "空欄補充", "史料", "記述"], "subQ": 6, "mark": 5, "write": 1, "shiryo": true},
  {"faculty": "教育学部", "year": "2026", "daimon": "III", "theme": "田沼時代論と近世社会の性格", "eras": ["近世"], "field": "政治・法制", "formats": ["正誤", "空欄補充", "整序組合せ", "史料", "論述"], "subQ": 9, "mark": 8, "write": 1, "shiryo": true},
  {"faculty": "教育学部", "year": "2026", "daimon": "IV", "theme": "秩父事件から大正政変までの民衆運動", "eras": ["近代"], "field": "社会経済", "formats": ["記述", "空欄補充", "正誤", "史料", "整序組合せ"], "subQ": 7, "mark": 6, "write": 1, "shiryo": true},
  {"faculty": "教育学部", "year": "2026", "daimon": "V", "theme": "日本の帝国主義的拡大とその批判論", "eras": ["近代", "現代"], "field": "外交史", "formats": ["記述", "空欄補充", "正誤", "史料"], "subQ": 10, "mark": 8, "write": 2, "shiryo": true},
  {"faculty": "文化構想学部", "year": "2019", "daimon": "I", "theme": "天皇と上皇の権力関係史", "eras": ["古代", "中世", "近世"], "field": "政治・法制", "formats": ["空欄補充", "正誤", "記述", "整序組合せ"], "subQ": 11, "mark": 7, "write": 4, "shiryo": false},
  {"faculty": "文化構想学部", "year": "2019", "daimon": "II", "theme": "仏教伝来と宗派の展開", "eras": ["古代", "中世", "近世"], "field": "宗教・思想", "formats": ["空欄補充", "正誤", "記述", "一問一答"], "subQ": 10, "mark": 6, "write": 4, "shiryo": false},
  {"faculty": "文化構想学部", "year": "2019", "daimon": "III", "theme": "近世・近代の日欧関係史", "eras": ["近世", "近代"], "field": "外交史", "formats": ["正誤", "空欄補充", "記述"], "subQ": 10, "mark": 8, "write": 2, "shiryo": false},
  {"faculty": "文化構想学部", "year": "2019", "daimon": "IV", "theme": "裁判制度の歴史的変遷", "eras": ["古代", "中世", "近世", "近代", "現代"], "field": "政治・法制", "formats": ["空欄補充", "記述", "正誤", "一問一答"], "subQ": 11, "mark": 6, "write": 5, "shiryo": true},
  {"faculty": "文化構想学部", "year": "2020", "daimon": "I", "theme": "織物業の発展と技術伝播", "eras": ["古代", "中世", "近世", "近代"], "field": "社会経済", "formats": ["正誤", "空欄補充", "記述"], "subQ": 10, "mark": 6, "write": 4, "shiryo": false},
  {"faculty": "文化構想学部", "year": "2020", "daimon": "II", "theme": "政治における合議の変遷", "eras": ["古代", "中世", "近世", "近代"], "field": "政治・法制", "formats": ["正誤", "空欄補充", "整序組合せ", "記述"], "subQ": 10, "mark": 6, "write": 4, "shiryo": false},
  {"faculty": "文化構想学部", "year": "2020", "daimon": "III", "theme": "人と猫の関わりの歴史", "eras": ["古代", "中世", "近世", "近代", "現代"], "field": "文化史", "formats": ["空欄補充", "正誤", "記述"], "subQ": 12, "mark": 8, "write": 4, "shiryo": false},
  {"faculty": "文化構想学部", "year": "2020", "daimon": "IV", "theme": "交通・流通網の発達史", "eras": ["古代", "中世", "近世", "近代", "現代"], "field": "社会経済", "formats": ["正誤", "空欄補充", "記述"], "subQ": 11, "mark": 6, "write": 5, "shiryo": false},
  {"faculty": "文化構想学部", "year": "2024", "daimon": "I", "theme": "文官と武官の制度史", "eras": ["古代", "中世", "近世", "近代", "現代"], "field": "政治・法制", "formats": ["正誤", "空欄補充", "記述"], "subQ": 12, "mark": 9, "write": 3, "shiryo": true},
  {"faculty": "文化構想学部", "year": "2024", "daimon": "II", "theme": "旅行記にみる岡山の史跡", "eras": ["古代", "中世", "近世", "近代"], "field": "文化史", "formats": ["正誤", "空欄補充", "記述"], "subQ": 10, "mark": 4, "write": 6, "shiryo": false},
  {"faculty": "文化構想学部", "year": "2024", "daimon": "III", "theme": "海を通じた対外交流史", "eras": ["古代", "中世", "近世", "近代", "現代"], "field": "外交史", "formats": ["正誤", "整序組合せ", "空欄補充", "記述"], "subQ": 11, "mark": 9, "write": 2, "shiryo": false},
  {"faculty": "文化構想学部", "year": "2024", "daimon": "IV", "theme": "人間とウサギの関係史", "eras": ["古代", "中世", "近世", "近代", "現代"], "field": "文化史", "formats": ["正誤", "空欄補充", "記述"], "subQ": 13, "mark": 9, "write": 4, "shiryo": false},
  {"faculty": "文化構想学部", "year": "2025", "daimon": "I", "theme": "鉱山開発の歴史", "eras": ["古代", "中世", "近世", "近代", "現代"], "field": "社会経済", "formats": ["正誤", "空欄補充", "記述", "一問一答"], "subQ": 11, "mark": 9, "write": 2, "shiryo": false},
  {"faculty": "文化構想学部", "year": "2025", "daimon": "II", "theme": "時代ごとの改革の系譜", "eras": ["古代", "中世", "近世", "近代"], "field": "政治・法制", "formats": ["正誤", "空欄補充", "記述", "一問一答"], "subQ": 10, "mark": 7, "write": 3, "shiryo": false},
  {"faculty": "文化構想学部", "year": "2025", "daimon": "III", "theme": "食生活の歴史的変遷", "eras": ["古代", "中世", "近世", "近代", "現代"], "field": "社会経済", "formats": ["正誤", "空欄補充", "記述", "整序組合せ"], "subQ": 11, "mark": 6, "write": 5, "shiryo": false},
  {"faculty": "文化構想学部", "year": "2025", "daimon": "IV", "theme": "風刺と戯画の表現史", "eras": ["古代", "中世", "近世", "近代", "現代"], "field": "文化史", "formats": ["正誤", "空欄補充", "記述", "一問一答"], "subQ": 12, "mark": 8, "write": 4, "shiryo": true},
  {"faculty": "文化構想学部", "year": "2026", "daimon": "I", "theme": "琵琶湖水運と地域史", "eras": ["古代", "中世", "近世", "近代"], "field": "社会経済", "formats": ["正誤", "空欄補充", "記述", "一問一答"], "subQ": 11, "mark": 9, "write": 2, "shiryo": false},
  {"faculty": "文化構想学部", "year": "2026", "daimon": "II", "theme": "軍事からみる国家権力史", "eras": ["古代", "中世", "近世", "近代", "現代"], "field": "政治・法制", "formats": ["正誤", "空欄補充", "記述", "整序組合せ"], "subQ": 11, "mark": 7, "write": 4, "shiryo": true},
  {"faculty": "文化構想学部", "year": "2026", "daimon": "III", "theme": "天皇制度の歴史的展開", "eras": ["古代", "中世", "近世", "近代", "現代"], "field": "政治・法制", "formats": ["正誤", "空欄補充", "記述", "整序組合せ"], "subQ": 12, "mark": 9, "write": 3, "shiryo": true},
  {"faculty": "文化構想学部", "year": "2026", "daimon": "IV", "theme": "学校教育制度の変遷", "eras": ["古代", "中世", "近世", "近代", "現代"], "field": "文化史", "formats": ["正誤", "空欄補充", "記述", "整序組合せ"], "subQ": 12, "mark": 7, "write": 5, "shiryo": false},
  {"faculty": "政治経済学部", "year": "2015", "daimon": "I", "theme": "古代~中世の教育制度の変遷", "eras": ["古代", "中世"], "field": "文化史", "formats": ["史料", "正誤", "一問一答", "記述"], "subQ": 11, "mark": 8, "write": 3, "shiryo": true},
  {"faculty": "政治経済学部", "year": "2015", "daimon": "II", "theme": "近世の経済政策と庶民文化", "eras": ["近世"], "field": "社会経済", "formats": ["史料", "正誤", "一問一答", "記述"], "subQ": 11, "mark": 8, "write": 3, "shiryo": true},
  {"faculty": "政治経済学部", "year": "2015", "daimon": "III", "theme": "殖産興業と開拓使払下げ事件", "eras": ["近代"], "field": "社会経済", "formats": ["史料", "空欄補充", "一問一答", "正誤", "記述"], "subQ": 11, "mark": 8, "write": 3, "shiryo": true},
  {"faculty": "政治経済学部", "year": "2015", "daimon": "IV", "theme": "両大戦間期の外交と国際協調", "eras": ["近代"], "field": "外交史", "formats": ["史料", "一問一答", "正誤", "記述"], "subQ": 11, "mark": 8, "write": 3, "shiryo": true},
  {"faculty": "政治経済学部", "year": "2015", "daimon": "V", "theme": "戦後日本の経済政策の変遷", "eras": ["現代"], "field": "社会経済", "formats": ["史料", "一問一答", "正誤", "記述", "論述"], "subQ": 6, "mark": 4, "write": 2, "shiryo": true},
  {"faculty": "政治経済学部", "year": "2016", "daimon": "I", "theme": "藤原道長と後鳥羽上皇の系図", "eras": ["古代", "中世"], "field": "政治・法制", "formats": ["正誤", "空欄補充", "一問一答", "記述"], "subQ": 10, "mark": 7, "write": 3, "shiryo": false},
  {"faculty": "政治経済学部", "year": "2016", "daimon": "II", "theme": "露米交渉と幕末開国の経緯", "eras": ["近世"], "field": "外交史", "formats": ["史料", "正誤", "一問一答", "記述"], "subQ": 11, "mark": 8, "write": 3, "shiryo": true},
  {"faculty": "政治経済学部", "year": "2016", "daimon": "III", "theme": "大日本帝国憲法と衆議院選挙法", "eras": ["近代"], "field": "政治・法制", "formats": ["史料", "一問一答", "空欄補充", "正誤", "記述"], "subQ": 11, "mark": 8, "write": 3, "shiryo": true},
  {"faculty": "政治経済学部", "year": "2016", "daimon": "IV", "theme": "米騒動から昭和恐慌期の経済", "eras": ["近代"], "field": "社会経済", "formats": ["史料", "正誤", "一問一答", "整序組合せ", "記述"], "subQ": 11, "mark": 8, "write": 3, "shiryo": true},
  {"faculty": "政治経済学部", "year": "2016", "daimon": "V", "theme": "戦後衆議院選挙制度の変遷", "eras": ["現代"], "field": "政治・法制", "formats": ["史料", "整序組合せ", "一問一答", "正誤", "論述"], "subQ": 5, "mark": 4, "write": 1, "shiryo": true},
  {"faculty": "政治経済学部", "year": "2017", "daimon": "I", "theme": "古代~中世の旅と交通の発達", "eras": ["古代", "中世"], "field": "社会経済", "formats": ["正誤", "一問一答", "空欄補充", "記述"], "subQ": 10, "mark": 7, "write": 3, "shiryo": false},
  {"faculty": "政治経済学部", "year": "2017", "daimon": "II", "theme": "江戸時代の特産品と貿易制度", "eras": ["近世"], "field": "社会経済", "formats": ["史料", "正誤", "一問一答", "記述"], "subQ": 11, "mark": 8, "write": 3, "shiryo": true},
  {"faculty": "政治経済学部", "year": "2017", "daimon": "III", "theme": "地租改正・秩禄処分と鉄道業", "eras": ["近代"], "field": "社会経済", "formats": ["史料", "整序組合せ", "正誤", "一問一答", "記述"], "subQ": 11, "mark": 8, "write": 3, "shiryo": true},
  {"faculty": "政治経済学部", "year": "2017", "daimon": "IV", "theme": "第一次大戦期の外交と米騒動", "eras": ["近代"], "field": "外交史", "formats": ["史料", "一問一答", "空欄補充", "論述"], "subQ": 4, "mark": 3, "write": 1, "shiryo": true},
  {"faculty": "政治経済学部", "year": "2017", "daimon": "V", "theme": "戦後歴代首相の施政方針演説", "eras": ["現代"], "field": "政治・法制", "formats": ["史料", "整序組合せ", "一問一答", "正誤", "空欄補充", "記述"], "subQ": 11, "mark": 8, "write": 3, "shiryo": true},
  {"faculty": "政治経済学部", "year": "2018", "daimon": "I", "theme": "銭貨の鋳造と流通の歴史", "eras": ["古代", "中世", "近世"], "field": "社会経済", "formats": ["正誤", "一問一答", "空欄補充", "記述"], "subQ": 10, "mark": 8, "write": 2, "shiryo": false},
  {"faculty": "政治経済学部", "year": "2018", "daimon": "II", "theme": "幕末の外交政策と遣米使節", "eras": ["近世"], "field": "外交史", "formats": ["史料", "一問一答", "正誤", "記述"], "subQ": 11, "mark": 8, "write": 3, "shiryo": true},
  {"faculty": "政治経済学部", "year": "2018", "daimon": "III", "theme": "日清戦争前後の貿易と経済論", "eras": ["近代"], "field": "社会経済", "formats": ["史料", "一問一答", "論述"], "subQ": 4, "mark": 3, "write": 1, "shiryo": true},
  {"faculty": "政治経済学部", "year": "2018", "daimon": "IV", "theme": "桂園時代と第一次護憲運動", "eras": ["近代"], "field": "政治・法制", "formats": ["一問一答", "記述"], "subQ": 6, "mark": 2, "write": 4, "shiryo": false},
  {"faculty": "政治経済学部", "year": "2018", "daimon": "V", "theme": "高度成長期の政党政治と経済", "eras": ["現代"], "field": "社会経済", "formats": ["史料", "一問一答", "正誤", "空欄補充", "記述"], "subQ": 11, "mark": 8, "write": 3, "shiryo": true},
  {"faculty": "政治経済学部", "year": "2019", "daimon": "I", "theme": "太政官制度と摂関・幕府政治", "eras": ["古代", "中世"], "field": "政治・法制", "formats": ["空欄補充", "正誤", "一問一答", "記述"], "subQ": 10, "mark": 8, "write": 2, "shiryo": false},
  {"faculty": "政治経済学部", "year": "2019", "daimon": "II", "theme": "報徳仕法と諸産業・貨幣制度", "eras": ["近世"], "field": "社会経済", "formats": ["史料", "一問一答", "正誤", "空欄補充", "記述"], "subQ": 10, "mark": 7, "write": 3, "shiryo": true},
  {"faculty": "政治経済学部", "year": "2019", "daimon": "III", "theme": "幕末の朝廷と倒幕運動の展開", "eras": ["近世"], "field": "政治・法制", "formats": ["一問一答", "整序組合せ", "記述"], "subQ": 6, "mark": 3, "write": 3, "shiryo": false},
  {"faculty": "政治経済学部", "year": "2019", "daimon": "IV", "theme": "幕末~戦前期の物価変動史", "eras": ["近世", "近代"], "field": "社会経済", "formats": ["史料", "一問一答", "正誤", "論述"], "subQ": 4, "mark": 3, "write": 1, "shiryo": true},
  {"faculty": "政治経済学部", "year": "2019", "daimon": "V", "theme": "戦後日本の外交条約史", "eras": ["現代"], "field": "外交史", "formats": ["史料", "整序組合せ", "空欄補充", "正誤", "一問一答", "記述"], "subQ": 12, "mark": 10, "write": 2, "shiryo": true},
  {"faculty": "国際教養学部", "year": "2015", "daimon": "I", "theme": "遣隋使と律令国家の成立", "eras": ["古代"], "field": "政治・法制", "formats": ["正誤", "空欄補充", "記述"], "subQ": 10, "mark": 9, "write": 1, "shiryo": false},
  {"faculty": "国際教養学部", "year": "2015", "daimon": "II", "theme": "中世~近世の朝廷と幕府の関係", "eras": ["中世", "近世"], "field": "政治・法制", "formats": ["正誤", "空欄補充", "記述", "整序組合せ"], "subQ": 10, "mark": 9, "write": 1, "shiryo": false},
  {"faculty": "国際教養学部", "year": "2015", "daimon": "III", "theme": "自由民権運動から政党内閣の成立", "eras": ["近代"], "field": "政治・法制", "formats": ["正誤", "空欄補充", "記述", "整序組合せ"], "subQ": 10, "mark": 8, "write": 2, "shiryo": false},
  {"faculty": "国際教養学部", "year": "2015", "daimon": "IV", "theme": "太平洋戦争開戦前後の日米外交", "eras": ["近代", "現代"], "field": "外交史", "formats": ["正誤", "空欄補充", "記述"], "subQ": 10, "mark": 9, "write": 1, "shiryo": false},
  {"faculty": "国際教養学部", "year": "2016", "daimon": "I", "theme": "倭国形成と東アジア外交", "eras": ["古代"], "field": "外交史", "formats": ["正誤", "空欄補充", "記述", "一問一答"], "subQ": 10, "mark": 8, "write": 2, "shiryo": false},
  {"faculty": "国際教養学部", "year": "2016", "daimon": "II", "theme": "鎌倉~江戸の幕府地方支配制度", "eras": ["中世", "近世"], "field": "政治・法制", "formats": ["正誤", "空欄補充", "記述", "一問一答"], "subQ": 10, "mark": 8, "write": 2, "shiryo": false},
  {"faculty": "国際教養学部", "year": "2016", "daimon": "III", "theme": "幕末開国から条約改正達成まで", "eras": ["近世", "近代"], "field": "外交史", "formats": ["正誤", "空欄補充", "記述"], "subQ": 10, "mark": 8, "write": 2, "shiryo": false},
  {"faculty": "国際教養学部", "year": "2016", "daimon": "IV", "theme": "GHQ占領下の民主化改革", "eras": ["現代"], "field": "政治・法制", "formats": ["正誤", "空欄補充", "記述"], "subQ": 10, "mark": 8, "write": 2, "shiryo": false},
  {"faculty": "国際教養学部", "year": "2017", "daimon": "I", "theme": "世界文化遺産と日本の文化財", "eras": ["古代", "中世", "近世", "近代"], "field": "文化史", "formats": ["正誤", "空欄補充", "記述", "一問一答"], "subQ": 10, "mark": 8, "write": 2, "shiryo": false},
  {"faculty": "国際教養学部", "year": "2017", "daimon": "II", "theme": "倭寇と東アジア貿易・外交", "eras": ["中世", "近世"], "field": "外交史", "formats": ["正誤", "空欄補充", "記述", "史料"], "subQ": 10, "mark": 7, "write": 3, "shiryo": true},
  {"faculty": "国際教養学部", "year": "2017", "daimon": "III", "theme": "日韓関係と韓国併合への道程", "eras": ["近代"], "field": "外交史", "formats": ["正誤", "空欄補充", "記述", "史料"], "subQ": 10, "mark": 5, "write": 5, "shiryo": true},
  {"faculty": "国際教養学部", "year": "2017", "daimon": "IV", "theme": "満州事変前後の知識人と政治思想", "eras": ["近代"], "field": "政治・法制", "formats": ["正誤", "空欄補充", "記述", "一問一答"], "subQ": 10, "mark": 6, "write": 4, "shiryo": false},
  {"faculty": "国際教養学部", "year": "2018", "daimon": "I", "theme": "貴族日記に見る中世政変史", "eras": ["古代", "中世"], "field": "政治・法制", "formats": ["正誤", "空欄補充", "記述", "史料"], "subQ": 10, "mark": 7, "write": 3, "shiryo": true},
  {"faculty": "国際教養学部", "year": "2018", "daimon": "II", "theme": "南蛮貿易から鎖国体制の形成", "eras": ["近世"], "field": "外交史", "formats": ["正誤", "空欄補充", "記述"], "subQ": 10, "mark": 8, "write": 2, "shiryo": false},
  {"faculty": "国際教養学部", "year": "2018", "daimon": "III", "theme": "満州事変と日米関係の悪化", "eras": ["近代"], "field": "外交史", "formats": ["正誤", "空欄補充", "記述", "史料", "整序組合せ"], "subQ": 10, "mark": 5, "write": 5, "shiryo": true},
  {"faculty": "国際教養学部", "year": "2018", "daimon": "IV", "theme": "閔妃暗殺事件と日本の朝鮮干渉", "eras": ["近代"], "field": "外交史", "formats": ["空欄補充", "記述", "一問一答", "史料"], "subQ": 10, "mark": 7, "write": 3, "shiryo": true},
  {"faculty": "国際教養学部", "year": "2019", "daimon": "I", "theme": "古代~中世の貨幣と市場経済", "eras": ["古代", "中世"], "field": "社会経済", "formats": ["正誤", "空欄補充", "記述"], "subQ": 10, "mark": 7, "write": 3, "shiryo": false},
  {"faculty": "国際教養学部", "year": "2019", "daimon": "II", "theme": "室町~江戸初期の対外関係", "eras": ["中世", "近世"], "field": "外交史", "formats": ["正誤", "空欄補充", "記述", "一問一答"], "subQ": 10, "mark": 8, "write": 2, "shiryo": false},
  {"faculty": "国際教養学部", "year": "2019", "daimon": "III", "theme": "明治期の労働運動と工場労働", "eras": ["近代"], "field": "社会経済", "formats": ["正誤", "空欄補充", "記述", "史料"], "subQ": 10, "mark": 7, "write": 3, "shiryo": true},
  {"faculty": "国際教養学部", "year": "2019", "daimon": "IV", "theme": "占領政策転換(逆コース)と冷戦", "eras": ["現代"], "field": "政治・法制", "formats": ["正誤", "空欄補充", "記述", "史料"], "subQ": 10, "mark": 8, "write": 2, "shiryo": true},
  {"faculty": "文学部", "year": "2018", "daimon": "I", "theme": "原始社会の生活と倭人伝", "eras": ["古代"], "field": "社会経済", "formats": ["正誤", "空欄補充", "記述"], "subQ": 6, "mark": 5, "write": 1, "shiryo": false},
  {"faculty": "文学部", "year": "2018", "daimon": "II", "theme": "飛鳥・奈良仏教の受容と発展", "eras": ["古代"], "field": "宗教・思想", "formats": ["正誤", "空欄補充", "記述"], "subQ": 8, "mark": 4, "write": 4, "shiryo": false},
  {"faculty": "文学部", "year": "2018", "daimon": "III", "theme": "中世の朝廷儀礼と祭礼文化", "eras": ["中世", "近世"], "field": "文化史", "formats": ["正誤", "空欄補充", "記述"], "subQ": 8, "mark": 4, "write": 4, "shiryo": false},
  {"faculty": "文学部", "year": "2018", "daimon": "IV", "theme": "江戸時代の交通と諸産業", "eras": ["近世"], "field": "社会経済", "formats": ["正誤", "空欄補充", "記述"], "subQ": 8, "mark": 5, "write": 3, "shiryo": false},
  {"faculty": "文学部", "year": "2018", "daimon": "V", "theme": "近代地方制度の形成と統制", "eras": ["近代", "現代"], "field": "政治・法制", "formats": ["正誤", "空欄補充", "記述"], "subQ": 10, "mark": 6, "write": 4, "shiryo": false},
  {"faculty": "文学部", "year": "2018", "daimon": "VI", "theme": "琳派と風神雷神図の系譜", "eras": ["古代", "中世", "近世", "現代"], "field": "文化史", "formats": ["空欄補充", "記述", "一問一答"], "subQ": 7, "mark": 5, "write": 2, "shiryo": false},
  {"faculty": "文学部", "year": "2019", "daimon": "I", "theme": "古墳時代までの墓制と社会", "eras": ["古代"], "field": "社会経済", "formats": ["正誤", "空欄補充", "記述"], "subQ": 6, "mark": 4, "write": 2, "shiryo": false},
  {"faculty": "文学部", "year": "2019", "daimon": "II", "theme": "古代東北支配と蝦夷経略", "eras": ["古代"], "field": "政治・法制", "formats": ["正誤", "空欄補充", "記述"], "subQ": 8, "mark": 4, "write": 4, "shiryo": false},
  {"faculty": "文学部", "year": "2019", "daimon": "III", "theme": "中世の戦乱と文化の関係", "eras": ["中世"], "field": "文化史", "formats": ["正誤", "空欄補充", "記述", "一問一答"], "subQ": 7, "mark": 5, "write": 2, "shiryo": false},
  {"faculty": "文学部", "year": "2019", "daimon": "IV", "theme": "江戸将軍家の血統と継承", "eras": ["近世"], "field": "政治・法制", "formats": ["正誤", "記述"], "subQ": 7, "mark": 4, "write": 3, "shiryo": false},
  {"faculty": "文学部", "year": "2019", "daimon": "V", "theme": "近代日中間の留学生交流史", "eras": ["近代", "現代"], "field": "外交史", "formats": ["正誤", "空欄補充", "記述"], "subQ": 10, "mark": 6, "write": 4, "shiryo": false},
  {"faculty": "文学部", "year": "2019", "daimon": "VI", "theme": "日本書道史の展開と流派", "eras": ["古代", "中世", "近世"], "field": "文化史", "formats": ["空欄補充", "記述", "一問一答"], "subQ": 7, "mark": 5, "write": 2, "shiryo": false},
  {"faculty": "文学部", "year": "2020", "daimon": "I", "theme": "木製品と原始時代の生活文化", "eras": ["古代"], "field": "社会経済", "formats": ["正誤", "記述", "一問一答"], "subQ": 6, "mark": 5, "write": 1, "shiryo": false},
  {"faculty": "文学部", "year": "2020", "daimon": "II", "theme": "律令国家の形成と法整備", "eras": ["古代"], "field": "政治・法制", "formats": ["正誤", "空欄補充", "記述"], "subQ": 8, "mark": 4, "write": 4, "shiryo": false},
  {"faculty": "文学部", "year": "2020", "daimon": "III", "theme": "中世武家政権の変遷と抗争", "eras": ["中世"], "field": "政治・法制", "formats": ["正誤", "記述", "整序組合せ", "一問一答"], "subQ": 8, "mark": 6, "write": 2, "shiryo": false},
  {"faculty": "文学部", "year": "2020", "daimon": "IV", "theme": "江戸時代の旅と移動文化", "eras": ["近世"], "field": "社会経済", "formats": ["空欄補充", "記述", "正誤"], "subQ": 8, "mark": 4, "write": 4, "shiryo": false},
  {"faculty": "文学部", "year": "2020", "daimon": "V", "theme": "近代日本の平和主義運動", "eras": ["近代", "現代"], "field": "外交史", "formats": ["正誤", "記述", "空欄補充"], "subQ": 10, "mark": 5, "write": 5, "shiryo": false},
  {"faculty": "文学部", "year": "2020", "daimon": "VI", "theme": "日本絵画史の系譜と展開", "eras": ["古代", "中世", "近世", "近代"], "field": "文化史", "formats": ["正誤", "空欄補充", "記述", "一問一答"], "subQ": 7, "mark": 5, "write": 2, "shiryo": false},
  {"faculty": "文学部", "year": "2024", "daimon": "I", "theme": "中国史書にみる倭国の対外関係", "eras": ["古代"], "field": "外交史", "formats": ["正誤", "記述", "一問一答"], "subQ": 7, "mark": 5, "write": 2, "shiryo": false},
  {"faculty": "文学部", "year": "2024", "daimon": "II", "theme": "墾田永年私財法と土地政策", "eras": ["古代"], "field": "社会経済", "formats": ["史料", "記述", "正誤", "一問一答"], "subQ": 6, "mark": 4, "write": 2, "shiryo": true},
  {"faculty": "文学部", "year": "2024", "daimon": "III", "theme": "中世商業経済の発展と座", "eras": ["中世"], "field": "社会経済", "formats": ["記述", "正誤", "整序組合せ", "一問一答"], "subQ": 7, "mark": 5, "write": 2, "shiryo": false},
  {"faculty": "文学部", "year": "2024", "daimon": "IV", "theme": "幕末開国期の外国人来訪", "eras": ["近世"], "field": "外交史", "formats": ["正誤", "記述", "一問一答"], "subQ": 8, "mark": 5, "write": 3, "shiryo": false},
  {"faculty": "文学部", "year": "2024", "daimon": "V", "theme": "内閣の愛称にみる近代政治", "eras": ["近代", "現代"], "field": "政治・法制", "formats": ["正誤", "記述", "一問一答"], "subQ": 11, "mark": 6, "write": 5, "shiryo": false},
  {"faculty": "文学部", "year": "2024", "daimon": "VI", "theme": "絵画にみる女性表現の変遷", "eras": ["古代", "近世", "近代"], "field": "文化史", "formats": ["正誤", "空欄補充", "記述", "一問一答"], "subQ": 7, "mark": 5, "write": 2, "shiryo": false},
  {"faculty": "文学部", "year": "2025", "daimon": "I", "theme": "原始時代の生活と社会変化", "eras": ["古代"], "field": "社会経済", "formats": ["正誤", "記述", "一問一答"], "subQ": 7, "mark": 3, "write": 4, "shiryo": false},
  {"faculty": "文学部", "year": "2025", "daimon": "II", "theme": "律令法制史料の読解と展開", "eras": ["古代"], "field": "政治・法制", "formats": ["史料", "記述", "正誤", "一問一答"], "subQ": 7, "mark": 3, "write": 4, "shiryo": true},
  {"faculty": "文学部", "year": "2025", "daimon": "III", "theme": "中世法令にみる社会風俗", "eras": ["中世"], "field": "政治・法制", "formats": ["史料", "正誤", "整序組合せ", "記述", "一問一答"], "subQ": 7, "mark": 5, "write": 2, "shiryo": true},
  {"faculty": "文学部", "year": "2025", "daimon": "IV", "theme": "江戸から明治への幕藩体制", "eras": ["近世", "近代"], "field": "政治・法制", "formats": ["正誤", "記述", "整序組合せ", "一問一答"], "subQ": 8, "mark": 5, "write": 3, "shiryo": false},
  {"faculty": "文学部", "year": "2025", "daimon": "V", "theme": "近代日本の参政権拡大史", "eras": ["近代", "現代"], "field": "政治・法制", "formats": ["正誤", "記述", "一問一答"], "subQ": 12, "mark": 7, "write": 5, "shiryo": false},
  {"faculty": "文学部", "year": "2025", "daimon": "VI", "theme": "美術史研究の見直しと新説", "eras": ["中世", "近世"], "field": "文化史", "formats": ["正誤", "記述", "一問一答"], "subQ": 6, "mark": 4, "write": 2, "shiryo": false},
  {"faculty": "人間科学部", "year": "2017", "daimon": "I", "theme": "遣唐使と古代東アジア外交", "eras": ["古代"], "field": "外交史", "formats": ["正誤", "整序組合せ"], "subQ": 8, "mark": 8, "write": 0, "shiryo": false},
  {"faculty": "人間科学部", "year": "2017", "daimon": "II", "theme": "戦国大名の分国法", "eras": ["中世"], "field": "政治・法制", "formats": ["史料", "空欄補充", "正誤", "整序組合せ"], "subQ": 8, "mark": 8, "write": 0, "shiryo": true},
  {"faculty": "人間科学部", "year": "2017", "daimon": "III", "theme": "近世の都市経済と農村社会", "eras": ["近世"], "field": "社会経済", "formats": ["史料", "正誤", "整序組合せ"], "subQ": 8, "mark": 8, "write": 0, "shiryo": true},
  {"faculty": "人間科学部", "year": "2017", "daimon": "IV", "theme": "幕末以降の学問と思想の展開", "eras": ["近世", "近代", "現代"], "field": "文化史", "formats": ["正誤", "空欄補充", "整序組合せ"], "subQ": 10, "mark": 10, "write": 0, "shiryo": false},
  {"faculty": "人間科学部", "year": "2017", "daimon": "V", "theme": "古代から近代の宗教のあり方", "eras": ["古代", "中世", "近世", "近代"], "field": "宗教・思想", "formats": ["正誤", "史料", "空欄補充"], "subQ": 8, "mark": 8, "write": 0, "shiryo": true},
  {"faculty": "人間科学部", "year": "2018", "daimon": "I", "theme": "沖ノ島祭祀と宗像氏の世界遺産登録", "eras": ["古代"], "field": "宗教・思想", "formats": ["正誤", "整序組合せ"], "subQ": 8, "mark": 8, "write": 0, "shiryo": false},
  {"faculty": "人間科学部", "year": "2018", "daimon": "II", "theme": "中世仏教の展開と戦国期の宗教勢力", "eras": ["中世"], "field": "宗教・思想", "formats": ["正誤", "空欄補充", "整序組合せ"], "subQ": 8, "mark": 8, "write": 0, "shiryo": false},
  {"faculty": "人間科学部", "year": "2018", "daimon": "III", "theme": "江戸中期の新思想と尊王論の展開", "eras": ["近世"], "field": "宗教・思想", "formats": ["空欄補充", "正誤", "史料"], "subQ": 8, "mark": 8, "write": 0, "shiryo": true},
  {"faculty": "人間科学部", "year": "2018", "daimon": "IV", "theme": "第一次大戦期の外交と社会運動", "eras": ["近代"], "field": "政治・法制", "formats": ["正誤", "空欄補充"], "subQ": 10, "mark": 10, "write": 0, "shiryo": false},
  {"faculty": "人間科学部", "year": "2018", "daimon": "V", "theme": "外国人の記録にみる日本", "eras": ["古代", "中世", "近代"], "field": "外交史", "formats": ["正誤", "空欄補充", "史料"], "subQ": 8, "mark": 8, "write": 0, "shiryo": true},
  {"faculty": "人間科学部", "year": "2019", "daimon": "I", "theme": "和歌に投影された奈良の荒廃イメージ", "eras": ["古代"], "field": "文化史", "formats": ["整序組合せ", "正誤"], "subQ": 8, "mark": 8, "write": 0, "shiryo": false},
  {"faculty": "人間科学部", "year": "2019", "daimon": "II", "theme": "南北朝動乱と守護勢力の拡大", "eras": ["中世"], "field": "政治・法制", "formats": ["整序組合せ", "正誤", "史料", "空欄補充"], "subQ": 8, "mark": 8, "write": 0, "shiryo": true},
  {"faculty": "人間科学部", "year": "2019", "daimon": "III", "theme": "幕藩財政の窮乏と諸改革・内憂外患", "eras": ["近世"], "field": "社会経済", "formats": ["正誤", "空欄補充", "整序組合せ"], "subQ": 8, "mark": 8, "write": 0, "shiryo": false},
  {"faculty": "人間科学部", "year": "2019", "daimon": "IV", "theme": "近代以降のジャーナリズムとメディア統制", "eras": ["近代", "現代"], "field": "文化史", "formats": ["空欄補充", "正誤", "整序組合せ"], "subQ": 10, "mark": 10, "write": 0, "shiryo": false},
  {"faculty": "人間科学部", "year": "2019", "daimon": "V", "theme": "飢饉から公害まで自然環境と人間の関係", "eras": ["古代", "中世", "近代", "現代"], "field": "社会経済", "formats": ["空欄補充", "正誤", "史料"], "subQ": 8, "mark": 8, "write": 0, "shiryo": true},
  {"faculty": "人間科学部", "year": "2020", "daimon": "I", "theme": "摂関政治確立への過程", "eras": ["古代"], "field": "政治・法制", "formats": ["正誤", "空欄補充"], "subQ": 8, "mark": 8, "write": 0, "shiryo": false},
  {"faculty": "人間科学部", "year": "2020", "daimon": "II", "theme": "室町幕府の統治機構と財政政策", "eras": ["中世"], "field": "政治・法制", "formats": ["正誤", "空欄補充", "整序組合せ"], "subQ": 8, "mark": 8, "write": 0, "shiryo": false},
  {"faculty": "人間科学部", "year": "2020", "daimon": "III", "theme": "正徳の治と対外関係の転換", "eras": ["近世"], "field": "外交史", "formats": ["空欄補充", "正誤", "史料"], "subQ": 8, "mark": 8, "write": 0, "shiryo": true},
  {"faculty": "人間科学部", "year": "2020", "daimon": "IV", "theme": "近代以降の女性の社会進出と参政権", "eras": ["近代", "現代"], "field": "社会経済", "formats": ["正誤", "整序組合せ", "空欄補充"], "subQ": 10, "mark": 10, "write": 0, "shiryo": false},
  {"faculty": "人間科学部", "year": "2020", "daimon": "V", "theme": "子どもと教育をめぐる歴史", "eras": ["古代", "中世", "近世", "近代"], "field": "文化史", "formats": ["正誤", "史料", "空欄補充", "整序組合せ"], "subQ": 8, "mark": 8, "write": 0, "shiryo": true},
  {"faculty": "人間科学部", "year": "2024", "daimon": "I", "theme": "蝦夷と古代律令国家の東北支配", "eras": ["古代"], "field": "政治・法制", "formats": ["空欄補充", "正誤", "整序組合せ"], "subQ": 8, "mark": 8, "write": 0, "shiryo": false},
  {"faculty": "人間科学部", "year": "2024", "daimon": "II", "theme": "中世の国司・守護をめぐる統治制度史", "eras": ["中世"], "field": "政治・法制", "formats": ["史料", "正誤", "空欄補充", "整序組合せ"], "subQ": 8, "mark": 8, "write": 0, "shiryo": true},
  {"faculty": "人間科学部", "year": "2024", "daimon": "III", "theme": "江戸時代の仏教統制と民間信仰", "eras": ["近世"], "field": "宗教・思想", "formats": ["空欄補充", "正誤"], "subQ": 8, "mark": 8, "write": 0, "shiryo": false},
  {"faculty": "人間科学部", "year": "2024", "daimon": "IV", "theme": "帝国主義下の日本の植民地拡大と戦後解放", "eras": ["近代", "現代"], "field": "外交史", "formats": ["正誤", "整序組合せ"], "subQ": 10, "mark": 10, "write": 0, "shiryo": false},
  {"faculty": "人間科学部", "year": "2024", "daimon": "V", "theme": "船の歴史にみる交通と海運の発展", "eras": ["古代", "中世", "近世", "近代"], "field": "社会経済", "formats": ["正誤", "空欄補充", "史料"], "subQ": 8, "mark": 8, "write": 0, "shiryo": true},
  {"faculty": "第一文学部", "year": "2003", "daimon": "I", "theme": "縄文時代の生業と社会の変容", "eras": ["古代"], "field": "社会経済", "formats": ["正誤", "空欄補充", "一問一答"], "subQ": 8, "mark": 8, "write": 0, "shiryo": false},
  {"faculty": "第一文学部", "year": "2003", "daimon": "II", "theme": "木簡と歴史書にみる古代史料批判", "eras": ["古代"], "field": "文化史", "formats": ["空欄補充", "正誤", "記述"], "subQ": 8, "mark": 3, "write": 5, "shiryo": true},
  {"faculty": "第一文学部", "year": "2003", "daimon": "III", "theme": "主従関係の連鎖と封建社会の変遷", "eras": ["中世", "近世"], "field": "政治・法制", "formats": ["空欄補充", "記述", "一問一答"], "subQ": 8, "mark": 3, "write": 5, "shiryo": false},
  {"faculty": "第一文学部", "year": "2003", "daimon": "IV", "theme": "近世日本の対外関係と鎖国の実態", "eras": ["近世"], "field": "外交史", "formats": ["空欄補充", "正誤", "記述"], "subQ": 8, "mark": 3, "write": 5, "shiryo": false},
  {"faculty": "第一文学部", "year": "2003", "daimon": "V", "theme": "近代日本の民権運動と治安法制", "eras": ["近代"], "field": "政治・法制", "formats": ["空欄補充", "正誤", "記述"], "subQ": 10, "mark": 4, "write": 6, "shiryo": false},
  {"faculty": "第一文学部", "year": "2003", "daimon": "VI", "theme": "奈良仏教美術と近世絵画の鑑賞", "eras": ["古代", "近世"], "field": "文化史", "formats": ["空欄補充", "記述", "一問一答"], "subQ": 8, "mark": 3, "write": 5, "shiryo": false},
  {"faculty": "第一文学部", "year": "2004", "daimon": "I", "theme": "旧石器から弥生への移行と時代区分", "eras": ["古代"], "field": "社会経済", "formats": ["正誤", "空欄補充", "記述"], "subQ": 5, "mark": 2, "write": 3, "shiryo": false},
  {"faculty": "第一文学部", "year": "2004", "daimon": "II", "theme": "藤原氏の台頭と平安初期の政変", "eras": ["古代"], "field": "政治・法制", "formats": ["記述", "正誤", "空欄補充"], "subQ": 6, "mark": 2, "write": 4, "shiryo": false},
  {"faculty": "第一文学部", "year": "2004", "daimon": "III", "theme": "災害・飢饉と中世社会の変動", "eras": ["古代", "中世"], "field": "社会経済", "formats": ["空欄補充", "記述", "一問一答"], "subQ": 7, "mark": 3, "write": 4, "shiryo": true},
  {"faculty": "第一文学部", "year": "2004", "daimon": "IV", "theme": "江戸幕府の大名統制と幕藩体制の崩壊", "eras": ["近世"], "field": "政治・法制", "formats": ["正誤", "空欄補充", "記述"], "subQ": 7, "mark": 3, "write": 4, "shiryo": false},
  {"faculty": "第一文学部", "year": "2004", "daimon": "V", "theme": "日清戦争前後の東アジア外交と国内政治", "eras": ["近代"], "field": "外交史", "formats": ["正誤", "空欄補充", "記述"], "subQ": 10, "mark": 4, "write": 6, "shiryo": false},
  {"faculty": "第一文学部", "year": "2004", "daimon": "VI", "theme": "仏教美術の系譜と近世文人画", "eras": ["古代", "中世", "近世"], "field": "文化史", "formats": ["記述", "一問一答"], "subQ": 5, "mark": 1, "write": 4, "shiryo": false},
  {"faculty": "第一文学部", "year": "2005", "daimon": "I", "theme": "出土文字資料が語る古代史", "eras": ["古代"], "field": "文化史", "formats": ["一問一答", "正誤", "空欄補充"], "subQ": 7, "mark": 7, "write": 0, "shiryo": true},
  {"faculty": "第一文学部", "year": "2005", "daimon": "II", "theme": "古語拾遺にみる氏族と歴史認識", "eras": ["古代"], "field": "文化史", "formats": ["一問一答", "正誤", "記述"], "subQ": 6, "mark": 2, "write": 4, "shiryo": true},
  {"faculty": "第一文学部", "year": "2005", "daimon": "III", "theme": "浄土教信仰の展開と本願寺教団", "eras": ["古代", "中世", "近世"], "field": "宗教・思想", "formats": ["記述", "空欄補充", "一問一答"], "subQ": 8, "mark": 3, "write": 5, "shiryo": false},
  {"faculty": "第一文学部", "year": "2005", "daimon": "IV", "theme": "近世の農業技術革新と出版文化", "eras": ["近世"], "field": "社会経済", "formats": ["正誤", "空欄補充", "記述"], "subQ": 8, "mark": 5, "write": 3, "shiryo": false},
  {"faculty": "第一文学部", "year": "2005", "daimon": "V", "theme": "日露戦争後の大陸政策と桂園体制", "eras": ["近代"], "field": "政治・法制", "formats": ["正誤", "空欄補充", "記述"], "subQ": 10, "mark": 6, "write": 4, "shiryo": false},
  {"faculty": "第一文学部", "year": "2005", "daimon": "VI", "theme": "仏教美術と近世絵画・工芸の展開", "eras": ["古代", "中世", "近世"], "field": "文化史", "formats": ["一問一答", "記述"], "subQ": 7, "mark": 4, "write": 3, "shiryo": false},
  {"faculty": "第一文学部", "year": "2006", "daimon": "I", "theme": "弥生時代の国家形成と邪馬台国", "eras": ["古代"], "field": "社会経済", "formats": ["一問一答", "空欄補充", "正誤"], "subQ": 7, "mark": 6, "write": 1, "shiryo": true},
  {"faculty": "第一文学部", "year": "2006", "daimon": "II", "theme": "古代都城の変遷と律令国家体制", "eras": ["古代"], "field": "政治・法制", "formats": ["記述", "正誤", "空欄補充", "整序組合せ"], "subQ": 8, "mark": 5, "write": 3, "shiryo": false},
  {"faculty": "第一文学部", "year": "2006", "daimon": "III", "theme": "中世日記史料にみる争乱と社会", "eras": ["中世"], "field": "政治・法制", "formats": ["史料", "記述", "一問一答", "整序組合せ"], "subQ": 7, "mark": 3, "write": 4, "shiryo": true},
  {"faculty": "第一文学部", "year": "2006", "daimon": "IV", "theme": "近世後期の対外危機と鎖国論の形成", "eras": ["近世"], "field": "外交史", "formats": ["正誤", "空欄補充", "記述"], "subQ": 8, "mark": 5, "write": 3, "shiryo": false},
  {"faculty": "第一文学部", "year": "2006", "daimon": "V", "theme": "満州事変から占領政策までの外交軍事", "eras": ["近代", "現代"], "field": "外交史", "formats": ["正誤", "記述", "空欄補充"], "subQ": 12, "mark": 7, "write": 5, "shiryo": false},
  {"faculty": "第一文学部", "year": "2006", "daimon": "VI", "theme": "古代~近代の美術・書・建築史", "eras": ["古代", "中世", "近世", "近代"], "field": "文化史", "formats": ["一問一答", "記述"], "subQ": 7, "mark": 4, "write": 3, "shiryo": false}
];

const FACULTY_TREND_SUMMARY = {
 "法学部": {
  "years": [
   "2022",
   "2023",
   "2024",
   "2025",
   "2026"
  ],
  "daimonAvg": 4.0,
  "subQAvg": 40.0,
  "writeRate": 48,
  "shiryoRate": 25,
  "eraCount": {
   "古代": 5,
   "中世": 7,
   "近世": 4,
   "近代": 6,
   "現代": 5
  },
  "fieldCount": {
   "政治・法制": 8,
   "外交史": 5,
   "社会経済": 5,
   "文化史": 2,
   "宗教・思想": 0
  },
  "formatCount": {
   "正誤": 0,
   "空欄補充": 0,
   "記述": 20,
   "論述": 0,
   "史料": 5,
   "一問一答": 0,
   "整序組合せ": 0
  },
  "byYear": {
   "2022": {
    "daimon": 4,
    "subQ": 40,
    "write": 17,
    "shiryo": 1
   },
   "2023": {
    "daimon": 4,
    "subQ": 40,
    "write": 17,
    "shiryo": 1
   },
   "2024": {
    "daimon": 4,
    "subQ": 40,
    "write": 19,
    "shiryo": 1
   },
   "2025": {
    "daimon": 4,
    "subQ": 40,
    "write": 22,
    "shiryo": 1
   },
   "2026": {
    "daimon": 4,
    "subQ": 40,
    "write": 20,
    "shiryo": 1
   }
  }
 },
 "社会科学部": {
  "years": [
   "2017",
   "2018",
   "2019",
   "2020",
   "2024"
  ],
  "daimonAvg": 4.0,
  "subQAvg": 39.6,
  "writeRate": 1,
  "shiryoRate": 55,
  "eraCount": {
   "古代": 16,
   "中世": 17,
   "近世": 19,
   "近代": 19,
   "現代": 14
  },
  "fieldCount": {
   "政治・法制": 5,
   "外交史": 3,
   "社会経済": 8,
   "文化史": 4,
   "宗教・思想": 0
  },
  "formatCount": {
   "正誤": 20,
   "空欄補充": 4,
   "記述": 0,
   "論述": 1,
   "史料": 11,
   "一問一答": 14,
   "整序組合せ": 9
  },
  "byYear": {
   "2017": {
    "daimon": 4,
    "subQ": 40,
    "write": 0,
    "shiryo": 1
   },
   "2018": {
    "daimon": 4,
    "subQ": 40,
    "write": 0,
    "shiryo": 1
   },
   "2019": {
    "daimon": 4,
    "subQ": 40,
    "write": 0,
    "shiryo": 3
   },
   "2020": {
    "daimon": 4,
    "subQ": 40,
    "write": 0,
    "shiryo": 2
   },
   "2024": {
    "daimon": 4,
    "subQ": 38,
    "write": 1,
    "shiryo": 4
   }
  }
 },
 "商学部": {
  "years": [
   "2019",
   "2020",
   "2024",
   "2025",
   "2026"
  ],
  "daimonAvg": 6.0,
  "subQAvg": 59.0,
  "writeRate": 16,
  "shiryoRate": 57,
  "eraCount": {
   "古代": 5,
   "中世": 5,
   "近世": 5,
   "近代": 11,
   "現代": 5
  },
  "fieldCount": {
   "政治・法制": 18,
   "外交史": 1,
   "社会経済": 9,
   "文化史": 2,
   "宗教・思想": 0
  },
  "formatCount": {
   "正誤": 30,
   "空欄補充": 19,
   "記述": 10,
   "論述": 3,
   "史料": 17,
   "一問一答": 17,
   "整序組合せ": 7
  },
  "byYear": {
   "2019": {
    "daimon": 6,
    "subQ": 59,
    "write": 9,
    "shiryo": 3
   },
   "2020": {
    "daimon": 6,
    "subQ": 59,
    "write": 8,
    "shiryo": 3
   },
   "2024": {
    "daimon": 6,
    "subQ": 59,
    "write": 10,
    "shiryo": 4
   },
   "2025": {
    "daimon": 6,
    "subQ": 59,
    "write": 10,
    "shiryo": 4
   },
   "2026": {
    "daimon": 6,
    "subQ": 59,
    "write": 9,
    "shiryo": 3
   }
  }
 },
 "教育学部": {
  "years": [
   "2019",
   "2020",
   "2024",
   "2025",
   "2026"
  ],
  "daimonAvg": 5.2,
  "subQAvg": 40.8,
  "writeRate": 24,
  "shiryoRate": 88,
  "eraCount": {
   "古代": 7,
   "中世": 4,
   "近世": 6,
   "近代": 9,
   "現代": 6
  },
  "fieldCount": {
   "政治・法制": 10,
   "外交史": 5,
   "社会経済": 7,
   "文化史": 1,
   "宗教・思想": 3
  },
  "formatCount": {
   "正誤": 26,
   "空欄補充": 19,
   "記述": 23,
   "論述": 2,
   "史料": 23,
   "一問一答": 0,
   "整序組合せ": 12
  },
  "byYear": {
   "2019": {
    "daimon": 5,
    "subQ": 36,
    "write": 10,
    "shiryo": 4
   },
   "2020": {
    "daimon": 5,
    "subQ": 43,
    "write": 11,
    "shiryo": 4
   },
   "2024": {
    "daimon": 5,
    "subQ": 42,
    "write": 12,
    "shiryo": 4
   },
   "2025": {
    "daimon": 6,
    "subQ": 42,
    "write": 8,
    "shiryo": 6
   },
   "2026": {
    "daimon": 5,
    "subQ": 41,
    "write": 7,
    "shiryo": 5
   }
  }
 },
 "文化構想学部": {
  "years": [
   "2019",
   "2020",
   "2024",
   "2025",
   "2026"
  ],
  "daimonAvg": 4.0,
  "subQAvg": 44.2,
  "writeRate": 34,
  "shiryoRate": 25,
  "eraCount": {
   "古代": 19,
   "中世": 19,
   "近世": 20,
   "近代": 18,
   "現代": 12
  },
  "fieldCount": {
   "政治・法制": 7,
   "外交史": 2,
   "社会経済": 5,
   "文化史": 5,
   "宗教・思想": 1
  },
  "formatCount": {
   "正誤": 20,
   "空欄補充": 20,
   "記述": 20,
   "論述": 0,
   "史料": 0,
   "一問一答": 6,
   "整序組合せ": 7
  },
  "byYear": {
   "2019": {
    "daimon": 4,
    "subQ": 42,
    "write": 15,
    "shiryo": 1
   },
   "2020": {
    "daimon": 4,
    "subQ": 43,
    "write": 17,
    "shiryo": 0
   },
   "2024": {
    "daimon": 4,
    "subQ": 46,
    "write": 15,
    "shiryo": 1
   },
   "2025": {
    "daimon": 4,
    "subQ": 44,
    "write": 14,
    "shiryo": 1
   },
   "2026": {
    "daimon": 4,
    "subQ": 46,
    "write": 14,
    "shiryo": 2
   }
  }
 },
 "政治経済学部": {
  "years": [
   "2015",
   "2016",
   "2017",
   "2018",
   "2019"
  ],
  "daimonAvg": 5.0,
  "subQAvg": 45.8,
  "writeRate": 28,
  "shiryoRate": 76,
  "eraCount": {
   "古代": 5,
   "中世": 5,
   "近世": 8,
   "近代": 9,
   "現代": 5
  },
  "fieldCount": {
   "政治・法制": 7,
   "外交史": 5,
   "社会経済": 12,
   "文化史": 1,
   "宗教・思想": 0
  },
  "formatCount": {
   "正誤": 21,
   "空欄補充": 11,
   "記述": 21,
   "論述": 5,
   "史料": 19,
   "一問一答": 25,
   "整序組合せ": 6
  },
  "byYear": {
   "2015": {
    "daimon": 5,
    "subQ": 50,
    "write": 14,
    "shiryo": 5
   },
   "2016": {
    "daimon": 5,
    "subQ": 48,
    "write": 13,
    "shiryo": 4
   },
   "2017": {
    "daimon": 5,
    "subQ": 47,
    "write": 13,
    "shiryo": 4
   },
   "2018": {
    "daimon": 5,
    "subQ": 42,
    "write": 13,
    "shiryo": 3
   },
   "2019": {
    "daimon": 5,
    "subQ": 42,
    "write": 11,
    "shiryo": 3
   }
  }
 },
 "国際教養学部": {
  "years": [
   "2015",
   "2016",
   "2017",
   "2018",
   "2019"
  ],
  "daimonAvg": 4.0,
  "subQAvg": 40.0,
  "writeRate": 25,
  "shiryoRate": 35,
  "eraCount": {
   "古代": 5,
   "中世": 7,
   "近世": 7,
   "近代": 9,
   "現代": 3
  },
  "fieldCount": {
   "政治・法制": 8,
   "外交史": 9,
   "社会経済": 2,
   "文化史": 1,
   "宗教・思想": 0
  },
  "formatCount": {
   "正誤": 19,
   "空欄補充": 20,
   "記述": 20,
   "論述": 0,
   "史料": 7,
   "一問一答": 6,
   "整序組合せ": 3
  },
  "byYear": {
   "2015": {
    "daimon": 4,
    "subQ": 40,
    "write": 5,
    "shiryo": 0
   },
   "2016": {
    "daimon": 4,
    "subQ": 40,
    "write": 8,
    "shiryo": 0
   },
   "2017": {
    "daimon": 4,
    "subQ": 40,
    "write": 14,
    "shiryo": 2
   },
   "2018": {
    "daimon": 4,
    "subQ": 40,
    "write": 13,
    "shiryo": 3
   },
   "2019": {
    "daimon": 4,
    "subQ": 40,
    "write": 10,
    "shiryo": 2
   }
  }
 },
 "文学部": {
  "years": [
   "2018",
   "2019",
   "2020",
   "2024",
   "2025"
  ],
  "daimonAvg": 6.0,
  "subQAvg": 46.4,
  "writeRate": 38,
  "shiryoRate": 10,
  "eraCount": {
   "古代": 14,
   "中世": 9,
   "近世": 11,
   "近代": 8,
   "現代": 6
  },
  "fieldCount": {
   "政治・法制": 10,
   "外交史": 4,
   "社会経済": 8,
   "文化史": 7,
   "宗教・思想": 1
  },
  "formatCount": {
   "正誤": 28,
   "空欄補充": 16,
   "記述": 30,
   "論述": 0,
   "史料": 3,
   "一問一答": 18,
   "整序組合せ": 4
  },
  "byYear": {
   "2018": {
    "daimon": 6,
    "subQ": 47,
    "write": 18,
    "shiryo": 0
   },
   "2019": {
    "daimon": 6,
    "subQ": 45,
    "write": 17,
    "shiryo": 0
   },
   "2020": {
    "daimon": 6,
    "subQ": 47,
    "write": 18,
    "shiryo": 0
   },
   "2024": {
    "daimon": 6,
    "subQ": 46,
    "write": 16,
    "shiryo": 1
   },
   "2025": {
    "daimon": 6,
    "subQ": 47,
    "write": 20,
    "shiryo": 2
   }
  }
 },
 "人間科学部": {
  "years": [
   "2017",
   "2018",
   "2019",
   "2020",
   "2024"
  ],
  "daimonAvg": 5.0,
  "subQAvg": 42.0,
  "writeRate": 0,
  "shiryoRate": 44,
  "eraCount": {
   "古代": 10,
   "中世": 10,
   "近世": 9,
   "近代": 10,
   "現代": 5
  },
  "fieldCount": {
   "政治・法制": 7,
   "外交史": 4,
   "社会経済": 5,
   "文化史": 4,
   "宗教・思想": 5
  },
  "formatCount": {
   "正誤": 25,
   "空欄補充": 20,
   "記述": 0,
   "論述": 0,
   "史料": 11,
   "一問一答": 0,
   "整序組合せ": 16
  },
  "byYear": {
   "2017": {
    "daimon": 5,
    "subQ": 42,
    "write": 0,
    "shiryo": 3
   },
   "2018": {
    "daimon": 5,
    "subQ": 42,
    "write": 0,
    "shiryo": 2
   },
   "2019": {
    "daimon": 5,
    "subQ": 42,
    "write": 0,
    "shiryo": 2
   },
   "2020": {
    "daimon": 5,
    "subQ": 42,
    "write": 0,
    "shiryo": 2
   },
   "2024": {
    "daimon": 5,
    "subQ": 42,
    "write": 0,
    "shiryo": 2
   }
  }
 },
 "第一文学部": {
  "years": [
   "2003",
   "2004",
   "2005",
   "2006"
  ],
  "daimonAvg": 6.0,
  "subQAvg": 46.2,
  "writeRate": 48,
  "shiryoRate": 25,
  "eraCount": {
   "古代": 14,
   "中世": 7,
   "近世": 10,
   "近代": 5,
   "現代": 1
  },
  "fieldCount": {
   "政治・法制": 7,
   "外交史": 4,
   "社会経済": 5,
   "文化史": 7,
   "宗教・思想": 1
  },
  "formatCount": {
   "正誤": 16,
   "空欄補充": 19,
   "記述": 21,
   "論述": 0,
   "史料": 1,
   "一問一答": 12,
   "整序組合せ": 2
  },
  "byYear": {
   "2003": {
    "daimon": 6,
    "subQ": 50,
    "write": 26,
    "shiryo": 1
   },
   "2004": {
    "daimon": 6,
    "subQ": 40,
    "write": 25,
    "shiryo": 1
   },
   "2005": {
    "daimon": 6,
    "subQ": 46,
    "write": 19,
    "shiryo": 2
   },
   "2006": {
    "daimon": 6,
    "subQ": 49,
    "write": 19,
    "shiryo": 2
   }
  }
 }
};
