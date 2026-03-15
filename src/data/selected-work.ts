import type { ImageMetadata } from 'astro';
import interuHeader from '../assets/work-headers/interu.jpg';
import pcftcHeader from '../assets/work-headers/pcftc.jpg';
import amdgwHeader from '../assets/work-headers/amdgw.jpg';
import dld2Header from '../assets/work-headers/dld2.jpg';
import ewcHeader from '../assets/work-headers/ewc.jpg';
import limamajorHeader from '../assets/work-headers/limamajor.jpg';

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
  headerImage: ImageMetadata;
  headerAlt: string;
  headerOverlay: 'soft-teal';
}

type Locale = 'en' | 'es';

const localizedSelectedWork: Record<Locale, SelectedWorkItem[]> = {
  en: [
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
      headerImage: interuHeader,
      headerAlt: 'Header visual for InterUniversitario ML:BB',
      headerOverlay: 'soft-teal',
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
      headerImage: pcftcHeader,
      headerAlt: 'Header visual for PC Factory Throne Clash',
      headerOverlay: 'soft-teal',
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
      headerImage: amdgwHeader,
      headerAlt: 'Header visual for AMD Gamer Week',
      headerOverlay: 'soft-teal',
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
      headerImage: dld2Header,
      headerAlt: 'Header visual for DreamLeague Division 2',
      headerOverlay: 'soft-teal',
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
      headerImage: ewcHeader,
      headerAlt: 'Header visual for Esports World Cup',
      headerOverlay: 'soft-teal',
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
      headerImage: limamajorHeader,
      headerAlt: 'Header visual for The Lima Major 2023',
      headerOverlay: 'soft-teal',
    },
  ],
  es: [
    {
      id: 'interuniversitario-mlbb',
      title: 'InterUniversitario ML:BB',
      org: 'Community Gaming for Moonton',
      role: 'Project Manager de evento en vivo',
      period: 'Oct–Nov 2023',
      location: 'Lima, Peru',
      summary:
        'Un programa universitario que combinó un LAN de dos días, una transmisión de estudio de cuatro días, aprobaciones de partners y delivery cross-functional bajo timelines ajustados.',
      highlights: [
        'Lideré las decisiones operativas del día a día entre venue, estudio, league ops, staffing, talento y aprobaciones de stakeholders.',
        'Convertí requerimientos de partners en run of show, checkpoints de ejecución y coordinación entre equipos sin perder control del calendario.',
      ],
      metrics: ['Presupuesto de US$60K', '16 universidades / 80 jugadores', '~50 horas de transmisión'],
      tags: ['Delivery con partners', 'Evento en vivo', 'Broadcast'],
      headerImage: interuHeader,
      headerAlt: 'Visual de cabecera para InterUniversitario ML:BB',
      headerOverlay: 'soft-teal',
    },
    {
      id: 'pc-factory-throne-clash',
      title: 'PC Factory Throne Clash',
      org: 'XP Agencia',
      role: 'Líder de cuenta y delivery',
      period: 'Aug 2024',
      location: 'Lima, Peru',
      summary:
        'Una activación de retail de Dota 2 que conectó clasificatorias online, una final presencial en tienda, alineamiento con sponsor y una capa de broadcast en un programa compacto.',
      highlights: [
        'Lideré la relación con el cliente y el flujo completo de delivery desde el diseño de clasificatorias hasta la ejecución del día final y el cierre.',
        'Coordiné readiness del venue, producción de broadcast, talento, vendors y pagos de premios como un solo alcance integrado de delivery.',
      ],
      metrics: ['411 registros', '300+ asistentes en tienda', '8 vendors coordinados'],
      tags: ['Activación', 'Cara al cliente', 'Delivery end-to-end'],
      headerImage: pcftcHeader,
      headerAlt: 'Visual de cabecera para PC Factory Throne Clash',
      headerOverlay: 'soft-teal',
    },
    {
      id: 'amd-gamer-week',
      title: 'AMD Gamer Week',
      org: 'XP Agencia',
      role: 'Project Lead',
      period: 'Dec 2024',
      location: 'Lima, Peru',
      summary:
        'Una activación de retail de cuatro días construida alrededor de programación competitiva diaria, coordinación con creadores y ejecución alineada con sponsor bajo una restricción fija de infraestructura.',
      highlights: [
        'Diseñé el formato del evento, el ritmo de delivery, el plan de staffing y los artefactos operativos necesarios para sostener cuatro días consecutivos en tienda.',
        'Alineé marca, venue, vendors, talento y operaciones del torneo dentro de una sola cadencia de delivery sin incidentes reportados.',
      ],
      metrics: ['~200 registros', '~PEN 10K en prize pool', '6 talents + 6 creators'],
      tags: ['Activación retail', 'Ejecución con partners', 'Programa de varios días'],
      headerImage: amdgwHeader,
      headerAlt: 'Visual de cabecera para AMD Gamer Week',
      headerOverlay: 'soft-teal',
    },
    {
      id: 'dreamleague-division-2',
      title: 'DreamLeague Division 2',
      org: 'ESL FACEIT Group via XP Agencia',
      role: 'Head League Operator',
      period: 'Oct 2025–present',
      location: 'Remoto (Europa)',
      summary:
        'Un engagement remoto de operaciones que sostiene la entrega de temporadas, readiness de partidas, comunicación con equipos y cumplimiento de reglas dentro de un entorno competitivo alineado a Europa.',
      highlights: [
        'Lideré scheduling, setup de lobbies, readiness checks y cierre de incidentes a lo largo de temporadas recurrentes con timing operativo basado en Europa.',
        'Usé trackers compartidos y comunicación en tiempo real para mantener las operaciones con equipos previsibles y responsivas durante ventanas activas de competencia.',
      ],
      metrics: ['8–16 equipos por temporada', '~36–74 Bo3 por temporada', 'Delivery remoto alineado a CET'],
      tags: ['Delivery remoto', 'League ops', 'Operación sostenida'],
      headerImage: dld2Header,
      headerAlt: 'Visual de cabecera para DreamLeague Division 2',
      headerOverlay: 'soft-teal',
    },
    {
      id: 'esports-world-cup',
      title: 'Esports World Cup',
      org: 'ESL FACEIT Group',
      role: 'Player Manager / Player Ops',
      period: 'Jul–Aug 2025',
      location: 'Riad, Arabia Saudita',
      summary:
        'Un evento global multijuego donde la logística de cara a jugadores, el manejo de escalaciones y la continuidad operativa debían funcionar a escala internacional durante siete semanas.',
      highlights: [
        'Apoyé operaciones de jugadores a través de títulos rotativos coordinando horarios, credenciales, transporte, hospedaje y seguimiento de issues.',
        'Sostuve una ejecución confiable mediante trackers compartidos, triage de incidentes y coordinación con vendors y partners de servicio on-site.',
      ],
      metrics: ['~450 jugadores', '~7 semanas on-site', '~20 equipos atendidos'],
      tags: ['Evento global', 'Player ops', 'Logística'],
      headerImage: ewcHeader,
      headerAlt: 'Visual de cabecera para Esports World Cup',
      headerOverlay: 'soft-teal',
    },
    {
      id: 'lima-major-2023',
      title: 'The Lima Major 2023',
      org: 'Community Gaming',
      role: 'Head of Live League Operations',
      period: 'Feb–Mar 2023',
      location: 'Lima, Peru',
      summary:
        'Un entorno competitivo tier-one en vivo que exigió manejo estructurado de incidentes, control de integridad competitiva y ejecución estable de partidas entre hotel y arena.',
      highlights: [
        'Lideré live league operations en fase de grupos, arena, playoffs y finales, coordinando admins, IT, player managers, equipos y stakeholders de broadcast.',
        'Ajusté procesos de readiness y manejo de incidentes para mejorar drásticamente la puntualidad de partidas durante el evento.',
      ],
      metrics: ['Estructura operativa de 30 personas', '~225 partidas', 'Retraso reducido de ~1 hora a ~7 minutos'],
      tags: ['Operación de alta presión', 'Integridad competitiva', 'Evento en vivo'],
      headerImage: limamajorHeader,
      headerAlt: 'Visual de cabecera para The Lima Major 2023',
      headerOverlay: 'soft-teal',
    },
  ],
};

export function getSelectedWork(lang: string | undefined): SelectedWorkItem[] {
  return localizedSelectedWork[lang === 'es' ? 'es' : 'en'];
}
