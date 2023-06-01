import React from 'react'
import SearchPanel from '../components/SearchPanel'
import '../css/searchScreen.css'
import VideoSection from '../components/VideoSection'
import { useSelector } from 'react-redux';
import Product from '../components/Product'
import  { Row, Col, Container } from 'react-bootstrap'

function SearchScreen() {
  const productsByPriceList = useSelector(state => state.productPrice)
  const { products, error, loading } = productsByPriceList
  

  return (
    <div className='searchScreen-div'>
      <VideoSection />
      <Container>
      <div className='searchScreen-mainDiv'>
      <SearchPanel/>
      </div>
      <div className='searchScreen-results'>
        {products.length > 0 ? <h2 className='searchScreen-resultsTitle'>Wyniki wyszukiwania</h2> : null}
      <Row>
          {Array.isArray(products) ? products.map(product => (
            <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
                <Product product={product} />
            </Col>
            ))
                :
                null
          }
      </Row>
      </div>
      </Container>
      
      
    </div>
    
  )
}

export default SearchScreen