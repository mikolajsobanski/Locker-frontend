import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { Form, Button, Container } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import Loader from '../components/Loader'
import Message from '../components/Message'
import FormContainer from '../components/FormContainer'
import { listProductsDetails, updateProduct } from '../actions/productActions'
import { PRODUCT_UPDATE_RESET } from '../constans/productConstants'
import { useNavigate } from "react-router-dom";
import { useParams } from 'react-router-dom';

function ProductEditScreen({  }) {
    

    const productId = useParams
    const reload = useNavigate()

    const [name, setName] = useState('')
    const [price, setPrice] = useState(0)
    const [image, setImage] = useState('')
    const [image2, setImage2] = useState('')
    const [image3, setImage3] = useState('')
    const [image4, setImage4] = useState('')
    const [brand, setBrand] = useState('')
    const [location, setLocation] = useState('')
    const [condition, setCondition] = useState('')
    const [phoneNumber, setPhoneNumber] = useState('')
    const [category, setCategory] = useState('')
    const [descripption, setDescription] = useState('')
    const [uploading, setUploading] = useState(false)

    


    const productUpdate = useSelector(state => state.productUpdate)
    const { error: errorUpdate, loading: loadingUpdate, success: successUpdate } = productUpdate

    const navigate = useNavigate();

    const dispatch = useDispatch()
    const { id } = useParams();
    const productDetails = useSelector(state => state.productDetails)
    const { loading, error, product } = productDetails

    useEffect(() => {
        if(successUpdate){
            dispatch({type:PRODUCT_UPDATE_RESET})
            reload('/profile')

        }else{
            
            if(!product.name || product._id !== Number(id)){
                dispatch(listProductsDetails(id))
                
            } else {
                setName(product.name)
                setPrice(product.price)
                setImage(product.image)
                setImage2(product.image2)
                setImage3(product.image3)
                setImage4(product.image4)
                setBrand(product.brand)
                setCategory(product.category)
                setDescription(product.descripption)
                setLocation(product.location)
                setPhoneNumber(product.phoneNumber)
                setCondition(product.condition)
            }
        }

       
        
        
    }, [dispatch, product, id, successUpdate])

    const submitHandler = (e) => {
        e.preventDefault()
        dispatch(updateProduct({
            _id: id,
            name,
            price,
            brand,
            condition,
            location,
            phoneNumber,
            descripption,
           // category,
            image,
            image2,
            image3,
            image4,
        }))
    }

    const uploadFileHandler = async (e) => {
        const file = e.target.files[0]
        const formData = new FormData()

        formData.append('image', file)
        formData.append('product_id', productId)

        setUploading(true)

        try {
            const config = {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            }

            const { data } = await axios.post('/api/products/upload/', formData, config)


            setImage(data)
            setUploading(false)

        } catch (error) {
            setUploading(false)
        }
    }

    return (
        <div>
            <Container>
            <Link to='/profile' className='btn btn-light my-3 rounded'>Go Back</Link>
           <FormContainer>
                <h1 className='text-center'>Edit Product</h1>
                {loadingUpdate && <Loader/>}
                {errorUpdate && <Message variant='danger'>{error}</Message>}

                
                        <Form onSubmit={submitHandler}>

                            <Form.Group >
                                <Form.Label>Name</Form.Label>
                                <Form.Control
                                type='name'
                                placeholder='Enter name'
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                >
                                </Form.Control>
                            </Form.Group>

                            <Form.Group controlId='price'>
                                <Form.Label>Price</Form.Label>
                                <Form.Control
                                    type='number'
                                    step="0.01"
                                    min={0}
                                    placeholder='Enter price'
                                    value={price}
                                    onChange={(e) => setPrice(e.target.value)}
                                >
                                </Form.Control>
                            </Form.Group>

                            <label for="brandDataList" class="form-label">Brand</label>
                            <input class="form-control" list="brandOptions" id="brandDataList" placeholder="Type to search..." value={brand} onChange={(e) => setBrand(e.target.value)}/>
                            <datalist id="brandOptions">
                                <option value="Adidas"/>
                                <option value="Nike"/>
                                <option value="Puma"/>
                                <option value="Under Amour"/>
                                <option value="New Balance"/>
                                <option value="Tefal"/>
                            </datalist>
                            


                            <Form.Group controlId='category'>
                                <Form.Label>Category</Form.Label>
                                <Form.Control

                                    type='text'
                                    placeholder='Enter category'
                                    value={category}
                                    onChange={(e) => setCategory(e.target.value)}
                                >
                                </Form.Control>
                            </Form.Group>

                            <label for="conditionDataList" class="form-label">Condition</label>
                            <input class="form-control" list="conditionOptions" id="conditionDataList" placeholder="Type to search..." value={condition} onChange={(e) => setCondition(e.target.value)}/>
                            <datalist id="conditionOptions">
                                <option value="Nowy"/>
                                <option value="Używany"/>
                                <option value="Uszkodzony"/>
                            </datalist>

                            <div class="mb-3">
                                <label for="formFileMultiple" class="form-label">Multiple files input example</label>
                                <input class="form-control" type="file" id="formFileMultiple" multiple />
                            </div>

                            <div class="mb-3">
                                <label for="formFile" class="form-label">Default file input example</label>
                                <input class="form-control" type="file" id="formFile"/>
                            </div>

                            <Form.Group controlId='image'>
                                <Form.Label>Image 1</Form.Label>
                                <Form.Control

                                    type='text'
                                    placeholder='Enter image'
                                    value={image}
                                    onChange={(e) => setImage(e.target.value)}
                                >
                                </Form.Control>
                                <input
                                    type="file"
                                    name="myImage"
                                    onChange={(event) => {
                                    console.log(event.target.files[0]);
                                    setImage(event.target.value)
                                    }}
                                />

                               
                            </Form.Group>

                            <Form.Group controlId='image'>
                                <Form.Label>Image 2</Form.Label>
                                <Form.Control

                                    type='text'
                                    placeholder='Enter image'
                                    value={image2}
                                    onChange={(e) => setImage(e.target.value)}
                                >
                                </Form.Control>
                                <input
                                    type="file"
                                    name="myImage"
                                    onChange={(event) => {
                                    console.log(event.target.files[0]);
                                    setImage(event.target.value)
                                    }}
                                />

                               
                            </Form.Group>

                            <Form.Group controlId='image'>
                                <Form.Label>Image 3</Form.Label>
                                <Form.Control

                                    type='text'
                                    placeholder='Enter image'
                                    value={image3}
                                    onChange={(e) => setImage(e.target.value)}
                                >
                                </Form.Control>
                                <input
                                    type="file"
                                    name="myImage"
                                    onChange={(event) => {
                                    console.log(event.target.files[0]);
                                    setImage(event.target.value)
                                    }}
                                />

                               
                            </Form.Group>

                            <Form.Group controlId='image'>
                                <Form.Label>Image 4</Form.Label>
                                <Form.Control

                                    type='text'
                                    placeholder='Enter image'
                                    value={image4}
                                    onChange={(e) => setImage(e.target.value)}
                                >
                                </Form.Control>
                                <input
                                    type="file"
                                    name="myImage"
                                    onChange={(event) => {
                                    console.log(event.target.files[0]);
                                    setImage(event.target.value)
                                    }}
                                />

                               
                            </Form.Group>

                            

                            <Form.Group controlId='location'>
                                <Form.Label>Location</Form.Label>
                                <Form.Control
                                    type='text'
                                    placeholder='Enter location'
                                    value={location}
                                    onChange={(e) => setLocation(e.target.value)}
                                >
                                </Form.Control>
                            </Form.Group>

                            <Form.Group controlId='phoneNumber'>
                                <Form.Label>Phone Number</Form.Label>
                                <Form.Control
                                    type='number'
                                    min={0}
                                    placeholder='Enter phone number'
                                    value={phoneNumber}
                                    onChange={(e) => setPhoneNumber(e.target.value)}
                                >
                                </Form.Control>
                            </Form.Group>

                           

                            <Form.Group controlId='description'>
                                <Form.Label>Description</Form.Label>
                                <Form.Control

                                    type='text'
                                    placeholder='Enter description'
                                    value={descripption}
                                    onChange={(e) => setDescription(e.target.value)}
                                >
                                </Form.Control>
                            </Form.Group>

                            <Button className=' mt-4' type='submit' variant='primary'>
                                Update
                            </Button>

                           
                        </Form>
                    

            </FormContainer >
            </Container>
        </div>

    )
}

export default ProductEditScreen