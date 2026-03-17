import { homepage_url } from './me';
import type { SupportedLocale } from './i18n';

export type SeoPageKey = 'home' | 'work' | 'experience' | 'contact' | 'blog';

type SeoEntry = {
  title: string;
  description: string;
};

const seoContent: Record<SupportedLocale, Record<SeoPageKey, SeoEntry>> = {
  en: {
    home: {
      title: 'Paulo Tuya | Business Development, Partnerships, Project Delivery',
      description:
        'Paulo Tuya is a commercially fluent operator connecting business development, partnerships, and project delivery across gaming, esports, and remote programs.',
    },
    work: {
      title: 'Work | Paulo Tuya | Business Development, Partnerships, Project Delivery',
      description:
        'Selected work by Paulo Tuya across gaming, esports, partnerships, commercial execution, and project delivery under real operating constraints.',
    },
    experience: {
      title: 'Experience | Paulo Tuya | Business Development, Partnerships, Project Delivery',
      description:
        'Experience of Paulo Tuya across operations, partnerships, business development, account-facing delivery, and founder-led execution in gaming and esports.',
    },
    contact: {
      title: 'Contact | Paulo Tuya | Business Development, Partnerships, Project Delivery',
      description:
        'Contact Paulo Tuya for business development, partnerships, project delivery, and partner-facing execution roles across gaming, esports, and remote programs.',
    },
    blog: {
      title: 'Blog | Paulo Tuya | Business Development, Partnerships, Project Delivery',
      description:
        'Professional writing by Paulo Tuya on business development, partnerships, project delivery, operations, and cross-functional execution across gaming, esports, and remote programs.',
    },
  },
  es: {
    home: {
      title: 'Paulo Tuya | Business Development, Alianzas y Delivery de Proyectos',
      description:
        'Paulo Tuya conecta business development, alianzas y delivery de proyectos en gaming, esports y programas remotos, con un enfoque claro de ejecucion cross-functional.',
    },
    work: {
      title: 'Trabajo | Paulo Tuya | Business Development, Alianzas y Delivery de Proyectos',
      description:
        'Trabajo seleccionado de Paulo Tuya en gaming, esports, alianzas, ejecucion comercial y delivery de proyectos bajo condiciones reales de operacion.',
    },
    experience: {
      title: 'Experiencia | Paulo Tuya | Business Development, Alianzas y Delivery de Proyectos',
      description:
        'Experiencia de Paulo Tuya en operaciones, alianzas, business development, delivery de cara a cuentas y ejecucion founder-led en gaming y esports.',
    },
    contact: {
      title: 'Contacto | Paulo Tuya | Business Development, Alianzas y Delivery de Proyectos',
      description:
        'Contacta a Paulo Tuya para roles de business development, alianzas, delivery de proyectos y ejecucion con partners en gaming, esports y programas remotos.',
    },
    blog: {
      title: 'Blog | Paulo Tuya | Business Development, Alianzas y Delivery de Proyectos',
      description:
        'Escritos profesionales de Paulo Tuya sobre business development, alianzas, delivery de proyectos, operaciones y ejecucion cross-functional en gaming, esports y programas remotos.',
    },
  },
};

export const getSeoEntry = (locale: SupportedLocale, page: SeoPageKey): SeoEntry => {
  return seoContent[locale][page];
};

export const bridgePaths = ['/', '/work/', '/experience/', '/contact/'] as const;

export const bridgeUrls = bridgePaths.map((path) => new URL(path, homepage_url).href);

export const defaultIndexedUrl = new URL('/en/', homepage_url).href;
