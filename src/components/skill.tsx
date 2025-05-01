'use client'

import { defaultIconStyle, hoverIconStyle } from '@/utils/constants'

import { SkillEnum } from '@/types/skill'

import { Icons } from './icons'

interface SkillProps {
  name: string
}

const Skill = ({ name }: SkillProps) => {
  return (
    <div
      className={`group inline-flex w-1/2 flex-col items-center justify-center gap-8 rounded-[4px] border border-foreground p-6 text-foreground transition delay-150 duration-300 ease-in-out hover:bg-foreground hover:text-background md:hover:scale-125`}
    >
      {name === SkillEnum.typescript ? (
        <div>
          <Icons.typescript className={defaultIconStyle} />
          <Icons.typescript hover className={hoverIconStyle} />
        </div>
      ) : name === SkillEnum.express ? (
        <div>
          <Icons.express className={defaultIconStyle} />
          <Icons.express hover className={hoverIconStyle} />
        </div>
      ) : name === SkillEnum.figma ? (
        <div>
          <Icons.figma className={defaultIconStyle} />
          <Icons.figma hover className={hoverIconStyle} />
        </div>
      ) : name === SkillEnum.git ? (
        <div>
          <Icons.git className={defaultIconStyle} />
          <Icons.git hover className={hoverIconStyle} />
        </div>
      ) : name === SkillEnum.javascript ? (
        <div>
          <Icons.javascript className={defaultIconStyle} />
          <Icons.javascript hover className={hoverIconStyle} />
        </div>
      ) : name === SkillEnum.mongodb ? (
        <div>
          <Icons.mongodb className={defaultIconStyle} />
          <Icons.mongodb hover className={hoverIconStyle} />
        </div>
      ) : name === SkillEnum.sass ? (
        <div>
          <Icons.sass className={`${defaultIconStyle}`} />
          <Icons.sass hover className={hoverIconStyle} />
        </div>
      ) : name === SkillEnum.nodejs ? (
        <div>
          <Icons.nodejs className={defaultIconStyle} />
          <Icons.nodejs hover className={hoverIconStyle} />
        </div>
      ) : name === SkillEnum.react ? (
        <div>
          <Icons.react className={`${defaultIconStyle}`} />
          <Icons.react hover className={`${hoverIconStyle}`} />
        </div>
      ) : (
        <div>
          <Icons.socket className={defaultIconStyle} />
          <Icons.socket hover className={hoverIconStyle} />
        </div>
      )}
      <span className="heading5 text-center font-bold capitalize">{name}</span>
    </div>
  )
}

export { Skill }
