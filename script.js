const year = document.querySelector("#year");

if (year) {
  year.textContent = new Date().getFullYear();
}

const backToTopButton = document.querySelector(".back-to-top");

function updateBackToTopButton() {
  if (!backToTopButton) {
    return;
  }

  backToTopButton.classList.toggle("is-visible", window.scrollY > 520);
}

updateBackToTopButton();
window.addEventListener("scroll", updateBackToTopButton, { passive: true });

if (backToTopButton) {
  backToTopButton.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}

const translations = {
  zh: {
    "meta.title": "陳秉佑 | Ping Yu-Chen",
    "meta.description":
      "陳秉佑 / Ping Yu-Chen / Bill Chen 的個人首頁：GaN Power FinFET、TCAD、AI 輔助元件開發、IWN 2026 與 IEDMS 2026 論文、製程 DOE、類比 IC 與生活紀錄。",
    brand: "陳秉佑 · Ping Yu-Chen",
    "nav.publications": "論文發表",
    "nav.research": "元件研究",
    "nav.analog": "IC 設計",
    "nav.experience": "經歷",
    "nav.projects": "工具開發與專利",
    "nav.life": "生活",
    "nav.contact": "聯絡",
    "hero.eyebrow": "GaN Power · TCAD · AI Tools · Process DOE · Measurement",
    "hero.title": "讓 GaN Power 元件走向實作與應用。",
    "hero.bio1":
      "Hey，我是陳秉佑（Ping Yu-Chen / Bill Chen），中央大學電機所固態組碩士生，指導教授為綦振瀛教授；大學畢業於西安交通大學微電子科學與工程。我習慣用「物理機制 → TCAD 模擬 → 版圖 → 製程 DOE → 量測 → 回饋校準」的閉環推進研究，把結果轉成設計規則、製程窗口與可重現的驗證紀錄。",
    "highlight.label": "研究成果亮點",
    "highlight.iwn": "第一作者 Poster · 日本熊本",
    "highlight.iedms": "第一作者 Poster · 台北",
    "highlight.aiTcad": "AI-TCAD 模擬時間（81 vs 960 組）",
    "interest.label": "研究興趣",
    "interest.ganTitle": "為 AI 時代的能源轉換做元件",
    "interest.ganBody":
      "我對 GaN Power 的興趣，來自對人形機器人、AI 算力集群與高密度電源系統的想像。碩士研究聚焦 24/48 V E-mode GaN FinFET：從多通道磊晶、Trigate 結構到 EBL / ICP-RIE 製程與量測，親手把元件做出來。",
    "interest.tcadTitle": "先在模擬裡把元件想清楚",
    "interest.tcadBody":
      "以 Sentaurus 先把元件想清楚：IEDMS 2026 用 25 組多通道磊晶設計，把 barrier 厚度分配收斂成 Y > X 的設計規則；也用 SiC VDMOS 模型分析 25–300 °C 高溫特性，再以量測回頭校準。",
    "interest.aiTag": "AI 工具",
    "interest.aiTitle": "把 AI 變成工程助理",
    "interest.aiBody":
      "IWN 2026 的 physics-guided AI-TCAD 把工程判斷寫成可追溯的規則：3 輪 81 組取代 960 組全因子掃描，模擬時間減少 92%。另開發 ChyiLab EDA 工具、KLayout DRC 助手、文獻管理與 GaN 產業情報系統。",
    "pub.eyebrow": "論文發表",
    "pub.title": "研究成果與論文發表",
    "pub.body":
      "碩士研究的兩條主線已整理成第一作者國際會議論文：元件端用 physics-guided AI-TCAD 收斂 E-mode GaN FinFET 的 Vth–Ron 取捨，磊晶端為多通道 AlGaN/GaN Trigate 建立 barrier 厚度設計規則。",
    "pub.viewPoster": "查看海報",
    "pub.iwnVenue": "IWN 2026 · 日本熊本 · Poster · 第一作者",
    "pub.iwnSummary":
      "E-mode GaN FinFET 必須同時取得正 Vth 與低 Ron。我用 Python 建立 physics-guided 專家系統：以 Vth 安全分與 Ron 導通分評分、依離散度調整權重，並把每個建議點對齊可製造的 Al / Wfin / tox 步長；每輪 27 組，每一點都能追溯是哪條規則選出來的。",
    "pub.iwnStat1": "更少設計組數（960 → 81）",
    "pub.iwnStat2": "更少模擬時間（29,171 → 2,342 h）",
    "pub.iwnStat3": "安全 E-mode 比例（第 1 → 3 輪）",
    "pub.iwnFinding":
      "關鍵發現：Al 組分主導全域 tradeoff；收斂後主導因子轉為 Trigate 靜電控制，Wfin = 25 nm 決定能否同時得到低 Ron 與正 Vth（Ron 0.834–1.008 Ω·mm，Vth 中位數 0.390 V）。",
    "pub.iedmsVenue": "IEDMS 2026 · 台北 · Poster · 第一作者 · Paper ID 1260",
    "pub.iedmsSummary":
      "多通道結構讓每個 AlGaN/GaN 介面都形成 2DEG 以降低 Ron,sp，但深層通道的閘控較弱。我固定上層 barrier 為 11 nm，掃描中層 Y 與底層 X（7–15 nm）共 25 組設計，萃取 Vth、Ron,sp、Id,max、電容與 Qg。",
    "pub.iedmsStat1": "Vth 隨底層 X 的變化",
    "pub.iedmsStat2": "同總厚度下 8 nm 由 X 移到 Y",
    "pub.iedmsStat3": "barrier 厚度設計規則",
    "pub.iedmsFinding":
      "關鍵發現：X 決定最深通道的閘控與 Vth；Y 以較小的深度代價增加並聯電荷，主導 Ron,sp 與 Id,max；Qg 只隨總厚度變化。設計規則是 Y 盡量大、X 盡量小，再依 gate-drive 損耗預算決定總厚度。",
    "pub.otherTag": "其他研究產出",
    "pub.firstAuthor": "第一作者",
    "keyword.power": "GaN Power FinFET",
    "keyword.trigate": "Trigate / Narrow-fin",
    "keyword.tcad": "3D TCAD Simulation",
    "keyword.mask": "光罩與佈局自動化",
    "keyword.mocvd": "MOCVD GaN recipe 參數設計管理",
    "keyword.ebeam": "E-beam 微影製程",
    "keyword.etch": "蝕刻製程",
    "keyword.ai": "AI 輔助元件開發",
    "hero.ctaResearch": "研究內容",
    "hero.ctaProjects": "工具開發與專利",
    "research.eyebrow": "元件研究",
    "research.title": "第三代功率元件研究",
    "research.ganHeading": "24/48 V E-mode GaN FinFET：磊晶、元件、製程與量測",
    "research.cardQuestionTag": "Core question",
    "research.cardQuestionTitle": "低 Ron 與 E-mode 如何同時成立",
    "research.body":
      "碩士專案的目標是用 GaN FinFET 結構做到低導通電阻，同時維持 E-mode。我把它拆成材料、元件與製程三條線：材料端處理多通道磊晶的 2DEG 與 Qg，元件端處理 Wfin、tox 與 Al 組分造成的 Vth–Ron 取捨，製程端拆成 Fin 關鍵測試與 p-GaN 元件開發，每條線都有可量測的輸出與決策節點。",
    "research.cardEpiTitle": "多通道磊晶 barrier 設計",
    "research.liEpi":
      "以 25 組 TCAD 設計拆解中層與底層 AlGaN barrier 的角色：底層 X 每增加 1 nm，Vth 負移約 15.8 mV；中層 Y 主導 Ron,sp 與電流；Qg 只隨總厚度走。最後把複雜的厚度分配收斂成 Y > X 這一個設計旋鈕。",
    "research.cardSimTitle": "Physics-guided AI-TCAD",
    "research.li1":
      "對 Wfin、tox、Al 組分做三輪、每輪 27 組的規則式搜尋，萃取 Vth、Ron、Epeak 與 ns；81 組取代 960 組全因子掃描，收斂到 Wfin 25 nm、Al 20.2–22.4%、tox 10–14 nm 的設計窗口。",
    "research.cardProcessTitle": "EBL / ICP-RIE 製程 DOE",
    "research.li3":
      "以 EBL dose matrix 找出 Fin 可用窗口（dose 106–110 最穩定），發現 Fin 實測寬度有約 +20.5 nm 的常數偏差，改在 GDS 端統一 bias −20 nm；hardmask 由 300 nm 降到 50 nm 後，轉印偏差縮到 −4～+6 nm，確認偏差主要來自微影而非蝕刻。",
    "research.li4": "ICP-RIE pressure、gas chemistry、bias power 與 etch selectivity 的 window 設計。",
    "research.cardMeasureTitle": "量測驗證與失效判讀",
    "research.li5":
      "以 B1500A 做 I-V、C-V、BV 與 TLM；多通道 SBD 在 1 kHz C-V 分出三個通道並萃取各層 ns。搭配 FIB 與 FE-SEM 截面建立「形貌 → root cause」判讀：先分辨設備、材料或製程異常，再每次只改一個旋鈕鎖定 recipe。",
    "research.sicHeading": "SiC Power 元件的 TCAD 模擬、設計、量測",
    "notes.capProcess": "D-mode / E-mode GaN FinFET 製程設計",
    "notes.capEbeam1": "E-beam lithography：dose、density、resist 與 transfer 共同決定 CD",
    "notes.capEbeam2": "E-beam checklist：先分辨問題來源，再改變 recipe",
    "notes.capEtch1": "Etch / SEM signature：區分 exposure、development 與 transfer 問題",
    "notes.capEtch2": "Etch DOE：固定 CD / mask baseline 後再拆 pressure、gas、bias",
    "analog.eyebrow": "IC 設計",
    "analog.title": "IC 設計專題：J-K 正反器全客製化與類比放大／比較器",
    "analog.body":
      "大學 VLSI 專題中，我完成了兩個積體電路的全流程設計，一個數位、一個類比，皆以 Cadence 從規格走到版圖與驗證。",
    "analog.digiTitle": "SN74LVC112A 雙負緣觸發 J-K 正反器",
    "analog.digiBody":
      "依 datasheet 規格，以 Cadence 全客製化設計帶預置與清除的雙負緣觸發 J-K 正反器，負責電路原理圖、內部邏輯與 IO 電路、版圖繪製與 DRC/LVS 檢查。",
    "analog.anaTitle": "差動放大、遲滯比較器與能隙基準",
    "analog.anaBody":
      "主導可在運放與遲滯比較器之間切換的複用電路，以及能隙基準設計，涵蓋原理分析、尺寸設計、Cadence 前模擬、PSRR / CMRR 與 ff / ss 製程角模擬；版圖採共質心輸入對管、叉指尾管與 dummy，完成 DRC/LVS、寄生萃取與後模擬。判讀原則：全 corner 失效先修設計，單一 corner 失效再拆製程敏感度。",
    "analog.previewToggle": "預覽專題報告（PDF）",
    "analog.mobilePdfNote": "請登錄電腦端查看此 PDF。",
    "experience.eyebrow": "經歷",
    "experience.title": "實習、專案與社團",
    "experience.body":
      "除了目前的元件研究，我也實戰過工業工程生產管理基本方法、認識SMT封測技術、區塊鏈工作室創建，以及學生創業社團的活動規劃。這些經歷讓我更習慣把技術放在實用產業可行性的角度思考。",
    "experience.sicTitle": "大學畢業論文：大功率元件 SiC MOSFET 高溫特性研究",
    "experience.sicBody":
      "以 TCAD Sentaurus 建立 SiC VDMOS 製程與結構模型，分析 25–300 °C 下 Vth、Ron、崩潰電壓與 body-diode 反向恢復，並完成 VDMOS 光罩設計；高溫 I-V、C-V 與雙脈衝量測顯示，接近 300 °C 時 Vth 較室溫下降約 38%、Qrr 約為 1.6 倍。論文成績 A+。",
    "awards.title": "競賽與獎項",
    "awards.item1": "第八屆中國國際「互聯網+」大學生創新創業大賽｜銀獎",
    "awards.item2": "國家級大學生創新訓練項目＋創業訓練計畫｜優秀結題",
    "awards.item3": "全國大學生數學建模競賽｜陝西省三等獎",
    "awards.item4": "香港中文大學（深圳）國際大學生 FinTech 創新大賽｜積極參與獎",
    "experience.sicCap1": "VDMOS 製程與結構模擬整理",
    "experience.sicCap2": "高溫加熱與電學測試平台",
    "experience.usiTitle": "日月光集團 USI 環旭電子暑期實習",
    "experience.usiBody":
      "參與 Summer Management Trainee Internship，學習 SMT 封測生產流程與關鍵站點功能，整理價值流與標準工時資料，並以精益生產方法製作製造專案管理報表。",
    "experience.usiCap1": "價值流與標準工時表整理",
    "experience.usiCap2": "SMT 製程工藝與站點流程",
    "experience.usiAltPlan": "USI 暑期管理培訓實習計畫與專案規劃",
    "experience.usiAltSmt": "SMT 製程工藝與站點流程圖",
    "experience.blockchainTitle": "仕集區塊鏈工作室",
    "experience.blockchainBody":
      "作為工作室創辦人，我負責區塊鏈底層系統架構、共識演算法開發，以及 UI 設計與前端 JavaScript 框架搭建。這段經歷讓我很早就開始把技術實作、產品呈現和團隊溝通放在一起做。",
    "experience.clubTitle": "創業者協會與學生創業中心社團",
    "experience.clubBody":
      "擔任協會會長兼社團副主席期間，我參與創新創業講座與論壇規劃，邀請創業校友交流，也協助行政執行與學生創新創業計畫活動。",
    "projects.eyebrow": "工具開發與專利",
    "projects.title": "工具開發與專利",
    "projects.body":
      "我喜歡將能提升生產效率的想法實作成工具：有些協助 EDA 與光罩設計，也有些用來追蹤 GaN 產業動態；此外，我也持續進行一項長期專案，將大學到研究所所學整理成知識圖譜以及對GaN近5年的頂刊頂會的文獻與閱讀筆記報告進行系統化整理。另一方面，大學時結合創業社團的經歷，我深入了解創業團隊在募資與協作上的挑戰，因此開發了仕集區塊鏈眾籌系統，並申請了多項演算法專利。",
    "projects.toolsHeading": "工具開發",
    "projects.patentsHeading": "專利",
    "projects.mechanicalPatentHeading": "機械設計專利",
    "projects.algorithmPatentHeading": "演算法專利",
    "projects.chyilabEpi":
      "MOCVD 磊晶成長 Recipe 設計工具，用來建立、管理與最佳化晶圓磊晶成長流程。",
    "projects.chyilabLayout":
      "AI 輔助的半導體版圖設計工具，以互動式 session 協助元件 Layout 與量測結構設計。",
    "projects.chyilabRuncard":
      "製程 Runcard 生成工具，把晶圓製程步驟整理成結構化 step card，並支援匯出。",
    "projects.chyilabToggle": "展開工具截圖",
    "projects.chyilabOverviewCap": "ChyiLab 三個工具入口總覽",
    "projects.chyilabEpiCap": "MOCVD Recipe Manager 工作流程與結構堆疊",
    "projects.chyilabLayoutCap": "Layout Assistant 版圖設計工作區",
    "projects.chyilabRuncardCap": "Process Runcard Builder 製程步驟編排",
    "projects.gan": "追蹤 GaN 產業新聞、論文、公司動態與市場資訊，用來維持研究方向感。",
    "projects.literature": "本機文獻整理工具，用來管理論文、主題、筆記和閱讀狀態。",
    "projects.literatureToggle": "展開介面截圖",
    "projects.literatureCap1": "文獻庫、AI 搜尋與右側摘要欄",
    "projects.literatureCap2": "PDF 預覽、摘要、創新點與備註整理",
    "projects.literatureCap3": "精讀報告與論文對照閱讀",
    "projects.literatureCap4": "週報文獻分組與閱讀進度整理",
    "projects.knowledge": "我從大學到研究所課程建立的個人知識圖譜，連接半導體、電子電路、製程、模擬與研究筆記。",
    "projects.knowledgeToggle": "展開介面截圖",
    "projects.knowledgeCap1": "學習資料知識庫與半導體知識圖譜入口",
    "projects.knowledgeCap2": "半導體、電路與製程概念的關係圖譜",
    "projects.knowledgeCap3": "課程資料、PDF 預覽與知識節點整理",
    "projects.mechPatentTitle": "具防護功能的自動化設備機架",
    "projects.mechPatent": "實用新型 CN217890168U：以滑槽、傳動絲桿與限位板固定並翻轉金屬工件，可依加工需求調整面向，送入自動化設備進行多面加工。",
    "projects.viewPatent": "查看專利",
    "projects.patent2": "眾包區塊鏈平台上的創業項目徵信方法",
    "projects.patent3": "區塊鏈輔助的人員負面情緒綜合評估方法與系統",
    "projects.patent4": "高可靠性情緒特徵提取與篩選方法",
    "projects.patent5": "分布式社交網絡熱點預測方法、系統及設備",
    "projects.patent6": "基於熱度值的社交聯盟鏈共識方法與系統",
    "projects.patent7": "基於上下文資訊的網絡流行語熱度值預測模型構建與訓練方法",
    "projects.patent8": "區塊鏈上實現的人員評估與匹配方法、系統及設備",
    "projects.openSite": "前往網站",
    "projects.openSite2": "前往網站",
    "life.eyebrow": "生活",
    "life.title": "生活片段",
    "life.body": "旅行、朋友、城市、山路和拼模型，都是我認識世界的方式。",
    "life.tagTravel": "旅行",
    "life.tagHiking": "徒步露營",
    "life.tagSwim": "游泳",
    "life.tagKendo": "劍道",
    "life.tagModel": "拼模型",
    "life.tagPhoto": "攝影整理",
    "life.tagPiano": "鋼琴",
    "life.tagGo": "圍棋",
    "life.tagConcert": "音樂會",
    "life.tagMovie": "電影",
    "life.tagOpera": "歌劇",
    "contact.eyebrow": "聯絡",
    "contact.title": "歡迎交流",
    "contact.body": "如果你也在做 GaN Power、TCAD、AI 輔助元件開發、製程整合或研究工具，歡迎聯絡我。",
    "footer.name": "陳秉佑 / Ping Yu-Chen / Bill Chen",
    "alt.profile": "陳秉佑個人照片",
    "alt.tcadSlide": "GaN Trigate AI-TCAD 研究投影片",
    "alt.cats": "陳秉佑養的兩隻貓咪",
    "photoStack.toggle": "查看可愛貓貓（coba&小秋）",
    "photoStack.hint": "查看可愛貓貓（coba&小秋）",
  },
  en: {
    "meta.title": "Ping Yu-Chen | Bill Chen",
    "meta.description":
      "Personal homepage of Ping Yu-Chen / Bill Chen: GaN power FinFETs, TCAD, AI-assisted device development, IWN 2026 and IEDMS 2026 papers, process DOE, analog IC design, and life notes.",
    brand: "Ping Yu-Chen · Bill Chen",
    "nav.publications": "Publications",
    "nav.research": "Device Research",
    "nav.analog": "IC Design",
    "nav.experience": "Experience",
    "nav.projects": "Tool Development & Patents",
    "nav.life": "Life",
    "nav.contact": "Contact",
    "hero.eyebrow": "GaN Power · TCAD · AI Tools · Process DOE · Measurement",
    "hero.title": "Turning GaN Power Device Ideas into Practical Applications.",
    "hero.bio1":
      "Hey, I'm Ping Yu-Chen (Bill Chen), an M.S. student in Solid-State Electronics at the Department of Electrical Engineering, National Central University, advised by Prof. Jen-Inn Chyi, with a B.S. in Microelectronics Science and Engineering from Xi'an Jiaotong University. I run research as a closed loop—device physics → TCAD simulation → layout → process DOE → measurement → calibration—and turn the results into design rules, process windows, and reproducible validation records.",
    "highlight.label": "Research highlights",
    "highlight.iwn": "First-author poster · Kumamoto, Japan",
    "highlight.iedms": "First-author poster · Taipei",
    "highlight.aiTcad": "AI-TCAD simulation time (81 vs 960 cases)",
    "interest.label": "Research interests",
    "interest.ganTitle": "Devices for power conversion in the AI era",
    "interest.ganBody":
      "My interest in GaN power comes from imagining humanoid robots, AI compute clusters, and high-density power systems. My M.S. research targets 24/48 V E-mode GaN FinFETs, from multi-channel epitaxy and trigate structures to EBL / ICP-RIE processing and measurement, building the devices hands-on.",
    "interest.tcadTitle": "Thinking the device through in simulation first",
    "interest.tcadBody":
      "I use Sentaurus to think devices through first: for IEDMS 2026, 25 multi-channel epitaxy designs reduced barrier-thickness allocation to a single Y > X design rule. I have also modeled SiC VDMOS behavior from 25–300 °C and calibrated it against measurement.",
    "interest.aiTag": "AI Tools",
    "interest.aiTitle": "Turning AI into an engineering assistant",
    "interest.aiBody":
      "For IWN 2026, a physics-guided AI-TCAD system encodes engineering judgment as traceable rules: 3 rounds / 81 cases replace a 960-case full sweep and cut simulation time by 92%. I also build ChyiLab EDA tools, a KLayout DRC assistant, a literature manager, and a GaN industry-intelligence tracker.",
    "pub.eyebrow": "Publications",
    "pub.title": "Research Output & Publications",
    "pub.body":
      "Two main lines of my M.S. research have become first-author conference papers: on the device side, a physics-guided AI-TCAD that converges the Vth–Ron tradeoff of E-mode GaN FinFETs; on the epitaxy side, barrier-thickness design rules for multi-channel AlGaN/GaN trigate transistors.",
    "pub.viewPoster": "View poster",
    "pub.iwnVenue": "IWN 2026 · Kumamoto, Japan · Poster · First author",
    "pub.iwnSummary":
      "E-mode GaN FinFETs need a positive Vth and a low Ron at once. I built a physics-guided expert system in Python that scores each case on Vth safety and Ron conduction, adapts the weights to their spread, and snaps every proposal onto manufacturable Al / Wfin / tox steps. Each round runs 27 cases, and every point can be traced to the rule that placed it.",
    "pub.iwnStat1": "fewer design cases (960 → 81)",
    "pub.iwnStat2": "less TCAD time (29,171 → 2,342 h)",
    "pub.iwnStat3": "safe E-mode ratio (round 1 → 3)",
    "pub.iwnFinding":
      "Key finding: Al composition governs the global tradeoff; once it converges, trigate electrostatics take over and Wfin = 25 nm decides whether low Ron and positive Vth coexist (Ron 0.834–1.008 Ω·mm at a median Vth of 0.390 V).",
    "pub.iedmsVenue": "IEDMS 2026 · Taipei · Poster · First author · Paper ID 1260",
    "pub.iedmsSummary":
      "Multi-channel stacks put a 2DEG at every AlGaN/GaN interface to lower Ron,sp, but deeper channels are gated less effectively. With the top barrier fixed at 11 nm, I swept the middle (Y) and bottom (X) barriers from 7 to 15 nm across 25 designs, extracting Vth, Ron,sp, Id,max, capacitances, and Qg.",
    "pub.iedmsStat1": "Vth shift per nm of bottom barrier X",
    "pub.iedmsStat2": "moving 8 nm from X to Y at equal total",
    "pub.iedmsStat3": "barrier-thickness design rule",
    "pub.iedmsFinding":
      "Key finding: X sets the deepest channel's gate control and Vth; Y adds parallel charge at a smaller depth cost and governs Ron,sp and Id,max; Qg follows only the total thickness. The rule: maximize Y, minimize X, then size the total within the gate-drive loss budget.",
    "pub.otherTag": "Other research output",
    "pub.firstAuthor": "First author",
    "keyword.power": "GaN Power FinFET",
    "keyword.trigate": "Trigate / Narrow-fin",
    "keyword.tcad": "3D TCAD Simulation",
    "keyword.mask": "Mask & Layout Automation",
    "keyword.mocvd": "MOCVD GaN recipe parameter design and management",
    "keyword.ebeam": "E-beam Lithography Process",
    "keyword.etch": "Etch Process",
    "keyword.ai": "AI-assisted Device Development",
    "hero.ctaResearch": "Research",
    "hero.ctaProjects": "Tool Development & Patents",
    "research.eyebrow": "Device Research",
    "research.title": "Third-Generation Power Device Research",
    "research.ganHeading": "24/48 V E-mode GaN FinFET: Epitaxy, Device, Process, and Measurement",
    "research.cardQuestionTag": "Core Question",
    "research.cardQuestionTitle": "Low Ron while staying E-mode",
    "research.body":
      "The goal of my M.S. project is a GaN FinFET with low on-resistance that stays enhancement-mode. I split it into three lines: epitaxy (2DEG and Qg in multi-channel stacks), device (the Vth–Ron tradeoff set by Wfin, tox, and Al composition), and process (critical fin tests and p-GaN device development). Each line has measurable outputs and decision points.",
    "research.cardEpiTitle": "Multi-Channel Epitaxy Barrier Design",
    "research.liEpi":
      "25 TCAD designs separate the roles of the middle and bottom AlGaN barriers: each extra nm of bottom barrier X shifts Vth by about −15.8 mV, the middle barrier Y governs Ron,sp and current, and Qg follows only the total thickness. The thickness allocation condenses into a single Y > X design knob.",
    "research.cardSimTitle": "Physics-Guided AI-TCAD",
    "research.li1":
      "A rule-based search over Wfin, tox, and Al composition, three rounds of 27 cases, extracts Vth, Ron, Epeak, and ns. 81 cases replace a 960-case full sweep and converge on a Wfin 25 nm, Al 20.2–22.4%, tox 10–14 nm design window.",
    "research.cardProcessTitle": "EBL / ICP-RIE Process DOE",
    "research.li3":
      "An EBL dose matrix located the usable fin window (most stable at dose 106–110) and revealed a constant ~+20.5 nm fin-width offset, fixed with a uniform −20 nm GDS bias. Thinning the hardmask from 300 nm to 50 nm cut transfer bias to −4 to +6 nm, showing the offset came from lithography rather than etch.",
    "research.li4": "ICP-RIE pressure, gas chemistry, bias power, and etch-selectivity window design.",
    "research.cardMeasureTitle": "Measurement and Failure Analysis",
    "research.li5":
      "B1500A I-V, C-V, BV, and TLM measurements; 1 kHz C-V resolved three channels in a multi-channel SBD and extracted each layer's ns. With FIB and FE-SEM cross-sections I map morphology to root cause: first tell equipment, material, and process issues apart, then change one knob at a time before locking a recipe.",
    "research.sicHeading": "TCAD Simulation, Design, and Measurement for SiC Power Devices",
    "notes.capProcess": "D-mode / E-mode GaN FinFET process design",
    "notes.capEbeam1": "E-beam lithography: dose, density, resist, and transfer jointly determine CD",
    "notes.capEbeam2": "E-beam checklist: identify the source before changing the recipe",
    "notes.capEtch1": "Etch / SEM signature: separating exposure, development, and transfer issues",
    "notes.capEtch2": "Etch DOE: fix CD / mask baseline before splitting pressure, gas, and bias",
    "analog.eyebrow": "IC Design",
    "analog.title": "IC Design Projects: Full-Custom J-K Flip-Flop and Analog Amplifier / Comparator",
    "analog.body":
      "In my undergraduate VLSI projects, I completed two full-flow IC designs: one digital and one analog. Both were taken from specification to layout and verification in Cadence.",
    "analog.digiTitle": "SN74LVC112A Dual Negative-Edge-Triggered J-K Flip-Flop",
    "analog.digiBody":
      "A full-custom Cadence design of the SN74LVC112A dual negative-edge-triggered J-K flip-flop with preset and clear, following the datasheet spec: schematic, internal logic and IO circuits, layout, and DRC/LVS checking.",
    "analog.anaTitle": "Differential Amplifier, Hysteresis Comparator and Bandgap Reference",
    "analog.anaBody":
      "Led the design of a reconfigurable circuit that switches between an op-amp and a hysteresis comparator, plus a bandgap reference, covering operating-principle analysis, sizing, Cadence pre-layout simulation, PSRR / CMRR, and ff / ss corners. The layout uses a common-centroid input pair, an interdigitated tail with dummies, and passed DRC/LVS, parasitic extraction, and post-layout simulation. My rule: if every corner fails, fix the design; if one corner fails, break down process sensitivity.",
    "analog.previewToggle": "Preview report (PDF)",
    "analog.mobilePdfNote": "Please view this PDF on a desktop computer.",
    "experience.eyebrow": "Experience",
    "experience.title": "Internship, Projects & Clubs",
    "experience.body":
      "Beyond my current device research, I have worked on industrial-engineering production management, SMT assembly-and-test workflows, founding a blockchain studio, and planning student entrepreneurship events. These experiences taught me to think about technology from the perspective of practical industrial feasibility.",
    "experience.sicTitle": "Undergraduate Thesis: High-Power SiC MOSFET High-Temperature Characterization",
    "experience.sicBody":
      "Built SiC VDMOS process and structure models in TCAD Sentaurus to analyze Vth, Ron, breakdown, and body-diode reverse recovery from 25–300 °C, and designed the VDMOS photomask. High-temperature I-V, C-V, and double-pulse measurements showed about a 38% Vth drop near 300 °C versus room temperature and roughly 1.6× Qrr. Thesis grade: A+.",
    "awards.title": "Competitions & Awards",
    "awards.item1": "8th China International \"Internet+\" College Student Innovation and Entrepreneurship Competition | Silver Award",
    "awards.item2": "National College Student Innovation and Entrepreneurship Training Programs | Excellent Completion",
    "awards.item3": "China Undergraduate Mathematical Contest in Modeling | Third Prize, Shaanxi Province",
    "awards.item4": "CUHK-Shenzhen International FinTech Innovation Competition | Active Participation Award",
    "experience.sicCap1": "VDMOS process and structure simulation summary",
    "experience.sicCap2": "High-temperature and electrical test platforms",
    "experience.usiTitle": "USI / ASE Group Summer Management Trainee Internship",
    "experience.usiBody":
      "Joined the Summer Management Trainee Internship at USI, ASE Group, learning SMT assembly-and-test production flows, key station functions, lean production methods, value-stream mapping, standard work-hour tracking, and manufacturing project-management reporting.",
    "experience.usiCap1": "Value-stream mapping and standard work-hour table",
    "experience.usiCap2": "SMT process flow and station workflow",
    "experience.usiAltPlan": "USI summer management trainee internship plan and project planning",
    "experience.usiAltSmt": "SMT process flow and station workflow diagram",
    "experience.blockchainTitle": "Shiji Blockchain Studio",
    "experience.blockchainBody":
      "As the studio founder, I worked on the underlying blockchain system architecture, consensus algorithm development, UI design, and the frontend JavaScript framework. It was an early experience in connecting implementation, product presentation, and team communication.",
    "experience.clubTitle": "Entrepreneurship Association and Student Startup Center",
    "experience.clubBody":
      "As association president and vice chair of the student organization, I helped plan entrepreneurship talks and forums, invited alumni founders, and supported administrative work for student innovation and startup activities.",
    "projects.eyebrow": "Tool Development & Patents",
    "projects.title": "Tool Development & Patents",
    "projects.body":
      "I like turning productivity-boosting ideas into tools: some support EDA and photomask design, some monitor GaN industry signals, and one long-term project organizes my undergraduate and graduate coursework into a knowledge graph while systematizing papers from top GaN journals and conferences over the past five years together with reading notes and reports. Drawing on my entrepreneurship-club experience and the real difficulties startup teams face in fundraising and collaboration, I also built the Shiji blockchain crowdfunding system and filed several algorithm patents.",
    "projects.toolsHeading": "Tool Development",
    "projects.patentsHeading": "Patents",
    "projects.mechanicalPatentHeading": "Mechanical Design Patent",
    "projects.algorithmPatentHeading": "Algorithm Patents",
    "projects.chyilabEpi":
      "A MOCVD epitaxial-growth recipe design tool for building, managing, and optimizing wafer growth sequences.",
    "projects.chyilabLayout":
      "An AI-powered semiconductor layout design assistant for interactive, session-based device layout and measurement-structure design.",
    "projects.chyilabRuncard":
      "A process run-card generation tool that turns wafer fabrication steps into structured step cards and supports export.",
    "projects.chyilabToggle": "Show tool screenshots",
    "projects.chyilabOverviewCap": "ChyiLab three-tool entry overview",
    "projects.chyilabEpiCap": "MOCVD Recipe Manager workflow and structure stack",
    "projects.chyilabLayoutCap": "Layout Assistant design workspace",
    "projects.chyilabRuncardCap": "Process Runcard Builder step scheduling",
    "projects.gan": "A monitor for GaN industry news, papers, company updates, and market signals, used to maintain research awareness.",
    "projects.literature": "A local literature-management tool for papers, topics, notes, and reading status.",
    "projects.literatureToggle": "Show interface screenshots",
    "projects.literatureCap1": "Library, AI search, and right-side summary panel",
    "projects.literatureCap2": "PDF preview, abstract, contribution notes, and remarks",
    "projects.literatureCap3": "Deep-reading report with side-by-side paper review",
    "projects.literatureCap4": "Weekly paper grouping and reading progress",
    "projects.knowledge": "My personal knowledge graph from undergraduate to graduate coursework, connecting semiconductors, circuits, process, simulation, and research notes.",
    "projects.knowledgeToggle": "Show interface screenshots",
    "projects.knowledgeCap1": "Study-material knowledge base and semiconductor knowledge-graph entry",
    "projects.knowledgeCap2": "Relationship graph across semiconductor, circuit, and process concepts",
    "projects.knowledgeCap3": "Course files, PDF preview, and knowledge-node organization",
    "projects.mechPatentTitle": "Automated Equipment Frame with Protective Function",
    "projects.mechPatent": "Utility model CN217890168U: an automated equipment frame that uses a chute, screw-drive mechanism, and limiting plate to clamp and flip metal workpieces, allowing the working face to be adjusted for multi-side machining.",
    "projects.viewPatent": "View patent",
    "projects.patent2": "Startup Project Credit-Investigation Method on a Crowdsourced Blockchain Platform",
    "projects.patent3": "Blockchain-Assisted Comprehensive Evaluation Method and System for Personnel Negative Emotions",
    "projects.patent4": "High-Reliability Emotion Feature Extraction and Screening Method",
    "projects.patent5": "Distributed Social-Network Hotspot Prediction Method, System, and Device",
    "projects.patent6": "Popularity-Based Social Consortium-Blockchain Consensus Method and System",
    "projects.patent7": "Context-Based Popularity-Value Prediction Model Construction and Training Method for Internet Buzzwords",
    "projects.patent8": "Blockchain-Implemented Personnel Evaluation and Matching Method, System, and Device",
    "projects.openSite": "Open site",
    "projects.openSite2": "Open site",
    "life.eyebrow": "Life",
    "life.title": "Life Notes",
    "life.body": "Travel, friends, cities, mountain roads, and model kits are all ways I learn about the world.",
    "life.tagTravel": "Travel",
    "life.tagHiking": "Hiking & camping",
    "life.tagSwim": "Swimming",
    "life.tagKendo": "Kendo",
    "life.tagModel": "Model kits",
    "life.tagPhoto": "Photo notes",
    "life.tagPiano": "Piano",
    "life.tagGo": "Go (Weiqi)",
    "life.tagConcert": "Concerts",
    "life.tagMovie": "Movies",
    "life.tagOpera": "Opera",
    "contact.eyebrow": "Contact",
    "contact.title": "Let’s Talk",
    "contact.body":
      "If you are working on GaN power, TCAD, AI-assisted device development, process integration, or research tools, I would be happy to connect.",
    "footer.name": "Ping Yu-Chen / Bill Chen",
    "alt.profile": "Portrait of Ping Yu-Chen",
    "alt.tcadSlide": "GaN Trigate AI-TCAD research slide",
    "alt.cats": "Ping Yu-Chen's two cats",
    "photoStack.toggle": "View the cute cats (coba & Xiao-Qiu)",
    "photoStack.hint": "View the cute cats (coba & Xiao-Qiu)",
  },
};

const languageButtons = document.querySelectorAll("[data-lang]");

function setLanguage(language) {
  const dictionary = translations[language] || translations.zh;
  document.documentElement.lang = language === "zh" ? "zh-Hant" : "en";
  document.title = dictionary["meta.title"];

  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const key = element.dataset.i18n;
    if (dictionary[key]) {
      element.textContent = dictionary[key];
    }
  });

  document.querySelectorAll("[data-i18n-attr]").forEach((element) => {
    element.dataset.i18nAttr.split(";").forEach((pair) => {
      const [attribute, key] = pair.split(":");
      if (attribute && key && dictionary[key]) {
        element.setAttribute(attribute, dictionary[key]);
      }
    });
  });

  languageButtons.forEach((button) => {
    const isActive = button.dataset.lang === language;
    button.classList.toggle("active", isActive);
    button.setAttribute("aria-pressed", String(isActive));
  });

  localStorage.setItem("preferred-language", language);
}

languageButtons.forEach((button) => {
  button.addEventListener("click", () => setLanguage(button.dataset.lang));
});

setLanguage(localStorage.getItem("preferred-language") || "zh");

const photoStack = document.querySelector(".photo-stack");
if (photoStack) {
  photoStack.addEventListener("click", () => {
    photoStack.classList.toggle("swapped");
  });
}

const pdfPreviewQuery = window.matchMedia("(min-width: 641px)");
const pdfIframes = document.querySelectorAll(".pdf-frame iframe[data-src]");

function updatePdfPreviews() {
  pdfIframes.forEach((iframe) => {
    const details = iframe.closest(".pdf-demo");
    if (pdfPreviewQuery.matches && details?.open) {
      if (!iframe.src) {
        iframe.src = iframe.dataset.src;
      }
    } else {
      iframe.removeAttribute("src");
    }
  });
}

updatePdfPreviews();
if (typeof pdfPreviewQuery.addEventListener === "function") {
  pdfPreviewQuery.addEventListener("change", updatePdfPreviews);
} else {
  pdfPreviewQuery.addListener(updatePdfPreviews);
}
document.querySelectorAll(".pdf-demo").forEach((details) => {
  details.addEventListener("toggle", updatePdfPreviews);
});

const siteHeader = document.querySelector(".site-header");
const navLinks = Array.from(document.querySelectorAll('nav a[href^="#"]'));
const pageSections = navLinks
  .map((link) => document.querySelector(link.getAttribute("href")))
  .filter(Boolean);

function updateHeaderState() {
  if (siteHeader) {
    siteHeader.classList.toggle("is-scrolled", window.scrollY > 12);
  }
}

updateHeaderState();
window.addEventListener("scroll", updateHeaderState, { passive: true });

if ("IntersectionObserver" in window && navLinks.length && pageSections.length) {
  const navObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) {
          return;
        }

        const activeLink = navLinks.find((link) => link.getAttribute("href") === `#${entry.target.id}`);
        navLinks.forEach((link) => {
          const isActive = link === activeLink;
          link.classList.toggle("is-active", isActive);
          if (isActive) {
            link.setAttribute("aria-current", "page");
          } else {
            link.removeAttribute("aria-current");
          }
        });
      });
    },
    { rootMargin: "-35% 0px -55% 0px", threshold: 0.01 },
  );

  pageSections.forEach((section) => navObserver.observe(section));
}

const revealItems = document.querySelectorAll(
  ".section-title, .research-focus-card, .report-grid figure, .ic-card, .experience-card, .project-card, .life-grid figure, .contact-section",
);

if ("IntersectionObserver" in window) {
  const revealObserver = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) {
          return;
        }

        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      });
    },
    { rootMargin: "0px 0px -12% 0px", threshold: 0.08 },
  );

  revealItems.forEach((item) => {
    item.classList.add("reveal-item");
    revealObserver.observe(item);
  });
} else {
  revealItems.forEach((item) => item.classList.add("is-visible"));
}

const keywordCloud = document.querySelector(".keyword-cloud");
const keywordItems = keywordCloud ? Array.from(keywordCloud.querySelectorAll("button")) : [];
const highlightDuration = 3600;
let highlightTimer;

function highlightKeywordTargets(trigger, targetIds) {
  const targets = targetIds
    .map((id) => document.querySelector(`[data-highlight-id="${id}"]`))
    .filter(Boolean);

  if (!targets.length) {
    return;
  }

  window.clearTimeout(highlightTimer);
  keywordItems.forEach((item) => item.classList.toggle("is-keyword-active", item === trigger));
  document.querySelectorAll(".is-keyword-highlight").forEach((item) => {
    item.classList.remove("is-keyword-highlight");
  });

  targets.forEach((target) => {
    target.classList.add("is-visible");
    target.classList.add("is-keyword-highlight");
  });

  targets[0].scrollIntoView({ behavior: "smooth", block: "center" });

  highlightTimer = window.setTimeout(() => {
    targets.forEach((target) => target.classList.remove("is-keyword-highlight"));
    keywordItems.forEach((item) => item.classList.remove("is-keyword-active"));
  }, highlightDuration);
}

keywordItems.forEach((item) => {
  item.addEventListener("click", () => {
    const targetIds = (item.dataset.targets || "")
      .split(",")
      .map((id) => id.trim())
      .filter(Boolean);

    highlightKeywordTargets(item, targetIds);
  });
});

if (keywordCloud && keywordItems.length && !window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
  keywordCloud.addEventListener("pointermove", (event) => {
    const bounds = keywordCloud.getBoundingClientRect();
    const centerX = bounds.left + bounds.width / 2;
    const centerY = bounds.top + bounds.height / 2;
    const pointerX = (event.clientX - centerX) / bounds.width;
    const pointerY = (event.clientY - centerY) / bounds.height;

    keywordItems.forEach((item, index) => {
      const depth = 5 + (index % 4) * 2;
      item.style.setProperty("--push-x", `${(pointerX * depth).toFixed(2)}px`);
      item.style.setProperty("--push-y", `${(pointerY * depth).toFixed(2)}px`);
    });
  });

  keywordCloud.addEventListener("pointerleave", () => {
    keywordItems.forEach((item) => {
      item.style.removeProperty("--push-x");
      item.style.removeProperty("--push-y");
    });
  });
}
