import Container from './ui/Container'
import { getData } from '../utils'

const Skills = () => {
  const { skills } = getData()

  return (
    <Container theme="dark">
      <section className="flex flex-col px-4 py-16">
        <h1 className="mb-8 text-2xl font-extrabold text-brand">Skills</h1>
        <ul className="grid auto-cols-[minmax(48px,_1fr)] grid-flow-col grid-rows-4 gap-12 md:grid-rows-2">
          {skills.map(({ name, src }) => (
            <li key={name} className="group relative">
              <div className="flex flex-col items-center justify-center">
                <img src={src} alt={`${name} icon`} className="h-12 w-12" />
                <span className="absolute -bottom-9 hidden rounded-md bg-gray-300/25 p-1 text-sm group-hover:flex">
                  {name}
                </span>
              </div>
            </li>
          ))}
        </ul>
      </section>
    </Container>
  )
}

export default Skills
