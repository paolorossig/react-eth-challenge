import Container from './ui/Container'
import Card from './ui/Card'
import { getData } from '../utils'

const Interest = () => {
  const { interest } = getData()

  return (
    <Container>
      <section className="flex flex-col px-4 py-10">
        <h1 className="mb-6 text-2xl font-extrabold text-slate-800">
          Interests
        </h1>
        <ul className="flex flex-wrap gap-10">
          {interest.map(({ name, src }) => (
            <li key={name}>
              <Card title={name} src={src} />
            </li>
          ))}
        </ul>
      </section>
    </Container>
  )
}

export default Interest
