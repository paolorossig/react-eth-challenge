import { getData } from '../utils'
import Container from './ui/Container'

const Header = () => {
  const { avatar, name, profession, phone, email, website, address } = getData()
  const websiteName = website.replace(/^(http:\/\/|https:\/\/)/, '')

  return (
    <Container theme="dark">
      <section className="flex items-center justify-between py-6 px-4">
        <img
          src={avatar}
          alt="Profile image"
          className="h-24 w-24 rounded-full md:h-36 md:w-36"
        />
        <div className="ml-4 flex-1 md:flex-none">
          <h1 className="text-4xl">{name}</h1>
          <h2 className="mt-2 hidden items-center text-lg md:flex">
            {profession + ' @ '}
            <span className="ml-2 inline-flex h-6">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/0/06/Rappi_logo.svg"
                alt=""
              />
            </span>
          </h2>
          <div className="mt-5 grid grid-cols-1 gap-y-1 gap-x-32 text-gray-300 md:grid-cols-2">
            <p>{email}</p>
            <p>{phone}</p>
            <a
              href={website}
              target="_blanck"
              rel="noopener noreferrer"
              className="hover:text-brand"
            >
              {websiteName}
            </a>
            <p>{address}</p>
          </div>
        </div>
      </section>
    </Container>
  )
}

export default Header
