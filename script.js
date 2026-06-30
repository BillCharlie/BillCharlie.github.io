const year = document.querySelector("#year");

if (year) {
  year.textContent = new Date().getFullYear();
}

const translations = {
  zh: {
    "meta.title": "陳秉佑 | Ping Yu-Chen",
    "meta.description":
      "陳秉佑 / Ping Yu-Chen / Bill Chen 的個人首頁：GaN Trigate 元件、光罩設計、製程開發、類比 IC、EDA 工具、AI 研究工具與生活紀錄。",
    brand: "陳秉佑 · Ping Yu-Chen",
    "nav.research": "元件研究",
    "nav.analog": "IC 設計",
    "nav.experience": "經歷",
    "nav.projects": "作品",
    "nav.life": "生活",
    "nav.contact": "聯絡",
    "hero.eyebrow": "GaN Trigate · Process DOE · Measurement · TCAD Simulation · LTSPICE · Candence · EDA × AI",
    "hero.title": "讓 GaN Power 元件從想法走向模擬、製作、驗證與應用。",
    "hero.bio1":
      "Hey，我是陳秉佑（Ping Yu-Chen / Bill Chen）。我的研究從 GaN Trigate 功率元件設計出發，逐步延伸到 TCAD 模擬、光罩與佈局設計、E-beam 微影、蝕刻製程開發，以及量測資料回饋。",
    "hero.bio2":
      "我對 GaN Power 元件的興趣，來自於我對未來人形機器人、AI 算力集群與高密度能源轉換系統的想像。隨著 AI 應用與智慧機器系統快速發展，電力電子元件不再只是支撐系統運作的基礎零件，而是決定效率、體積、散熱與整體系統能力的重要核心。",
    "hero.bio3":
      "我希望建立一套從元件構想到模擬、製作、量測與資料回饋的完整開發流程，也把 AI 與自動化導入元件級 DRC、光罩與佈局自動化、MOCVD GaN recipe 參數管理，以及 GaN 製程 run card 生成，讓 AI 實際參與元件設計、製程規劃與實驗迭代。",
    "keyword.power": "GaN Power FET",
    "keyword.trigate": "Trigate / Narrow-fin",
    "keyword.tcad": "3D TCAD Simulation",
    "keyword.mask": "光罩與佈局自動化",
    "keyword.process": "E-beam / 蝕刻製程",
    "keyword.ai": "AI 輔助元件開發",
    "hero.ctaResearch": "研究內容",
    "hero.ctaProjects": "工具與作品",
    "research.eyebrow": "元件研究",
    "research.title": "目前研究重點",
    "research.cardQuestionTag": "Core question",
    "research.cardQuestionTitle": "GaN Power FET 的關鍵 tradeoff",
    "research.body":
      "我目前關注的是 GaN Power FET 在臨界電壓、導通電阻、崩潰電壓與開關損耗之間的取捨。研究主線圍繞 Vth-Ronsp tradeoff、RonspQg / RonspQgd FOM tradeoff、BV 與 Epeak 限制，以及結構可製造性如何一起收斂。",
    "research.cardSimTitle": "GaN Trigate TCAD 3D simulation",
    "research.li1":
      "建立 GaN Trigate 三維元件模型，掃描 fin geometry、Al composition、tox、Lg 與 field profile，觀察 Vth、Ron、BV、Epeak 與電荷相關 FOM 的變化。",
    "research.cardProcessTitle": "從模擬走向光罩與製程",
    "research.li3":
      "把 TCAD 結果轉成光罩佈局、測試結構與每道製程的 Runcard，並拆解 E-beam dose、PEC、development、hardmask transfer、ICP-RIE etch profile 與 process window。",
    "research.li4": "ICP-RIE pressure、gas chemistry、bias power 與 etch selectivity 的 window 設計。",
    "research.cardMeasureTitle": "量測回饋與動態特性",
    "research.li5":
      "規劃 TLM、HBD/VBD、Id-Vg、Id-Vd、Ig-Vg、breakdown、高頻 C-V 與雙脈衝動態特性量測，將實驗結果回饋到下一輪元件設計與製程條件。",
    "notes.capProcess": "D-mode / E-mode GaN 製程流程",
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
      "主導差動放大電路、遲滯比較器與能隙基準設計，涵蓋原理分析、尺寸設計、Cadence 前模擬 testbench、PSRR / CMRR、製程角（ff / ss）模擬、版圖、寄生參數萃取與後模擬驗證。",
    "analog.previewToggle": "預覽專題報告（PDF）",
    "analog.mobilePdfNote": "請登錄電腦端查看此 PDF。",
    "experience.eyebrow": "經歷",
    "experience.title": "經歷",
    "experience.body":
      "除了目前的 GaN Trigate 研究，我也做過 SiC VDMOS 高溫特性研究、實戰過工業工程生產管理基本方法、認識SMT封測技術、區塊鏈工作室創建，以及學生創業社團的活動規劃。這些經歷讓我更習慣把技術放在實用產業可行性的角度思考。",
    "experience.sicTitle": "大學畢業論文：大功率元件 SiC MOSFET 高溫特性研究",
    "experience.sicBody":
      "獨立完成以 TCAD Sentaurus 進行 SiC VDMOSFET 元件模擬，調整結構參數並設計 VDMOS 光罩製程設計；以及 CV、IV、double pulse 等特性量測整理。",
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
    "life.tagModel": "拼模型",
    "life.tagPhoto": "攝影整理",
    "life.tagPiano": "鋼琴",
    "life.tagGo": "圍棋",
    "life.tagConcert": "音樂會",
    "life.tagMovie": "電影",
    "life.tagOpera": "歌劇",
    "contact.eyebrow": "聯絡",
    "contact.title": "歡迎交流",
    "contact.body": "如果你也在做 GaN、TCAD、EDA automation、類比 IC 或研究工具，歡迎聯絡我。",
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
      "Personal homepage of Ping Yu-Chen / Bill Chen: GaN Trigate devices, photomask design, process development, analog IC, EDA tools, AI research tools, and life notes.",
    brand: "Ping Yu-Chen · Bill Chen",
    "nav.research": "Device Research",
    "nav.analog": "IC Design",
    "nav.experience": "Experience",
    "nav.projects": "Projects",
    "nav.life": "Life",
    "nav.contact": "Contact",
    "hero.eyebrow": "GaN Trigate · Process DOE · Measurement · TCAD Simulation · LTSPICE · Candence · EDA × AI",
    "hero.title": "Bringing GaN Power Devices From Ideas To Simulation, Fabrication, Verification, And Application.",
    "hero.bio1":
      "I am Ping Yu-Chen, also known as Bill Chen. My research starts from GaN Trigate power-device design and extends into TCAD simulation, mask and layout design, E-beam lithography, etch process development, and measurement feedback.",
    "hero.bio2":
      "My interest in GaN power devices comes from imagining future humanoid robots, AI compute clusters, and high-density power-conversion systems. As AI and intelligent machines grow, power devices are no longer just supporting components; they shape efficiency, size, thermal design, and system capability.",
    "hero.bio3":
      "I want to build a complete development flow from device concept to simulation, fabrication, measurement, and data feedback. I also bring AI and automation into device-level DRC, mask/layout automation, MOCVD GaN recipe management, and GaN process Runcard generation so AI can participate in design, process planning, and experimental iteration.",
    "keyword.power": "GaN Power FET",
    "keyword.trigate": "Trigate / Narrow-fin",
    "keyword.tcad": "3D TCAD Simulation",
    "keyword.mask": "Mask & Layout Automation",
    "keyword.process": "E-beam / Etch Process",
    "keyword.ai": "AI-assisted Device Development",
    "hero.ctaResearch": "Research",
    "hero.ctaProjects": "Tools & Projects",
    "research.eyebrow": "Device Research",
    "research.title": "Current Research Focus",
    "research.cardQuestionTag": "Core question",
    "research.cardQuestionTitle": "Key Tradeoffs In GaN Power FETs",
    "research.body":
      "My current focus is the tradeoff space of GaN Power FETs: threshold voltage, on-resistance, breakdown voltage, and switching loss. The main questions are Vth-Ronsp, RonspQg / RonspQgd FOMs, BV and Epeak limits, and whether the structure can converge with a realistic process flow.",
    "research.cardSimTitle": "GaN Trigate TCAD 3D Simulation",
    "research.li1":
      "I build 3D GaN Trigate TCAD models and sweep fin geometry, Al composition, tox, Lg, and field profiles to study Vth, Ron, BV, Epeak, and charge-related FOMs.",
    "research.cardProcessTitle": "From Simulation To Mask And Process",
    "research.li3":
      "I translate TCAD results into photomask layouts, test structures, and Runcards for each process step while breaking down E-beam dose, PEC, development, hardmask transfer, ICP-RIE etch profiles, and process windows.",
    "research.li4": "ICP-RIE pressure, gas chemistry, bias power, and etch-selectivity window design.",
    "research.cardMeasureTitle": "Measurement Feedback And Dynamics",
    "research.li5":
      "I plan TLM, HBD/VBD, Id-Vg, Id-Vd, Ig-Vg, breakdown, high-frequency C-V, and double-pulse dynamic characterization, then feed the results into the next device and process iteration.",
    "notes.capProcess": "D-mode / E-mode GaN process flow",
    "notes.capEbeam1": "E-beam lithography: dose, density, resist, and transfer jointly determine CD",
    "notes.capEbeam2": "E-beam checklist: identify the source before changing the recipe",
    "notes.capEtch1": "Etch / SEM signature: separating exposure, development, and transfer issues",
    "notes.capEtch2": "Etch DOE: fix CD / mask baseline before splitting pressure, gas, and bias",
    "analog.eyebrow": "IC Design",
    "analog.title": "IC Design Projects: Full-Custom J-K Flip-Flop and Analog Amplifier / Comparator",
    "analog.body":
      "In my undergraduate VLSI projects I completed two full-flow IC designs, one digital and one analog, both taken from spec to layout and verification in Cadence.",
    "analog.digiTitle": "SN74LVC112A Dual Negative-Edge-Triggered J-K Flip-Flop",
    "analog.digiBody":
      "A full-custom Cadence design of the SN74LVC112A dual negative-edge-triggered J-K flip-flop with preset and clear, following the datasheet spec: schematic, internal logic and IO circuits, layout, and DRC/LVS checking.",
    "analog.anaTitle": "Differential Amplifier, Hysteresis Comparator and Bandgap Reference",
    "analog.anaBody":
      "Led the design of a differential amplifier, hysteresis comparator, and bandgap reference, covering principle analysis, transistor sizing, Cadence pre-layout testbenches, PSRR / CMRR, ff / ss corner simulation, layout, parasitic extraction, and post-layout verification.",
    "analog.previewToggle": "Preview report (PDF)",
    "analog.mobilePdfNote": "Please view this PDF on a desktop computer.",
    "experience.eyebrow": "Experience",
    "experience.title": "Experience",
    "experience.body":
      "Beyond my current GaN Trigate work, I have worked on SiC VDMOS high-temperature characteristics, founding a blockchain studio, and planning student entrepreneurship events. These experiences taught me to think about technology from the angle of practical industry feasibility.",
    "experience.sicTitle": "Undergraduate Thesis: High-Power SiC MOSFET High-Temperature Characterization",
    "experience.sicBody":
      "Independently carried out SiC VDMOSFET device simulation with TCAD Sentaurus, tuning structural parameters and designing the VDMOS mask and process flow, along with organizing CV, IV, and double-pulse measurement work.",
    "experience.sicCap1": "VDMOS process and structure simulation notes",
    "experience.sicCap2": "High-temperature and electrical test platforms",
    "experience.usiTitle": "USI / ASE Group Summer Management Trainee Internship",
    "experience.usiBody":
      "Joined the Summer Management Trainee Internship at USI, ASE Group, learning SMT production flows, key station functions, lean production methods, value-stream mapping, standard work-hour tracking, and manufacturing project management reporting.",
    "experience.usiCap1": "Value-stream mapping and standard work-hour table",
    "experience.usiCap2": "SMT process flow and station workflow",
    "experience.usiAltPlan": "USI summer management trainee internship plan and project planning",
    "experience.usiAltSmt": "SMT process flow and station workflow diagram",
    "experience.blockchainTitle": "Shiji Blockchain Studio",
    "experience.blockchainBody":
      "As the studio founder, I worked on the underlying blockchain system architecture, consensus algorithm development, UI design, and the frontend JavaScript framework. It was an early experience in connecting implementation, product presentation, and team communication.",
    "experience.clubTitle": "Entrepreneurship Association And Student Startup Center",
    "experience.clubBody":
      "As association president and vice chair of the student organization, I helped plan entrepreneurship talks and forums, invited alumni founders, and supported administrative work for student innovation and startup activities.",
    "projects.eyebrow": "Tool Development & Patents",
    "projects.title": "Tool Development & Patents",
    "projects.body":
      "I like turning productivity-boosting ideas into tools: some organize literature, some support EDA and mask design, some monitor GaN industry signals, and some form a long-term knowledge graph from my undergraduate and graduate coursework. Drawing on my entrepreneurship-club experience and the real difficulties startup teams face, I also built the Blockchain 仕集 crowdfunding system and filed several algorithm patents.",
    "projects.toolsHeading": "Tool Development",
    "projects.patentsHeading": "Patents",
    "projects.chyilabEpi":
      "A MOCVD epitaxial-growth recipe designer for building, managing, and optimizing wafer growth sequences.",
    "projects.chyilabLayout":
      "An AI-powered semiconductor layout design assistant for interactive, session-based device layout and measurement-structure design.",
    "projects.chyilabRuncard":
      "A process runcard generation tool that turns wafer fabrication steps into structured step cards and supports export.",
    "projects.chyilabToggle": "Show tool screenshots",
    "projects.chyilabOverviewCap": "ChyiLab three-tool entry overview",
    "projects.chyilabEpiCap": "MOCVD Recipe Manager workflow and structure stack",
    "projects.chyilabLayoutCap": "Layout Assistant design workspace",
    "projects.chyilabRuncardCap": "Process Runcard Builder step planning",
    "projects.gan": "A monitor for GaN industry news, papers, company updates, and market signals.",
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
    "projects.mechPatentTitle": "Automation equipment rack with protection function",
    "projects.mechPatent": "Utility model CN217890168U: an automation equipment rack that uses a chute, lead-screw transmission, and limiting plate to clamp and flip metal workpieces, adjusting the working face for multi-side machining.",
    "projects.viewPatent": "View patent",
    "projects.patent2": "Startup project credit-investigation method on a crowd-sourced blockchain platform",
    "projects.patent3": "Blockchain-assisted comprehensive evaluation method and system for personnel negative emotions",
    "projects.patent4": "High-reliability emotion feature extraction and screening method",
    "projects.patent5": "Distributed social-network hotspot prediction method, system and device",
    "projects.patent6": "Popularity-based social alliance chain consensus method and system",
    "projects.patent7": "Context-based popularity-value prediction model construction and training method",
    "projects.patent8": "Personnel evaluation and matching method, system and device implemented on blockchain",
    "projects.openSite": "Open site",
    "projects.openSite2": "Open site",
    "life.eyebrow": "Life",
    "life.title": "Life Notes",
    "life.body": "Travel, friends, cities, mountain roads, and model kits are all ways I learn about the world.",
    "life.tagTravel": "Travel",
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
      "If you are working on GaN, TCAD, EDA automation, analog IC, or research tools, I would be happy to connect.",
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
