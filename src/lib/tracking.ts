// UTM parameter extraction
export function getUTMParams(): Record<string, string> {
  const params = new URLSearchParams(window.location.search)
  return {
    utm_source: params.get('utm_source') || '',
    utm_medium: params.get('utm_medium') || '',
    utm_campaign: params.get('utm_campaign') || '',
    utm_content: params.get('utm_content') || '',
    utm_term: params.get('utm_term') || '',
  }
}

export function trackEvent(eventName: string, params?: Record<string, string>) {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', eventName, params)
  }
}

export function trackSectionView(sectionName: string) {
  trackEvent('section_view', { section: sectionName })
}

export function trackWhatsAppClick() {
  trackEvent('whatsapp_click', { event_category: 'engagement' })
}

export function trackProgramClick(programName: string) {
  trackEvent('program_interest', { program: programName })
}

declare global {
  interface Window {
    gtag: (...args: unknown[]) => void
    dataLayer: unknown[]
  }
}
