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
    "deck.ganLabel": "GaN FinFET 研究投影片",
    "deck.icLabel": "IC 設計專題投影片",
    "deck.prev": "上一頁",
    "deck.next": "下一頁",
    "deck.tabEpi": "磊晶設計",
    "deck.tabAi": "AI-TCAD",
    "deck.tabProcess": "製程 PFA",
    "deck.tabMeasure": "量測 EFA",
    "deck.epi1Title": "多通道磊晶：同樣的 barrier，放在哪一層決定 Vth 還是 Ron",
    "deck.epi1Body":
      "多通道結構在每個 AlGaN/GaN 介面形成 2DEG，並聯後降低 Ron，但深層通道閘控較弱、Vth 容易負移。我固定上層 barrier 為 11 nm，中層 Y 與底層 X 從 7 到 15 nm、每 2 nm 一步，共 25 組設計；能帶確認三個介面都低於費米能階，三個 2DEG 都能成立。",
    "deck.epi1Point":
      "機制：每增加 1 nm AlGaN 會同時增加極化電荷、也讓通道變深。加在底層 X 時深度代價主導，主要影響 Vth；加在中層 Y 時電荷增益主導，主要改善 Ron 與電流。",
    "deck.epi2Title": "從模擬到 design rule：Y > X，Qg 代價無法靠磊晶消除",
    "deck.epi2Body":
      "底層 X 每增加 1 nm，Vth 約負移 15.8 mV；中層 Y 增加時 Ron,sp 下降、Id,max 上升；Qg 只隨總厚度線性上升。同樣 33 nm 總厚度下，把 8 nm 從 X 移到 Y，Vth 正移約 205 mV，Ron,sp 與 Id,max 同時改善。",
    "deck.epi2Point":
      "交付給材料端的規則：Y 盡量大、X 盡量小，再依 gate-drive 預算決定總厚度；Qg 的驅動代價則需要由電路端承擔。",
    "deck.ai1Title": "Physics-guided AI-TCAD：用物理規則規劃每一輪模擬",
    "deck.ai1Body":
      "元件端的三個參數是 Wfin、tox 與 Al 組分。全因子掃描需要 960 組、約 2.9 萬小時，實際上不可行。我用 Python 建立 physics-guided 專家系統：以 Vth 安全分與 Ron 導通分評分、依離散程度調整權重、以 Vth ≥ 0.2 V 且 Ron 最低的點作為工程錨點，再把建議點對齊可製造的 Al / Wfin / tox 步長。",
    "deck.ai1Point": "每輪只跑 27 組，每個點都能追溯是哪一條規則選出來的，模擬因此可以被稽核與重現。",
    "deck.ai2Title": "81 組收斂、模擬時間 −92%，並找出主導因子的轉移",
    "deck.ai2Body":
      "三輪共 81 組，比全因子少 91.6%；依模擬 log，總時間由 29,171 小時降到 2,342 小時。安全 E-mode 比例從第一輪的 11% 提升到第三輪的 67%，收斂到 Wfin 25 nm、Al 20.2–22.4%、tox 10–14 nm，Ron 0.83–1.01 Ω·mm。",
    "deck.ai2Point":
      "一開始是 Al 極化主導全域 tradeoff；Al 收斂後，低 Ron 分支全部集中在 Wfin 25 nm，主導因子轉為 Trigate 靜電控制。",
    "deck.ebl1Title": "EBL PFA：Top-view SEM 拆解 dose 與電流的影響",
    "deck.ebl1Body":
      "用 EBL dose matrix 找窗口：90–94 欠曝，106–113 是 Fin 可用窗口、其中 106–110 最穩定，114 以上開始橋連與線塌。在 dose 112 下，Fin 實測寬度比設計值多約 20.5 nm，而且與 Wfin、Wtrench 沒有顯著斜率。",
    "deck.ebl1Point": "這是近似常數的偏差，最有效的處理不是逐一補償每種圖形，而是在 GDS 端統一 bias 約 −20 nm。",
    "deck.etch1Title": "Etch PFA：FIB 截面 × 蝕刻參數，從形貌反推 root cause",
    "deck.etch1Body":
      "使用 300 nm SiO2 hardmask 時，截面底部出現明顯 footing，偏差約 +61 nm；降到 50 nm 後轉印偏差只剩 −4～+6 nm，接近 1:1，代表主要偏差來自微影而非 GaN 蝕刻。壓力與 RF bias 的截面對照則用來判斷 bowing、teeth、undercut 等形貌的成因。",
    "deck.etch1Point":
      "判讀原則：顯影後就變形先修 EBL；蝕刻後才變形查 hardmask 與 etch；俯視正常但截面異常，優先檢查 pressure 與 bias，每次只改一個旋鈕。",
    "deck.cv1Title": "EFA：C-V 量測驗證磊晶，先分清異常來自設備還是樣品",
    "deck.cv1Body":
      "多通道 SBD 中每個 2DEG 像一個電容加橫向電阻支路，深層通道需要較低頻率才跟得上。N2097 在 1 kHz 成功分出三個通道，萃取 ns 分別為 24.05、23.49 與 3.83 × 10¹¹ cm⁻²。",
    "deck.cv1Point":
      "N1546 / N1557 在 1 kHz 仍是單一包絡，但 B1500A CMU 的頻率下限就是 1 kHz，因此先判定為量測解析度不足；下一步用厚度 split 樣品驗證，而不是直接要求重長磊晶。",
    "deck.tabPgan": "p-GaN 元件",
    "deck.pg1Title": "p-GaN Gate HFET：唯一變量是 2DEG 下方的 back-barrier",
    "deck.pg1Body":
      "四片樣品共用 p-GaN gate、AlN etch stop 與 Al0.2Ga0.8N barrier，只改變 GaN channel 下方的 back-barrier：N1831 無 back-barrier 作對照，N1830 為 12 nm BGaN，N2027 為 100 nm 漸變 AlGaN，N2028 為 100 nm 突變 AlGaN。以 B1500A 量測 ID-VG / ID-VD，Python 流程用恆流法（1 mA/mm）萃取 Vth，並取多次量測的中位數。",
    "deck.pg1Point":
      "Vth 中位數：N2028 最高 2.72 V，但均勻性最差（σ 0.265 V）；N1830 為 1.44 V、σ 僅 0.033 V，BGaN 對溝道的調控最穩定；N2027 為 1.06 V，已接近 E-mode 的 1 V 邊界。",
    "deck.pg2Title": "Ron 與驅動電流：BGaN 最平衡，Graded AlGaN 電流最強",
    "deck.pg2Body":
      "在 VG = 6 V 的低場窗口萃取 Ron：N1830 最低 12.0 Ω·mm；N2027 電流最強 252 mA/mm（比 Ref 高約 20%），Ron σ 僅 0.47 Ω·mm；N2028 的 Ron 高達 85.6 Ω·mm，電流只有 19.4 mA/mm。",
    "deck.pg2Point":
      "鈍化前 TLM 把 Ron 拆成接觸與通道兩部分：N2028 的方塊電阻異常、TLM 擬合不符物理，確認問題來自突變界面破壞 2DEG 的磊晶設計，而不是表面或製程。",
    "deck.pg3Title": "可靠性判讀：閘極漏電、開關比與遲滯",
    "deck.pg3Body":
      "以 |IG|/|ID| 的 10% / 100% 門檻檢查轉移曲線品質：漏電只集中在深關斷區，正常偏置下 Ig/Id < 0.3%。N1830、N1831、N2027 的 Ion/Ioff 都達 10⁸；N2028 的比值雖超過 10⁶，但 Ion 只有 21.3 mA/mm，屬於「關得住、開不強」。所有樣品都是負向遲滯，N1830 最大（−0.93 V）。",
    "deck.pg3Point":
      "路線建議：N1830（BGaN）最平衡、最適合功率開關，但要追蹤遲滯；N2027 驅動最強，但 Vth 接近 E-mode 下限；N2028 不建議沿用於功率元件。",
    "sic.title": "大學畢業論文：極端環境下 SiC 功率器件的高溫特性研究",
    "sic.body":
      "以 Sentaurus 從工藝與結構仿真出發，分析 300–1000 K 下 VDMOS 的 Vth、Ron、擊穿電壓與反向恢復；再自建高溫測試平台，量測商用 1200 V SiC MOSFET 在 24–300 °C 的靜態與動態特性，用量測回頭驗證仿真趨勢。",
    "deck.sicLabel": "SiC 功率元件研究投影片",
    "deck.tabSicProcess": "工藝結構仿真",
    "deck.tabSicSim": "變溫特性仿真",
    "deck.tabSicPlatform": "高溫測試平台",
    "deck.tabSicMeas": "高溫量測",
    "deck.sic1Title": "VDMOS 工藝仿真 → 結構模型：三次光刻與網格優化",
    "deck.sic1Body":
      "以 Sentaurus 走過 VDMOS 的製造流程：外延、P 阱與柵源極需要三次光刻與反覆的離子注入，關鍵工藝節點的仿真輸出用來檢驗整個流程；再把工藝結果帶入結構仿真，以泊松、連續性與輸運方程建模。",
    "deck.sic1Point":
      "結構仿真時把柵極區等勢化、忽略 Al 淀積區：這兩區不影響基本特性，卻會大幅增加網格密度與算力，簡化後讓後續 300–1000 K 的特性仿真更快、更容易收斂。",
    "deck.sic2Title": "變溫仿真：Vth 隨費米勢下降，Ron 由溝道電阻主導",
    "deck.sic2Body":
      "柵氧約 50 nm、摻雜可調範圍有限，因此 Vth 隨溫度的變化主要由費米勢決定：溫度升高、費米勢下降，Vth 隨之降低。導通電阻拆分後，溝道電阻占 41.0%、積累區 29.5%、漂移區 15.2%、JFET 區 8.5%。",
    "deck.sic2Point": "溫度升高使載流子遷移率下降、溝道電阻上升，完全導通時總 Ron 呈正溫度係數，與導通電阻的熱依賴特性相符。",
    "deck.sic3Title": "崩潰電壓仿真：雪崩擊穿具有正溫度係數",
    "deck.sic3Body":
      "在 300、500、800、1000 K 下仿真擊穿特性與空間電荷分布：溫度上升，擊穿電壓跟著上升。依雪崩擊穿公式 VBR ≈ ε·Ec(T)² / 2qN，搭配空間電荷分布觀察電荷累積的變化。",
    "deck.sic3Point": "晶格振動增強使載流子與晶格碰撞損失的能量增加、電場累積能量變慢，因此需要更高的電壓才會發生雪崩擊穿。",
    "deck.sic4Title": "自建高溫測試平台：加熱爐 + 靜態與雙脈衝電學平台",
    "deck.sic4Body":
      "用加熱爐提供 24–300 °C 的環境，以玻璃纖維耐熱線與夾具把元件引腳引出爐外，分別接到靜態特性量測平台，以及由信號發生器、示波器、直流電源與 400 µH 負載電感組成的雙脈衝動態測試平台（800 V）。",
    "deck.sic4Point": "在不破壞商用 1200 V SiC MOSFET 封裝的前提下，同一顆元件就能完成高溫靜態與動態特性量測。",
    "deck.sic5Title": "高溫靜態量測：Vth 下降約 38%，擊穿前接近 1200 V",
    "deck.sic5Body":
      "從室溫到約 550 K，Vth 下降約 38%，受封裝方式影響，量測上仍呈近似線性的趨勢。溫度越高，飽和區受溝道長度調製影響而上彎；低柵壓下溝道未完全開啟，Ron 由漂移區主導、隨溫度下降。550 K 下擊穿前電壓接近 1200 V。",
    "deck.sic5Point":
      "擊穿前曲線的抖動來自高溫下載流子熱激發造成的漏電流隨機漲落、封裝局部溫度不均，以及量測極低電流時的雜訊，而不是元件失效。",
    "deck.sic6Title": "高溫動態量測：300 °C 時反向恢復電荷約為常溫 1.6 倍",
    "deck.sic6Body":
      "在 24–300 °C 七個溫度點做雙脈衝測試，由二次開通時的反向恢復電流積分得到 Qrr。150 °C 的常規工作溫度內，Qrr 近似線性上升；進入極端高溫後快速上升，到 300 °C 時約為常溫的 1.6 倍。",
    "deck.sic6Point": "體二極體的反向恢復與寄生電容、開關變化率有關；高溫應用需要重新評估開關損耗與驅動設計。",
    "deck.jkSpecTitle": "數位 IC 指標分析：前後模擬 vs datasheet",
    "deck.jkSpecBody":
      "以最壞工藝角（VOH / VOL、VIH / VIL、tpd 取 ss，II / ICC 取 ff）逐項對照 SN74LVC112A datasheet（VCC 3.3 V）：10 項指標全部符合，後模擬 tpd(CLK→Q) 3.48 ns（規格 ≤ 5.9 ns）、VOL 0.481 V（規格 ≤ 0.55 V）。唯一壓線的是 VOH：後模擬剛好 2.2 V，等於規格下限。",
    "deck.jkSpecPoint":
      "前後模擬的差異可以追溯到版圖寄生：連線電容電阻偏大、通孔偏少，使 VOH / VOL 與 tpd 退化最多；改進方向是電源線改用頂層金屬並增加通孔，把 VOH 拉回裕量。",
    "deck.tabDigital": "數位 IC · J-K 正反器",
    "deck.tabAnalog": "類比 IC · 運放 / 比較器",
    "deck.jkTitle": "SN74LVC112A 雙負緣觸發 J-K 正反器",
    "deck.jkBody":
      "依 datasheet 規格設計帶預置與清除的雙負緣觸發 J-K 正反器。我負責電路原理圖、大部分電晶體尺寸設計、部分模擬測試與參數量測，以及整體版圖設計（工作量約 65%）。版圖按封裝排成兩排 16 個 PAD，ESD 保護與 IO buffer 緊鄰 PAD 放置。",
    "deck.jkPoint":
      "前後模擬都跑 tt / ff / ss 三種工藝角：後模擬 tpd(CLK→Q) 為 3.09 / 2.71 / 3.48 ns，並以最差工藝角驗證 VOH / VOL、VIH / VIL 與漏電流。",
    "deck.ana1Title": "類比 IC：運放 / 遲滯比較器複用電路",
    "deck.ana1Body":
      "兩人一組的類比 IC 專題，我負責可在運放與遲滯比較器之間切換的複用電路：差動輸入 + 共源二級 + Miller 補償，以 Vcontrol 選通運放或遲滯比較器，另含能隙基準。工作包含電路分析、前模擬，以及 DRC、LVS 與 post-layout 驗證。",
    "deck.ana1Point": "版圖上輸入對管採交叉耦合共質心、尾管叉指並聯加 dummy，最後完成 DRC / LVS clean、寄生參數萃取與後模擬。",
    "deck.ana2Title": "用 corner 與 layout matching 判斷 spec margin",
    "deck.ana2Body":
      "tt / ff / ss 結果可分出三種失效：UGBW 與 PM 只在 ss 同時下降，先懷疑 gm 與補償網路對 slow device 過度敏感；ss 下靜態電流升到 25.5 µA 但頻寬反而下降，不能單純加電流，要回查能隙基準與 bias mirror ratio；輸入共模下限在三個 corner 都超標，屬於結構性 headroom 不足，應先修設計。",
    "deck.ana2Point":
      "判讀原則：全 corner 都失效先修設計；單一 corner 失效再拆 process sensitivity，最後用 silicon data 做 model-to-silicon correlation，再決定 test spec 與 guard-band。",
    "research.sicHeading": "SiC MOSFET：工藝仿真、變溫特性與高溫量測",
    "analog.eyebrow": "IC 設計",
    "analog.title": "IC 設計專題：J-K 正反器全客製化與類比放大／比較器",
    "analog.body":
      "大學 VLSI 專題中，我完成了兩個積體電路的全流程設計，一個數位、一個類比，皆以 Cadence 從規格走到版圖與驗證。",
    "experience.eyebrow": "經歷",
    "experience.title": "實習、專案與社團",
    "experience.body":
      "除了目前的元件研究，我也實戰過工業工程生產管理基本方法、認識SMT封測技術、區塊鏈工作室創建，以及學生創業社團的活動規劃。這些經歷讓我更習慣把技術放在實用產業可行性的角度思考。",
    "awards.title": "競賽與獎項",
    "awards.item1": "第八屆中國國際「互聯網+」大學生創新創業大賽｜銀獎",
    "awards.item2": "國家級大學生創新訓練項目＋創業訓練計畫｜優秀結題",
    "awards.item3": "全國大學生數學建模競賽｜陝西省三等獎",
    "awards.item4": "香港中文大學（深圳）國際大學生 FinTech 創新大賽｜積極參與獎",
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
    "deck.ganLabel": "GaN FinFET research slides",
    "deck.icLabel": "IC design project slides",
    "deck.prev": "Previous slide",
    "deck.next": "Next slide",
    "deck.tabEpi": "Epitaxy",
    "deck.tabAi": "AI-TCAD",
    "deck.tabProcess": "Process PFA",
    "deck.tabMeasure": "Measurement EFA",
    "deck.epi1Title": "Multi-channel epitaxy: the same barrier decides Vth or Ron depending on where it goes",
    "deck.epi1Body":
      "A multi-channel stack forms a 2DEG at every AlGaN/GaN interface and lowers Ron in parallel, but deeper channels are gated less effectively and Vth tends to shift negative. With the top barrier fixed at 11 nm, I swept the middle (Y) and bottom (X) barriers from 7 to 15 nm in 2 nm steps, 25 designs in total; band diagrams confirm all three interfaces sit below the Fermi level, so all three 2DEGs form.",
    "deck.epi1Point":
      "Mechanism: each extra nm of AlGaN adds polarization charge but also pushes the channel deeper. In the bottom barrier X the depth penalty dominates and mainly moves Vth; in the middle barrier Y the charge gain dominates and mainly improves Ron and current.",
    "deck.epi2Title": "From simulation to a design rule: Y > X, and the Qg cost cannot be removed by epitaxy",
    "deck.epi2Body":
      "Each extra nm of bottom barrier X shifts Vth by about −15.8 mV; a thicker middle barrier Y lowers Ron,sp and raises Id,max; Qg rises linearly with the total thickness only. At the same 33 nm total, moving 8 nm from X to Y shifts Vth positive by about 205 mV while improving Ron,sp and Id,max.",
    "deck.epi2Point":
      "The rule handed to the epitaxy side: maximize Y, minimize X, then size the total within the gate-drive budget. The Qg drive cost has to be absorbed by the circuit side.",
    "deck.ai1Title": "Physics-guided AI-TCAD: physics rules plan every simulation round",
    "deck.ai1Body":
      "The three device parameters are Wfin, tox, and Al composition. A full factorial sweep needs 960 cases and roughly 29,000 hours, which is impractical. I built a physics-guided expert system in Python: it scores Vth safety and Ron conduction, adapts the weights to their spread, anchors on the lowest-Ron point with Vth ≥ 0.2 V, and snaps every proposal onto manufacturable Al / Wfin / tox steps.",
    "deck.ai1Point": "Each round runs only 27 cases, and every point can be traced to the rule that chose it, so the simulation is auditable and reproducible.",
    "deck.ai2Title": "Converged in 81 cases with 92% less simulation time, revealing a shift in the dominant factor",
    "deck.ai2Body":
      "Three rounds used 81 cases, 91.6% fewer than a full sweep; per the simulation logs, total time fell from 29,171 h to 2,342 h. The safe E-mode ratio rose from 11% in round 1 to 67% in round 3, converging on Wfin 25 nm, Al 20.2–22.4%, tox 10–14 nm, and Ron 0.83–1.01 Ω·mm.",
    "deck.ai2Point":
      "At first Al polarization governs the global tradeoff; once Al converges, the whole low-Ron branch sits at Wfin 25 nm and trigate electrostatics take over as the dominant factor.",
    "deck.ebl1Title": "EBL PFA: top-view SEM separates the effects of dose and beam current",
    "deck.ebl1Body":
      "An EBL dose matrix located the window: 90–94 is underexposed, 106–113 is the usable fin window with 106–110 most stable, and above 114 lines start to bridge and collapse. At dose 112, measured fin width is about 20.5 nm wider than drawn, with no significant slope against Wfin or Wtrench.",
    "deck.ebl1Point": "Because the offset is nearly constant, the most effective fix is not per-pattern compensation but a uniform bias of about −20 nm in the GDS.",
    "deck.etch1Title": "Etch PFA: FIB cross-sections × etch parameters, tracing morphology back to root cause",
    "deck.etch1Body":
      "With a 300 nm SiO2 hardmask the cross-section shows clear footing and a bias of about +61 nm; at 50 nm the transfer bias drops to −4 to +6 nm, close to 1:1, so the main offset comes from lithography rather than GaN etch. Pressure and RF-bias cross-section comparisons explain bowing, teeth, and undercut.",
    "deck.etch1Point":
      "Rule of thumb: deformed right after development, fix EBL; deformed only after etch, check hardmask and etch; normal from the top but wrong in cross-section, check pressure and bias first, and change one knob at a time.",
    "deck.cv1Title": "EFA: C-V measurement verifies the epitaxy and separates equipment limits from sample issues",
    "deck.cv1Body":
      "In a multi-channel SBD each 2DEG behaves like a capacitor with a lateral resistive branch, so deeper channels need lower frequencies to respond. Sample N2097 resolved three channels at 1 kHz, with extracted ns of 24.05, 23.49, and 3.83 × 10¹¹ cm⁻².",
    "deck.cv1Point":
      "N1546 / N1557 still show a single envelope at 1 kHz, but 1 kHz is the lower frequency limit of the B1500A CMU, so I first attributed it to measurement resolution; the next step is to verify with thickness-split samples rather than ask for regrowth.",
    "deck.tabPgan": "p-GaN HFET",
    "deck.pg1Title": "p-GaN gate HFET: the only variable is the back-barrier under the 2DEG",
    "deck.pg1Body":
      "All four samples share the p-GaN gate, AlN etch stop, and Al0.2Ga0.8N barrier; only the back-barrier under the GaN channel changes: N1831 has none and serves as the reference, N1830 uses 12 nm BGaN, N2027 a 100 nm graded AlGaN, and N2028 a 100 nm abrupt AlGaN. ID-VG / ID-VD were measured on a B1500A, and a Python flow extracts Vth by the constant-current method (1 mA/mm) and takes the median of repeated sweeps.",
    "deck.pg1Point":
      "Median Vth: N2028 is highest at 2.72 V but least uniform (σ 0.265 V); N1830 sits at 1.44 V with σ of only 0.033 V, so BGaN controls the channel most consistently; N2027 at 1.06 V is close to the 1 V E-mode boundary.",
    "deck.pg2Title": "Ron and drive current: BGaN is the most balanced, graded AlGaN drives the most current",
    "deck.pg2Body":
      "Ron is extracted from the low-field window at VG = 6 V: N1830 is lowest at 12.0 Ω·mm; N2027 drives the most current at 252 mA/mm (about 20% above the reference) with a Ron σ of only 0.47 Ω·mm; N2028 reaches 85.6 Ω·mm with just 19.4 mA/mm.",
    "deck.pg2Point":
      "Pre-passivation TLM splits Ron into contact and channel parts: N2028's sheet resistance is abnormal and its TLM fit is unphysical, confirming the problem is an epitaxy design where the abrupt interface damages the 2DEG, not the surface or the process.",
    "deck.pg3Title": "Reliability check: gate leakage, on/off ratio, and hysteresis",
    "deck.pg3Body":
      "Transfer-curve quality is screened with 10% / 100% |IG|/|ID| thresholds: leakage is confined to deep off-state, and Ig/Id stays below 0.3% under normal bias. N1830, N1831, and N2027 all reach Ion/Ioff of 10⁸; N2028 exceeds 10⁶ but has only 21.3 mA/mm Ion, so it turns off well but does not turn on strongly. All samples show negative hysteresis, largest for N1830 (−0.93 V).",
    "deck.pg3Point":
      "Recommendation: N1830 (BGaN) is the most balanced and best suited to power switching, though its hysteresis needs tracking; N2027 drives the most current but its Vth is near the E-mode limit; N2028 should not be carried forward for power devices.",
    "sic.title": "Undergraduate thesis: high-temperature behavior of SiC power devices in extreme environments",
    "sic.body":
      "Starting from Sentaurus process and structure simulation, I analyzed VDMOS Vth, Ron, breakdown voltage, and reverse recovery from 300 to 1000 K, then built a high-temperature test platform to measure the static and dynamic behavior of a commercial 1200 V SiC MOSFET from 24 to 300 °C and checked the simulated trends against measurement.",
    "deck.sicLabel": "SiC power device research slides",
    "deck.tabSicProcess": "Process & structure",
    "deck.tabSicSim": "Thermal simulation",
    "deck.tabSicPlatform": "Test platform",
    "deck.tabSicMeas": "High-temp measurement",
    "deck.sic1Title": "VDMOS process simulation → structure model: three lithography steps and mesh optimization",
    "deck.sic1Body":
      "I walked through the VDMOS fabrication flow in Sentaurus: the epitaxy, P-well, and gate/source stages need three lithography steps and repeated ion implantation, and simulated outputs at key process nodes verify the flow. The process result then feeds a structure simulation built on the Poisson, continuity, and transport equations.",
    "deck.sic1Point":
      "For structure simulation the gate region is made equipotential and the Al deposition region is ignored: neither affects basic characteristics, but both inflate mesh density and compute cost, so the simplification makes the later 300–1000 K simulations faster and more stable.",
    "deck.sic2Title": "Thermal simulation: Vth falls with the Fermi potential, Ron is dominated by channel resistance",
    "deck.sic2Body":
      "With a ~50 nm gate oxide and little room to tune doping, Vth versus temperature is governed mainly by the Fermi potential: as temperature rises the Fermi potential drops and Vth follows. Breaking down Ron gives 41.0% channel, 29.5% accumulation region, 15.2% drift region, and 8.5% JFET region.",
    "deck.sic2Point": "Higher temperature lowers carrier mobility and raises channel resistance, so the fully-on Ron has a positive temperature coefficient, consistent with its known thermal dependence.",
    "deck.sic3Title": "Breakdown simulation: avalanche breakdown has a positive temperature coefficient",
    "deck.sic3Body":
      "Breakdown characteristics and space-charge distributions were simulated at 300, 500, 800, and 1000 K: breakdown voltage rises with temperature. The avalanche formula VBR ≈ ε·Ec(T)² / 2qN is read together with the space-charge maps to follow charge build-up.",
    "deck.sic3Point": "Stronger lattice vibration makes carriers lose more energy in collisions, so the field accumulates energy more slowly and a higher voltage is needed to trigger avalanche.",
    "deck.sic4Title": "Self-built high-temperature platform: furnace plus static and double-pulse benches",
    "deck.sic4Body":
      "A furnace provides 24–300 °C, and glass-fiber heat-resistant leads and clamps bring the device pins out to a static measurement bench and to a double-pulse bench (800 V) built from a signal generator, oscilloscope, DC supply, and a 400 µH load inductor.",
    "deck.sic4Point": "Without breaking the package of the commercial 1200 V SiC MOSFET, the same device can be characterized both statically and dynamically at high temperature.",
    "deck.sic5Title": "High-temperature static measurement: Vth drops about 38%, pre-breakdown voltage near 1200 V",
    "deck.sic5Body":
      "From room temperature to about 550 K, Vth drops by about 38% and, influenced by the package, still trends roughly linearly. At higher temperature the saturation region bends upward from channel-length modulation; at low gate voltage the channel is not fully on, so Ron is set by the drift region and falls with temperature. At 550 K the pre-breakdown voltage approaches 1200 V.",
    "deck.sic5Point":
      "The jitter before breakdown comes from random leakage fluctuation due to thermally excited carriers, local temperature non-uniformity in the package, and noise when measuring very low currents, not from device failure.",
    "deck.sic6Title": "High-temperature dynamic measurement: reverse-recovery charge at 300 °C is about 1.6× room temperature",
    "deck.sic6Body":
      "Double-pulse tests at seven temperatures from 24 to 300 °C give Qrr by integrating the reverse-recovery current at the second turn-on. Within the normal range up to 150 °C, Qrr rises roughly linearly; in the extreme range it climbs quickly, reaching about 1.6× the room-temperature value at 300 °C.",
    "deck.sic6Point": "Body-diode reverse recovery is tied to parasitic capacitance and switching slew rate, so high-temperature applications need switching loss and gate-drive design re-evaluated.",
    "deck.jkSpecTitle": "Digital IC spec analysis: pre- and post-layout versus the datasheet",
    "deck.jkSpecBody":
      "Each metric is checked at its worst corner (ss for VOH / VOL, VIH / VIL, and tpd; ff for II / ICC) against the SN74LVC112A datasheet at VCC 3.3 V: all 10 metrics comply, with post-layout tpd(CLK→Q) of 3.48 ns (spec ≤ 5.9 ns) and VOL of 0.481 V (spec ≤ 0.55 V). The only marginal item is VOH, which lands exactly on the 2.2 V lower limit after layout.",
    "deck.jkSpecPoint":
      "The pre- to post-layout shift traces back to layout parasitics: high interconnect RC and too few vias degrade VOH / VOL and tpd the most. The fix is to route power on the top metal and add vias to restore VOH margin.",
    "deck.tabDigital": "Digital IC · J-K flip-flop",
    "deck.tabAnalog": "Analog IC · Op-amp / comparator",
    "deck.jkTitle": "SN74LVC112A Dual Negative-Edge-Triggered J-K Flip-Flop",
    "deck.jkBody":
      "A J-K flip-flop with preset and clear, designed to the datasheet specification. I handled the schematic, most transistor sizing, part of the simulation testbenches and parameter measurement, and the top-level layout (about 65% of the work). The layout follows the package with 16 pads in two rows, placing ESD protection and IO buffers next to the pads.",
    "deck.jkPoint":
      "Pre- and post-layout simulations cover tt / ff / ss corners: post-layout tpd(CLK→Q) is 3.09 / 2.71 / 3.48 ns, and VOH / VOL, VIH / VIL, and leakage are verified at the worst corner.",
    "deck.ana1Title": "Analog IC: reconfigurable op-amp / hysteresis comparator",
    "deck.ana1Body":
      "In this two-person analog project I designed a circuit that switches between an op-amp and a hysteresis comparator: a differential input, common-source second stage, and Miller compensation, with Vcontrol selecting the mode, plus a bandgap reference. My work covered circuit analysis, pre-layout simulation, and DRC, LVS, and post-layout verification.",
    "deck.ana1Point": "The layout uses a cross-coupled common-centroid input pair and an interdigitated tail with dummies, finishing DRC / LVS clean with parasitic extraction and post-layout simulation.",
    "deck.ana2Title": "Using corners and layout matching to judge spec margin",
    "deck.ana2Body":
      "The tt / ff / ss results separate three failure types: UGBW and PM dropping together only at ss points to gm and compensation being too sensitive to slow devices; quiescent current rising to 25.5 µA at ss while bandwidth falls means simply adding current will not help, so the bandgap and bias mirror ratio need checking; the input common-mode lower limit failing at all three corners is a structural headroom gap that must be fixed in the design.",
    "deck.ana2Point":
      "My rule: if every corner fails, fix the design; if a single corner fails, break down process sensitivity, then use silicon data for model-to-silicon correlation before setting test specs and guard-bands.",
    "research.sicHeading": "SiC MOSFET: Process Simulation, Thermal Characteristics, and High-Temperature Measurement",
    "analog.eyebrow": "IC Design",
    "analog.title": "IC Design Projects: Full-Custom J-K Flip-Flop and Analog Amplifier / Comparator",
    "analog.body":
      "In my undergraduate VLSI projects, I completed two full-flow IC designs: one digital and one analog. Both were taken from specification to layout and verification in Cadence.",
    "experience.eyebrow": "Experience",
    "experience.title": "Internship, Projects & Clubs",
    "experience.body":
      "Beyond my current device research, I have worked on industrial-engineering production management, SMT assembly-and-test workflows, founding a blockchain studio, and planning student entrepreneurship events. These experiences taught me to think about technology from the perspective of practical industrial feasibility.",
    "awards.title": "Competitions & Awards",
    "awards.item1": "8th China International \"Internet+\" College Student Innovation and Entrepreneurship Competition | Silver Award",
    "awards.item2": "National College Student Innovation and Entrepreneurship Training Programs | Excellent Completion",
    "awards.item3": "China Undergraduate Mathematical Contest in Modeling | Third Prize, Shaanxi Province",
    "awards.item4": "CUHK-Shenzhen International FinTech Innovation Competition | Active Participation Award",
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

document.querySelectorAll("[data-deck]").forEach((deck) => {
  const steps = Array.from(deck.querySelectorAll(".deck-step"));
  const tabs = Array.from(deck.querySelectorAll("[data-deck-topic]"));
  const prevButton = deck.querySelector(".deck-prev");
  const nextButton = deck.querySelector(".deck-next");
  const counter = deck.querySelector(".deck-count");
  let current = 0;

  function show(index) {
    current = (index + steps.length) % steps.length;
    steps.forEach((step, stepIndex) => step.classList.toggle("is-active", stepIndex === current));

    const topic = steps[current].dataset.topic;
    tabs.forEach((tab) => {
      const isActive = tab.dataset.deckTopic === topic;
      tab.classList.toggle("is-active", isActive);
      tab.setAttribute("aria-selected", String(isActive));
    });

    if (counter) {
      counter.textContent = `${current + 1} / ${steps.length}`;
    }

    // Warm the neighbouring slides so flipping does not flash an empty frame.
    [current - 1, current + 1].forEach((neighbour) => {
      const image = steps[(neighbour + steps.length) % steps.length].querySelector("img");
      if (image) {
        image.loading = "eager";
      }
    });
  }

  tabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      show(steps.findIndex((step) => step.dataset.topic === tab.dataset.deckTopic));
    });
  });
  prevButton?.addEventListener("click", () => show(current - 1));
  nextButton?.addEventListener("click", () => show(current + 1));
  deck.addEventListener("keydown", (event) => {
    if (event.key === "ArrowLeft") {
      show(current - 1);
    } else if (event.key === "ArrowRight") {
      show(current + 1);
    }
  });

  let touchStartX = null;
  deck.addEventListener("touchstart", (event) => {
    touchStartX = event.touches[0].clientX;
  }, { passive: true });
  deck.addEventListener("touchend", (event) => {
    if (touchStartX === null) {
      return;
    }
    const deltaX = event.changedTouches[0].clientX - touchStartX;
    touchStartX = null;
    if (Math.abs(deltaX) > 50) {
      show(current + (deltaX < 0 ? 1 : -1));
    }
  });

  deck.showStep = (step) => {
    const index = steps.indexOf(step);
    if (index >= 0) {
      show(index);
    }
  };

  show(0);
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
  ".section-title, .research-focus-card, .deck, .experience-card, .project-card, .life-grid figure, .contact-section",
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
    const deck = target.closest("[data-deck]");
    if (deck?.showStep) {
      deck.showStep(target);
      deck.classList.add("is-visible");
    }
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
