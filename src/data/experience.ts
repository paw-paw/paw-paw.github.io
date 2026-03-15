import type { ImageMetadata } from 'astro';
import xpLight from '../assets/experience-logos/xp_light.png';
import xpDark from '../assets/experience-logos/xp_dark.png';
import cgAll from '../assets/experience-logos/cg_all.png';
import fourDLight from '../assets/experience-logos/4d_light.png';
import fourDDark from '../assets/experience-logos/4d_dark.png';
import infLight from '../assets/experience-logos/inf_light.png';
import infDark from '../assets/experience-logos/inf_dark.png';
import lmLight from '../assets/experience-logos/lm_light.png';
import lmDark from '../assets/experience-logos/lm_dark.png';

interface ExperienceLogo {
  alt: string;
  light?: ImageMetadata;
  dark?: ImageMetadata;
  allmode?: ImageMetadata;
}

export interface ExperienceItem {
  id: string;
  title: string;
  org: string;
  period: string;
  location: string;
  workMode: string;
  summary: string;
  highlights: string[];
  metrics: string[];
  tags: string[];
  logo: ExperienceLogo;
}

export const experienceItems: ExperienceItem[] = [
  {
    id: 'xp-agencia',
    title: 'Founder (Operations & Partnerships)',
    org: 'XP Agencia',
    period: 'Aug 2024–present',
    location: 'Lima, Peru',
    workMode: 'Remote-first',
    summary:
      'I founded and run a boutique gaming and esports agency where I own commercial development, delivery design, staffing, partner coordination, and post-delivery control.',
    highlights: [
      'I lead the full commercial-to-delivery handoff, translating signed scopes into milestones, owners, staffing, and QA checkpoints.',
      'I coordinate cross-functional execution across production, league ops, broadcast, creators, and vendors while keeping approvals and reporting moving.',
    ],
    metrics: ['7 deals closed', '100+ events or activations', '~12K peak CCV portfolio-wide'],
    tags: ['Founder-led delivery', 'Partnerships', 'Agency operations'],
    logo: {
      alt: 'XP Agencia logo',
      light: xpLight,
      dark: xpDark,
    },
  },
  {
    id: 'community-gaming',
    title: 'Partnership Fulfillment Associate',
    org: 'Community Gaming',
    period: 'Apr 2022–Mar 2025',
    location: 'New York, USA',
    workMode: 'Remote',
    summary:
      'I worked in a hybrid partnerships and delivery role for LATAM, owning sponsor activation fulfillment while also driving new business and partner-facing execution.',
    highlights: [
      'I owned the sponsor commercial cycle from outreach and proposal work through contract handoff, activation planning, reporting, and closeout.',
      'I translated partner goals into timelines, deliverables, vendor coordination, approval gates, and reporting requirements across multiple markets.',
    ],
    metrics: ['US$40K+ sponsorship revenue closed', '7+ sponsor activations', '30+ sponsored tournaments supported'],
    tags: ['Fulfillment', 'Business development', 'LATAM delivery'],
    logo: {
      alt: 'Community Gaming logo',
      allmode: cgAll,
    },
  },
  {
    id: '4d-esports',
    title: 'Head of League Operations',
    org: '4D Esports',
    period: 'Oct 2021–Apr 2022',
    location: 'Lima, Peru',
    workMode: 'Remote-first',
    summary:
      'I led league operations for the Dota Pro Circuit Regional League South America, handling execution, disputes, schedule control, and operating assets under official rulebook constraints.',
    highlights: [
      'I acted as final operational decision-maker for incidents, rulings, and edge cases while keeping match operations predictable week over week.',
      'I built the league’s core runbooks, readiness assets, incident logging, and reporting cadence to standardize delivery under pressure.',
    ],
    metrics: ['~140 operated games', '~15 matches per week', 'Near-zero reschedules'],
    tags: ['League ops', 'Operational control', 'Competitive integrity'],
    logo: {
      alt: '4D Esports logo',
      light: fourDLight,
      dark: fourDDark,
    },
  },
  {
    id: 'infinity',
    title: 'Esports Team Manager (Dota 2)',
    org: 'Infinity',
    period: 'Jan 2021–Sep 2021',
    location: 'Lima, Peru',
    workMode: 'In-person',
    summary:
      'I managed day-to-day team operations for Infinity’s main and academy rosters, balancing readiness, logistics, staffing, and early sponsor-support workflows.',
    highlights: [
      'I owned scrim scheduling, tournament readiness, gaming house operations, support staff coordination, and player logistics.',
      'I also supported sponsorship execution and media workflows, which added an early partner-facing layer to the operational role.',
    ],
    metrics: ['18 tournament runs', '11 top-3 placements', '~US$2K monthly operating budget'],
    tags: ['Team ops', 'Readiness', 'Early partnership support'],
    logo: {
      alt: 'Infinity logo',
      light: infLight,
      dark: infDark,
    },
  },
  {
    id: 'live-media',
    title: 'Esports Producer (Dota 2)',
    org: 'Live Media S.A.C.',
    period: 'May 2018–Aug 2020',
    location: 'Lima, Peru',
    workMode: 'In-person',
    summary:
      'I produced tournaments end-to-end for brand clients, translating event briefs into competitive formats, broadcast plans, sponsor integrations, and live execution.',
    highlights: [
      'I owned scope, rules, scheduling, run of show, talent coordination, and delivery tracking across online and LAN events.',
      'I supported sponsor-facing needs by coordinating branded assets, broadcast integrations, payout operations, and post-event reporting.',
    ],
    metrics: ['~10 tournaments delivered', '8 online + 2 LAN', '20–30 broadcast hours per event'],
    tags: ['Production', 'Sponsor-facing delivery', 'Broadcast ops'],
    logo: {
      alt: 'Live Media logo',
      light: lmLight,
      dark: lmDark,
    },
  },
];
