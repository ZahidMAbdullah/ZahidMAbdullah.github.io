/* ============================================================================
   site.js — ALL the list content of the website lives here.
   Edit this file to add a publication, project, or certification.
   Prose (the About text) lives in index.html.
   No build step: save, commit, push (and bump the ?v= number in index.html).
   ========================================================================== */

const SITE = {

  /* --- Identity & links -------------------------------------------------- */
  name: "Muhammad Abdullah Zahid",
  email: "2023m654@kuas.ac.jp",
  altEmail: "abdullahzahid1440@gmail.com",

  // Leave a value as "" to hide that link everywhere on the site.
  cv: "assets/cv.pdf",                    // public CV, built from cv/cv.tex
  scholar: "",                            // https://scholar.google.com/citations?user=d0xOFi0AAAAJ&hl=en — add back once papers are listed
  github: "https://github.com/ZahidMAbdullah",
  linkedin: "https://www.linkedin.com/in/muhammad-abdullah-zahid-3b5a1226a/",
  orcid: "",

  /* --- Publications ------------------------------------------------------ */
  // Newest first. Wrap your own name in <strong> so it is highlighted.
  publications: [
    {
      title: "Skill Acquisition in Robotic Teleoperation: Effects of Mixed Reality and Vibrotactile Feedback",
      authors: "<strong>Muhammad Abdullah Zahid</strong>, Rene M. Suarez Flores, Sajid Nisar",
      venue: "2026 9th International Conference on Robotic Systems and Applications (ICRSA 2026), Huizhou, China",
      year: "2026",
      status: "IEEE Xplore indexing in progress",
      status_ja: "IEEE Xplore 収録手続き中",
      links: [],
      abstract: "This paper investigates whether spatially registered mixed reality (MR) supports faster acquisition of fine robotic teleoperation skills than a 2D multi-view representation, while also examining whether event-based vibrotactile feedback provides an additional training benefit. A 6-DoF virtual manipulator is controlled through a headset-tracked hand pose and rendered either as spatially registered content within the physical workspace or through three fixed camera views on a virtual monitor. The hand-to-end-effector control mapping and task remain unchanged across the two visual representations. To assess whether MR provides a training advantage over the 2D representation, the study quantifies performance change across repeated trials. Twelve participants completed a 2x2 within-subject fine-manipulation pick-and-place study with five 2-min trials in each of four conditions. MR yielded higher overall performance (5.19 versus 1.19 successful placements per trial) and significantly greater training-related improvement than 2D. The MR–2D slope difference was +0.479 placements/trial for successful placements and -0.0528/trial for missed-grasp rate. Vibrotactile feedback reduced mean self-collisions by 0.71 per trial but did not accelerate improvement in either primary outcome. These results indicate that spatially registered MR provides not only a substantial task-execution advantage but also evidence of faster early acquisition of fine teleoperation skills, whereas vibrotactile feedback did not produce a measurable acquisition benefit over the five-trial practice period.",
    },
    {
      title: "Escapement-Like Kinesthetic Rendering with a Passive Wearable Device for a Virtual Piano",
      authors: "<strong>Muhammad Abdullah Zahid</strong>, Shubh Shukla, Rene M. Suarez Flores, Sajid Nisar",
      venue: "2026 9th International Conference on Robotic Systems and Applications (ICRSA 2026), Huizhou, China",
      year: "2026",
      status: "IEEE Xplore indexing in progress",
      status_ja: "IEEE Xplore 収録手続き中",
      links: [],
      abstract: "Extended-reality (XR) systems can reproduce the appearance and sound of a piano, but without a physical keyboard, the mechanical response normally felt through the keys is lost. This paper presents a passive kinesthetic rendering method that provides an escapement-inspired sequence of resistance buildup, brief localized release, and recovery during key presses in a surfaceless virtual piano. A previously developed wearable electromagnetic tendon-resistance mechanism resists finger motion through two high-resistance stages separated by a short low-resistance interval. The controller uses normalized key depression to switch between resistance states and adapts the release duration to press speed within fixed time limits. The method is evaluated using virtual keys with approximately 20 mm of front-edge travel. Fingertip response measurements across five independent device fittings, with five presses per fitting, showed a consistent drop in the force proxy after release, followed by recovery during the remaining key travel and a further increase after full depression. In a study with ten participants, median accuracy was 95% for distinguishing the release from sustained resistance and 80% for identifying its relative location within the downstroke. Both exceeded their respective chance levels of 50% and 33.3%. These results show that a passive wearable device can provide a virtual key with a non-monotonic response—resistance buildup, a localized release, and recovery—without a physical key surface, enabling mechanically structured interaction in XR applications where a grounded force display is impractical.",
    },
    {
      title: "Wearable vs. World-Grounded Haptics for Space Teleoperation: A VR-Based Comparative Analysis of Kinesthetic Feedback for Fine Telemanipulation",
      authors: "Keshavi Hiren Joshi, Rene M. Suarez Flores, <strong>Muhammad Abdullah Zahid</strong>, Sajid Nisar",
      venue: "31st International Symposium on Artificial Life and Robotics 2026 (AROB 2026)",
      year: "2026",
      status: "",
      links: [],
      abstract: "Space teleoperation systems are commonly operated using world-grounded interfaces that rely primarily on visual feedback, which can increase cognitive load and pose safety risks during fine manipulation tasks. To address these limitations, kinesthetic force feedback has been introduced as an additional sensory channel. Recently, wearable haptic devices have gained attention due to their potential for intuitive control and increased freedom of movement; however, systematic comparisons with traditional world-grounded haptic devices in space teleoperation contexts remain limited. In this work, we present a comparative evaluation of a world-grounded haptic device and a wearable haptic device within a virtual reality (VR) environment. A task designed in Unity to simulate representative motion and manipulation actions relevant to space teleoperation is used to assess performance under four conditions: wearable and world-grounded control, each with and without force feedback. Task accuracy and completion time are analyzed to evaluate the influence of device type and haptic feedback on operator performance. The results provide initial insights into the strengths and limitations of wearable and world-grounded haptic interfaces for fine telemanipulation tasks, highlighting their respective suitability for future space teleoperation systems.",
    },
    {
      title: "Developing a Haptic-Enabled Mixed-Reality System for Fine Robotic Telemanipulation Training",
      authors: "<strong>Muhammad Abdullah Zahid</strong>, Rene M. Suarez Flores, Karan K C, Khalid Meitani, Anas Majumder, Sajid Nisar",
      venue: "43rd Annual Conference of the Robotics Society of Japan (RSJ2025), Tokyo",
      year: "2025",
      status: "",
      links: [],
      abstract: "We present a vibrotactile haptic-enabled mixed reality training platform designed to accelerate skill acquisition for fine telemanipulation tasks. The system utilizes a wearable vibrotactile glove and suit, providing haptic feedback and assistance for positioning, touch interaction, and alignment, specifically targeting the fingertips, wrist, and chest regions. A digital twin of a six-degree-of-freedom robotic arm is controlled within the mixed reality environment by tracking the user’s hand position and actions, which are mirrored in real time by the physical robotic counterpart. User experiments involving a remote assembly task are conducted to evaluate the system’s effectiveness with and without tactile feedback.",
    },
  ],

  /* --- Projects ---------------------------------------------------------- */
  // Display order is automatic (see main.js): projects whose `years` ends in
  // "present" come first, then the most recently finished.
  // Any field can have a Japanese version with the _ja suffix (e.g. description_ja);
  // without one, the Japanese page shows the English text.
  projects: [
    {
      name: "MR Training Interface for Fine Telemanipulation",
      years: "2026 – present",
      description: "My lab project. I built the training module of a mixed-reality teleoperation interface and compared it with a 2D multi-view display in a twelve-participant study. MR raised both performance and the rate of learning; vibrotactile cues reduced self-collisions but did not speed up learning.",
      description_ja: "研究室でのプロジェクト。複合現実（MR）による遠隔操作インターフェースの訓練モジュールを開発し、12名の参加者実験で2Dマルチビュー表示と比較しました。MRは作業成績と学習速度の両方を向上させ、振動触覚フィードバックは自己衝突を減らしたものの、学習の加速にはつながりませんでした。",
      links: [],
    },
    {
      name: "Unified MR Interface from Training to Execution",
      years: "2026 – present",
      description: "Extending the same interface and hand-based control from virtual training to the physical robot, with the remote workspace kept in sync through RGB-D object reconstruction and pose tracking (NVIDIA FoundationPose), to measure how skills transfer to real execution. This continues as my Master’s research from September 2027.",
      description_ja: "同じインターフェースと手による操作を、仮想環境での訓練から実機ロボットの操作へと拡張しています。RGB-Dによる物体再構成と姿勢追跡（NVIDIA FoundationPose）で遠隔地の作業空間を同期し、訓練で得た技能が実作業にどの程度転移するかを評価します。2027年9月からは修士研究として継続します。",
      links: [],
    },
    {
      name: "HaptLinX",
      years: "2025",
      description: "First prototype of my mixed-reality telemanipulation training system, selected for the IEEE World Haptics 2025 Student Innovation Challenge. Hand tracking on a Meta Quest 3S drives a digital twin of a Kinova Gen3 Lite that the real arm mirrors, while a haptic glove and suit render contact and alignment cues.",
      description_ja: "MR遠隔操作訓練システムの最初のプロトタイプで、IEEE World Haptics 2025 Student Innovation Challengeに選出されました。Meta Quest 3Sのハンドトラッキングで Kinova Gen3 Lite のデジタルツインを操作すると実機がその動きに追従し、触覚グローブとスーツが接触や位置合わせの手がかりを提示します。",
      links: [{ label: "Poster", url: "assets/posters/zahid-2025-whc-sic-haptlinx-poster.jpg" }],
    },
    {
      name: "Escapement Rendering for a Virtual Piano",
      years: "2025 – 2026",
      description: "A controller that renders a piano key’s let-off — resistance, a brief release, then recovery — through a passive wearable device, on a virtual piano with no key surface. Ten participants detected the release with 95% median accuracy.",
      description_ja: "受動的なウェアラブルデバイスを用いて、鍵盤面のない仮想ピアノ上でピアノの鍵の「レットオフ」（抵抗、短い解放、回復）を再現する制御手法。10名の参加者は解放を中央値95%の正答率で検出できました。",
      links: [],
    },
    {
      name: "Uncertainty-Aware Semantic Object Navigation",
      years: "2026 – present",
      description: "Object search for mobile robots that combines object memory, detection confidence, and spatial uncertainty, so a robot can find objects reliably as the scene changes. Developed in NVIDIA Isaac Sim.",
      description_ja: "物体の記憶、検出の信頼度、空間的な不確実性を組み合わせ、環境が変化しても移動ロボットが確実に物体を見つけられるようにする物体探索手法。NVIDIA Isaac Simで開発しています。",
      links: [],
    },
    {
      name: "Kyorabo",
      years: "2026 – present",
      description: "Co-founder of an app that matches researchers by what they work on. Live on iOS and the web; 80 researchers from 45 institutions joined in its first week.",
      description_ja: "研究内容にもとづいて研究者同士をマッチングするアプリを共同創業しました。iOSとWebで公開中で、公開から1週間で45機関の研究者80名が登録しました。",
      links: [
        { label: "Website", url: "https://kyorabo.com/" },
        { label: "App Store", url: "https://apps.apple.com/app/kyorabo/id6802475176" },
      ],
    },
    {
      name: "LLM-Driven Natural Language Robot Control",
      years: "2025",
      description: "Led a five-member team, with AsiaQuest Co., Ltd., building a mobile robot that follows spoken commands fully on-device, using Whisper, Mistral 7B, Grounded SAM 2, and ROS 2 Nav2.",
      description_ja: "AsiaQuest株式会社との連携プロジェクトで5名のチームを率い、音声による指示をすべて端末内で処理して実行する移動ロボットを開発しました（Whisper、Mistral 7B、Grounded SAM 2、ROS 2 Nav2）。",
      links: [],
    },
    {
      name: "AirKeys",
      years: "2025 – 2026",
      description: "Self-initiated virtual piano: a VR version with hand tracking (2025), extended to mixed reality with AI features and haptic feedback (2026). It led to my escapement-rendering work.",
      description_ja: "自主的に始めた仮想ピアノ。2025年にハンドトラッキングを用いたVR版を制作し、2026年にはAI機能と触覚フィードバックを備えたMR版へ発展させました。後の、鍵盤の感触を再現する研究のきっかけとなりました。",
      links: [],
    },
    {
      name: "ELIBot",
      years: "2026",
      description: "Team-built all-terrain robot with flexible claw wheels for a stairs-and-obstacles course. Teleoperated, with ROS 2 on a Raspberry Pi for QR and traffic-light detection and an STM32 for motor control.",
      description_ja: "階段や障害物のあるコースを走破するため、チームで製作した柔軟な爪付き車輪をもつ全地形ロボット。遠隔操作で動作し、Raspberry Pi上のROS 2でQRコードと信号機の検出を、STM32でモーター制御を行います。",
      links: [{ label: "GitHub", url: "https://github.com/ZahidMAbdullah/ELIBot" }],
    },
    {
      name: "Self-Balancing Line-Following Robot",
      years: "2025",
      description: "Two-wheeled robot that balances while following a line, using staged LQR control on an ESP32 with live gain tuning over WiFi.",
      description_ja: "ESP32上の段階的LQR制御で倒立を保ちながらライントレースを行う二輪ロボット。Wi-Fi経由で制御ゲインをリアルタイムに調整できます。",
      links: [{ label: "GitHub", url: "https://github.com/ZahidMAbdullah/Staged-LQR-LineFollowerBot" }],
    },
    {
      name: "Our Piano",
      years: "2024",
      description: "Arduino rhythm game in the style of Piano Tiles, with an LED matrix and three boards coordinated over I2C.",
      description_ja: "Arduinoで制作したピアノタイル風のリズムゲーム。LEDマトリクスと、I2Cで連携する3枚のボードで構成されています。",
      links: [{ label: "GitHub", url: "https://github.com/ZahidMAbdullah/OurPiano_Project" }],
    },
  ],

  /* --- Certifications ---------------------------------------------------- */
  certifications: [
    { year: "2026", title: "JSPS e-Learning Course on Research Ethics (eL CoRE)", title_ja: "日本学術振興会 研究倫理eラーニングコース（eL CoRE）", detail: "", url: "assets/certificates/zahid-2026-jsps-elcore-research-ethics-certificate.pdf" },
    { year: "2024", title: "MITx 6.00.1x: Introduction to Computer Science and Programming Using Python", detail: "", url: "https://courses.edx.org/certificates/9ee1f4959cd14ef0beca032932c73867" },
  ],
};
