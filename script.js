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
    "nav.research": "研究",
    "nav.mask": "光罩",
    "nav.analog": "類比 IC",
    "nav.experience": "經歷",
    "nav.projects": "作品",
    "nav.life": "生活",
    "nav.contact": "聯絡",
    "hero.eyebrow": "GaN Trigate · 製程 DOE · TCAD · EDA 工具",
    "hero.title": "我在把 GaN 元件想法，做成能模擬、能製作、能量測的流程。",
    "hero.lead":
      "我是陳秉佑（Ping Yu-Chen / Bill Chen）。我的研究從 GaN Trigate 元件設計出發，延伸到 TCAD 模擬、光罩與佈局設計、E-beam 與 etch 製程開發，以及量測資料回饋。我也喜歡寫工具，把 AI 和自動化放進研究日常。",
    "hero.ctaResearch": "研究內容",
    "hero.ctaProjects": "工具與作品",
    "focus.sim.title": "模擬與設計",
    "focus.sim.body":
      "用 TCAD 建立 GaN Trigate / narrow-fin 結構，追蹤 Vth、Ron、BV、Id-Vg、Id-Vd 與 E-field。",
    "focus.mask.title": "光罩與版圖",
    "focus.mask.body": "把元件參數、測試結構、probe pad、alignment、AutoCAD / GDS / DXF 佈局流程串起來。",
    "focus.process.title": "製程與 DOE",
    "focus.process.body": "整理 E-beam lithography、hardmask transfer、ICP-RIE etch profile 與 process window。",
    "focus.measure.title": "量測與回饋",
    "focus.measure.body": "從 CD/SEM 到 TLM、Id-Vg、Id-Vd、breakdown，把結果帶回下一輪設計。",
    "research.eyebrow": "研究",
    "research.title": "研究內容",
    "research.body":
      "我的核心問題是：一個 GaN Trigate 元件，怎樣從結構假設走到可製作、可量測、可解釋的結果。所以我不只看單點特性，也會同時考慮 Vth-Ron-BV tradeoff、Epeak 限制、fin/profile 可製造性，以及後續量測 pattern 是否足夠支撐判斷。",
    "research.li1": "GaN Trigate / narrow-fin cross-section 建模與參數掃描。",
    "research.li2": "Wfin、Al composition、tox、Lg 對 Vth-Ron-BV tradeoff 的影響。",
    "research.li3": "E-beam dose、PEC、development、hardmask transfer 的製程拆解。",
    "research.li4": "ICP-RIE pressure、gas chemistry、bias power 與 etch selectivity 的 window 設計。",
    "research.li5": "TLM、HBD/VBD、Id-Vg、Id-Vd 與 breakdown 測試結構的佈局規劃。",
    "research.caption": "GaN Trigate 的 Vth-Ron tradeoff 與物理限制整理。",
    "mask.eyebrow": "光罩設計",
    "mask.title": "光罩設計",
    "mask.body":
      "光罩設計是我把 TCAD 結果帶向實驗的關鍵環節。佈局裡不只要畫出元件，還要讓測試結構、pad、routing、alignment 與製程層次能夠被檢查、被製作、被量測。",
    "mask.captionArray": "Trigate 元件陣列與測試結構",
    "mask.sideTitle": "從元件到佈局",
    "mask.li1": "整合元件陣列、測試結構與 pad placement。",
    "mask.li2": "把 fin / gate / ohmic / pad 等 layer 關係轉成可檢查的佈局。",
    "mask.li3": "配合 TLM、Id-Vg、Id-Vd 與 breakdown 量測需求。",
    "mask.captionCell": "單一元件 cell、pad 與 routing",
    "notes.eyebrow": "研究整理",
    "notes.title": "研究整理",
    "notes.body":
      "這裡放的是我在研究過程中整理出的關鍵頁面：AI-guided TCAD、D-mode / E-mode 製程流程、E-beam lithography 的問題拆解，以及 etch SEM diagnosis 與 DOE 設計。",
    "notes.capProcess": "D-mode / E-mode GaN 製程流程",
    "notes.capEbeam1": "E-beam lithography：dose、density、resist 與 transfer 共同決定 CD",
    "notes.capEbeam2": "E-beam checklist：先分辨問題來源，再改變 recipe",
    "notes.capEtch1": "Etch / SEM signature：區分 exposure、development 與 transfer 問題",
    "notes.capEtch2": "Etch DOE：固定 CD / mask baseline 後再拆 pressure、gas、bias",
    "analog.eyebrow": "類比 IC",
    "analog.title": "類比積體電路專題：差動放大電路與遲滯比較器",
    "analog.body":
      "大學課程專題中，我參與差動放大電路、遲滯比較器與能隙參考相關電路設計。工作包含原理分析、尺寸設計、Cadence 前模擬 testbench、佈局協作、DRC/LVS、寄生參數萃取與後模擬驗證。",
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
    "experience.eyebrow": "專案與社團",
    "experience.title": "專案與社團經歷",
    "experience.body":
      "除了目前的 GaN Trigate 研究，我也做過 SiC VDMOS 高溫特性專題、區塊鏈工作室專案，以及學生創業社團的活動規劃。這些經歷讓我更習慣把技術、組織和展示放在同一個專案裡思考。",
    "experience.sicTitle": "大功率元件 SiC MOSFET 高溫特性研究",
    "experience.sicBody":
      "以 TCAD Sentaurus 進行 SiC VDMOSFET 元件模擬，調整結構參數並理解 VDMOS 製作流程；同時參與蝕刻、熱氧化、光刻、金屬化、退火等製程討論，以及 CV、IV、double pulse 等特性量測整理。",
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
    "projects.literature": "本機文獻整理工具，用來管理論文、主題、筆記和閱讀狀態；目前不放公開連結。",
    "projects.knowledge": "我從大學到研究所課程建立的個人知識圖譜，連接半導體、電子電路、製程、模擬與研究筆記。",
    "projects.openSite": "前往網站",
    "projects.openSite2": "前往網站",
    "life.eyebrow": "生活",
    "life.title": "生活片段",
    "life.body":
      "旅行、朋友、城市、山路、拼模型和臨時冒出的工具點子，都是我認識世界的方式。我喜歡把生活裡的觀察帶回研究，也喜歡用 AI 做一些讓自己和同伴更省力的小應用。",
    "life.tagTravel": "旅行",
    "life.tagModel": "拼模型",
    "life.tagPhoto": "攝影整理",
    "life.tagAi": "AI 工具",
    "life.tagResearch": "研究自動化",
    "contact.eyebrow": "聯絡",
    "contact.title": "歡迎交流",
    "contact.body": "如果你也在做 GaN、TCAD、EDA automation、類比 IC 或研究工具，歡迎聯絡我。",
    "footer.name": "陳秉佑 / Ping Yu-Chen / Bill Chen",
    "alt.profile": "陳秉佑個人照片",
    "alt.tcadSlide": "GaN Trigate AI-TCAD 研究投影片",
    "alt.maskArray": "GaN Trigate 光罩陣列設計截圖",
    "alt.maskCell": "單一元件光罩 cell 與 pad routing 截圖",
  },
  en: {
    "meta.title": "Ping Yu-Chen | Bill Chen",
    "meta.description":
      "Personal homepage of Ping Yu-Chen / Bill Chen: GaN Trigate devices, photomask design, process development, analog IC, EDA tools, AI research tools, and life notes.",
    brand: "Ping Yu-Chen · Bill Chen",
    "nav.research": "Research",
    "nav.mask": "Mask",
    "nav.analog": "Analog IC",
    "nav.experience": "Experience",
    "nav.projects": "Projects",
    "nav.life": "Life",
    "nav.contact": "Contact",
    "hero.eyebrow": "GaN Trigate · Process DOE · TCAD · EDA Tools",
    "hero.title": "I turn GaN device ideas into workflows that can be simulated, fabricated, and measured.",
    "hero.lead":
      "I am Ping Yu-Chen / Bill Chen. My work starts from GaN Trigate device design and extends into TCAD simulation, photomask and layout design, E-beam and etch process development, and measurement feedback. I also enjoy building tools that bring AI and automation into daily research.",
    "hero.ctaResearch": "Research",
    "hero.ctaProjects": "Tools & Projects",
    "focus.sim.title": "Simulation & Design",
    "focus.sim.body":
      "I use TCAD to build GaN Trigate / narrow-fin structures and track Vth, Ron, BV, Id-Vg, Id-Vd, and E-field.",
    "focus.mask.title": "Mask & Layout",
    "focus.mask.body":
      "I connect device parameters, test structures, probe pads, alignment, and AutoCAD / GDS / DXF workflows.",
    "focus.process.title": "Process & DOE",
    "focus.process.body":
      "I organize E-beam lithography, hardmask transfer, ICP-RIE etch profiles, and process windows.",
    "focus.measure.title": "Measurement Feedback",
    "focus.measure.body":
      "From CD/SEM to TLM, Id-Vg, Id-Vd, and breakdown, I bring measurement results back into design.",
    "research.eyebrow": "Research",
    "research.title": "Research",
    "research.body":
      "My central question is how a GaN Trigate device can move from a structural hypothesis to a fabricable, measurable, and physically interpretable result. I care not only about single-point performance, but also about the Vth-Ron-BV tradeoff, Epeak limits, fin/profile manufacturability, and whether the measurement patterns can support the conclusion.",
    "research.li1": "GaN Trigate / narrow-fin cross-section modeling and parameter sweeps.",
    "research.li2": "Effects of Wfin, Al composition, tox, and Lg on the Vth-Ron-BV tradeoff.",
    "research.li3": "Process breakdown of E-beam dose, PEC, development, and hardmask transfer.",
    "research.li4": "ICP-RIE pressure, gas chemistry, bias power, and etch-selectivity window design.",
    "research.li5": "Layout planning for TLM, HBD/VBD, Id-Vg, Id-Vd, and breakdown test structures.",
    "research.caption": "Vth-Ron tradeoff and physics constraints for GaN Trigate devices.",
    "mask.eyebrow": "Photomask Design",
    "mask.title": "Photomask Design",
    "mask.body":
      "Photomask design is where I move TCAD results toward experiments. A layout needs more than device geometry: test structures, pads, routing, alignment, and process layers must be checkable, fabricable, and measurable.",
    "mask.captionArray": "Trigate device array and test structures",
    "mask.sideTitle": "From Device To Layout",
    "mask.li1": "Integrating device arrays, test structures, and pad placement.",
    "mask.li2": "Turning fin / gate / ohmic / pad layer relationships into inspectable layouts.",
    "mask.li3": "Supporting TLM, Id-Vg, Id-Vd, and breakdown measurement needs.",
    "mask.captionCell": "Single device cell, pads, and routing",
    "notes.eyebrow": "Research Notes",
    "notes.title": "Research Notes",
    "notes.body":
      "These selected pages summarize my current research notes: AI-guided TCAD, D-mode / E-mode process flows, E-beam lithography diagnosis, etch SEM diagnosis, and DOE planning.",
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
    "experience.eyebrow": "Projects & Community",
    "experience.title": "Project And Community Experience",
    "experience.body":
      "Beyond my current GaN Trigate work, I have worked on SiC VDMOS high-temperature characteristics, a blockchain studio project, and student entrepreneurship events. These experiences taught me to think about technology, organization, and presentation as one project.",
    "experience.sicTitle": "High-Power SiC MOSFET High-Temperature Characterization",
    "experience.sicBody":
      "I used TCAD Sentaurus to simulate SiC VDMOSFET devices, tune structural parameters, and understand the VDMOS fabrication flow. I also participated in discussions around etching, thermal oxidation, lithography, metallization, annealing, and organized CV, IV, and double-pulse measurement work.",
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
    "projects.literature": "A local literature-management tool for papers, topics, notes, and reading status. No public link for now.",
    "projects.knowledge": "My personal knowledge graph from undergraduate to graduate coursework, connecting semiconductors, circuits, process, simulation, and research notes.",
    "projects.openSite": "Open site",
    "projects.openSite2": "Open site",
    "life.eyebrow": "Life",
    "life.title": "Life Notes",
    "life.body":
      "Travel, friends, cities, mountain roads, model kits, and sudden tool ideas are all part of how I understand the world. I like bringing observations from life back into research, and using AI to make small apps that help me and my friends work with less friction.",
    "life.tagTravel": "Travel",
    "life.tagModel": "Model kits",
    "life.tagPhoto": "Photo notes",
    "life.tagAi": "AI tools",
    "life.tagResearch": "Research automation",
    "contact.eyebrow": "Contact",
    "contact.title": "Let’s Talk",
    "contact.body":
      "If you are working on GaN, TCAD, EDA automation, analog IC, or research tools, I would be happy to connect.",
    "footer.name": "Ping Yu-Chen / Bill Chen",
    "alt.profile": "Portrait of Ping Yu-Chen",
    "alt.tcadSlide": "GaN Trigate AI-TCAD research slide",
    "alt.maskArray": "GaN Trigate photomask array design screenshot",
    "alt.maskCell": "Single device photomask cell with pad routing screenshot",
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
