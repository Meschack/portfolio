'use client'

interface ExperienceProps {
  title: string
  period: string
  description: string
}

const Experience = ({ title, period, description }: ExperienceProps) => {
  return (
    <div
      className={`flex flex-col items-start justify-start hover:bg-zinc-800 gap-7 rounded-[10px] border border-zinc-500 bg-foreground px-6 py-[30px]`}
    >
      <div className="flex w-full flex-col items-start justify-start gap-[30px] md:flex-row md:justify-between md:gap-0">
        <div className="flex items-center justify-start gap-[30px]">
          <span className="heading4 font-semibold capitalize text-background">{title}</span>
        </div>

        <span className={`heading6 text-center font-semibold text-zinc-300 whitespace-nowrap`}>
          {period}
        </span>
      </div>

      <p className={`paragraph2 text-zinc-300`}>{description}</p>
    </div>
  )
}

export { Experience }
