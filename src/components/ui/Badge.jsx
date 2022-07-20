const Badge = ({ title, subTitle, src }) => {
  return (
    <div className="flex items-center space-x-2 rounded-xl bg-slate-800 py-3 pr-6 pl-4 text-white">
      <img src={src} alt="Image" className="mr-4 h-16" />
      <div>
        <h3 className="text-xl font-semibold">{title}</h3>
        <p className="text-gray-300">{subTitle}</p>
      </div>
    </div>
  )
}

export default Badge
