'use client'

import { useState } from 'react'

import { SocialButtons } from '../social-buttons'
import { Button } from '../ui/button'
import { Input } from '../ui/input'
import { Textarea } from '../ui/textarea'

export function ContactMe() {
  const [formdata, setFormdata] = useState({
    fullname: '',
    email: '',
    website: '',
    message: ''
  })
  const [error, setError] = useState({
    email: false,
    message: false
  })
  const [disabled, setDisabled] = useState(false)
  const handleClick = () => {
    setError({
      email: false,
      message: false
    })
    if (formdata.email.length == 0) {
      setError({ email: true, message: false })
    } else if (formdata.message.length == 0) {
      setError({ email: false, message: true })
    } else {
      setDisabled(true)
    }
  }
  const handleReset = () => {
    setFormdata({
      fullname: '',
      email: '',
      website: '',
      message: ''
    })
    setDisabled(false)
  }
  return (
    <div
      id="contact-me"
      className="md:centered flex flex-col items-start justify-start px-4 py-10 md:px-12 md:py-14"
    >
      <div className="flex flex-col items-start justify-start md:items-center md:justify-center">
        <h2 className="display-text-m md:display-text flex w-full items-center justify-center gap-4 py-5 text-foreground">
          <span>Contact</span>
          <span className="font-extrabold">Me</span>
        </h2>
        <div className="flex flex-col items-start justify-start md:flex-row md:items-center md:justify-between md:gap-20 md:px-8">
          <div className="flex w-full flex-col items-start justify-center gap-5 py-5">
            <Input
              type="text"
              placeholder="Your name"
              value={formdata.fullname}
              disabled={disabled}
              onChange={(e) =>
                setFormdata({
                  ...formdata,
                  fullname: e.target.value
                })
              }
            />
            <Input
              type="email"
              placeholder="Email"
              disabled={disabled}
              value={formdata.email}
              onChange={(e) =>
                setFormdata({
                  ...formdata,
                  email: e.target.value
                })
              }
            />
            <Input
              type="url"
              placeholder="Your website (if exists)"
              disabled={disabled}
              value={formdata.website}
              onChange={(e) =>
                setFormdata({
                  ...formdata,
                  website: e.target.value
                })
              }
            />
            <Textarea
              placeholder="How can i help ?"
              disabled={disabled}
              value={formdata.message}
              variant={error.message ? 'error' : 'default'}
              error={error.message}
              onChange={(e) =>
                setFormdata({
                  ...formdata,
                  message: e.target.value
                })
              }
            />
            <div className="flex w-full items-center justify-between">
              {disabled ? (
                <Button type="reset" onClick={handleReset}>
                  Reset
                </Button>
              ) : (
                <Button type="submit" onClick={handleClick}>
                  Get In Touch
                </Button>
              )}
              <SocialButtons className="hidden lg:flex" />
            </div>
            <SocialButtons className="flex lg:hidden" />
          </div>
          <div className="flex flex-col items-start justify-center gap-8 py-5">
            <div className="flex flex-col items-start justify-center gap-3">
              <div className="flex items-start justify-start gap-4">
                <span className="display-text-m md:display-text font-extrabold text-foreground">
                  Let&apos;s
                </span>
                <span className="heading3 md:display-text outlined font-extrabold">talk</span>
                <span className="display-text-m md:display-text font-extrabold text-foreground">
                  for
                </span>
              </div>
              <div className="display-text-m md:display-text font-extrabold text-foreground">
                Something special
              </div>
            </div>
            <p className={`paragraph2 text-zinc-500`}>
              I seek to push the limits of creativity to create high-engaging, user-friendly, and
              memorable interactive experiences.
            </p>
            <div className="heading5 md:heading3 flex flex-col items-start justify-center gap-3 font-bold text-foreground md:font-semibold">
              <a href="mailto:meshachgbewezoun@gmail.com">meshachgbewezoun@gmail.com</a>
              <a href="tel:+2290154142205">01 54 14 22 05</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
