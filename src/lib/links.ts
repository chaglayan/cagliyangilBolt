export function personHref(person: 'mehmet' | 'maria'): string {
  if (typeof window === 'undefined') {
    return `https://${person}.cagliyangil.com`;
  }
  const host = window.location.hostname.toLowerCase();
  const isProd = host === 'cagliyangil.com' || host.endsWith('.cagliyangil.com');
  return isProd ? `https://${person}.cagliyangil.com` : `/${person}`;
}

export function homeHref(): string {
  if (typeof window === 'undefined') return 'https://cagliyangil.com';
  const host = window.location.hostname.toLowerCase();
  const isProd = host === 'cagliyangil.com' || host.endsWith('.cagliyangil.com');
  return isProd ? 'https://cagliyangil.com' : '/';
}
