import React, { useState } from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap'
import '../css/productSearchByPrice.css'

const ProductSearchByPrice = ({ onSearch }) => {
  const [minPrice, setMinPrice] = useState('');
  const [maxPrice, setMaxPrice] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    onSearch({ minPrice, maxPrice });
  };

  return (
    <Form onSubmit={handleSearch}>
        <Form.Label className='price-title'>Wyszukaj po cenie</Form.Label>
        <Row className='price-row'>
            <Col md={3}>
            <Form.Control
                type="number"
                placeholder="Minimalna cena"
                min={0}
                step="0.01"
                value={minPrice}
                onChange={(e) => setMinPrice(e.target.value)}
            />
            </Col>
            <Col md={3}>
            <Form.Control
                type="number"
                placeholder="Maksymalna cena"
                min={0}
                step="0.01"
                value={maxPrice}
                onChange={(e) => setMaxPrice(e.target.value)}
            />
            </Col>
            <Col md={1}>
            <Button variant='outline-success' class="btn btn-outline-secondary" type="submit">Szukaj</Button>
            
            </Col>
        
      
      

        </Row>
      
    </Form>
  );
};

export default ProductSearchByPrice;
