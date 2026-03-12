export interface SelectedWorkItem {
  id: string;
  title: string;
  org: string;
  role: string;
  period: string;
  location: string;
  summary: string;
  highlights: string[];
  metrics: string[];
  tags: string[];
}

export const selectedWork: SelectedWorkItem[] = [
  {
    id: 'interuniversitario-mlbb',
    title: 'InterUniversitario ML:BB',
    org: 'Community Gaming for Moonton',
    role: 'Live Event Project Manager',
    period: 'Oct–Nov 2023',
    location: 'Lima, Peru',
    summary:
      'A university program that combined a two-day LAN, a four-day studio broadcast, partner approvals, and cross-functional delivery under tight timelines.',
    highlights: [
      'Owned day-to-day project decisions across venue, studio, league ops, staffing, talent, and stakeholder approvals.',
      'Turned partner requirements into run of show, execution checkpoints, and cross-team coordination without losing schedule control.',
    ],
    metrics: ['US$60K budget', '16 universities / 80 players', '~50 broadcast hours'],
    tags: ['Partner delivery', 'Live event', 'Broadcast'],
  },
  {
    id: 'pc-factory-throne-clash',
    title: 'PC Factory Throne Clash',
    org: 'XP Agencia',
    role: 'Account & Delivery Lead',
    period: 'Aug 2024',
    location: 'Lima, Peru',
    summary:
      'A retail-facing Dota 2 activation that connected online qualifiers, an in-store finals day, sponsor alignment, and a broadcast layer in one compact program.',
    highlights: [
      'Owned the client relationship and full delivery flow from qualifier design through finals-day execution and closeout.',
      'Coordinated venue readiness, broadcast production, talent, vendors, and prize payout as one integrated delivery scope.',
    ],
    metrics: ['411 registrations', '300+ in-store attendees', '8 vendors coordinated'],
    tags: ['Activation', 'Account-facing', 'End-to-end delivery'],
  },
  {
    id: 'amd-gamer-week',
    title: 'AMD Gamer Week',
    org: 'XP Agencia',
    role: 'Project Lead',
    period: 'Dec 2024',
    location: 'Lima, Peru',
    summary:
      'A four-day retail activation built around daily tournament programming, creator coordination, and sponsor-aligned execution under a fixed infrastructure constraint.',
    highlights: [
      'Designed the event format, delivery rhythm, staffing plan, and operating artifacts needed to keep four consecutive in-store days running cleanly.',
      'Aligned brand, venue, vendors, talent, and tournament operations into a single delivery cadence with no reported incidents.',
    ],
    metrics: ['~200 registrations', '~PEN 10K prize pool', '6 talents + 6 creators'],
    tags: ['Retail activation', 'Partner execution', 'Multi-day program'],
  },
  {
    id: 'dreamleague-division-2',
    title: 'DreamLeague Division 2',
    org: 'ESL FACEIT Group via XP Agencia',
    role: 'Head League Operator',
    period: 'Oct 2025–present',
    location: 'Remote (Europe)',
    summary:
      'An ongoing remote operations engagement supporting season delivery, match readiness, team communications, and rule enforcement for a Europe-aligned competition environment.',
    highlights: [
      'Owned scheduling, lobby setup, readiness checks, and incident closure across recurring seasons with Europe-based operational timing.',
      'Used shared trackers and real-time comms to keep team-facing operations predictable and responsive through active competition windows.',
    ],
    metrics: ['8–16 teams per season', '~36–74 Bo3s per season', 'Remote CET-aligned delivery'],
    tags: ['Remote delivery', 'League ops', 'Sustained operations'],
  },
  {
    id: 'esports-world-cup',
    title: 'Esports World Cup',
    org: 'ESL FACEIT Group',
    role: 'Player Manager / Player Ops',
    period: 'Jul–Aug 2025',
    location: 'Riyadh, Saudi Arabia',
    summary:
      'A multi-title global event where player-facing logistics, escalation handling, and operational continuity had to work at international scale over seven weeks.',
    highlights: [
      'Supported player operations across rotating game titles by coordinating schedules, credentials, transport, rooming, and issue follow-up.',
      'Maintained reliable execution through shared trackers, incident triage, and coordination with vendors and on-site service partners.',
    ],
    metrics: ['~450 players', '~7 weeks on-site', '~20 teams supported'],
    tags: ['Global event', 'Player ops', 'Logistics'],
  },
  {
    id: 'lima-major-2023',
    title: 'The Lima Major 2023',
    org: 'Community Gaming',
    role: 'Head of Live League Operations',
    period: 'Feb–Mar 2023',
    location: 'Lima, Peru',
    summary:
      'A tier-one live competition environment that required structured incident handling, competitive integrity control, and stable match execution across hotel and arena stages.',
    highlights: [
      'Led live league operations across group stage and arena playoffs/finals, coordinating admins, IT, player managers, teams, and broadcast stakeholders.',
      'Tightened readiness and incident-handling processes to improve match punctuality dramatically over the course of the event.',
    ],
    metrics: ['30-person ops structure', '~225 games', 'Delay reduced from ~1 hour to ~7 minutes'],
    tags: ['High-pressure ops', 'Competitive integrity', 'Live event'],
  },
];
