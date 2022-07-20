import Container from './ui/Container'
import Timeline from './ui/Timeline'
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
      <section className="flex flex-col px-4 py-6 md:py-12">
        <h1 className="mb-4 text-2xl font-semibold text-slate-800">Academic</h1>
        <Timeline events={events} />
      </section>
    </Container>
  )
}

export default Academic
