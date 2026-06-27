export const SITE = {
  name: 'West Michigan BUILDIT | ROOFIT',
  title: 'West Michigan BUILDIT | ROOFIT | Roofing & Custom Exterior Contractor',
  description: 'Lakeshore Certified Roofing & Exterior Custom Building for West Michigan. Built for the Lakeshore. Built for Life.',
  lang: 'en',
  logo: 'https://pagesmith-cdn.com/d6431aea/images/BUILDIT-ROOFIT-(1)-1536-1536.webp',
  url:
    (typeof process !== 'undefined' && process.env.SITE_URL) ||
    'https://wm-buildit-roofit.pagesmith.app',
  twitterHandle: '@WMBuildItRoofIt',
  socials: {
    twitter: 'https://twitter.com/WMBuildItRoofIt',
    instagram: 'https://instagram.com/WMBuildItRoofIt',
    linkedin: 'https://www.linkedin.com/company/wm-buildit-roofit',
    dribbble: 'https://dribbble.com/WMBuildItRoofIt',
  },
  contact: {
    buildit: '616.885.2399',
    roofit: '616.795.3039',
    office: '(231) 533-2900',
    address: 'Grand Haven, MI',
    hours: 'Monday - Friday: by appointment',
  }
} as const;

export type SiteConfig = typeof SITE;
