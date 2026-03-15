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

type Locale = 'en' | 'es';

const baseLogos = {
  xp: {
    alt: 'XP Agencia logo',
    light: xpLight,
    dark: xpDark,
  },
  cg: {
    alt: 'Community Gaming logo',
    allmode: cgAll,
  },
  fourd: {
    alt: '4D Esports logo',
    light: fourDLight,
    dark: fourDDark,
  },
  inf: {
    alt: 'Infinity logo',
    light: infLight,
    dark: infDark,
  },
  lm: {
    alt: 'Live Media logo',
    light: lmLight,
    dark: lmDark,
  },
} as const;

const localizedExperienceItems: Record<Locale, ExperienceItem[]> = {
  en: [
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
      logo: baseLogos.xp,
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
      logo: baseLogos.cg,
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
      logo: baseLogos.fourd,
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
      logo: baseLogos.inf,
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
      logo: baseLogos.lm,
    },
  ],
  es: [
    {
      id: 'xp-agencia',
      title: 'Founder (Operations & Partnerships)',
      org: 'XP Agencia',
      period: 'Aug 2024–present',
      location: 'Lima, Peru',
      workMode: 'Remote-first',
      summary:
        'Fundé y dirijo una boutique agency de gaming y esports donde lidero desarrollo comercial, diseño de delivery, staffing, coordinación con partners y control post-entrega.',
      highlights: [
        'Lidero el handoff completo de lo comercial a delivery, traduciendo scopes firmados en hitos, owners, staffing y checkpoints de QA.',
        'Coordino ejecución cross-functional entre producción, league ops, broadcast, creators y vendors mientras mantengo en movimiento aprobaciones y reporting.',
      ],
      metrics: ['7 deals cerrados', '100+ eventos o activaciones', '~12K peak CCV a nivel de portafolio'],
      tags: ['Delivery founder-led', 'Alianzas', 'Operaciones de agencia'],
      logo: baseLogos.xp,
    },
    {
      id: 'community-gaming',
      title: 'Partnership Fulfillment Associate',
      org: 'Community Gaming',
      period: 'Apr 2022–Mar 2025',
      location: 'New York, USA',
      workMode: 'Remote',
      summary:
        'Trabajé en un rol híbrido de partnerships y delivery para LATAM, liderando fulfillment de activaciones patrocinadas mientras también impulsaba new business y ejecución de cara a partners.',
      highlights: [
        'Lideré el ciclo comercial del sponsor desde outreach y propuestas hasta handoff contractual, planificación de activaciones, reporting y cierre.',
        'Traducí objetivos de partners en timelines, entregables, coordinación con vendors, gates de aprobación y requisitos de reporting para múltiples mercados.',
      ],
      metrics: ['US$40K+ en sponsorship revenue cerrada', '7+ activaciones de sponsors', '30+ torneos patrocinados apoyados'],
      tags: ['Fulfillment', 'Desarrollo comercial', 'Delivery LATAM'],
      logo: baseLogos.cg,
    },
    {
      id: '4d-esports',
      title: 'Head of League Operations',
      org: '4D Esports',
      period: 'Oct 2021–Apr 2022',
      location: 'Lima, Peru',
      workMode: 'Remote-first',
      summary:
        'Lideré league operations para la Dota Pro Circuit Regional League South America, manejando ejecución, disputas, control de calendario y activos operativos bajo restricciones oficiales de rulebook.',
      highlights: [
        'Actué como decision-maker operativo final para incidentes, rulings y edge cases mientras mantenía previsibles las operaciones de partidas semana a semana.',
        'Construí runbooks, activos de readiness, logging de incidentes y ritmo de reporting para estandarizar el delivery bajo presión.',
      ],
      metrics: ['~140 games operados', '~15 matches por semana', 'Casi cero reschedules'],
      tags: ['League ops', 'Control operativo', 'Integridad competitiva'],
      logo: baseLogos.fourd,
    },
    {
      id: 'infinity',
      title: 'Esports Team Manager (Dota 2)',
      org: 'Infinity',
      period: 'Jan 2021–Sep 2021',
      location: 'Lima, Peru',
      workMode: 'In-person',
      summary:
        'Gestioné las operaciones diarias de los rosters principal y academy de Infinity, equilibrando readiness, logística, staffing y workflows tempranos de soporte a sponsors.',
      highlights: [
        'Lideré scheduling de scrims, readiness para torneos, operaciones de gaming house, coordinación de staff de soporte y logística de jugadores.',
        'También apoyé ejecución de sponsorships y workflows de medios, sumando una primera capa partner-facing al rol operativo.',
      ],
      metrics: ['18 participaciones en torneos', '11 top-3', '~US$2K de presupuesto operativo mensual'],
      tags: ['Operación de equipo', 'Readiness', 'Soporte temprano a alianzas'],
      logo: baseLogos.inf,
    },
    {
      id: 'live-media',
      title: 'Esports Producer (Dota 2)',
      org: 'Live Media S.A.C.',
      period: 'May 2018–Aug 2020',
      location: 'Lima, Peru',
      workMode: 'In-person',
      summary:
        'Produje torneos end-to-end para clientes de marca, traduciendo briefs de evento en formatos competitivos, planes de broadcast, integraciones de sponsor y ejecución en vivo.',
      highlights: [
        'Lideré alcance, reglas, scheduling, run of show, coordinación de talento y seguimiento de delivery en eventos online y LAN.',
        'Apoyé necesidades de cara a sponsors coordinando activos de marca, integraciones de broadcast, operación de payouts y reporting post-evento.',
      ],
      metrics: ['~10 torneos entregados', '8 online + 2 LAN', '20–30 horas de broadcast por evento'],
      tags: ['Producción', 'Delivery con sponsors', 'Broadcast ops'],
      logo: baseLogos.lm,
    },
  ],
};

export function getExperienceItems(lang: string | undefined): ExperienceItem[] {
  return localizedExperienceItems[lang === 'es' ? 'es' : 'en'];
}
