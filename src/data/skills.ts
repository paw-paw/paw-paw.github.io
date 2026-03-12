export interface SkillCluster {
  id: string;
  title: string;
  description: string;
  capabilities: string[];
  tools: string[];
}

export const skillClusters: SkillCluster[] = [
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
];
