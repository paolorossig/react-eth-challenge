import Container from './Container'
import { getData } from '../utils'

const Skills = () => {
  const { skills } = getData()

  return (
    <Container theme="dark">
      <section className="flex flex-col px-4 py-20">
        <h1 className="mb-6 text-2xl font-extrabold text-brand">Skills</h1>
        <ul className="flex flex-wrap gap-12">
          {skills.map(({ name, src }) => (
            <li
              key={name}
              className="group relative flex flex-col items-center justify-center"
            >
              <img src={src} alt={`${name} icon`} className="h-12 w-12" />
              <span className="absolute -bottom-9 hidden rounded-md bg-gray-300/25 p-1 text-sm group-hover:flex">
                {name}
              </span>
            </li>
          ))}
        </ul>
      </section>
    </Container>
  )
}

export default Skills
