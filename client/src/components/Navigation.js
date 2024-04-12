import { Link } from 'react-router-dom'

export default function Navigation() {
  return (
    <div className="navbar bg-neutral text-neutral-content">
      <div className="flex-1">
      <Link to='/'>
        <a className="text-xl btn btn-ghost">KJMDPlants</a>
      </Link>
      </div>
      <div className="flex-none">
        <ul className="px-1 menu menu-horizontal">
        <li><Link className='' to='/signup'>Sign Up</Link></li>
        <li className='pl-12'><Link to='/signin'>Sign In</Link></li>
        <li><a className='pl-12' rel="noreferrer" href='http://klintonjmd.com/' target="_blank">My Portfolio</a></li>
        </ul>
      </div>
    </div>
  )
}