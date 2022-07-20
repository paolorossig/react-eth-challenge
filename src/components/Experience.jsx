import Container from './ui/Container'
import Timeline from './ui/Timeline'
import { getData } from '../utils'

const Experience = () => {
  const { experience } = getData()

  const events = experience.map((job) => {
    const { jobTitle, company, startDate, endDate, jobDescription } = job

    return {
      date: `${startDate} - ${endDate}`,
      title: jobTitle,
      subTitle: company,
      description: jobDescription,
    }
  })

  return (
    <Container>
      <section className="flex flex-col px-4 py-6 md:py-12">
        <h1 className="mb-4 text-2xl font-semibold text-slate-800">
          Experience
        </h1>
        <Timeline events={events} />
      </section>
    </Container>
  )
}

export default Experience
