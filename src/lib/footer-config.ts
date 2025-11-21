/**
 * Footer configuration
 * Footer content is managed through the CMS admin panel
 */
export interface FooterContactInfo {
  icon: string;
  text: string;
}

export interface FooterConfig {
  description?: string;
  contactInfo?: FooterContactInfo[];
}

// Default footer content (fallback if CMS file doesn't exist)
const defaultFooter: FooterConfig = {
  description: 'Your Engineering Partner in Vodka Tech & Industrial Automation',
  contactInfo: [
    { icon: 'MapPin', text: 'Nenadovicha 19, Belgrade' },
    { icon: 'Phone', text: '+381 62 8703281' },
    { icon: 'Mail', text: 'info@johngalt.rs' },
  ],
};

/**
 * Load footer config from JSON file
 */
function loadFooterConfig(): FooterConfig {
  try {
    // Use import.meta.glob with eager loading to import JSON at build time
    const footerModules = import.meta.glob('../content/footer.json', { 
      eager: true,
      import: 'default'
    });
    
    const footerPath = Object.keys(footerModules)[0];
    if (footerPath && footerModules[footerPath]) {
      const footerData = footerModules[footerPath] as FooterConfig;
      if (footerData) {
        return footerData;
      }
    }
  } catch (error) {
    // File doesn't exist or has errors, use defaults
  }
  return defaultFooter;
}

// Load footer config at module initialization
const footerConfig = loadFooterConfig();

/**
 * Get footer description
 */
export function getFooterDescription(): string {
  return footerConfig.description || defaultFooter.description || '';
}

/**
 * Get footer contact info
 */
export function getFooterContactInfo(): FooterContactInfo[] {
  return footerConfig.contactInfo || defaultFooter.contactInfo || [];
}

