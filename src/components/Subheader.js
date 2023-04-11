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
              <Col className="subheader-button"><BiFootball/><a href='/football' className='subheader-link'> Piłka nożna</a></Col>
              <Col className="subheader-button"><FaBasketballBall/><a href='/basketball' className='subheader-link'> Koszykówka</a></Col>
              <Col className="subheader-button"><CgGym/><a href='/home' className='subheader-link'> Siłownia</a></Col>
              <Col className="subheader-button"><GiTennisRacket/><a href='/home' className='subheader-link'> Tenis</a></Col>
              <Col className="subheader-button"><FaBicycle/><a href='/home' className='subheader-link'> Kolarstwo</a></Col>
              <Col className="subheader-button"><FaSwimmer/><a href='/home' className='subheader-link'> Pływanie</a></Col>
              <Col className="subheader-button"><FaVolleyballBall/><a href='/home' className='subheader-link'> Siatkówka</a></Col>
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