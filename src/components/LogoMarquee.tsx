import { InfiniteSlider } from './InfiniteSlider'
import {
  CourseraLogo,
  KPMGLogo,
  HarvardLogo,
  OsmaniaLogo,
  IIITLogo,
  TiELogo,
} from './icons/PartnerLogos'

const partners = [
  { name: 'KPMG', Logo: KPMGLogo },
  { name: 'Coursera', Logo: CourseraLogo },
  { name: 'Harvard Business Publishing', Logo: HarvardLogo },
  { name: 'Osmania University', Logo: OsmaniaLogo },
  { name: 'IIIT Hyderabad', Logo: IIITLogo },
  { name: 'TiE', Logo: TiELogo },
]

export default function LogoMarquee() {
  return (
    <section className="relative py-6 sm:py-8 bg-white border-y border-gray-100">
      <div
        className="relative"
        style={{
          maskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)',
          WebkitMaskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)',
        }}
      >
        <InfiniteSlider gap={80} speed={35} speedOnHover={15}>
          {partners.map((partner) => (
            <div
              key={partner.name}
              className="flex items-center shrink-0 select-none px-4 opacity-60 hover:opacity-100 transition-opacity duration-300"
            >
              <partner.Logo className="h-7 sm:h-8" />
            </div>
          ))}
        </InfiniteSlider>
      </div>
      <p className="text-center text-xs text-muted mt-4 tracking-wide uppercase">
        Curriculum and industry partnerships that shape every program
      </p>
    </section>
  )
}
