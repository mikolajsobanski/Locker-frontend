import React from 'react'
import { useDispatch, useSelector} from 'react-redux'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { LinkContainer } from 'react-router-bootstrap'
import SearchBox from './SearchBox';
import { useNavigate } from 'react-router-dom';
import { logout } from '../actions/userActions';


function Header() {

  const userLogin = useSelector(state => state.userLogin)
  const { userInfo } = userLogin
  let reload = useNavigate()
  const dispatch = useDispatch()

  const logoutHandler = () => {
    
    dispatch(logout());
    window.location.reload();
    
    
  }
  return (
    <div>
        <header>
        <Navbar collapseOnSelect expand="md" bg="dark" variant="dark">
      <Container>
        <LinkContainer to='/'>
        <Navbar.Brand >Locker</Navbar.Brand>
        </LinkContainer>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
        <SearchBox />
          <Nav className="me-auto">
          
          </Nav>
          <div className='div-clear'></div>
          <Nav>
           
            {userInfo ? (
              <div className='searchBox-divs'>

              <div div className='searchBox-divs'>
              <LinkContainer to='/chat'>
                <Nav.Link href="#deets">CHAT</Nav.Link>
              </LinkContainer>
              </div>


                <div className='searchBox-divs'>
                <NavDropdown title={userInfo.name} id='username'>
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
                </div>
              

              </div>
            ):(
              <div className='searchBox-divs'>

              <div className='searchBox-divs'>
              <LinkContainer to='/register'>
                <Nav.Link href="#deets">QUICK LOOK</Nav.Link>
              </LinkContainer>
              </div>
              
              <div className='searchBox-divs'>
              <LinkContainer to='/register'>
                <Nav.Link href="#deets">REGISTER</Nav.Link>
              </LinkContainer>
              </div>
              
              <div className='searchBox-divs'>
              <LinkContainer to='/login'>
              
              <Nav.Link eventKey={2}>
                <i className='fas fa-user'></i>LOGIN
              </Nav.Link>
            </LinkContainer>
            </div>
            </div>
            )}
            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
        </header>
    </div>
  )
}

export default Header