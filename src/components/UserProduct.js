import React, {useEffect} from 'react'
import { Button, Card, Col, Row } from 'react-bootstrap'
import Rating from './Rating'
import { Link } from 'react-router-dom'
import { FiEdit3 } from 'react-icons/fi'
import { MdDeleteForever } from 'react-icons/md'
import '../css/userProduct.css'
import {deleteProduct } from '../actions/productActions'
import { useDispatch, useSelector } from 'react-redux'
import Loader from '../components/Loader'
import Message from '../components/Message'


function UserProduct({ product }) {
    const dispatch = useDispatch()

    const productDelete = useSelector(state => state.productDelete)
    const { loading: loadingDelete, error: errorDelete, success: successDelete } = productDelete

    useEffect(() => {
        
    }, [dispatch, successDelete])

    const deleteHandler = (id) => {

        if (window.confirm('Are you sure you want to delete this product?')) {
            dispatch(deleteProduct(id))
        }
        }

  return (
    
    <Card className="userProductCard">
        <Link to={`/product/${product._id}`}>
            <Card.Img className='productImage' src={product.image} />
        </Link>

        <Card.Body>
        <Link to={`/product/${product._id}`}>
            <Card.Title as="div">
                <strong>{product.name}</strong>
            </Card.Title>
        </Link>

        <Card.Text as="h4">
            Price: {product.price}
        </Card.Text>

        <div className='editSection'>
        {loadingDelete && <Loader />}
        {errorDelete && <Message variant='danger'>{errorDelete}</Message>}

            <Link to={'/'} className='edit-icon' >
                
            </Link>
            <Link to={`/product/${product._id}/edit`}>
                <Button variant='light' >
                    <FiEdit3/>
                </Button>
            </Link>
            <Button className='delete-icon' onClick={() => deleteHandler(product._id)}>
                <MdDeleteForever/>
            </Button>
            
            
        </div>

        </Card.Body>
    </Card>
  )
}

export default UserProduct