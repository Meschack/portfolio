import { Experience } from '../experience'

export const Experiences = () => {
  return (
    <div className="flex flex-col items-start justify-start bg-foreground px-4 py-10 lg:flex-row lg:px-20 lg:py-14">
      <div className="lg:centered flex flex-col items-center justify-center gap-5 lg:px-20">
        <h2 className="display-text-m md:display-text flex items-center justify-center gap-4 py-5 text-background">
          <span>My</span>
          <span className="font-extrabold">Experience</span>
        </h2>

        <div className="flex flex-col items-center justify-center gap-5">
          <Experience
            description="As a Web Developer at Tecnocom, I contribute to the development and maintenance of internal business applications. I work with a modern stack including Next.js, NestJS, TypeScript, and PostgreSQL to build reliable, scalable solutions. My responsibilities include implementing new features, improving UI/UX, and optimizing backend performance for real-world production use."
            period="Jun 2024 – Present"
            title="Web Developer – Tecnocom"
          />

          <Experience
            description="During this internship, I worked on several core modules of internal tools, gaining hands-on experience with full-stack development. I focused on frontend integration using Next.js and backend tasks with NestJS, while also learning to manage deployments and version control workflows in a professional setting."
            period="Mar 2024 – Jun 2024"
            title="Web Development Intern – Tecnocom"
          />

          <Experience
            description="Along with my study program, I collaborated with senior developers to build and improve key features for enterprise web platforms. This role helped me deepen my understanding of TypeScript-based development and taught me how to balance learning with production-ready contributions."
            period="Nov 2023 – Mar 2024"
            title="Web Developer Apprentice – Tecnocom"
          />

          <Experience
            description="In this government internship, I supported the digitalization of administrative services by developing internal web tools. I worked on designing interfaces and building out functionality using technologies like React.js and Node.js, while also learning about the importance of accessibility, security, and scalability in public-sector software."
            period="Jun 2023 – Sep 2023"
            title="Web Development Intern – IT Department, Ministry of Planning and Government Action"
          />
        </div>
      </div>
    </div>
  )
}
