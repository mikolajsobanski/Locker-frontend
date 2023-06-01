import React, { useState} from "react";
import axios from "axios";
import { useDispatch, useSelector } from 'react-redux'
import { Form, Button,ListGroup, Row, Col,Table, Container} from 'react-bootstrap'
import '../css/addProductScreen.css'
import { createProduct } from "../actions/productActions";
import { useNavigate } from 'react-router-dom';


function AddProductScreen(){

  const dispatch = useDispatch()
  const reload = useNavigate()

  const [name, setName] = useState("");

  const handleNameChange = (event) => {
      setName(event.target.value)
    }
  
  const [phone, setPhone] = useState("");

  const handlePhoneChange = (event) => {
      setPhone(event.target.value)
    }

  const [location, setLocation] = useState("");

  const handleLocationChange = (event) => {
        setLocation(event.target.value)
      }

const [Condition, setCondition] = useState("");

const handleChange = (event) => {
    setCondition(event.target.value)
  }
const [Brand, setBrand] = useState("");

const handleBrandChange = (event) => {
    setBrand(event.target.value)
  }

const [Category, setCategory] = useState("");
const handleCategoryChange = (event) => {
    setCategory(event.target.value)
  }   

const [price, setPrice] = useState("");
const handleSubmit = (event) => {
    event.preventDefault();
    alert(`The name you entered was: ${price}`)
  }

const [selectedImage1, setSelectedImage1] = useState(null)
const [selectedImage2, setSelectedImage2] = useState(null)
const [selectedImage3, setSelectedImage3] = useState(null)
const [selectedImage4, setSelectedImage4] = useState(null)      
const [textarea, setTextarea] = useState(
  "The content of a textarea goes in the value attribute"
);
const handleDescriptionChange = (event) => {
  setTextarea(event.target.value)
}

const [uploading, setUploading] = useState(false)

const uploadFileHandler = async (event) => {
  console.log('file is uploading')
  const file = event.target.files[0]
  const formData = new FormData()

  formData.append('image', file)
  //formData.append('product_id', productId)
  setUploading(true)
  try{
    const config = {
      headers:{
        'Content-Type':'multipart/form-data'
      }
    }

    const {data} = await axios.post('/api/products/upload/', formData, config)
    
    selectedImage1(data)
    setUploading(false)

  }catch(error){
      setUploading(false)
  }
}

const submitHandler = (event) => {
  event.preventDefault()
  console.log(name)
  console.log(Condition)
  console.log(Category)
  console.log(price)
  console.log(Brand)
  console.log(phone)
  console.log(location)
  console.log(textarea)
  console.log(selectedImage1)
  console.log(selectedImage2)
  console.log(selectedImage3)
  console.log(selectedImage4)
  dispatch(createProduct(name,price,Brand,Condition,location,phone,Category,selectedImage1,selectedImage2,selectedImage3,selectedImage4,textarea))
  reload('/profile')
}

return(
    <Container className="mainContainer-add" >
      <div className="break"></div>
      <h1 className="text-center py-2">Podaj nazwe produktu</h1>
      <Form onSubmit={submitHandler}>
        <Form.Group controlId='name'>
          <Form.Control
            required
            type='text'
            placeholder='Enter product name'
            value={name}
            onChange={(e) => setName(e.target.value)}
            >
          </Form.Control>
        </Form.Group>
        <div className="break"></div>
        <Row>
            <h1 className="addYourImg-title">Dodaj swoje zdjęcia</h1>
            <Col md={3}>
            <div>
      
      {selectedImage1 && (
        <div>
        <img alt="not fount" width={"250px"} height={"180px"} src={URL.createObjectURL(selectedImage1)} />
        <br />
        <button onClick={()=>setSelectedImage1(null)}>Remove</button>
        </div>
      )}
      <br />
     
      <br /> 
      <input
        type="file"
        name="myImage"
        onChange={(event) => {
          console.log(event.target.files[0]);
          setSelectedImage1(event.target.files[0]);
          uploadFileHandler(event)
        }}
      />
      
    </div>
            </Col>
            <Col md={3}>
            <div>
      
      {selectedImage2 && (
        <div>
        <img alt="not fount" width={"250px"} height={"180px"} src={URL.createObjectURL(selectedImage2)} />
        <br />
        <button onClick={()=>setSelectedImage2(null)}>Remove</button>
        </div>
      )}
      <br />
     
      <br /> 
      <input
        type="file"
        name="myImage"
        onChange={(event) => {
          console.log(event.target.files[0]);
          setSelectedImage2(event.target.files[0]);
        }}
      />
    </div>
            </Col>
            <Col md={3}>
            <div>
      
      {selectedImage3 && (
        <div>
        <img alt="not fount" width={"250px"} height={"180px"} src={URL.createObjectURL(selectedImage3)} />
        <br />
        <button onClick={()=>setSelectedImage3(null)}>Remove</button>
        </div>
      )}
      <br />
     
      <br /> 
      <input
        type="file"
        name="myImage"
        onChange={(event) => {
          console.log(event.target.files[0]);
          setSelectedImage3(event.target.files[0]);
        }}
      />
    </div>
            </Col>
            <Col md={3}>
            <div>
      
      {selectedImage4 && (
        <div>
        <img alt="not fount" width={"250px"} height={"180px"} src={URL.createObjectURL(selectedImage4)} />
        <br />
        <button onClick={()=>setSelectedImage4(null)}>Remove</button>
        </div>
      )}
      <br />
     
      <br /> 
      <input
        type="file"
        name="myImage"
        onChange={(event) => {
          console.log(event.target.files[0]);
          setSelectedImage4(event.target.files[0]);
        }}
      />
      
    </div>
            </Col>
        </Row>
        <div className="break"></div>
        <Row className="multiRow">
            <Col md={2}>
            <Form.Group controlId='price'>
                    <Form.Label>Cena</Form.Label>
                    <Form.Control
                        required
                        type='number'
                        step="0.01"
                        min={0}
                        placeholder='Enter price'
                        value={price}
                        onChange={(e) => setPrice(e.target.value)}
                    >
                    </Form.Control>
            </Form.Group>
                
            </Col>
            <Col md={2}>
              
                Stan
                
                <select class="form-control form-control-sm mt-2 py-3" value={Condition} onChange={handleChange}>
                  <option>----</option>
                  <option value="Nowe">Nowe</option>
                  <option value="Używane">Używane</option>
                  <option value="Uszkodzone">Uszkodzone</option>
                </select>
              

            </Col>
            <Col md={2}>Marka
            <form>
              <select class="form-control form-control-sm mt-2 py-3" value={Brand} onChange={handleBrandChange}>
                <option>----</option>
                <option value="Nike">Nike</option>
                <option value="Adidas">Adidas</option>
                <option value="Puma">Puma</option>
              </select>
            </form>
            </Col>
            <Col md={2}>Kategoria
            <form>
              <select class="form-control form-control-sm mt-2 py-3" value={Category} onChange={handleCategoryChange}>
                <option>----</option>
                <option value="Buty">Buty</option>
                <option value="Adidas">Adidas</option>
                <option value="Puma">Puma</option>
              </select>
            </form>
            </Col>
            <Col md={2}>
            <Form.Group controlId='location'>
                    <Form.Label>Lokalizacja</Form.Label>
                    <Form.Control
                        required
                        type='text'
                        placeholder='Enter location'
                        value={location}
                        onChange={(e) => setLocation(e.target.value)}
                    >
                    </Form.Control>
                </Form.Group>

            </Col>
            <Col md={2}>
            <Form.Group controlId='phone'>
                    <Form.Label>Telefon</Form.Label>
                    <Form.Control
                        type='number'
                        min={0}
                        placeholder='Enter phone'
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                    >
                    </Form.Control>
                </Form.Group>
            </Col>
        </Row>
        <div className="break"></div>
        <h1 className="addYourImg-title">Dodaj opis produktu</h1>
        <form>
      <textarea className="description-panel" value={textarea} onChange={handleDescriptionChange} />
    </form>
    <div className="break"></div>
    <Button className="addproduct-button" type='submit' variant='primary' >Dodaj</Button>
    </Form>
    </Container>

)
}

export default AddProductScreen