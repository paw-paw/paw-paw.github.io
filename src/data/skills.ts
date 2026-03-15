interface SkillCluster {
  id: string;
  title: string;
  description: string;
  capabilities: string[];
  tools: string[];
}

type Locale = 'en' | 'es';

const localizedSkillClusters: Record<Locale, SkillCluster[]> = {
  en: [
    {
      id: 'program-delivery-operations',
      title: 'Program & Delivery Operations',
      description:
        'I build structure around execution: planning, readiness, escalation handling, and the operating cadence that keeps delivery reliable.',
      capabilities: [
        'Project planning and scope control',
        'Runbooks, SOPs, and readiness tracking',
        'Incident triage and escalation handling',
        'Cross-functional execution under deadlines',
      ],
      tools: ['Google Sheets', 'Monday.com', 'Notion', 'Trello'],
    },
    {
      id: 'partnerships-business-development',
      title: 'Partnerships & Business Development',
      description:
        'I work across sponsor packaging, proposal development, handoff, and partner-facing execution without losing sight of delivery quality.',
      capabilities: [
        'Discovery, scoping, and proposal writing',
        'Sponsorship packaging and commercial follow-through',
        'Partner communication and approval management',
        'Commercial-to-delivery handoff',
      ],
      tools: ['HubSpot', 'Slack', 'Lark', 'Google Workspace'],
    },
    {
      id: 'systems-workflows-reporting',
      title: 'Systems, Workflows & Reporting',
      description:
        'I rely on clear operating systems, traceable artifacts, and reporting rhythms to keep teams aligned and outcomes visible.',
      capabilities: [
        'Source-of-truth trackers and workflow design',
        'Status reporting and KPI follow-up',
        'Documentation control and post-mortems',
        'Quality assurance and process improvement',
      ],
      tools: ['Google Drive', 'Discord', 'Power BI', 'Looker Studio'],
    },
  ],
  es: [
    {
      id: 'program-delivery-operations',
      title: 'Operaciones de programa y delivery',
      description:
        'Construyo estructura alrededor de la ejecución: planificación, readiness, manejo de incidentes y la cadencia operativa que mantiene el delivery confiable.',
      capabilities: [
        'Planificación de proyectos y control de alcance',
        'Runbooks, SOPs y seguimiento de readiness',
        'Triage de incidentes y manejo de escalaciones',
        'Ejecución cross-functional bajo deadlines',
      ],
      tools: ['Google Sheets', 'Monday.com', 'Notion', 'Trello'],
    },
    {
      id: 'partnerships-business-development',
      title: 'Alianzas y desarrollo comercial',
      description:
        'Trabajo entre el armado comercial, el desarrollo de propuestas, el handoff y la ejecución de cara a socios sin perder de vista la calidad del delivery.',
      capabilities: [
        'Discovery, scoping y redacción de propuestas',
        'Sponsorship packaging y seguimiento comercial',
        'Comunicación con socios y gestión de aprobaciones',
        'Handoff de lo comercial a delivery',
      ],
      tools: ['HubSpot', 'Slack', 'Lark', 'Google Workspace'],
    },
    {
      id: 'systems-workflows-reporting',
      title: 'Sistemas, flujos de trabajo y reportes',
      description:
        'Me apoyo en sistemas operativos claros, artefactos trazables y ritmos de reporte que mantienen alineados a los equipos y visibles los resultados.',
      capabilities: [
        'Trackers fuente de verdad y diseño de workflows',
        'Reportes de estado y seguimiento de KPIs',
        'Control documental y post-mortems',
        'QA y mejora de procesos',
      ],
      tools: ['Google Drive', 'Discord', 'Power BI', 'Looker Studio'],
    },
  ],
};

export function getSkillClusters(lang: string | undefined): SkillCluster[] {
  return localizedSkillClusters[lang === 'es' ? 'es' : 'en'];
}
