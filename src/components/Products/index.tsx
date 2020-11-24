import React from 'react';
import * as Styled from './styled';
import data from './data';
import { productManagementContext } from '../../store/productmgt.context';

const Products: React.FC = () => {

    return (
        <Styled.ProductContainer>
            <div className="shop" style={{marginTop: "2%"}}>
           {/*products */}
            <div className="container-fluid padding-100"> 

                <div className="empty-space h30-xs h65-md"></div>
                <form className="shop-form">
                    <div className="row">
                        <div className="col-sm-12 col-md-5 col-lg-5">
                            <div className="search">
                                <div className="input-wrapper search">
                                    <div className="input-style">
                                        <input id="inputSearch" name="name" type="text" className="input" required/>
                                        <label>Search</label>
                                        <div className="input-icon">
                                            <i className="fa fa-search" aria-hidden="true"></i>
                                            <input type="submit" id="searchsubmit" value=""/>
                                        </div>
                                    </div>
                                </div>
                                <div className="found">
                                    <p>found <span>127</span> items</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-12 col-md-7 col-lg-7">
                            <div className="inline-wrapper">    
                                <select name="sortby" className="select-box">
                                    <option disabled selected>Sort by</option>
                                    <option value="sort1">Sort1</option>
                                    <option value="sort2">Sort2</option>
                                    <option value="sort3">Sort3</option>
                                    <option value="sort4">Sort4</option>
                                </select>
                                <span className="input-txt-left">Show</span>
                                <select name="show" className="select-box">
                                    <option value="10">10</option>
                                    <option value="30">30</option>
                                    <option value="50">50</option>
                                </select>
                            </div>
                        </div>
                    </div>
                </form>

                <div className="empty-space h30-xs"></div>

                <div className="row">
                    <div className="col-md-10 col-sm-9 pull-right">
                        <div className="prod-item-wrapper">
                            {
                            data.products.length && data.products.map(product => 
                                <div className="shop-prod-item">
                                <a href="shopdetail.html" className="img-hover-1">
                                    <img src={product.image} alt=""/>
                                    <span className="shop-prod-item-hover">
                                        <span className="btn-2 open-popup" data-rel="4"><span>Quick view</span></span>
                                        <span className="btn-2"><span>add to cart</span></span>
                                        <i className="fa fa-heart-o fa-lg" aria-hidden="true"></i>
                                    </span>
                                </a>
                                <div className="description">
                                    <article>
                            <a href="shopdetail.html"><h6 className="h6 hover-1">{product.name}</h6></a>
                                        <div className="empty-space h5-xs"></div>
                                        <p>{product.description}</p>
                                    </article>
                                </div>
                                <span className="price">&#36;{product.price}<sup>00</sup></span>
                            </div>
                            )}
                        </div>
                        <div className="page-pagination">
                            <a href="#"><img src="img/shop/prev.png" alt=""/></a>
                            <a className="active" href="#">1</a>
                            <a href="#">2</a>
                            <a href="#">3</a>
                            <a href="#">4</a>
                            <a href="#">5</a>
                            <a href="#"><img src="img/shop/next.png" alt=""/></a>
                        </div>
                    </div>
                    <div className="col-md-2 col-sm-3">
                        <form className="shop-form-2">

                            <div className="empty-space h55-xs h20-sm"></div>

                            <h6 className="h6">FOR WHO</h6>
                            <div className="empty-space h10-xs"></div>
                            <label className="checkbox-entry">
                                <input type="checkbox" /><span>For women</span>
                            </label>
                            <label className="checkbox-entry">
                                <input type="checkbox" /><span>For men</span>
                            </label>
                            <label className="checkbox-entry">
                                <input type="checkbox" /><span>For kids</span>
                            </label>

                            <div className="empty-space h30-xs h45-md"></div>

                            <h6 className="h6">CATEGORY</h6>
                            <div className="empty-space h10-xs"></div>
                            <label className="checkbox-entry">
                                <input type="checkbox" /><span>All</span>
                            </label>
                            <label className="checkbox-entry">
                                <input type="checkbox" /><span>Curabitur fermentum</span>
                            </label>
                            <label className="checkbox-entry">
                                <input type="checkbox" /><span>Kitchen furniture</span>
                            </label>
                            <label className="checkbox-entry">
                                <input type="checkbox" /><span>Room for guest</span>
                            </label>
                            <label className="checkbox-entry">
                                <input type="checkbox" /><span>Main room</span>
                            </label>
                            <label className="checkbox-entry">
                                <input type="checkbox" /><span>Bedrooms</span>
                            </label>

                            <div className="empty-space h30-xs h45-md"></div>

                            <h6 className="h6">PRICE</h6>
                            <div className="empty-space h30-xs"></div>
                            <div id="slider-range"></div>
                            <div className="empty-space h20-xs"></div>
                         

                            <div className="empty-space h20-xs h35-md"></div>

                            <h6 className="h6">BRANDS</h6>
                            <div className="empty-space h10-xs"></div>
                            <label className="checkbox-entry">
                                <input type="checkbox" /><span>Black White</span>
                            </label>
                            <label className="checkbox-entry">
                                <input type="checkbox" /><span>Zebrano</span>
                            </label>
                            <label className="checkbox-entry">
                                <input type="checkbox" /><span>Delux</span>
                            </label>
                            <label className="checkbox-entry">
                                <input type="checkbox" /><span>Restoration Hardware</span>
                            </label>
                            <label className="checkbox-entry">
                                <input type="checkbox" /><span>Roche Bobois</span>
                            </label>
                            <label className="checkbox-entry">
                                <input type="checkbox" /><span>Edra</span>
                            </label>
                            <label className="checkbox-entry">
                                <input type="checkbox" /><span>Poliform</span>
                            </label>

                            <div className="empty-space h50-xs"></div>
                            <div className="btn-wrap"><a href="#" className="btn-2"><span>clear all filters</span></a></div>

                        </form>
                    </div>
                </div>
            </div>
            </div>
    
        </Styled.ProductContainer>
    )
    };
export default Products;
