import React, {useState, useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Col, Container, Row } from "react-bootstrap";
import Sidebar from "../components/Sidebar";
import Loader from '../components/Loader'
import Message from '../components/Message'
import '../css/favouriteScreen.css'
import { listUserFavourite } from "../actions/productActions";
import FavoriteProduct from '../components/FavoriteProduct'

function FavouriteScreen(){
    const dispatch = useDispatch()

    const userLogin = useSelector(state => state.userLogin)
    const { userInfo } = userLogin

    const favoriteList = useSelector(state => state.favoriteList)
    const { products, loading, error } = favoriteList

    useEffect(() => {
       dispatch(listUserFavourite())
        
    }, [dispatch])
  

    return(
        <Container>
            <Row>
                <Col md={3}>
                    <Sidebar />
                </Col>

                <Col md={9}>
                    <div className="favourite-box">
                    <thead>
                        <tr>
                            Your Favourite Items
                        </tr>
                    </thead>
                    <tbody>
    
                        {loading ? <Loader /> 
                            : error ? <Message variant='danger'>{error}</Message>
                                : 
                                            
                                <Row>
                                    {products && products.map(product => (
                                        <Col key={product._id} sm={12} md={6} lg={3} xl={4}>
                                            <FavoriteProduct product={product} />
                                        </Col>
                                    ))}
                                </Row>  
                        }
                    </tbody>
                    </div>
                    
                </Col>
            </Row>
        </Container>

    )
}
export default FavouriteScreen