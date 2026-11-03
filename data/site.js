/* ============================================================================
   site.js — ALL the list content of the website lives here.
   Edit this file to add a publication, project, or certification.
   Prose (the About text) lives in index.html.
   No build step: save, commit, push.
   ========================================================================== */

const SITE = {

  /* --- Identity & links -------------------------------------------------- */
  name: "Muhammad Abdullah Zahid",
  email: "2023m654@kuas.ac.jp",
  altEmail: "abdullahzahid1440@gmail.com",

  // Leave a value as "" to hide that link everywhere on the site.
  github: "https://github.com/ZahidMAbdullah",

  /* --- Research keywords (shown under the hero) -------------------------- */
  keywords: [
    "Haptics",
    "Mixed Reality",
    "Robotic Teleoperation",
    "Human–Robot Interaction",
    "Skill Acquisition",
  ],

  /* --- Publications ------------------------------------------------------ */
  // peerReviewed: true | false   (drives the "Peer-reviewed" filter)
  // Wrap your own name in <strong> so it is highlighted in the author list.
  publications: [
    {
      title: "Skill Acquisition in Robotic Teleoperation: Effects of Mixed Reality and Vibrotactile Feedback",
      authors: "<strong>Muhammad Abdullah Zahid</strong>, Rene M. Suarez Flores, Sajid Nisar",
      venue: "2026 9th International Conference on Robotic Systems and Applications (ICRSA 2026), Huizhou, China",
      year: "2026",
      peerReviewed: true,
      status: "Presented — IEEE Xplore indexing in progress",
      links: [],
      abstract: "Does spatially registered mixed reality help operators <em>learn</em> fine teleoperation faster than a conventional 2D multi-view display — or does it only make the task easier on the day? Twelve participants completed a 2&times;2 within-subject precision pick-and-place study, five 2-minute trials per condition, with the hand-to-end-effector mapping held constant across both visual representations. MR produced both higher overall performance (5.19 vs. 1.19 successful placements per trial) and a significantly steeper improvement slope (+0.479 placements/trial), which is evidence of genuinely faster early skill acquisition. Event-based vibrotactile feedback reduced self-collisions by 0.71 per trial but did not accelerate learning.",
    },
    {
      title: "Escapement-Like Kinesthetic Rendering with a Passive Wearable Device for a Virtual Piano",
      authors: "<strong>Muhammad Abdullah Zahid</strong>, Shubh Shukla, Rene M. Suarez Flores, Sajid Nisar",
      venue: "2026 9th International Conference on Robotic Systems and Applications (ICRSA 2026), Huizhou, China",
      year: "2026",
      peerReviewed: true,
      status: "Presented — IEEE Xplore indexing in progress",
      links: [],
      abstract: "XR can reproduce how a piano looks and sounds, but without a physical keyboard the mechanical response felt through the key is lost. This paper renders that response passively: a wearable electromagnetic tendon-resistance mechanism produces an escapement-inspired sequence of resistance buildup, a brief localized release, and recovery — with no key surface beneath the finger. Across ten participants, median accuracy was 95% for distinguishing the release from sustained resistance and 80% for identifying its relative location within the downstroke, against chance levels of 50% and 33.3%.",
    },
    {
      title: "Wearable vs. World-Grounded Haptics for Space Teleoperation: A VR-Based Comparative Analysis of Kinesthetic Feedback for Fine Telemanipulation",
      authors: "Keshavi Hiren Joshi, Rene M. Suarez Flores, <strong>Muhammad Abdullah Zahid</strong>, Sajid Nisar",
      venue: "Proceedings of the 31st International Symposium on Artificial Life and Robotics (AROB 31st 2026)",
      year: "2026",
      peerReviewed: true,
      status: "",
      links: [],
      abstract: "Space robotic arms are operated almost entirely on vision, which raises cognitive load and risk during fine manipulation. This work compares a world-grounded interface (sigma.7) against a wearable one (Dexmo) in a Unity task modelled on extra-vehicular activities and robotics, under four conditions — each device with and without force feedback — analysing task accuracy and completion time to map where each class of interface is actually suited.",
    },
    {
      title: "Developing a Haptic-Enabled Mixed-Reality System for Fine Robotic Telemanipulation Training",
      authors: "<strong>Muhammad Abdullah Zahid</strong>, Rene M. Suarez Flores, Karan K C, Khalid Meitani, Anas Majumder, Sajid Nisar",
      venue: "Proceedings of the 43rd Annual Conference of the Robotics Society of Japan (RSJ2025), International Session — Human and Robot, Tokyo",
      year: "2025",
      peerReviewed: false,
      status: "",
      links: [{ label: "Conference", url: "https://ac.rsj-web.org/2025/" }],
      abstract: "A vibrotactile haptic-enabled mixed-reality platform for fine telemanipulation training. A wearable glove and suit deliver feedback for positioning, contact, and alignment at the fingertips, wrist, and chest, while a digital twin of a 6-DoF Kinova Gen3 Lite is driven by inverse-kinematics hand tracking and mirrored in real time by the physical arm over UDP. Evaluated on a remote nut-and-bolt assembly task, with and without tactile feedback.",
    },
  ],

  /* --- Projects ---------------------------------------------------------- */
  // Display order is automatic (see main.js): projects whose `years` ends in
  // "present" come first, then the most recently finished. `featured: true`
  // highlights a card and wins ties within the same year.
  projects: [
    {
      name: "HaptLinX",
      tagline: "Haptic-enabled mixed-reality training for fine telemanipulation",
      featured: true,
      years: "2025",
      description: "The initial training interface prototype for the IEEE World Haptics 2025 Student Innovation Challenge. A digital twin of a 6-DoF Kinova Gen3 Lite is controlled in mixed reality by inverse-kinematics hand tracking and mirrored in real time by the physical arm over UDP, while a bHaptics TactGlove and TactSuit render contact, grasp, alignment, and proximity cues. The same system was presented at RSJ2025 and evaluated in a twelve-participant skill-acquisition study. Its MR training environment became my current lab project, and my planned Master’s research extends it from training to physical execution through the same interface.",
      tags: ["Unity", "Meta Quest 3S", "Kinova Gen3 Lite", "bHaptics", "Inverse Kinematics", "UDP"],
      links: [{ label: "WHC 2025 poster", url: "assets/posters/zahid-2025-whc-sic-haptlinx-poster.jpg" }],
    },
    {
      name: "Escapement Rendering for a Virtual Piano",
      tagline: "Passive wearable kinesthetic feedback with no key surface",
      featured: true,
      years: "2025 – 2026",
      description: "A surfaceless virtual piano in which a passive electromagnetic tendon-resistance device reproduces the non-monotonic response of a real piano action — resistance buildup, a brief let-off, then recovery — driven by normalized key depression and adapted to press speed. Participants reliably detected the release and located it within the downstroke.",
      tags: ["Wearable Haptics", "Passive Force Feedback", "XR", "Psychophysics"],
      links: [],
    },
    {
      name: "Uncertainty-Aware Semantic Object Navigation",
      tagline: "Reliable object search for mobile robots in dynamic environments",
      featured: false,
      years: "2026 – present",
      description: "A newer research direction in the NISAR Laboratory: a semantic ObjectNav framework that combines object memory, detection confidence and spatial uncertainty, active exploration, and autonomous navigation so that a mobile robot can find objects reliably even when the scene changes.",
      tags: ["NVIDIA Isaac Sim", "Mobile Robots", "Semantic Navigation", "Uncertainty", "Active Exploration"],
      links: [],
    },
    {
      name: "Kyorabo",
      tagline: "Co-founder — find research collaborators",
      featured: false,
      years: "2026 – present",
      description: "A mobile app that matches researchers and students by what they actually work on, so finding collaborators no longer depends on conferences, cold email, or existing networks. Contact opens only after mutual interest, and an Opportunities board carries collaborations, PhD positions, and funding calls. Built by five researchers in Kyoto and live on iOS and the web, it reached 80 researchers from 45 institutions in 18 countries in its first week. Submitted to RevenueCat Shipaton 2026.",
      tags: ["Co-founder", "React Native", "Expo", "Supabase", "iOS", "Startup"],
      links: [
        { label: "Website", url: "https://kyorabo.com/" },
        { label: "App Store", url: "https://apps.apple.com/app/kyorabo/id6802475176" },
        { label: "Devpost", url: "https://devpost.com/software/kyorabo-find-research-collaborators" },
        { label: "Instagram", url: "https://www.instagram.com/kyorabo/" },
        { label: "LinkedIn", url: "https://www.linkedin.com/in/kyorabo-collab-a8845042b/" },
        { label: "Facebook", url: "https://www.facebook.com/kyorabo/" },
      ],
    },
    {
      name: "LLM-Driven Natural Language Robot Control",
      tagline: "Pre-Capstone project with AsiaQuest Co., Ltd.",
      featured: true,
      years: "2025",
      description: "Led a five-member team building a mobile robot that carries out spoken commands such as “go to the apple, then the pineapple”, fully locally. Whisper and Mistral 7B turn speech into structured commands, Grounded SAM 2 on RGB-D locates objects in 3D, and ROS 2 SLAM with Nav2 plans the path; I worked on the language and vision pipelines. By the final, it handled multi-step tasks with latency cut from 5–6 s to 3–4 s.",
      tags: ["ROS 2", "Nav2 / SLAM", "Whisper", "Mistral 7B", "Grounded SAM 2", "RGB-D", "MQTT", "Team Lead"],
      links: [],
    },
    {
      name: "AirKeys",
      tagline: "Portable VR/MR piano with dual-layer hand tracking and AI-guided learning",
      featured: false,
      years: "2025 – 2026",
      description: "Cornerstone project, presented in 2025 (VR) and again in 2026 (mixed reality). Finger tracking fuses a Leap Motion Controller 2 with a flex-sensor glove, which proved noticeably more precise than Leap Motion alone; a song-learning mode asks GPT-3 for a tune's key sequence and lights the keys up; and a servo-and-tendon glove was designed to resist the fingertip on each key press. It led directly to my later work on rendering a piano key's feel without a physical key.",
      tags: ["VR / MR", "Leap Motion", "Flex-Sensor Glove", "GPT-3", "Haptic Glove", "Unity"],
      links: [],
    },
    {
      name: "ELIBot",
      tagline: "All-terrain clawed-wheel robot for an obstacle-course challenge",
      featured: false,
      years: "2026",
      description: "Team 12's entry for the Mechatronics Laboratory (Robot: Advanced) robot challenge, Spring 2026: a course of doors, slopes, ditches, ledges, stairs, a traffic-light barrier, and an object-retrieval task. A four-wheeled skid-steer robot with rigid PLA hubs and flexible TPU claw wheels that grip stair edges, plus a lightweight hook arm. It is teleoperated from a remote station through fixed course cameras, with a ROS 2 stack on a Raspberry Pi 4 detecting QR codes and traffic lights (YOLOv8 and HSV), and an STM32 handling real-time motor and servo control with a watchdog. Built by a team of five; the design went through three iterations.",
      tags: ["ROS 2", "Raspberry Pi", "STM32", "YOLOv8", "3D Printing", "Teleoperation"],
      links: [{ label: "GitHub", url: "https://github.com/ZahidMAbdullah/ELIBot" }],
    },
    {
      name: "Self-Balancing Line-Following Robot",
      tagline: "Inverted-pendulum mobile robot with staged LQR control",
      featured: false,
      years: "2025",
      description: "A two-wheeled robot that balances like an inverted pendulum while following a line and avoiding obstacles. An ESP32 reads pitch from a BNO055 IMU and applies a staged LQR controller, switching to stronger gains for large deviations and smoother ones near upright. IR sensors track the line and an ultrasonic sensor detects obstacles, while a Python/Tkinter interface sends new gains over WiFi (UDP) for live tuning without reflashing. Built for the Mechatronics Laboratory (Robot: Basic) course.",
      tags: ["Staged LQR", "ESP32", "IMU", "Python", "Tkinter", "UDP"],
      links: [{ label: "GitHub", url: "https://github.com/ZahidMAbdullah/Staged-LQR-LineFollowerBot" }],
    },
    {
      name: "Our Piano",
      tagline: "Arduino-based Piano Tiles-style rhythm game",
      featured: false,
      years: "2024",
      description: "A hardware rhythm game inspired by Piano Tiles. Notes from C4 to C5 fall down the columns of a LOL Shield LED matrix, and players press the matching button in time, with the game speeding up the longer they survive. Because the LED shield uses every pin, three Arduinos split the work over I2C: one reads buttons and plays the notes, one animates the matrix, and one shows the score. Built by a team of four for the Introduction to Design course.",
      tags: ["Arduino", "C++", "LOL Shield", "I2C", "Embedded"],
      links: [{ label: "GitHub", url: "https://github.com/ZahidMAbdullah/OurPiano_Project" }],
    },
  ],

  /* --- Certifications ---------------------------------------------------- */
  certifications: [
    { year: "2026", title: "JSPS e-Learning Course on Research Ethics for Graduate Students (eL CoRE)", detail: "Japan Society for the Promotion of Science, completed Oct 31, 2026.", url: "assets/certificates/zahid-2026-jsps-elcore-research-ethics-certificate.pdf" },
  ],
};
