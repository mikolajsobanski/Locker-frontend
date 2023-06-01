import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import {BiFootball} from 'react-icons/bi'
import {FaBasketballBall, FaBicycle, FaSwimmer,FaVolleyballBall,FaCannabis} from 'react-icons/fa'
import {GiTennisRacket, GiBoatFishing, GiBoxingGlove} from 'react-icons/gi'
import {CgGym, CgMore} from 'react-icons/cg'
import NavDropdown from 'react-bootstrap/NavDropdown';
import { LinkContainer } from 'react-router-bootstrap'

function Subheader(){
    return (
      <div className='div-subheader'>
        <Container className='subheader-container'>
            <Row className='subheader-row'>
              <Col className="subheader-button"><a href='/football' className='subheader-link'> <BiFootball/></a></Col>
              <Col className="subheader-button"><a href='/basketball' className='subheader-link'><FaBasketballBall/></a></Col>
              <Col className="subheader-button"><a href='/home' className='subheader-link'><CgGym/></a></Col>
              <Col className="subheader-button"><a href='/home' className='subheader-link'><GiTennisRacket/></a></Col>
              <Col className="subheader-button"><a href='/home' className='subheader-link'> <FaBicycle/></a></Col>
              <Col className="subheader-button"><a href='/home' className='subheader-link'> <FaSwimmer/></a></Col>
              <Col className="subheader-button"><a href='/home' className='subheader-link'><FaVolleyballBall/> </a></Col>
              <Col className="subheader-button">
              <NavDropdown title={<CgMore/>}>
                            <LinkContainer to='/profile'>
                            <NavDropdown.Item><GiBoatFishing/> Wędkarstwo</NavDropdown.Item>
                            </LinkContainer>
                            <LinkContainer to='/add'>
                            <NavDropdown.Item><GiBoxingGlove/> Sporty walki</NavDropdown.Item>
                            </LinkContainer>
                            <LinkContainer to='/favourite'>
                            <NavDropdown.Item>Taniec</NavDropdown.Item>
                            </LinkContainer>
                            <LinkContainer to='/help'>
                            <NavDropdown.Item><FaCannabis/> Palenie</NavDropdown.Item>
                            </LinkContainer>
              </NavDropdown>
              
                </Col>
            </Row>
          </Container>
      </div>
        
    )
}
export default Subheader;