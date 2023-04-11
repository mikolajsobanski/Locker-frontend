import React, {useState} from "react";
import { useDispatch, useSelector} from 'react-redux'
import { Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import '../css/stickyNavbar.css'
import {BiFootball} from 'react-icons/bi'
import {VscAccount} from 'react-icons/vsc'
import {BsChatTextFill} from 'react-icons/bs'
import {MdFavorite, MdNotifications} from 'react-icons/md'
import {IoMdAddCircle, IoMdInformationCircle} from 'react-icons/io'
import {FaHome, FaBasketballBall, FaBicycle, FaSwimmer,FaVolleyballBall,FaCannabis} from 'react-icons/fa'

export default function StickyNavbar(){

    const [fix, setFix] = useState(false)

    function setFixed(){
        if(window.scrollY >= 392){
            setFix(true)
        } else{
            setFix(false)
        }
    }

    window.addEventListener("scroll", setFixed)

    const userLogin = useSelector(state => state.userLogin)
    const { userInfo } = userLogin
    return(
        <header>
            <nav className={fix ? 'navbar-fixed' : 'navbar-hidden'}>
                <Row>
                <Col className="stickynavbar-col">
                <div className="stickynavbar-left">
                    <Link to={"/"}><FaHome /></Link>
                
                </div>
                
                {userInfo ? (<>
                    <div className="stickynavbar-right">
                        <Link className="stickynavbar-chat" to={"/add"} onClick={() => {window.scroll(0, 0);}}><IoMdAddCircle /></Link>
                        <Link className="stickynavbar-chat" to={"/"}><MdNotifications /></Link>
                        <Link className="stickynavbar-chat" to={"/"}><MdFavorite /></Link>
                        <Link className="stickynavbar-chat" to={"/"}><BsChatTextFill /></Link>
                        <Link to={"/profile"}><VscAccount /></Link>
                    </div>
                </>) : (<>
                    <div className="stickynavbar-right">
                        
                        <Link className="stickynavbar-chat" to={"/football"}><BiFootball /></Link>
                        <Link className="stickynavbar-chat" to={"/"}><FaBicycle /></Link>
                        <Link className="stickynavbar-chat" to={"/"}><FaBasketballBall /></Link>
                        <Link className="stickynavbar-chat" to={"/"}><FaSwimmer/></Link>
                        <Link className="stickynavbar-chat" to={"/"}><IoMdInformationCircle /></Link>
                        <Link to={"/login"}><VscAccount /></Link>
                    </div>
                </>)}
                
                
                </Col>
                </Row>
                
            </nav>
        </header>

    )
}