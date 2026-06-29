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
    "nav.analog": "類比 IC",
    "nav.experience": "經歷",
    "nav.projects": "作品",
    "nav.life": "生活",
    "nav.contact": "聯絡",
    "hero.eyebrow": "GaN Trigate · Process DOE · Measurement · TCAD Simulation · LTSPICE · Cadence EDA × AI",
    "hero.title": "讓 GaN Power 元件從想法走向模擬、製作、驗證與應用。",
    "hero.bio1":
      "我是陳秉佑，也使用 Ping Yu-Chen / Bill Chen 這個名字。我的研究從 GaN Trigate 功率元件設計出發，逐步延伸到 TCAD 模擬、光罩與佈局設計、E-beam 微影、蝕刻製程開發，以及量測資料回饋。",
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
    "keyword.robotics": "機器人電力電子",
    "keyword.energy": "高密度能源轉換",
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
    "analog.eyebrow": "類比 IC",
    "analog.title": "類比積體電路專題：差動放大電路與遲滯比較器",
    "analog.body":
      "大學專題中，我主持差動放大電路、遲滯比較器與能隙參考相關電路設計。工作包含原理分析、尺寸設計、Cadence 前模擬 testbench、佈局協作、DRC/LVS、寄生參數萃取與後模擬驗證。",
    "analog.cardTitle": "從電路規格到佈局驗證",
    "analog.cardBody":
      "這個專題讓我熟悉 CMRR、PSRR、gain、phase margin、offset、corner simulation 與 post-layout checking。",
    "analog.li1": "Cadence 前模擬 testbench 建立與參數量測。",
    "analog.li2": "tt / ff / ss 製程角比較。",
    "analog.li3": "佈局、DRC/LVS、PEX 與後仿結果整理。",
    "analog.capCorners": "製程角與性能指標",
    "analog.capWave": "Cadence 測試電路與波形",
    "analog.capLayout": "整體佈局與 common-centroid input pair",
    "analog.capDetail": "電流鏡、差動對與 dummy 元件設計",
    "experience.eyebrow": "經歷",
    "experience.title": "經歷",
    "experience.body":
      "除了目前的 GaN Trigate 研究，我也做過 SiC VDMOS 高溫特性專題、區塊鏈工作室創建，以及學生創業社團的活動規劃。這些經歷讓我更習慣把技術放在實用產業可行性的角度思考。",
    "experience.sicTitle": "大學畢業論文：大功率元件 SiC MOSFET 高溫特性研究",
    "experience.sicBody":
      "獨立完成以 TCAD Sentaurus 進行 SiC VDMOSFET 元件模擬，調整結構參數並設計 VDMOS 光罩製程設計；以及 CV、IV、double pulse 等特性量測整理。",
    "experience.sicCap1": "VDMOS 製程與結構模擬整理",
    "experience.sicCap2": "高溫加熱與電學測試平台",
    "experience.blockchainTitle": "仕集區塊鏈工作室",
    "experience.blockchainBody":
      "作為工作室創辦人，我負責區塊鏈底層系統架構、共識演算法開發，以及 UI 設計與前端 JavaScript 框架搭建。這段經歷讓我很早就開始把技術實作、產品呈現和團隊溝通放在一起做。",
    "experience.clubTitle": "創業者協會與學生創業中心社團",
    "experience.clubBody":
      "擔任協會會長兼社團副主席期間，我參與創新創業講座與論壇規劃，邀請創業校友交流，也協助行政執行與學生創新創業計畫活動。",
    "projects.eyebrow": "作品",
    "projects.title": "小工具與應用",
    "projects.body":
      "我喜歡把研究中反覆出現的步驟做成工具：有些用來整理文獻，有些用來協助 EDA 和光罩設計，有些用來追蹤 GaN 產業動態，也有些是我把大學到研究所課程知識整理成圖譜的長期專案。",
    "projects.chyilab": "把實驗室常用的 EDA、佈局、模擬與研究輔助工具整理成可瀏覽的入口。",
    "projects.gan": "追蹤 GaN 產業新聞、論文、公司動態與市場資訊，用來維持研究方向感。",
    "projects.literature": "本機文獻整理工具，用來管理論文、主題、筆記和閱讀狀態。",
    "projects.literatureToggle": "展開介面截圖",
    "projects.literatureCap1": "文獻庫、AI 搜尋與右側摘要欄",
    "projects.literatureCap2": "PDF 預覽、摘要、創新點與備註整理",
    "projects.literatureCap3": "精讀報告與論文對照閱讀",
    "projects.literatureCap4": "週報文獻分組與閱讀進度整理",
    "projects.knowledge": "我從大學到研究所課程建立的個人知識圖譜，連接半導體、電子電路、製程、模擬與研究筆記。",
    "projects.openSite": "前往網站",
    "projects.openSite2": "前往網站",
    "life.eyebrow": "生活",
    "life.title": "生活片段",
    "life.body": "旅行、朋友、城市、山路和拼模型，都是我認識世界的方式。",
    "life.tagTravel": "旅行",
    "life.tagModel": "拼模型",
    "life.tagPhoto": "攝影整理",
    "contact.eyebrow": "聯絡",
    "contact.title": "歡迎交流",
    "contact.body": "如果你也在做 GaN、TCAD、EDA automation、類比 IC 或研究工具，歡迎聯絡我。",
    "footer.name": "陳秉佑 / Ping Yu-Chen / Bill Chen",
    "alt.profile": "陳秉佑個人照片",
    "alt.tcadSlide": "GaN Trigate AI-TCAD 研究投影片",
    "alt.cats": "陳秉佑養的兩隻貓咪",
    "photoStack.toggle": "切換前後照片",
    "photoStack.hint": "點擊切換前後照片",
  },
  en: {
    "meta.title": "Ping Yu-Chen | Bill Chen",
    "meta.description":
      "Personal homepage of Ping Yu-Chen / Bill Chen: GaN Trigate devices, photomask design, process development, analog IC, EDA tools, AI research tools, and life notes.",
    brand: "Ping Yu-Chen · Bill Chen",
    "nav.research": "Device Research",
    "nav.analog": "Analog IC",
    "nav.experience": "Experience",
    "nav.projects": "Projects",
    "nav.life": "Life",
    "nav.contact": "Contact",
    "hero.eyebrow": "GaN Trigate · Process DOE · Measurement · TCAD Simulation · LTSPICE · Cadence EDA × AI",
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
    "keyword.robotics": "Robotics Power Electronics",
    "keyword.energy": "High-density Power Conversion",
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
    "analog.eyebrow": "Analog IC",
    "analog.title": "Analog IC Project: Differential Amplifier And Hysteresis Comparator",
    "analog.body":
      "In my undergraduate analog IC project, I worked on differential amplifier, hysteresis comparator, and bandgap-reference related circuits. My work covered principle analysis, transistor sizing, Cadence pre-layout testbenches, layout collaboration, DRC/LVS, parasitic extraction, and post-layout verification.",
    "analog.cardTitle": "From Circuit Specs To Layout Verification",
    "analog.cardBody":
      "This project trained me on CMRR, PSRR, gain, phase margin, offset, corner simulation, and post-layout checking.",
    "analog.li1": "Building Cadence pre-layout testbenches and measuring parameters.",
    "analog.li2": "Comparing tt / ff / ss process corners.",
    "analog.li3": "Organizing layout, DRC/LVS, PEX, and post-layout simulation results.",
    "analog.capCorners": "Process corners and performance metrics",
    "analog.capWave": "Cadence test circuits and waveforms",
    "analog.capLayout": "Full layout and common-centroid input pair",
    "analog.capDetail": "Current mirror, differential pair, and dummy design",
    "experience.eyebrow": "Experience",
    "experience.title": "Experience",
    "experience.body":
      "Beyond my current GaN Trigate work, I have worked on SiC VDMOS high-temperature characteristics, founding a blockchain studio, and planning student entrepreneurship events. These experiences taught me to think about technology from the angle of practical industry feasibility.",
    "experience.sicTitle": "Undergraduate Thesis: High-Power SiC MOSFET High-Temperature Characterization",
    "experience.sicBody":
      "Independently carried out SiC VDMOSFET device simulation with TCAD Sentaurus, tuning structural parameters and designing the VDMOS mask and process flow, along with organizing CV, IV, and double-pulse measurement work.",
    "experience.sicCap1": "VDMOS process and structure simulation notes",
    "experience.sicCap2": "High-temperature and electrical test platforms",
    "experience.blockchainTitle": "Shiji Blockchain Studio",
    "experience.blockchainBody":
      "As the studio founder, I worked on the underlying blockchain system architecture, consensus algorithm development, UI design, and the frontend JavaScript framework. It was an early experience in connecting implementation, product presentation, and team communication.",
    "experience.clubTitle": "Entrepreneurship Association And Student Startup Center",
    "experience.clubBody":
      "As association president and vice chair of the student organization, I helped plan entrepreneurship talks and forums, invited alumni founders, and supported administrative work for student innovation and startup activities.",
    "projects.eyebrow": "Projects",
    "projects.title": "Tools & Apps",
    "projects.body":
      "I like turning repeated research steps into tools: some organize literature, some support EDA and mask design, some monitor GaN industry signals, and some form a long-term knowledge graph from my undergraduate and graduate coursework.",
    "projects.chyilab": "A public entry point for lab EDA, layout, simulation, and research-assistant tools.",
    "projects.gan": "A monitor for GaN industry news, papers, company updates, and market signals.",
    "projects.literature": "A local literature-management tool for papers, topics, notes, and reading status.",
    "projects.literatureToggle": "Show interface screenshots",
    "projects.literatureCap1": "Library, AI search, and right-side summary panel",
    "projects.literatureCap2": "PDF preview, abstract, contribution notes, and remarks",
    "projects.literatureCap3": "Deep-reading report with side-by-side paper review",
    "projects.literatureCap4": "Weekly paper grouping and reading progress",
    "projects.knowledge": "My personal knowledge graph from undergraduate to graduate coursework, connecting semiconductors, circuits, process, simulation, and research notes.",
    "projects.openSite": "Open site",
    "projects.openSite2": "Open site",
    "life.eyebrow": "Life",
    "life.title": "Life Notes",
    "life.body": "Travel, friends, cities, mountain roads, and model kits are all ways I learn about the world.",
    "life.tagTravel": "Travel",
    "life.tagModel": "Model kits",
    "life.tagPhoto": "Photo notes",
    "contact.eyebrow": "Contact",
    "contact.title": "Let’s Talk",
    "contact.body":
      "If you are working on GaN, TCAD, EDA automation, analog IC, or research tools, I would be happy to connect.",
    "footer.name": "Ping Yu-Chen / Bill Chen",
    "alt.profile": "Portrait of Ping Yu-Chen",
    "alt.tcadSlide": "GaN Trigate AI-TCAD research slide",
    "alt.cats": "Ping Yu-Chen's two cats",
    "photoStack.toggle": "Swap front and back photos",
    "photoStack.hint": "Tap to swap the photos",
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
