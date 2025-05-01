'use client'

import Image from 'next/image'

export const AboutMe = () => {
  return (
    <div
      id="about-me"
      className="lg:centered flex flex-col items-start justify-start px-4 py-10 lg:flex-row lg:items-center lg:justify-center lg:px-20 lg:py-14"
    >
      <div className="flex flex-col items-center justify-start gap-5 lg:flex-row lg:justify-between lg:gap-16">
        <Image alt="" src={'/boy2.png'} width={343} height={374} className="block lg:hidden" />
        <Image
          alt=""
          src={'/boy2-desktop.png'}
          width={530}
          height={572}
          className="hidden lg:block"
        />
        <div className="flex flex-col items-start justify-start gap-5 lg:w-[65%]">
          <h2 className="display-text-m md:display-text flex w-full items-center justify-start gap-4 py-5 text-foreground">
            <span>About</span>
            <span className="font-extrabold">Me</span>
          </h2>
          <div
            className={`paragraph2 flex flex-col text-zinc-500 items-start justify-center gap-5`}
          >
            <p>
              I'm Godwin, a self-taught full-stack developer with a deep appreciation for clean
              code, beautiful interfaces, and seamless user experiences. I specialize in building
              modern web applications with technologies like Next.js, TypeScript, NestJS, Tailwind
              CSS, and Supabase. I care deeply about bridging the gap between design and
              development—making sure every product I work on is both technically solid and visually
              refined. Writing readable, maintainable, and performant code is something I take pride
              in.
            </p>
            <p>
              I began my journey into web development in 2018, and since then, I've continuously
              evolved by taking on challenging projects, learning from the community, and pushing
              myself to stay ahead in a fast-moving ecosystem. Whether it's crafting scalable
              backends, designing responsive UIs, or setting up DevOps pipelines, I love being
              involved in the full development lifecycle. I'm also exploring areas like
              offline-first experiences and automation to make apps more resilient and
              user-friendly.
            </p>
            <p>
              When I'm not coding, you'll often find me browsing through indie hacker stories,
              drawing inspiration from early-stage products and builders. I also enjoy sharing what
              I learn—either on GitHub through open-source contributions or on social platforms
              where I talk about tools, techniques, and real-world dev experiences. I'm always
              building, always learning, and always looking for ways to create better digital
              products.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
