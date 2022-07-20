import Container from './ui/Container'
import { getData } from '../utils'
import Badge from './ui/Badge'

const Languages = () => {
  const { languages } = getData()

  return (
    <Container>
      <section className="flex flex-col px-4 py-10">
        <h1 className="mb-6 text-2xl font-extrabold text-slate-800">
          Languages
        </h1>
        <ul className="flex flex-wrap justify-evenly gap-12">
          {languages.map(({ name, level, src }) => (
            <li key={name}>
              <Badge title={name} subTitle={level} src={src} />
            </li>
          ))}
        </ul>
      </section>
    </Container>
  )
}

export default Languages
