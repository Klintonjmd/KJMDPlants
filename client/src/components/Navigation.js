import { Link } from 'react-router-dom'

export default function Navigation() {
  return (
    <div className="navbar bg-base-100">
      <div className="flex-1">
      <Link to='/'>
        <a className="text-xl btn btn-ghost">KJMDPlants</a>
      </Link>
      </div>
      <div className="flex-none">
        <ul className="px-1 menu menu-horizontal">
        <li><Link className='text-white' to='/signup'>Sign Up</Link></li>
        <li className='pl-16 text-white'><Link to='/signin'>Sign In</Link></li>
        <li><a className='pl-16 text-white' href='http://klintonjmd.com/' target="_blank">Portfolio</a></li>
        </ul>
      </div>
    </div>
  )
}