import Image from 'next/image'
import Link from 'next/link'
import { defaultIconStyle, hoverIconStyle } from '@/utils/constants'

import { ProjectType } from '@/types/project'

import { Icons } from './icons'

type ProjectProps = ProjectType & {
  reverse?: boolean
}

const Project = ({ description, image, title, num, link, reverse }: ProjectProps) => {
  return (
    <div
      className={`flex flex-col ${
        reverse ? 'md:flex-row-reverse' : 'md:flex-row'
      } items-center justify-center gap-7 md:justify-start md:gap-20 md:py-5`}
    >
      <Image
        alt={title}
        src={image}
        width={594}
        height={476}
        className="w-full rounded-xl md:block object-cover"
      />

      <div className="flex flex-col items-start justify-center gap-7 md:w-1/2">
        <div className="heading4 md:display-text font-extrabold text-background">0{num}</div>
        <div className="heading5 md:heading2 font-extrabold text-background">{title}</div>

        {description}

        <Link href={link} target="_blank" rel="noreferrer" className="group text-background">
          <Icons.external className={defaultIconStyle} />
          <Icons.external hover className={hoverIconStyle} />
        </Link>
      </div>
    </div>
  )
}

export { Project }
