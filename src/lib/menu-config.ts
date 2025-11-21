/**
 * Menu configuration
 * Menu items are managed through the CMS admin panel
 * Fallback to default items if CMS file doesn't exist
 */
export interface MenuItem {
  key: string;
  path: string;
  visible: boolean;
}

// Default menu items (fallback if CMS file doesn't exist)
const defaultMenuItems: MenuItem[] = [
  { key: 'home', path: '', visible: true },
  { key: 'about', path: 'about', visible: true },
  { key: 'solutions', path: 'solutions', visible: true },
  { key: 'equipment', path: 'equipment', visible: true },
  { key: 'portfolio', path: 'portfolio', visible: true },
  { key: 'representatives', path: 'representatives', visible: true },
  { key: 'papers', path: 'papers', visible: true },
  { key: 'support', path: 'support', visible: true },
];

/**
 * Load menu items from JSON file
 * Uses Vite's JSON import which works at build time
 */
function loadMenuItems(): MenuItem[] {
  try {
    // Use import.meta.glob with eager loading to import JSON at build time
    const menuModules = import.meta.glob('../content/menu.json', { 
      eager: true,
      import: 'default'
    });
    
    const menuPath = Object.keys(menuModules)[0];
    if (menuPath && menuModules[menuPath]) {
      const menuData = menuModules[menuPath] as { items?: MenuItem[] };
      if (menuData?.items && Array.isArray(menuData.items)) {
        return menuData.items;
      }
    }
  } catch (error) {
    // File doesn't exist or has errors, use defaults
    // This is expected on first run before the CMS creates the file
  }
  return defaultMenuItems;
}

// Load menu items at module initialization
const menuItems = loadMenuItems();

/**
 * Get visible menu items
 */
export function getVisibleMenuItems(): MenuItem[] {
  return menuItems.filter(item => item.visible);
}

