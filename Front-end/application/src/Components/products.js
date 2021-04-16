import React from 'react'
import axios from 'axios'
import Navbar from './Nav'
import { Link } from 'react-router-dom'
export default function Products() {
     
    const [products,setProducts] = React.useState([])
    function getProduct() {
        axios.get(process.env.REACT_APP_URL+'product/getproduct')
        .then(response=>setProducts(response.data))
        .catch(err=>console.log(err))
    }

    React.useEffect(() => {
        getProduct()
    }, [])
    return (
        <div>
            <div className="content2">
            <Navbar/> 
                    {
                        products.map(prd=>(
                            <div className="product">
                            <div className="block1">
                            <figure className="snip1249">
                                <div className="image">
                                    <img src={prd.image} alt="sample90" /><i className="ion-ios-basketball-outline"></i>
                                </div>
                                <figcaption>
                                    <h2 >{prd.name}</h2>
                                    <p>{prd.description}</p>
                                    <div className="price">
                                       {prd.price}
              </div>
                                    
                                    <button className="btn-round mr-5" key="{prd._id}"><Link to={'/product/'+prd._id+'?'}>done</Link> </button>
                                </figcaption>
                            </figure>
                        </div>
                        </div>

                        ))
                    }
                           
                
               
            </div>
            {/* <div class="footer-dark">
        <footer class="footer">
            <div class="container">
                <div class="row">
                    <div class="col-sm-6 col-md-3 item">
                        <h3>Services</h3>
                        <ul>
                            <li><a href="#">Products</a></li>
                            <li><a href="#">Sign Up</a></li>
                            <li><a href="#">Sign In</a></li>
                            <li><a href="#">Checkout</a></li>
                        </ul>
                    </div>
                    <div class="col-sm-6 col-md-3 item">
                        <h3>About</h3>
                        <ul>
                            <li><a href="#">Company</a></li>
                            <li><a href="#">Team</a></li>
                            <li><a href="#">Careers</a></li>
                        </ul>
                    </div>
                    <div class="col-md-6 item text">
                        <h3>Lupin</h3>
                        
                        
                    </div>
                    <div class="col item social"><a href="#"><i class="icon ion-social-facebook"></i></a><a href="#"><i class="icon ion-social-twitter"></i></a><a href="#"><i class="icon ion-social-snapchat"></i></a><a href="#"><i class="icon ion-social-instagram"></i></a></div>
                </div>
                <p class="copyright">Lupin © 2021</p>
            </div>
        </footer>
    </div> */}
        </div>
    )
}
