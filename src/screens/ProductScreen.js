import React, { useState, useEffect, useCallback } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { Link} from 'react-router-dom'
import { Row, Col , Image, ListGroup, Button, Card, Form, Container } from 'react-bootstrap'
import Loader from '../components/Loader'
import Message from '../components/Message'
import Rating from '../components/Rating'
import { listProductsDetails } from '../actions/productActions'
import { useParams } from 'react-router-dom';
import Header from '../components/Header'
import Product from '../components/Product'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import '../css/productScreen.css'
import DefaultLocker from '../DefaultLocker.jpg'

function ProductScreen({ match }){
    const dispatch = useDispatch()
    const { id } = useParams();
    const productDetails = useSelector(state => state.productDetails)
    const { loading, error, product } = productDetails
    useEffect(() => {
        dispatch(listProductsDetails(id))
        
    }, [dispatch, id])

    const productList = useSelector(state => state.productList)
    const { products, page, pages } = productList
    
  return (

    <div>
        <Container>
        <Link to='/' className='btn btn-light my-3 rounded'>Go Back</Link>
        {loading ? 
            <Loader />
            : error ?
                <Message variant='danger'>{error}</Message>
            :(
                //<Image src={product.image} alt={product.name} fluid />
                <div className='product-box'>
                    <Row >
                    <Col md={6}>
                        
                        <Carousel>
                
                {product.image ? <div className='sliderdiv'> <img className='sliderimg' src={product.image} />  </div>: <div><img src={DefaultLocker}></img></div>}
                {product.image2 ? <div className='sliderdiv'>  <img className='sliderimg'  src={product.image2} />  </div> : <div><img src={DefaultLocker}></img></div>}
                {product.image3 ? <div className='sliderdiv'> <img className='sliderimg' src={product.image3} />  </div> : <div><img src={DefaultLocker}></img></div>}
                {product.image4 ? <div className='sliderdiv'> <img className='sliderimg' src={product.image4} />  </div> : <div><img src={DefaultLocker}></img></div>}
                
            </Carousel>
                     </Col>


                        <Col md={4}>
                            <ListGroup variant="flush">
                                <ListGroup.Item>
                                    <h3>{product.name}</h3>
                                </ListGroup.Item>

                                <ListGroup.Item>
                                Category: {product.category}
                                Seller: {product.user}
                                </ListGroup.Item>

                                <ListGroup.Item>
                                <Row>
                                    <Col>
                                        Stan: {product.condition}
                                    </Col>
                                    <Col>
                                        Marka: Nike 
                                    </Col>
                                </Row>
                                </ListGroup.Item>

                                <ListGroup.Item>
                                    
                                    <Rating value={product.rating} text={`${product.numReviews} reviews`} color={'#f8e825'} />
                                </ListGroup.Item>

                                <ListGroup.Item>
                                    Price: ${product.price}
                                </ListGroup.Item>

                                <ListGroup.Item>
                                    Description: {product.descripption}
                                </ListGroup.Item>
                            </ListGroup>
                        </Col>

                        <Col md={2}>
                        <ListGroup variant="flush">
                        <ListGroup.Item>
                                <Row>
                                    <Col>Added:</Col>
                                    <Col>
                                        <strong>{product.createdt}</strong>
                                    </Col>
                                </Row>
                            </ListGroup.Item>

                            <ListGroup.Item>
                                <Row>
                                    <Col>Location:</Col>
                                    <Col>
                                        <strong>{product.location}</strong>
                                    </Col>
                                </Row>
                            </ListGroup.Item>

                            <ListGroup.Item>
                                Add to favourite
                            </ListGroup.Item>

                            <ListGroup.Item>
                                <details>
                                    <summary>Seller Phone</summary>
                                        <p></p>
                                        <p>mobile: {product.phoneNumber}</p>
                                </details>
                            </ListGroup.Item>

                            <ListGroup.Item>
                            <Form >
                                                    <Form.Group controlId='rating'>
                                                        <Form.Label>Write to seller</Form.Label>
                                                        <Form.Control
                                                            as='select'
                                                        >
                                                            <option value=''>Select topic...</option>
                                                            <option value='1'>I want to buy it!</option>
                                                            <option value='2'>Some negotiations?</option>
                                                            <option value='3'>Deliver?</option>
                                                            <option value='4'>Quality</option>
                                                            <option value='5'>Else..</option>
                                                        </Form.Control>
                                                    </Form.Group>

                                                    <Form.Group controlId='body'>
                                                        <Form.Label></Form.Label>
                                                        <Form.Control
                                                            as='textarea'
                                                            row='5'
                                                            
                                                        ></Form.Control>
                                                    </Form.Group>

                                                    <Button
                                                        
                                                        type='submit'
                                                        variant='primary'
                                                    >
                                                        Send message
                                                    </Button>

                                                </Form>
                            </ListGroup.Item>
                        </ListGroup>
                    </Col>
                    
                    

                    </Row>
                
                </div>
       )    

              
    }
    <h1 className="text-center py-4">TODO Podobne produkty</h1>
    <Row>
        { products.map(product => (
            <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
                <Product product={product} />
            </Col>
            ))
                
        }
    </Row>
    </Container>
</div>
)

}

export default ProductScreen