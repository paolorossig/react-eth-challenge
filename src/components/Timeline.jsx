const Timeline = ({ events }) => {
  return (
    <ul className="flex flex-col gap-4 border-l border-gray-300 pl-4">
      {events.map((item, index) => {
        const { date, title, subTitle, description } = item

        return (
          <li key={`${title}-${index}`} className="relative mt-2">
            <div className="absolute -left-6 mt-1 h-4 w-4 rounded-full bg-gray-300" />
            <p className="text-gray-400">{date}</p>
            <h3 className="text-xl font-extrabold">{title}</h3>
            <p className="font-semibold">{subTitle}</p>
            <p className="mt-2">{description}</p>
          </li>
        )
      })}
    </ul>
  )
}

export default Timeline
