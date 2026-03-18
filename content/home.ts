// ─── Hero ───────────────────────────────────────────────────────────────────
export type HeroContent = {
  badgeInner: string;
  badgeOuter: string;
  titleBefore: string;
  titleHighlight: string;
  titleAfter: string;
  subtitle: string;
  primaryCta: { label: string; href: string };
  secondaryCta: { label: string; href: string };
  heroImageLight: string;
  heroImageDark: string;
  heroImageAlt: string;
};
// ... (types unchanged throughout) ...

export const defaultHomeContent: HomeContent = {
  // ── Hero ─────────────────────────────────────────────────────────────────
  hero: {
    badgeInner: "Launch",
    badgeOuter: "ClientPilot CRM is now live",
    titleBefore: "Your modern",
    titleHighlight: "CRM",
    titleAfter: "for growing teams",
    subtitle:
      "ClientPilot empowers small businesses and sales teams with intuitive tools to manage clients, contacts, deals, and activities—all in one place.",
    primaryCta: { label: "Get Started", href: "#pricing" },
    secondaryCta: { label: "See CRM Features", href: "#features" },
    heroImageLight: "/hero-image-light.jpeg",
    heroImageDark: "/hero-image-dark.jpeg",
    heroImageAlt: "ClientPilot dashboard preview",
  },

  // ── Sponsors ─────────────────────────────────────────────────────────────
  sponsors: {
    heading: "Built with trusted tools",
    items: [
      { icon: "Crown", name: "Vercel" },
      { icon: "Vegan", name: "Stripe" },
      { icon: "Ghost", name: "OpenAI" },
      { icon: "Puzzle", name: "Supabase" },
      { icon: "Squirrel", name: "Clerk" },
      { icon: "Cookie", name: "Resend" },
      { icon: "Drama", name: "Sentry" }
    ],
  },

  // ── Benefits ─────────────────────────────────────────────────────────────
  benefits: {
    eyebrow: "Why ClientPilot",
    heading: "A modern CRM for small teams",
    description:
      "Seamlessly manage your clients, sales pipelines, and projects with responsive UI and robust team features. No clutter, no bloat.",
    items: [
      {
        icon: "Blocks",
        title: "All-in-One Client View",
        description:
          "Centralize all your client details, deals, contacts, and activity logs with easy search and filter.",
      },
      {
        icon: "LineChart",
        title: "Visual Sales Pipeline",
        description:
          "Track your opportunities in a kanban-style pipeline for maximum clarity and momentum.",
      },
      {
        icon: "Wallet",
        title: "Streamlined Interactions",
        description:
          "Log every call, meeting, and note—see a complete activity timeline to never miss a beat.",
      },
      {
        icon: "Sparkle",
        title: "Easy Team Onboarding",
        description:
          "Invite your team with a click, manage permissions, and scale as your business grows.",
      },
    ],
  },

  // ── Features ─────────────────────────────────────────────────────────────
  features: {
    eyebrow: "Features",
    heading: "Everything you need in a CRM",
    subtitle:
      "ClientPilot brings you powerful CRM tooling—without the learning curve or complexity. Designed for small teams that want to move fast.",
    items: [
      {
        icon: "TabletSmartphone",
        title: "Responsive by Design",
        description:
          "Works beautifully on desktop and mobile—your CRM is always accessible.",
      },
      {
        icon: "BadgeCheck",
        title: "Client Profiles",
        description:
          "Rich details, quick search, and complete relationship history at your fingertips.",
      },
      {
        icon: "Goal",
        title: "Sales Pipeline Kanban",
        description:
          "Move deals between stages with drag-and-drop simplicity.",
      },
      {
        icon: "PictureInPicture",
        title: "Contact & Deal Linking",
        description:
          "Associate deals, activities, and contacts with one or more clients—never lose a connection.",
      },
      {
        icon: "MousePointerClick",
        title: "Quick Add & Undo",
        description:
          "Add new deals or log activity in seconds. Undo mistakes instantly.",
      },
      {
        icon: "Newspaper",
        title: "Team Collaboration",
        description:
          "Invite teammates, assign deals, and control permissions in one place.",
      },
    ],
  },

  // ── Services ─────────────────────────────────────────────────────────────
  services: {
    eyebrow: "Use Cases",
    heading: "Tailored for modern teams",
    subtitle:
      "ClientPilot supports client services, sales, and agencies with focused CRM flows.",
    items: [
      {
        title: "Relationship Management",
        description:
          "Track conversations and activities to build better client relationships.",
        pro: false,
      },
      {
        title: "Sales Pipeline",
        description:
          "Visualize leads, monitor deal health, and accelerate closes.",
        pro: false,
      },
      {
        title: "Team Coordination",
        description:
          "Delegate follow-ups and manage multiple pipelines with full team visibility.",
        pro: false,
      },
      {
        title: "Data Ownership",
        description:
          "Your data belongs to you—export and backup at any time. Privacy by default.",
        pro: true,
      },
    ],
  },

  // ── Testimonials ─────────────────────────────────────────────────────────
  testimonials: {
    eyebrow: "Testimonials",
    heading: "Teams succeeding with ClientPilot",
    reviews: [
      {
        image: "/demo-img.jpg",
        name: "Aarav Shah",
        role: "Co-Founder, BrightWorks",
        comment:
          "ClientPilot makes it easy for my small team to track all our client work and deals. Love the kanban!",
        rating: 5.0,
      },
      {
        image: "/demo-img.jpg",
        name: "Maya Patel",
        role: "Sales Lead, NovoTech",
        comment:
          "We replaced our older tool with ClientPilot and our workflows are now far more streamlined.",
        rating: 4.9,
      },
      {
        image: "/demo-img.jpg",
        name: "Nikhil Rao",
        role: "Owner, CloudLogic",
        comment:
          "The UI is clean and onboarding is painless for my staff. Great support, too.",
        rating: 4.8,
      }
    ],
  },

  // ── Team ─────────────────────────────────────────────────────────────────
  team: {
    eyebrow: "Team",
    heading: "Meet the ClientPilot team",
    members: [
      {
        imageUrl: "/team1.jpg",
        firstName: "Adan",
        lastName: "Asim",
        positions: ["Founder", "Product Lead"],
        socialNetworks: [
          { name: "LinkedIn", url: "https://linkedin.com/in/adan-asim" },
          { name: "GitHub", url: "https://github.com/adanbidx" }
        ],
      },
      {
        imageUrl: "/team2.jpg",
        firstName: "Elizabeth",
        lastName: "Moore",
        positions: ["Product Designer"],
        socialNetworks: [
          { name: "LinkedIn", url: "https://www.linkedin.com/in/elizabeth-moore-xyz" }
        ],
      }
    ],
  },

  // ── Pricing ──────────────────────────────────────────────────────────────
  pricing: {
    eyebrow: "Pricing",
    heading: "Simple CRM pricing",
    subtitle:
      "No surprises—just straightforward pricing for your growing business.",
    priceSuffix: "/month",
    plans: [
      {
        title: "Starter",
        popular: false,
        price: 0,
        description: "Basic CRM for small teams getting started.",
        buttonText: "Start free",
        benefits: [
          "Up to 3 users",
          "Client, Contact & Deal Management",
          "Kanban View",
          "Unlimited Activity Logs",
          "Community Support",
        ],
      },
      {
        title: "Growth",
        popular: true,
        price: 49,
        description: "Advanced CRM for scaling teams and sales.",
        buttonText: "Start trial",
        benefits: [
          "Unlimited users",
          "Advanced filtering & permissions",
          "Pipeline analytics",
          "Priority support",
          "Integration-ready",
        ],
      },
      {
        title: "Enterprise",
        popular: false,
        price: 199,
        description: "Full security, compliance, and onboarding—custom for you.",
        buttonText: "Contact sales",
        benefits: [
          "Custom data workflow",
          "Single Sign-On",
          "Dedicated onboarding",
          "Full support SLAs",
          "Architecture guidance"
        ],
      }
    ],
  },

  // ── Contact ──────────────────────────────────────────────────────────────
  contact: {
    eyebrow: "Contact",
    heading: "Talk to ClientPilot",
    description:
      "Questions about CRM features or onboarding? Reach out and our team will respond within 24 hours.",
    mailtoAddress: "adan@bidx.ai",
    info: {
      address: { label: "Location", value: "Remote • US & International" },
      phone: { label: "Call us", value: "" },
      email: { label: "Email us", value: "adan@bidx.ai" },
      hours: { label: "Support Hours", value: ["Monday - Friday", "9AM - 5PM PT"] },
    },
    formSubjects: ["CRM Demo", "Onboarding Guidance", "Billing Question", "Security/Privacy", "Other"],
    formSubmitLabel: "Send message",
  },

  // ── FAQ ──────────────────────────────────────────────────────────────────
  faq: {
    eyebrow: "FAQ",
    heading: "Frequently Asked CRM Questions",
    items: [
      {
        question: "Is ClientPilot suitable for agencies?",
        answer: "Absolutely. Manage projects, clients, sales, and activities for each team separately."
      },
      {
        question: "Can my team have multiple pipelines?",
        answer: "Yes, each team (workspace) manages their own pipeline and client data."
      },
      {
        question: "Is my data locked in?",
        answer: "You can export your CRM data anytime—your information belongs to you."
      },
      {
        question: "Can we restore deleted clients or deals?",
        answer: "Yes. Soft deletes and undo options help you recover from accidental changes."
      }
    ]
  },

  // ── Footer ───────────────────────────────────────────────────────────────
  footer: {
    brandName: "ClientPilot",
    columns: [
      {
        heading: "Contact",
        links: [
          { label: "adan@bidx.ai", href: "mailto:adan@bidx.ai" },
          { label: "GitHub", href: "https://github.com/adanbidx" },
          { label: "LinkedIn", href: "https://linkedin.com/in/adan-asim" }
        ],
      },
      {
        heading: "Product",
        links: [
          { label: "CRM Features", href: "#features" },
          { label: "Pricing", href: "#pricing" },
          { label: "Contact", href: "#contact" }
        ],
      },
      {
        heading: "Help",
        links: [
          { label: "Contact Support", href: "#contact" },
          { label: "FAQ", href: "#faq" },
          { label: "Docs", href: "https://nextjs.org/docs" }
        ],
      },
      {
        heading: "Socials",
        links: [
          { label: "GitHub", href: "https://github.com/adanbidx" },
          { label: "LinkedIn", href: "https://linkedin.com/in/adan-asim" }
        ],
      },
    ],
    copyright:
      "\u00a9 2026 ClientPilot CRM. All rights reserved.",
    attribution: { label: "Built on Next.js", href: "https://nextjs.org" },
  },

  // ── Navbar ───────────────────────────────────────────────────────────────
  navbar: {
    brandName: "ClientPilot",
    routes: [
      { href: "/#features", label: "CRM Features" },
      { href: "/#testimonials", label: "Testimonials" },
      { href: "/#team", label: "Team" },
      { href: "/#contact", label: "Contact" },
      { href: "/#faq", label: "FAQ" },
    ],
    featureDropdownLabel: "CRM Features",
    featureImage: {
      src: "/demo-img.jpg",
      alt: "ClientPilot preview",
    },
    features: [
      {
        title: "Pipeline Kanban",
        description: "Move deals between stages and visualize your sales with clarity.",
      },
      {
        title: "Clients & Contacts",
        description: "Organize all contacts and clients with rich profiles and activity logs.",
      },
      {
        title: "Responsive Design",
        description: "Access ClientPilot anywhere, on desktop or mobile.",
      },
    ],
    signInLabel: "Sign in",
    signUpLabel: "Sign up",
    dashboardLabel: "Dashboard",
    githubLink: {
      href: "https://github.com/adanbidx",
      ariaLabel: "View ClientPilot on GitHub",
    },
  },
};

export function getHomeContent(): HomeContent {
  return defaultHomeContent;
}