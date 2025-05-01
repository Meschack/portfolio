import { cn } from '@/lib/utils'
import { Icons } from './icons'

interface LogoProps {
  from: string
}

const Logo = ({ from }: LogoProps) => {
  return (
    <div
      className={cn(
        'inline-flex items-center justify-start gap-2 md:gap-3',
        from === 'header' ? 'text-foreground' : 'text-background'
      )}
    >
      <Icons.logo className="size-7 md:size-10" />
      <span className="heading5 font-bold">Personal</span>
    </div>
  )
}

export { Logo }
