import siteDataJson from "./siteData.json";

export interface SiteData {
  hospital: {
    name: string;
    shortName: string;
    tagline: string;
  };
  contact: {
    phone: string;
    emergencyPhone: string;
    email: string;
    address: string;
    addressLines: string[];
    hours: {
      open: string;
      days: string;
    };
  };
  social: {
    instagram: string;
    facebook: string;
    youtube: string;
    linkedin: string;
  };
  navigation: {
    quickLinks: { name: string; href: string }[];
    services: string[];
    legal: { name: string; href: string }[];
  };
  footer: {
    description: string;
    trustBadge: {
      title: string;
      subtitle: string;
    };
    emergency: {
      label: string;
      heading: string;
      description: string;
      buttonText: string;
    };
    copyright: string;
  };
}

export const siteData: SiteData = siteDataJson;

