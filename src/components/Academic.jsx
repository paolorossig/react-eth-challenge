import Container from './Container'
import Timeline from './Timeline'
import { getData } from '../utils'

const Academic = () => {
  const { academic } = getData()

  const events = academic.map((study) => {
    const { degree, institution, startDate, endDate, description } = study

    return {
      date: `${startDate} - ${endDate}`,
      title: degree,
      subTitle: institution,
      description,
    }
  })

  return (
    <Container>
      <section className="mb-12 flex flex-col px-4">
        <h1 className="mb-4 pt-6 text-2xl font-semibold text-slate-800 md:pt-12">
          Academic
        </h1>
        <Timeline events={events} />
      </section>
    </Container>
  )
}

export default Academic
