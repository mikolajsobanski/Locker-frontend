import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import '../css/upfooter.css'

function Upfooter() {
  return (
        
        <div className='upfooter-container'>
            <Row className='rowUpfooter'>
              <Col md ={4}>
                <h3 className='header'>About us</h3>
                <div> How it works</div>
                <div> Investors</div>
                <div> Cos tam cos tam</div>
                <div> Cos tam cos tam</div>
                <div> Cos tam cos tam</div>
              </Col>
              <Col md ={4}>
                <h3  className='header'>Contact us</h3>
                <div>Contact</div>
                <div>Support</div>
                <div>Sponsorships</div>
              </Col>
              <Col md ={4}>
                <h3  className='header'>More information</h3>
                <div className='upfooter-divs'><a href='/thanksThem'>Using source</a></div>
              </Col>
            </Row>
        </div>
        
  )
}

export default Upfooter