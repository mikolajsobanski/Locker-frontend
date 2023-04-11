import React, { useState} from "react";

import { Form, Button,ListGroup, Row, Col,Table, Container} from 'react-bootstrap'
import '../css/addProductScreen.css'


function AddProductScreen(){

  const [name, setName] = useState("");

  const handleNameChange = (event) => {
      setName(event.target.value)
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


return(
    <Container className="mainContainer-add" >
      <div className="break"></div>
        <h1 className="addYourImg-title">Podaj nazwe produktu</h1>
        <form className="addproduct-form" onSubmit={handleNameChange}>
      <label >
        <input 
          className="titleinput"
          type="text" 
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </label>
      
    </form>
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
                
                <form onSubmit={handleSubmit}>
      <label>Podaj cene produktu:
        <input 
          type="text" 
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
      </label>
      
    </form>
            </Col>
            <Col md={2}>
                Stan
                <form>
      <select value={Condition} onChange={handleChange}>
        <option value="Nowe">Nowe</option>
        <option value="Używane">Używane</option>
        <option value="Uszkodzone">Uszkodzone</option>
      </select>
    </form>

            </Col>
            <Col md={2}>Marka
            <form>
              <select value={Brand} onChange={handleBrandChange}>
                <option value="Nike">Nike</option>
                <option value="Adidas">Adidas</option>
                <option value="Puma">Puma</option>
              </select>
            </form>
            </Col>
            <Col md={2}>Kategoria
            <form>
              <select value={Category} onChange={handleCategoryChange}>
                <option value="Buty">Buty</option>
                <option value="Adidas">Adidas</option>
                <option value="Puma">Puma</option>
              </select>
            </form>
            </Col>
            <Col md={2}>Lokalizacja</Col>
            <Col md={2}>Lokalizacja</Col>
        </Row>
        <div className="break"></div>
        <h1 className="addYourImg-title">Dodaj opis produktu</h1>
        <form>
      <textarea className="description-panel" value={textarea} onChange={handleDescriptionChange} />
    </form>
    <div className="break"></div>
    <Button className="addproduct-button">Dodaj</Button>
    </Container>

)
}

export default AddProductScreen