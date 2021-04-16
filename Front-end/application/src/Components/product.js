import React from 'react'
import axios from 'axios'
import StripeCheckout from 'react-stripe-checkout'
import { Link } from 'react-router-dom'
export default function Product(props) {
     const id = props.match.params.id
     console.log(id);
    const [product,setProduct] = React.useState([])
    function getOneProduct() {
        
        
        axios.get(process.env.REACT_APP_URL+'product/getoneproduct/'+id)
        .then(response=>setProduct(response.data))
        .catch(err=>console.log(err))
    }
    React.useEffect(() => {
        getOneProduct()
    }, [])
    return (
        <div>
            <div className="content2">
            
                    {
                            <div className="product">
                            <div className="block1">
                            <figure className="snip1249">
                                <div className="image">
                                    <img src={product.image} alt="sample90" /><i className="ion-ios-basketball-outline"></i>
                                </div>
                                <figcaption>
                                    <h2 >{product.name}</h2>
                                    <p>{product.description}</p>
                                    <div className="price">
                                       {product.price}
              </div>
              <StripeCheckout
              stripeKey="pk_test_51GvOJtHoHJ6GAlKzE20xPmteK0w445VUJLliFDpeHL9VsprJ6HNudFzZxl2hBjcORkr31GIewea2CUJ9p7UmbpFl00v8lJBdxQ"
              />
                                    <Link to="chek" className="add-to-cart">Add to Cart</Link>
                                </figcaption>
                            </figure>
                        </div>
                        </div>

                    }
                           
                
               
            </div>

        </div>
    )
}
