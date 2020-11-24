import React from 'react';
import { Link } from 'react-router-dom';
import * as Styled from './styled';

const HeaderComp: React.FC = () => {

    const onHandleChange = (e: any) => {
        const name = e.target.name;
        const value = e.target.value;
        console.log(e.target.name + e.target.value)
    };

    const handleSubmit = (e: any) => {
        e.preventDefault();
        console.log("I am working handlesubmit")
    }

    return (
        <nav>
     
            {/* New Header */}

            <header className="header-style-2">
        <div className="wide-container-fluid">
            <div className="row">
                <div className="col-xs-2">
                <Link to="/" className="logo"> <img src="img/logo.png" alt="" width="80"/></Link>
                </div>
                <div className="col-xs-10 text-right">

                    <ul className="header-menu">
                   <li> <Link to="/" className="logo"><span>Home</span></Link></li>
                        <li>
                        <Link to="/"> <span>Categories</span></Link>
                            <ul>
                           <li><Link className="nav-link" to="/">Electronics</Link></li> 
                           <li> <Link className="nav-link" to="/">Computers</Link></li> 
                           <li> <Link to="/">Category Smart Home</Link></li> 
                           <li> <Link to="/">Arts Crafts</Link></li> 
                           <li> <Link to="/">See All</Link></li> 
                            </ul>
                        </li>
                        <li><Link to="/cart"><span>Cart</span></Link></li> 
                        <li><a href="contact.html"><span>Contact us</span></a></li>
                    </ul>

                    {/* basket */}
                    <div className="basket open-popup" data-rel="1">
                        <div className="img-wrapper">
                            <span>1</span>
                        </div>
                        <br/>
                        <p>total: <span>149.95&#36;</span></p>
                    </div>
                    {/* login */}
                    <div className="login-wrapper">
                        <div>    <Link className="nav-link" to="/login">Login</Link> &#47;  <Link className="nav-link" to="/register">Register</Link></div>
                    </div>     

                    <div className="hamburger-icon">
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                     <div className="hamburger-icon-2">
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </div>
            </div>
        </div>
    </header>
    {/* HEADER */}

    {/* OVERLAY-MENU */}
    <div className="overlay-wrapper">
        <div className="overlay-animation"></div>
        <div className="flex">
        <div className="flex-in">
        <div className="overlay-menu">
            <div className="container">
                <div className="row">
                    <div className="btn-close"><span></span><span></span></div>
                    <div className="col-md-2 col-md-offset-5">
                        {/* login */}
                        <div className="login-wrapper">
                            <div className="login hover-1 open-popup" data-rel="2">Log in &#47; Sing up</div>
                        </div> 
                        {/* basket */}
                        <div className="basket open-popup" data-rel="1">
                            <div className="img-wrapper">
                                <img src="img/shop/basket-2.png" alt=""/>
                                <span>1</span>
                            </div>
                            <br/>
                            <p>total: <span>149.95&#36;</span></p>
                        </div>
                        <ul>
                            <li className="active"><a href="index.html">Home</a></li>
                            <li><a href="about.html">About us</a></li>
                            <li><a href="service.html">Services</a></li>
                            <li className="dropdown-plus">
                                <a href="portfolio.html">Portfolio</a>
                                <span></span>
                                <ul>
                                    <li><a href="portfolio.html">Portfolio #1</a></li>
                                    <li><a href="portfolio_full.html">Portfolio #2</a></li>
                                </ul>
                            </li>
                            <li className="dropdown-plus">
                                <a href="blog.html">Blog</a>
                                <span></span>
                                <ul>
                                    <li><a href="post.html">Blog post</a></li>
                                </ul>
                            </li>
                            <li className="dropdown-plus">
                                <a href="shop.html">Products</a>
                                <span></span>
                                <ul>
                                    <li><a href="shop.html">Products #1</a></li>
                                    <li><a href="shop2.html">Products #2</a></li>
                                    <li><a href="shop3.html">Products #3</a></li>
                                    <li><a href="shopdetail.html">Detail products</a></li>
                                </ul>
                            </li>
                            <li><a href="checkout.html">Checkout</a></li>
                            <li><a href="contact.html">Contact us</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        </div>
        </div>
    </div>
    {/* end OVERLAY-MENU */}

      
        </nav>

        
    )
};

export default HeaderComp;