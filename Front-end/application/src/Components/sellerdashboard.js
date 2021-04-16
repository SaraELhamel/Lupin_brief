import React from 'react'
import axios from 'axios'
import ProductList from './productList'
import { Link } from "react-router-dom";





export default function Dashboard() {
    
   console.log(process.env.REACT_APP_URL)
    const [data,setData] = React.useState([])
    React.useEffect(async() => {
        const res = await axios.get(process.env.REACT_APP_URL+'product/getproduct')
        setData(res.data)
        return () => {
            // cleanup
        }
    }, [])

    
    return (
        <div>
           

           <div>
        <div className="area" /><nav className="main-menu">
          <ul>
            <li>
              <a href="#">
                <i className="fa fa-list fa-2x" />
                <span className="nav-text">
                  All product
                </span>
              </a>
            </li>
            <li className="has-subnav">
              <Link to="/addproduct">
                <i className="fa fa-plus-square "/>
                <span className="nav-text">
                  Add product
                </span>
              </Link>
            </li>
            <li className="has-subnav">
              <a href="#">
              <i className="fa fa-list fa-2x" />      
                       <span className="nav-text">
                  Statistique
                </span>
              </a>
            </li>
           
            
           
           
          
           
          </ul>
         
        </nav>

       
      </div>
      <div>
           

           <table class="table">
               <tr>
               <th>name</th>
               <th>price</th>
               <th>description</th>
               <th>image</th>
               <th>owner</th>
               </tr>
               {data.map((product) => (
                       <ProductList data={product} key={product._id} />
                   ))}
              
               
           </table>   
           
       </div>
      </div>
    );
  }
 