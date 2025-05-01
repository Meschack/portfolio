'use client'

import { Icons } from './icons'
import { Button } from './ui/button'

interface SocialButtonProps {
  social: SocialEnum
}

enum SocialEnum {
  facebook = 'facebook',
  reddit = 'reddit',
  discord = 'discord',
  twitter = 'twitter'
}

const SocialButton = ({ social }: SocialButtonProps) => {
  const IconComponent = Icons[social]

  return (
    <Button size={'icon'} className="group border bg-transparent hover:bg-zinc-50">
      <IconComponent />
    </Button>
  )
}

const SocialButtons = ({ className }: { className: string }) => {
  return (
    <div className={`flex items-start justify-start gap-6 py-1 ${className}`}>
      <SocialButton social={SocialEnum.facebook} />
      <SocialButton social={SocialEnum.reddit} />
      <SocialButton social={SocialEnum.discord} />
      <SocialButton social={SocialEnum.twitter} />
    </div>
  )
}

export { SocialButtons }
