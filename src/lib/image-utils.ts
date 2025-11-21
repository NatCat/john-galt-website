/**
 * Helper function to resolve image paths from CMS
 * CMS stores paths like /john-galt-website/images/uploads/file.jpg
 * In development, BASE_URL is /, so we need /images/uploads/file.jpg
 * In production, BASE_URL is /john-galt-website/, so we need /john-galt-website/images/uploads/file.jpg
 */
export function getImageUrl(imagePath: string | undefined): string {
  if (!imagePath) return '';
  if (imagePath.startsWith('http')) return imagePath;
  
  // CMS stores paths like /john-galt-website/images/uploads/file.jpg
  // We need to remove the /john-galt-website prefix and then add BASE_URL
  let cleanPath = imagePath.trim();
  
  // Remove /john-galt-website prefix if present (for both /john-galt-website/ and /john-galt-website)
  if (cleanPath.startsWith('/john-galt-website')) {
    cleanPath = cleanPath.replace(/^\/john-galt-website/, '');
  }
  
  // Ensure path starts with /
  if (!cleanPath.startsWith('/')) {
    cleanPath = '/' + cleanPath;
  }
  
  // Get BASE_URL and ensure it doesn't have trailing slash
  const base = import.meta.env.BASE_URL.replace(/\/$/, '') || '';
  
  // Combine: base + cleanPath
  // In dev: '' + '/images/uploads/file.jpg' = '/images/uploads/file.jpg'
  // In prod: '/john-galt-website' + '/images/uploads/file.jpg' = '/john-galt-website/images/uploads/file.jpg'
  return `${base}${cleanPath}`;
}

