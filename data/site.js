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
  cv: "",
  scholar: "",
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
      links: [],
      abstract: "Does spatially registered mixed reality help operators <em>learn</em> fine teleoperation faster than a conventional 2D multi-view display — or does it only make the task easier on the day? Twelve participants completed a 2&times;2 within-subject precision pick-and-place study, five 2-minute trials per condition, with the hand-to-end-effector mapping held constant across both visual representations. MR produced both higher overall performance (5.19 vs. 1.19 successful placements per trial) and a significantly steeper improvement slope (+0.479 placements/trial), which is evidence of genuinely faster early skill acquisition. Event-based vibrotactile feedback reduced self-collisions by 0.71 per trial but did not accelerate learning.",
    },
    {
      title: "Escapement-Like Kinesthetic Rendering with a Passive Wearable Device for a Virtual Piano",
      authors: "<strong>Muhammad Abdullah Zahid</strong>, Shubh Shukla, Rene M. Suarez Flores, Sajid Nisar",
      venue: "2026 9th International Conference on Robotic Systems and Applications (ICRSA 2026), Huizhou, China",
      year: "2026",
      status: "IEEE Xplore indexing in progress",
      links: [],
      abstract: "XR can reproduce how a piano looks and sounds, but without a physical keyboard the mechanical response felt through the key is lost. This paper renders that response passively: a wearable electromagnetic tendon-resistance mechanism produces an escapement-inspired sequence of resistance buildup, a brief localized release, and recovery — with no key surface beneath the finger. Across ten participants, median accuracy was 95% for distinguishing the release from sustained resistance and 80% for identifying its relative location within the downstroke, against chance levels of 50% and 33.3%.",
    },
    {
      title: "Wearable vs. World-Grounded Haptics for Space Teleoperation: A VR-Based Comparative Analysis of Kinesthetic Feedback for Fine Telemanipulation",
      authors: "Keshavi Hiren Joshi, Rene M. Suarez Flores, <strong>Muhammad Abdullah Zahid</strong>, Sajid Nisar",
      venue: "31st International Symposium on Artificial Life and Robotics 2026 (AROB 2026)",
      year: "2026",
      status: "",
      links: [],
      abstract: "Space robotic arms are operated almost entirely on vision, which raises cognitive load and risk during fine manipulation. This work compares a world-grounded interface (sigma.7) against a wearable one (Dexmo) in a Unity task modelled on extra-vehicular activities and robotics, under four conditions — each device with and without force feedback — analysing task accuracy and completion time to map where each class of interface is actually suited.",
    },
    {
      title: "Developing a Haptic-Enabled Mixed-Reality System for Fine Robotic Telemanipulation Training",
      authors: "<strong>Muhammad Abdullah Zahid</strong>, Rene M. Suarez Flores, Karan K C, Khalid Meitani, Anas Majumder, Sajid Nisar",
      venue: "43rd Annual Conference of the Robotics Society of Japan (RSJ2025), Tokyo",
      year: "2025",
      status: "",
      links: [{ label: "Conference", url: "https://ac.rsj-web.org/2025/" }],
      abstract: "A vibrotactile haptic-enabled mixed-reality platform for fine telemanipulation training. A wearable glove and suit deliver feedback for positioning, contact, and alignment at the fingertips, wrist, and chest, while a digital twin of a 6-DoF Kinova Gen3 Lite is driven by inverse-kinematics hand tracking and mirrored in real time by the physical arm over UDP. Evaluated on a remote nut-and-bolt assembly task, with and without tactile feedback.",
    },
  ],

  /* --- Projects ---------------------------------------------------------- */
  // Display order is automatic (see main.js): projects whose `years` ends in
  // "present" come first, then the most recently finished.
  projects: [
    {
      name: "HaptLinX",
      years: "2025",
      description: "First prototype of my mixed-reality telemanipulation training system, selected for the IEEE World Haptics 2025 Student Innovation Challenge. Hand tracking on a Meta Quest 3S drives a digital twin of a Kinova Gen3 Lite that the real arm mirrors, while a haptic glove and suit render contact and alignment cues.",
      links: [{ label: "Poster", url: "assets/posters/zahid-2025-whc-sic-haptlinx-poster.jpg" }],
    },
    {
      name: "Escapement Rendering for a Virtual Piano",
      years: "2025 – 2026",
      description: "A controller that renders a piano key’s let-off — resistance, a brief release, then recovery — through a passive wearable device, on a virtual piano with no key surface. Ten participants detected the release with 95% median accuracy.",
      links: [],
    },
    {
      name: "Uncertainty-Aware Semantic Object Navigation",
      years: "2026 – present",
      description: "Object search for mobile robots that combines object memory, detection confidence, and spatial uncertainty, so a robot can find objects reliably as the scene changes. Developed in NVIDIA Isaac Sim.",
      links: [],
    },
    {
      name: "Kyorabo",
      years: "2026 – present",
      description: "Co-founder of an app that matches researchers by what they work on. Live on iOS and the web; 80 researchers from 45 institutions joined in its first week.",
      links: [
        { label: "Website", url: "https://kyorabo.com/" },
        { label: "App Store", url: "https://apps.apple.com/app/kyorabo/id6802475176" },
      ],
    },
    {
      name: "LLM-Driven Natural Language Robot Control",
      years: "2025",
      description: "Led a five-member team, with AsiaQuest Co., Ltd., building a mobile robot that follows spoken commands fully on-device, using Whisper, Mistral 7B, Grounded SAM 2, and ROS 2 Nav2.",
      links: [],
    },
    {
      name: "AirKeys",
      years: "2025 – 2026",
      description: "Self-initiated virtual piano: a VR version with hand tracking (2025), extended to mixed reality with AI features and haptic feedback (2026). It led to my escapement-rendering work.",
      links: [],
    },
    {
      name: "ELIBot",
      years: "2026",
      description: "Team-built all-terrain robot with flexible claw wheels for a stairs-and-obstacles course. Teleoperated, with ROS 2 on a Raspberry Pi for QR and traffic-light detection and an STM32 for motor control.",
      links: [{ label: "GitHub", url: "https://github.com/ZahidMAbdullah/ELIBot" }],
    },
    {
      name: "Self-Balancing Line-Following Robot",
      years: "2025",
      description: "Two-wheeled robot that balances while following a line, using staged LQR control on an ESP32 with live gain tuning over WiFi.",
      links: [{ label: "GitHub", url: "https://github.com/ZahidMAbdullah/Staged-LQR-LineFollowerBot" }],
    },
    {
      name: "Our Piano",
      years: "2024",
      description: "Arduino rhythm game in the style of Piano Tiles, with an LED matrix and three boards coordinated over I2C.",
      links: [{ label: "GitHub", url: "https://github.com/ZahidMAbdullah/OurPiano_Project" }],
    },
  ],

  /* --- Certifications ---------------------------------------------------- */
  certifications: [
    { year: "2026", title: "JSPS e-Learning Course on Research Ethics (eL CoRE)", detail: "", url: "assets/certificates/zahid-2026-jsps-elcore-research-ethics-certificate.pdf" },
  ],
};
