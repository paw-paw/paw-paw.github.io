import { homepage_url } from './me';
import type { SupportedLocale } from './i18n';

export type SeoPageKey = 'home' | 'work' | 'experience' | 'contact';

type SeoEntry = {
  title: string;
  description: string;
};

const seoContent: Record<SupportedLocale, Record<SeoPageKey, SeoEntry>> = {
  en: {
    home: {
      title: 'Paulo Tuya | Project Delivery, Partnerships, Operations',
      description:
        'Paulo Tuya is a project delivery and partnerships operator across gaming, esports, and remote programs, with experience in activations, live operations, and partner-facing execution.',
    },
    work: {
      title: 'Work | Paulo Tuya | Project Delivery, Partnerships, Operations',
      description:
        'Selected work by Paulo Tuya across gaming, esports, retail activations, live operations, and partner-facing project delivery.',
    },
    experience: {
      title: 'Experience | Paulo Tuya | Project Delivery, Partnerships, Operations',
      description:
        'Experience of Paulo Tuya across tournament operations, partnerships, account-facing delivery, and founder-led execution in gaming and esports.',
    },
    contact: {
      title: 'Contact | Paulo Tuya | Project Delivery, Partnerships, Operations',
      description:
        'Contact Paulo Tuya for project delivery, partnerships, operations, and partner-facing execution roles across gaming, esports, and remote programs.',
    },
  },
  es: {
    home: {
      title: 'Paulo Tuya | Delivery de proyectos, alianzas y operaciones',
      description:
        'Paulo Tuya es un operador de delivery de proyectos y alianzas en gaming, esports y programas remotos, con experiencia en activaciones, operaciones en vivo y ejecucion con partners.',
    },
    work: {
      title: 'Trabajo | Paulo Tuya | Delivery de proyectos, alianzas y operaciones',
      description:
        'Trabajo seleccionado de Paulo Tuya en gaming, esports, activaciones retail, operaciones en vivo y delivery de proyectos de cara a partners.',
    },
    experience: {
      title: 'Experiencia | Paulo Tuya | Delivery de proyectos, alianzas y operaciones',
      description:
        'Experiencia de Paulo Tuya en operaciones de torneos, alianzas, delivery de cara a cuentas y ejecucion founder-led en gaming y esports.',
    },
    contact: {
      title: 'Contacto | Paulo Tuya | Delivery de proyectos, alianzas y operaciones',
      description:
        'Contacta a Paulo Tuya para roles de delivery de proyectos, alianzas, operaciones y ejecucion con partners en gaming, esports y programas remotos.',
    },
  },
};

export const getSeoEntry = (locale: SupportedLocale, page: SeoPageKey): SeoEntry => {
  return seoContent[locale][page];
};

export const bridgePaths = ['/', '/work/', '/experience/', '/contact/'] as const;

export const bridgeUrls = bridgePaths.map((path) => new URL(path, homepage_url).href);

export const defaultIndexedUrl = new URL('/en/', homepage_url).href;
