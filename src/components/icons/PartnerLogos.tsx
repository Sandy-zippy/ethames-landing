import { img } from '../../lib/assets'
// Partner logos — real images where available, SVG for Coursera/WhatsApp

export function CourseraLogo({ className = 'h-6' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 1155 164" xmlns="http://www.w3.org/2000/svg" fill="currentColor">
      <path d="M160 82c0-45 36-81 82-81s83 36 83 81c0 44-37 80-83 80s-82-36-82-80zm125 0a43 43 0 0 0-86 0 43 43 0 0 0 86 0zm706 1c0-49 40-82 76-82 24 0 38 8 48 22l3-19h37v155h-37l-4-16c-11 12-25 19-47 19-36 0-76-31-76-79zm126 0c0-24-20-43-43-43-24 0-43 19-43 43 0 21 19 41 42 41 24 0 44-20 44-41zM946 22V4h-40v155h40V76c0-26 12-39 34-39l4 1 7-38c-21 0-36 7-45 22zm-404 0V4h-41l1 155h40V76c0-26 12-39 34-39l4 1 7-38c-21 0-36 7-45 22zM339 99V4h40v90c0 20 11 32 31 32 21 0 34-13 34-38V4h40v155h-40v-18c-10 15-25 22-47 22-36 0-58-26-58-64zm392-17c0-44 31-81 80-81 46 0 78 37 78 80l-1 13H770c4 18 20 32 43 32 14 0 29-5 38-17l28 22a80 80 0 0 1-66 31c-47 0-82-35-82-80zm118-16c-3-16-19-28-38-28s-34 11-40 27l78 1zm-262 60 36-19c6 13 18 20 35 20 15 0 21-5 21-12 0-25-85-10-85-67 0-31 28-48 62-48 26 0 49 12 61 33l-35 19c-5-11-15-17-28-17-12 0-18 5-18 12 0 24 85 9 85 67 0 30-25 48-64 48-34 0-58-11-70-36zM0 82C0 37 37 1 82 1c28 0 55 13 70 37l-34 20a43 43 0 0 0-36-19c-23 0-42 20-42 43 0 22 19 42 42 42a43 43 0 0 0 37-20l34 20A83 83 0 0 1 0 82z" fillRule="nonzero"/>
    </svg>
  )
}

export function WhatsAppLogo({ className = 'h-6 w-6' }: { className?: string }) {
  return (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 360 362">
      <path fill="#25D366" fillRule="evenodd" d="M307.546 52.566C273.709 18.684 228.706.017 180.756 0 81.951 0 1.538 80.404 1.504 179.235c-.017 31.594 8.242 62.432 23.928 89.609L0 361.736l95.024-24.925c26.179 14.285 55.659 21.805 85.655 21.814h.077c98.788 0 179.21-80.413 179.244-179.244.017-47.898-18.608-92.926-52.454-126.807v-.008Zm-126.79 275.788h-.06c-26.73-.008-52.952-7.194-75.831-20.765l-5.44-3.231-56.391 14.791 15.05-54.981-3.542-5.638c-14.912-23.721-22.793-51.139-22.776-79.286.035-82.14 66.867-148.973 149.051-148.973 39.793.017 77.198 15.53 105.328 43.695 28.131 28.157 43.61 65.596 43.593 105.398-.035 82.149-66.867 148.982-148.982 148.982v.008Zm81.719-111.577c-4.478-2.243-26.497-13.073-30.606-14.568-4.108-1.496-7.09-2.243-10.073 2.243-2.982 4.487-11.568 14.577-14.181 17.559-2.613 2.991-5.226 3.361-9.704 1.117-4.477-2.243-18.908-6.97-36.02-22.226-13.313-11.878-22.304-26.54-24.916-31.027-2.613-4.486-.275-6.91 1.959-9.136 2.011-2.011 4.478-5.234 6.721-7.847 2.244-2.613 2.983-4.486 4.478-7.469 1.496-2.991.748-5.603-.369-7.847-1.118-2.243-10.073-24.289-13.812-33.253-3.636-8.732-7.331-7.546-10.073-7.692-2.613-.13-5.595-.155-8.586-.155-2.991 0-7.839 1.118-11.947 5.604-4.108 4.486-15.677 15.324-15.677 37.361s16.047 43.344 18.29 46.335c2.243 2.991 31.585 48.225 76.51 67.632 10.684 4.615 19.029 7.374 25.535 9.437 10.727 3.412 20.49 2.931 28.208 1.779 8.604-1.289 26.498-10.838 30.228-21.298 3.73-10.46 3.73-19.433 2.613-21.298-1.117-1.865-4.108-2.991-8.586-5.234l.008-.017Z" clipRule="evenodd"/>
    </svg>
  )
}

// Real image logos
export function KPMGLogo({ className = 'h-8' }: { className?: string }) {
  return <img src={img("/images/kpmg-logo.png")} alt="KPMG" className={`${className} object-contain`} />
}

export function HarvardLogo({ className = 'h-6' }: { className?: string }) {
  return <img src={img("/images/hbp-logo.png")} alt="Harvard Manage Mentor" className={`${className} object-contain`} />
}

export function OsmaniaLogo({ className = 'h-8' }: { className?: string }) {
  return <img src={img("/images/osmania-logo.png")} alt="Osmania University" className={`${className} object-contain`} />
}

export function IIITLogo({ className = 'h-6' }: { className?: string }) {
  return (
    <div className={`${className} flex items-center gap-1.5`}>
      <span className="font-bold text-sm text-[#003366] whitespace-nowrap">IIIT Hyderabad</span>
    </div>
  )
}

export function TiELogo({ className = 'h-8' }: { className?: string }) {
  return <img src={img("/images/tie-logo.png")} alt="TiE" className={`${className} object-contain`} />
}

export function EYLogo({ className = 'h-8' }: { className?: string }) {
  return <img src={img("/images/ey-logo.svg")} alt="Ernst & Young" className={`${className} object-contain`} />
}
