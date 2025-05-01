'use client'

import { defaultIconStyle, hoverIconStyle } from '@/utils/constants'

import { Icons } from './icons'
import { skills } from './layout/skills'

interface SkillProps {
  name: (typeof skills)[number]
}

const Skill = ({ name }: SkillProps) => {
  const IconComponent = Icons[name]

  return (
    <div className="group inline-flex aspect-square flex-col items-center cursor-pointer justify-center gap-8 rounded border border-foreground p-6 text-foreground hover:bg-foreground hover:text-background md:hover:scale-105">
      <div className="flex items-center justify-center">
        <IconComponent className={defaultIconStyle} />
        <IconComponent hover className={hoverIconStyle} />
      </div>

      <span className="heading5 text-center font-bold capitalize">{name}</span>
    </div>
  )
}

export { Skill }
