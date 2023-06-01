import React, { useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import { useNavigate, useLocation } from 'react-router-dom';

import  { Row, Col } from 'react-bootstrap'
function SearchBox() {
    const [keyword, setKeyword] = useState('')

    let history = useNavigate()
    const location = useLocation();

    const submitHandler = (e) => {
        e.preventDefault()
        if (keyword) {
            history(`/?keyword=${keyword}&page=1`)
        } else {
            history(location.pathname)
        }
    }
    return (
        
            <div className='searchBox-div'>
            <Form  onSubmit={submitHandler}>
                <div className='searchBox-divs'>
                    <div className='searchBox-form'>
                    <Form.Control
                        type='text'
                        name='q'
                        onChange={(e) => setKeyword(e.target.value)}
                        className='searchBox-form'
                    ></Form.Control>
                    </div>
                </div>
                <div className='searchBox-divs'>
                    <div className='searchbox-button'>
                    <Button
                        type='submit'
                        variant='outline-success'
                        class="btn btn-outline-secondary"
                    >
                    Szukaj
                    </Button>
                    </div>
                </div>
            </Form>
            </div>
        
        
    )
}

export default SearchBox