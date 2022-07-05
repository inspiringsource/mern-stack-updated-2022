import { Link, useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { logout, reset } from '../features/auth/authSlice'
import logo from './uni-logo.png'
import './header.css'

function Header() {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const { user } = useSelector((state) => state.auth)

  const onLogout = () => {
    dispatch(logout())
    dispatch(reset())
    navigate('/')
  }

  return (
    <header className="navbar bg-base-100 w-full pb-8">
      <div className="pl-4">
        <img src={logo} alt="logo" className="w-[120px]"></img>
      </div>
      <div id='navi'>
        <ul id='btnList' className="flex px-6 space-x-4 py-8">
          <button className="w-20 h-14 text-white font-bold py-0 px-4 border-green-700 rounded bg-green-700 hover:bg-green-600 btn-accent">
            <li>
              <Link to="/">Home</Link>
            </li>
          </button>
          <button className="w-20 h-14 text-white font-bold py-2 px-4 border-green-700 rounded bg-green-700 hover:bg-green-600 btn-accent">
            <li>
              <Link to="/about">About</Link>
            </li>
          </button>
          <button className="w-20 h-14 text-white font-bold py-2 px-4 border-green-700 rounded bg-green-700 hover:bg-green-600 btn-accent">
            <li>
              <Link to="/events">Events</Link>
            </li>
          </button>
          <button className="w-20 h-14 text-white font-bold py-2 px-2.5 border-green-700 rounded bg-green-700 hover:bg-green-600 btn-accent">
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </button>
        </ul>
      </div>

      <div
        id="loginBtns"
        className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-28 mr-4"
      >
        <ul>
          {user ? (
            <li className='pl-4'>
              <button className="btn text-white" onClick={onLogout}>
                Logout
              </button>
            </li>
          ) : (
            <>
              <li>
                <Link to="/login">Login</Link>
              </li>
              <li>
                <Link to="/register">Register</Link>
              </li>
            </>
          )}
        </ul>
      </div>
    </header>
  )
}

export default Header
