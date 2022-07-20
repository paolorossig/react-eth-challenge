import Container from './Container'
import { getData } from '../utils'

const Interest = () => {
  const { interest } = getData()

  return (
    <Container>
      <section className="flex flex-col px-4 py-20">
        <h1 className="mb-6 text-2xl font-extrabold text-brand">Interests</h1>
        <ul className="flex flex-wrap gap-12">
          {interest.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>
    </Container>
  )
}

export default Interest
