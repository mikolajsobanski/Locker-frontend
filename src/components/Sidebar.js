import React from 'react'
import Nav from 'react-bootstrap/Nav';
import { LinkContainer } from 'react-router-bootstrap'

function Sidebar() {
  return (
        <div>
        <LinkContainer to='/profile'>
              <Nav.Link className='btn btn-light my-4 py-3 rounded'>My Locker</Nav.Link>
        </LinkContainer>
        <LinkContainer to='/add'>
              <Nav.Link className='btn btn-light my-4 py-3 rounded'>Add something new</Nav.Link>
        </LinkContainer>
        <LinkContainer to='/favourite'>
              <Nav.Link className='btn btn-light my-4 py-3 rounded'>Favourite</Nav.Link>
        </LinkContainer>
        <LinkContainer to='/search'>
              <Nav.Link className='btn btn-light my-4 py-3 rounded'>Search</Nav.Link>
        </LinkContainer>
        <LinkContainer to='/search'>
              <Nav.Link className='btn btn-light my-4 py-3 rounded'>My Opinions</Nav.Link>
        </LinkContainer>
        <LinkContainer to='/settings'>
              <Nav.Link className='btn btn-light my-4 py-3 rounded'>Account Settings</Nav.Link>
        </LinkContainer>
        <LinkContainer to='/help'>
              <Nav.Link className='btn btn-light my-4 py-3 rounded'>Help</Nav.Link>
        </LinkContainer>
        </div>
        
  )
}

export default Sidebar