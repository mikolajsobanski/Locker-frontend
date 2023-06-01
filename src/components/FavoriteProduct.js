import React, {useEffect} from 'react'
import { Button, Card, Col, Row } from 'react-bootstrap'
import Rating from './Rating'
import { Link } from 'react-router-dom'
import { FiEdit3 } from 'react-icons/fi'
import { MdDeleteForever } from 'react-icons/md'
import '../css/favoriteProduct.css'
import {deleteFavorite } from '../actions/productActions'
import { useDispatch, useSelector } from 'react-redux'
import Loader from '../components/Loader'
import Message from '../components/Message'
import {ImEarth} from 'react-icons/im'
import {AiFillHeart} from 'react-icons/ai'
import {FiSend} from 'react-icons/fi'


function FavoriteProduct({ product }) {
    const dispatch = useDispatch()

    const productDelete = useSelector(state => state.productDelete)
    const { loading: loadingDelete, error: errorDelete, success: successDelete } = productDelete

    useEffect(() => {
        
    }, [dispatch, successDelete])

    const deleteHandler = (id) => {

        if (window.confirm('Are you sure you want to delete this product from your favorites?')) {
            dispatch(deleteFavorite(id))
        }
        }

  return (
    
    <Card className="productFavoriteCard">
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

        <Card.Text as="h6">
            <ImEarth /> {product.location}
        </Card.Text>

        <div className='editSectionFavorite'>
        {loadingDelete && <Loader />}
        {errorDelete && <Message variant='danger'>{errorDelete}</Message>}

            <Link to={'/'} className='edit-icon' >
                <FiSend />
            </Link>
            
            <div className='deleteFavorite-icon' onClick={() => deleteHandler(product._id)}>
                <AiFillHeart/>
            </div>
            
            
        </div>

        </Card.Body>
    </Card>
  )
}

export default FavoriteProduct