import { ProjectType } from '@/types/project'
import { TestimonialType } from '@/types/testimonial'

const projects: ProjectType[] = [
  {
    description: (
      <p className="paragraph2 text-zinc-500">
        A modern and responsive platform for booking medical appointments, built with{' '}
        <a href="https://nextjs.org/">Next.js</a>,{' '}
        <a href="https://www.typescriptlang.org/">TypeScript</a>, and{' '}
        <a href="https://tailwindcss.com/">Tailwind CSS</a>. The platform leverages{' '}
        <a href="https://clerk.dev/">Clerk</a> for user management and authentication, providing a
        secure and seamless experience for patients and doctors.
      </p>
    ),
    image: '/doctrin.jpg',
    link: 'https://doctrin.vercel.app',
    title: 'Doctor+ Medical Landing Page'
  },
  {
    description: (
      <p className="paragraph2 text-zinc-500">
        I'm Vivien Ogoun. Lorem Ipsum is simply dummy text of the printing and typesetting industry.
        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an
        unknown printer took a galley of type and scrambled it to specimen book.
      </p>
    ),
    image: '/ballamas.png',
    link: 'https://ballamas-store.vercel.app/',
    title: 'Ballamas | E-commerce Minimal Website'
  },
  {
    description: (
      <p className="paragraph2 text-zinc-500">
        A modern and responsive dashboard for tracking cryptocurrency data, built with{' '}
        <a href="https://nextjs.org/" className="underline underline-offset-2">
          Next.js
        </a>
        ,{' '}
        <a href="https://www.typescriptlang.org/" className="underline underline-offset-2">
          TypeScript
        </a>
        , and{' '}
        <a href="https://tailwindcss.com/" className="underline underline-offset-2">
          Tailwind CSS
        </a>
        . The dashboard leverages the{' '}
        <a
          href="https://www.coingecko.com/en/api"
          className="underline underline-offset-2 text-white"
        >
          Coingecko API
        </a>{' '}
        to provide real-time market data, including prices, market cap, and trading volume for a
        wide range of cryptocurrencies.
      </p>
    ),
    image: '/tokena.png',
    link: 'https://tokena-dashboard.vercel.app/',
    title: 'Cryptocurrency Dashboard'
  }
]

const testimonials: TestimonialType[] = [
  {
    content:
      'I recently had to jump on 10+ different calls across eight different countries to find the right owner.',
    image: '/testimonial-boy.png',
    name: 'Evren Shah',
    role: 'Designer'
  },
  {
    content:
      'I recently had to jump on 10+ different calls across eight different countries to find the right owner.',
    image: '/testimonial-girl.png',
    name: 'Flora sheen',
    role: 'Designer'
  },
  {
    content:
      'I recently had to jump on 10+ different calls across eight different countries to find the right owner.',
    image: '/testimonial-boy.png',
    name: 'Evren Shah',
    role: 'Designer'
  }
]

export { projects, testimonials }
