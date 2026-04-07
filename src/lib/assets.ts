const BASE = import.meta.env.BASE_URL || '/'

export function img(path: string): string {
  // path should be like "/images/foo.png"
  // returns "/ethames-landing/images/foo.png" in production
  return `${BASE}${path.startsWith('/') ? path.slice(1) : path}`
}
