import React, { useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom';

import  { Row, Col } from 'react-bootstrap'
function SearchBox() {
    const [keyword, setKeyword] = useState('')

    let history = useNavigate()

    const submitHandler = (e) => {
        e.preventDefault()
        console.log('dziala')
        console.log(`/?keyword=${keyword}`)
        console.log('dziala')
        if (keyword) {
            history(`/?keyword=${keyword}`)
        } else {
            history(history.push(history.location.pathname))
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
                    SEARCH
                    </Button>
                    </div>
                </div>
            </Form>
            </div>
        
        
    )
}

export default SearchBox