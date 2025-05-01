import { Skill } from '../skill'

export const skills = [
  'typescript',
  'javascript',
  'react',
  'nextjs',
  'tailwindcss',
  'nestjs',
  'adonisjs',
  'figma',
  'git',
  'prisma'
] as const

export const Skills = () => {
  return (
    <div
      id="skills"
      className={`md:centered flex flex-col items-start justify-start px-4 py-10 md:w-full md:items-center md:justify-center md:px-12 md:py-14`}
    >
      <div className="flex w-full flex-col items-start justify-start gap-5">
        <h2 className="display-text-m md:display-text flex w-full items-center justify-center gap-4 py-5 text-foreground">
          <span>My</span>
          <span className="font-extrabold">Skills</span>
        </h2>
        <div className="w-full grid grid-cols-2 md:grid-cols-5 gap-10 py-5">
          {skills.map((skill) => (
            <Skill key={skill} name={skill} />
          ))}
        </div>
      </div>
    </div>
  )
}
