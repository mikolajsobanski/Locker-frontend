import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import {BiFootball} from 'react-icons/bi'
import {FaBasketballBall, FaBicycle, FaSwimmer,FaVolleyballBall,FaCannabis} from 'react-icons/fa'
import {GiTennisRacket, GiBoatFishing, GiBoxingGlove} from 'react-icons/gi'
import {CgGym, CgMore} from 'react-icons/cg'
import NavDropdown from 'react-bootstrap/NavDropdown';
import { LinkContainer } from 'react-router-bootstrap'
import SearchBox from './SearchBox'
import '../css/searchPanel.css'
import VideoSection from './VideoSection'

function SearchPanel(){
    return (
      <div>
        <VideoSection/>
        <Container className='searchPanel-Container'>
            <div className='searchPanel-MainDiv'>
            <Row className='searchPanel-Row'>
                <h1 className='searchPanel-Title'>Wyszukaj swój przedmiot!</h1>
                <Col className='searchPanel-Col' md={2}>
                    ez
                </Col>
                <Col md={8}>
                    <SearchBox/>
                </Col>
                <Col md={1}>
                    <FaCannabis/>
                </Col>
            </Row>
            <Row>
            <FaBasketballBall/>
            <FaBicycle />
            <FaSwimmer />
            <FaVolleyballBall/>
            </Row>
            <Row className='searchPanel-RowDzialy'>
            <Col md={2}><div className='dzial-col'><a href='/ '  className='dzialy-link'>Damskie</a></div></Col>
            <Col md={2}><div className='dzial-col'><a href='/'  className='dzialy-link'>Męskie</a></div></Col>
            <Col md={2}><div  className='dzial-col'><a href='/'  className='dzialy-link'>Dziecięce</a></div></Col>
            <Col md={2}><div  className='dzial-col'><a href='/' className='dzialy-link'>Akcesoria</a></div></Col>
            </Row>
            </div>
            
            
        </Container>
      </div>
        
      
        
    )
}
export default SearchPanel;