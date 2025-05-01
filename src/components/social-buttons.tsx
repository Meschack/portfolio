'use client'

import { Icons } from './icons'
import { Button } from './ui/button'

interface SocialButtonProps {
  social: (typeof socials)[number]
}

const socials = [
  {
    name: 'facebook',
    link: 'https://facebook.com/meschackgodwin'
  },
  {
    name: 'reddit',
    link: '#'
  },
  {
    name: 'discord',
    link: 'https://discord.com/users/1046896178148683827'
  },
  {
    name: 'twitter',
    link: 'https://twitter.com/MeschackGbz'
  }
] as const

const SocialButton = ({ social }: SocialButtonProps) => {
  const IconComponent = Icons[social.name]

  return (
    <Button asChild size="icon" className="group border bg-transparent hover:bg-zinc-50">
      <a href={social.link}>
        <IconComponent />
      </a>
    </Button>
  )
}

const SocialButtons = ({ className }: { className: string }) => {
  return (
    <div className={`flex items-start justify-start gap-6 py-1 ${className}`}>
      {socials.map((social) => (
        <SocialButton key={social.name} social={social} />
      ))}
    </div>
  )
}

export { SocialButtons }
