import { assetUrl } from "../lib/assetUrl";

const imgImageCrave = assetUrl("/assets/4.png");

const guardianHero = assetUrl("/assets/guardian/mockup.jpg");
const guardianHeroCard = assetUrl("/assets/guardian/hero.png");
const guardianWireframe1 = assetUrl("/assets/guardian/wireframe-1.png");
const guardianWireframe2 = assetUrl("/assets/guardian/wireframe-2.png");
const guardianFinal1 = assetUrl("/assets/guardian/final-1.png");
const guardianFinal2 = assetUrl("/assets/guardian/final-2.png");

const streetSightHero = assetUrl("/assets/streetsight/hero.png");
const streetSightWireframe1 = assetUrl("/assets/streetsight/wireframe-1.png");
const streetSightWireframe2 = assetUrl("/assets/streetsight/wireframe-2.png");
const streetSightFinal1 = assetUrl("/assets/streetsight/final-1.png");
const streetSightFinal2 = assetUrl("/assets/streetsight/final-2.png");

const devalokhaHero = assetUrl("/assets/devalokha/hero.png");
const devalokhaGameplay1 = assetUrl("/assets/devalokha/gameplay-1.png");
const devalokhaGameplay2 = assetUrl("/assets/devalokha/gameplay-2.png");
const devalokhaHud1 = assetUrl("/assets/devalokha/hud-1.png");
const devalokhaMenu1 = assetUrl("/assets/devalokha/menu-1.png");
const devalokhaCharacter1 = assetUrl("/assets/devalokha/character-1.png");
const devalokhaCharacter2 = assetUrl("/assets/devalokha/character-2.png");
const devalokhaArena1 = assetUrl("/assets/devalokha/arena-1.png");
const devalokhaArena2 = assetUrl("/assets/devalokha/arena-2.png");

const clarioSitemap = assetUrl("/assets/clario/sitemap.png");
const clarioDashboard = assetUrl("/assets/clario/dashboard.png");
const clarioDesignSystem = assetUrl("/assets/clario/designsystem.png");
const clarioNavigation = assetUrl("/assets/clario/navigation.png");
const clarioTechStack = assetUrl("/assets/clario/techstack.png");
const clarioHero = assetUrl("/assets/clario/hero.png");

export interface GalleryItem {
  title: string;
  caption: string;
  image?: string;
  aspect?: "portrait" | "landscape" | "wide" | "square";
  fit?: "cover" | "contain";
}

export interface ProjectFeature {
  title: string;
  description: string;
}

export interface VisualShowcaseSection {
  title: string;
  description: string;
  items: GalleryItem[];
}

export interface InspirationReference {
  title: string;
  note: string;
}

export interface ProcessStep {
  title: string;
  description: string;
}

export interface ProjectPhase {
  title: string;
  content: string;
  items: string[];
}

export interface ProjectData {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  summary: string;
  tagline?: string;
  tags: string[];
  image: string;
  heroImage: string;
  heroImageAlt: string;
  category: string;
  year: string;
  duration: string;
  role: string;
  platform: string;
  tools: string[];
  responsibilities: string[];
  goals: string[];
  overview: string;
  challenge: string;
  problem: string;
  solution: string;
  outcome: string;
  takeaway: string;
  accent: string;
  stats: Array<{ label: string; value: string }>;
  wireframeLayout?: "default" | "bento-duo";
  presentation?: "default" | "game-pitch" | "system-product";
  targetUsers?: string[];
  features?: ProjectFeature[];
  visualSections?: VisualShowcaseSection[];
  inspirations?: InspirationReference[];
  productFlow?: VisualShowcaseSection;
  designSystemSection?: VisualShowcaseSection;
  processTimeline?: ProcessStep[];
  techStack?: string[];
  techStackSection?: VisualShowcaseSection;
  appUrl?: string;
  wireframes: GalleryItem[];
  finalShowcase: GalleryItem[];
  phases: {
    discover: ProjectPhase;
    define: ProjectPhase;
    design: ProjectPhase;
    deliver: ProjectPhase;
  };
}

const placeholder = (
  title: string,
  caption: string,
  aspect: GalleryItem["aspect"] = "portrait",
): GalleryItem => ({
  title,
  caption,
  aspect,
});

export const projects: ProjectData[] = [
  {
    id: "guardian",
    title: "Guardian",
    subtitle: "Accessibility Case Study",
    description:
      "A native iOS navigation companion designed to help visually impaired users move through unfamiliar environments with more confidence.",
    summary:
      "Designing a trustworthy accessibility product that translates obstacle awareness into calm, usable feedback.",
    tags: ["Accessibility", "Mobile", "Research", "UI/UX"],
    image: guardianHero,
    heroImage: guardianHero,
    heroImageAlt: "Guardian hero preview",
    category: "Accessibility",
    year: "2023",
    duration: "3 months",
    role: "UX/UI Designer (Team Project)",
    platform: "iOS (Native App)",
    tools: ["Figma", "FigJam", "Photoshop", "Illustrator", "InDesign"],
    responsibilities: [
      "Contributed across multiple parts of the product",
      "Worked on interaction design and accessibility-focused UX",
      "Helped shape user flows, screens, and system structure",
      "Supported visual design and usability thinking across the experience",
    ],
    goals: [
      "Reduce anxiety while navigating unfamiliar places",
      "Make obstacle awareness immediate and reliable",
      "Keep the interface accessible with minimal cognitive load",
    ],
    overview:
      "Guardian is a native iOS app designed to empower visually impaired users to navigate with confidence and independence. It helps users locate nearby objects, understand unfamiliar spaces, and stay oriented through spatial audio and real-time guidance.",
    challenge:
      "The core challenge was designing an experience that users could trust without needing to constantly look at a screen. Every interaction had to feel understandable through sound, timing, and simple structure.",
    problem:
      "Visually impaired individuals often struggle to locate everyday objects, navigate unfamiliar environments, and maintain orientation while moving. Existing tools rarely provide clear real-time awareness in a simple, dependable way.",
    solution:
      "Guardian uses 3D sound, object guidance, location-based prompts, and emergency support to create a more confident navigation experience. The interface focuses on clarity, trust, and accessibility rather than visual complexity.",
    outcome:
      "Guardian supports greater independence by helping users find nearby objects, understand spaces more easily, and feel safer while navigating everyday situations.",
    takeaway:
      "This project reinforced how important trust and consistency are in accessibility work. A great experience here is not just usable — it has to feel dependable.",
    accent: "#0caeff",
    appUrl: "https://guardian-mu-three.vercel.app/",
    stats: [
      { label: "Team", value: "Team" },
      { label: "Duration", value: "3 mo" },
      { label: "Platform", value: "iOS" },
    ],
    wireframeLayout: "bento-duo",
    wireframes: [
      {
        title: "Route Setup Flow",
        caption:
          "Low-fidelity exploration for onboarding, destination setup, and path confirmation.",
        image: guardianWireframe1,
        aspect: "portrait",
      },
      {
        title: "Guardian Feature Overview",
        caption:
          "Overview of Guardian’s core safety and accessibility features, including navigation support, object finding, reminders, and scene guidance.",
        image: guardianWireframe2,
        aspect: "landscape",
      },
    ],
    finalShowcase: [
      {
        title: "Guardian Hero Mockup",
        caption: "Primary final UI preview used across the case study.",
        image: guardianHeroCard,
        aspect: "landscape",
        fit: "contain",
      },
      {
        title: "Live Navigation Screens",
        caption:
          "Polished mobile states showing active guidance, obstacle awareness, and in-flow interaction design.",
        image: guardianFinal1,
        aspect: "portrait",
      },
      {
        title: "System UI Details",
        caption:
          "Final interface details for cards, controls, and supporting navigation patterns.",
        image: guardianFinal2,
        aspect: "landscape",
        fit: "contain",
      },
    ],
    phases: {
      discover: {
        title: "Understanding the Journey",
        content:
          "Research focused on how users currently navigate, where confidence breaks down, and what signals feel useful versus distracting.",
        items: [
          "Explored navigation pain points for visually impaired users",
          "Mapped daily movement challenges and confidence gaps",
          "Reviewed accessibility constraints and opportunities",
          "Defined what trustworthy feedback should feel like",
        ],
      },
      define: {
        title: "Defining Trust",
        content:
          "The team translated findings into a product direction centered on calm guidance, reliable assistance, and simple interaction patterns.",
        items: [
          "Mapped key moments of uncertainty",
          "Defined feature priorities around guidance and awareness",
          "Aligned system flows with accessibility needs",
          "Focused on low-friction interactions",
        ],
      },
      design: {
        title: "Crafting a Multi-Sensory UI",
        content:
          "Design exploration centered on simplifying visual layouts while giving audio and interaction structure clear jobs in the experience.",
        items: [
          "Built wireframes and navigation flows",
          "Explored object-finding and assistance states",
          "Created accessible interaction patterns",
          "Refined layouts for clarity and confidence",
        ],
      },
      deliver: {
        title: "Refinement and Outcome",
        content:
          "The final concept emphasized confidence, safety, and independence, tying together object guidance, real-time awareness, and emergency support.",
        items: [
          "Strengthened trust through clear UX",
          "Showed accessible iOS interaction patterns",
          "Presented a cohesive product concept",
          "Built a strong accessibility-led case study",
        ],
      },
    },
  },
  {
    id: "streetsight",
    title: "StreetSight",
    subtitle: "Billboard Management Platform",
    description:
      "A web platform that helps advertising agencies manage billboard inventory, generate proposals, and track campaign performance in real time.",
    summary:
      "A web platform that helps advertising agencies manage billboard inventory, generate proposals, and track campaign performance in real time.",
    tags: ["Web Application", "Advertising", "UI/UX"],
    image: streetSightHero,
    heroImage: streetSightHero,
    heroImageAlt: "StreetSight hero preview",
    category: "Advertising Operations",
    year: "2023",
    duration: "12 weeks",
    role: "UX/UI Designer (Team Project)",
    platform: "Web Application",
    tools: ["Figma", "FigJam", "Notion"],
    responsibilities: [
      "UI design across core platform experiences",
      "User flow design for inventory, proposals, and campaign management",
      "System structure and information architecture",
      "Collaboration on product-wide decisions",
    ],
    goals: [
      "Centralize billboard inventory management in one system",
      "Reduce manual proposal creation time for agencies",
      "Make campaign status and performance visible in real time",
    ],
    overview:
      "StreetSight is a billboard operations platform designed for agencies and operators. It replaces spreadsheet-heavy workflows with a centralized system for managing inventory, proposals, campaigns, and performance tracking.",
    challenge:
      "The challenge was to transform a fragmented operational workflow into a clear digital product that could handle inventory, proposal generation, and campaign tracking without feeling overwhelming.",
    problem:
      "Advertising agencies rely on spreadsheets to manage billboard inventory, which leads to missed updates, double bookings, inefficient proposal creation, and lack of real-time performance tracking.",
    solution:
      "StreetSight centralizes billboard inventory, proposal workflows, campaign management, and analytics into one web platform, reducing manual work while improving visibility and operational accuracy.",
    outcome:
      "StreetSight replaces outdated spreadsheet workflows with a centralized system, improving efficiency, accuracy, and scalability for advertising operations.",
    takeaway:
      "This project showed how much clarity and structure matter in B2B products. Good UX here came from reducing friction in dense operational workflows.",
    accent: "#12b6ff",
    appUrl: "https://streetsight.wmdd.ca",
    stats: [
      { label: "User Type", value: "B2B" },
      { label: "Platform", value: "Web" },
      { label: "Focus", value: "Ops + Analytics" },
    ],
    wireframeLayout: "default",
    wireframes: [
      {
        title: "Inventory Workflow",
        caption:
          "Wireframe exploration for billboard inventory management, availability updates, and multi-location organization.",
        image: streetSightWireframe1,
        aspect: "square",
        fit: "contain",
      },
      {
        title: "Proposal Generation Flow",
        caption:
          "Early flow for generating proposals, selecting billboard placements, and packaging options for clients.",
        image: streetSightWireframe2,
        aspect: "portrait",
        fit: "contain",
      },
    ],
    finalShowcase: [
      {
        title: "StreetSight Experience Preview",
        caption:
          "Main product visual showing the platform for inventory, proposals, and campaign operations.",
        image: streetSightHero,
        aspect: "landscape",
        fit: "contain",
      },
      {
        title: "Campaign Management Interface",
        caption:
          "Final UI showing day-to-day campaign management, proposal workflows, and operational visibility.",
        image: streetSightFinal1,
        aspect: "portrait",
      },
      {
        title: "Real-time Analytics Dashboard",
        caption:
          "A wider look at the analytics and reporting layer used to track campaign performance across billboard locations.",
        image: streetSightFinal2,
        aspect: "landscape",
        fit: "contain",
      },
    ],
    phases: {
      discover: {
        title: "Understanding Agency Workflows",
        content:
          "Research focused on how agencies and billboard operators currently manage inventory and campaigns through fragmented tools.",
        items: [
          "Studied spreadsheet-heavy inventory workflows",
          "Mapped proposal and booking bottlenecks",
          "Reviewed campaign reporting needs",
          "Identified operational pain points",
        ],
      },
      define: {
        title: "Defining the System Structure",
        content:
          "The team defined a centralized structure that connected billboard inventory, proposals, clients, campaigns, and analytics.",
        items: [
          "Defined inventory and booking logic",
          "Structured proposal generation flows",
          "Mapped client and campaign relationships",
          "Prioritized real-time operational visibility",
        ],
      },
      design: {
        title: "Designing the Platform",
        content:
          "Design work focused on making dense operational data easier to use while keeping proposals, campaign controls, and analytics connected.",
        items: [
          "Designed inventory management screens",
          "Created AI-powered proposal flow concepts",
          "Built campaign and client management interfaces",
          "Refined analytics views for clarity",
        ],
      },
      deliver: {
        title: "Outcome & Product Value",
        content:
          "The final concept demonstrated how a centralized platform could make advertising operations more scalable, accurate, and efficient.",
        items: [
          "Reduced spreadsheet-heavy task switching",
          "Improved visibility across inventory and campaigns",
          "Created a stronger proposal workflow foundation",
          "Positioned the system for future growth",
        ],
      },
    },
  },
  {
    id: "devalokha",
    title: "Devalokha: Gods Unleashed",
    subtitle: "Cinematic Fighting Game Pitch",
    description:
      "A cinematic 1v1 fighting game where gods from global mythologies battle using unique divine abilities in anime-inspired arenas.",
    summary:
      "A cinematic 1v1 fighting game where gods from global mythologies battle using unique divine abilities in anime-inspired arenas.",
    tagline:
      "Global mythologies collide in a high-intensity fighting game concept built for spectacle, clarity, and unforgettable character fantasy.",
    tags: ["Game Concept", "Fighting Game", "UI/UX", "Visual Direction"],
    image: devalokhaHero,
    heroImage: devalokhaHero,
    heroImageAlt: "Devalokha hero preview",
    category: "Game Concept Design",
    year: "2023",
    duration: "2 weeks",
    role: "Solo Project — Game Concept Designer, UI/UX Lead, Visual Director",
    platform: "PC + Console (PS5, Xbox Series X/S, Nintendo Switch)",
    tools: ["Figma", "Photoshop", "Illustrator"],
    responsibilities: [
      "Designed the overall game concept and structure",
      "Created UI/HUD direction and menu systems",
      "Developed visual identity and logo",
      "Defined art direction across characters and arenas",
    ],
    goals: [
      "Create a fresh mythological identity for the fighting genre",
      "Blend cinematic spectacle with readable combat UX",
      "Show strong visual storytelling across menus, HUD, and arenas",
    ],
    overview:
      "Devalokha: Gods Unleashed is a solo game concept built like a cinematic pitch deck. It imagines a 1v1 fighting game where gods from global mythologies battle in anime-inspired arenas with unique powers and dramatic presentation.",
    challenge:
      "The opportunity was to create a fighting game concept with stronger narrative identity and cultural depth while still keeping the gameplay presentation readable and compelling.",
    problem:
      "Fighting games often lack fresh narrative identity and cultural depth. Devalokha explores a new direction by combining mythological storytelling with high-intensity combat.",
    solution:
      "The concept blends anime-realism, mythological character fantasy, and cinematic presentation into a cohesive game pitch. UI and worldbuilding were designed to support readable combat while making every arena and fighter feel memorable.",
    outcome:
      "Demonstrates strong concept design, UI/UX thinking for games, and visual storytelling.",
    takeaway:
      "This project pushed the balance between spectacle and usability. The best game interfaces amplify the experience without confusing the player.",
    accent: "#ff8a47",
    stats: [
      { label: "Genre", value: "1v1 Fighter" },
      { label: "Scope", value: "Solo" },
      { label: "Duration", value: "2 wks" },
    ],
    presentation: "game-pitch",
    targetUsers: [
      "Fighting game players",
      "Anime-action fans",
      "Players drawn to mythological worldbuilding",
    ],
    features: [
      {
        title: "1v1 Mythological Combat",
        description:
          "Fast, high-intensity duels built around gods from multiple mythologies.",
      },
      {
        title: "Divine Fury Ultimates",
        description:
          "Each fighter uses a signature ability set and a dramatic ultimate move tied to their mythology.",
      },
      {
        title: "Cinematic Arenas",
        description:
          "Stages like Valhalla, Kailash, and Duat frame every battle with strong identity and atmosphere.",
      },
      {
        title: "Combat UI + HUD System",
        description:
          "A fighting-game interface concept designed for clarity during intense action moments.",
      },
      {
        title: "Anime-realism Visual Style",
        description:
          "A visual direction combining stylized drama with polished, high-contrast presentation.",
      },
    ],
    visualSections: [
      {
        title: "Gameplay Screens",
        description:
          "Large visual beats for in-match combat, spectacle, and encounter pacing.",
        items: [
          {
            title: "Game Overview & Key Details",
            caption:
              "A high-level summary of the game concept, core pillars, and the defining elements behind Devalokha’s world and combat direction.",
            image: devalokhaGameplay1,
            aspect: "wide",
            fit: "contain",
          },
          {
            title: "Fan Base & Competitive Positioning",
            caption:
              "A strategic overview of the target audience, genre fit, and how Devalokha could stand apart in the fighting game space.",
            image: devalokhaGameplay2,
            aspect: "landscape",
            fit: "contain",
          },
        ],
      },
      {
        title: "HUD / UI Design",
        description:
          "Combat readability, bars, effects, and on-screen hierarchy designed for fast reactions.",
        items: [
          {
            title: "HUD Concept",
            caption:
              "Combat HUD exploration focused on health, power meters, and in-fight readability.",
            image: devalokhaHud1,
            aspect: "landscape",
            fit: "contain",
          },
        ],
      },
      {
        title: "Menu UI",
        description:
          "A cinematic front-end system for character select, match flow, and game setup.",
        items: [
          {
            title: "Menu Flow",
            caption:
              "Menu system concept for title screen, character select, and cinematic front-end presentation.",
            image: devalokhaMenu1,
            aspect: "square",
            fit: "contain",
          },
        ],
      },
      {
        title: "Character Design",
        description:
          "Fighters presented as powerful mythological icons with distinct silhouettes and abilities.",
        items: [
          {
            title: "Character Sheet 01",
            caption:
              "Character design exploration focused on silhouette, pose, and mythological presence.",
            image: devalokhaCharacter1,
            aspect: "square",
            fit: "contain",
          },
          {
            title: "Character Sheet 02",
            caption:
              "Additional fighter presentation showing variation in attitude, costume, and power identity.",
            image: devalokhaCharacter2,
            aspect: "square",
            fit: "contain",
          },
        ],
      },
      {
        title: "Arena Design",
        description:
          "Worldbuilding through arenas such as Valhalla, Kailash, and Duat.",
        items: [
          {
            title: "Arena Concept 01",
            caption:
              "Arena key art exploring environment tone, symbolism, and stage atmosphere.",
            image: devalokhaArena1,
            aspect: "square",
            fit: "contain",
          },
          {
            title: "Arena Concept 02",
            caption:
              "Additional stage concept focused on environmental storytelling and dramatic presence.",
            image: devalokhaArena2,
            aspect: "square",
            fit: "contain",
          },
        ],
      },
    ],
    inspirations: [
      {
        title: "Anime-style Fighting Games",
        note: "High-energy combat presentation, expressive VFX, and dramatic character identity.",
      },
      {
        title: "God of War",
        note: "Mythological scale, environmental storytelling, and larger-than-life divine conflict.",
      },
      {
        title: "Cinematic Character Action",
        note: "Strong visual language for powers, arenas, and moment-to-moment spectacle.",
      },
    ],
    wireframes: [],
    finalShowcase: [
      {
        title: "Devalokha Key Art",
        caption:
          "Primary key art anchoring the cinematic game pitch presentation.",
        image: devalokhaHero,
        aspect: "landscape",
        fit: "contain",
      },
    ],
    phases: {
      discover: {
        title: "World & Mythology Direction",
        content:
          "The early phase focused on building a distinct direction for the fighting genre through mythology, character fantasy, and arena design.",
        items: [
          "Mapped mythological themes and character fantasy",
          "Explored arena concepts and tonal direction",
          "Studied fighting game presentation patterns",
          "Defined the emotional feel of combat encounters",
        ],
      },
      define: {
        title: "Core Game Pitch Structure",
        content:
          "The concept was shaped around clear pillars: cinematic combat, memorable gods, readable HUD design, and strong arena identity.",
        items: [
          "Defined 1v1 combat fantasy",
          "Outlined Divine Fury ultimate moments",
          "Structured key screens and player flow",
          "Set visual direction for pitch presentation",
        ],
      },
      design: {
        title: "UI, Arenas, and Character Presentation",
        content:
          "Design work focused on turning the concept into a compelling game showcase with special attention on HUD design, menu systems, key art, and worldbuilding.",
        items: [
          "Created combat UI and HUD concepts",
          "Explored anime-realism visual language",
          "Designed menu and front-end directions",
          "Developed arena and character presentation ideas",
        ],
      },
      deliver: {
        title: "Pitch-ready Showcase",
        content:
          "The final output was positioned as a visual-first game concept showcase, demonstrating how UX, worldbuilding, and interface design can support a premium fighting game pitch.",
        items: [
          "Presented a coherent game concept direction",
          "Showed UI/UX thinking for combat readability",
          "Demonstrated cinematic visual storytelling",
          "Built a strong foundation for future expansion",
        ],
      },
    },
  },
  {
    id: "clario",
    title: "Clario",
    subtitle: "AI Workflow Assistant",
    description:
      "An AI-powered project and finance assistant that helps freelancers manage contracts, track finances, and reduce risk in their workflow.",
    summary:
      "An AI-powered project and finance assistant that helps freelancers manage contracts, track finances, and reduce risk in their workflow.",
    tagline:
      "A structured, system-heavy product case study focused on flows, dashboards, and intelligent workflow support for freelancers.",
    tags: ["Web Application", "AI Product", "Finance", "System Design"],
    image: imgImageCrave,
    heroImage: clarioHero,
    heroImageAlt: "Clario dashboard preview",
    category: "Freelance Workflow Platform",
    year: "2023",
    duration: "3 months",
    role: "UX/UI Designer (Team Project)",
    platform: "Web Application",
    tools: ["Figma", "FigJam", "Adobe", "Jira", "Slack"],
    responsibilities: [
      "Contributed across multiple parts of the product",
      "Worked on UI design, flows, and system thinking",
      "Helped structure dashboard and workflow experiences",
      "Collaborated within a multi-disciplinary team",
    ],
    goals: [
      "Bring contracts, finance tracking, and project admin into one place",
      "Reduce manual admin burden for freelancers",
      "Create clarity around risk, income, and project status",
    ],
    overview:
      "Clario is an AI-powered project and finance assistant for freelancers and contractors. It centralizes contract analysis, financial tracking, dashboard insights, and project workflow into one web-based product.",
    challenge:
      "The challenge was designing a system-heavy platform that could connect contracts, finances, project progress, and AI guidance into one coherent experience.",
    problem:
      "Freelancers struggle with scattered financial data, delayed payments, contract risks, and excessive administrative work, making project and income management inefficient.",
    solution:
      "Clario combines project management, AI-assisted contract review, financial tracking, and dashboard insights into one connected system that helps users work with more clarity and less friction.",
    outcome:
      "Clario centralizes freelance workflow management into one intelligent platform, improving efficiency, clarity, and financial awareness.",
    takeaway:
      "This project highlighted how strong product design can bring together complex systems and make them feel manageable, useful, and trustworthy.",
    accent: "#3cc8ff",
    appUrl: "https://www.c-lario.com",
    stats: [
      { label: "Team", value: "Team" },
      { label: "Duration", value: "3 mo" },
      { label: "Platform", value: "Web" },
    ],
    presentation: "system-product",
    targetUsers: [
      "Freelancers",
      "Designers and developers",
      "Independent contractors",
    ],
    features: [
      {
        title: "Contract Upload + AI Risk Analysis",
        description:
          "Users can upload contracts and surface risks, unclear clauses, or payment concerns with AI support.",
      },
      {
        title: "Financial Tracking Dashboard",
        description:
          "A centralized dashboard gives visibility into income, expenses, and overall project health.",
      },
      {
        title: "Project + Client Management",
        description:
          "Clario connects project tracking with client context so operational work stays in one place.",
      },
      {
        title: "AI Insights + Recommendations",
        description:
          "The system helps users spot risk, manage cash flow, and make smarter day-to-day decisions.",
      },
      {
        title: "Income + Expense Monitoring",
        description:
          "Users can track freelance financial activity without stitching together multiple external tools.",
      },
    ],
    productFlow: {
      title: "Product Flow",
      description:
        "A large system-level view of how contracts, project setup, AI analysis, and financial tracking connect across the Clario experience.",
      items: [
        {
          title: "Clario User Flow",
          caption:
            "A system-level map showing how contracts, projects, dashboards, and AI-assisted finance workflows connect across the product.",
          image: clarioSitemap,
          aspect: "wide",
          fit: "contain",
        },
      ],
    },
    designSystemSection: {
      title: "Design System",
      description:
        "A structured look at buttons, cards, navigation, dashboards, and reusable product patterns.",
      items: [
        {
          title: "Core Components",
          caption:
            "A structured system view of buttons, cards, inputs, navigation, and reusable UI building blocks.",
          image: clarioDesignSystem,
          aspect: "wide",
          fit: "contain",
        },
        {
          title: "Navigation + States",
          caption:
            "Navigation structure, sidebar behavior, and supporting UI states that keep the product easy to scan and operate.",
          image: clarioNavigation,
          aspect: "wide",
          fit: "contain",
        },
      ],
    },
    processTimeline: [
      {
        title: "Research",
        description:
          "Mapped pain points in freelance admin, contracts, and financial visibility.",
      },
      {
        title: "Ideation",
        description:
          "Explored how AI and system thinking could simplify scattered workflows.",
      },
      {
        title: "Design",
        description:
          "Built dashboards, management flows, and a connected product structure.",
      },
      {
        title: "Validation",
        description:
          "Tested clarity, prioritization, and usefulness across key workflows.",
      },
      {
        title: "Final",
        description:
          "Refined the system into a stronger, product-ready case study.",
      },
    ],
    techStack: [
      "React",
      "Vite",
      "Tailwind CSS",
      "Node.js",
      "Express",
      "Firebase",
      "MongoDB",
      "ChatGPT API",
    ],
    techStackSection: {
      title: "Tech Stack",
      description:
        "A visual summary of the tools, systems, and product layers that shaped the Clario workflow.",
      items: [
        {
          title: "Tech Stack Overview",
          caption:
            "A product-facing view of the tools and system architecture used to frame the Clario experience.",
          image: clarioTechStack,
          aspect: "wide",
          fit: "contain",
        },
      ],
    },
    wireframes: [
      {
        title: "Dashboard Structure",
        caption:
          "Early product thinking around finance summaries, workflow visibility, and dashboard hierarchy.",
        image: clarioDashboard,
        aspect: "landscape",
        fit: "contain",
      },
      {
        title: "Product Flow Map",
        caption:
          "A broader flow diagram showing how contract analysis, project workflow, and finance tracking connect across the system.",
        image: clarioSitemap,
        aspect: "wide",
        fit: "contain",
      },
      {
        title: "Navigation & System States",
        caption:
          "Component-level design work showing navigation patterns, states, and product structure.",
        image: clarioNavigation,
        aspect: "wide",
        fit: "contain",
      },
    ],
    finalShowcase: [
      {
        title: "Dashboard Preview",
        caption:
          "A polished view of the Clario dashboard showing project, financial, and AI insight surfaces.",
        image: clarioDashboard,
        aspect: "landscape",
        fit: "contain",
      },
    ],
    phases: {
      discover: {
        title: "Understanding Freelance Workflow Pain",
        content:
          "Research focused on the administrative and financial friction freelancers face when contracts, projects, and finances live in disconnected tools.",
        items: [
          "Reviewed cash flow and delayed payment concerns",
          "Mapped contract and admin friction",
          "Studied scattered tracking workflows",
          "Identified how financial visibility breaks down",
        ],
      },
      define: {
        title: "Defining the Core Product System",
        content:
          "The team aligned on a structure that connected contracts, finances, clients, and projects under one intelligent workflow layer.",
        items: [
          "Defined major system relationships",
          "Prioritized dashboard clarity",
          "Structured AI recommendations into the workflow",
          "Created a centralized user journey",
        ],
      },
      design: {
        title: "Dashboard and System Design",
        content:
          "Design work emphasized dashboard utility, connected data views, and clean interface patterns that made the system feel easier to understand and operate.",
        items: [
          "Designed project and client management surfaces",
          "Built finance and income monitoring patterns",
          "Created contract upload and analysis flows",
          "Refined navigation and component consistency",
        ],
      },
      deliver: {
        title: "Product Refinement",
        content:
          "The final concept showed how a connected workflow platform could reduce freelance admin burden while improving visibility into contracts, finances, and risk.",
        items: [
          "Improved system clarity across key flows",
          "Created stronger dashboard hierarchy",
          "Positioned AI as a practical assistant feature",
          "Built a stronger system-focused portfolio story",
        ],
      },
    },
  },
];
