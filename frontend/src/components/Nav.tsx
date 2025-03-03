import { Link } from 'react-router-dom'

const Nav = () => {
  return (
    <div className="p-4 w-full flex space-x-8 justify-between items-center bg-MISSIONblack text-white md:px-16">
      <img
        className="h-12"
        src="/images/rocket-logo.png"
        alt="AdvanceTEC"
      />
      <div className="flex space-x-4">
        <Link to={`/`}>Home</Link>
      </div>
    </div>
  )
}
export default Nav
