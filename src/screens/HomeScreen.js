import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import  { Row, Col } from 'react-bootstrap'
import { Container } from 'react-bootstrap'
import Product from '../components/Product'
import Loader from '../components/Loader'
import Message from '../components/Message'
import Paginate from '../components/Paginate'
import VideoSection from '../components/VideoSection'
import Header from '../components/Header'
import Subheader from '../components/Subheader'
import '../css/embla.css'
import CategoryNavigation from '../components/CategoryNavigation';

import { listProducts } from '../actions/productActions'
import SearchBox from '../components/SearchBox'
import EmblaCarousel from '../components/Carousel/EmblaCarousel'


const OPTIONS = {}
const SLIDE_COUNT = 5
const SLIDES = Array.from(Array(SLIDE_COUNT).keys())

 function HomeScreen({history}) {
    const dispatch = useDispatch()
    const productList = useSelector(state => state.productList)
    const { products, error, loading, page, pages } = productList
    let keyword = history
    useEffect(() => {
        dispatch(listProducts(keyword))
        
    
    }, [dispatch, keyword])
    
    

  return (
    
    <div className='home-container'>
        <VideoSection/>
        <CategoryNavigation />
        
        
        <div className='textbeforesearchbox'>Wyszukaj interesujący Cię przedmiot!</div>
        <div className='searchboxHome-div'>
        <SearchBox />
        </div>
        <Container className='selldzial-container'>
        <Row>
        <Col className='selldiv-box' md={5}> 
        <div className=''>
            <h4 className='selldiv-header'>Czas pozbyć sie zbędnych rzeczy?</h4>
            <div className='selldiv-button'><a href='/add'>Sprzedaj teraz</a></div>
            <div className='selldiv-howitworks'><a href='/'>Sprawdz jak to działa</a></div>
        </div>
        </Col>
        <Col className='dzialdiv-box' md={5}>
        <div className=''>
            <h4 className='selldiv-header'>Czas pozbyć sie zbędnych rzeczy?</h4>
            
            <div className='selldiv-howitworks'><a href='/'>Sprawdz jak to działa</a></div>
        </div>
        </Col>
        </Row>
        <Row>
            <Col md={3}><div className='dzial-col'><a href='/ '  className='dzialy-link'>Damskie</a></div></Col>
            <Col md={3}><div className='dzial-col'><a href='/'  className='dzialy-link'>Męskie</a></div></Col>
            <Col md={3}><div  className='dzial-col'><a href='/'  className='dzialy-link'>Dziecięce</a></div></Col>
            <Col md={3}><div  className='dzial-col'><a href='/' className='dzialy-link'>Akcesoria</a></div></Col>
            
        </Row>
        <Row>
            <Col md={3}><div className='dzial-col'><a href='/ '  className='dzialy-link'>Damskie</a></div></Col>
            <Col md={3}><div className='dzial-col'><a href='/'  className='dzialy-link'>Męskie</a></div></Col>
            
        </Row>
        <EmblaCarousel slides={SLIDES} options={OPTIONS} />
        </Container>
    
    {loading ? <Loader /> 
        : error ? <Message variant='danger'>{error}</Message>
            : 
            <Container>
            <div className='latestProduct'>
                
                <h1 className="text-center py-4">Latest Products</h1>
                
                <Row>
                    { products.map(product => (
                        <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
                            <Product product={product} />
                        </Col>
                    ))
                
                }
                </Row>
                <div className='paginator'><Paginate page={page} pages={pages} keyword={keyword} /></div>
                
            </div>
            </Container>
            
                
     }
    </div>
  )
}

export default HomeScreen