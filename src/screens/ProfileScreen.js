import React, {useState, useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { Form, Button,ListGroup, Row, Col,Table, Container} from 'react-bootstrap'
import Loader from '../components/Loader'
import Message from '../components/Message'
import FormContainer from '../components/FormContainer'
import Nav from 'react-bootstrap/Nav';
import { LinkContainer } from 'react-router-bootstrap'
import UserProduct from '../components/UserProduct'
import { listUserProducts, deleteProduct } from '../actions/productActions'


function ProfileScreen() {
      const dispatch = useDispatch()


    const userLogin = useSelector(state => state.userLogin)
    const { userInfo } = userLogin

    const productUserList = useSelector(state => state.productUserList)
    const { products, loading, error } = productUserList

    const productDelete = useSelector(state => state.productDelete)
    const { loading: loadingDelete, error: errorDelete, success: successDelete } = productDelete

    useEffect(() => {
      if (!userInfo) {
          
      }else{
            dispatch(listUserProducts())
      }
  }, [dispatch, successDelete])

 

  return (

    <Container>
    <Row>
        <Col md={3}>
        <LinkContainer to='/add'>
              <Nav.Link className='btn btn-light my-4 py-3 rounded'>Add something new</Nav.Link>
        </LinkContainer>
        <LinkContainer to='/search'>
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
        </Col>
        
        <Col md={9}>
            
            <div className='myLocker-box'>
                                <thead>
                                    <tr>
                                        Your Locker
                                    </tr>
                                </thead>

                                <tbody>
                                {loadingDelete && <Loader />}
                                {errorDelete && <Message variant='danger'>{errorDelete}</Message>}
                                {loading ? <Loader /> 
                                    : error ? <Message variant='danger'>{error}</Message>
                                        : 
                                        
                                        
                                            
                                            <Row>
                                                {products && products.map(product => (
                                                    <Col key={product._id} sm={12} md={6} lg={3} xl={4}>
                                                        <UserProduct product={product} />
                                                    </Col>
                                                ))
                                            
                                            }
                                            </Row>
                                            
                                        
                                        
                                        
                                            
                                }
                                </tbody>
            
            </div>

        </Col>
    </Row>
    </Container>
  )
}

export default ProfileScreen