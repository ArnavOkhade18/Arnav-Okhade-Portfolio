// Comprehensive Case Study & Career Data for Arnav Okhade PM Portfolio
const PORTFOLIO_DATA = {
  profile: {
    name: "Arnav Okhade",
    title: "Product | Strategy | Technology & AI",
    currentRole: "Associate Technical Project Manager @ MAQ Software",
    educationSummary: "MBA (IIM Kashipur '26) • B.Tech (NIT Hamirpur '22)",
    location: "Noida / Bhopal, India",
    email: "arnavokhadeofficial@gmail.com",
    alternateEmail: "arnavokhade9@gmail.com",
    phone: "+91 9754505450",
    linkedin: "https://www.linkedin.com/in/arnav-okhade-39412a203",
    tagline: "Bridging structured problem solving, business strategy, user research, and practical AI to build scalable products that solve realistic problems.",
    bio: "I am an MBA graduate from IIM Kashipur with an engineering foundation from NIT Hamirpur and 2+ years of enterprise software experience at Oracle and MAQ Software. My focus is entirely on product thinking - deconstructing complex market dynamics, architecting defensible unit economics, designing intuitive user journeys, and leveraging practical AI workflows to solve realistic problems.",
    stats: [
      { label: "National Recognitions", value: "7+", sub: "Finalist & Semifinalist Finishes" },
      { label: "Cycle Time Reduction", value: "70%", sub: "Via SpecKit Workflows" },
      { label: "Core Banking Uptime", value: "99%", sub: "Oracle FLEXCUBE LATAM" },
      { label: "Modeled Business Value", value: "₹200Cr+", sub: "Across Real-World Cases" }
    ],
    aspirations: {
      headline: "Building the Next Generation of High-Impact, Defensible Products",
      targetRoles: [
        "Product Manager (PM)",
        "Technical Product Manager (TPM)",
        "AI Product Manager",
        "Product Strategy & Operations Lead",
        "FinTech / Growth PM"
      ],
      corePillars: [
        {
          title: "AI-Augmented Product Workflows",
          desc: "Embedding pragmatic LLM/agentic workflows into enterprise systems to compress cycle times and eliminate operational friction, while enforcing strict circuit-breaker governance."
        },
        {
          title: "FinTech & Digital Banking",
          desc: "Architecting relational banking ecosystems, multi-signal underwriting protocols, and financial inclusion tools that balance growth with risk discipline."
        },
        {
          title: "0-to-1 Consumer & Ecosystems",
          desc: "Reimagining commoditized categories by merging physical hardware, ambient software layers, and user-generated creator economies."
        },
        {
          title: "Physical Operations & Supply Chain Tech",
          desc: "Bridging digital software with ground-level physical operations, standard operating procedures, and frontline human incentive alignment."
        }
      ]
    },
    skills: {
      hardSkills: [
        "Product Management",
        "Practical AI & Prompt Engineering",
        "AI-Augmented Product Workflows",
        "Product Analytics & Metrics Design",
        "Power BI & DAX Modeling",
        "Agile & Scrum Execution",
        "PL/SQL & Database Architecture",
        "System Architecture & Workflows",
        "Financial Modeling & Unit Economics",
        "Azure DevOps (ADO) Governance",
        "Debugging & Root-Cause Analysis",
        "User Journey & Opportunity Mapping",
        "MS Excel (Advanced Modeling)"
      ],
      softSkills: [
        "First-Principles Strategic Thinking",
        "Cross-Functional Team Leadership",
        "Executive Stakeholder Alignment",
        "Ground-Level User Empathy",
        "Negotiation & Vendor Engagement",
        "Navigating High Ambiguity",
        "Clear & Persuasive Communication"
      ]
    }
  },

  experiences: [
    {
      id: "maq-atpm",
      role: "Associate Technical Project Manager",
      company: "MAQ Software",
      period: "May 2026  -  Present",
      location: "Noida, India",
      badge: "Current Role",
      summary: "Leading technical product delivery and engineering operations across a 40+ member cross-functional team, spearheading AI-assisted requirement workflows and enterprise reporting governance.",
      highlights: [
        "Reduced Power Pages requirement-to-delivery enhancement effort by 70% through SpecKit-driven structured workflows.",
        "Boosted engineering throughput by 3.3× through reusable implementation frameworks, saving close to 35 hours per 10 change requests.",
        "Enhanced governance visibility for 70+ reporting assets through ADO dashboards tracking PR compliance, sprint execution, and automated delivery tracking.",
        "Orchestrated cross-functional roadmaps, dependency resolution, and executive stakeholder alignment across 40+ engineering and QA team members."
      ],
      skills: ["Technical Product Management", "AI Workflows", "Agile Execution", "Azure DevOps", "Stakeholder Alignment"]
    },
    {
      id: "maq-intern",
      role: "Project Management Intern",
      company: "MAQ Software",
      period: "Apr 2025  -  Jun 2025",
      location: "Noida, India",
      badge: "MBA Internship",
      summary: "Spearheaded organization-wide learning & development productization and employee training analytics.",
      highlights: [
        "Increased training engagement from 66.7% to 89.7% across 8 streams and 15+ cross-functional stakeholders.",
        "Standardized 10+ domain training programs with gamified leaderboards and interactive quizzes, boosting active participation by 24%.",
        "Built real-time metrics dashboards providing 100% visibility into employee progress and conceptualized an Agile-driven assessment automation framework."
      ],
      skills: ["Product Operations", "Gamification", "Learning Analytics", "Dashboard Design", "Power BI"]
    },
    {
      id: "oracle-dev",
      role: "Product Developer / Associate Consultant",
      company: "Oracle",
      period: "Jul 2022  -  Jun 2024 (2 Years)",
      location: "Bengaluru, India",
      badge: "Enterprise Tech",
      summary: "Owned end-to-end feature delivery, localization, and system reliability for Oracle FLEXCUBE Core Banking across the LATAM region.",
      highlights: [
        "Localized Oracle FLEXCUBE for Latin American banking clients, resolving 30+ mission-critical defects and delivering 99% production uptime.",
        "Owned end-to-end feature lifecycle across backend PL/SQL scripting, API validation, and JavaScript/SOAP frontend integration.",
        "Expedited feature delivery by 20% through structured cross-regional collaboration across 10+ functional business units.",
        "Engineered sprint retrospectives and root-cause testing insights, driving a 15% reduction in rework cycles."
      ],
      skills: ["Core Banking Systems", "System Workflows", "PL/SQL", "Enterprise Resiliency", "Cross-Functional Collaboration"]
    }
  ],

  featuredProduct: {
      id: "financial-model-analyzer",
      featured: true,
      tag: "AI Product / Equity Research",
      category: "AI & Software Systems",
      title: "Financial Model Impact Analyzer: AI Decision-Support for Equity Research",
      subtitle: "Connecting management commentary and analyst notes directly to forecast assumptions and Excel financial models.",
      award: "Featured AI Product",
      team: "Solo Creator (Arnav Okhade)",
      productPrinciple: "Surface what needs attention - don't make the decision for the analyst.",
      techStack: ["Python", "Google Gemini", "OpenPyXL", "PyMuPDF", "Streamlit"],
      liveDemo: "https://financial-model-impact-agent.streamlit.app/",
      executiveSummary: "Financial Model Impact Analyzer is an AI-powered decision-support tool engineered for equity research analysts. Following corporate earnings releases and broker note publications, analysts spend hours manually cross-referencing disclosures with complex spreadsheet models to determine which forward-looking assumptions need revision. This AI agent connects qualitative commentary directly to specific forecast assumptions and Excel cells, explaining the rationale, citing source pages, and tracing downstream formula impacts while adhering strictly to the core principle: Surface what needs attention; don't make the decision for the analyst.",
      heroMetrics: [
        { label: "Multi-Source Analysis", value: "3 Streams" },
        { label: "Impact Detection", value: "Cell-Level" },
        { label: "Dependency Tracing", value: "Downstream" },
        { label: "Control Paradigm", value: "Human-in-Loop" }
      ],
      sections: {
        problem: {
          title: "The Problem: Manual Cross-Referencing in Equity Research",
          points: [
            "Equity research analysts manually cross-reference 50+ page earnings call transcripts, broker research notes, and financial models to determine which forward-looking assumptions need to be revisited after new information emerges.",
            "Identifying affected assumptions is slow, cognitively exhausting, and prone to overlooking subtle guidance nuances buried in executive Q&A commentary.",
            "Traditional financial tools search text in isolation without connecting qualitative remarks to cell-level spreadsheet driver dependencies."
          ]
        },
        context: {
          title: "Workflow Context & The Need for Explainable Intelligence",
          points: [
            "Financial models are fragile ecosystems where a small tweak to an assumption cascades through revenue builds, operating margins, and discounted cash flow valuations.",
            "Analysts cannot afford black-box AI tools that silently modify cells without verifiable citations, human oversight, and clear audit trails."
          ]
        },
        research: {
          title: "Target User Research & Core Product Principle",
          points: [
            "Interviewed equity research analysts and financial modeling associates to map their quarter-end triage process.",
            "Established the core product principle: 'Surface what needs attention - don't make the decision for the analyst.'",
            "Discovered that analysts require: 1) Multi-source synthesis, 2) Cell-level precision, 3) Complete visibility into downstream formula impacts, and 4) Clear distinction between historical actuals and forecast periods."
          ]
        },
        constraints: {
          title: "Technical Constraints & Guardrails",
          points: [
            "Historical vs Forecast Boundary: The agent must strictly respect historical data integrity and avoid recommending any modifications to historical actuals.",
            "Complex Excel Formula Dependencies: Parsing OpenPyXL cell dependency graphs to trace how changes in inputs ripple to EBITDA, EPS, and price targets.",
            "Zero Hallucination Mandate: Recommendations must provide unambiguous rationale, quoted text, and verifiable transcript page numbers."
          ]
        },
        decisionMaking: {
          title: "Architectural Decisions & Trade-offs",
          points: [
            "Decision-Support Over Full Automation: Chose human-in-the-loop review over automated spreadsheet editing to build user trust in high-stakes finance.",
            "Specialized Document Ingestion Pipeline: Utilized PyMuPDF for high-fidelity extraction of transcripts and broker notes, coupled with OpenPyXL for deep spreadsheet AST parsing.",
            "Grounded Reasoning Engine: Orchestrated Google Gemini to map natural language statements directly to spreadsheet coordinate coordinates."
          ]
        },
        solution: {
          title: "Key Capabilities & System Architecture",
          points: [
            "📄 Multi-Source Analysis: Concurrently evaluates earnings call transcripts, broker analyst research notes, and live Excel (.xlsx) financial models.",
            "🎯 Cell-Level Impact Detection: Identifies potentially affected forecast cells and maps qualitative guidance directly to model drivers.",
            "🔗 Dependency Tracing: Automatically traces assumptions through mathematical formulas to downstream model outputs like net income and valuation.",
            "🔍 Explainable Recommendations: Outputs structured recommendations featuring comprehensive rationale + evidence + transcript page citations.",
            "🧠 Historical vs Forecast Awareness: Automatically avoids recommending changes to historical actuals, focusing exclusively on forward forecast years.",
            "👤 Human-in-the-Loop Interface: Clean Streamlit application flags areas for review, enabling the analyst to inspect, accept, or reject recommendations."
          ]
        },
        outcome: {
          title: "Quantified Value & Capabilities Delivered",
          points: [
            "Compressed post-earnings financial model triage from several hours to minutes.",
            "Achieved cell-level precision with verifiable page-number citations for every assumption flagged.",
            "Successfully proved the power of combining multi-source document intelligence with spreadsheet dependency graphs."
          ]
        },
        learnings: {
          title: "PM Learnings & Retrospective",
          points: [
            "Principle-Driven Design Wins: Adhering to 'Surface what needs attention - don't make the decision for the analyst' resolved the trust deficit common in AI financial tools.",
            "Multi-modal reasoning across text documents and structured formula tables is the future of enterprise decision-support software."
          ]
        }
      }
    },

  caseStudies: [
    {
      id: "heal-2025",
      title: "Transforming Healthcare Supply Chains via Control Tower & Federated Procurement",
      subtitle: "AGI Growth X  -  HEAL 2025 | National 1st Runner-Up (500+ Teams)",
      tag: "Operations & HealthTech PM",
      category: "Operations & Strategy",
      featured: true,
      award: "National 1st Runner-Up • AGI Growth X (HEAL 2025)",
      team: "Arnav Okhade, Bhanu Prakash Singhal, Diya Modi (Team Stagnant)",
      heroMetrics: [
        { label: "Recurring Impact", value: "₹78.45 Cr/yr" },
        { label: "Inventory Days", value: "50 → 35 Days" },
        { label: "Year-1 ROI", value: "8.13×" },
        { label: "Payback Period", value: "1.48 Months" }
      ],
      executiveSummary: "Architected a group-wide supply chain transformation for Kenya's largest healthcare group (64 clinics, 6 hospitals, 4 fertility centers). Replaced fragmented silo purchasing with a hybrid 'Federated Control Tower' model, an 'Airbnb-style' inter-unit stock exchange, and a Kraljic category strategy - releasing ₹31.19 Cr in working capital and generating ₹78.45 Cr in annual recurring value.",
      sections: {
        problem: {
          title: "1. Problem & Core Friction",
          points: [
            "Severe Working Capital Lockup: Kenya's largest healthcare network maintained an average of 50 inventory days (Clinics: 54, Hospitals: 47, Fertility: 51) against a benchmark of 35 days, tying up ₹103.97 Cr (KES 160M) in closing stock.",
            "High Clinical Risk & Expiry Losses: ₹26.57 Cr annual expiry baseline (~3.5% of spend); 45% stockout risk in essential medicines and 25% global cold chain failure risk threatening life-saving IVF and surgical procedures.",
            "Broken Vendor Terms: 90+ day payment delays led to vendor distrust, erratic price hikes, refusal to commit to delivery schedules, and loss of group volume leverage."
          ]
        },
        context: {
          title: "2. Context & Baseline Operating Model",
          points: [
            "Healthcare Ecosystem Scale: 64 Outpatient Clinics (centralized store, manual consumption forecasting), 6 Multi-Specialty Hospitals (hybrid rate contracts + ad-hoc PR-RFQ), and 4 Fertility Clinics (zero-tolerance for hormone/IVF stockouts).",
            "Total Annual Procurement Spend: ₹759 Cr (KES 1,150 Million) at conservative 0.66 ₹/KES exchange rate.",
            "Siloed Purchasing: Units purchased identical items independently at wildly fluctuating prices without cross-unit visibility."
          ]
        },
        research: {
          title: "3. Research & Root-Cause Discovery",
          points: [
            "Clinical Persona Mapping: Hospital administrators hoarded inventory as an insurance policy against lead-time uncertainty, creating artificial demand spikes.",
            "Information Asymmetry: No centralized dashboard existed to track vendor spend, batch expiry dates, or PR-to-PO cycle efficiency across business units.",
            "Uniform Procurement Trap: Critical surgical drugs were subjected to the same manual approval workflows as non-critical stationery, stretching procurement teams thin."
          ]
        },
        constraints: {
          title: "4. Constraints & Real-World Boundaries",
          points: [
            "Zero Clinical Downtime: Stockouts of IVF hormones, surgical implants, and emergency cold-chain reagents carry life-or-death implications.",
            "Ground-Level Tech Adoption: 500+ distributed clinic staff required lightweight, low-friction mobile tools rather than heavy, complex enterprise ERP overhauls.",
            "Vendor Cash Flow Constraints: Vendors refused strict delivery SLAs without binding guarantees of faster payment cycles."
          ]
        },
        decisionMaking: {
          title: "5. Decision Making & Strategic Trade-Offs",
          points: [
            "Rejected Pure Centralization: Would create a rigid operational bottleneck, causing emergency drug stockouts in remote clinics.",
            "Rejected Pure Decentralization: Would perpetuate duplicate purchasing, zero volume discounts, and chaotic rogue spend.",
            "Chosen Strategic Wedge: A 'Federated Procurement Model' governed by a digital 'Control Tower' (Air Traffic Control for clinical procurement), providing central contracting strength while preserving unit autonomy.",
            "Prioritization Matrix: Green Channel payment rails prioritized first for the top 20 critical suppliers to secure supply reliability before scaling."
          ]
        },
        solution: {
          title: "6. Solution Architecture & Product Blueprint",
          points: [
            "Control Tower Dashboard: Real-time metrics monitoring vendor spend trends, unit-level inventory days, batch expiry countdowns, and PO cycle bottlenecks.",
            "Kraljic Category Strategy Playbooks: Strategic Items (IVF/implants: 40-45 day buffer, multi-year SLAs), Leverage Items (consumables: bulk tenders, 15-20 days lean stock), Bottleneck Items (cold-chain: Vendor-Managed Inventory VMI), Non-Critical Items (office supplies: outsourced to B2B e-aggregators).",
            "Airbnb-Style Inter-Unit Stock Exchange: Lightweight WhatsApp bot and web module allowing units with surplus stock nearing expiry to transfer inventory internally before external reordering.",
            "Traffic-Light Requisition Logic: Green (routine automated approval), Amber (upcoming priority review), Red (emergency shortage fast-track)."
          ]
        },
        outcome: {
          title: "7. Quantified Business Impact & Financial ROI",
          points: [
            "₹31.19 Cr Working Capital Released: Direct result of slashing group inventory from 50 → 35 days.",
            "₹45.54 Cr/yr Group Procurement Savings: 6% price reduction unlocked via group-wide rate contracts.",
            "₹8.50 Cr/yr Expiry Waste Reduction: 32% cut in annual product obsolescence and expired drugs.",
            "₹1.72 Cr/yr Carrying Cost Savings: Reduced storage, insurance, and handling overhead at 5.5% carrying rate.",
            "Total Annual Recurring Impact: ₹78.45 Cr/yr against a ₹9.65 Cr one-time setup cost (8.13× Year-1 ROI | 1.48-Month Payback)."
          ]
        },
        learnings: {
          title: "8. Learnings & PM Retrospective",
          points: [
            "Financial incentives outperform contractual penalties: Offering Green Channel vendors 30 - 45 day payment rails unlocked voluntary price discounts and guaranteed SLAs.",
            "Mobile-first vernacular workflows drive compliance: A simple WhatsApp-based stock exchange bot drove higher adoption than a bulky ERP requisition portal."
          ]
        }
      }
    },

    {
      id: "nothing-2025",
      title: "Nothing Skins: Turning Smartphones into Living Canvases (Tech + Fashion + Community)",
      subtitle: "Nothing Incubator 2025 | National Semifinalist (Top 1.6% / 10,000+ Teams)",
      tag: "0-to-1 Consumer Tech & Hardware Ecosystem",
      category: "Consumer Tech & Hardware",
      featured: true,
      award: "National Semifinalist (Top 150 / 10,000+ teams) • Nothing Incubator 2025",
      team: "Team We Something (Arnav Okhade, et al.)",
      heroMetrics: [
        { label: "Hardware Gross Margin", value: "~55%" },
        { label: "Creator Rev-Share", value: "70 / 30" },
        { label: "Yr-3 Projected Rev", value: "₹806 Cr" },
        { label: "Blended ARPU", value: "₹1,059" }
      ],
      executiveSummary: "Addressed peak smartphone hardware commoditization by transforming smartphones into dynamic, multi-sensory canvases bridging E-ink back panel visual skins, Glyph light animations, playful soundscapes, and a 70/30 Roblox-style UGC creator marketplace.",
      sections: {
        problem: {
          title: "1. Problem & Human Truth",
          points: [
            "Smartphone Commoditization: Mobile hardware has become a static, homogeneous black rectangle; physical device personalization is rigid and lacklustre.",
            "Human Truth: Devices are extensions of identity. People change outfits, music, and moods daily, but their smartphones remain immutable.",
            "Data Hook: 80% of consumers are willing to pay a premium for personalized products; 74% of Gen Z explicitly demand tech that reflects their dynamic personality."
          ]
        },
        context: {
          title: "2. Context & Persona Mapping",
          points: [
            "Target Audience: Gen Z (18 - 25) and Millennials (26 - 35) accustomed to virtual skin economies in gaming (Fortnite, Roblox) and digital creator ecosystems.",
            "Persona 1 - Aarav (25, Creator/Student): Craves distinct anime/gaming aesthetics and wants to monetize personal art across thousands of devices.",
            "Persona 2 - Meera (27, Management Consultant): Demands understated, professional minimalism by day (LinkedIn mode) and vibrant neon energy by night.",
            "Persona 3 - Kaito (23, K-Pop/Gamer): Wants light and audio synchronization with concerts, fandoms, and gaming cues."
          ]
        },
        research: {
          title: "3. Research & Product Reframe",
          points: [
            "Core Product Reframe: 'Don't build another disposable software app. Make the device itself expressive, adaptive, and tactile.'",
            "Willingness-to-Pay Data: High appetite for modular physical accessories paired with micro-transactions (₹99 - 299 per digital theme pack)."
          ]
        },
        constraints: {
          title: "4. Constraints & Technical Feasibility",
          points: [
            "Hardware Cost & Tooling Risk: Tooling a brand-new phone chassis is cost-prohibitive and risky for a fast-moving sub-brand.",
            "Power Consumption Ceiling: Continuous display changes must not drain battery life.",
            "IP & Content Moderation: User-Generated Content (UGC) marketplace requires automated copyright/NSFW detection with <24h moderation SLAs."
          ]
        },
        decisionMaking: {
          title: "5. Decision Making & Strategic Trade-Offs",
          points: [
            "Modular Smart Case First: Started with an external smart case featuring a low-cost E-ink panel ($3 - 5 BOM) and BLE controller, keeping NRE low and de-risking user adoption before integrating into Nothing Phone back glass.",
            "Leveraging Native Glyph Hardware: Extended Nothing's existing LED Glyph lights via firmware and app APIs, requiring zero incremental hardware cost for light skins.",
            "Creator-First Flywheel: Implemented a 70/30 creator revenue split to cultivate an indie designer ecosystem that acts as a decentralized marketing engine."
          ]
        },
        solution: {
          title: "6. Solution Architecture: 4-Layer Sensory Stack",
          points: [
            "Visual Skins (E-Ink Smart Case): Ultra-low power dynamic E-ink display with 1-tap profile switching (Work Minimalist → Night Party).",
            "Light Skins (Glyph Animation Themes): Preset animations (Aurora, Cyberpunk, Pixel Arcade), music sync, and group sync modes.",
            "Sound Skins (Contextual Audio): Playful 8-bit retro audio, nature soundscapes, and exclusive artist drops (e.g. 'Nothing × AR Rahman').",
            "Skin Hub App & Marketplace: In-app design canvas with SVG/PNG import, AR preview, hash-matching copyright moderation, and creator monetization."
          ]
        },
        outcome: {
          title: "7. Business Model & Financial Projections",
          points: [
            "Hardware Economics: Case BOM: ₹1,415 | Retail Price: ₹4,000 | Channel Cut: ₹800 | Net to Nothing: ₹3,200 (~55% gross margin).",
            "Digital Monetization: ₹99 - 299 premium packs (70% creator / 30% Nothing); ₹149/mo 'Nothing+ Pass' subscription for unlimited drops.",
            "Scaled Projections: Year 1: ₹80.6 Cr (25k cases) → Year 2: ₹403 Cr (125k cases) → Year 3: ₹806 Cr (250k cases + ₹11 Cr digital revenue).",
            "Blended ARPU: ₹1,059 with 25% case attach rate and healthy digital gross margins (~70%)."
          ]
        },
        learnings: {
          title: "8. Learnings & PM Retrospective",
          points: [
            "Preventing the 'Gimmick Trap': Solved feature fatigue by designing tasteful default profiles (automatic Work Mode) and relying on community UGC to drive long-tail variety.",
            "Physical + Digital Lock-in: Pairing modular physical hardware with recurring digital content drops produces a defensible consumer tech moat."
          ]
        }
      }
    },

    {
      id: "policython-2025",
      title: "RAIL: Responsible AI Dynamic Lending Protocol & Stress Governance",
      subtitle: "Policython (QCI × MDI Murshidabad - MANTHON 2025) | National Finalist (Top 28 Teams)",
      tag: "Responsible AI & FinTech Risk Governance",
      category: "FinTech & Banking",
      featured: true,
      award: "National Finalist (Top 28 Teams Nationally) • Policython 2025",
      team: "Team D'Ciphers (Arnav Okhade, et al. - IIM Kashipur)",
      heroMetrics: [
        { label: "Liquidity Preserved", value: ">70%" },
        { label: "AI Override Ratio", value: "<5%" },
        { label: "Explainability", value: "100% SHAP" },
        { label: "Income Fairness Gap", value: "≤5%" }
      ],
      executiveSummary: "Designed an auditable governance framework and reverse stress-testing methodology for an AI-driven dynamic lending engine deployed across a Credit Union Consortium during global liquidity shocks, establishing tiered autonomy and algorithmic circuit breakers.",
      sections: {
        problem: {
          title: "1. Problem & Systemic Risk",
          points: [
            "Liquidity Shock Contagion: Global commodity spikes and geopolitical sanctions freeze wholesale interbank credit lines.",
            "Unconstrained AI Panic: Algorithmic lending engines proactively slashing credit limits and hiking rates create domino defaults and catastrophic panic withdrawals among credit union members.",
            "Black-Box Opacity: Lack of explainability violates safety, soundness, and anti-discrimination mandates."
          ]
        },
        context: {
          title: "2. Context & Cooperative Mission",
          points: [
            "Credit Union Consortium providing small-dollar installment loans under regulatory oversight (RBI / QCI).",
            "Balancing institutional liquidity preservation with cooperative member protection and fair lending missions."
          ]
        },
        research: {
          title: "3. Research & Root-Cause Systems Analysis",
          points: [
            "Fishbone Analysis: Systemic failure stems from interlocking Algorithmic Gaps (model drift, opaque logic), Institutional Gaps (weak cross-CU coordination), and Social Gaps (low AI literacy, member panic)."
          ]
        },
        constraints: {
          title: "4. Constraints & Regulatory Guardrails",
          points: [
            "100% Explainability Mandate: Every automated loan adjustment must produce regulator-auditable SHAP/LIME logs.",
            "Zero Mass Exclusion: Mission constraints prohibit blanket credit freezes on vulnerable member cohorts."
          ]
        },
        decisionMaking: {
          title: "5. Decision Making & Tiered Autonomy",
          points: [
            "Replaced Unchecked AI with Tiered Rules of Engagement:",
            "Allowed (Automated): Credit limit changes ≤10% or tenor extensions ≤3 months.",
            "Constrained (Human Review): Adjustments of 10 - 15% flagged for CU Credit Committee review within a 48-hour SLA.",
            "Forbidden (Hard Override): Automatic negative cancellations strictly forbidden; mandates restructuring relief.",
            "Universal Hard Caps: Maximum 14% real APR; maximum 10% EMI increase."
          ]
        },
        solution: {
          title: "6. Solution Architecture: Trigger → Tier → Govern",
          points: [
            "Trigger Layer: Ingests real-time macro metrics (REPO spikes >30%, interbank spreads).",
            "Governance Stack: AI Risk Committee (ARC) + CU-Level Credit Committee + Audit & Explainability Unit.",
            "Reverse Stress-Testing Sandbox: Simulates severe black-swan crises (40% delinquency surge, MSME collapse) to identify algorithmic breaking points before deployment."
          ]
        },
        outcome: {
          title: "7. Quantified Risk & Governance KPIs",
          points: [
            ">70% Liquidity Preserved during severe stress (vs ~55% baseline).",
            "<5% AI Override Ratio, verifying rule calibration.",
            "≤5% Fairness Disparity across income cohorts (down from 14%).",
            "Low-cost 3-month pilot footprint (₹9 - 16 Lakhs)."
          ]
        },
        learnings: {
          title: "8. Learnings & PM Retrospective",
          points: [
            "Algorithmic decision engines must never operate without institutional circuit breakers in high-stakes financial ecosystems."
          ]
        }
      }
    },

    {
      id: "reliance-2025",
      title: "Smart Cradle: Reusable IoT Frame & Ground-Worker Incentive Architecture",
      subtitle: "Reliance Retail The Idea Buzz 2025 | National Semifinalist (Top 32 / 3,000+ Teams)",
      tag: "Physical Ops Tech & Supply Chain Product Operations",
      category: "Operations & Strategy",
      featured: true,
      award: "National Semifinalist • Reliance Retail (The Idea Buzz 2025)",
      team: "Team BuzzerThinkers (Arnav Okhade, Bhanu Prakash Singhal, Nikunj Pandey, Neha Goundadkar)",
      heroMetrics: [
        { label: "Annual Damage Prevention", value: "₹10 - 15 Cr" },
        { label: "Pilot Hub ROI", value: "64%  -  122%" },
        { label: "Damage Reduction", value: "40%  -  60%" },
        { label: "Cradle Lifespan", value: "50 - 80 Trips" }
      ],
      executiveSummary: "Eliminated a ₹20 - 30 Lakh loss per 10k deliveries in large appliance transit by designing a reusable bamboo-polymer Smart Cradle with SpotSee tilt indicators, QR/NFC touchpoint logging, and a 7-module vernacular worker training and micro-incentive protocol.",
      sections: {
        problem: {
          title: "1. Problem & Real-World Loss",
          points: [
            "Transit Damage Financial Drain: 7% transit damage across 6 handling touchpoints (DC → Linehaul → Middle-Mile → Last-Mile → Customer), costing ₹20 - 30 Lakhs per 10,000 deliveries (~₹10 - 15 Cr annual loss).",
            "Vulnerable Appliance SKUs: Refrigerators (Samsung 301L: 321 damage cases; LG 322L: 159 cases) tilted >30° causing compressor fluid leakage and severe cosmetic dents.",
            "Zero Accountability: Subjective visual checks between loaders and drivers led to endless dispute cycles and high reverse-logistics return costs."
          ]
        },
        context: {
          title: "2. Context & Operational Journey",
          points: [
            "Reliance Retail Central Supply Chain operating across diverse distribution centres, congested urban streets, and rough rural road infrastructure.",
            "Multi-echelon handoffs involving loaders, hub supervisors, third-party logistics (3PL) drivers, and doorstep installation associates."
          ]
        },
        research: {
          title: "3. Research & Ground-Level Insights",
          points: [
            "Root Causes Identified: Improper manual lifting, lack of upright securing straps in trucks, and lack of clear standard operating procedures (SOPs).",
            "East and West zones recorded highest damage volume; lack of time-stamped touchpoint metrics prevented identifying exactly where damage occurred."
          ]
        },
        constraints: {
          title: "4. Constraints & Operational Boundaries",
          points: [
            "Unit Economics Cap: Solution must achieve rapid payback (<₹65 per delivery over 50 - 80 trips).",
            "Ground Worker Literacy & Speed: Solution cannot introduce cumbersome manual data entry that slows down high-velocity loading docks.",
            "Indian Road Conditions: Must absorb severe mechanical shock and vertical vibrations."
          ]
        },
        decisionMaking: {
          title: "5. Decision Making & Strategic Trade-Offs",
          points: [
            "Reusable Physical Cradle vs Disposable Packaging: Single-use foam and heavy cardboard were environmentally hazardous and failed to prevent internal mechanical tilts. Chose a reusable modular cradle.",
            "Passive Reactive Indicators vs Expensive Active IoT: Active cellular trackers ($50+/unit) were financially unfeasible; chose passive SpotSee TiltWatch indicators (₹80) paired with QR/NFC checkpoint scans, delivering 100% accountability at 1/10th the cost."
          ]
        },
        solution: {
          title: "6. Solution Architecture: 3-Tier Intervention",
          points: [
            "Modular Shock-Absorbing Smart Cradle (₹3,660 unit cost): Lightweight bamboo-polymer frame + EVA foam padding, resizable across multiple refrigerator and washer SKUs.",
            "Cradle-to-Customer Assurance: Appliance remains strapped inside the cradle until unboxed in the customer's presence, establishing immediate visual trust and eliminating false damage claims.",
            "7-Module Vernacular Training & Incentive Protocol: 1.5-hour hands-on visual training for DC staff with a ₹20 - 30 micro-bonus per damage-free delivery."
          ]
        },
        outcome: {
          title: "7. Quantified Financial ROI & Scaled Impact",
          points: [
            "Pilot Hub ROI (8 Cradles, 1 Hub): Delivered 64% to 122% ROI in Month 1 (preventing ₹48k - ₹65k in claims against a ₹42k investment).",
            "Scaled 10-Hub Deployment: ₹2.60 Lakhs/month Net Benefit | 38% Recurring Monthly ROI.",
            "Network Potential: Projected ₹10 - 15 Cr annual damage prevention across Reliance Retail with 40 - 60% reduction in customer return claims."
          ]
        },
        learnings: {
          title: "8. Learnings & Operational Retrospective",
          points: [
            "Empathy for the frontline worker is paramount: Hardware innovations only succeed when paired with vernacular training and micro-incentives that reward safe handling."
          ]
        }
      }
    },

    {
      id: "maq-speckit",
      title: "SpecKit: AI-Driven Requirement-to-Delivery Product Framework",
      subtitle: "Technical Product Management & AI Velocity | MAQ Software",
      tag: "AI Workflows & Engineering Velocity",
      category: "AI & Software Systems",
      featured: false,
      award: "Enterprise Engineering Excellence • MAQ Software",
      team: "Arnav Okhade (Associate Technical Project Manager)",
      heroMetrics: [
        { label: "Cycle Effort Reduction", value: "70%" },
        { label: "Engineering Throughput", value: "3.3×" },
        { label: "Hours Saved / 10 CRs", value: "~35 hrs" },
        { label: "Asset Visibility", value: "70+ Assets" }
      ],
      executiveSummary: "Designed and implemented SpecKit-driven structured AI workflows at MAQ Software, slashing Power Pages enhancement cycle time by 70% and boosting engineering throughput by 3.3× across 40+ engineers with automated PR compliance and ADO governance.",
      sections: {
        problem: {
          title: "1. Problem & Delivery Bottlenecks",
          points: [
            "Ambiguous Requirement Specifications: Change requests (CRs) suffered repeated back-and-forth clarification cycles between clients and developers.",
            "Rework & Friction: Developers spent up to 35 hours per 10 change requests re-writing boilerplate components and debugging compliance discrepancies."
          ]
        },
        context: {
          title: "2. Context & Enterprise Scale",
          points: [
            "40+ member cross-functional team supporting 70+ live enterprise reporting assets and Power Pages web portals."
          ]
        },
        research: {
          title: "3. Research & Root-Cause Friction",
          points: [
            "Analyzed historical sprint retrospectives: 65% of sprint delay was attributable to underspecified edge cases and fragmented component documentation."
          ]
        },
        constraints: {
          title: "4. Constraints & Enterprise Standards",
          points: [
            "Strict security & PR compliance standards; code generation could not bypass human code review or automated quality gates."
          ]
        },
        decisionMaking: {
          title: "5. Decision Making & Framework Architecture",
          points: [
            "Created 'SpecKit': A standardized prompt and specification synthesis framework that converts raw client briefs into structured specifications, automated test cases, and modular template components."
          ]
        },
        solution: {
          title: "6. Solution Architecture",
          points: [
            "SpecKit Prompt-to-Workflow Pipeline: Ingests unstructured client requests and outputs structured acceptance criteria and API schemas.",
            "Reusable Implementation Component Library: Pre-validated UI and data binding modules.",
            "Azure DevOps Real-Time Governance Dashboard: Tracking PR compliance, cycle velocity, and active sprint health."
          ]
        },
        outcome: {
          title: "7. Quantified Productivity Impact",
          points: [
            "70% reduction in Power Pages enhancement effort.",
            "3.3× boost in engineering throughput, saving ~35 hours per 10 change requests.",
            "100% audit visibility across 70+ enterprise reporting assets."
          ]
        },
        learnings: {
          title: "8. Learnings & PM Retrospective",
          points: [
            "AI is most effective when integrated into structured human-in-the-loop workflows rather than isolated black-box chat interfaces."
          ]
        }
      }
    },

    {
      id: "tata-steel-2025",
      title: "Opening New Doors: 5-Lever Strategy to Double TATA Pravesh Retail Business",
      subtitle: "Tata Steel Steel-a-thon Season XII 2025 | RustProof Innovators",
      tag: "B2B2C Product Strategy & Channel Transformation",
      category: "Operations & Strategy",
      featured: false,
      award: null,
      team: "RustProof Innovators (Arnav Okhade, Bhanu Prakash Singhal, Rahul Batavia)",
      heroMetrics: [
        { label: "Topline Growth", value: "+₹7 - 10 Cr/mo" },
        { label: "Delivery Lead Time", value: "60d → ≤10d" },
        { label: "Sales Multiplier", value: "2.0 - 2.5×" },
        { label: "COGS/Logistics Cut", value: "10 - 15%" }
      ],
      executiveSummary: "Overcame a 60 - 75 day Made-to-Order bottleneck for Tata Pravesh steel doors by designing a Hybrid MTS/MTO Postponement Model, an escrow-based T+0 digital split-pay engine, dealer display co-funding, and inside sales pods to double retail throughput.",
      sections: {
        problem: {
          title: "1. Problem & Growth Bottlenecks",
          points: [
            "Crippling Lead Times: Pure Made-to-Order (MTO) structure caused a 60 - 75 day order-to-installation cycle, creating severe customer and dealer dissonance.",
            "Low Funnel Conversion: 7,000 monthly inquiries generated only 700 conversions (10% conversion rate) due to weak digital lead qualification.",
            "Channel Dissatisfaction: Dealers earned only ~₹15k/month with high consultative sales overhead over 2 - 3 months."
          ]
        },
        context: {
          title: "2. Context & Market Dynamics",
          points: [
            "Tata Steel's strategic goal to achieve 20% downstream non-cyclical revenue. Targeting Individual House Builders (IHBs) in Tier 2/3 cities within India's $16.4B door/window market."
          ]
        },
        research: {
          title: "3. Research & Behavioral Barriers",
          points: [
            "Wood-to-Steel Mental Barrier: Consumers default to traditional wooden doors; steel was perceived as industrial.",
            "Channel Conflict: Traditional steel dealers (Tiscon) prioritize rebar volume over experiential retail selling."
          ]
        },
        constraints: {
          title: "4. Constraints & Channel Realities",
          points: [
            "Custom SKU Explosion: Doors and windows have hundreds of custom sizes, finishes, and swing configurations.",
            "Dealer Liquidity: Dealers cannot afford to lock working capital in expensive physical stock."
          ]
        },
        decisionMaking: {
          title: "5. Decision Making & Postponement Strategy",
          points: [
            "Hybrid MTS + MTO Postponement: Standardized top 10 - 15 SKUs (70% demand) for central fabrication, while customizing finish, glazing, and swing at regional microhubs (Lucknow, Pune, Bhubaneswar, Kochi).",
            "Inside Sales Pods vs Costly AR Apps: Deployed inside video consults and photo-upload chatbots to pre-qualify leads before dispatching on-ground executives."
          ]
        },
        solution: {
          title: "6. Solution Architecture: 5 Strategic Levers",
          points: [
            "Ready Pravesh (10-Day QuickShip): Slashed lead times from 60 - 75 days to ≤10 days for standardized SKUs.",
            "Unified Checkout & T+0 Split-Pay: Tata Aashiyana escrow auto-splits payments to dealer, distributor, and TSL upon order with embedded EMI options.",
            "Wood-to-Steel Conversion Drive: 10-year Total Cost of Ownership (TCO) savings calculator + 'Feel the Steel' physical slam kits.",
            "Dealer Profitability Plan: 50% display co-funding, consignment SKUs, and service revenue share on SmartCare installations & AMCs."
          ]
        },
        outcome: {
          title: "7. Quantified Business Impact",
          points: [
            "+₹7 - 10 Cr/month Topline Uplift (2.0 - 2.5× retail sales increase to ~1,400 customers/month).",
            "10 - 15% COGS and logistics cost reduction via regional postponement.",
            "₹2 - 4 Cr Working Capital released via digital escrow and lower DSO.",
            "30 - 40% reduction in sales cost per closed order."
          ]
        },
        learnings: {
          title: "8. Learnings & PM Retrospective",
          points: [
            "Operational lead times dictate market conversion: In physical retail, marketing campaigns are useless if delivery lead-times exceed 2 months."
          ]
        }
      }
    },

    {
      id: "idfc-2025",
      title: "Becoming the Primary Bank for Affluent Indian Households (Family-First HNI Sourcing)",
      subtitle: "IDFC FIRST Bank FAME 5.0 | Track 4: Retail Liabilities & Privilege Banking",
      tag: "FinTech & Wealth Management Product Strategy",
      category: "FinTech & Banking",
      featured: false,
      award: null,
      team: "Team Defame (Arnav Okhade, Bhanu Prakash Singhal, Diya Modi)",
      heroMetrics: [
        { label: "Net Contribution / Family", value: "₹50,240/yr" },
        { label: "Maintenance Adherence", value: "85%+" },
        { label: "Blended CAC", value: "₹22,000" },
        { label: "Scaled Net Impact", value: "₹100.5 Cr" }
      ],
      executiveSummary: "Tackled multi-banking fragmentation among affluent Indian families (where 70% bank across 3+ institutions) by architecting an Account Aggregator-powered HPES multi-signal scoring engine, pooled Family Banking Bundles, real-time in-app perk throttling (BLMS), and a 10-day Concierge Switch-In migration service.",
      sections: {
        problem: {
          title: "1. Problem & Market Paradox",
          points: [
            "Multi-Banking Fragmentation: 70% of Indian HNI families bank across 3 - 4 different institutions (Father at HDFC, Mother at ICICI, Child's SIP at Axis, Grandparents at SBI). No single bank commands primary status.",
            "Severe CAC Leakage & Benefit Misuse: 30 - 35% of premium sign-ups churn or downgrade within 6 months; banks bleed ₹8,000 - 12,000/family annually on unmonitored airport lounge and concierge perks without maintaining revenue-generating balances.",
            "Misaligned Field Incentives: Relationship Managers are incentivized on upfront account openings rather than sustained AUM depth."
          ]
        },
        context: {
          title: "2. Context & HNI Wealth Opportunity",
          points: [
            "Indian HNI Market: ₹3.5 - 4.0 Lakh Crore expanding at 10 - 12% CAGR (8.6 Lakh families in 2024 growing to 9.4 Lakh by 2028).",
            "IDFC FIRST Privilege Tiers: FIRST Select (Family RV ₹10 - 25L), FIRST Wealth (RV ₹50L - 1.5Cr), FIRST Private (RV ₹3 - 5Cr).",
            "The Opportunity: Tapping into the underserved Next-Gen (<35 yrs) and Tier 2/3 affluent families through transparent, relational banking."
          ]
        },
        research: {
          title: "3. Research & Core Friction Insights",
          points: [
            "Opaque Rules Damage Trust: Customers dislike sudden surprise perk cancellations and lack visibility into tier maintenance criteria.",
            "High Switching Inertia: Affluent customers do not port salary mandates, SIPs, or billers because manual banking migration takes months.",
            "Transactional vs Relational Experience: Existing banking apps are single-user and transactional, completely lacking a unified Family Net Worth view."
          ]
        },
        constraints: {
          title: "4. Constraints & Regulatory Boundaries",
          points: [
            "DPDP Act & Data Privacy: Account Aggregator data sharing requires explicit, auditable consent.",
            "AML & KYC Scrutiny: Strict profiling required to prevent high-risk wealth laundering.",
            "Perk Unit Economics: Perk expenditure must be firmly capped below ₹8,000/family/year to preserve net interest margin."
          ]
        },
        decisionMaking: {
          title: "5. Decision Making & Strategic Architecture",
          points: [
            "Replaced Simple AMB/TRV with Multi-Signal HPES: Created a 100-point HNI Propensity & Eligibility Score (balances, income stability, CIBIL, investment velocity) powered by Account Aggregator data.",
            "Family-First Pooling: Shifted maintenance criteria from single individuals to pooled household metrics under one Family ID.",
            "Automated Fairness Loop: Transparent in-app 'Maintenance Meter' with 90-day grace periods rather than punitive sudden downgrades."
          ]
        },
        solution: {
          title: "6. Solution Architecture: 5-Pillar System",
          points: [
            "HPES Scoring Engine: Multi-signal algorithmic lead scorecard filtering out dead leads and freeloaders at entry.",
            "Family Banking Bundle (FBB): Shared benefits and pooled relationship value; RM elevated to 'Family CFO' incentivized on household product depth.",
            "Benefits Ledger & Misuse Shield (BLMS): In-app real-time counter for lounge passes and forex waivers; dynamic 50% throttling when maintenance dips below 80%.",
            "Concierge Switch-In Service: White-glove ops workflow porting salary mandates, SIPs, and billers into IDFC within 7 - 10 days.",
            "Curated Acquisition Channels: 60% Member Referrals (₹18k CAC), 25% Vetted CA/Wealth Partner Network (₹28k CAC), 15% Digital Lookalike (₹25k CAC)."
          ]
        },
        outcome: {
          title: "7. Quantified Unit Economics & Financial Impact",
          points: [
            "High-Yield Unit Economics: Average Family AUM: ₹45 Lakhs | Annual Revenue: ₹92,240 | Annual Cost: ₹42,000 | Net Contribution: ₹50,240/year (54% margin).",
            "6-Month Pilot (2,000 HNI Families in Delhi, Mumbai, Bengaluru): Generated ₹9.22 Cr Revenue, ₹5.02 Cr Net Contribution (₹10.05 Cr annualized) with ≥75% maintenance adherence.",
            "Scaled Portfolio Net Impact: ₹100.48 Cr net contribution across 20,000 families; perk spend stabilized at ≤₹8k/family/year.",
            "Product Depth & Retention: Increased products per family from 2.0 → 3.0 in 12 months with churn maintained ≤10%."
          ]
        },
        learnings: {
          title: "8. Learnings & Strategic Retrospective",
          points: [
            "Transparency builds retention: Showing customers exactly why perks are active or throttled converts benefit entitlement into healthy account maintenance discipline.",
            "Removing switching friction is the ultimate GTM moat: The 10-day Concierge Switch-In service was the single biggest catalyst for primary bank adoption."
          ]
        }
      }
    },

    {
      id: "sbi-life-2025",
      title: "INSURELY: AI-Powered WhatsApp Micro-Insurance & Financial Inclusion",
      subtitle: "SBI Life IdeationX 2.0 | 25 Years of SBI Life",
      tag: "InsurTech & Conversational AI Inclusion",
      category: "FinTech & Banking",
      featured: false,
      award: "Innovation Finalist • SBI Life IdeationX 2.0",
      team: "PlanB Engineers (Arnav Okhade, Bhanu Prakash Singhal, Diya Modi)",
      heroMetrics: [
        { label: "LTV : CAC Ratio", value: "4.5 : 1" },
        { label: "Micro-Premium", value: "From ₹1/Day" },
        { label: "CAC Reduction", value: "₹250 vs ₹700" },
        { label: "Year-1 ROI", value: "6× on Spend" }
      ],
      executiveSummary: "Addressed India's 83% life insurance protection gap by transforming WhatsApp into an interactive insurance classroom, marketplace, and claims desk offering ₹1/day micro-policies, voice-note claims, and an Anganwadi/ASHA trust network.",
      sections: {
        problem: {
          title: "1. Problem & Protection Deficit",
          points: [
            "Massive Protection Gap: India's life insurance penetration is only 3.2% of GDP vs 7% global average; 83% protection deficit with 78% of rural India underpenetrated.",
            "High CAC & Friction: Traditional agent-led distribution costs ₹500 - 700 per policy with intimidating paperwork.",
            "Unclaimed Claims: 60% of rural insurance claims go unclaimed due to low literacy and complex filing procedures."
          ]
        },
        context: {
          title: "2. Context & WhatsApp Reach",
          points: [
            "300M+ eligible underserved Indians (gig workers, informal sector, rural families).",
            "WhatsApp is ubiquitous: 393M daily active users spending ~21 hours/month with built-in UPI payment capabilities."
          ]
        },
        research: {
          title: "3. Research & Behavioral Insights",
          points: [
            "Affordability & Bite-Sized Preference: Rural and gig workers resist ₹3,000 annual premiums but readily accept '₹10/day' or '₹1/day' micro-deductions.",
            "Trust Barrier: Word-of-mouth and female community influencers (Anganwadi/ASHA) drive significantly higher adoption than digital banner ads."
          ]
        },
        constraints: {
          title: "4. Constraints & Regulatory Guardrails",
          points: [
            "IRDAI Compliance: Mandatory Key Feature Documents (KFD), consent logs, and anti-mis-selling suitability checks.",
            "Low Digital Literacy: Must cater to semi-literate users via voice notes and regional scripts."
          ]
        },
        decisionMaking: {
          title: "5. Decision Making & Conversational UX",
          points: [
            "Zero App Download: Hosted entirely inside WhatsApp to eliminate app download and registration friction.",
            "Product Laddering: Start with micro-term life (₹1/day) → upgrade to accident/health (+₹50/mo) → child education."
          ]
        },
        solution: {
          title: "6. Solution Architecture: 5-Stage Journey",
          points: [
            "Awareness & Literacy: 1-min risk score quizzes, memes, and gamified streaks.",
            "Personalized Micro-Plans: 4 conversational questions matched to ₹50k - ₹2L cover with 1-click UPI inside WhatsApp.",
            "Voice-Note Claims: Aadhaar photo upload + voice-note claim filing with Amazon-style visual status tracking.",
            "Community Champions: Anganwadi/ASHA workers equipped with QR referral kits earning ₹20 - 30 per valid onboarding."
          ]
        },
        outcome: {
          title: "7. Quantified Financial Model & Unit Economics",
          points: [
            "Year 1 Revenue: ₹25 Cr (5 Lakh policies sold @ ₹500 avg premium) on a ₹4 Cr setup cost (6× Year-1 ROI).",
            "Superior Unit Economics: CAC slashed to ₹250 - 300 (vs ₹500 - 700 industry standard); 3-year LTV of ₹1,150 yielding a 4.5:1 LTV:CAC ratio.",
            "Claims TAT reduced to ≤7 days."
          ]
        },
        learnings: {
          title: "8. Learnings & PM Retrospective",
          points: [
            "Distribution wins the insurance game: Meeting consumers on the platform they already trust (WhatsApp) collapses adoption barriers."
          ]
        }
      }
    },

    {
      id: "strategic-mgmt-2025",
      title: "Unlocking ₹12,000 Cr Growth in the Indian Paint Industry (Ansoff Strategy & AR Packaging)",
      subtitle: "Strategic Management Research | IIM Kashipur (2025)",
      tag: "Business Strategy & Market Expansion",
      category: "Operations & Strategy",
      featured: false,
      award: "Academic Strategy Research • IIM Kashipur",
      team: "Arnav Okhade",
      heroMetrics: [
        { label: "Market Opportunity", value: "₹10,000 - 12,000 Cr" },
        { label: "Industry Size", value: "₹70,000+ Cr" },
        { label: "Eco Impact Cut", value: "40 - 60%" },
        { label: "Strategic Paths", value: "4-Path Ansoff" }
      ],
      executiveSummary: "Conducted an in-depth strategic analysis of the ₹70,000+ Cr Indian paint industry, identifying 6 major competitive risks and modeling a 4-path Ansoff growth strategy with AR visualization and recyclable packaging.",
      sections: {
        problem: {
          title: "1. Problem & Industry Volatility",
          points: [
            "Intense Price & Raw Material Volatility: Crude oil-linked input costs and aggressive new entrants (Grasim/Birla Opus) threatening incumbent profit margins in the ₹70,000+ Cr market.",
            "High Environmental Packaging Footprint: Single-use tin and plastic paint containers generating extensive landfill waste."
          ]
        },
        context: {
          title: "2. Context & Market Dynamics",
          points: [
            "Oligopolistic market dominated by Asian Paints, Berger, Kansai Nerolac, and AkzoNobel, undergoing severe disruption."
          ]
        },
        research: {
          title: "3. Research & Five-Forces Analysis",
          points: [
            "Identified 6 structural risks (raw material cost inflation, real estate cyclicality, dealer switching power) and 5 competitive moats (tinting machine network, dealer credit terms)."
          ]
        },
        constraints: {
          title: "4. Constraints & Channel Realities",
          points: [
            "Dealer Tinting Machine Lock-in: High switching friction for channel partners who have invested in proprietary tinting equipment."
          ]
        },
        decisionMaking: {
          title: "5. Decision Making & Strategic Modeling",
          points: [
            "Formulated a 4-path Ansoff Growth Matrix: Market Penetration (waterproofing expansion), Product Development (AR color visualizer + low-VOC bio paints), Market Development (Tier-3/4 rural distribution), Diversification (smart coatings for industrial solar panels)."
          ]
        },
        solution: {
          title: "6. Solution Recommendations",
          points: [
            "AR-Guided Home Visualizer: Reducing customer indecision cycles and sample tester waste.",
            "Closed-Loop Recyclable Packaging System: Refillable containers reducing environmental impact by 40 - 60%."
          ]
        },
        outcome: {
          title: "7. Strategic & Economic Impact",
          points: [
            "Quantified a ₹10,000 - 12,000 Cr addressable expansion opportunity across waterproofing and adjacent home aesthetics.",
            "40 - 60% reduction in packaging environmental footprint."
          ]
        },
        learnings: {
          title: "8. Learnings & Retrospective",
          points: [
            "Moats in commoditized chemical industries rely on dealer distribution lock-in and downstream customer service touchpoints."
          ]
        }
      }
    }
  ],

  frameworks: [
    {
      id: "fw-rice",
      name: "RICE Prioritization Framework",
      tagline: "Quantify roadmap trade-offs across Reach, Impact, Confidence, and Effort.",
      principles: [
        "Reach: Quantify the number of target users or transactions impacted within a defined sprint/quarter.",
        "Impact: Rate the incremental value delivered per user (from 0.25x minimal to 3x massive transformation).",
        "Confidence: Discount speculative assumptions using evidence tiers (50% gut, 80% qualitative data, 100% quantitative proof).",
        "Effort: Quantify total cross-functional capacity required in person-weeks or person-months.",
        "Formula: RICE Score = (Reach × Impact × Confidence) ÷ Effort."
      ],
      appliedIn: "Financial Model Impact Analyzer & MAQ Software Workflows"
    },
    {
      id: "fw-first-principles",
      name: "First-Principles Deconstruction",
      tagline: "Break complex ambiguity down to foundational truths before synthesizing solutions.",
      principles: [
        "Isolate physical & economic constraints from inherited industry assumptions.",
        "Quantify unit-level friction (e.g. lead time, dropoff % or claim cost) at every touchpoint.",
        "Rebuild the product workflow from zero based on fundamental user incentives."
      ],
      appliedIn: "Reliance Retail Smart Cradle & Tata Pravesh Postponement"
    },
    {
      id: "fw-ost",
      name: "Opportunity Solution Trees (OST)",
      tagline: "Structure problem spaces into clear branches connecting desired outcomes to hypotheses.",
      principles: [
        "Anchor on a single, measurable North Star business metric.",
        "Discover and map distinct customer friction points as opportunities.",
        "Generate multiple competing product experiments before committing capital."
      ],
      appliedIn: "Nothing Skins Ecosystem & AGI Growth X Control Tower"
    },
    {
      id: "fw-tiered-governance",
      name: "Tiered Autonomy & Responsible AI",
      tagline: "Design algorithmic systems with strict circuit breakers and explainability logs.",
      principles: [
        "Allowed: Low-risk automated changes executed in real-time.",
        "Constrained: Medium-risk thresholds routed to human committees with strict SLAs.",
        "Forbidden: Destructive actions blocked with hard regulatory and mission caps."
      ],
      appliedIn: "Policython RAIL Dynamic Lending Protocol"
    },
    {
      id: "fw-hpes-sourcing",
      name: "Multi-Signal Behavioral Scoring (HPES)",
      tagline: "Move beyond single static metrics (AMB/TRV) to holistic behavioral metrics.",
      principles: [
        "Aggregate multiple verified data streams (Account Aggregator, Bureau, Inflow Velocity).",
        "Pool household relationship value under unified family identifiers.",
        "Couple transparent maintenance meters with dynamic perk throttling."
      ],
      appliedIn: "IDFC FIRST Bank FAME 5.0 High-Potential HNI Sourcing"
    }
  ],

  academicLeadership: [
    {
      role: "Exchange Coordinator",
      organization: "International Relations Committee, IIM Kashipur (2024 - 2026)",
      details: [
        "Engaged with 800+ universities globally, onboarding 4 new elite institutional partners including TUM Germany and COPPEAD Brazil.",
        "Orchestrated exchange programs for 70+ students across 5 international partner universities.",
        "Executed IIM Kashipur Model United Nations (MUN) with 60+ delegates across 20+ colleges.",
        "Drafted and aligned 14+ MoUs with internationalization and academic collaboration mandates."
      ]
    },
    {
      role: "Convener & Co-Convener",
      organization: "Team Information, Souvenir & Control (ISC), NIT Hamirpur (2018 - 2022)",
      details: [
        "Led student executive committee operations, central coordination, and institutional relations across campus festivals.",
        "Managed 50+ student volunteers and cross-functional teams ensuring smooth logistics, information flow, and event governance."
      ]
    },
    {
      role: "Co-Coordinator",
      organization: "Team Finance & Treasury, NIT Hamirpur (2019 - 2021)",
      details: [
        "Managed financial planning, budgeting allocations, and treasury records across institutional student initiatives.",
        "Ensured compliance, expense auditing, and transparent sponsor fund disbursements for student body events."
      ]
    }
  ],

  certifications: [
    {
      name: "Strategy in a V.U.C.A World",
      issuer: "Alba Business School, Greece",
      desc: "Advanced strategic decision-making in volatile, uncertain, complex, and ambiguous markets."
    },
    {
      name: "Investment Risk Management (Treynor Ratio & Portfolio Risk)",
      issuer: "Coursera",
      desc: "Quantifying risk-adjusted returns, systematic risk exposure, and portfolio optimization."
    },
    {
      name: "Data Visualization with Power BI",
      issuer: "Great Learning",
      desc: "Enterprise metrics dashboard design, DAX data modeling, and business KPI tracking."
    },
    {
      name: "Fundamentals of Stock Market & Technical Analysis",
      issuer: "NSE / Industry Certification",
      desc: "Market microstructure, valuation multiples, and technical charting."
    }
  ]
};
