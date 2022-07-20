const Card = ({ title, src }) => {
  return (
    <article className="relative h-[300px] w-[154px] overflow-hidden rounded-xl object-fill">
      <div className="absolute bottom-0 left-0 z-10 w-full bg-gradient-to-b from-transparent to-slate-800 pt-[80px] pl-2 pb-2">
        <h3 className="font-semibold text-white">{title}</h3>
      </div>
      <img
        src={src}
        alt={`${title} image`}
        className="h-full object-cover object-right brightness-90 saturate-50"
      />
    </article>
  )
}

export default Card
