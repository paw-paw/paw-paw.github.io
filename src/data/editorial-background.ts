import type { ImageMetadata } from 'astro';
import zonaDotaLogo from '../assets/editorial-logos/zonadota_all.png';
import naviLogo from '../assets/editorial-logos/navi_all.png';
import gamerStudioLogo from '../assets/editorial-logos/gamerstudio_all.png';
import ligaProGamingLogo from '../assets/editorial-logos/movistarlpg_all.png';
import firstbloodLogo from '../assets/editorial-logos/firstbloodio_all.png';
import bitelGamingLogo from '../assets/editorial-logos/bitelgaming_all.png';

type Locale = 'en' | 'es';

interface EditorialBackgroundLogo {
  alt: string;
  allmode: ImageMetadata;
}

export interface EditorialBackgroundItem {
  id: string;
  name: string;
  period: string;
  logo: EditorialBackgroundLogo;
}

const baseItems = [
  {
    id: 'zonadota',
    name: 'ZonaDotA',
    period: { en: '2011 to 2014', es: '2011 a 2014' },
    logo: {
      alt: 'ZonaDotA logo',
      allmode: zonaDotaLogo,
    },
  },
  {
    id: 'natus-vincere',
    name: 'Natus Vincere',
    period: { en: '2016', es: '2016' },
    logo: {
      alt: 'Natus Vincere logo',
      allmode: naviLogo,
    },
  },
  {
    id: 'gamerstudio',
    name: 'GamerStudio',
    period: { en: '2017 to 2018', es: '2017 a 2018' },
    logo: {
      alt: 'GamerStudio logo',
      allmode: gamerStudioLogo,
    },
  },
  {
    id: 'liga-pro-gaming',
    name: 'Liga Pro Gaming',
    period: { en: '2018 to 2019', es: '2018 a 2019' },
    logo: {
      alt: 'Liga Pro Gaming logo',
      allmode: ligaProGamingLogo,
    },
  },
  {
    id: 'firstblood',
    name: 'Firstblood.io',
    period: { en: '2021', es: '2021' },
    logo: {
      alt: 'Firstblood.io logo',
      allmode: firstbloodLogo,
    },
  },
  {
    id: 'bitel-gaming',
    name: 'Bitel Gaming',
    period: { en: '2021 to 2025', es: '2021 a 2025' },
    logo: {
      alt: 'Bitel Gaming logo',
      allmode: bitelGamingLogo,
    },
  },
] as const;

export function getEditorialBackgroundItems(lang: string | undefined): EditorialBackgroundItem[] {
  const locale: Locale = lang === 'es' ? 'es' : 'en';

  return baseItems.map((item) => ({
    id: item.id,
    name: item.name,
    period: item.period[locale],
    logo: item.logo,
  }));
}
