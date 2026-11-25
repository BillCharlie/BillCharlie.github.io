// Copy for the IC & system-integration fork; script.js layers it over the shared dictionary.
window.pageTranslations = {
  zh: {
    "meta.title": "陳秉佑 | IC 設計與系統整合",
    "meta.description":
      "陳秉佑 / Ping Yu-Chen / Bill Chen 的個人首頁（IC 與系統整合版）：IC 設計、功率開關量測系統、GaN 元件物理與可靠性、TCAD，以及 IWN 2026 與 IEDMS 2026 第一作者論文。",
    "nav.circuits": "電路系統",
    "nav.physics": "元件物理",
    "nav.reliability": "可靠性",
    "hero.eyebrow": "IC Design · System Integration · GaN Device Physics · Reliability · TCAD",
    "hero.title": "從 GaN 元件物理，一路做到電路與系統。",
    "hero.bio1":
      "Hey，我是陳秉佑（Ping Yu-Chen / Bill Chen），中央大學電機所固態組碩士生，指導教授為綦振瀛教授；大學畢業於西安交通大學微電子科學與工程。IC 端，我用 Cadence 把一顆全客製化數位 IC 與一顆含能隙基準的運放 / 遲滯比較器從規格做到版圖，完成 PVT corner、DRC / LVS 與後模擬，並逐項對照 datasheet。系統端，我自建 800 V 雙脈衝測試平台與 24–300 °C 高溫量測環境來量測 1200 V SiC MOSFET，也在日月光集團環旭電子（USI）實習時學習 SMT 組裝與測試產線。",
    "hero.bio2":
      "和單純做電路的人相比，我更懂底下的功率元件：我用 Sentaurus TCAD 模擬 E-mode GaN FinFET 與多通道 AlGaN/GaN，也親手量測 p-GaN HFET 的閘極漏電、遲滯與 Vth 離散度。因此看 datasheet 上的數字時，我知道 Vth 裕量、Qg 與反向恢復電荷從哪裡來、會隨溫度與製程怎麼漂移，並能把它們換算成閘極驅動與系統可靠性需要預留的空間。",
    "hero.ctaCircuits": "電路系統",
    "hero.ctaPhysics": "元件物理",
    "interest.label": "能力主軸",
    "interest.icTag": "IC 設計",
    "interest.icTitle": "從規格到版圖，從 corner 到 datasheet",
    "interest.icBody":
      "全客製化 SN74LVC112A J-K 正反器，以及含能隙基準的運放 / 遲滯比較器複用電路：原理圖、尺寸設計、tt / ff / ss corner、DRC / LVS / 寄生萃取；數位 IC 後模擬 10 項指標全部符合 datasheet。",
    "interest.sysTag": "系統整合",
    "interest.sysTitle": "把單顆元件放進能運作的系統",
    "interest.sysBody":
      "整合信號發生器、示波器、直流電源與 400 µH 負載電感，搭出 800 V 雙脈衝平台，並用耐熱引線把元件從加熱爐引出，不拆封裝就完成 24–300 °C 靜態與動態量測；在 USI 實習時整理 SMT 產線站點流程、價值流與標準工時。",
    "interest.physTag": "元件物理",
    "interest.physTitle": "知道 Vth、Ron 與 Qg 從哪裡來",
    "interest.physBody":
      "以 Sentaurus TCAD 模擬 E-mode GaN FinFET 與多通道 AlGaN/GaN：physics-guided AI-TCAD 用 81 組取代 960 組掃描、模擬時間減少 92%；多通道 barrier 分配收斂成 Y > X 規則，而 Qg 的代價最後要由閘極驅動承擔。",
    "interest.relTag": "可靠性",
    "interest.relTitle": "從量測數據讀出產品風險",
    "interest.relBody":
      "比較四種 back-barrier 的 p-GaN HFET 閘極漏電、Ion/Ioff、Vth 離散度與遲滯；SiC MOSFET 到約 550 K 時 Vth 下降約 38%，300 °C 時 Qrr 約為常溫 1.6 倍。這些數字直接影響 dead time、誤導通裕量與開關損耗。",
    "keyword.label": "關鍵字 · 點擊直接跳到對應投影片",
    "keyword.platform": "高溫測試系統",
    "keyword.qg": "Qg 與閘極驅動預算",
    "keyword.pganRel": "p-GaN 閘極可靠性",
    "keyword.vthSpread": "Vth 均勻性",
    "keyword.smt": "SMT 組裝與測試",
    "circuits.eyebrow": "電路系統",
    "circuits.title": "電路設計與系統整合",
    "circuits.body":
      "大學 VLSI 專題中，我用 Cadence 完成一顆數位、一顆類比 IC 的全流程設計；碩士期間則把功率元件放進雙脈衝與高溫量測系統。這一頁也整理了我從元件數據中讀出、需要由電路端承擔的設計條件。",
    "circuits.qTitle": "電路需要元件給什麼，元件又要求電路承擔什麼？",
    "circuits.qBody":
      "做 IC 時，我習慣先看規格與最壞工藝角的裕量；做元件時，我看的是 Vth、Ron、Qg 與 Qrr 如何隨結構、溫度與製程漂移。把兩邊放在一起看，才能決定驅動電壓、dead time 與 guard-band 該留多少。",
    "circuits.sysBlock": "功率開關量測系統：雙脈衝與高溫平台",
    "circuits.implHeading": "元件數據交給電路端的四個設計條件",
    "circuits.impl1Title": "Qg 決定閘極驅動預算",
    "circuits.impl1Body":
      "多通道結構中 Qg 只隨 barrier 總厚度線性上升，無法靠磊晶消除。設計規則是 Y 盡量大、X 盡量小，再依驅動損耗預算決定總厚度。",
    "circuits.impl2Title": "離散度比中位數更決定關斷裕量",
    "circuits.impl2Body":
      "N2028 的 Vth 中位數最高（2.72 V），但 σ 達 0.265 V；N1830 為 1.44 V、σ 僅 0.033 V。驅動端能依靠的是最差的那一顆，而不是平均值。",
    "circuits.impl3Title": "遲滯代表 Vth 會跟著閘極歷史移動",
    "circuits.impl3Body":
      "四片樣品都呈負向遲滯，N1830 最大達 −0.93 V。即使它的 Ron 與均勻性最好，關斷偏壓與誤導通裕量仍要把這段漂移算進去。",
    "circuits.impl4Title": "高溫會同時改變 Vth 與 Qrr",
    "circuits.impl4Body":
      "到約 550 K 時 Vth 下降約 38%，300 °C 時體二極體 Qrr 約為常溫 1.6 倍：高溫下誤導通裕量變小、反向恢復損耗變大，dead time 與驅動設計需要重新評估。",
    "physics.eyebrow": "元件物理",
    "physics.title": "GaN 元件物理與 TCAD",
    "physics.body":
      "碩士研究的主軸是 24/48 V E-mode GaN FinFET：用 TCAD 把 Vth–Ron 取捨拆成可量化的物理機制，再用量測驗證。這些機制正是電路端參數的來源。",
    "physics.sicBlock": "SiC VDMOS TCAD：工藝、變溫與崩潰",
    "physics.fabBlock": "無塵室製程與 PFA（背景）",
    "rel.eyebrow": "可靠性",
    "rel.title": "可靠性：用產品的角度讀元件數據",
    "rel.body":
      "實際產品在意的不只是一顆元件的最佳值，而是漏電、離散度、遲滯與溫度漂移會不會吃掉裕量。這一頁整理 p-GaN HFET 的可靠性判讀，以及 SiC MOSFET 的高溫靜態與動態量測。",
    "rel.pganBlock": "p-GaN Gate HFET：四種 back-barrier 的可靠性判讀",
    "rel.sicBlock": "SiC MOSFET：24–300 °C 靜態與動態特性",
    "rel.tabStatic": "靜態特性",
    "rel.tabDynamic": "動態特性",
    "pub.body":
      "兩篇都是碩士研究整理成的第一作者會議論文，也都把元件物理整理成電路端可以直接使用的規則：IWN 2026 用 AI 輔助 TCAD 找出 E-mode GaN FinFET 的 Vth–Ron 收斂窗口；IEDMS 2026 則說明多通道結構中 Qg 的代價如何落到閘極驅動上。",
    "projects.body":
      "我習慣把重複的工作做成系統：Runcard Builder 把製程步驟整理成結構化 run card，Real-time GaN Industry Intelligence 追蹤 GaN 產業與產品動態，Literature Manager 系統化整理 GaN 近 5 年頂刊頂會文獻。大學時我也負責仕集區塊鏈眾籌系統的底層架構，並申請了演算法專利。",
    "experience.body":
      "在 USI 的 SMT 產線實習讓我看到元件之外的那一段：板級組裝、檢測站點與產線節拍如何決定產品能不能量產。創辦區塊鏈工作室與帶領創業社團，則讓我習慣從系統與團隊的角度安排工作。",
    "contact.body": "如果你在做電源 IC / PMIC、GaN 系統整合、功率元件可靠性或 TCAD，歡迎聯絡我。",
    "contact.mainSite": "製程與 TCAD 版本",
  },
  en: {
    "meta.title": "Ping Yu-Chen | IC & System Integration",
    "meta.description":
      "Personal homepage of Ping Yu-Chen / Bill Chen (IC & system-integration edition): IC design, power-switching test systems, GaN device physics and reliability, TCAD, and first-author papers at IWN 2026 and IEDMS 2026.",
    "nav.circuits": "Circuits & Systems",
    "nav.physics": "Device Physics",
    "nav.reliability": "Reliability",
    "hero.eyebrow": "IC Design · System Integration · GaN Device Physics · Reliability · TCAD",
    "hero.title": "From GaN Device Physics to Circuits and Systems.",
    "hero.bio1":
      "Hey, I'm Ping Yu-Chen (Bill Chen), an M.S. student in Solid-State Electronics at the Department of Electrical Engineering, National Central University, advised by Prof. Jen-Inn Chyi, with a B.S. in Microelectronics Science and Engineering from Xi'an Jiaotong University. On the IC side, I took a full-custom digital IC and an op-amp / hysteresis comparator with a bandgap reference from specification to layout in Cadence, through PVT corners, DRC / LVS, and post-layout simulation checked item by item against the datasheet. On the system side, I built an 800 V double-pulse bench and a 24–300 °C test setup to characterize a 1200 V SiC MOSFET, and learned SMT assembly and test lines during my internship at USI (ASE Group).",
    "hero.bio2":
      "What sets me apart from a pure circuit background is that I know the power device underneath: I simulate E-mode GaN FinFETs and multi-channel AlGaN/GaN in Sentaurus TCAD, and I have measured gate leakage, hysteresis, and Vth spread on p-GaN HFETs myself. So when I read a number on a datasheet, I know where the Vth margin, Qg, and reverse-recovery charge come from and how they drift with temperature and process, and I can turn them into the room the gate drive and the system have to leave for reliability.",
    "hero.ctaCircuits": "Circuits & Systems",
    "hero.ctaPhysics": "Device Physics",
    "interest.label": "Core strengths",
    "interest.icTag": "IC Design",
    "interest.icTitle": "Spec to layout, corners to datasheet",
    "interest.icBody":
      "A full-custom SN74LVC112A J-K flip-flop and a reconfigurable op-amp / hysteresis comparator with a bandgap reference: schematic, sizing, tt / ff / ss corners, and DRC / LVS / parasitic extraction, with the digital design meeting all 10 datasheet metrics after layout.",
    "interest.sysTag": "System Integration",
    "interest.sysTitle": "Putting a single device into a working system",
    "interest.sysBody":
      "I combined a signal generator, oscilloscope, DC supply, and 400 µH load inductor into an 800 V double-pulse bench, and brought the device out of a furnace on heat-resistant leads to measure it statically and dynamically from 24 to 300 °C without opening the package; at USI I mapped SMT line stations, value streams, and standard work times.",
    "interest.physTag": "Device Physics",
    "interest.physTitle": "Knowing where Vth, Ron, and Qg come from",
    "interest.physBody":
      "Sentaurus TCAD of E-mode GaN FinFETs and multi-channel AlGaN/GaN: physics-guided AI-TCAD replaced a 960-case sweep with 81 cases and 92% less simulation time, and multi-channel barrier allocation reduces to a Y > X rule whose Qg cost ultimately lands on the gate driver.",
    "interest.relTag": "Reliability",
    "interest.relTitle": "Reading product risk from measured data",
    "interest.relBody":
      "I screened p-GaN HFETs with four back-barrier designs for gate leakage, Ion/Ioff, Vth spread, and hysteresis; in a SiC MOSFET, Vth drops about 38% by roughly 550 K and Qrr reaches about 1.6× its room-temperature value at 300 °C. These numbers feed straight into dead time, false-turn-on margin, and switching loss.",
    "keyword.label": "Keywords · click to jump to the matching slide",
    "keyword.platform": "High-temp Test System",
    "keyword.qg": "Qg & Gate-drive Budget",
    "keyword.pganRel": "p-GaN Gate Reliability",
    "keyword.vthSpread": "Vth Uniformity",
    "keyword.smt": "SMT Assembly & Test",
    "circuits.eyebrow": "Circuits & Systems",
    "circuits.title": "Circuit Design and System Integration",
    "circuits.body":
      "In my undergraduate VLSI projects I took one digital and one analog IC through the full Cadence flow; in graduate work I put power devices into double-pulse and high-temperature test systems. This page also collects the design conditions my device data hands to the circuit side.",
    "circuits.qTitle": "What does the circuit need from the device, and what does the device ask of the circuit?",
    "circuits.qBody":
      "On the IC side I start from the spec and the margin at the worst corner; on the device side I look at how Vth, Ron, Qg, and Qrr drift with structure, temperature, and process. Only with both in view can I decide how much drive voltage, dead time, and guard-band to leave.",
    "circuits.sysBlock": "Power-switching test system: double-pulse and high-temperature benches",
    "circuits.implHeading": "Four design conditions my device data hands to the circuit",
    "circuits.impl1Title": "Qg sets the gate-drive budget",
    "circuits.impl1Body":
      "In multi-channel stacks Qg rises linearly with the total barrier thickness and cannot be engineered away by epitaxy. The rule: maximize Y, minimize X, then size the total against the drive-loss budget.",
    "circuits.impl2Title": "Spread, not the median, sets the turn-off margin",
    "circuits.impl2Body":
      "N2028 has the highest median Vth (2.72 V) but a σ of 0.265 V; N1830 sits at 1.44 V with σ of only 0.033 V. A driver has to rely on the worst device, not the average one.",
    "circuits.impl3Title": "Hysteresis means Vth moves with gate history",
    "circuits.impl3Body":
      "All four samples show negative hysteresis, up to −0.93 V for N1830. Even though N1830 has the best Ron and uniformity, the off-state bias and false-turn-on margin still have to cover that shift.",
    "circuits.impl4Title": "Temperature moves Vth and Qrr together",
    "circuits.impl4Body":
      "Vth falls about 38% by roughly 550 K, and body-diode Qrr reaches about 1.6× its room-temperature value at 300 °C: hot operation narrows the false-turn-on margin and raises reverse-recovery loss, so dead time and gate drive need re-evaluating.",
    "physics.eyebrow": "Device Physics",
    "physics.title": "GaN Device Physics and TCAD",
    "physics.body":
      "My M.S. research centers on 24/48 V E-mode GaN FinFETs: I use TCAD to break the Vth–Ron tradeoff into quantifiable physical mechanisms and check them against measurement. These mechanisms are where the circuit-side parameters come from.",
    "physics.sicBlock": "SiC VDMOS TCAD: process, temperature, and breakdown",
    "physics.fabBlock": "Cleanroom fabrication & PFA (background)",
    "rel.eyebrow": "Reliability",
    "rel.title": "Reliability: Reading Device Data the Way a Product Needs It",
    "rel.body":
      "A real product cares less about one device's best value than about whether leakage, spread, hysteresis, and temperature drift eat into the margin. This page covers reliability screening of p-GaN HFETs and high-temperature static and dynamic measurements of a SiC MOSFET.",
    "rel.pganBlock": "p-GaN gate HFET: reliability screening across four back-barriers",
    "rel.sicBlock": "SiC MOSFET: static and dynamic behavior from 24 to 300 °C",
    "rel.tabStatic": "Static",
    "rel.tabDynamic": "Dynamic",
    "pub.body":
      "Both are first-author conference papers from my M.S. research, and both turn device physics into rules the circuit side can use: the IWN 2026 paper uses AI-assisted TCAD to locate the converged Vth–Ron window of E-mode GaN FinFETs, and the IEDMS 2026 paper shows how the Qg cost of multi-channel stacks lands on the gate driver.",
    "projects.body":
      "I tend to turn repeated work into systems: Runcard Builder organizes process steps into structured run cards, Real-time GaN Industry Intelligence tracks GaN industry and product news, and Literature Manager organizes five years of top GaN journal and conference papers. As an undergraduate I was also responsible for the underlying architecture of the Shiji blockchain crowdfunding system and filed algorithm patents.",
    "experience.body":
      "The SMT line internship at USI showed me what happens beyond the device: how board-level assembly, inspection stations, and line takt decide whether a product can be mass-produced. Founding a blockchain studio and leading an entrepreneurship club taught me to plan work at the system and team level.",
    "contact.body": "If you work on power ICs / PMICs, GaN system integration, power-device reliability, or TCAD, I would be glad to connect.",
    "contact.mainSite": "Process & TCAD version",
  },
};
