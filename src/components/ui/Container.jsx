const Container = ({ theme = 'light', children }) => {
  return (
    <div
      className={`${
        theme === 'light' ? 'bg-white text-black' : 'bg-slate-800 text-white'
      }`}
    >
      <div className="m-auto max-w-3xl">{children}</div>
    </div>
  )
}

export default Container
