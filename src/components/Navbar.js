import React, {useState} from 'react'
import { useDispatch, useSelector} from 'react-redux'
import { useNavigate } from 'react-router-dom';
import { logout } from '../actions/userActions';
import { Link } from 'react-router-dom'
import {FiMenu} from 'react-icons/fi'
import {MdClose} from 'react-icons/md'
import NavDropdown from 'react-bootstrap/NavDropdown';
import { LinkContainer } from 'react-router-bootstrap'
import '../css/navbar.css'

function Navbar() {
    const[click, setClick] = useState(false)
    const handleClick = () => setClick(!click)
    const closeMobileMenu = () => setClick(false)

    const userLogin = useSelector(state => state.userLogin)
    const { userInfo } = userLogin
    let reload = useNavigate()
    const dispatch = useDispatch()
  
    const logoutHandler = () => {
      dispatch(logout())
    }

  return (
    <div>
        <nav className='navbar'>
            <div className='navbar-container'>
                <Link to='/' className="navbar-logo">
                    LOCKER
                </Link>
                <div className='menu-icon' onClick={handleClick}>
                    {click ? <MdClose/> : <FiMenu/>}
                </div>
                <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                    {userInfo ? (<>
                        <li className='nav-item'>
                          <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                              Home
                          </Link>
                        </li>
                        <li className='nav-item'>
                              <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                                  Chat
                              </Link>
                          </li>
                          <li className='nav-item'>
                          <NavDropdown className='userName' title={userInfo.name} id='username'>
                            <LinkContainer to='/profile'>
                            <NavDropdown.Item>Profile</NavDropdown.Item>
                            </LinkContainer>
                            <LinkContainer to='/add'>
                            <NavDropdown.Item>Add</NavDropdown.Item>
                            </LinkContainer>
                            <LinkContainer to='/favourite'>
                            <NavDropdown.Item>Favourite</NavDropdown.Item>
                            </LinkContainer>
                            <LinkContainer to='/help'>
                            <NavDropdown.Item>Help</NavDropdown.Item>
                            </LinkContainer>
                            <NavDropdown.Divider />
                            <NavDropdown.Item onClick={logoutHandler}>Logout</NavDropdown.Item>

                        </NavDropdown>
                          </li>
                          </>) : (<>
                          <li className='nav-item'>
                              <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                                  Quick look
                              </Link>
                          </li>
                          <li className='nav-item'>
                              <Link to='/register' className='nav-links' onClick={closeMobileMenu}>
                                  Register
                              </Link>
                          </li>
                          <li className='nav-item'>
                              <Link to='/login' className='nav-links' onClick={closeMobileMenu}>
                                  Sign up
                              </Link>
                          </li>
                          </>)}
                   
                </ul>
            </div>
        </nav>
    </div>
  )
}

export default Navbar